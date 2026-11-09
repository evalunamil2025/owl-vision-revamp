# Revisión del export de páginas de Semrush

Fuente: `bringasinsurance.com_pages_20261109.csv` (solo lectura).
Revisión: 9 de noviembre de 2026, America/Mexico_City.

## Resumen ejecutivo

- El export contiene 45 filas: 44 páginas HTML y el sitemap. Las 44 páginas
  HTML representan solo 22 rutas, repetidas entre apex y `www`.
- Las 22 URLs `www` devuelven 200; esta es la causa principal de duplicación.
- Las 44 observaciones HTML comparten la misma descripción del shell antiguo y
  21 títulos aparecen duplicados por host.
- El crawl no descubrió cuatro rutas del sitemap: `/sr22-insurance`,
  `/pay-my-bill`, `/client-center` y `/carriers`.
- La columna `Blocked AI search bots` está vacía en las 45 filas. Este archivo
  no demuestra ningún bot de IA bloqueado.

## Evidencia del CSV

| Hallazgo | Evidencia | Impacto |
| --- | ---: | --- |
| Duplicación de host | 23 filas apex y 22 `www`; todas HTTP 200 | Alto |
| Descripción duplicada | Un mismo texto en las 44 páginas HTML | Alto |
| Títulos duplicados | 21 grupos duplicados | Alto |
| Crawl incompleto | 22 rutas únicas frente a 26 del sitemap | Medio/Alto |
| Página sin enlaces salientes | `/contractors-insurance` registró 0 y el título genérico | Medio |
| HTML lento | 7 observaciones por encima de 3 segundos | Medio |
| Bots de IA bloqueados | 0 filas con un valor en esa columna | Ninguno |

El campo `Issues` contiene únicamente un número de problemas por página, no los
nombres de las reglas. Por ello no es posible atribuir con seguridad cada
contador sin el export detallado de issues.

## Comparación con producción actual

Varias observaciones pertenecen a un bundle anterior. La verificación pública
posterior al export confirma:

- Las rutas representativas ya tienen título, descripción, canonical, robots,
  H1 y schema propios después de ejecutar JavaScript.
- El DOM actual contiene 26 rutas internas únicas y enlaza las cuatro páginas
  que el CSV no descubrió.
- `robots.txt` permite explícitamente OpenAI, Perplexity, Claude y Google
  Extended; `llms.txt` y el sitemap responden 200.
- Las rutas señaladas como lentas respondieron en la comprobación actual entre
  0.11 y 0.48 segundos de TTFB en apex. El `www` siguió siendo más lento y
  devolviendo 200.
- El HTML inicial todavía comparte título/description genéricos y carece de
  canonical/H1 por ruta. Solo la entidad global Organization/InsuranceAgency
  aparece ya en el HTML inicial.

## Correcciones y estado

| Corrección | Estado |
| --- | --- |
| Metadatos únicos en React | Publicado; requiere nuevo crawl |
| 26 enlaces internos y páginas antes huérfanas | Publicado; requiere nuevo crawl |
| Bots IA, `llms.txt` y schema de entidad | Publicado |
| Pruebas para las cuatro rutas antes huérfanas | Añadidas |
| Prueba de 301 `www` para las 26 rutas | Añadida y aprobada localmente |
| Un 301 real de HTTPS `www` a apex | Preparado en servidor Node; no activo públicamente |
| Metadata por ruta en HTML inicial | Preparado en servidor Node; no activo públicamente |
| 404/410 y redirects de legados | Preparados en servidor Node; no activos públicamente |

## Acción priorizada

1. Desplegar el servidor Node definido en `render.yaml` y apuntar apex/`www` al
   servicio sin modificar correo ni blog.
2. Verificar públicamente un solo 301 desde `www` a la misma ruta apex, HTML
   inicial por ruta, 404 de desconocidas y 410 de spam.
3. Ejecutar un Site Audit nuevo en Semrush después del despliegue. El export
   actual no debe usarse para evaluar el bundle recién publicado.
4. Si permanecen contadores, exportar también la tabla detallada de Issues para
   disponer de regla, URL y evidencia, no solo el número por página.

No se considera resuelto el problema de duplicación mientras HTTPS `www` siga
respondiendo 200 en producción.

## Detalle de las cuatro advertencias

El export detallado `bringasinsurance.com_issues_20261109.csv` confirma cuatro
advertencias activas en el rastreo:

| Advertencia | Diagnóstico | Corrección/estado |
| --- | --- | --- |
| 44 enlaces externos rotos | El perfil de LinkedIn compartido en el footer responde `999` a rastreadores; Facebook, X, Instagram, Maps y WhatsApp respondieron `200` | Se retiró el perfil de LinkedIn no verificable del footer, Contact y `sameAs` |
| 44 relaciones texto/HTML bajas | Afecta exactamente a todas las respuestas React/Vite; es una señal del shell SPA, no 44 defectos de contenido independientes | Se corrige estructuralmente con SSR/TanStack Start o con el runtime Node preparado |
| 3 páginas con pocas palabras | El export de issues no incluye las tres URLs; el crawl de `/contractors-insurance` apex falló parcialmente (0 enlaces internos y título genérico), por lo que al menos una medición es incompleta | Repetir auditoría tras SSR; no inflar contenido sin identificar primero las URLs restantes |
| 1 página sin H1 | El código de `/contractors-insurance` sí usa `ServicePageLayout`, que genera un `<h1>` semántico; el mismo registro fue el único con render incompleto | Se añadió una prueba contractual del H1; SSR evitará que el rastreador reciba el shell sin contenido |

La relación texto/HTML y un conteo bruto de palabras son advertencias de la
herramienta, no sustituyen la evaluación de intención o calidad. En este caso,
su coincidencia con el fallo de renderizado exige corregir primero la entrega
del HTML inicial.
