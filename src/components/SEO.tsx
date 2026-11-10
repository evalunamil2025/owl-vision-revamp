import { getRouteSeo, OG_IMAGE_URL, SITE_URL } from "@/config/seo";
import { getSpanishRouteSeo } from "@/config/seo-es";
import { useLocation } from "@/lib/router-compat";
import {
  addSpanishPrefix,
  isSpanishPath,
  stripSpanishPrefix,
} from "@/lib/locale-path";

interface SEOProps {
  title: string;
  description: string;
  path: string; // e.g. "/auto-insurance" or "/"
  type?: "website" | "article";
  jsonLd?: object | object[];
  noindex?: boolean;
}

const SPANISH_HOME_FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/es/#preguntas-frecuentes`,
  inLanguage: "es",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es Bringas Insurance Group?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bringas Insurance Group es una agencia de seguros independiente en Everett, Washington, que ayuda a familias y negocios a comparar opciones de cobertura.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué tipos de seguros ofrece Bringas Insurance Group?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bringas ofrece orientación sobre seguros personales y comerciales, incluyendo auto, hogar, vida, inquilinos, negocios, contratistas y fianzas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Bringas Insurance Group ofrece atención en español?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Bringas Insurance Group brinda atención en inglés y español a clientes en el estado de Washington.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo puedo solicitar una cotización de seguro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Solicita una cotización en la página de cotización o llama al (425) 405-7111. La cobertura debe ser confirmada por un agente con licencia.",
      },
    },
  ],
};

const SEO = ({
  title,
  description,
  path,
  type = "website",
  jsonLd,
  noindex,
}: SEOProps) => {
  const location = useLocation();
  // Canonicals are always emitted without query string or hash, so tracking
  // variants (?v=, ?tid=, ?lang=) collapse into a single indexable URL.
  const routeIsSpanish = isSpanishPath(location.pathname);
  const effectivePath = routeIsSpanish ? location.pathname : path;
  const cleanPath = effectivePath.split(/[?#]/)[0] ?? effectivePath;
  const normalizedPath = cleanPath === "/" ? "/" : cleanPath.replace(/\/$/, "");
  const url = `${SITE_URL}${normalizedPath}`;
  const englishPath = stripSpanishPrefix(normalizedPath);
  const configured = getRouteSeo(englishPath);
  const spanishConfigured = getSpanishRouteSeo(englishPath);
  const resolvedTitle = routeIsSpanish
    ? spanishConfigured?.title || title
    : configured?.title || title;
  const resolvedDescription = routeIsSpanish
    ? spanishConfigured?.description || description
    : configured?.description || description;
  const englishUrl = `${SITE_URL}${englishPath}`;
  const spanishUrl = `${SITE_URL}${addSpanishPrefix(englishPath)}`;

  const ld = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
  const localizedLd = ld.map((entry) => {
    if (!routeIsSpanish) return entry;
    const schema = entry as Record<string, unknown>;
    if (schema["@type"] === "FAQPage") return SPANISH_HOME_FAQ_SCHEMA;
    if (schema["@type"] === "Service") {
      return {
        ...schema,
        name: spanishConfigured?.serviceName || resolvedTitle,
        description: resolvedDescription,
        url,
        inLanguage: "es",
      };
    }
    return { ...schema, inLanguage: "es", url };
  });
  // React 19 hoists <title>, <meta> and <link> into <head>, including in the server-rendered HTML.
  return (
    <>
      <title>{resolvedTitle}</title>
      <meta name="description" content={resolvedDescription} />
      {!noindex && <link rel="canonical" href={url} />}
      {!noindex && <link rel="alternate" hrefLang="en" href={englishUrl} />}
      {!noindex && <link rel="alternate" hrefLang="es" href={spanishUrl} />}
      {!noindex && (
        <link rel="alternate" hrefLang="x-default" href={englishUrl} />
      )}
      {!noindex && <meta name="robots" content="index, follow" />}
      {noindex && <meta name="robots" content="noindex, follow" />}

      <meta property="og:type" content={type} />
      <meta property="og:locale" content={routeIsSpanish ? "es_US" : "en_US"} />
      <meta property="og:locale:alternate" content={routeIsSpanish ? "en_US" : "es_US"} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:image" content={OG_IMAGE_URL} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@BringasIns" />
      <meta name="twitter:title" content={resolvedTitle} />
      <meta name="twitter:description" content={resolvedDescription} />
      <meta name="twitter:image" content={OG_IMAGE_URL} />
      {localizedLd.map((obj, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(obj)}
        </script>
      ))}
    </>
  );
};

export default SEO;
