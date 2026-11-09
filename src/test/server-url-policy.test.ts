import { describe, expect, it } from "vitest";

import { classifyServerUrl } from "../lib/server-url-policy";

describe("server URL SEO policy", () => {
  it.each([
    [
      "https://www.bringasinsurance.com/contact",
      "https://bringasinsurance.com/contact",
    ],
    [
      "http://bringasinsurance.com/contact",
      "https://bringasinsurance.com/contact",
    ],
    [
      "https://bringasinsurance.com/contact?v=cache",
      "https://bringasinsurance.com/contact",
    ],
    [
      "https://bringasinsurance.com/HOME-INSURANCE/",
      "https://bringasinsurance.com/home-insurance",
    ],
    [
      "https://bringasinsurance.com/contacto",
      "https://bringasinsurance.com/contact",
    ],
    [
      "https://bringasinsurance.com/es/auto-insurance",
      "https://bringasinsurance.com/auto-insurance",
    ],
  ])("redirects %s in one hop", (source, target) => {
    expect(classifyServerUrl(new URL(source))).toEqual({
      kind: "redirect",
      status: 301,
      location: target,
    });
  });

  it("allows canonical pages through to SSR", () => {
    expect(
      classifyServerUrl(new URL("https://bringasinsurance.com/auto-insurance")),
    ).toEqual({ kind: "continue" });
  });

  it("leaves unknown paths to TanStack so they become 404", () => {
    expect(
      classifyServerUrl(
        new URL("https://bringasinsurance.com/unknown-seo-test"),
      ),
    ).toEqual({ kind: "continue" });
  });

  it.each([
    "https://bringasinsurance.com/2025/08/13/wazamba-casino-spam",
    "https://bringasinsurance.com/wp-admin/",
    "https://bringasinsurance.com/random-casino-test-url",
  ])("returns 410 for removed or spam URL %s", (source) => {
    expect(classifyServerUrl(new URL(source))).toEqual({
      kind: "gone",
      status: 410,
    });
  });

  it("does not force the production hostname on Lovable previews", () => {
    expect(
      classifyServerUrl(
        new URL("https://preview--bringas.lovable.app/contact"),
      ),
    ).toEqual({ kind: "continue" });
  });
});
