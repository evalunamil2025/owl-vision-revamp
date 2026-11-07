// Generated into worker.js by scripts/generate-seo-artifacts.mjs.
const SITE = __SITE__;
const CANONICAL_HOST = new URL(SITE).hostname;
const VALID = new Set(__VALID_ROUTES__);
const REDIRECTS = __REDIRECTS__;
const SEO_ROUTES = __SEO_ROUTES__;
const OG_IMAGE = `${SITE}/bringas-insurance-logo.png`;
const CONTACT_PATH = "/api/contact";
const CONTACT_RECIPIENTS = ["raul@bringasinsurance.com", "info@bringasinsurance.com"];
const ASSET = /\.(?:js|mjs|css|png|jpe?g|webp|avif|gif|svg|ico|woff2?|ttf|txt|xml|json|map|webmanifest|mp4|pdf)$/i;
// Legacy/cache identifiers found by Search Console. They do not change page
// content, so remove them at the edge instead of serving crawlable duplicates.
const NOISE_QUERY_PARAMS = new Set(["v", "tid", "lang"]);
const GONE = [/^\/wp-(admin|content|includes|json|login)(\/|$)/i, /^\/(category|tag|feed|author|comments)(\/|$)/i, /^\/\d{4}(\/|$)/, /\.(php|htm|asp|aspx)$/i, /(casino|gambling|betting|slots?|poker|jackpot|pin-?up|hondubet|betiro|game-?coins?|free-?(coins?|spins?)|bonus-?code)/i, /^\/xmlrpc/i, /^\/(shop|shopdetail|cart|checkout|myaccount|order|shopping)(\/|$)/i];
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const INTERESTS = new Set(["auto", "home", "business", "life"]);

const clean = (path) => path.length > 1 ? path.replace(/\/+$/, "").toLowerCase() : path;
const stripNoiseQuery = (url) => {
  let changed = false;
  for (const key of [...url.searchParams.keys()]) {
    if (NOISE_QUERY_PARAMS.has(key.toLowerCase())) {
      url.searchParams.delete(key);
      changed = true;
    }
  }
  return changed;
};
const pageResponse = (status) => new Response(status === 410 ? "Gone" : "Not Found", {
  status,
  headers: { "content-type": "text/plain; charset=utf-8", "x-robots-tag": "noindex", "cache-control": "no-store" },
});
const jsonResponse = (body, status = 200, extraHeaders = {}) => new Response(JSON.stringify(body), {
  status,
  headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store", ...extraHeaders },
});
const asText = (value) => typeof value === "string" ? value.trim() : "";
const escapeHtml = (value) => value.replace(/[&<>"']/g, (character) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "\"": "&quot;",
  "'": "&#039;",
})[character]);

const routeSchema = (path, seo) => {
  if (seo.kind === "home") {
    return [
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Bringas Insurance Group",
        url: `${SITE}/`,
        inLanguage: ["en", "es"],
      },
      {
        "@context": "https://schema.org",
        "@type": "InsuranceAgency",
        name: "Bringas Insurance Group",
        url: `${SITE}/`,
        telephone: "+1-425-405-7111",
        address: {
          "@type": "PostalAddress",
          streetAddress: "9111 Evergreen Way",
          addressLocality: "Everett",
          addressRegion: "WA",
          postalCode: "98204",
          addressCountry: "US",
        },
        areaServed: { "@type": "State", name: "Washington" },
        knowsLanguage: ["English", "Spanish"],
      },
    ];
  }
  if (seo.kind === "service") {
    return [{
      "@context": "https://schema.org",
      "@type": "Service",
      name: seo.serviceName,
      description: seo.description,
      url: `${SITE}${path}`,
      areaServed: { "@type": "State", name: "Washington" },
      provider: {
        "@type": "InsuranceAgency",
        name: "Bringas Insurance Group",
        url: `${SITE}/`,
        telephone: "+1-425-405-7111",
      },
    }];
  }
  return [];
};

const attributeHandler = (attribute, value) => ({
  element(element) {
    element.setAttribute(attribute, value);
    element.setAttribute("data-rh", "true");
  },
});

function withRouteSeo(response, path) {
  const seo = SEO_ROUTES[path];
  if (!seo || !response.headers.get("content-type")?.includes("text/html")) return response;
  if (typeof HTMLRewriter === "undefined") return response;

  const canonical = `${SITE}${path}`;
  const schemas = routeSchema(path, seo)
    .map((schema) => `<script type="application/ld+json" data-rh="true">${JSON.stringify(schema).replaceAll("<", "\\u003c")}</script>`)
    .join("");
  const additions = [
    `<link rel="canonical" href="${canonical}" data-rh="true">`,
    '<meta name="robots" content="index, follow" data-rh="true">',
    schemas,
  ].join("");

  return new HTMLRewriter()
    .on("title", { element(element) { element.setInnerContent(seo.title); } })
    .on('meta[name="description"]', attributeHandler("content", seo.description))
    .on('meta[property="og:type"]', attributeHandler("content", "website"))
    .on('meta[property="og:url"]', attributeHandler("content", canonical))
    .on('meta[property="og:title"]', attributeHandler("content", seo.title))
    .on('meta[property="og:description"]', attributeHandler("content", seo.description))
    .on('meta[property="og:image"]', attributeHandler("content", OG_IMAGE))
    .on('meta[name="twitter:card"]', attributeHandler("content", "summary_large_image"))
    .on('meta[name="twitter:title"]', attributeHandler("content", seo.title))
    .on('meta[name="twitter:description"]', attributeHandler("content", seo.description))
    .on('meta[name="twitter:image"]', attributeHandler("content", OG_IMAGE))
    .on('script[type="application/ld+json"]', { element(element) { element.remove(); } })
    .on("head", { element(element) { element.append(additions, { html: true }); } })
    .transform(response);
}

function validateContact(payload) {
  const contact = {
    name: asText(payload?.name),
    email: asText(payload?.email).toLowerCase(),
    phone: asText(payload?.phone),
    interest: asText(payload?.interest),
    message: asText(payload?.message),
    website: asText(payload?.website),
    locale: asText(payload?.locale).slice(0, 10),
    submissionId: asText(payload?.submissionId).slice(0, 100),
  };

  if (contact.website) return { spam: true };
  if (!contact.name || contact.name.length > 100) return { error: "invalid_name" };
  if (!EMAIL.test(contact.email) || contact.email.length > 254) return { error: "invalid_email" };
  if (!contact.phone || contact.phone.length > 30) return { error: "invalid_phone" };
  if (!INTERESTS.has(contact.interest)) return { error: "invalid_interest" };
  if (!contact.message || contact.message.length > 3000) return { error: "invalid_message" };
  return { contact };
}

function contactEmail(contact) {
  const fields = [
    ["Name", contact.name],
    ["Email", contact.email],
    ["Phone", contact.phone],
    ["Insurance interest", contact.interest],
    ["Language", contact.locale || "Not provided"],
  ];
  const rows = fields.map(([label, value]) => `<tr><th align="left" style="padding:8px;border-bottom:1px solid #e5e7eb">${label}</th><td style="padding:8px;border-bottom:1px solid #e5e7eb">${escapeHtml(value)}</td></tr>`).join("");
  const textFields = fields.map(([label, value]) => `${label}: ${value}`).join("\n");

  return {
    subject: `Website inquiry: ${contact.name} - ${contact.interest}`,
    html: `<div style="font-family:Arial,sans-serif;color:#123;max-width:680px"><h1 style="color:#015093">New website inquiry</h1><table style="border-collapse:collapse;width:100%">${rows}</table><h2 style="color:#015093;margin-top:24px">Message</h2><p style="white-space:pre-wrap">${escapeHtml(contact.message)}</p></div>`,
    text: `New website inquiry\n\n${textFields}\n\nMessage:\n${contact.message}`,
  };
}

async function handleContact(request, env) {
  const origin = request.headers.get("origin");
  const allowedOrigins = new Set([SITE, SITE.replace("://", "://www."), ...(env.CONTACT_ALLOWED_ORIGINS || "").split(",").map((value) => value.trim()).filter(Boolean)]);
  if (origin && !allowedOrigins.has(origin)) return jsonResponse({ ok: false, error: "forbidden" }, 403);
  const corsHeaders = origin ? { "access-control-allow-origin": origin, vary: "Origin" } : {};
  const respond = (body, status = 200) => jsonResponse(body, status, corsHeaders);

  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        ...corsHeaders,
        "access-control-allow-methods": "POST, OPTIONS",
        "access-control-allow-headers": "content-type",
        "access-control-max-age": "86400",
      },
    });
  }
  if (request.method !== "POST") return respond({ ok: false, error: "method_not_allowed" }, 405);

  const contentType = request.headers.get("content-type") || "";
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (!contentType.toLowerCase().includes("application/json") || contentLength > 20_000) {
    return respond({ ok: false, error: "invalid_request" }, 400);
  }

  let payload;
  try {
    const rawBody = await request.text();
    if (rawBody.length > 20_000) return respond({ ok: false, error: "invalid_request" }, 400);
    payload = JSON.parse(rawBody);
  } catch {
    return respond({ ok: false, error: "invalid_json" }, 400);
  }

  const validation = validateContact(payload);
  if (validation.spam) return respond({ ok: true });
  if (validation.error) return respond({ ok: false, error: validation.error }, 400);
  if (!env.RESEND_API_KEY || !env.CONTACT_FROM_EMAIL) {
    console.error("Contact email service is not configured");
    return respond({ ok: false, error: "service_unavailable" }, 503);
  }

  const contact = validation.contact;
  const email = contactEmail(contact);
  let providerResponse;
  try {
    providerResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        authorization: `Bearer ${env.RESEND_API_KEY}`,
        "content-type": "application/json",
        ...(contact.submissionId ? { "idempotency-key": `contact/${contact.submissionId}` } : {}),
      },
      body: JSON.stringify({
        from: `Bringas Website <${env.CONTACT_FROM_EMAIL}>`,
        to: CONTACT_RECIPIENTS,
        reply_to: contact.email,
        subject: email.subject,
        html: email.html,
        text: email.text,
        tags: [{ name: "source", value: "website-contact" }],
      }),
    });
  } catch {
    console.error("Contact email provider request failed");
    return respond({ ok: false, error: "delivery_failed" }, 502);
  }

  if (!providerResponse.ok) {
    const providerError = await providerResponse.json().catch(() => ({}));
    console.error(
      "Contact email provider rejected the request",
      providerResponse.status,
      providerError.name || "unknown_error",
      providerError.message || "No provider message",
    );
    return respond({ ok: false, error: "delivery_failed" }, 502);
  }

  return respond({ ok: true });
}

export { contactEmail, handleContact, validateContact };

export default {
  async fetch(request, env = {}) {
    const url = new URL(request.url);
    const path = clean(url.pathname);
    if (path === CONTACT_PATH) return handleContact(request, env);
    const isSiteHost = url.hostname === CANONICAL_HOST || url.hostname === `www.${CANONICAL_HOST}`;
    if (["GET", "HEAD"].includes(request.method) && isSiteHost && (url.protocol !== "https:" || url.hostname !== CANONICAL_HOST)) {
      url.protocol = "https:";
      url.hostname = CANONICAL_HOST;
      url.port = "";
      return Response.redirect(url.toString(), 301);
    }
    if (!["GET", "HEAD"].includes(request.method) || ASSET.test(url.pathname) || url.pathname.startsWith("/assets/") || url.pathname.startsWith("/.well-known/") || url.pathname.startsWith("/cdn-cgi/") || url.pathname.startsWith("/api/")) return fetch(request);
    const plain = path.startsWith("/es/") ? path.slice(3) : path;
    const target = REDIRECTS[path] || REDIRECTS[plain];
    if (target) return Response.redirect(SITE + target, 301);
    if (GONE.some((pattern) => pattern.test(path))) return pageResponse(410);
    if (VALID.has(path)) {
      const removedNoiseQuery = stripNoiseQuery(url);
      if (url.pathname !== path || removedNoiseQuery) {
        const query = url.searchParams.toString();
        return Response.redirect(`${SITE}${path}${query ? `?${query}` : ""}`, 301);
      }
      const response = await fetch(request);
      return request.method === "HEAD" ? response : withRouteSeo(response, path);
    }
    return pageResponse(404);
  },
};
