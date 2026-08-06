import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path: string; // e.g. "/auto-insurance" or "/"
  type?: "website" | "article";
  jsonLd?: object | object[];
  noindex?: boolean;
}

const SITE = "https://bringasinsurance.com";

const SEO = ({ title, description, path, type = "website", jsonLd, noindex }: SEOProps) => {
  // Canonicals are always emitted without query string or hash, so tracking
  // variants (?v=, ?tid=, ?lang=) collapse into a single indexable URL.
  const cleanPath = path.split(/[?#]/)[0];
  const url = `${SITE}${cleanPath === "/" ? "/" : cleanPath.replace(/\/$/, "")}`;

  const ld = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {!noindex && <link rel="canonical" href={url} />}
      {noindex && <meta name="robots" content="noindex, follow" />}

      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ld.map((obj, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(obj)}</script>
      ))}
    </Helmet>
  );
};

export default SEO;
