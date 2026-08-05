// Centralised legacy-URL policy for the old WordPress site.
//
// The client-side entries below are a fallback so users landing on an old link
// still reach the right page. Real 301/410 status codes must be configured at
// the edge (see docs/edge-redirects.md) — React cannot set an HTTP status.

/** Old path (lowercase, no trailing slash) -> new path. Served as 301 at the edge. */
export const LEGACY_REDIRECTS: Record<string, string> = {
  "/car-insurance-in-seattle-washington": "/auto-insurance",
  "/customer-quoting": "/quote",
  "/commercial-property-insurance-in-seattle-washington": "/commercial-property",
  "/general-insurance-in-seattle-washington": "/business",
  "/contractors-insurance-in-seattle-washington": "/contractors-insurance",
  // Old paths that already exist in the new app under the same name
  "/client-center": "/client-center",
  "/contact": "/contact",
};

/** Exact paths that must return 410 Gone (spam injected into the old site). */
export const GONE_PATHS: string[] = [
  "/2025/08/05/experience-englishspeaking-online-casinos-in-canada-play-at-gigadats-toprated-gambling-platform",
];

/** Patterns treated as permanently removed (dated WP archives, PHP endpoints). */
export const GONE_PATTERNS: RegExp[] = [
  /^\/\d{4}\/\d{2}(\/|$)/,
  /\.php$/i,
  /^\/wp-(admin|content|includes)(\/|$)/i,
];

/**
 * Pending decision — do NOT auto-redirect. Listed for manual review:
 *  /es/seguros-para-autos-en-seattle-washington/     -> rebuild as ES auto page, or 301 -> /auto-insurance
 *  /es/seguros-para-inquilinos-en-seattle-washington/ -> rebuild as ES renters page, or 301 -> /renters-insurance
 */
export const PENDING_REVIEW: string[] = [
  "/es/seguros-para-autos-en-seattle-washington",
  "/es/seguros-para-inquilinos-en-seattle-washington",
];

const normalize = (p: string) => (p.length > 1 ? p.replace(/\/+$/, "") : p).toLowerCase();

export const resolveLegacyRedirect = (pathname: string): string | null => {
  const target = LEGACY_REDIRECTS[normalize(pathname)];
  return target && target !== normalize(pathname) ? target : null;
};

export const isGone = (pathname: string): boolean => {
  const p = normalize(pathname);
  return GONE_PATHS.includes(p) || GONE_PATTERNS.some((re) => re.test(p));
};
