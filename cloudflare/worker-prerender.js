// Cloudflare Worker para Prerendering de Bots
// Este Worker detecta bots de búsqueda y les sirve contenido prerenderizado
// para resolver el problema de "Crawled - currently not indexed" (149 páginas)
//
// IMPORTANTE: Este Worker es OPCIONAL. Solo desplegar si se tiene un servicio
// de prerendering (Prerender.io, Rendertron, o similar).
//
// Si no se tiene servicio de prerendering, usar la Opción B (reglas estáticas)
// que se encuentra en docs/gsc-fix-deployment.md

const PRERENDER_SERVICE_URL = "https://service.prerender.io"; // Cambiar por tu servicio

// Lista de bots de búsqueda que necesitan contenido prerenderizado
const SEARCH_BOTS = [
  "googlebot",
  "bingbot",
  "yandexbot",
  "duckduckbot",
  "slurp",
  "baiduspider",
  "facebot",
  "ia_archiver",
];

// Patrones de archivos estáticos que NUNCA deben ser prerenderizados
const STATIC_ASSETS = /\.(js|mjs|css|png|jpe?g|webp|avif|gif|svg|ico|woff2?|ttf|txt|xml|json|map|webmanifest|mp4|pdf)$/i;
const STATIC_PATHS = ["/assets/", "/.well-known/", "/cdn-cgi/", "/api/"];

// Rutas válidas de la aplicación (deben coincidir con src/config/redirects.ts)
const VALID_ROUTES = new Set([
  "/",
  "/about",
  "/quote",
  "/contact",
  "/auto-insurance",
  "/home-insurance",
  "/life-insurance",
  "/boat-insurance",
  "/motorcycle-insurance",
  "/rv-insurance",
  "/renters-insurance",
  "/landlord-insurance",
  "/mobile-home-insurance",
  "/personal-umbrella",
  "/general-liability",
  "/bop-insurance",
  "/commercial-auto",
  "/commercial-property",
  "/contractors-insurance",
  "/restaurant-insurance",
  "/building-owners",
  "/bonds-surety",
  "/pay-my-bill",
  "/client-center",
  "/carriers",
  "/sr22-insurance",
]);

/**
 * Detecta si el User-Agent es un bot de búsqueda
 */
function isSearchBot(userAgent) {
  if (!userAgent) return false;
  const ua = userAgent.toLowerCase();
  return SEARCH_BOTS.some((bot) => ua.includes(bot));
}

/**
 * Verifica si la solicitud es para un archivo estático
 */
function isStaticAsset(pathname) {
  if (STATIC_ASSETS.test(pathname)) return true;
  return STATIC_PATHS.some((path) => pathname.startsWith(path));
}

/**
 * Obtiene el contenido prerenderizado del servicio
 */
async function getPrerenderedContent(url) {
  const prerenderUrl = `${PRERENDER_SERVICE_URL}/${url.href}`;

  try {
    const response = await fetch(prerenderUrl, {
      headers: {
        "User-Agent": "PrerenderWorker",
      },
      cf: {
        cacheTtl: 300, // Cache por 5 minutos
        cacheEverything: true,
      },
    });

    if (response.ok) {
      return response;
    }

    // Si el servicio de prerendering falla, servir la SPA normal
    return null;
  } catch (error) {
    console.error("Prerender service error:", error);
    return null;
  }
}

/**
 * Headers de respuesta para contenido prerenderizado
 */
function getPrerenderHeaders() {
  return {
    "Content-Type": "text/html; charset=utf-8",
    "X-Robots-Tag": "index, follow",
    "Cache-Control": "public, max-age=300, s-maxage=300",
    "X-Prerendered": "true",
  };
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const userAgent = request.headers.get("User-Agent") || "";

    // 1) Si no es un bot de búsqueda, servir la SPA normal
    if (!isSearchBot(userAgent)) {
      return fetch(request);
    }

    // 2) Si es un archivo estático, servir directamente
    if (isStaticAsset(url.pathname)) {
      return fetch(request);
    }

    // 3) Si es una ruta válida, intentar prerenderizar
    const path = url.pathname.length > 1
      ? url.pathname.replace(/\/+$/, "").toLowerCase()
      : "/";

    if (VALID_ROUTES.has(path)) {
      const prerendered = await getPrerenderedContent(url);
      if (prerendered) {
        return new Response(await prerendered.text(), {
          status: 200,
          headers: getPrerenderHeaders(),
        });
      }
    }

    // 4) Para cualquier otra ruta, servir la SPA normal
    // (el Worker de status codes se encargará de 301/404/410)
    return fetch(request);
  },
};
