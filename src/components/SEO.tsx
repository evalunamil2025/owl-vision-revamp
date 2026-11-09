import { getRouteSeo, OG_IMAGE_URL, SITE_URL } from "@/config/seo";

interface SEOProps {
  title: string;
  description: string;
  path: string; // e.g. "/auto-insurance" or "/"
  type?: "website" | "article";
  jsonLd?: object | object[];
  noindex?: boolean;
}

const SEO = ({ title, description, path, type = "website", jsonLd, noindex }: SEOProps) => {
  // Canonicals are always emitted without query string or hash, so tracking
  // variants (?v=, ?tid=, ?lang=) collapse into a single indexable URL.
  const cleanPath = path.split(/[?#]/)[0] ?? path;
  const normalizedPath = cleanPath === "/" ? "/" : cleanPath.replace(/\/$/, "");
  const url = `${SITE_URL}${normalizedPath}`;
  const configured = getRouteSeo(normalizedPath);
  const resolvedTitle = configured?.title || title;
  const resolvedDescription = configured?.description || description;

  const ld = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
  // React 19 hoists <title>, <meta> and <link> into <head>, including in the server-rendered HTML.
  return (
    <>
      <title>{resolvedTitle}</title>
      <meta name="description" content={resolvedDescription} />
      {!noindex && <link rel="canonical" href={url} />}
      {!noindex && <meta name="robots" content="index, follow" />}
      {noindex && <meta name="robots" content="noindex, follow" />}

      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:image" content={OG_IMAGE_URL} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@BringasIns" />
      <meta name="twitter:title" content={resolvedTitle} />
      <meta name="twitter:description" content={resolvedDescription} />
      <meta name="twitter:image" content={OG_IMAGE_URL} />
      {ld.map((obj, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(obj)}</script>
      ))}
    </>
  );
};

export default SEO;
