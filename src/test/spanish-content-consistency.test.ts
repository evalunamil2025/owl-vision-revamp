import { describe, expect, it } from "vitest";
import es from "../i18n/locales/es";

type TranslationValue = string | Record<string, unknown>;

function collectStrings(
  value: TranslationValue,
  path = "es",
): Array<{ path: string; value: string }> {
  if (typeof value === "string") return [{ path, value }];

  return Object.entries(value).flatMap(([key, child]) => {
    if (typeof child === "string") {
      return [{ path: `${path}.${key}`, value: child }];
    }
    if (child && typeof child === "object") {
      return collectStrings(child as Record<string, unknown>, `${path}.${key}`);
    }
    return [];
  });
}

const strings = collectStrings(es as Record<string, unknown>);

describe("Spanish content consistency", () => {
  it("does not add English translations to Spanish titles", () => {
    const mixedTitles = strings.filter(
      ({ path, value }) =>
        path.endsWith(".title") &&
        (/\*\*/.test(value) ||
          /\b(?:Landlord|Mobile Home|General Liability|Commercial Auto|Commercial Property|Personal Umbrella|Liability Coverage)\b/i.test(
            value,
          )),
    );

    expect(mixedTitles).toEqual([]);
  });

  it("does not contain known English insurance glosses in Spanish copy", () => {
    const mixedCopy = strings.filter(({ value }) =>
      /\b(?:Actual Cash Value|Replacement Cost|open[ -]peril|tenant improvements|Cyber Liability|Hired & Non-Owned Auto|Workers'? Comp|Commercial Package Policy|Combined Single Limit|Bodily Injury Liability|Property Damage Liability|Bid Bonds|Performance Bonds|Payment Bonds|Maintenance Bonds|Additional Insured|Waiver of Subrogation|Dram Shop|hit-and-run|no-fault)\b/i.test(
        value,
      ),
    );

    expect(mixedCopy).toEqual([]);
  });
});
