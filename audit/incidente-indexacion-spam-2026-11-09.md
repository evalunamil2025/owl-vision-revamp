# Incidente de indexación spam — 9 de noviembre de 2026

## Resultado

Semrush no crea ni indexa estas páginas: está detectando URLs que Google u otros rastreadores conocen. El incidente es real porque el hosting público de Bringas Insurance entrega la portada con `HTTP 200` para rutas spam e inexistentes. Esto genera *soft 404* y permite que las URLs permanezcan rastreables o aparezcan en herramientas SEO.

## Evidencia

- Inventario de Search Console auditado: 319 URLs únicas.
- URLs confirmadas como spam/hack/error: 196.
- URLs spam bajo `/2025/`: 163.
- Verificación pública del 9 de noviembre de 2026:
  - `/2025/08/12/wazamba-mobile-app-download-c98855a6/` → `200` (incorrecto; debe ser `410`).
  - `/2025/08/20/uvlekatelnye-onlaynigry-v-kazino-ot-sultan-games-dlya-gracias-iz-kazakhstana/` → `200` (incorrecto; debe ser `410`).
  - `/esta-ruta-no-debe-existir-seo-20261109` → `200` (incorrecto; debe ser `404`).
  - `http://bringasinsurance.com/` → `301` a HTTPS (correcto).
  - `http://www.bringasinsurance.com/` → `301` a `https://www...` (incompleto; debe consolidarse directamente al dominio sin `www`).

## Corrección preparada

- Política central de URLs para devolver `410 Gone` a archivos de WordPress, rutas fechadas, feeds y patrones de spam.
- `404 Not Found` real para cualquier URL desconocida.
- `301` de HTTP y `www` hacia `https://bringasinsurance.com` en un solo salto.
- `X-Robots-Tag: noindex, nofollow` en respuestas `404/410`.
- Sitemap limitado a las 26 rutas válidas; ninguna URL spam está incluida.
- Prueba automática que exige que las 196 URLs de spam conocidas, incluidas las 163 rutas `/2025/`, sean clasificadas como `410`.

## Pendiente crítico de infraestructura

La política funciona en `server/production-server.mjs`, pero el dominio público todavía sirve el fallback SPA de Lovable y por eso responde `200`. No se requiere Cloudflare. Hay dos salidas válidas:

1. Migrar el proyecto dentro de Lovable de React/Vite a TanStack Start y emitir los estados desde el servidor.
2. Publicar el runtime Node ya preparado en un hosting compatible (por ejemplo Render) y apuntar el dominio después de validar la URL temporal.

La primera opción mantiene el alojamiento actual; requiere confirmación en Lovable porque la migración reestructura el proyecto y consume créditos. No debe iniciarse una nueva validación en Search Console hasta comprobar públicamente `410/404`.

## Secuencia de cierre

1. Activar una de las dos capas de servidor.
2. Verificar muestras spam, desconocidas, rutas válidas, redirecciones y `www`.
3. Solicitar retirada temporal en Search Console solo si se necesita ocultamiento urgente; el `410` sigue siendo la solución permanente.
4. Enviar sitemap limpio y comenzar validación.
5. Reauditar Semrush después de su siguiente rastreo; la desaparición no es instantánea.
