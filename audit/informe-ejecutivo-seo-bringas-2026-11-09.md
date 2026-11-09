# Informe ejecutivo de mejora SEO

**Sitio:** Bringas Insurance Group — bringasinsurance.com  
**Fecha:** 9 de noviembre de 2026  
**Estado:** Correcciones principales realizadas; fase final de infraestructura pendiente de aprobación

## 1. Resumen para dirección

Las capturas de Semrush y Google Search Console mostraron problemas que podían dificultar que Google entendiera correctamente el sitio: páginas duplicadas, direcciones antiguas o de spam, títulos repetidos, páginas con poco contenido visible para los auditores y enlaces rotos.

La mayor parte de las correcciones de contenido y estructura ya se realizó. Las 26 páginas oficiales del sitio cuentan ahora con información individual, encabezados correctos, contenido visible y señales claras para Google. También se conservó Google Analytics para no perder la medición existente.

Queda una última fase importante: actualizar la tecnología interna de publicación de Lovable. Actualmente Lovable muestra la página principal incluso cuando se solicita una dirección inexistente. Para una persona la web parece funcionar, pero Google puede interpretar esas direcciones como páginas duplicadas o “páginas no encontradas incorrectamente”.

La recomendación es mantener el sitio dentro de Lovable y migrarlo a la tecnología más reciente que ofrece la propia plataforma. No se contratará Render ni se configurará una cuenta externa de Cloudflare.

## 2. Problemas reportados

Los reportes recibidos señalaron principalmente:

- títulos y descripciones repetidos;
- páginas con poco texto o sin encabezado principal;
- enlaces externos rotos;
- páginas oficiales poco conectadas desde el resto del sitio;
- direcciones con `www`, parámetros y versiones antiguas consideradas duplicadas;
- direcciones de spam o páginas eliminadas que seguían pareciendo páginas válidas;
- páginas rastreadas por Google pero todavía no indexadas;
- poca o nula visibilidad en herramientas de búsqueda mediante inteligencia artificial;
- validaciones fallidas en Google Search Console.

Parte de lo que muestra Search Console es información histórica y no necesariamente un fallo actual. Google conserva esos registros hasta que vuelve a visitar las direcciones y comprueba los cambios.

## 3. Trabajo ya realizado

### Contenido y estructura de las páginas

- Se definieron 26 páginas oficiales que sí deben aparecer en buscadores.
- Cada página tiene un título y una descripción propios.
- Cada página tiene un solo encabezado principal.
- Se reforzó el contenido de las páginas con poco texto.
- Se añadieron enlaces internos para que ninguna página importante quede aislada.
- Se preparó HTML completo para que Google y otras herramientas puedan leer el contenido sin depender del navegador del visitante.

### Control de duplicados y rastreo

- Cada página señala claramente cuál es su dirección oficial.
- El sitemap contiene únicamente las 26 páginas válidas.
- Se preparó una nueva fecha de actualización para las 26 páginas dentro del sitemap.
- El archivo `robots.txt` permite el acceso de Google y de los principales buscadores de IA.
- Se añadió `llms.txt` como guía adicional para sistemas de inteligencia artificial.
- Se creó una lista de direcciones antiguas, duplicadas y de spam para decidir cuáles deben redirigirse y cuáles deben eliminarse definitivamente.

### Enlaces y señales externas

- Se retiró el enlace externo repetido que provocaba decenas de advertencias de enlace roto.
- Se revisaron los enlaces compartidos en pie de página y datos de la empresa.

### Medición y control de calidad

- Google Analytics `G-5QM8V0WQ00` se conservó en todas las páginas.
- Se crearon comprobaciones automáticas para evitar que vuelvan a publicarse páginas sin título, descripción, encabezado o Analytics.
- Se aprobaron 30 pruebas de SEO y funcionamiento del servidor.
- La compilación completa del sitio terminó correctamente.

## 4. Situación actual de la web pública

La web pública ya entrega contenido completo, encabezado principal, dirección oficial y Analytics en las páginas válidas.

Sin embargo, todavía quedan tres comportamientos del sistema actual de Lovable:

1. La versión con `www` muestra la página en vez de enviar al visitante a la dirección oficial.
2. Una dirección de spam puede responder como si fuera una página válida.
3. Una dirección que nunca existió puede mostrar la portada con una respuesta de página correcta.

Estos tres puntos explican buena parte de los avisos de páginas alternativas, duplicadas y “soft 404” observados en Search Console.

## 5. Trabajo propuesto

### Fase 1 — Actualización interna en Lovable

Migrar el proyecto desde la versión antigua React/Vite hacia TanStack Start, la tecnología actual de Lovable.

La actualización permitirá:

- entregar todas las páginas completas desde el servidor;
- enviar automáticamente `www` hacia la dirección oficial;
- identificar correctamente páginas inexistentes;
- retirar de forma definitiva las direcciones de spam;
- conservar diseño, contenido, formularios, dominio y Analytics;
- continuar publicando y administrando el sitio desde Lovable.

Lovable indica que esta migración normalmente consume entre 10 y 35 créditos de construcción. No requiere contratar otro proveedor mensual de hosting.

### Fase 2 — Revisión antes de publicar

Antes de actualizar la web pública se comprobará:

- las 26 páginas oficiales funcionan correctamente;
- el diseño no cambió;
- los formularios continúan funcionando;
- Analytics sigue presente;
- `www` redirige correctamente;
- una página inexistente se identifica como no encontrada;
- una dirección de spam se identifica como eliminada;
- sitemap, robots y datos para IA siguen disponibles.

### Fase 3 — Publicación y comprobación externa

Después de publicar:

- se repetirá la auditoría de Semrush;
- se enviará nuevamente el mismo sitemap a Google Search Console;
- se solicitará la revisión de las páginas más importantes;
- se iniciará la validación de los problemas realmente corregidos;
- se vigilarán indexación, tráfico orgánico y visibilidad en buscadores.

No es necesario crear un segundo sitemap. Se mantendrá la misma dirección: `https://bringasinsurance.com/sitemap.xml`.

## 6. Resultados esperados

Tras la migración y una nueva auditoría se espera:

- eliminar títulos y descripciones duplicados del rastreo actual;
- reducir considerablemente las advertencias por contenido insuficiente;
- eliminar el enlace externo roto repetido;
- evitar que nuevas direcciones de spam sean interpretadas como páginas reales;
- consolidar todas las versiones del dominio en una sola dirección oficial;
- mejorar la facilidad con la que Google, Bing y herramientas de IA leen el sitio;
- mejorar la puntuación técnica de Semrush.

La auditoría de Semrush puede reflejar los cambios poco después de realizar un nuevo rastreo. Google Search Console necesita que Google vuelva a visitar cada dirección, por lo que sus cifras pueden tardar varias semanas en actualizarse.

## 7. Aclaraciones importantes

- No todas las páginas “no indexadas” son errores. Las redirecciones, páginas eliminadas y páginas inexistentes deben permanecer fuera de Google.
- Una validación correcta no elimina inmediatamente el historial de Search Console.
- La visibilidad en inteligencia artificial no aumenta automáticamente al instalar un archivo. También depende de contenido útil, autoridad del dominio, menciones y enlaces externos.
- No es responsable prometer una posición específica, tráfico determinado o visibilidad inmediata en Google; sí se puede garantizar que la base técnica quede correctamente preparada y verificada.

## 8. Decisión solicitada

Se solicita autorización para:

1. ejecutar la migración oficial del proyecto dentro de Lovable;
2. utilizar los créditos de construcción que Lovable indique;
3. revisar la versión preliminar antes de publicarla;
4. publicar únicamente después de aprobar todas las comprobaciones;
5. ejecutar una nueva auditoría de Semrush y solicitar la validación en Search Console.

No se propone contratar Render ni configurar una cuenta externa de Cloudflare.

