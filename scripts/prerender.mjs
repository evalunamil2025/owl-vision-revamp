import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const distDirectory = path.join(root, "dist");
const serverDirectory = path.join(root, ".prerender-server");
const serverEntry = path.join(serverDirectory, "entry-server.js");
const template = await readFile(path.join(distDirectory, "index.html"), "utf8");
const { prerenderRoutes, render } = await import(pathToFileURL(serverEntry).href);

function pageTemplate(appHtml, headHtml) {
  const withoutManagedHead = template
    .replace(/<title>[^<]*<\/title>\s*/i, "")
    .replace(/\s*<(?:meta|link)[^>]*data-rh="true"[^>]*>\s*/gi, "\n");

  return withoutManagedHead
    .replace("</head>", `    ${headHtml}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
}

for (const route of prerenderRoutes) {
  const { appHtml, headHtml } = await render(route);
  const output = route === "/"
    ? path.join(distDirectory, "index.html")
    : path.join(distDirectory, route.slice(1), "index.html");
  await mkdir(path.dirname(output), { recursive: true });
  await writeFile(output, pageTemplate(appHtml, headHtml), "utf8");
}

await rm(serverDirectory, { recursive: true, force: true });
console.log(`Prerendered ${prerenderRoutes.length} SEO routes.`);
