const base = (
  process.env.SEO_BASE_URL || "https://bringasinsurance.com"
).replace(/\/$/, "");
const expectedOrigin = "https://bringasinsurance.com";
const analyticsId = "G-5QM8V0WQ00";

const sitemapResponse = await fetch(`${base}/sitemap.xml`);
const sitemap = await sitemapResponse.text();
const routes = [
  ...sitemap.matchAll(/<loc>https:\/\/bringasinsurance\.com([^<]*)<\/loc>/g),
].map(([, pathname]) => pathname || "/");

let failures = 0;
const titles = new Set();
const descriptions = new Set();

function check(ok, message) {
  console.log(`${ok ? "PASS" : "FAIL"}\t${message}`);
  if (!ok) failures += 1;
}

check(
  sitemapResponse.status === 200,
  `sitemap status ${sitemapResponse.status}`,
);
check(routes.length === 26, `sitemap contains ${routes.length}/26 routes`);
check(new Set(routes).size === routes.length, "sitemap routes are unique");

for (const pathname of routes) {
  const response = await fetch(`${base}${pathname}`, { redirect: "manual" });
  const html = await response.text();
  const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim();
  const description = html.match(
    /<meta\s+name="description"\s+content="([^"]+)"/i,
  )?.[1];
  const canonical = html.match(
    /<link\s+rel="canonical"\s+href="([^"]+)"/i,
  )?.[1];
  const h1Count = (html.match(/<h1(?:\s|>)/gi) || []).length;
  const expectedCanonical = `${expectedOrigin}${pathname === "/" ? "/" : pathname}`;

  check(
    response.status === 200 &&
      Boolean(title) &&
      Boolean(description) &&
      canonical === expectedCanonical &&
      h1Count === 1 &&
      html.includes(analyticsId),
    `${pathname} SSR: ${response.status}, title=${Boolean(title)}, description=${Boolean(description)}, canonical=${canonical === expectedCanonical}, h1=${h1Count}, analytics=${html.includes(analyticsId)}`,
  );

  if (title) {
    check(!titles.has(title), `${pathname} has a unique title`);
    titles.add(title);
  }
  if (description) {
    check(
      !descriptions.has(description),
      `${pathname} has a unique description`,
    );
    descriptions.add(description);
  }
}

const statusCases = [
  ["/payments/", 301, "/pay-my-bill"],
  ["/contact?v=cache", 301, "/contact"],
  ["/wp-admin/", 410],
  ["/2025/08/12/wazamba-mobile-app-download-c98855a6/", 410],
  ["/random-nonexistent-url-12345", 404],
];

for (const [pathname, expectedStatus, expectedLocation] of statusCases) {
  const response = await fetch(`${base}${pathname}`, {
    redirect: "manual",
    headers: { host: new URL(base).host },
  });
  const location = response.headers.get("location");
  const locationMatches =
    expectedLocation == null ||
    new URL(location, base).pathname === expectedLocation;
  const noIndexMatches =
    ![404, 410].includes(expectedStatus) ||
    response.headers.get("x-robots-tag")?.includes("noindex");
  check(
    response.status === expectedStatus && locationMatches && noIndexMatches,
    `${pathname} returns ${response.status}/${expectedStatus}${noIndexMatches ? "" : " without noindex"}`,
  );
}

for (const pathname of ["/robots.txt", "/llms.txt"]) {
  const response = await fetch(`${base}${pathname}`);
  check(response.status === 200, `${pathname} status ${response.status}`);
}

if (failures) {
  console.error(`\n${failures} SSR SEO verification(s) failed.`);
  process.exitCode = 1;
} else {
  console.log(`\nAll SSR SEO checks passed for ${routes.length} routes.`);
}
