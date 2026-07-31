import { useLocation } from "react-router-dom";
import SEO from "@/components/SEO";

// Legacy paths from the previous (compromised) WordPress site: dated archives
// like /2025/08/05/... and *.php endpoints. They are permanently gone, so we
// signal that explicitly instead of presenting them as a generic missing page.
const GONE_PATTERNS = [/^\/\d{4}\/\d{2}(\/|$)/, /\.php$/i, /^\/wp-(admin|content|includes)(\/|$)/i];

const NotFound = () => {
  const location = useLocation();
  const isGone = GONE_PATTERNS.some((re) => re.test(location.pathname));

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <SEO
        title={
          isGone
            ? "Page Removed | Bringas Insurance Group"
            : "Page Not Found | Bringas Insurance Group"
        }
        description="The page you are looking for does not exist. Return to Bringas Insurance Group's homepage."
        path={location.pathname}
        noindex
      />
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">{isGone ? "410" : "404"}</h1>
        <p className="mb-4 text-xl text-muted-foreground">
          {isGone
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
