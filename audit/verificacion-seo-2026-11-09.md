# Verificación técnica SEO posterior

Fecha: 9 de noviembre de 2026 (America/Mexico_City).

## Resumen ejecutivo

- El commit `d16da52` está en `main`, coincide con `origin/main` y el árbol de
  trabajo estaba limpio al iniciar la revisión.
- El frontend actualizado sí está publicado en Lovable: el bundle público es
  `index-BcjSDBZQ.js`, contiene los metadatos actuales y usa `/api/contact`.
- El servidor Node preparado no sirve todavía el dominio. Producción continúa
  entregando el shell SPA genérico y estados incorrectos para redirects,
  páginas inexistentes y spam.
- El DOM después de JavaScript es correcto en las seis rutas representativas;
  el HTML inicial sigue sin canonical, robots, H1 ni schema por ruta.
- No debe iniciarse todavía la validación de Search Console.

## Repositorio y pruebas

| Comprobación | Resultado |
| --- | --- |
| `HEAD` y `origin/main` | `d16da522f8d3b10dbffd7228fd4fe09f8090399d` |
| Pruebas | 23 aprobadas, 1 live opcional omitida |
| TypeScript | Sin errores |
| Build | Correcto, 2,477 módulos |
| ESLint | 0 errores, 8 avisos no bloqueantes |
| Rama experimental | `seo-tanstack-ssr`, sin migración de `main` |

El primer intento de ESLint se ejecutó simultáneamente con Vite y chocó con un
archivo temporal de Vite. Repetido de forma secuencial, ESLint terminó
correctamente; no es un defecto del código.

## Evidencia de producción

### HTML inicial

`/`, `/auto-insurance`, `/home-insurance`, `/life-insurance`,
`/commercial-auto` y `/contact` devuelven 200, pero comparten el título y la
descripción genéricos del home. No contienen canonical, robots, H1 ni schema en
la respuesta inicial.

### DOM después de JavaScript

Las seis rutas tienen título y descripción propios, self-canonical,
`index, follow`, un H1 y el schema esperado. Home expone `WebSite` e
`InsuranceAgency`; las páginas de servicio exponen `Service`.

### Política HTTP pública

| Caso | Estado observado | Estado requerido |
| --- | ---: | ---: |
| Rutas legítimas | 200 | 200 |
| HTTP apex | 301 a HTTPS apex | 301 correcto |
| HTTP `www` | 301 a HTTPS `www` | 301 directo a HTTPS apex |
| HTTPS `www` | 200 | 301 a HTTPS apex |
| Parámetro `?v=` | 200 | 301 a URL limpia |
| `/payments/` | 200 | 301 a `/pay-my-bill` |
| Legacy de mobile home | 200 | 301 a `/mobile-home-insurance` |
| `/es/` | 200 | 301 a `/` |
| URL desconocida | 200 | 404 + `X-Robots-Tag: noindex` |
| Spam confirmado `/2025/...casino.../` | 200 | 410 + `X-Robots-Tag: noindex` |
| `/wp-admin/` | 403 de plataforma | 410 controlado |
| `robots.txt`, `sitemap.xml`, `llms.txt` | 200 | 200 |

## Hosting y DNS

- Apex y `www` resuelven a `185.158.133.1`, correspondiente al runtime público
  actual de Lovable.
- Las respuestas incluyen `x-deployment-id` y `server: cloudflare`; esta última
  cabecera corresponde a la infraestructura gestionada de Lovable y no cambia
  la decisión de operar sin una cuenta de Cloudflare propia.
- `https://bringas-insurance.onrender.com/` responde `404` con
  `x-render-routing: no-server`. No hay una URL de Render ni credenciales de
  Render/Resend configuradas en el entorno para completar el despliegue.

## Conclusión y siguiente acción

El código está correcto y publicado en GitHub/Lovable, pero el problema de
indexación no está completamente resuelto porque el dominio aún no usa el
servidor Node. Se necesita crear el servicio desde `render.yaml`, configurar
`RESEND_API_KEY`, probar el hostname temporal y, solo entonces, cambiar los
registros web apex y `www` en GoDaddy. Deben preservarse todos los registros de
correo y del blog.

Después del cambio DNS se deben repetir los scripts de auditoría y ejecutar la
prueba live. Search Console se valida únicamente si todos los 200/301/404/410 y
el HTML inicial pasan en el dominio público.
