# Auditoría técnica GSC — Bringas Insurance

Fecha de auditoría: 2026-08-04. Alcance: repositorio local, cinco exportaciones ZIP de GSC y comprobaciones HTTP públicas de solo lectura. No se modificó ni desplegó la aplicación.

## Resumen ejecutivo

El proyecto es una SPA Vite + React 18 con `react-router-dom`. `<Route path="*">` monta `src/pages/NotFound.tsx`, pero la respuesta HTTP de la plataforma entrega `index.html` con HTTP 200 para rutas inexistentes. La URL de prueba `/prueba-seo-inexistente-987654/` fue verificada: devuelve HTTP 200, no redirige y su cuerpo tiene los mismos 4,876 bytes del shell inicial de la portada. Esto explica soft 404 y muchas URLs no indexadas.

La capa pública está detrás de Cloudflare (encabezado `server: cloudflare`) y expone `x-deployment-id`; el repositorio no contiene `vercel.json`, `netlify.toml`, `.htaccess`, configuración Nginx/Apache ni reglas de redirect/rewrite. El proveedor exacto no puede afirmarse solo con estos datos; sí puede afirmarse que el catch-all responsable está fuera del repositorio o en la configuración de la plataforma.

Los CSV muestran señales claras de contenido heredado/comprometido de WordPress: rutas fechadas de 2025, feeds, categorías, \.php, \.htm, \/shopdetail, casino/juegos, parámetros \?v= y \?tid=. No se deben redirigir masivamente a la home.

## Conteo consolidado

Se consolidaron 319 URLs únicas provenientes de 5 archivos ZIP. Las categorías GSC se conservan por URL en el CSV.

Distribución de los cinco archivos entregados: 229 “Rastreada: actualmente sin indexar”, 28 “Soft 404”, 27 excluidas por `noindex`, 22 alternativas con canonical adecuada y 13 404. No había CSV separado en esta carpeta para las categorías “Descubierta: actualmente sin indexar”, “Página con redirección” u “Otro error 4xx”; no las presento como verificadas.

| Clasificación | URLs |
|---|---:|
| URL spam, hackeada o generada por error | 196 |
| Página válida que debe indexarse | 61 |
| URL movida con reemplazo equivalente | 34 |
| Problema cuyo origen está fuera del repositorio | 16 |
| Caso que requiere revisión manual | 12 |

## Arquitectura encontrada

- Framework/build: Vite + React + TypeScript; dependencias de React 18, Vite 5.
- Router: `BrowserRouter` y rutas explícitas en `src/App.tsx`; fallback `path="*"`.
- SEO: `react-helmet-async` en `src/components/SEO.tsx`; canonical y noindex se generan en cliente.
- 404/410 lógico: `src/pages/NotFound.tsx`; patrones fechados, \.php y wp-* muestran texto 410, pero no fijan el status HTTP.
- Sitemap/robots: `public/sitemap.xml` y `public/robots.txt`; robots permite todo y declara sitemap.
- Redirects/rewrites de servidor: no encontrados en el repo.
- CMS/backend WordPress: no hay código WordPress actual; GSC sí evidencia legado o compromiso anterior.
- Hosting observado: Cloudflare como proxy/CDN; `x-deployment-id` sugiere plataforma gestionada. Proveedor concreto y regla exacta requieren acceso al panel/logs.

## URL inexistente probada

`https://bringasinsurance.com/prueba-seo-inexistente-987654/` → HTTP 200; sin Location; `content-type: text/html; charset=utf-8`; mismo shell `index.html` que la portada; sin `X-Robots-Tag`. La regla catch-all/fallback SPA está en la plataforma de despliegue, no en un archivo del repositorio identificado.

## Sitemap

El sitemap local contiene 26 URLs. La comparación está en el CSV. No contiene las URLs GSC heredadas, pero sí debe comprobarse en cada despliegue que ninguna entrada produzca redirect, 404/410, noindex o canonical a otra URL. Las rutas estratégicas actuales del sitemap son coherentes con las rutas explícitas, aunque el SEO por cliente impide verificar canonical/meta desde el HTML inicial sin renderizador.

## Acciones por ámbito

### Corregible desde el repositorio

- Mantener el sitemap limitado a URLs válidas, indexables y HTTP 200.
- Mejorar el manejo semántico de NotFound, pero coordinarlo con la capa que emite el status HTTP.
- Revisar canonical/noindex client-side y añadir pruebas automatizadas de rutas, sitemap y metadatos renderizados.
- Eliminar enlaces internos heredados si se identifican en CMS/menús o datos.

### Requiere hosting/servidor/CMS/base de datos

- Hacer que rutas desconocidas devuelvan 404 real y rutas confirmadas eliminadas 410 real.
- Implementar únicamente los redirects equivalentes del archivo de propuesta, después de validación.
- Investigar logs, reglas del proveedor, DNS, Cloudflare Workers/Pages/Redirect Rules y cualquier instalación WordPress anterior.
- Revisar origen de parámetros \?v= y \?tid=, enlaces externos y señales de compromiso.

## URLs que deberían devolver 404/410

Las URLs spam/hackeadas o generadas por error sin reemplazo equivalente deben devolver 410 cuando exista certeza de eliminación permanente; si la certeza histórica no es suficiente, 404 real. El CSV identifica cada URL. No se propone redirigirlas a la home. En particular, rutas fechadas de casino/juegos, feeds, categorías WordPress, `.php`, `.htm`, `/shopdetail` y cart no deben seguir devolviendo 200.

Las 16 URLs que ya fueron observadas con HTTP 404 son, en su totalidad, rutas heredadas `.htm`, `/shopdetail/...` o `/shop/cart/cart.aspx`; deben conservar 404 o pasar a 410 solo tras confirmar eliminación permanente. Para el resto de las 196 URLs clasificadas como spam/hack/error, la recomendación es 410 si se confirma que no existe reemplazo; de lo contrario, 404. La lista completa por URL, estado actual y recomendación está en `gsc-url-audit.csv`.

## Páginas que deberían indexarse

Las 61 rutas válidas explícitas de `src/App.tsx` deben poder responder HTTP 200, tener canonical autorreferente, no tener noindex y estar enlazadas internamente; el detalle por URL está en el CSV.

## Riesgos antes de implementar

- Un 301 incorrecto puede consolidar spam con páginas comerciales y transferir señales dañinas.
- Cambiar el fallback sin verificar hosting puede dejar la SPA inaccesible en rutas válidas.
- El SEO client-side puede diferir de lo observado por curl; validar con navegador/renderizado y URL Inspection de GSC.
- Las fechas del export y los conteos de contexto no coinciden necesariamente con cada archivo; este informe usa literalmente todos los ZIP disponibles y deduplica URLs.
- Deben conservarse logs y una copia/versionado de las reglas antes de activar 404/410/redirects.

Archivos generados: \[gsc-url-audit.csv](./gsc-url-audit.csv), \[proposed-redirect-map.csv](./proposed-redirect-map.csv), \[files-to-modify.md](./files-to-modify.md).
