# Archivos y configuraciones a revisar antes de implementar

No se modificaron estos archivos.

## Repositorio

- `src/App.tsx`: rutas válidas y fallback SPA; añadir pruebas de rutas y coordinar cualquier cambio de routing.
- `src/pages/NotFound.tsx`: presentación de 404/410 y patrones heredados; no puede fijar por sí sola el código HTTP.
- `src/components/SEO.tsx`: canonical y meta robots generados client-side; validar con renderizado.
- `public/sitemap.xml`: mantener solo URLs indexables y 200.
- `public/robots.txt`: revisar después de definir la política para legado; robots no sustituye 404/410.
- Componentes/menús/datos con enlaces internos: buscar referencias a slugs heredados antes de retirarlos.

## Fuera del repositorio

- Panel del proveedor de despliegue: rewrite/fallback SPA que hoy convierte cualquier ruta desconocida en `index.html`.
- Cloudflare: Redirect Rules, Workers, Pages Functions, cache y DNS/proxy.
- Logs de origen/CDN y Search Console: determinar si el contenido spam se sirvió realmente y desde cuándo.
- Cualquier WordPress/CMS/base de datos/directorio anterior: revisar usuarios, plugins, cron, feeds, categorías y archivos.

## Orden seguro

1. Hacer inventario y backup de reglas actuales.
2. Confirmar equivalencias con negocio y analytics antes de 301/308.
3. Configurar respuestas HTTP 404/410 en hosting/origen.
4. Probar rutas válidas, desconocidas, legacy y sitemap con curl y navegador.
5. Solo después actualizar sitemap/GSC y monitorizar.
