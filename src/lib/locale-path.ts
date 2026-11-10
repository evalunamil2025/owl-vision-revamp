import { normalizePath } from "@/config/redirects";
import {
  ENGLISH_TO_SPANISH_ROUTES,
  SPANISH_TO_ENGLISH_ROUTES,
} from "@/config/localized-routes";

export const SPANISH_PREFIX = "/es";

export function isSpanishPath(pathname: string): boolean {
  const normalized = normalizePath(pathname);
  return SPANISH_TO_ENGLISH_ROUTES[normalized] != null;
}

export function stripSpanishPrefix(pathname: string): string {
  if (!isSpanishPath(pathname)) return pathname;
  return SPANISH_TO_ENGLISH_ROUTES[normalizePath(pathname)] ?? pathname;
}

export function addSpanishPrefix(pathname: string): string {
  const normalized = normalizePath(pathname);
  if (isSpanishPath(normalized)) return normalized;
  return ENGLISH_TO_SPANISH_ROUTES[normalized] ?? pathname;
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
