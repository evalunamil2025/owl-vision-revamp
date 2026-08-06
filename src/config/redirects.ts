// Centralised legacy-URL policy for the old WordPress site.
//
// The client-side entries below are only a UX fallback so a visitor landing on
// an old link still reaches the right page. Real 301/410/404 status codes must
// be configured at the edge (see docs/edge-redirects.md) — a React SPA cannot
// set an HTTP status.

/** Valid application routes. Must stay in sync with src/App.tsx and public/sitemap.xml. */
export const VALID_ROUTES: string[] = [
  "/",
  "/about",
  "/quote",
  "/contact",
  "/auto-insurance",
  "/home-insurance",
  "/life-insurance",
  "/boat-insurance",
  "/motorcycle-insurance",
  "/rv-insurance",
  "/renters-insurance",
  "/landlord-insurance",
  "/mobile-home-insurance",
  "/personal-umbrella",
  "/general-liability",
  "/bop-insurance",
  "/commercial-auto",
  "/commercial-property",
  "/contractors-insurance",
  "/restaurant-insurance",
  "/building-owners",
  "/bonds-surety",
  "/pay-my-bill",
  "/client-center",
  "/carriers",
  "/sr22-insurance",
];

/** Old path (lowercase, no trailing slash) -> new path. Single-hop 301 at the edge. */
export const LEGACY_REDIRECTS: Record<string, string> = {
  // Auto
  "/seguros-para-autos-en-seattle-washington": "/auto-insurance",
  "/car-insurance-in-seattle-washington": "/auto-insurance",
  "/auto-insurance-in-seattle-washington": "/auto-insurance",
  // Home / property
  "/seguros-de-hogar-en-seattle-washington": "/home-insurance",
  "/seguros-de-propietarios-en-seattle-washington": "/home-insurance",
  "/home-insurance-in-seattle-washington": "/home-insurance",
  "/homeowners-insurance-in-seattle-washington": "/home-insurance",
  "/seguro-para-casas-prefabricadas": "/mobile-home-insurance",
  "/mobile-home-insurance-in-seattle-washington": "/mobile-home-insurance",
  "/landlord-insurance-in-seattle-washington": "/landlord-insurance",
  "/seguros-para-arrendadores-en-seattle-washington": "/landlord-insurance",
  "/renters-insurance-in-seattle-washington": "/renters-insurance",
  "/seguros-para-inquilinos-en-seattle-washington": "/renters-insurance",
  // Life
  "/seguros-de-vida-en-seattle-washington": "/life-insurance",
  "/life-insurance-in-seattle-washington": "/life-insurance",
  // Recreational
  "/motorcycle-insurance-in-seattle-washington": "/motorcycle-insurance",
  "/seguros-para-motocicleta-en-seattle-washington": "/motorcycle-insurance",
  "/boat-insurance-in-seattle-washington": "/boat-insurance",
  "/seguros-para-botes-en-seattle-washington": "/boat-insurance",
  "/recreational-vehicle-insurance": "/rv-insurance",
  "/recreational-vehicle-insurance-in-seattle-washington": "/rv-insurance",
  "/seguro-para-vehiculos-recreativos-en-seattle-washington": "/rv-insurance",
  // Umbrella
  "/personal-umbrella-in-seattle-washington": "/personal-umbrella",
  "/paraguas-personal-en-seattle-washington": "/personal-umbrella",
  // Commercial
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
  // Company / utility pages
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
};

/** Exact paths that must return 410 Gone (spam injected into the old site). */
export const GONE_PATHS: string[] = [
  "/2025/08/05/experience-englishspeaking-online-casinos-in-canada-play-at-gigadats-toprated-gambling-platform",
];

/** Patterns treated as permanently removed: WP internals, archives, old shop, spam. */
export const GONE_PATTERNS: RegExp[] = [
  /^\/wp-(admin|content|includes|json|login)(\/|$)/i,
  /^\/(category|tag|feed|author|comments)(\/|$)/i,
  /^\/\d{4}(\/|$)/,
  /\.(php|htm|asp|aspx)$/i,
  /(casino|gambling|betting|slots?|poker|game-?coins?|free-?spins?|bonus-?code)/i,
  /^\/xmlrpc/i,
  // Legacy e-commerce platform that no longer exists
  /^\/(shop|shopdetail|cart|shopping)(\/|$)/i,
  // Injected spam slugs: "vvipbest-xxxxxx-...", "claim-...-hash", etc.
  /^\/(vvip|claim|match|reward|mega|prime|new|grab|win|boost)[a-z]*-[a-z0-9]{5,}-/i,
  // Random 8-character hash paths injected by the hack (e.g. /w22zmd5m)
  /^\/(?=[a-z0-9]{8}$)(?:[a-z0-9]*\d){2}[a-z0-9]*$/,
];

export const normalizePath = (p: string) => (p.length > 1 ? p.replace(/\/+$/, "") : p).toLowerCase();

/**
 * Resolves a legacy path to its modern equivalent.
 * Falls back to stripping the `/es` locale prefix and re-checking, so the
 * Spanish mirror of every old URL resolves without duplicating the table.
 */
export const resolveLegacyRedirect = (pathname: string): string | null => {
  const from = normalizePath(pathname);
  const candidates = [from];
  if (from.startsWith("/es/")) candidates.push(from.slice(3));
  else if (from === "/es") candidates.push("/");

  for (const candidate of candidates) {
    const target = LEGACY_REDIRECTS[candidate];
    if (target && target !== from) return target;
    // Old WordPress pattern: "/<slug>-in-seattle-washington" -> "/<slug>"
    const stripped = candidate.replace(/-(in|en)-seattle-washington$/, "");
    if (stripped !== candidate && VALID_ROUTES.includes(stripped) && stripped !== from) {
      return stripped;
    }
  }
  return null;
};

export const isGone = (pathname: string): boolean => {
  const p = normalizePath(pathname);
  if (VALID_ROUTES.includes(p) || resolveLegacyRedirect(p)) return false;
  return GONE_PATHS.includes(p) || GONE_PATTERNS.some((re) => re.test(p));
};

