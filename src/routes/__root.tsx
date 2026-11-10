import { lazy, Suspense, useEffect, useState, type ReactNode } from "react";
import { QueryClientProvider, type QueryClient } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  HeadContent,
  Link,
  Outlet,
  Scripts,
  useRouter,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import NotFound from "@/pages/NotFound";
import { useLocation } from "@/lib/router-compat";
import { trackIndexablePageView } from "@/lib/analytics";
import { reportLovableError } from "@/lib/lovable-error-reporting";
import i18n from "@/i18n";
import {
  canonicalizeSpanishPath,
  hasSpanishPrefix,
  isSpanishPath,
} from "@/lib/locale-path";
import appCss from "../styles.css?url";

const InsuranceChatbot = lazy(() => import("@/components/InsuranceChatbot"));
const WhatsAppButton = lazy(() => import("@/components/WhatsAppButton"));

const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;600;700&family=DM+Sans:wght@400;500;700&display=swap";

const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": ["InsuranceAgency", "Organization"],
  "@id": "https://bringasinsurance.com/#organization",
  name: "Bringas Insurance Group",
  url: "https://bringasinsurance.com/",
  logo: "https://bringasinsurance.com/bringas-insurance-logo.png",
  telephone: "+1-425-405-7111",
  address: {
    "@type": "PostalAddress",
    streetAddress: "9111 Evergreen Way",
    addressLocality: "Everett",
    addressRegion: "WA",
    postalCode: "98204",
    addressCountry: "US",
  },
  areaServed: { "@type": "State", name: "Washington" },
  knowsLanguage: ["English", "Spanish"],
  sameAs: [
    "https://www.facebook.com/Bringas-Insurance-111132600590435/",
    "https://twitter.com/BringasIns",
    "https://www.instagram.com/bringas_insurance_group/",
  ],
};

// Google Analytics: deferred until after load to reduce blocking time.
// Page views are sent by React only after confirming the route exists.
const GA_SNIPPET = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', 'G-5QM8V0WQ00', { send_page_view: false });
(function(){
  var loaded = false;
  function loadGA(){
    if (loaded) return; loaded = true;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=G-5QM8V0WQ00';
    document.head.appendChild(s);
  }
  if (document.readyState === 'complete') { setTimeout(loadGA, 300); }
  else { window.addEventListener('load', function(){ setTimeout(loadGA, 300); }); }
  setTimeout(loadGA, 2000);
})();
`;

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        { name: "author", content: "Bringas Insurance Group" },
        { name: "theme-color", content: "#0079c2" },
      ],
      links: [
        { rel: "stylesheet", href: appCss },
        { rel: "icon", href: "/favicon.png", type: "image/png" },
        { rel: "apple-touch-icon", href: "/favicon.png" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },
        { rel: "stylesheet", href: FONTS_URL },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(ORGANIZATION_JSON_LD),
        },
        { children: GA_SNIPPET },
      ],
    }),
    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFound,
    errorComponent: RootErrorComponent,
  },
);

function RootShell({ children }: { children: ReactNode }) {
  const location = useLocation();
  const language = hasSpanishPrefix(location.pathname) ? "es" : "en";
  return (
    <html lang={language} suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

// Defer floating widgets until the browser is idle or user interacts.
const DeferredWidgets = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    let cancelled = false;
    const reveal = () => {
      if (!cancelled) setShow(true);
    };
    const w = window as Window & {
      requestIdleCallback?: (
        cb: () => void,
        opts?: { timeout: number },
      ) => number;
    };
    const idleId = w.requestIdleCallback
      ? w.requestIdleCallback(reveal, { timeout: 3500 })
      : (window.setTimeout(reveal, 2500) as unknown as number);
    const events: Array<keyof WindowEventMap> = [
      "pointerdown",
      "keydown",
      "scroll",
      "touchstart",
    ];
    events.forEach((e) =>
      window.addEventListener(e, reveal, { once: true, passive: true }),
    );
    return () => {
      cancelled = true;
      const wc = window as Window & {
        cancelIdleCallback?: (id: number) => void;
      };
      if (wc.cancelIdleCallback) wc.cancelIdleCallback(idleId);
      else clearTimeout(idleId);
      events.forEach((e) => window.removeEventListener(e, reveal));
    };
  }, []);
  if (!show) return null;
  return (
    <Suspense fallback={null}>
      <InsuranceChatbot />
      <WhatsAppButton />
    </Suspense>
  );
};

const AnalyticsPageViews = () => {
  const location = useLocation();

  useEffect(() => {
    // Wait until the route's SEO tags have updated document.title.
    const id = window.setTimeout(() => {
      trackIndexablePageView(location.pathname, location.search);
    }, 0);
    return () => window.clearTimeout(id);
  }, [location.pathname, location.search]);

  return null;
};

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const location = useLocation();

  // The URL is the language source of truth. This prevents Spanish content from
  // appearing under an English canonical URL because of a saved preference.
  useEffect(() => {
    // Some static hosts can bypass TanStack's request middleware. Keep a
    // client-side safety net so a temporary `/es/<english-slug>` URL never
    // remains visible after hydration.
    const canonicalSpanishPath = canonicalizeSpanishPath(location.pathname);
    if (
      canonicalSpanishPath &&
      canonicalSpanishPath !== location.pathname.toLowerCase()
    ) {
      window.location.replace(
        `${canonicalSpanishPath}${location.search}${location.hash}`,
      );
      return;
    }

    void i18n.changeLanguage(isSpanishPath(location.pathname) ? "es" : "en");
  }, [location.hash, location.pathname, location.search]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ScrollToTop />
        <AnalyticsPageViews />
        <Outlet />
        <DeferredWidgets />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

function RootErrorComponent({ error, reset }: ErrorComponentProps) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="mb-2 text-2xl font-bold">This page didn't load</h1>
        <p className="mb-6 text-muted-foreground">
          Something went wrong on our end. You can try again or head back home.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            type="button"
            className="rounded-xl bg-primary px-5 py-2.5 font-semibold text-primary-foreground"
            onClick={() => {
              void router.invalidate();
              reset();
            }}
          >
            Try again
          </button>
          <Link
            to="/"
            className="rounded-xl border border-border px-5 py-2.5 font-semibold text-primary"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
