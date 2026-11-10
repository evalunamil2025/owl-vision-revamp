import { VALID_ROUTES, normalizePath } from "@/config/redirects";

export const SPANISH_PREFIX = "/es";

export function isSpanishPath(pathname: string): boolean {
  const normalized = normalizePath(pathname);
  if (normalized === SPANISH_PREFIX) return true;
  if (!normalized.startsWith(`${SPANISH_PREFIX}/`)) return false;
  return VALID_ROUTES.includes(normalized.slice(SPANISH_PREFIX.length) || "/");
}

export function stripSpanishPrefix(pathname: string): string {
  if (!isSpanishPath(pathname)) return pathname;
  return normalizePath(pathname).slice(SPANISH_PREFIX.length) || "/";
}

export function addSpanishPrefix(pathname: string): string {
  const normalized = normalizePath(pathname);
  if (isSpanishPath(normalized)) return normalized;
  return normalized === "/" ? SPANISH_PREFIX : `${SPANISH_PREFIX}${normalized}`;
}

export function localizeInternalPath(
  target: string,
  currentPathname: string,
): string {
  if (!target.startsWith("/") || target.startsWith("//")) return target;
  const [beforeHash, hash = ""] = target.split("#", 2);
  const [pathname, search = ""] = (beforeHash ?? target).split("?", 2);
  const localizedPath = isSpanishPath(currentPathname)
    ? addSpanishPrefix(pathname || "/")
    : pathname || "/";
  return `${localizedPath}${search ? `?${search}` : ""}${hash ? `#${hash}` : ""}`;
}
