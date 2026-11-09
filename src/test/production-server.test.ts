import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import type { Server } from "node:http";
// The production server is JavaScript so it can run directly on any Node host.
// @ts-expect-error no declaration file is needed for the deployment module
import { createProductionServer, validateContact } from "../../server/production-server.mjs";
// @ts-expect-error generated JavaScript policy module
import { classifyUrl } from "../../server/url-policy.mjs";
import { VALID_ROUTES } from "@/config/redirects";

describe("Node hosting URL policy", () => {
  it.each([
    ["https://www.bringasinsurance.com/contact", "https://bringasinsurance.com/contact"],
    ["http://bringasinsurance.com/contact", "https://bringasinsurance.com/contact"],
    ["https://bringasinsurance.com/contact?v=cache", "https://bringasinsurance.com/contact"],
    ["https://bringasinsurance.com/HOME-INSURANCE/", "https://bringasinsurance.com/home-insurance"],
  ])("normalizes %s", (source, target) => {
    const url = new URL(source);
    const result = classifyUrl(url, { host: url.host, protocol: url.protocol });
    expect(result).toMatchObject({ kind: "redirect", status: 301, location: target });
  });

  it("serves valid routes and rejects unknown and spam paths", () => {
    expect(classifyUrl(new URL("https://bringasinsurance.com/auto-insurance")))
      .toMatchObject({ kind: "page", status: 200, path: "/auto-insurance" });
    expect(classifyUrl(new URL("https://bringasinsurance.com/unknown-seo-test")))
      .toMatchObject({ kind: "error", status: 404 });
    expect(classifyUrl(new URL("https://bringasinsurance.com/random-casino-test-url")))
      .toMatchObject({ kind: "error", status: 410 });
  });

  it("redirects every www application route directly to the HTTPS apex", () => {
    for (const route of VALID_ROUTES) {
      const source = new URL(`https://www.bringasinsurance.com${route}`);
      expect(classifyUrl(source, { host: source.host, protocol: source.protocol })).toMatchObject({
        kind: "redirect",
        status: 301,
        location: `https://bringasinsurance.com${route}`,
      });
    }
  });
});

describe("Node production server", () => {
  let server: Server;
  let baseUrl: string;

  beforeAll(async () => {
    server = createProductionServer();
    await new Promise<void>((resolve) => server.listen(0, "127.0.0.1", resolve));
    const address = server.address();
    if (!address || typeof address === "string") throw new Error("Test server did not bind");
    baseUrl = `http://127.0.0.1:${address.port}`;
  });

  afterAll(async () => {
    await new Promise<void>((resolve, reject) => server.close((error) => error ? reject(error) : resolve()));
  });

  it("exposes a health check without requiring the canonical host", async () => {
    const response = await fetch(`${baseUrl}/healthz`, {
      headers: { host: "bringas-insurance.onrender.com" },
    });
    expect(response.status).toBe(200);
    expect(await response.text()).toBe("ok");
  });

  it("returns real HTTP statuses and route-specific initial metadata", async () => {
    const page = await fetch(`${baseUrl}/contractors-insurance`, {
      headers: { host: "bringasinsurance.com", "x-forwarded-proto": "https" },
    });
    expect(page.status).toBe(200);
    const html = await page.text();
    expect(html).toContain("Contractor Insurance in Washington | Bringas Insurance");
    expect(html).toContain('rel="canonical" href="https://bringasinsurance.com/contractors-insurance"');
    expect(html.match(/<h1\b/gi)).toHaveLength(1);
    expect(html.match(/<a\b/gi)?.length).toBeGreaterThanOrEqual(20);
    expect(html).toContain("G-5QM8V0WQ00");

    const unknown = await fetch(`${baseUrl}/unknown-seo-test`, {
      headers: { host: "bringasinsurance.com", "x-forwarded-proto": "https" },
    });
    expect(unknown.status).toBe(404);
    expect(unknown.headers.get("x-robots-tag")).toBe("noindex");

    const gone = await fetch(`${baseUrl}/casino-bonus-code`, {
      headers: { host: "bringasinsurance.com", "x-forwarded-proto": "https" },
    });
    expect(gone.status).toBe(410);
  });

  it("serves public SEO files", async () => {
    for (const pathname of ["/robots.txt", "/sitemap.xml", "/llms.txt"]) {
      const response = await fetch(`${baseUrl}${pathname}`, {
        headers: { host: "bringasinsurance.com", "x-forwarded-proto": "https" },
      });
      expect(response.status).toBe(200);
    }
  });

  it("validates contact payloads without exposing secrets", () => {
    expect(validateContact({})).toEqual({ error: "invalid_name" });
    expect(validateContact({ website: "bot" })).toEqual({ spam: true });
    expect(validateContact({
      name: "Test User", email: "test@example.com", phone: "4255550100",
      interest: "auto", message: "Please contact me", website: "",
    })).toHaveProperty("contact.email", "test@example.com");
    expect(vi.isMockFunction(fetch)).toBe(false);
  });
});
