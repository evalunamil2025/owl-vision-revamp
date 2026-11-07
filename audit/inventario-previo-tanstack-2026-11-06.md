# Inventario previo a una posible rama TanStack Start

Este documento registra la arquitectura antes de cualquier experimento SSR. La
rama principal no se migró, porque el servidor Node ya cubre los requisitos
urgentes con menor riesgo.

## Arquitectura actual

- React 18, TypeScript, Vite 5 y React Router DOM 6.
- 26 rutas indexables declaradas en `src/App.tsx` y una ruta comodín 404.
- Configuración SEO compartida en `src/config/seo-routes.json`.
- Renderizado de metadatos cliente con `react-helmet-async`.
- Servidor de producción Node en `server/production-server.mjs`.
- Política de rutas, redirects, 404 y 410 en `server/url-policy.mjs` y
  `server/seo-policy.json`, generada desde la configuración fuente.

## Componentes y datos que deben preservarse

- Páginas: `src/pages`; layouts compartidos: `src/components`.
- Traducciones inglés/español: `src/i18n`; la preferencia se guarda en
  `localStorage` y no crea URLs de idioma indexables.
- Formularios: `src/pages/Contact.tsx` y
  `src/components/ServiceLeadForm.tsx`, ambos hacia `/api/contact`.
- Integración de correo: Resend, exclusivamente desde el servidor.
- Analytics: GA4 `G-5QM8V0WQ00`; el pageview se envía desde
  `src/lib/analytics.ts` solo para rutas válidas.
- Recursos públicos: `public`, incluyendo sitemap, robots, `llms.txt`, favicon,
  imágenes sociales y marcas de aseguradoras.
- Redirecciones: tabla explícita de legados más reglas de spam retirado.
- No hay Supabase, CMS ni base de datos en el flujo público actual.

## Riesgos de una migración

- Reescritura de las 26 rutas, hydration, Helmet, i18n y carga diferida.
- Regresión de formularios/Resend y medición GA4.
- Diferencias en assets, imports con alias, animaciones y componentes de UI.
- Cambio de integración con Lovable y aumento del alcance del incidente.

## Decisión

No migrar `main` durante la corrección urgente. Una rama separada puede usarse
después como prueba de concepto, con paridad visual, funcional y analítica como
criterio de aceptación. La salida inmediata recomendada es el servidor Node
ya implementado y probado.
