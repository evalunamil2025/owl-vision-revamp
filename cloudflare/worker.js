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
const SEO_ROUTES = {
  "/": {
    "title": "Insurance Agency in Everett, WA | Bringas Insurance Group",
    "description": "Bringas Insurance Group is an independent insurance agency in Everett, WA helping Washington families and businesses compare coverage options.",
    "kind": "home"
  },
  "/about": {
    "title": "About Bringas Insurance Group | Everett, WA",
    "description": "Learn about Bringas Insurance Group and our commitment to helping Washington clients find insurance coverage for personal and business needs."
  },
  "/quote": {
    "title": "Get an Insurance Quote | Bringas Insurance Group",
    "description": "Request an auto, home, life, or business insurance quote from Bringas Insurance Group with personalized guidance from a local agency."
  },
  "/contact": {
    "title": "Contact Bringas Insurance Group | Everett, WA",
    "description": "Contact Bringas Insurance Group in Everett, WA for help with auto, home, life, or business insurance coverage and personalized guidance."
  },
  "/auto-insurance": {
    "title": "Auto Insurance in Washington State | Bringas Insurance",
    "description": "Explore auto insurance in Washington State with Bringas Insurance Group and compare coverage options that help protect you on the road.",
    "kind": "service",
    "serviceName": "Auto Insurance"
  },
  "/home-insurance": {
    "title": "Home Insurance in Washington State | Bringas Insurance",
    "description": "Protect your home and belongings with home insurance options for Washington homeowners from Bringas Insurance Group in Everett.",
    "kind": "service",
    "serviceName": "Home Insurance"
  },
  "/life-insurance": {
    "title": "Life Insurance in Everett, WA | Bringas Insurance",
    "description": "Explore life insurance options with Bringas Insurance Group in Everett, WA and plan financial protection for the people who depend on you.",
    "kind": "service",
    "serviceName": "Life Insurance"
  },
  "/boat-insurance": {
    "title": "Boat Insurance in Washington State | Bringas Insurance",
    "description": "Explore boat and watercraft insurance options in Washington for liability, physical damage, theft, and other risks on and off the water.",
    "kind": "service",
    "serviceName": "Boat and Watercraft Insurance"
  },
  "/motorcycle-insurance": {
    "title": "Motorcycle Insurance in Washington | Bringas Insurance",
    "description": "Compare motorcycle insurance coverage in Washington with guidance from Bringas Insurance Group for your bike, liability, and riding risks.",
    "kind": "service",
    "serviceName": "Motorcycle Insurance"
  },
  "/rv-insurance": {
    "title": "RV Insurance in Washington State | Bringas Insurance",
    "description": "Explore recreational vehicle insurance in Washington for your RV, personal belongings, liability, and travel-related risks.",
    "kind": "service",
    "serviceName": "Recreational Vehicle Insurance"
  },
  "/renters-insurance": {
    "title": "Renters Insurance in Washington State | Bringas Insurance",
    "description": "Explore renters insurance in Washington for personal belongings, liability, and additional living expenses with Bringas Insurance Group.",
    "kind": "service",
    "serviceName": "Renters Insurance"
  },
  "/landlord-insurance": {
    "title": "Landlord Insurance in Washington | Bringas Insurance",
    "description": "Protect a Washington rental property with landlord insurance options for the building, liability, lost income, and other ownership risks.",
    "kind": "service",
    "serviceName": "Landlord Insurance"
  },
  "/mobile-home-insurance": {
    "title": "Mobile Home Insurance in Washington | Bringas Insurance",
    "description": "Explore specialized insurance for mobile and manufactured homes in Washington with guidance from Bringas Insurance Group.",
    "kind": "service",
    "serviceName": "Mobile Home Insurance"
  },
  "/personal-umbrella": {
    "title": "Personal Umbrella Insurance | Bringas Insurance Group",
    "description": "Learn how personal umbrella insurance can add liability protection above eligible auto and home policy limits in Washington.",
    "kind": "service",
    "serviceName": "Personal Umbrella Insurance"
  },
  "/general-liability": {
    "title": "General Liability Insurance in Washington | Bringas Insurance",
    "description": "Explore general liability insurance in Washington for third-party injury, property damage, and other common business risks.",
    "kind": "service",
    "serviceName": "General Liability Insurance"
  },
  "/bop-insurance": {
    "title": "Business Owners Policy (BOP) in Washington | Bringas Insurance",
    "description": "Explore a Business Owners Policy in Washington that combines core property, liability, and business interruption protections.",
    "kind": "service",
    "serviceName": "Business Owners Policy"
  },
  "/commercial-auto": {
    "title": "Commercial Auto Insurance in Washington | Bringas Insurance",
    "description": "Explore commercial auto insurance in Washington for vehicles used to transport tools, products, employees, or serve customers.",
    "kind": "service",
    "serviceName": "Commercial Auto Insurance"
  },
  "/commercial-property": {
    "title": "Commercial Property Insurance in Washington | Bringas Insurance",
    "description": "Protect business buildings, equipment, inventory, and other physical assets with commercial property insurance in Washington.",
    "kind": "service",
    "serviceName": "Commercial Property Insurance"
  },
  "/contractors-insurance": {
    "title": "Contractor Insurance in Washington | Bringas Insurance",
    "description": "Explore contractor insurance in Washington for liability, tools, equipment, commercial vehicles, and construction-related risks.",
    "kind": "service",
    "serviceName": "Contractors Insurance"
  },
  "/restaurant-insurance": {
    "title": "Restaurant Insurance in Washington | Bringas Insurance",
    "description": "Explore restaurant insurance in Washington for property, liability, equipment, food-related risks, and business interruptions.",
    "kind": "service",
    "serviceName": "Restaurant Insurance"
  },
  "/building-owners": {
    "title": "Building Owners Insurance in Washington | Bringas Insurance",
    "description": "Explore insurance for apartment, mixed-use, and commercial building owners in Washington, including property and liability protection.",
    "kind": "service",
    "serviceName": "Building Owners Insurance"
  },
  "/bonds-surety": {
    "title": "Surety Bonds in Washington State | Bringas Insurance",
    "description": "Learn about license, permit, contract, and other surety bonds available for businesses and professionals in Washington State.",
    "kind": "service",
    "serviceName": "Surety Bonds"
  },
  "/pay-my-bill": {
    "title": "Pay My Insurance Bill | Bringas Insurance Group",
    "description": "Access direct billing links for insurance carriers represented by Bringas Insurance Group and find help with payment questions."
  },
  "/client-center": {
    "title": "Insurance Client Center | Bringas Insurance Group",
    "description": "Access policy documents, ID cards, certificates, and service requests through the Bringas Insurance Group Client Center."
  },
  "/carriers": {
    "title": "Insurance Carriers | Bringas Insurance Group",
    "description": "Find contact, billing, and claims information for insurance carriers represented by Bringas Insurance Group."
  },
  "/sr22-insurance": {
    "title": "SR-22 Insurance in Washington | Bringas Insurance Group",
    "description": "Learn what an SR-22 filing is, when it may be required, and how Bringas Insurance Group can help Washington drivers find coverage.",
    "kind": "service",
    "serviceName": "SR-22 Insurance"
  }
};
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
