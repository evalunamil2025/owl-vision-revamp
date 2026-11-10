import { normalizePath } from "@/config/redirects";
import {
  ENGLISH_TO_SPANISH_ROUTES,
  SPANISH_TO_ENGLISH_ROUTES,
} from "@/config/localized-routes";

export const SPANISH_PREFIX = "/es";

/**
 * Returns true for every URL inside the Spanish namespace, including an old
 * or temporary slug that still needs to be redirected to its canonical URL.
 */
export function hasSpanishPrefix(pathname: string): boolean {
  const normalized = normalizePath(pathname);
  return (
    normalized === SPANISH_PREFIX || normalized.startsWith(`${SPANISH_PREFIX}/`)
  );
}

export function isSpanishPath(pathname: string): boolean {
  const normalized = normalizePath(pathname);
  return SPANISH_TO_ENGLISH_ROUTES[normalized] != null;
}

export function stripSpanishPrefix(pathname: string): string {
  const normalized = normalizePath(pathname);
  const canonicalEnglishPath = SPANISH_TO_ENGLISH_ROUTES[normalized];
  if (canonicalEnglishPath) return canonicalEnglishPath;

  // Also recover from temporary `/es/<english-slug>` URLs so switching back
  // to English cannot preserve a malformed Spanish namespace.
  if (hasSpanishPrefix(normalized)) {
    const englishCandidate =
      normalized === SPANISH_PREFIX
        ? "/"
        : normalized.slice(SPANISH_PREFIX.length);
    if (ENGLISH_TO_SPANISH_ROUTES[englishCandidate]) return englishCandidate;
  }

  return pathname;
}

export function addSpanishPrefix(pathname: string): string {
  const normalized = normalizePath(pathname);
  if (isSpanishPath(normalized)) return normalized;
  return ENGLISH_TO_SPANISH_ROUTES[normalized] ?? pathname;
}

/**
 * Converts temporary `/es/<english-slug>` URLs to their translated canonical
 * equivalent. Canonical Spanish URLs are returned unchanged.
 */
export function canonicalizeSpanishPath(pathname: string): string | null {
  const normalized = normalizePath(pathname);
  if (isSpanishPath(normalized)) return normalized;
  if (!hasSpanishPrefix(normalized)) return null;

  const englishCandidate =
    normalized === SPANISH_PREFIX
      ? "/"
      : normalized.slice(SPANISH_PREFIX.length);
  return ENGLISH_TO_SPANISH_ROUTES[englishCandidate] ?? null;
}

export function localizeInternalPath(
  target: string,
  currentPathname: string,
): string {
  if (!target.startsWith("/") || target.startsWith("//")) return target;
  const [beforeHash, hash = ""] = target.split("#", 2);
  const [pathname, search = ""] = (beforeHash ?? target).split("?", 2);
  // Use the namespace rather than only known canonical paths. This keeps menu
  // navigation Spanish while a legacy `/es/<english-slug>` URL is redirected.
  const localizedPath = hasSpanishPrefix(currentPathname)
    ? addSpanishPrefix(pathname || "/")
    : pathname || "/";
  return `${localizedPath}${search ? `?${search}` : ""}${hash ? `#${hash}` : ""}`;
}
