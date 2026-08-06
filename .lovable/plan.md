# Corregir los 4 informes de cobertura de Google Search Console

Los cuatro archivos son exportaciones de GSC del 2026-08-06 con estos volúmenes:

| Informe | Páginas | Diagnóstico |
|---|---|---|
| No encontrada (404) | 13 (321 en gráfico) | URLs de una tienda antigua (`/shopdetail/*.html`, `/shop/cart/cart.aspx`, `*.htm`) + `/privacy/` |
| Soft 404 | 28 | 16 spam de casino (`/2025/...`) + 12 páginas legacy legítimas sin redirect |
| Rastreada, sin indexar | 229 (4.830 en gráfico) | 127 spam `/2025/...` + ~60 URLs legacy ES/EN + ~45 duplicados `?v=` |
| Alternativa con canónica correcta | 22 | Solo variantes `?v=` y `?tid=` — **no es un error**, no requiere acción |

## Causa raíz (ya identificada, sin resolver)

El sitio es una SPA estática: cualquier URL responde **HTTP 200** con el HTML del index. Por eso Google marca *soft 404* y sigue rastreando miles de URLs muertas. Solo el Worker de borde (`docs/edge-redirects.md`, que depende de la migración DNS de `docs/dns-migration-cloudflare.md`) puede devolver 301/404/410 reales. Ese paso sigue pendiente de tu aprobación.

Lo que sí se puede hacer ya en el código: dejar la tabla de redirects y de "gone" completa y correcta, para que el día que se active el Worker todo funcione de inmediato, y para que mientras tanto los visitantes reales aterricen en la página correcta.

## Qué haré

### 1. Ampliar `LEGACY_REDIRECTS` en `src/config/redirects.ts`
Añadir los ~35 pares que faltan y que hoy caen en soft 404 / sin indexar, cada uno con su gemelo en español y su prefijo `/es/`:

- `seguros-de-hogar-*`, `seguros-de-propietarios-*` → `/home-insurance`
- `seguros-para-motocicleta-*`, `motorcycle-insurance-*`, `/motorcycle-insurance/` → `/motorcycle-insurance`
- `boat-insurance-*`, `/boat-insurance/` → `/boat-insurance`
- `landlord-insurance-*` → `/landlord-insurance`
- `mobile-home-insurance-*`, `seguro-para-casas-prefabricadas` → `/mobile-home-insurance`
- `personal-umbrella-*`, `/personal-umbrella/` → `/personal-umbrella`
- `seguros-de-responsabilidad-general-*`, `general-insurance-*` → `/general-liability`
- `business-owners-insurance-*`, `seguros-para-propietarios-de-negocios-*` → `/bop-insurance`
- `commercial-auto-insurance-*`, `seguro-auto-comercial-*` → `/commercial-auto`
- `building-insurance-*`, `seguros-para-propietarios-de-edificios-*` → `/building-owners`
- `seguros-para-restaurantes-*`, `/restaurant-insurance/` → `/restaurant-insurance`
- `seguros-para-inquilinos-*` → `/renters-insurance`
- `seguro-para-vehiculos-recreativos-*`, `/recreational-vehicle-insurance/` → `/rv-insurance`
- `/contacto`, `/contact/` → `/contact`
- `/agentes` → `/about`
- `/privacy` → `/` (o a la página legal si decides crearla)

Y una regla genérica: cualquier ruta que termine en `-in-seattle-washington` o empiece por `/es/` se resuelve quitando el sufijo/prefijo y buscando de nuevo en la tabla, para cubrir variantes no listadas sin duplicar 60 entradas.

### 2. Ampliar `GONE_PATTERNS` (410)
Añadir los patrones de la tienda antigua y del spam restante que hoy no coinciden:

- `/shopdetail/...html`, `/shop/...`, `/cart/...`
- rutas de 8 caracteres aleatorios tipo `/w22zmd5m`, `/g1ajkimh`
- prefijos de spam `vvip*`, `claim-*`, `match-*`, `reward-*`, `mega-*`, `new-*`, `prime-*` seguidos de hash
- `?p=` y `?tid=` de WordPress

### 3. Normalizar parámetros `?v=`
Los ~45 duplicados `?v=` ya están correctamente agrupados por la canónica, pero añadiré en `src/components/SEO.tsx` la garantía de que la canónica se emite **siempre sin query string** (salvo parámetros reales de la app), para que ninguna variante nueva escape.

### 4. `robots.txt`
Añadir `Disallow` para `/shopdetail/`, `/shop/`, `/2025/`, `/category/`, `/tag/`, `/feed/` y `/wp-` — reduce el presupuesto de rastreo desperdiciado desde ya, sin esperar al Worker.

### 5. Actualizar `docs/edge-redirects.md`
Regenerar el bloque de reglas del Worker a partir de la tabla ampliada, para que quede listo para copiar y pegar.

## Lo que no haré

- No tocaré diseño, layout ni UX.
- No crearé la página `/faq` en este plan (queda para su propio cambio, aunque `/es/faq/` aparece en el informe).
- No modificaré DNS ni desplegaré nada en Cloudflare.

## Nota importante

Sin el Worker en el borde, estos cambios **mejoran la experiencia del usuario y el rastreo**, pero Google seguirá viendo 200 en las URLs muertas. La limpieza real de los 4.830 "rastreada sin indexar" y de los soft 404 solo ocurre cuando se activen los códigos 301/410 reales.
