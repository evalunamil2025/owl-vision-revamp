const base = (process.env.SEO_BASE_URL || "https://bringasinsurance.com").replace(/\/$/, "");
const paths = [
  "/",
  "/auto-insurance",
  "/home-insurance",
  "/life-insurance",
  "/commercial-auto",
  "/contact",
  "/llms.txt",
];

const attributes = (tag) => Object.fromEntries(
  [...tag.matchAll(/([\w:-]+)\s*=\s*(["'])(.*?)\2/g)].map((match) => [match[1].toLowerCase(), match[3]]),
);
const text = (html, expression) => {
  const match = html.match(expression);
  return match ? match[1].replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim() : "";
};
const schemaTypes = (html) => [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)]
  .flatMap((match) => {
    try {
      const value = JSON.parse(match[1]);
      return (Array.isArray(value) ? value : [value]).map((item) => item?.["@type"] || "unknown");
    } catch {
      return ["invalid-json"];
    }
  });

for (const pathname of paths) {
  try {
    const response = await fetch(`${base}${pathname}`, {
      redirect: "follow",
      headers: { "user-agent": "Mozilla/5.0 Bringas public SEO audit" },
    });
    const html = await response.text();
    const metas = [...html.matchAll(/<meta\b[^>]*>/gi)].map((match) => attributes(match[0]));
    const links = [...html.matchAll(/<link\b[^>]*>/gi)].map((match) => attributes(match[0]));
    console.log(JSON.stringify({
      phase: "INITIAL_SERVER_HTML",
      pathname,
      status: response.status,
      finalUrl: response.url,
      deploymentId: response.headers.get("x-deployment-id"),
      lovableVersion: response.headers.get("x-lovable-version"),
      server: response.headers.get("server"),
      title: text(html, /<title[^>]*>([\s\S]*?)<\/title>/i),
      description: metas.find((meta) => meta.name === "description")?.content || "",
      canonical: links.find((link) => (link.rel || "").toLowerCase() === "canonical")?.href || "",
      robots: metas.find((meta) => meta.name === "robots")?.content || "",
      h1: text(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i),
      schema: schemaTypes(html),
      scriptSrc: [...html.matchAll(/<script[^>]*src=["']([^"']+)/gi)].map((match) => match[1]),
    }));
  } catch (error) {
    console.log(JSON.stringify({ phase: "INITIAL_SERVER_HTML", pathname, error: error.message }));
  }
}

try {
  const home = await fetch(`${base}/`, { headers: { "user-agent": "Mozilla/5.0 Bringas public SEO audit" } });
  const homeHtml = await home.text();
  const entryScripts = [...homeHtml.matchAll(/<script[^>]*src=["']([^"']+\.js)["']/gi)].map((match) => new URL(match[1], base).href);
  const sources = [];
  for (const scriptUrl of entryScripts) {
    const source = await (await fetch(scriptUrl)).text();
    sources.push(source);
    for (const match of source.matchAll(/["'](\/assets\/[^"']+\.js)["']/g)) {
      const childUrl = new URL(match[1], base).href;
      if (!entryScripts.includes(childUrl)) entryScripts.push(childUrl);
    }
  }
  const bundle = sources.join("\n");
  console.log(JSON.stringify({
    phase: "DEPLOYMENT_SIGNATURE",
    scriptsInspected: entryScripts.length,
    containsLegacyWorkerEndpoint: bundle.includes("bringas-insurance-router.seo-41a.workers.dev/api/contact"),
    containsRelativeContactEndpoint: bundle.includes("/api/contact"),
    containsCurrentHomeTitle: bundle.includes("Insurance Agency in Everett, WA | Bringas Insurance Group"),
    containsLlmsReference: bundle.includes("llms.txt"),
  }));
} catch (error) {
  console.log(JSON.stringify({ phase: "DEPLOYMENT_SIGNATURE", error: error.message }));
}
