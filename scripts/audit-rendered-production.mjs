import { spawnSync } from "node:child_process";
import { existsSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const base = (process.env.SEO_BASE_URL || "https://bringasinsurance.com").replace(/\/$/, "");
const chromeCandidates = [
  process.env.CHROME_PATH,
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
].filter(Boolean);
const chrome = chromeCandidates.find(existsSync);
const paths = ["/", "/auto-insurance", "/home-insurance", "/life-insurance", "/commercial-auto", "/contact"];

if (!chrome) {
  throw new Error("Chrome no está disponible; define CHROME_PATH.");
}

const attributes = (tag) => Object.fromEntries(
  [...tag.matchAll(/([\w:-]+)\s*=\s*(["'])(.*?)\2/g)].map((match) => [match[1].toLowerCase(), match[3]]),
);
const content = (html, expression) => {
  const match = html.match(expression);
  return match ? match[1].replace(/<[^>]*>/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim() : "";
};
const schemaTypes = (html) => [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)]
  .flatMap((match) => {
    try {
      const parsed = JSON.parse(match[1]);
      const values = Array.isArray(parsed) ? parsed : parsed?.["@graph"] || [parsed];
      return values.flatMap((value) => Array.isArray(value?.["@type"]) ? value["@type"] : [value?.["@type"] || "unknown"]);
    } catch {
      return ["invalid-json"];
    }
  });

const profile = mkdtempSync(join(tmpdir(), "bringas-seo-chrome-"));
try {
  for (const pathname of paths) {
    const result = spawnSync(chrome, [
      "--headless=new",
      "--disable-gpu",
      "--no-sandbox",
      "--disable-background-networking",
      "--virtual-time-budget=7000",
      `--user-data-dir=${profile}`,
      "--dump-dom",
      `${base}${pathname}`,
    ], { encoding: "utf8", timeout: 45000, maxBuffer: 20 * 1024 * 1024 });

    if (result.error || result.status !== 0) {
      console.log(JSON.stringify({
        phase: "POST_JAVASCRIPT_DOM",
        pathname,
        error: result.error?.message || `Chrome terminó con código ${result.status}`,
      }));
      continue;
    }

    const html = result.stdout;
    const metas = [...html.matchAll(/<meta\b[^>]*>/gi)].map((match) => attributes(match[0]));
    const links = [...html.matchAll(/<link\b[^>]*>/gi)].map((match) => attributes(match[0]));
    const internalPaths = new Set(
      [...html.matchAll(/<a\b[^>]*href=["']([^"']+)["']/gi)]
        .map((match) => {
          try {
            const url = new URL(match[1], base);
            return url.origin === new URL(base).origin ? url.pathname : null;
          } catch {
            return null;
          }
        })
        .filter(Boolean),
    );
    console.log(JSON.stringify({
      phase: "POST_JAVASCRIPT_DOM",
      pathname,
      title: content(html, /<title[^>]*>([\s\S]*?)<\/title>/i),
      description: metas.find((meta) => meta.name === "description")?.content || "",
      canonical: links.find((link) => (link.rel || "").toLowerCase() === "canonical")?.href || "",
      robots: metas.find((meta) => meta.name === "robots")?.content || "",
      h1: content(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i),
      schema: schemaTypes(html),
      internalPathCount: internalPaths.size,
      criticalLinksPresent: ["/sr22-insurance", "/pay-my-bill", "/client-center", "/carriers"]
        .filter((path) => internalPaths.has(path)),
    }));
  }
} finally {
  rmSync(profile, { recursive: true, force: true });
}
