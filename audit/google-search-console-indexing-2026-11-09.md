# Google Search Console: revisión de indexación (2026-11-09)

## Evidencia comprobada

- El sitemap público contiene exclusivamente 26 URL canónicas en `https://bringasinsurance.com/`.
- Las 26 páginas devuelven HTML inicial con un H1, canonical propio, título y descripción.
- Hay 26 títulos y 26 descripciones únicos.
- `robots.txt` permite el rastreo y declara el sitemap correcto.
- Analytics `G-5QM8V0WQ00` permanece en las 26 páginas.
- El sitemap actualizado incorpora `lastmod` de 2026-11-09 en las 26 URL.
- Problema de hosting todavía visible en Lovable: `https://www.bringasinsurance.com/` y las URL inexistentes responden `200`.

## Interpretación de la captura

| Estado de Search Console | Cantidad | Diagnóstico / acción |
|---|---:|---|
| Página alternativa con canonical adecuada | 23 | Principalmente versiones `www`; deben responder 301 al dominio raíz. |
| Página con redirección | 2 | Exclusión normal si la redirección es intencional; no se indexa la URL de origen. |
| Excluida por `noindex` | 7 | Correcto para spam o páginas retiradas; revisar los ejemplos antes de quitar `noindex`. |
| Bloqueada por robots.txt | 1 | El `robots.txt` actual no bloquea ninguna ruta; es evidencia histórica pendiente de recrawl. |
| Rastreada, actualmente sin indexar | 29 | El HTML, contenido y metadatos ya se reforzaron; solicitar recrawl con el sitemap actualizado. |
| Soft 404 | 26 | La validación aparece correcta, pero Lovable aún sirve la portada con 200 para URL desconocidas; el servidor Node debe responder 404/410 real. |
| No encontrada (404) | 5 | Exclusión correcta para URL inexistentes. |
| Descubierta, actualmente sin indexar | 4 | Estado de Google, no un error técnico confirmado; se fuerza redescubrimiento mediante sitemap e interlinking. |

## Cambio de infraestructura pendiente (sin Cloudflare)

El repositorio incluye `render.yaml` y un servidor Node probado que aplica:

- `www` → dominio raíz mediante 301;
- HTTP → HTTPS mediante 301;
- URL de spam/WordPress inyectadas → 410;
- rutas desconocidas → 404;
- páginas válidas → 200 con HTML prerenderizado;
- `X-Robots-Tag: noindex` en 404/410;
- endpoint `/healthz` para el despliegue.

Hasta mover el dominio desde Lovable al servicio Node, Google seguirá encontrando duplicados `www` y respuestas 200 para URL inexistentes.

## Secuencia posterior al cambio de hosting

1. Verificar una URL canónica (200), su variante `www` (301), una URL spam (410) y una desconocida (404).
2. En Search Console, volver a enviar `https://bringasinsurance.com/sitemap.xml` sin crear otro sitemap.
3. Inspeccionar la portada y 3–5 páginas prioritarias, ejecutar “Probar URL publicada” y “Solicitar indexación”.
4. Iniciar “Validar corrección” solo para canonical alternativa, `noindex`, robots y “rastreada sin indexar” después de confirmar sus ejemplos.
5. No validar como error las redirecciones intencionales ni los 404/410 correctos.

