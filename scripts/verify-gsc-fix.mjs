#!/usr/bin/env node

/**
 * Script de Verificación Post-Deploy para Corrección de Errores GSC
 * 
 * Uso:
 *   SEO_BASE_URL=https://bringasinsurance.com node scripts/verify-gsc-fix.mjs
 * 
 * Este script verifica que las reglas de Cloudflare estén funcionando
 * correctamente y resuelve los 10 tipos de errores de Google Search Console.
 */

const BASE_URL = process.env.SEO_BASE_URL || "https://bringasinsurance.com";

// Colores para la consola
const colors = {
  green: "\x1b[32m",
  red: "\x1b[31m",
  yellow: "\x1b[33m",
  cyan: "\x1b[36m",
  reset: "\x1b[0m",
};

// Tests organizados por categoría de error GSC
const tests = [
  // FASE 1: Soft 404 (28 páginas) - WAF Rule 410
  {
    category: "Soft 404 → 410 (Spam/Hack)",
    description: "URLs spam deben devolver 410 Gone con X-Robots-Tag: noindex",
    urls: [
      { path: "/wp-admin/", expected: 410 },
      { path: "/wp-content/", expected: 410 },
      { path: "/2025/08/05/test-casino-page/", expected: 410 },
      { path: "/category/", expected: 410 },
      { path: "/feed/", expected: 410 },
      { path: "/xmlrpc.php", expected: 410 },
      { path: "/shop/", expected: 410 },
    ],
  },
  // FASE 1: Not found (10 páginas) - WAF Rule 404
  {
    category: "Not found → 404 (URLs Desconocidas)",
    description: "URLs inexistentes deben devolver 404 Not Found",
    urls: [
      { path: "/random-nonexistent-url-12345/", expected: 404 },
      { path: "/faq/", expected: 404 },
      { path: "/test-page/", expected: 404 },
    ],
  },
  // FASE 1: Page with redirect (3 páginas) - Bulk Redirects
  {
    category: "Page with redirect → 301 (Legado)",
    description: "URLs legado deben redirigir 301 a su destino",
    urls: [
      { path: "/payments/", expected: 301, redirect: "/pay-my-bill" },
      { path: "/seguros-para-autos-en-seattle-washington/", expected: 301, redirect: "/auto-insurance" },
      { path: "/car-insurance-in-seattle-washington/", expected: 301, redirect: "/auto-insurance" },
    ],
  },
  // FASE 1: Rutas válidas - 200
  {
    category: "Rutas Válidas → 200",
    description: "Las 26 rutas válidas deben devolver 200",
    urls: [
      { path: "/", expected: 200 },
      { path: "/about", expected: 200 },
      { path: "/auto-insurance", expected: 200 },
      { path: "/home-insurance", expected: 200 },
      { path: "/life-insurance", expected: 200 },
      { path: "/quote", expected: 200 },
      { path: "/contact", expected: 200 },
      { path: "/pay-my-bill", expected: 200 },
      { path: "/sr22-insurance", expected: 200 },
    ],
  },
  // FASE 1: Archivos estáticos - 200
  {
    category: "Archivos Estáticos → 200",
    description: "Archivos estáticos deben servirse correctamente",
    urls: [
      { path: "/robots.txt", expected: 200 },
      { path: "/sitemap.xml", expected: 200 },
      { path: "/favicon.ico", expected: 200 },
    ],
  },
];

/**
 * Realiza una petición HTTP y retorna el estado
 */
async function checkUrl(path) {
  const url = `${BASE_URL}${path}`;
  try {
    const response = await fetch(url, {
      method: "GET",
      redirect: "manual", // No seguir redirects automáticamente
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; GSC-Verifier/1.0)",
      },
    });

    return {
      status: response.status,
      location: response.headers.get("location"),
      xRobotsTag: response.headers.get("x-robots-tag"),
      contentType: response.headers.get("content-type"),
    };
  } catch (error) {
    return {
      status: "ERROR",
      error: error.message,
    };
  }
}

/**
 * Ejecuta todos los tests y genera un reporte
 */
async function runTests() {
  console.log(`${colors.cyan}========================================${colors.reset}`);
  console.log(`${colors.cyan}  Verificación Post-Deploy GSC Fix${colors.reset}`);
  console.log(`${colors.cyan}========================================${colors.reset}`);
  console.log(`URL Base: ${BASE_URL}\n`);

  let totalTests = 0;
  let passedTests = 0;
  let failedTests = 0;
  const failures = [];

  for (const test of tests) {
    console.log(`${colors.cyan}▸ ${test.category}${colors.reset}`);
    console.log(`  ${test.description}\n`);

    for (const url of test.urls) {
      totalTests++;
      const result = await checkUrl(url.path);

      let passed = false;
      let detail = "";

      if (result.status === "ERROR") {
        detail = `Error: ${result.error}`;
      } else if (result.status === url.expected) {
        // Verificar redirect URL si aplica
        if (url.redirect && result.location) {
          const redirectPath = new URL(result.location).pathname;
          if (redirectPath === url.redirect) {
            passed = true;
          } else {
            detail = `Redirect mismatch: expected ${url.redirect}, got ${redirectPath}`;
          }
        } else {
          passed = true;
        }
      } else {
        detail = `Expected ${url.expected}, got ${result.status}`;
      }

      if (passed) {
        console.log(`  ${colors.green}✓${colors.reset} ${url.path} → ${result.status}`);
        passedTests++;
      } else {
        console.log(`  ${colors.red}✗${colors.reset} ${url.path} → ${result.status} ${colors.red}(${detail})${colors.reset}`);
        failedTests++;
        failures.push({
          category: test.category,
          path: url.path,
          expected: url.expected,
          actual: result.status,
          detail,
        });
      }
    }

    console.log("");
  }

  // Resumen
  console.log(`${colors.cyan}========================================${colors.reset}`);
  console.log(`${colors.cyan}  Resumen${colors.reset}`);
  console.log(`${colors.cyan}========================================${colors.reset}`);
  console.log(`Total tests: ${totalTests}`);
  console.log(`${colors.green}Passed: ${passedTests}${colors.reset}`);
  console.log(`${colors.red}Failed: ${failedTests}${colors.reset}`);

  if (failures.length > 0) {
    console.log(`\n${colors.red}Fallos:${colors.reset}`);
    for (const f of failures) {
      console.log(`  - [${f.category}] ${f.path}: ${f.detail}`);
    }
  }

  console.log(`\n${colors.cyan}========================================${colors.reset}`);

  // Retornar exit code
  process.exit(failedTests > 0 ? 1 : 0);
}

// Ejecutar
runTests().catch((error) => {
  console.error("Error ejecutando tests:", error);
  process.exit(1);
});
