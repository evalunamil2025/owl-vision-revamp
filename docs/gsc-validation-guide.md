# Guía de Validación en Google Search Console

**Fecha:** 2026-08-19  
**Objetivo:** Solicitar validación y monitorear la resolución de errores GSC

---

## Pre-requisitos

1. Las reglas de Cloudflare están desplegadas y funcionando
2. El script `verify-gsc-fix.mjs` pasa todos los tests
3. Han pasado 24-48 horas desde el despliegue

---

## Paso 1: Verificar con URL Inspection

Antes de solicitar validación, verificar manualmente que las páginas están respondiendo correctamente.

### 1.1 Abrir Google Search Console

1. Ir a https://search.google.com/search-console
2. Seleccionar la propiedad `https://bringasinsurance.com/`
3. Ir a **URL Inspection**

### 1.2 Probar URLs Representativas

Para cada categoría de error, probar una URL representativa:

| Categoría | URL de Prueba | Resultado Esperado |
|---|---|---|
| Soft 404 | `/wp-admin/` | 410 Gone |
| Soft 404 | `/2025/08/05/test/` | 410 Gone |
| Not found | `/random-url-12345/` | 404 Not Found |
| Page with redirect | `/payments/` | 301 → /pay-my-bill |
| Ruta válida | `/auto-insurance` | 200 OK |
| Ruta válida | `/` | 200 OK |

### 1.3 Proceso de URL Inspection

1. Ingresar la URL completa
2. Hacer clic en **Test Live URL**
3. Esperar que termine la prueba (~30 segundos)
4. Verificar:
   - **HTTP Response Code**: Debe coincidir con el esperado
   - **Indexing**: 
     - Si es 404/410: "No está indexada"
     - Si es 200: "Puede indexarse"
   - **Crawl**: Googlebot pudo acceder a la página

---

## Paso 2: Solicitar Validación

### 2.1 Ir a Page Indexing

1. En el menú izquierdo, ir a **Indexing → Pages**
2. Ver la sección "Why pages aren't indexed"
3. Para cada categoría con errores, hacer clic en ella

### 2.2 Solicitar Validación para Soft 404

1. Hacer clic en **Soft 404**
2. Ver la lista de URLs afectadas
3. Hacer clic en **Validate Fix** (o **Request Indexing**)
4. Seleccionar las URLs que ahora devuelven 410
5. Confirmar la solicitud

### 2.3 Solicitar Validación para Not found (404)

1. Hacer clic en **Not found (404)**
2. Hacer clic en **Validate Fix**
3. Seleccionar URLs que ahora devuelven 404 correctamente
4. Confirmar

### 2.4 Solicitar Validación para Page with redirect

1. Hacer clic en **Page with redirect**
2. Hacer clic en **Validate Fix**
3. Seleccionar URLs que ahora tienen 301 correcto
4. Confirmar

### 2.5 Para Excluded by noindex

**NO solicitar validación** si el noindex es intencional (páginas 404/410). Google las descartará automáticamente.

### 2.6 Para Alternate with canonical

**NO solicitar validación**. Este es el comportamiento correcto. Google está reconociendo que las URLs con query strings canonicalizan a la versión limpia.

### 2.7 Para Crawled - currently not indexed

Este es el error más grande (149 páginas). La resolución requiere:

1. **Desplegar prerendering** (ver `cloudflare/worker-prerender.js`)
2. **Esperar 1-2 semanas** para que Google re-crawlee las páginas
3. Luego solicitar validación

---

## Paso 3: Monitoreo Semanal

### 3.1 Cada Lunes, Revisar:

1. **Page Indexing Report**
   - Número total de páginas indexadas (debe aumentar)
   - Número de páginas con errores (debe disminuir)
   - Nuevos errores detectados

2. **Crawl Stats**
   - Frecuencia de crawleo (debe estabilizarse)
   - Tiempo de respuesta (debe ser < 500ms)
   - Errores de crawleo (deben disminuir)

3. **Manual Actions**
   - Verificar que no hay acciones manuales nuevas

### 3.2 Métricas de Éxito

| Métrica | Objetivo | Plazo |
|---|---|---|
| Soft 404 | 0 errores | 2 semanas |
| Not found (404) | < 5 errores | 1 semana |
| Page with redirect | 0 errores | 1 semana |
| Crawled, not indexed | < 50 páginas | 4 semanas |
| Páginas indexadas | > 26 páginas | 4 semanas |

### 3.3 Alertas

Si después de 4 semanas:
- Los Soft 404 no disminuyen → Verificar que las reglas WAF están activas
- Crawled not indexed no disminuye → Verificar que el prerendering funciona
- Aparecen nuevos errores → Investigar y crear nuevas reglas

---

## Paso 4: Acciones de Limpieza (Opcional)

### 4.1 Usar Removals Tool (Temporal)

**NO usar como solución principal.** Solo para emergencias:

1. Ir a **Indexing → Removals**
2. Agregar URLs temporalmente (hasta 6 meses)
3. Esto NO elimina las URLs de Google, solo las oculta temporalmente

### 4.2 Para URLs con Contenido Spam

Si hay URLs con contenido spam que Google aún indexa:

1. Verificar que devuelven 410
2. Solicitar validación
3. Esperar 2-4 semanas
4. Si persisten, usar Removals temporalmente

---

## Paso 5: Documentar Resultados

### 5.1 Crear Reporte de Resultados

Después de 4 semanas, crear un reporte con:

```markdown
## Resultado de Corrección GSC - [Fecha]

### Resumen
- Total de errores iniciales: [número]
- Total de errores actuales: [número]
- Reducción: [porcentaje]

### Detalle por Categoría
| Categoría | Inicial | Actual | Estado |
|---|---|---|---|
| Soft 404 | 28 | [número] | [Resuelto/Pendiente] |
| Not found | 10 | [número] | [Resuelto/Pendiente] |
| Crawled not indexed | 149 | [número] | [Resuelto/Pendiente] |
| ... | ... | ... | ... |

### Lecciones Aprendidas
- [Lección 1]
- [Lección 2]

### Próximos Pasos
- [Acción 1]
- [Acción 2]
```

### 5.2 Actualizar SEO Reports

Actualizar `seo/reports/gsc-fix-summary.md` con los resultados reales.

---

## Comandos Útiles

### Verificar URLs con curl

```bash
# Verificar Soft 404 (debe ser 410)
curl -I "https://bringasinsurance.com/wp-admin/"

# Verificar 404 (debe ser 404)
curl -I "https://bringasinsurance.com/random-url/"

# Verificar redirect (debe ser 301)
curl -I "https://bringasinsurance.com/payments/"

# Verificar ruta válida (debe ser 200)
curl -I "https://bringasinsurance.com/auto-insurance"
```

### Ejecutar Script de Verificación

```bash
SEO_BASE_URL=https://bringasinsurance.com node scripts/verify-gsc-fix.mjs
```

### Generar Nuevos Artifacts

```bash
npm run seo:generate
```

---

## Referencias

- [Google Search Console Help - Page Indexing](https://support.google.com/webmasters/answer/9682207)
- [Google Search Console Help - URL Inspection](https://support.google.com/webmasters/answer/9012285)
- [Cloudflare Bulk Redirects](https://developers.cloudflare.com/rules/bulk-redirects/)
- [Cloudflare WAF Custom Rules](https://developers.cloudflare.com/waf/custom-rules/)
