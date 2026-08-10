import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { GONE_PATHS, LEGACY_REDIRECTS, VALID_ROUTES, isGone, normalizePath, resolveLegacyRedirect } from "@/config/redirects";

const root = process.cwd();
const appSource = fs.readFileSync(path.join(root, "src/App.tsx"), "utf8");
const notFoundSource = fs.readFileSync(path.join(root, "src/pages/NotFound.tsx"), "utf8");
const seoSource = fs.readFileSync(path.join(root, "src/components/SEO.tsx"), "utf8");
const analyticsSource = fs.readFileSync(path.join(root, "src/lib/analytics.ts"), "utf8");
const indexSource = fs.readFileSync(path.join(root, "index.html"), "utf8");
const sitemapSource = fs.readFileSync(path.join(root, "public/sitemap.xml"), "utf8");
const auditCsv = fs.readFileSync(path.join(root, "seo/reports/gsc-url-audit.csv"), "utf8");

function parseCsvLine(line: string): string[] {
  const values: string[] = [];
  let value = "";
  let quoted = false;
  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    if (char === '"') {
      if (quoted && line[i + 1] === '"') {
        value += '"';
        i += 1;
      } else {
        quoted = !quoted;
      }
    } else if (char === "," && !quoted) {
      values.push(value);
      value = "";
    } else {
      value += char;
    }
  }
  values.push(value);
  return values;
}

function appRoutes(): string[] {
  return [...appSource.matchAll(/<Route path="([^"]+)"/g)].map((match) => match[1]);
}

function sitemapUrls(): string[] {
  return [...sitemapSource.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => new URL(match[1]).pathname);
}

describe("SEO routing contract", () => {
  it("keeps every audited CSV URL represented and the required columns intact", () => {
    const lines = auditCsv.trim().split(/\r?\n/);
    const header = parseCsvLine(lines[0]);
    const urls = lines.slice(1).map((line) => parseCsvLine(line)[0]);

    expect(header).toEqual([
      "URL", "Categoría GSC", "Debe indexarse", "HTTP actual", "HTTP final", "Destino actual",
      "Canonical", "Meta robots", "X-Robots-Tag", "En sitemap", "Enlaces internos", "Clasificación",
      "Acción recomendada", "Archivo responsable", "Nivel de riesgo", "Requiere revisión manual", "Observaciones",
    ]);
    expect(urls).toHaveLength(319);
    expect(new Set(urls).size).toBe(urls.length);
    expect(urls.every((url) => url.startsWith("https://bringasinsurance.com/"))).toBe(true);
  });

  it("keeps the sitemap unique and restricted to explicit application routes", () => {
    const routes = new Set(appRoutes().map((route) => route === "/" ? "/" : route.replace(/\/$/, "")));
    const urls = sitemapUrls();

    expect(urls).toHaveLength(26);
    expect(new Set(urls).size).toBe(urls.length);
    expect(urls.every((url) => routes.has(url === "/" ? "/" : url.replace(/\/$/, "")))).toBe(true);
  });

  it("has an explicit wildcard route and a client-side noindex fallback", () => {
    expect(appSource).toContain('<Route path="*" element={<NotFound />} />');
    expect(notFoundSource).toContain("noindex");
    expect(notFoundSource).toContain("isGone");
  });

  it("generates self-referencing canonicals for indexable routes and omits them for noindex", () => {
    expect(seoSource).toContain("<link rel=\"canonical\" href={url} />");
    expect(seoSource).toContain('<meta name="robots" content="noindex, follow" />');
    expect(seoSource).toContain("!noindex");
  });

  it("does not contain repository-level redirect rules that could create mass redirects", () => {
    const forbiddenConfigs = ["vercel.json", "netlify.toml", "public/_redirects", ".htaccess"];
    expect(forbiddenConfigs.every((file) => !fs.existsSync(path.join(root, file)))).toBe(true);
  });

  it("does not count unknown SPA fallback routes as Analytics pages", () => {
    expect(indexSource).toContain("send_page_view: false");
    expect(analyticsSource).toContain("VALID_ROUTES.includes(cleanPath)");
    expect(analyticsSource).toContain('"page_view"');
    expect(notFoundSource).toContain('"page_not_found"');
  });
});

describe("Authoritative URL policy invariants", () => {
  it("keeps App routes, VALID_ROUTES and sitemap exactly synchronized", () => {
    const routes = appRoutes().filter((route) => route !== "*").map(normalizePath).sort();
    expect(routes).toEqual([...VALID_ROUTES].sort());
    expect(sitemapUrls().map(normalizePath).sort()).toEqual([...VALID_ROUTES].sort());
  });

  it("resolves the manufactured-home legacy slug and its Spanish variant", () => {
    expect(resolveLegacyRedirect("/seguro-para-casas-prefabricadas-en-seattle-washington/"))
      .toBe("/mobile-home-insurance");
    expect(resolveLegacyRedirect("/es/seguro-para-casas-prefabricadas-en-seattle-washington/"))
      .toBe("/mobile-home-insurance");
  });

  it("has only single-hop, loop-free redirects to valid routes", () => {
    for (const [source, target] of Object.entries(LEGACY_REDIRECTS)) {
      expect(source).not.toBe(target);
      expect(VALID_ROUTES).toContain(target);
      expect(LEGACY_REDIRECTS[target]).toBeUndefined();
    }
  });

  it("never marks a valid or redirected path Gone", () => {
    expect(VALID_ROUTES.some(isGone)).toBe(false);
    expect(Object.keys(LEGACY_REDIRECTS).some(isGone)).toBe(false);
    expect(GONE_PATHS.some((path) => VALID_ROUTES.includes(path))).toBe(false);
  });

  it("emits clean, consistently slashless canonical paths", () => {
    for (const route of VALID_ROUTES) {
      expect(route).not.toMatch(/[?#]/);
      if (route !== "/") expect(route).not.toMatch(/\/$/);
    }
  });
});

describe("Optional live SEO contract", () => {
  it.skipIf(!process.env.SEO_LIVE_BASE_URL)("checks HTTP, redirect, robots and sitemap signals against a deployed site", async () => {
    const baseUrl = process.env.SEO_LIVE_BASE_URL!.replace(/\/$/, "");
    const unknown = await fetch(`${baseUrl}/seo-test-unknown-${Date.now()}/`, { redirect: "manual" });
    expect([404, 410]).toContain(unknown.status);
    expect(unknown.headers.get("location")).toBeNull();

    for (const pathname of sitemapUrls()) {
      const response = await fetch(`${baseUrl}${pathname}`, { redirect: "manual" });
      expect(response.status).toBe(200);
      expect(response.headers.get("location")).toBeNull();
      expect(response.headers.get("x-robots-tag")).not.toMatch(/noindex/i);
      const html = await response.text();
      expect(html).not.toMatch(/<meta[^>]+name=["']robots["'][^>]+noindex/i);
      expect(html).toMatch(/<link[^>]+rel=["']canonical["']/i);
    }
  }, 120_000);
});
