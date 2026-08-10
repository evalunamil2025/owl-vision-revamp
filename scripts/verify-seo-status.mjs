const base = (process.env.SEO_BASE_URL || "https://bringasinsurance.com").replace(/\/$/, "");
const cases = [
  ["/", 200], ["/auto-insurance", 200], ["/mobile-home-insurance", 200],
  ["/payments/", 301, "/pay-my-bill"],
  ["/seguro-para-casas-prefabricadas-en-seattle-washington/", 301, "/mobile-home-insurance"],
  ["/es/", 301, "/"], ["/wp-admin/", 410],
  ["/2025/08/05/experience-englishspeaking-online-casinos-in-canada-play-at-gigadats-toprated-gambling-platform/", 410],
  ["/random-nonexistent-url-12345/", 404], ["/robots.txt", 200], ["/sitemap.xml", 200],
];
let failed = 0;
for (const [pathname, expected, location] of cases) {
  try {
    const response = await fetch(base + pathname, { method: "HEAD", redirect: "manual" });
    const allowed = Array.isArray(expected) ? expected : [expected];
    const actualLocation = response.headers.get("location") || "";
    const locationOk = !location || new URL(actualLocation, base).pathname === location;
    const ok = allowed.includes(response.status) && locationOk;
    console.log(`${ok ? "PASS" : "FAIL"}\t${response.status}\t${pathname}\t${actualLocation}`);
    if (!ok) failed += 1;
    if (response.status === 301 && location) {
      const final = await fetch(new URL(actualLocation, base), { method: "HEAD", redirect: "manual" });
      if (final.status !== 200 || final.headers.has("location")) { console.log(`FAIL\t${final.status}\tredirect target ${actualLocation}`); failed += 1; }
    }
  } catch (error) { console.log(`ERROR\t${pathname}\t${error.message}`); failed += 1; }
}
if (failed) process.exitCode = 1;
