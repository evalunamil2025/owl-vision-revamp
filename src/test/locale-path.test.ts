import { describe, expect, it } from "vitest";
import { ENGLISH_TO_SPANISH_ROUTES } from "../config/localized-routes";
import {
  addSpanishPrefix,
  canonicalizeSpanishPath,
  hasSpanishPrefix,
  isSpanishPath,
  localizeInternalPath,
  stripSpanishPrefix,
} from "../lib/locale-path";

describe("locale paths", () => {
  it("maps every canonical page between English and Spanish", () => {
    expect(addSpanishPrefix("/")).toBe("/es");
    expect(addSpanishPrefix("/auto-insurance")).toBe("/es/seguro-de-auto");
    expect(stripSpanishPrefix("/es/seguro-de-auto")).toBe("/auto-insurance");
  });

  it("keeps navigation inside the Spanish URL tree, including campaign queries", () => {
    expect(
      localizeInternalPath(
        "/quote?utm_source=google#form",
        "/es/seguro-de-auto",
      ),
    ).toBe("/es/cotizacion?utm_source=google#form");

    expect(localizeInternalPath("/boat-insurance", "/es/boat-insurance")).toBe(
      "/es/seguro-para-botes",
    );
  });

  it("canonicalizes temporary English slugs without losing Spanish context", () => {
    expect(hasSpanishPrefix("/es/boat-insurance")).toBe(true);
    expect(canonicalizeSpanishPath("/es/boat-insurance")).toBe(
      "/es/seguro-para-botes",
    );
    expect(canonicalizeSpanishPath("/es/seguro-para-botes")).toBe(
      "/es/seguro-para-botes",
    );
    expect(stripSpanishPrefix("/es/auto-insurance")).toBe("/auto-insurance");
    expect(canonicalizeSpanishPath("/es/not-a-real-page")).toBeNull();
  });

  it.each(Object.entries(ENGLISH_TO_SPANISH_ROUTES))(
    "canonicalizes the temporary Spanish namespace route for %s",
    (englishPath, spanishPath) => {
      const temporaryPath = englishPath === "/" ? "/es" : `/es${englishPath}`;
      expect(canonicalizeSpanishPath(temporaryPath)).toBe(spanishPath);
    },
  );

  it("does not rewrite English navigation or accept unknown Spanish paths", () => {
    expect(localizeInternalPath("/contact", "/auto-insurance")).toBe(
      "/contact",
    );
    expect(isSpanishPath("/es/not-a-real-page")).toBe(false);
  });
});
