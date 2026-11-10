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

  it.each([
    "https://bringasinsurance.com/es",
    "https://bringasinsurance.com/es/seguro-de-auto",
    "https://bringasinsurance.com/es/seguro-para-inquilinos",
  ])("allows canonical Spanish pages through to SSR: %s", (source) => {
    expect(classifyServerUrl(new URL(source))).toEqual({ kind: "continue" });
  });

  it("turns the old lang parameter into a Spanish campaign URL and preserves UTM attribution", () => {
    expect(
      classifyServerUrl(
        new URL(
          "https://bringasinsurance.com/auto-insurance?lang=es&utm_source=google&utm_campaign=autos",
        ),
      ),
    ).toEqual({
      kind: "redirect",
      status: 301,
      location:
        "https://bringasinsurance.com/es/seguro-de-auto?utm_source=google&utm_campaign=autos",
    });
  });

  it("redirects the temporary English slug under /es to the translated canonical slug", () => {
    expect(
      classifyServerUrl(
        new URL("https://bringasinsurance.com/es/renters-insurance"),
      ),
    ).toEqual({
      kind: "redirect",
      status: 301,
      location: "https://bringasinsurance.com/es/seguro-para-inquilinos",
    });
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
