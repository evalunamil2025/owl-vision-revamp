# Corrección de preparación para visibilidad en IA

Fecha: 9 de noviembre de 2026 (America/Mexico_City).

## Qué significa el valor 0

El valor mostrado por Semrush no es un porcentaje de configuración técnica.
Mide cuántos temas y respuestas generadas por IA mencionan a Bringas Insurance
Group, comparados con competidores. `0` y `0 menciones` significa que Semrush no
encontró todavía la marca en las respuestas de su muestra de prompts.

Ningún cambio de código puede editar directamente esa métrica. El sitio debe
ser rastreado, comprendido y luego citado o mencionado por los sistemas que
Semrush monitoriza.

## Cambios implementados

- Acceso explícito en `robots.txt` para ChatGPT, OpenAI Search, Perplexity,
  Claude y Google Extended, además de la regla general existente.
- Entidad `InsuranceAgency` + `Organization` en JSON-LD dentro del HTML inicial,
  con identificador estable, nombre, URL, logo, teléfono, dirección, área de
  servicio, idiomas y perfiles sociales reales.
- Relación mediante `@id` entre la organización, el sitio web y los servicios.
- Sección visible y bilingüe de respuestas directas en la página principal:
  definición de la agencia, servicios, atención en español y solicitud de
  cotización.
- `FAQPage` JSON-LD que refleja exactamente esas preguntas y respuestas
  visibles; no se añadieron reseñas, calificaciones ni datos inventados.
- `llms.txt` ampliado con fecha, ubicación, idiomas, teléfono, páginas
  prioritarias y preguntas que el sitio responde.
- Pruebas automatizadas para conservar permisos de crawlers, contenido de
  `llms.txt`, entidad inicial, contenido visible y FAQ schema.

## Validación

| Comprobación | Resultado |
| --- | --- |
| Pruebas | 25 aprobadas, 1 live opcional omitida |
| TypeScript | Sin errores |
| Build | Correcto, 2,478 módulos |
| ESLint | 0 errores, 8 avisos no bloqueantes |
| Schema home renderizado | InsuranceAgency, Organization, WebSite, FAQPage |
| Schema servicios renderizado | InsuranceAgency, Organization, Service |
| Canonical/robots/H1 | Correctos en las rutas verificadas localmente |

## Acciones externas para mover la métrica

1. Publicar estos cambios y solicitar un nuevo Site Audit en Semrush.
2. Abrir AI Visibility Toolkit → Visibility Overview para revisar `Missing
   Prompts`, temas y competidores citados.
3. Configurar Prompt Tracking para Everett/Washington, inglés y español.
4. Monitorizar como mínimo estas familias de preguntas:
   - independent insurance agency in Everett WA;
   - bilingual insurance agency in Washington;
   - auto/home/life insurance in Washington;
   - contractor, restaurant and commercial auto insurance in Washington;
   - SR-22 insurance help in Washington.
5. Crear contenido útil para los prompts donde competidores aparecen y Bringas
   no, citando fuentes primarias y evitando afirmaciones sin respaldo.
6. Revisar menciones, páginas citadas y citas semanalmente. La base general de
   Semrush se actualiza en ciclos distintos; Prompt Tracking ofrece seguimiento
   diario cuando está configurado.

## Estado

La preparación técnica y la superficie citable quedaron mejoradas. El valor no
se considerará corregido hasta que los cambios estén publicados y Semrush o las
plataformas de IA registren menciones reales. Tampoco sustituye el despliegue
pendiente del servidor Node para entregar todo el contenido en HTML inicial.
