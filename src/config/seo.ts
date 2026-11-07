import routeSeo from "./seo-routes.json";

export interface RouteSeo {
  title: string;
  description: string;
  kind?: "home" | "service";
  serviceName?: string;
}

export const SITE_URL = "https://bringasinsurance.com";
export const OG_IMAGE_URL = `${SITE_URL}/bringas-insurance-logo.png`;

export const SEO_ROUTES = routeSeo as Record<string, RouteSeo>;

export const getRouteSeo = (path: string): RouteSeo | undefined => SEO_ROUTES[path];
