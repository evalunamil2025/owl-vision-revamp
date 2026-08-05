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
  "/seguros-para-autos-en-seattle-washington": "/auto-insurance",
  "/car-insurance-in-seattle-washington": "/auto-insurance",
  "/seguros-de-vida-en-seattle-washington": "/life-insurance",
  "/life-insurance-in-seattle-washington": "/life-insurance",
  "/seguros-para-propiedad-comercial-en-seattle-washington": "/commercial-property",
  "/commercial-property-insurance-in-seattle-washington": "/commercial-property",
  "/restaurant-insurance-in-seattle-washington": "/restaurant-insurance",
  "/renters-insurance-in-seattle-washington": "/renters-insurance",
  "/recreational-vehicle-insurance-in-seattle-washington": "/rv-insurance",
  "/contractors-insurance-in-seattle-washington": "/contractors-insurance",
  "/payments": "/pay-my-bill",
  "/pagos": "/pay-my-bill",
  "/fianzas-para-seguros-en-seattle-washington": "/bonds-surety",
  "/agentes-de-seguros-en-seattle-washington": "/about",
  "/customer-quoting": "/quote",
  // Spanish variants of the same old pages, also single-hop
  "/es/seguros-para-autos-en-seattle-washington": "/auto-insurance",
  "/es/seguros-para-inquilinos-en-seattle-washington": "/renters-insurance",
};

/** Exact paths that must return 410 Gone (spam injected into the old site). */
export const GONE_PATHS: string[] = [
  "/2025/08/05/experience-englishspeaking-online-casinos-in-canada-play-at-gigadats-toprated-gambling-platform",
];

/** Patterns treated as permanently removed: WP internals, archives, spam. */
export const GONE_PATTERNS: RegExp[] = [
  /^\/wp-(admin|content|includes|json|login)(\/|$)/i,
  /^\/(category|tag|feed|author|comments)(\/|$)/i,
  /^\/\d{4}(\/|$)/,
  /\.(php|htm|asp|aspx)$/i,
  /(casino|gambling|betting|slots?|poker|game-?coins?|free-?spins?|bonus-?code)/i,
  /^\/xmlrpc/i,
];

const normalize = (p: string) => (p.length > 1 ? p.replace(/\/+$/, "") : p).toLowerCase();

export const resolveLegacyRedirect = (pathname: string): string | null => {
  const from = normalize(pathname);
  const target = LEGACY_REDIRECTS[from];
  return target && target !== from ? target : null;
};

export const isGone = (pathname: string): boolean => {
  const p = normalize(pathname);
  return GONE_PATHS.includes(p) || GONE_PATTERNS.some((re) => re.test(p));
};
