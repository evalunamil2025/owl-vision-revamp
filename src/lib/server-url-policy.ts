import {
  VALID_ROUTES,
  isGone,
  normalizePath,
  resolveLegacyRedirect,
} from "../config/redirects";

const CANONICAL_ORIGIN = "https://bringasinsurance.com";
const PRODUCTION_HOSTS = new Set([
  "bringasinsurance.com",
  "www.bringasinsurance.com",
]);
const NOISE_QUERY_KEYS = new Set(["v", "tid", "lang"]);

export type ServerUrlDecision =
  | { kind: "continue" }
  | { kind: "redirect"; location: string; status: 301 }
  | { kind: "gone"; status: 410 };

function routeWithoutLocale(pathname: string): string | null {
  const normalized = normalizePath(pathname);
  if (normalized === "/es") return "/";
  if (!normalized.startsWith("/es/")) return null;

  const candidate = normalized.slice(3) || "/";
  return VALID_ROUTES.includes(candidate) ? candidate : null;
}

/**
 * Decides status handling before TanStack renders a route. It intentionally
 * leaves unknown paths to the router so its notFound component returns 404.
 */
export function classifyServerUrl(url: URL): ServerUrlDecision {
  const normalizedPath = normalizePath(url.pathname);
  const legacyTarget = resolveLegacyRedirect(normalizedPath);
  const localeTarget = routeWithoutLocale(normalizedPath);
  const validTarget = VALID_ROUTES.includes(normalizedPath)
    ? normalizedPath
    : null;
  const routeTarget = legacyTarget ?? localeTarget ?? validTarget;
  const isProductionHost = PRODUCTION_HOSTS.has(url.hostname.toLowerCase());
  const hasNoiseQuery = [...url.searchParams.keys()].some((key) =>
    NOISE_QUERY_KEYS.has(key.toLowerCase()),
  );

  const needsCanonicalRoute =
    routeTarget != null &&
    (routeTarget !== url.pathname ||
      legacyTarget != null ||
      localeTarget != null ||
      hasNoiseQuery);
  const needsCanonicalOrigin =
    isProductionHost &&
    (url.protocol !== "https:" ||
      url.hostname.toLowerCase() !== "bringasinsurance.com");

  if (needsCanonicalOrigin || needsCanonicalRoute) {
    const destination = new URL(url.toString());

    if (isProductionHost) {
      destination.protocol = "https:";
      destination.host = "bringasinsurance.com";
    }

    if (routeTarget != null) destination.pathname = routeTarget;
    if (hasNoiseQuery || legacyTarget != null || localeTarget != null) {
      destination.search = "";
    }

    return { kind: "redirect", location: destination.toString(), status: 301 };
  }

  if (isGone(normalizedPath)) return { kind: "gone", status: 410 };

  return { kind: "continue" };
}

export function renderGonePage(): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="robots" content="noindex, nofollow" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Page removed | Bringas Insurance Group</title>
  </head>
  <body>
    <main>
      <h1>This page has been permanently removed</h1>
      <p>The requested address is no longer available.</p>
      <a href="/">Return to Bringas Insurance Group</a>
    </main>
  </body>
</html>`;
}

export function withNoIndexHeader(response: Response): Response {
  const headers = new Headers(response.headers);
  headers.set("x-robots-tag", "noindex, nofollow");
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}
