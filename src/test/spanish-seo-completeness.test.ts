import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import {
  ENGLISH_TO_SPANISH_ROUTES,
  SPANISH_TO_ENGLISH_ROUTES,
} from "../config/localized-routes";
import { SEO_ROUTES } from "../config/seo";
import { SPANISH_SEO_ROUTES } from "../config/seo-es";
import { VALID_ROUTES } from "../config/redirects";

describe("Spanish SEO completeness", () => {
  it("has a translated, reversible URL for every English page", () => {
    expect(Object.keys(ENGLISH_TO_SPANISH_ROUTES).sort()).toEqual(
      [...VALID_ROUTES].sort(),
    );
    expect(new Set(Object.values(ENGLISH_TO_SPANISH_ROUTES)).size).toBe(
      VALID_ROUTES.length,
    );

    for (const englishPath of VALID_ROUTES) {
      const spanishPath = ENGLISH_TO_SPANISH_ROUTES[englishPath];
      if (!spanishPath)
        throw new Error(`Missing Spanish route for ${englishPath}`);
      expect(spanishPath).toMatch(/^\/es(?:\/|$)/);
      expect(SPANISH_TO_ENGLISH_ROUTES[spanishPath]).toBe(englishPath);
      if (englishPath !== "/") {
        expect(spanishPath).not.toBe(`/es${englishPath}`);
      }
    }
  });

  it("has distinct Spanish title and meta description for every page", () => {
    expect(Object.keys(SPANISH_SEO_ROUTES).sort()).toEqual(
      [...VALID_ROUTES].sort(),
    );

    for (const englishPath of VALID_ROUTES) {
      const englishSeo = SEO_ROUTES[englishPath];
      const spanishSeo = SPANISH_SEO_ROUTES[englishPath];
      expect(spanishSeo?.title.length).toBeGreaterThan(20);
      expect(spanishSeo?.description.length).toBeGreaterThan(70);
      expect(spanishSeo?.title).not.toBe(englishSeo?.title);
      expect(spanishSeo?.description).not.toBe(englishSeo?.description);
    }
  });

  it("publishes every English and Spanish canonical URL in the sitemap", () => {
    const sitemap = readFileSync("public/sitemap.xml", "utf8");
    for (const englishPath of VALID_ROUTES) {
      expect(sitemap).toContain(
        `<loc>https://bringasinsurance.com${englishPath}</loc>`,
      );
      expect(sitemap).toContain(
        `<loc>https://bringasinsurance.com${ENGLISH_TO_SPANISH_ROUTES[englishPath]}</loc>`,
      );
    }
  });
});
