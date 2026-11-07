import { VALID_ROUTES, normalizePath } from "@/config/redirects";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Sends page views only for real application routes.
 * The production server rejects unknown URLs before React loads. Keeping this
 * allowlist also prevents invalid client-side navigations from becoming views.
 */
export const trackIndexablePageView = (pathname: string, search = "") => {
  const cleanPath = normalizePath(pathname);
  if (!VALID_ROUTES.includes(cleanPath)) return;

  window.gtag?.("event", "page_view", {
    page_title: document.title,
    page_location: window.location.href,
    page_path: `${cleanPath}${search}`,
  });
};
