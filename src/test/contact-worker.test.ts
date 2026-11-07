import { beforeEach, describe, expect, it, vi } from "vitest";
// The generated Worker is plain JavaScript and intentionally has no TypeScript declaration file.
// @ts-expect-error generated Cloudflare Worker module
import worker, { contactEmail, validateContact } from "../../cloudflare/worker.js";

const validContact = {
  name: "Jane Doe",
  email: "jane@example.com",
  phone: "425-555-0100",
  interest: "home",
  message: "I need a homeowners quote.",
  website: "",
  locale: "en",
  submissionId: "test-submission-1",
};

describe("contact form Worker", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("validates required fields and rejects unknown insurance interests", () => {
    expect(validateContact(validContact)).toHaveProperty("contact");
    expect(validateContact({ ...validContact, interest: "unknown" })).toEqual({ error: "invalid_interest" });
    expect(validateContact({ ...validContact, email: "not-an-email" })).toEqual({ error: "invalid_email" });
  });

  it("escapes user content in the HTML email", () => {
    const email = contactEmail({ ...validContact, name: "<script>alert(1)</script>" });
    expect(email.html).toContain("&lt;script&gt;alert(1)&lt;/script&gt;");
    expect(email.html).not.toContain("<script>");
  });

  it("sends one email to both configured recipients", async () => {
    const providerFetch = vi.fn().mockResolvedValue(new Response(JSON.stringify({ id: "email-1" }), { status: 200 }));
    vi.stubGlobal("fetch", providerFetch);

    const request = new Request("https://bringasinsurance.com/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json", origin: "https://bringasinsurance.com" },
      body: JSON.stringify(validContact),
    });
    const response = await worker.fetch(request, {
      RESEND_API_KEY: "test-key",
      CONTACT_FROM_EMAIL: "website@bringasinsurance.com",
    });

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ ok: true });
    expect(providerFetch).toHaveBeenCalledOnce();
    const [, options] = providerFetch.mock.calls[0];
    const payload = JSON.parse(options.body);
    expect(payload.to).toEqual(["raul@bringasinsurance.com", "info@bringasinsurance.com"]);
    expect(payload.reply_to).toBe("jane@example.com");
  });

  it("does not call the email provider for honeypot submissions", async () => {
    const providerFetch = vi.fn();
    vi.stubGlobal("fetch", providerFetch);
    const request = new Request("https://bringasinsurance.com/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json", origin: "https://bringasinsurance.com" },
      body: JSON.stringify({ ...validContact, website: "spam.example" }),
    });

    const response = await worker.fetch(request, {});
    expect(response.status).toBe(200);
    expect(providerFetch).not.toHaveBeenCalled();
  });

  it("returns a controlled error when the email provider is unavailable", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("network unavailable")));
    const request = new Request("https://bringasinsurance.com/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json", origin: "https://bringasinsurance.com" },
      body: JSON.stringify(validContact),
    });

    const response = await worker.fetch(request, {
      RESEND_API_KEY: "test-key",
      CONTACT_FROM_EMAIL: "website@bringasinsurance.com",
    });
    expect(response.status).toBe(502);
    expect(await response.json()).toEqual({ ok: false, error: "delivery_failed" });
  });

  it("allows preflight requests only from the production website", async () => {
    const allowed = await worker.fetch(new Request("https://worker.example/api/contact", {
      method: "OPTIONS",
      headers: { origin: "https://bringasinsurance.com" },
    }), {});
    expect(allowed.status).toBe(204);
    expect(allowed.headers.get("access-control-allow-origin")).toBe("https://bringasinsurance.com");

    const blocked = await worker.fetch(new Request("https://worker.example/api/contact", {
      method: "OPTIONS",
      headers: { origin: "https://malicious.example" },
    }), {});
    expect(blocked.status).toBe(403);
  });
});

describe("SEO query normalization Worker", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it.each([
    ["https://www.bringasinsurance.com/contact", "https://bringasinsurance.com/contact"],
    ["http://bringasinsurance.com/contact?utm_source=test", "https://bringasinsurance.com/contact?utm_source=test"],
    ["http://www.bringasinsurance.com/favicon.png", "https://bringasinsurance.com/favicon.png"],
  ])("normalizes protocol and host for %s", async (source, destination) => {
    vi.stubGlobal("fetch", vi.fn());

    const response = await worker.fetch(new Request(source), {});

    expect(response.status).toBe(301);
    expect(response.headers.get("location")).toBe(destination);
    expect(fetch).not.toHaveBeenCalled();
  });

  it.each([
    ["https://bringasinsurance.com/?v=0096738646fe59e", "https://bringasinsurance.com/"],
    ["https://bringasinsurance.com/?tid=EPD86ss00Q0J9dndxqr3gD_wZWINOybdBeO", "https://bringasinsurance.com/"],
    ["https://bringasinsurance.com/?lang=es", "https://bringasinsurance.com/"],
    ["https://bringasinsurance.com/home-insurance?v=cache", "https://bringasinsurance.com/home-insurance"],
    ["https://bringasinsurance.com/home-insurance/", "https://bringasinsurance.com/home-insurance"],
    ["https://bringasinsurance.com/HOME-INSURANCE", "https://bringasinsurance.com/home-insurance"],
  ])("permanently redirects a duplicate %s to its clean canonical", async (source, destination) => {
    vi.stubGlobal("fetch", vi.fn());

    const response = await worker.fetch(new Request(source), {});

    expect(response.status).toBe(301);
    expect(response.headers.get("location")).toBe(destination);
    expect(fetch).not.toHaveBeenCalled();
  });

  it("removes only legacy noise and keeps campaign attribution parameters", async () => {
    vi.stubGlobal("fetch", vi.fn());

    const response = await worker.fetch(new Request(
      "https://bringasinsurance.com/?utm_source=newsletter&v=cache",
    ), {});

    expect(response.status).toBe(301);
    expect(response.headers.get("location")).toBe("https://bringasinsurance.com/?utm_source=newsletter");
  });

  it("continues serving valid URLs with non-noise query parameters", async () => {
    const originResponse = new Response("app", { status: 200 });
    const originFetch = vi.fn().mockResolvedValue(originResponse);
    vi.stubGlobal("fetch", originFetch);

    const response = await worker.fetch(new Request(
      "https://bringasinsurance.com/?utm_source=newsletter",
    ), {});

    expect(response).toBe(originResponse);
    expect(originFetch).toHaveBeenCalledOnce();
  });

  it("returns a real 404 for an unknown route without calling the SPA origin", async () => {
    const originFetch = vi.fn();
    vi.stubGlobal("fetch", originFetch);

    const response = await worker.fetch(new Request(
      "https://bringasinsurance.com/this-page-does-not-exist-seo-test",
    ), {});

    expect(response.status).toBe(404);
    expect(response.headers.get("x-robots-tag")).toBe("noindex");
    expect(originFetch).not.toHaveBeenCalled();
  });

  it.each([
    "/2025/08/test-spam-url",
    "/random-casino-test-url",
    "/jackpot-bonus",
    "/pin-up-casino",
    "/hondubet-offer",
    "/betiro-slots",
    "/free-coins-promo",
  ])("returns 410 for historical spam pattern %s", async (pathname) => {
    const originFetch = vi.fn();
    vi.stubGlobal("fetch", originFetch);

    const response = await worker.fetch(new Request(`https://bringasinsurance.com${pathname}`), {});

    expect(response.status).toBe(410);
    expect(response.headers.get("x-robots-tag")).toBe("noindex");
    expect(originFetch).not.toHaveBeenCalled();
  });
});
