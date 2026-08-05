# Real HTTP status codes for bringasinsurance.com

## Hosting limitation

Lovable hosting serves this project as a static SPA with an automatic
`index.html` fallback for any unknown path. That fallback always answers
**HTTP 200**, and it does not read `_redirects`, `_headers`, `netlify.toml`
or `vercel.json`. A React component (including `NotFound.tsx`) therefore
**cannot** produce 301, 404 or 410 — it can only render a page.

To satisfy the acceptance tests, the rules below must run in front of the
origin, at the domain/CDN layer. The domain is already on Cloudflare, so a
Worker (or a Bulk Redirect list) is the recommended place.

## Cloudflare Worker

Route: `bringasinsurance.com/*`

```js
const REDIRECTS = {
  "/car-insurance-in-seattle-washington": "/auto-insurance",
  "/customer-quoting": "/quote",
  "/commercial-property-insurance-in-seattle-washington": "/commercial-property",
  "/general-insurance-in-seattle-washington": "/business",
  "/contractors-insurance-in-seattle-washington": "/contractors-insurance",
};

const VALID = new Set([
  "/", "/about", "/quote", "/contact", "/carriers", "/pay-my-bill", "/client-center",
  "/auto-insurance", "/home-insurance", "/life-insurance", "/sr22-insurance",
  "/boat-insurance", "/motorcycle-insurance", "/rv-insurance", "/renters-insurance",
  "/landlord-insurance", "/mobile-home-insurance", "/personal-umbrella",
  "/general-liability", "/bop-insurance", "/commercial-auto", "/commercial-property",
  "/contractors-insurance", "/restaurant-insurance", "/building-owners", "/bonds-surety",
]);

const GONE = [/^\/\d{4}\/\d{2}(\/|$)/, /\.php$/i, /^\/wp-(admin|content|includes)(\/|$)/i];

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname.length > 1 ? url.pathname.replace(/\/+$/, "") : "/";

    // 1. 301 for migrated URLs
    if (REDIRECTS[path]) {
      return Response.redirect(url.origin + REDIRECTS[path], 301);
    }

    // 2. 410 for removed spam / old WordPress archives
    if (GONE.some((re) => re.test(path))) {
      const res = await fetch(new Request(url.origin + "/", request));
      return new Response(await res.text(), {
        status: 410,
        headers: { "content-type": "text/html; charset=utf-8", "x-robots-tag": "noindex" },
      });
    }

    // 3. Static assets and valid routes pass through as 200
    if (VALID.has(path) || /\.[a-z0-9]+$/i.test(path)) {
      return fetch(request);
    }

    // 4. Everything else: real 404 (never a redirect to the homepage)
    const res = await fetch(new Request(url.origin + "/", request));
    return new Response(await res.text(), {
      status: 404,
      headers: { "content-type": "text/html; charset=utf-8", "x-robots-tag": "noindex" },
    });
  },
};
```

Keep `VALID` in sync with the routes in `src/App.tsx` and with
`public/sitemap.xml`.

## Redirect table

| Old URL | New URL | Status |
| --- | --- | --- |
| /car-insurance-in-seattle-washington/ | /auto-insurance | 301 |
| /customer-quoting/ | /quote | 301 |
| /commercial-property-insurance-in-seattle-washington/ | /commercial-property | 301 |
| /general-insurance-in-seattle-washington/ | /business | 301 |
| /contractors-insurance-in-seattle-washington/ | /contractors-insurance | 301 |
| /client-center/ | /client-center | 200 (exists) |
| /contact/ | /contact | 200 (exists) |

Note: `/business` and `/personal` are hub pages that do **not** exist yet in
`src/App.tsx`. Until they are built, point those two rules at
`/commercial-property` and `/auto-insurance`, or create the hub pages.

## Sent to 410 Gone

- `/2025/08/05/experience-englishspeaking-online-casinos-in-canada-play-at-gigadats-toprated-gambling-platform/`
- Any `/YYYY/MM/...` dated archive (no legitimate page uses this prefix — the
  new app has no blog or dated routes, so the pattern is safe to apply globally)
- Any `*.php` path
- Any `/wp-admin`, `/wp-content`, `/wp-includes` path

## Pending review (not redirected)

- `/es/seguros-para-autos-en-seattle-washington/`
- `/es/seguros-para-inquilinos-en-seattle-washington/`

The site is bilingual through i18n, not through `/es/` URLs. Decide whether to
rebuild these as real Spanish routes or 301 them to `/auto-insurance` and
`/renters-insurance`.

## robots.txt

Removed URLs are intentionally **not** blocked in `robots.txt` so Google can
crawl them and record the 404/410.
