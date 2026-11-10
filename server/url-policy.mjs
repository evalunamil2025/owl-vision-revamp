import policy from "./seo-policy.json" with { type: "json" };

const validRoutes = new Set(policy.validRoutes);
const noiseQueryParams = new Set(["v", "tid", "lang"]);
const assetPattern =
  /\.(?:js|mjs|css|png|jpe?g|webp|avif|gif|svg|ico|woff2?|ttf|txt|xml|json|map|webmanifest|mp4|pdf)$/i;
const gonePatterns = [
  /^\/wp-(admin|content|includes|json|login)(\/|$)/i,
  /^\/(category|tag|feed|author|comments)(\/|$)/i,
  /^\/\d{4}(\/|$)/,
  /\.(php|htm|asp|aspx)$/i,
  /(casino|gambling|betting|slots?|poker|jackpot|pin-?up|hondubet|betiro|game-?coins?|free-?(coins?|spins?)|bonus-?code)/i,
  /^\/xmlrpc/i,
  /^\/(shop|shopdetail|cart|checkout|myaccount|order|shopping)(\/|$)/i,
  /^\/(vvip|claim|match|reward|mega|prime|new|grab|win|boost)[a-z]*-[a-z0-9]{5,}-/i,
  /^\/(?=[a-z0-9]{8}$)(?:[a-z0-9]*\d){2}[a-z0-9]*$/i,
];

export const SITE = policy.site;
export const SEO_ROUTES = policy.seoRoutes;
export const CANONICAL_HOST = new URL(SITE).hostname;

export const cleanPath = (pathname) => {
  const decoded = decodeURIComponent(pathname);
  return decoded.length > 1
    ? decoded.replace(/\/+$/, "").toLowerCase()
    : decoded;
};

export function classifyUrl(input, { host, protocol = "https:" } = {}) {
  const url = input instanceof URL ? new URL(input) : new URL(input, SITE);
  const requestHost = (host || url.host).split(":")[0].toLowerCase();
  const requestProtocol = protocol.endsWith(":") ? protocol : `${protocol}:`;

  if (
    (requestHost === CANONICAL_HOST ||
      requestHost === `www.${CANONICAL_HOST}`) &&
    (requestHost !== CANONICAL_HOST || requestProtocol !== "https:")
  ) {
    url.protocol = "https:";
    url.hostname = CANONICAL_HOST;
    url.port = "";
    return { kind: "redirect", status: 301, location: url.toString() };
  }

  let path;
  try {
    path = cleanPath(url.pathname);
  } catch {
    return { kind: "error", status: 400 };
  }

  const plain =
    path === "/es" ? "/" : path.startsWith("/es/") ? path.slice(3) : path;
  const redirectTarget = policy.redirects[path] || policy.redirects[plain];
  if (redirectTarget) {
    const localizedTarget = path.startsWith("/es/")
      ? `/es${redirectTarget}`
      : redirectTarget;
    const destination = new URL(`${SITE}${localizedTarget}`);
    for (const [key, value] of url.searchParams)
      destination.searchParams.append(key, value);
    return { kind: "redirect", status: 301, location: destination.toString() };
  }

  if (
    policy.gonePaths.includes(path) ||
    gonePatterns.some((pattern) => pattern.test(path))
  ) {
    return { kind: "error", status: 410 };
  }

  if (validRoutes.has(path)) {
    let changed = url.pathname !== path;
    let targetPath = path;
    const requestedLanguage = url.searchParams.get("lang")?.toLowerCase();
    if (requestedLanguage === "es" && !path.startsWith("/es")) {
      targetPath = path === "/" ? "/es" : `/es${path}`;
      changed = true;
    } else if (
      requestedLanguage === "en" &&
      (path === "/es" || path.startsWith("/es/"))
    ) {
      targetPath = plain;
      changed = true;
    }
    for (const key of [...url.searchParams.keys()]) {
      if (noiseQueryParams.has(key.toLowerCase())) {
        url.searchParams.delete(key);
        changed = true;
      }
    }
    if (changed) {
      const query = url.searchParams.toString();
      return {
        kind: "redirect",
        status: 301,
        location: `${SITE}${targetPath}${query ? `?${query}` : ""}`,
      };
    }
    return { kind: "page", status: 200, path };
  }

  if (
    assetPattern.test(url.pathname) ||
    url.pathname.startsWith("/assets/") ||
    url.pathname.startsWith("/.well-known/")
  ) {
    return { kind: "asset", status: 200, path: url.pathname };
  }

  return { kind: "error", status: 404 };
}
