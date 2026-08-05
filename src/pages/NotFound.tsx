import { useEffect, useRef } from "react";
import { Navigate, useLocation } from "react-router-dom";
import SEO from "@/components/SEO";
import { isGone, resolveLegacyRedirect } from "@/config/redirects";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const NotFound = () => {
  const location = useLocation();
  const gone = isGone(location.pathname);
  const redirectTo = resolveLegacyRedirect(location.pathname);
  const tracked = useRef<string | null>(null);

  useEffect(() => {
    if (redirectTo) return;
    // Avoid duplicate events for the same path (StrictMode / re-renders)
    if (tracked.current === location.pathname) return;
    tracked.current = location.pathname;
    window.gtag?.("event", "page_not_found", {
      page_path: location.pathname + location.search,
      page_location: window.location.href,
      page_referrer: document.referrer || undefined,
    });
  }, [location.pathname, location.search, redirectTo]);

  // Client-side fallback for migrated URLs; the real 301 is issued at the edge.
  if (redirectTo) return <Navigate to={redirectTo} replace />;

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <SEO
        title={
          gone
            ? "Page Removed | Bringas Insurance Group"
            : "Page Not Found | Bringas Insurance Group"
        }
        description="The page you are looking for does not exist. Return to Bringas Insurance Group's homepage."
        path={location.pathname}
        noindex
      />
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">{gone ? "410" : "404"}</h1>
        <p className="mb-4 text-xl text-muted-foreground">
          {gone
            ? "This page has been permanently removed."
            : "Oops! Page not found"}
        </p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
