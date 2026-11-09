import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { CANONICAL_HOST, classifyUrl, SEO_ROUTES, SITE } from "./url-policy.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDirectory = path.join(root, "dist");
const maxBodyBytes = 20_000;
const contactRecipients = ["raul@bringasinsurance.com", "info@bringasinsurance.com"];
const interests = new Set(["auto", "home", "business", "life"]);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const mimeTypes = new Map([
  [".avif", "image/avif"], [".css", "text/css; charset=utf-8"],
  [".gif", "image/gif"], [".html", "text/html; charset=utf-8"],
  [".ico", "image/x-icon"], [".jpg", "image/jpeg"], [".jpeg", "image/jpeg"],
  [".js", "text/javascript; charset=utf-8"], [".json", "application/json; charset=utf-8"],
  [".map", "application/json; charset=utf-8"], [".mp4", "video/mp4"],
  [".pdf", "application/pdf"], [".png", "image/png"],
  [".svg", "image/svg+xml"], [".txt", "text/plain; charset=utf-8"],
  [".webmanifest", "application/manifest+json"], [".webp", "image/webp"],
  [".woff", "font/woff"], [".woff2", "font/woff2"], [".xml", "application/xml; charset=utf-8"],
]);

const safeText = (value) => typeof value === "string" ? value.trim() : "";
const escapeHtml = (value) => value.replace(/[&<>"']/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#039;",
})[character]);

export function validateContact(payload) {
  const contact = {
    name: safeText(payload?.name),
    email: safeText(payload?.email).toLowerCase(),
    phone: safeText(payload?.phone),
    interest: safeText(payload?.interest),
    message: safeText(payload?.message),
    website: safeText(payload?.website),
    locale: safeText(payload?.locale).slice(0, 10),
    submissionId: safeText(payload?.submissionId).slice(0, 100),
  };
  if (contact.website) return { spam: true };
  if (!contact.name || contact.name.length > 100) return { error: "invalid_name" };
  if (!emailPattern.test(contact.email) || contact.email.length > 254) return { error: "invalid_email" };
  if (!contact.phone || contact.phone.length > 30) return { error: "invalid_phone" };
  if (!interests.has(contact.interest)) return { error: "invalid_interest" };
  if (!contact.message || contact.message.length > 3000) return { error: "invalid_message" };
  return { contact };
}

const send = (response, status, body = "", headers = {}) => {
  response.writeHead(status, {
    "content-type": "text/plain; charset=utf-8",
    "x-content-type-options": "nosniff",
    ...headers,
  });
  response.end(body);
};

const sendJson = (response, status, body, headers = {}) => send(
  response,
  status,
  JSON.stringify(body),
  { "content-type": "application/json; charset=utf-8", "cache-control": "no-store", ...headers },
);

const readBody = async (request) => {
  const chunks = [];
  let size = 0;
  for await (const chunk of request) {
    size += chunk.length;
    if (size > maxBodyBytes) throw new Error("body_too_large");
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString("utf8");
};

async function handleContact(request, response) {
  const origin = request.headers.origin;
  const allowed = new Set([SITE, `https://www.${CANONICAL_HOST}`]);
  const cors = origin && allowed.has(origin) ? { "access-control-allow-origin": origin, vary: "Origin" } : {};
  if (origin && !allowed.has(origin)) return sendJson(response, 403, { ok: false, error: "forbidden" });
  if (request.method === "OPTIONS") {
    return send(response, 204, "", {
      ...cors,
      "access-control-allow-methods": "POST, OPTIONS",
      "access-control-allow-headers": "content-type",
      "access-control-max-age": "86400",
    });
  }
  if (request.method !== "POST") return sendJson(response, 405, { ok: false, error: "method_not_allowed" }, cors);
  if (!request.headers["content-type"]?.toLowerCase().includes("application/json")) {
    return sendJson(response, 400, { ok: false, error: "invalid_request" }, cors);
  }

  let payload;
  try {
    payload = JSON.parse(await readBody(request));
  } catch {
    return sendJson(response, 400, { ok: false, error: "invalid_json" }, cors);
  }
  const validation = validateContact(payload);
  if (validation.spam) return sendJson(response, 200, { ok: true }, cors);
  if (validation.error) return sendJson(response, 400, { ok: false, error: validation.error }, cors);
  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_FROM_EMAIL) {
    return sendJson(response, 503, { ok: false, error: "service_unavailable" }, cors);
  }

  const contact = validation.contact;
  const fields = [
    ["Name", contact.name], ["Email", contact.email], ["Phone", contact.phone],
    ["Insurance interest", contact.interest], ["Language", contact.locale || "Not provided"],
  ];
  const rows = fields.map(([label, value]) => `<tr><th align="left" style="padding:8px;border-bottom:1px solid #e5e7eb">${label}</th><td style="padding:8px;border-bottom:1px solid #e5e7eb">${escapeHtml(value)}</td></tr>`).join("");
  const textFields = fields.map(([label, value]) => `${label}: ${value}`).join("\n");
  let providerResponse;
  try {
    providerResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "content-type": "application/json",
        ...(contact.submissionId ? { "idempotency-key": `contact/${contact.submissionId}` } : {}),
      },
      body: JSON.stringify({
        from: `Bringas Website <${process.env.CONTACT_FROM_EMAIL}>`,
        to: contactRecipients,
        reply_to: contact.email,
        subject: `Website inquiry: ${contact.name} - ${contact.interest}`,
        html: `<div style="font-family:Arial,sans-serif;color:#123;max-width:680px"><h1 style="color:#015093">New website inquiry</h1><table style="border-collapse:collapse;width:100%">${rows}</table><h2 style="color:#015093;margin-top:24px">Message</h2><p style="white-space:pre-wrap">${escapeHtml(contact.message)}</p></div>`,
        text: `New website inquiry\n\n${textFields}\n\nMessage:\n${contact.message}`,
        tags: [{ name: "source", value: "website-contact" }],
      }),
    });
  } catch {
    return sendJson(response, 502, { ok: false, error: "delivery_failed" }, cors);
  }
  if (!providerResponse.ok) return sendJson(response, 502, { ok: false, error: "delivery_failed" }, cors);
  return sendJson(response, 200, { ok: true }, cors);
}

const setMeta = (html, selector, value) => {
  const escaped = escapeHtml(value);
  const expression = new RegExp(`<meta([^>]*${selector}[^>]*)content="[^"]*"([^>]*)>`, "i");
  return html.replace(expression, `<meta$1content="${escaped}"$2>`);
};

function routeHtml(template, route) {
  const seo = SEO_ROUTES[route];
  if (!seo) return template;
  const canonical = `${SITE}${route}`;
  let html = template.replace(/<title>[^<]*<\/title>/i, `<title>${escapeHtml(seo.title)}</title>`);
  html = setMeta(html, 'name="description"', seo.description);
  html = setMeta(html, 'property="og:url"', canonical);
  html = setMeta(html, 'property="og:title"', seo.title);
  html = setMeta(html, 'property="og:description"', seo.description);
  html = setMeta(html, 'name="twitter:title"', seo.title);
  html = setMeta(html, 'name="twitter:description"', seo.description);
  return html.replace("</head>", `    <link rel="canonical" href="${canonical}" data-rh="true" />\n    <meta name="robots" content="index, follow" data-rh="true" />\n  </head>`);
}

async function readRouteHtml(route) {
  const file = route === "/"
    ? path.join(distDirectory, "index.html")
    : path.join(distDirectory, route.slice(1), "index.html");
  try {
    return await readFile(file, "utf8");
  } catch {
    return routeHtml(await readFile(path.join(distDirectory, "index.html"), "utf8"), route);
  }
}

async function serveAsset(request, response, pathname) {
  let decoded;
  try { decoded = decodeURIComponent(pathname); } catch { return send(response, 400, "Bad Request"); }
  const file = path.resolve(distDirectory, `.${decoded}`);
  if (file !== distDirectory && !file.startsWith(`${distDirectory}${path.sep}`)) return send(response, 404, "Not Found");
  try {
    const info = await stat(file);
    if (!info.isFile()) return send(response, 404, "Not Found");
    const body = request.method === "HEAD" ? "" : await readFile(file);
    return send(response, 200, body, {
      "content-type": mimeTypes.get(path.extname(file).toLowerCase()) || "application/octet-stream",
      "content-length": String(info.size),
      "cache-control": decoded.startsWith("/assets/") ? "public, max-age=31536000, immutable" : "public, max-age=3600",
    });
  } catch {
    return send(response, 404, "Not Found", { "x-robots-tag": "noindex" });
  }
}

export function createProductionServer() {
  return createServer(async (request, response) => {
    try {
      const host = request.headers.host || CANONICAL_HOST;
      const protocol = String(request.headers["x-forwarded-proto"] || "http").split(",")[0].trim();
      const url = new URL(request.url || "/", `http://${host}`);
      if (url.pathname === "/api/contact") return handleContact(request, response);
      if (!["GET", "HEAD"].includes(request.method || "")) return send(response, 405, "Method Not Allowed");

      const result = classifyUrl(url, { host, protocol });
      if (result.kind === "redirect") return send(response, result.status, "", { location: result.location, "cache-control": "public, max-age=3600" });
      if (result.kind === "error") return send(response, result.status, result.status === 410 ? "Gone" : result.status === 404 ? "Not Found" : "Bad Request", { "x-robots-tag": "noindex", "cache-control": "no-store" });
      if (result.kind === "asset") return serveAsset(request, response, result.path);

      const body = request.method === "HEAD" ? "" : await readRouteHtml(result.path);
      return send(response, 200, body, { "content-type": "text/html; charset=utf-8", "cache-control": "public, max-age=0, must-revalidate" });
    } catch (error) {
      console.error("Unhandled request error", error);
      return send(response, 500, "Internal Server Error", { "cache-control": "no-store" });
    }
  });
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const port = Number(process.env.PORT || 10000);
  createProductionServer().listen(port, "0.0.0.0", () => {
    console.log(`Bringas production server listening on 0.0.0.0:${port}`);
  });
}
