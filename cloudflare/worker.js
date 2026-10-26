// Generated into worker.js by scripts/generate-seo-artifacts.mjs.
const SITE = "https://bringasinsurance.com";
const VALID = new Set(["/","/about","/quote","/contact","/auto-insurance","/home-insurance","/life-insurance","/boat-insurance","/motorcycle-insurance","/rv-insurance","/renters-insurance","/landlord-insurance","/mobile-home-insurance","/personal-umbrella","/general-liability","/bop-insurance","/commercial-auto","/commercial-property","/contractors-insurance","/restaurant-insurance","/building-owners","/bonds-surety","/pay-my-bill","/client-center","/carriers","/sr22-insurance"]);
const REDIRECTS = {
  "/seguros-para-autos-en-seattle-washington": "/auto-insurance",
  "/car-insurance-in-seattle-washington": "/auto-insurance",
  "/auto-insurance-in-seattle-washington": "/auto-insurance",
  "/seguros-de-hogar-en-seattle-washington": "/home-insurance",
  "/seguros-de-propietarios-en-seattle-washington": "/home-insurance",
  "/home-insurance-in-seattle-washington": "/home-insurance",
  "/homeowners-insurance-in-seattle-washington": "/home-insurance",
  "/seguro-para-casas-prefabricadas": "/mobile-home-insurance",
  "/seguro-para-casas-prefabricadas-en-seattle-washington": "/mobile-home-insurance",
  "/mobile-home-insurance-in-seattle-washington": "/mobile-home-insurance",
  "/landlord-insurance-in-seattle-washington": "/landlord-insurance",
  "/seguros-para-arrendadores-en-seattle-washington": "/landlord-insurance",
  "/renters-insurance-in-seattle-washington": "/renters-insurance",
  "/seguros-para-inquilinos-en-seattle-washington": "/renters-insurance",
  "/seguros-de-vida-en-seattle-washington": "/life-insurance",
  "/life-insurance-in-seattle-washington": "/life-insurance",
  "/motorcycle-insurance-in-seattle-washington": "/motorcycle-insurance",
  "/seguros-para-motocicleta-en-seattle-washington": "/motorcycle-insurance",
  "/boat-insurance-in-seattle-washington": "/boat-insurance",
  "/seguros-para-botes-en-seattle-washington": "/boat-insurance",
  "/recreational-vehicle-insurance": "/rv-insurance",
  "/recreational-vehicle-insurance-in-seattle-washington": "/rv-insurance",
  "/seguro-para-vehiculos-recreativos-en-seattle-washington": "/rv-insurance",
  "/personal-umbrella-in-seattle-washington": "/personal-umbrella",
  "/paraguas-personal-en-seattle-washington": "/personal-umbrella",
  "/commercial-property-insurance-in-seattle-washington": "/commercial-property",
  "/seguros-para-propiedad-comercial-en-seattle-washington": "/commercial-property",
  "/commercial-auto-insurance-in-seattle-washington": "/commercial-auto",
  "/seguro-auto-comercial-en-seattle-washington": "/commercial-auto",
  "/business-owners-insurance-in-seattle-washington": "/bop-insurance",
  "/seguros-para-propietarios-de-negocios-en-seattle-washington": "/bop-insurance",
  "/building-insurance-in-seattle-washington": "/building-owners",
  "/seguros-para-propietarios-de-edificios-en-seattle-washington": "/building-owners",
  "/general-insurance-in-seattle-washington": "/general-liability",
  "/general-liability-insurance-in-seattle-washington": "/general-liability",
  "/seguros-de-responsabilidad-general-en-seattle-washington": "/general-liability",
  "/restaurant-insurance-in-seattle-washington": "/restaurant-insurance",
  "/seguros-para-restaurantes-en-seattle-washington": "/restaurant-insurance",
  "/contractors-insurance-in-seattle-washington": "/contractors-insurance",
  "/seguros-para-contratistas-en-seattle-washington": "/contractors-insurance",
  "/fianzas-para-seguros-en-seattle-washington": "/bonds-surety",
  "/agentes-de-seguros-en-seattle-washington": "/about",
  "/agentes": "/about",
  "/best-insurance-agents-in-houston": "/about",
  "/contacto": "/contact",
  "/payments": "/pay-my-bill",
  "/pagos": "/pay-my-bill",
  "/customer-quoting": "/quote",
  "/cotizacion": "/quote",
  "/privacy": "/",
  "/privacidad": "/",
  "/es": "/"
};
const CONTACT_PATH = "/api/contact";
const CONTACT_RECIPIENTS = ["raul@bringasinsurance.com", "info@bringasinsurance.com"];
const ASSET = /\.(?:js|mjs|css|png|jpe?g|webp|avif|gif|svg|ico|woff2?|ttf|txt|xml|json|map|webmanifest|mp4|pdf)$/i;
const GONE = [/^\/wp-(admin|content|includes|json|login)(\/|$)/i, /^\/(category|tag|feed|author|comments)(\/|$)/i, /^\/\d{4}(\/|$)/, /\.(php|htm|asp|aspx)$/i, /(casino|gambling|betting|slots?|poker|game-?coins?|free-?spins?|bonus-?code)/i, /^\/xmlrpc/i, /^\/(shop|shopdetail|cart|checkout|myaccount|order|shopping)(\/|$)/i];
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const INTERESTS = new Set(["auto", "home", "business", "life"]);

const clean = (path) => path.length > 1 ? path.replace(/\/+$/, "").toLowerCase() : path;
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
    if (!["GET", "HEAD"].includes(request.method) || ASSET.test(url.pathname) || url.pathname.startsWith("/assets/") || url.pathname.startsWith("/.well-known/") || url.pathname.startsWith("/cdn-cgi/") || url.pathname.startsWith("/api/")) return fetch(request);
    const plain = path.startsWith("/es/") ? path.slice(3) : path;
    const target = REDIRECTS[path] || REDIRECTS[plain];
    if (target) return Response.redirect(SITE + target, 301);
    if (GONE.some((pattern) => pattern.test(path))) return pageResponse(410);
    if (VALID.has(path)) return fetch(request);
    return pageResponse(404);
  },
};
