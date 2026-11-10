import { describe, expect, it } from "vitest";
import {
  addSpanishPrefix,
  isSpanishPath,
  localizeInternalPath,
  stripSpanishPrefix,
} from "../lib/locale-path";

describe("locale paths", () => {
  it("maps every canonical page between English and Spanish", () => {
    expect(addSpanishPrefix("/")).toBe("/es");
    expect(addSpanishPrefix("/auto-insurance")).toBe("/es/auto-insurance");
    expect(stripSpanishPrefix("/es/auto-insurance")).toBe("/auto-insurance");
  });

  it("keeps navigation inside the Spanish URL tree, including campaign queries", () => {
    expect(
      localizeInternalPath(
        "/quote?utm_source=google#form",
        "/es/auto-insurance",
      ),
    ).toBe("/es/quote?utm_source=google#form");
  });

  it("does not rewrite English navigation or accept unknown Spanish paths", () => {
    expect(localizeInternalPath("/contact", "/auto-insurance")).toBe(
      "/contact",
    );
    expect(isSpanishPath("/es/not-a-real-page")).toBe(false);
  });
});
