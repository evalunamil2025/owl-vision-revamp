# Reporte corto de corrección SEO técnica

Fecha de verificación: 6 de noviembre de 2026 (America/Mexico_City).

## Resultado

Se preparó una solución completa **sin Cloudflare**. El repositorio ahora
incluye un servidor Node para producción y una definición de despliegue en
Render. Esta capa entrega metadatos en el HTML inicial, normaliza host y URLs,
emite estados HTTP reales y conserva el formulario de contacto.

La corrección está terminada y probada en el repositorio, pero **todavía no está
activa en `bringasinsurance.com`**. No se inició validación en Search Console.

## Trabajo realizado

- Se centralizaron título, descripción, canonical, robots, Open Graph, Twitter
  y schema para las 26 rutas legítimas.
- Se eliminaron duplicados de metadatos y se conservaron contenido, H1, diseño,
  branding, CTAs, teléfono, dirección y URLs públicas.
- Se añadieron enlaces HTML internos a las cuatro páginas que aparecían como
  huérfanas en los CSV: SR-22, pagos, centro de clientes y aseguradoras.
- Se añadió `llms.txt`; hoy ya responde 200 en producción.
- Se revisaron los dos CSV: 45 páginas, 101 reglas de auditoría y duplicación
  causada principalmente por 22 URLs `www` que también respondían 200.
- Se contrastó el inventario de Search Console: las 163 URLs bajo `/2025/`
  están clasificadas como hack/spam; no hay rutas fechadas en el router ni en
  el sitemap. Por eso se conserva el 410 para esa familia retirada.
- Se implementó `server/production-server.mjs` para devolver 200, 301, 404 y
  410 reales, `X-Robots-Tag: noindex` en errores y metadatos por ruta en el
  HTML inicial.
- Se movió el formulario a `/api/contact`; el servidor lo entrega mediante
  Resend sin exponer la clave al navegador.
- Se añadió `render.yaml` y una guía de despliegue con DNS administrado en
  GoDaddy. No se requiere cuenta, Worker, proxy ni reglas de Cloudflare.
- Se añadieron pruebas automáticas y scripts repetibles para auditar HTML
  inicial y DOM después de JavaScript.

## Verificación local

- 23 pruebas aprobadas y 1 prueba pública opcional omitida.
- TypeScript sin errores.
- Build de producción completado con 2,477 módulos.
- ESLint sin errores; quedan 8 avisos no bloqueantes de Fast Refresh/UI.
- `git diff --check` sin errores de whitespace.

## Evidencia pública actual

| Prueba | Producción actual | Resultado esperado tras desplegar Node |
| --- | --- | --- |
| Rutas legítimas | 200 | 200 |
| HTML inicial por ruta | título/description genéricos; sin canonical, H1 o schema | metadatos correctos por ruta |
| DOM después de JavaScript | metadatos, H1 y schema correctos | se conserva |
| `https://www...` | 200 | un 301 a HTTPS apex, conservando ruta |
| Legados conocidos | 200 | un 301 al destino final |
| URL inexistente | 200 | 404 + noindex |
| Spam confirmado | 200 | 410 + noindex |
| `llms.txt` | 200 | 200 |

La cabecera pública dice `server: cloudflare` porque forma parte de la
infraestructura interna de Lovable. No representa una zona de Cloudflare
administrada por el proyecto: los nameservers públicos son de GoDaddy y la
solución propuesta no depende de Cloudflare.

## Pendiente externo

1. Crear el servicio desde `render.yaml` y probar primero su URL temporal.
2. Añadir `bringasinsurance.com` como dominio raíz en Render.
3. Cambiar únicamente los registros web apex y `www` en GoDaddy, preservando
   correo, blog, SPF, DKIM y DMARC.
4. Repetir las pruebas públicas de 200/301/404/410, formulario, GA4, assets,
   robots, sitemap y HTML inicial.
5. Solo después, enviar sitemap e iniciar las validaciones de Search Console.

No se declara el incidente resuelto hasta que estas comprobaciones pasen en el
dominio público.
