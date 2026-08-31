# Guía de Despliegue - Corrección de Errores GSC

**Fecha:** 2026-08-19  
**Objetivo:** Resolver los 10 tipos de errores de Google Search Console para bringasinsurance.com

---

## Resumen de Errores GSC

| Error | Cantidad | Prioridad | Solución |
|---|---|---|---|
| Soft 404 | 28 | Crítico | Cloudflare Rules (410 + 404) |
| Crawled, not indexed | 149 | Crítico | Prerendering para bots |
| Excluded by noindex | 18 | Medio | Verificar (probablemente correcto) |
| Alternate with canonical | 22 | Bajo | Correcto, monitorear |
| Page with redirect | 3 | Medio | Verificar Bulk Redirects |
| Not found (404) | 10 | Medio | Cloudflare Rules |
| Blocked by robots.txt | 1 | Bajo | Verificar |
| Other 4xx | 1 | Bajo | Investigar |
| Discovered, not indexed | 4 | Medio | Resolución automática |
| Server error (5xx) | 0 | N/A | Sin acción |

---

## FASE 1: Cloudflare Rules (Resuelve Soft 404 + 404 + Redirects)

### Problema
El hosting (Lovable) sirve `index.html` con HTTP 200 para todas las URLs, incluidas spam/legado. Google las marca como Soft 404.

### Solución
Usar **Bulk Redirects** + **WAF Custom Rules** de Cloudflare (NO el Worker, que no funciona por O2O).

### Pasos de Despliegue

#### 1.1 Importar Bulk Redirects (301s)

1. Cloudflare Dashboard → **Bulk Redirects** → **Create bulk redirect list**
2. Nombre: `bringas-legacy`
3. Importar `cloudflare/bringas-redirects.csv` (207 reglas)
4. Configuración:
   - Preserve query string: **OFF**
   - Subpath matching: **OFF**
   - Include subdomains: **ON**
5. Crear **Bulk Redirect Rule** usando la lista `bringas-legacy`
6. Activar la regla

#### 1.2 Crear WAF Rule para 410 (Spam/Hack)

1. Cloudflare Dashboard → **Security → WAF → Custom rules**
2. Crear regla `spam-410`
3. Expression:

```
(http.request.method in {"GET" "HEAD"}) and (
  http.request.uri.path matches "^/wp-(admin|content|includes|json|login)(/|$)" or
  http.request.uri.path matches "^/xmlrpc" or
  http.request.uri.path matches "^/(category|tag|feed|author|comments)(/|$)" or
  http.request.uri.path matches "^/2025(/|$)" or
  http.request.uri.path matches "\\.(php|htm|asp|aspx)$" or
  http.request.uri.path matches "^/(shop|shopdetail|cart|checkout|myaccount|order|shopping)(/|$)" or
  lower(http.request.uri.path) matches "(casino|gambling|betting|slots?|poker|game-?coins?|free-?spins?|bonus-?code)" or
  lower(http.request.uri.path) matches "^/(vvip|claim|match|reward|mega|prime|new|grab|win|boost)[a-z]*-[a-z0-9]{5,}-"
)
```

4. Action: **Block**
5. Custom response:
   - Status code: `410`
   - Content type: `text/html`
   - Body: `Gone`
   - Response headers: `X-Robots-Tag: noindex`

#### 1.3 Crear WAF Rule para 404 (URLs Desconocidas)

**NOTA:** Implementar SOLO después de verificar que las reglas 301 y 410 funcionan.

1. Crear regla `unknown-404`
2. Expression:

```
(http.request.method in {"GET" "HEAD"}) and not (
  http.request.uri.path in {"/" "/about" "/quote" "/contact" "/auto-insurance" "/home-insurance" "/life-insurance" "/boat-insurance" "/motorcycle-insurance" "/rv-insurance" "/renters-insurance" "/landlord-insurance" "/mobile-home-insurance" "/personal-umbrella" "/general-liability" "/bop-insurance" "/commercial-auto" "/commercial-property" "/contractors-insurance" "/restaurant-insurance" "/building-owners" "/bonds-surety" "/pay-my-bill" "/client-center" "/carriers" "/sr22-insurance"} or
  http.request.uri.path matches "\\.(js|mjs|css|png|jpe?g|webp|avif|gif|svg|ico|woff2?|ttf|txt|xml|json|map|webmanifest|mp4|pdf)$" or
  http.request.uri.path starts_with "/assets/" or
  http.request.uri.path starts_with "/.well-known/" or
  http.request.uri.path starts_with "/cdn-cgi/" or
  http.request.uri.path starts_with "/api/"
)
```

3. Action: **Block**
4. Custom response:
   - Status code: `404`
   - Content type: `text/html`
   - Body: `Not Found`
   - Response headers: `X-Robots-Tag: noindex`

---

## FASE 2: Prerendering para Bots (Resuelve Crawled Not Indexed)

### Problema
Googlebot ve HTML vacío del SPA porque los meta tags se inyectan vía JavaScript. Las 149 páginas crawleadas no se indexan.

### Solución
Configurar Cloudflare para servir HTML prerenderizado a bots de búsqueda.

### Opción A: Cloudflare Workers con Prerender (Recomendada)

**Requisito:** Contratar servicio de prerendering (Prerender.io, Rendertron, o similar).

1. Crear cuenta en Prerender.io (~$0-50/mes)
2. Obtener URL del servicio (ej: `https://service.prerender.io/`)
3. Crear Cloudflare Worker para detectar bots y redirigir:

```javascript
// Prerender Worker para Cloudflare
const PRERENDER_URL = "https://service.prerender.io";

const BOT_AGENTS = [
  "googlebot",
  "bingbot",
  "yandexbot",
  "duckduckbot",
  "slurp",
  "baiduspider",
];

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const userAgent = request.headers.get("user-agent") || "";
    const isBot = BOT_AGENTS.some((bot) =>
      userAgent.toLowerCase().includes(bot)
    );

    // Solo interceptar bots en rutas de páginas
    if (isBot && !url.pathname.match(/\.(js|css|png|jpg|gif|svg|ico|woff|ttf|xml|json)$/i)) {
      // Servir desde prerender
      const prerenderUrl = `${PRERENDER_URL}/${url.href}`;
      const response = await fetch(prerenderUrl);
      return response;
    }

    // Para usuarios normales, servir la SPA
    return fetch(request);
  },
};
```

4. Adjuntar Worker a `bringasinsurance.com/*`
5. Verificar con Google Search Console → URL Inspection → Test Live URL

### Opción B: Cloudflare Rules con Signed Exchanges

Alternativa más simple pero menos efectiva:

1. Cloudflare Dashboard → **Speed → Optimization → Content Optimization**
2. Activar **Early Hints** y **Automatic HTTPS Rewrites**
3. Estas mejoras ayudan pero no resuelven completamente el problema de SSR

### Opción C: Migración a Framework con SSR (Solución Definitiva)

Si el presupuesto lo permite, migrar a:
- **Next.js** con Vercel/Netlify (mejor para SEO)
- **Astro** (ligero, genera HTML estático con Island Architecture)
- **Vite SSR** con `vike` (manteniendo React)

---

## FASE 3: Mejoras al Código

### 3.1 Actualizar index.html para Mejor Detección de Bots

Agregar meta tags server-side que Googlebot pueda leer sin JavaScript:

```html
<!-- Agregar en <head> de index.html -->
<meta name="robots" content="index, follow">
<meta name="googlebot" content="index, follow">
<link rel="canonical" href="https://bringasinsurance.com/">
```

### 3.2 Mejorar SEO.tsx para Fallback Server-Side

El componente `SEO.tsx` actual funciona bien, pero necesita un fallback en el HTML estático para cuando JavaScript no carga.

### 3.3 Actualizar robots.txt

Después de desplegar las reglas de Cloudflare, actualizar `public/robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://bringasinsurance.com/sitemap.xml
```

**NOTA:** Remover cualquier `Disallow` temporal que bloquee crawleo.

---

## FASE 4: Verificación Post-Deploy

### 4.1 Verificación con curl

```bash
# Verificar respuestas HTTP
for p in / /auto-insurance /wp-admin/ /2025/test-spam/ /random-url/ \
         /payments/ /seguros-para-autos-en-seattle-washington/; do
  printf '%-60s ' "$p"
  curl -s -o /dev/null -w '%{http_code} %{redirect_url}\n' "https://bringasinsurance.com$p"
done

# Esperado:
# /                                                          200
# /auto-insurance                                            200
# /wp-admin/                                                 410
# /2025/test-spam/                                           410
# /random-url/                                               404
# /payments/                                                 301 → /pay-my-bill
# /seguros-para-autos-en-seattle-washington/                 301 → /auto-insurance
```

### 4.2 Verificación en Google Search Console

1. **URL Inspection** → Test Live URL para páginas representativas:
   - Página válida: `/auto-insurance`
   - URL redirigida: `/payments/`
   - URL spam: `/wp-admin/`
   - URL desconocida: `/random-url/`

2. **Solicitar validación** para cada categoría de error:
   - Soft 404
   - Crawled, not indexed
   - Excluded by noindex

3. **Monitorear semanalmente** durante 4 semanas:
   - Page indexing report
   - Crawl stats
   - Manual actions

### 4.3 Script de Verificación

Ejecutar `scripts/verify-seo-status.mjs` contra producción:

```bash
SEO_BASE_URL=https://bringasinsurance.com node scripts/verify-seo-status.mjs
```

---

## Cronograma de Despliegue

| Día | Acción | Impacto Esperado |
|---|---|---|
| Día 1 | Importar Bulk Redirects | Resuelve 3 Page with redirect |
| Día 1 | Crear WAF Rule 410 | Resuelve 28 Soft 404 (spam) |
| Día 2 | Verificar con curl y GSC | Confirmar que funciona |
| Día 3 | Crear WAF Rule 404 | Resuelve 10 Not found |
| Día 3 | Actualizar robots.txt | Mejora crawl budget |
| Día 4 | Configurar Prerendering | Resuelve 149 Crawled not indexed |
| Día 5 | Solicitar validación en GSC | Inicia proceso de limpieza |
| Semana 2-4 | Monitorear | Confirmar mejoría |

---

## Rollback

Si algo falla:

1. **Deshabilitar WAF Rule 404** → el sitio vuelve a servir SPA para URLs desconocidas
2. **Deshabilitar WAF Rule 410** → las URLs spam vuelven a servir 200
3. **Deshabilitar Bulk Redirects** → las URLs legado vuelven a servir 200
4. **Remover Worker Routes** → el Worker deja de ejecutarse

**Ninguna acción afecta el DNS o el hosting.** Todo es reversible desde el panel de Cloudflare.

---

## Notas Importantes

1. **El Worker NO funciona** debido a la configuración O2O de Lovable/Cloudflare for SaaS. Usar **Rules Engine** en su lugar.

2. **El prerendering es opcional** pero altamente recomendado para resolver el problema de 149 páginas crawleadas no indexadas.

3. **Las reglas de Cloudflare se ejecutan ANTES** que el Worker. Si ambas están activas, las reglas tienen prioridad.

4. **Los Bulk Redirects cubren** las 26 rutas válidas + 207 URLs legado con/sin variante `/es`.

5. **El sitemap.xml está correcto** con 26 URLs únicas. No requiere cambios.

---

## Archivos Relacionados

- `cloudflare/bringas-redirects.csv` - 207 reglas de redirect 301
- `cloudflare/worker.js` - Worker generado (NO desplegar, usar Rules)
- `cloudflare/waf-rules.md` - Documentación de reglas WAF
- `src/config/redirects.ts` - Fuente de verdad de URLs
- `scripts/verify-seo-status.mjs` - Script de verificación
- `seo/reports/gsc-url-audit.csv` - Auditoría de 319 URLs
