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
