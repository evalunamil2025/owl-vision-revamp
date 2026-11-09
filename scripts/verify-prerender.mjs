import { readFile } from "node:fs/promises";
import path from "node:path";
import policy from "../server/seo-policy.json" with { type: "json" };

const root = process.cwd();
const distDirectory = path.join(root, "dist");
const measurementId = "G-5QM8V0WQ00";
const failures = [];
const titles = new Set();
const descriptions = new Set();

const count = (html, expression) => [...html.matchAll(expression)].length;
const first = (html, expression) => html.match(expression)?.[1] || "";

for (const route of policy.validRoutes) {
  const file = route === "/"
    ? path.join(distDirectory, "index.html")
    : path.join(distDirectory, route.slice(1), "index.html");
  const html = await readFile(file, "utf8");
  const title = first(html, /<title[^>]*>([^<]+)<\/title>/i);
  const description = first(html, /<meta[^>]+name="description"[^>]+content="([^"]+)"[^>]*>/i);
  const canonical = first(html, /<link[^>]+rel="canonical"[^>]+href="([^"]+)"[^>]*>/i);
  const text = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ");
  const words = text.match(/\b[\p{L}\p{N}][\p{L}\p{N}-]*\b/gu)?.length || 0;
  const links = count(html, /<a\b/gi);

  if (count(html, /<h1\b/gi) !== 1) failures.push(`${route}: expected exactly one H1`);
  if (count(html, /rel="canonical"/gi) !== 1) failures.push(`${route}: expected exactly one canonical`);
  if (canonical !== `${policy.site}${route}`) failures.push(`${route}: incorrect canonical ${canonical}`);
  if (!title) failures.push(`${route}: missing title`);
  if (!description) failures.push(`${route}: missing description`);
  if (words < 200) failures.push(`${route}: only ${words} visible words`);
  if (links < 20) failures.push(`${route}: only ${links} crawlable links`);
  if (!html.includes(measurementId)) failures.push(`${route}: missing GA4 ${measurementId}`);
  if (!html.includes("send_page_view: false")) failures.push(`${route}: GA4 page-view deduplication missing`);
  if (html.includes("linkedin.com/in/bringas-insurance-54111bb1")) failures.push(`${route}: retired LinkedIn URL returned`);

  if (titles.has(title)) failures.push(`${route}: duplicate title ${title}`);
  if (descriptions.has(description)) failures.push(`${route}: duplicate description`);
  titles.add(title);
  descriptions.add(description);
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Verified ${policy.validRoutes.length} prerendered routes: unique metadata, H1, content, links and GA4.`);
