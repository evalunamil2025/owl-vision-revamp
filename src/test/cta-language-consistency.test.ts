import { readdirSync, readFileSync } from "node:fs";
import { extname, join, relative } from "node:path";
import { describe, expect, it } from "vitest";
import { ENGLISH_TO_SPANISH_ROUTES } from "../config/localized-routes";
import { localizeInternalPath } from "../lib/locale-path";

const ROOT = join(import.meta.dirname, "..");
const CTA_DIRS = ["components", "pages", "data", "routes"].map((dir) =>
  join(ROOT, dir),
);

function sourceFiles(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return sourceFiles(path);
    return [".ts", ".tsx"].includes(extname(path)) ? [path] : [];
  });
}

const files = CTA_DIRS.flatMap(sourceFiles);

describe("CTA language consistency", () => {
  it("does not bypass locale routing with raw internal anchors", () => {
    const violations = files.flatMap((file) => {
      const source = readFileSync(file, "utf8");
      return [...source.matchAll(/<a\b[^>]*\bhref\s*=\s*["']\/(?!\/)/gs)].map(
        () => relative(ROOT, file),
      );
    });

    expect(violations).toEqual([]);
  });

  it("keeps every literal internal CTA in the active language", () => {
    const targets = new Set<string>();

    for (const file of files) {
      const source = readFileSync(file, "utf8");
      const patterns = [
        /\bto\s*=\s*["'](\/[^"']*)["']/g,
        /\bhref\s*:\s*["'](\/[^"']*)["']/g,
      ];
      for (const pattern of patterns) {
        for (const match of source.matchAll(pattern)) {
          if (match[1]) targets.add(match[1]);
        }
      }
    }

    const invalidTargets: string[] = [];
    for (const target of targets) {
      const pathname = target.split(/[?#]/, 1)[0] || "/";
      if (extname(pathname)) continue;
      const spanishPath = ENGLISH_TO_SPANISH_ROUTES[pathname];
      if (!spanishPath) {
        invalidTargets.push(target);
        continue;
      }

      expect(localizeInternalPath(target, "/auto-insurance")).toBe(target);
      expect(localizeInternalPath(target, "/es/seguro-de-auto")).toBe(
        target.replace(pathname, spanishPath),
      );
    }

    expect(invalidTargets).toEqual([]);
    expect(targets.size).toBeGreaterThan(20);
  });
});
