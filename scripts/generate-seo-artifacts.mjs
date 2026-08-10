import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const redirectsSource = fs.readFileSync(path.join(root, "src/config/redirects.ts"), "utf8");
const gscFile = path.join(root, "seo/reports/gsc-url-audit.csv");
const SITE = "https://bringasinsurance.com";

const block = (name, end) => redirectsSource.match(new RegExp(`export const ${name}[^=]*= ([\\s\\S]*?)${end}`))?.[1] ?? "";
const validRoutes = [...block("VALID_ROUTES", "];" ).matchAll(/"([^"\r\n]+)"/g)].map((m) => m[1]);
const redirects = Object.fromEntries([...block("LEGACY_REDIRECTS", "};").matchAll(/"([^"\r\n]+)"\s*:\s*"([^"\r\n]+)"/g)].map((m) => [m[1], m[2]]));
const gonePaths = [...block("GONE_PATHS", "];" ).matchAll(/"([^"\r\n]+)"/g)].map((m) => m[1]);
const normalize = (value) => value.length > 1 ? value.replace(/\/+$/, "").toLowerCase() : value.toLowerCase();

function parseCsv(input) {
  const rows = []; let row = []; let value = ""; let quoted = false;
  for (let i = 0; i < input.length; i += 1) {
    const c = input[i];
    if (c === '"' && quoted && input[i + 1] === '"') { value += '"'; i += 1; }
    else if (c === '"') quoted = !quoted;
    else if (c === "," && !quoted) { row.push(value); value = ""; }
    else if ((c === "\n" || c === "\r") && !quoted) {
      if (c === "\r" && input[i + 1] === "\n") i += 1;
      row.push(value); if (row.some(Boolean)) rows.push(row); row = []; value = "";
    } else value += c;
  }
  if (value || row.length) { row.push(value); rows.push(row); }
  const headers = rows.shift() ?? [];
  return rows.map((values) => Object.fromEntries(headers.map((header, i) => [header, values[i] ?? ""])));
}

const csvEscape = (value) => `"${String(value ?? "").replaceAll('"', '""')}"`;
const writeCsv = (file, headers, rows) => fs.writeFileSync(file, `${headers.map(csvEscape).join(",")}\n${rows.map((r) => headers.map((h) => csvEscape(r[h])).join(",")).join("\n")}\n`);
const gone = (p) => gonePaths.includes(p)
  || /^\/wp-(admin|content|includes|json|login)(\/|$)/i.test(p)
  || /^\/(category|tag|feed|author|comments)(\/|$)/i.test(p)
  || /^\/\d{4}(\/|$)/.test(p)
  || /\.(php|htm|asp|aspx)$/i.test(p)
  || /(casino|gambling|betting|slots?|poker|game-?coins?|free-?spins?|bonus-?code)/i.test(p)
  || /^\/xmlrpc/i.test(p)
  || /^\/(shop|shopdetail|cart|checkout|myaccount|order|shopping)(\/|$)/i.test(p)
  || /^\/(vvip|claim|match|reward|mega|prime|new|grab|win|boost)[a-z]*-[a-z0-9]{5,}-/i.test(p);

const sourceRows = parseCsv(fs.readFileSync(gscFile, "utf8"));
const policy = new Map();
function add(sourceUrl, source, lastCrawl = "") {
  const url = new URL(sourceUrl); const p = normalize(decodeURI(url.pathname));
  let classification = "MANUAL_REVIEW", target = "", status = "review", canonical = "", reason = "No equivalent destination proven; manual review required.", layer = "manual";
  const plain = p.startsWith("/es/") ? p.slice(3) : p;
  const redirectTarget = redirects[p] || redirects[plain];
  if (validRoutes.includes(p) && url.search) { classification = "CANONICAL_ALTERNATE"; status = "200"; canonical = `${SITE}${p}`; reason = "Query-string duplicate of canonical route."; layer = "React SEO canonical"; }
  else if (validRoutes.includes(p)) { classification = "KEEP_200"; status = "200"; canonical = `${SITE}${p}`; reason = "Current indexable canonical route."; layer = "origin/application"; }
  else if (redirectTarget) { classification = "REDIRECT_301"; status = "301"; target = `${SITE}${redirectTarget}`; reason = "Equivalent migrated content is explicitly mapped."; layer = "Cloudflare redirect"; }
  else if (p === "/es") { classification = "REDIRECT_301"; status = "301"; target = `${SITE}/`; reason = "Temporary locale redirect until approved Spanish content exists."; layer = "Cloudflare redirect"; }
  else if (gone(p)) { classification = "GONE_410"; status = "410"; reason = "Retired WordPress, commerce, or injected spam URL."; layer = "Cloudflare WAF custom response"; }
  else if (p === "/random-nonexistent-url-12345") { classification = "NOT_FOUND_404"; status = "404"; reason = "Acceptance-test URL with no matching resource or redirect."; layer = "Cloudflare terminal 404"; }
  policy.set(sourceUrl, { source_url: sourceUrl, normalized_path: p, classification, target_url: target, expected_status: status, canonical, reason, source, last_crawl: lastCrawl, implementation_layer: layer, verified: "NO" });
}
for (const row of sourceRows) add(row.URL, `GSC: ${row["Categoría GSC"] || "export"}`, row["Último rastreo"] || "");
for (const p of validRoutes) add(`${SITE}${p}`, "VALID_ROUTES");
for (const p of Object.keys(redirects)) add(`${SITE}${p}`, "LEGACY_REDIRECTS");
add(`${SITE}/es/`, "locale policy");
add(`${SITE}/random-nonexistent-url-12345/`, "acceptance matrix");

fs.mkdirSync(path.join(root, "audit"), { recursive: true });
fs.mkdirSync(path.join(root, "cloudflare"), { recursive: true });
writeCsv(path.join(root, "audit/url-policy.csv"), ["source_url","normalized_path","classification","target_url","expected_status","canonical","reason","source","last_crawl","implementation_layer","verified"], [...policy.values()]);

const redirectRows = [];
for (const [from, to] of [...Object.entries(redirects), ["/es", "/"]]) {
  for (const suffix of ["", "/"]) redirectRows.push({ source_url: `${SITE}${from}${from === "/" ? "" : suffix}`, target_url: `${SITE}${to}`, status_code: 301, include_subdomains: "true", preserve_query_string: "false", subpath_matching: "false" });
  if (from !== "/es") for (const suffix of ["", "/"]) redirectRows.push({ source_url: `${SITE}/es${from}${suffix}`, target_url: `${SITE}${to}`, status_code: 301, include_subdomains: "true", preserve_query_string: "false", subpath_matching: "false" });
}
writeCsv(path.join(root, "cloudflare/bringas-redirects.csv"), ["source_url","target_url","status_code","include_subdomains","preserve_query_string","subpath_matching"], redirectRows);
const worker = `// GENERATED by scripts/generate-seo-artifacts.mjs. Do not edit manually.\nconst SITE = "${SITE}";\nconst VALID = new Set(${JSON.stringify(validRoutes)});\nconst REDIRECTS = ${JSON.stringify({ ...redirects, "/es": "/" }, null, 2)};\nconst ASSET = /\\.(?:js|mjs|css|png|jpe?g|webp|avif|gif|svg|ico|woff2?|ttf|txt|xml|json|map|webmanifest|mp4|pdf)$/i;\nconst GONE = [/^\\/wp-(admin|content|includes|json|login)(\\/|$)/i,/^\\/(category|tag|feed|author|comments)(\\/|$)/i,/^\\/\\d{4}(\\/|$)/,/\\.(php|htm|asp|aspx)$/i,/(casino|gambling|betting|slots?|poker|game-?coins?|free-?spins?|bonus-?code)/i,/^\\/xmlrpc/i,/^\\/(shop|shopdetail|cart|checkout|myaccount|order|shopping)(\\/|$)/i];\nconst clean = p => p.length > 1 ? p.replace(/\\/+$/, "").toLowerCase() : p;\nconst response = status => new Response(status === 410 ? "Gone" : "Not Found", { status, headers: { "content-type": "text/plain; charset=utf-8", "x-robots-tag": "noindex", "cache-control": "no-store" } });\nexport default { async fetch(request) { const url = new URL(request.url); const p = clean(url.pathname); if (!['GET','HEAD'].includes(request.method) || ASSET.test(url.pathname) || url.pathname.startsWith('/assets/') || url.pathname.startsWith('/.well-known/') || url.pathname.startsWith('/cdn-cgi/') || url.pathname.startsWith('/api/')) return fetch(request); const plain = p.startsWith('/es/') ? p.slice(3) : p; const target = REDIRECTS[p] || REDIRECTS[plain]; if (target) return Response.redirect(SITE + target, 301); if (GONE.some(re => re.test(p))) return response(410); if (VALID.has(p)) return fetch(request); return response(404); } };\n`;
fs.writeFileSync(path.join(root, "cloudflare/worker.js"), worker);
console.log(`Generated ${policy.size} policy rows and ${redirectRows.length} Cloudflare redirect rows.`);
