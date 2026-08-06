import { VALID_ROUTES, normalizePath } from "@/config/redirects";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Sends page views only for real application routes.
 * The hosting platform currently serves the SPA shell for unknown URLs, so
 * letting gtag auto-send a page_view would turn every soft 404 into a page.
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
