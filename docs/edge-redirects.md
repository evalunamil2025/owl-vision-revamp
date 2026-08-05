# Real HTTP status codes for bringasinsurance.com

## Hosting limitation (read first)

Lovable hosting serves this project as a **static SPA with an automatic
`index.html` fallback**: any unknown path returns that HTML with **HTTP 200**.
The platform does not process `_redirects`, `_headers`, `netlify.toml` or
`vercel.json`, and there is no server hook in the project that can set a
status code. `NotFound.tsx` renders a page; it cannot produce 404/410.

**Therefore requirements 2, 3, 4 and 10 cannot be satisfied from this
repository.** They must be applied in front of the origin, at the domain/CDN
layer. `bringasinsurance.com` resolves through Cloudflare, so a Worker on the
route `bringasinsurance.com/*` is the recommended place. The complete,
ready-to-paste rule set is below; the source of truth for the lists is
`src/config/redirects.ts`.

## Cloudflare Worker (paste into a Worker on route `bringasinsurance.com/*`)

```js
const REDIRECTS = {
  "/seguros-para-autos-en-seattle-washington": "/auto-insurance",
  "/car-insurance-in-seattle-washington": "/auto-insurance",
  "/seguros-de-vida-en-seattle-washington": "/life-insurance",
  "/life-insurance-in-seattle-washington": "/life-insurance",
  "/seguros-para-propiedad-comercial-en-seattle-washington": "/commercial-property",
  "/commercial-property-insurance-in-seattle-washington": "/commercial-property",
  "/restaurant-insurance-in-seattle-washington": "/restaurant-insurance",
  "/renters-insurance-in-seattle-washington": "/renters-insurance",
  "/recreational-vehicle-insurance-in-seattle-washington": "/rv-insurance",
  "/contractors-insurance-in-seattle-washington": "/contractors-insurance",
  "/payments": "/pay-my-bill",
  "/pagos": "/pay-my-bill",
  "/fianzas-para-seguros-en-seattle-washington": "/bonds-surety",
  "/agentes-de-seguros-en-seattle-washington": "/about",
  "/customer-quoting": "/quote",
  "/es/seguros-para-autos-en-seattle-washington": "/auto-insurance",
  "/es/seguros-para-inquilinos-en-seattle-washington": "/renters-insurance",
};

const VALID = new Set([
  "/", "/about", "/quote", "/contact", "/auto-insurance", "/home-insurance",
  "/life-insurance", "/boat-insurance", "/motorcycle-insurance", "/rv-insurance",
  "/renters-insurance", "/landlord-insurance", "/mobile-home-insurance",
  "/personal-umbrella", "/general-liability", "/bop-insurance", "/commercial-auto",
  "/commercial-property", "/contractors-insurance", "/restaurant-insurance",
  "/building-owners", "/bonds-surety", "/pay-my-bill", "/client-center",
  "/carriers", "/sr22-insurance",
]);

const GONE = [
  /^\/wp-(admin|content|includes|json|login)(\/|$)/i,
  /^\/(category|tag|feed|author|comments)(\/|$)/i,
  /^\/\d{4}(\/|$)/,
  /\.(php|htm|asp|aspx)$/i,
  /(casino|gambling|betting|slots?|poker|game-?coins?|free-?spins?|bonus-?code)/i,
  /^\/xmlrpc/i,
];

// Static assets that must always pass through untouched.
const ASSET = /\.(js|mjs|css|png|jpe?g|webp|avif|gif|svg|ico|woff2?|ttf|txt|xml|json|map|webmanifest|mp4|pdf)$/i;

async function shell(url, request, status) {
  // Reuse the SPA shell as the body so users still see a branded page,
  // but with the correct status code and X-Robots-Tag.
  const res = await fetch(new Request(url.origin + "/", request));
  return new Response(await res.text(), {
    status,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store",
      "x-robots-tag": "noindex",
    },
  });
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const raw = url.pathname;
    const path = raw.length > 1 ? raw.replace(/\/+$/, "").toLowerCase() : "/";

    // 1) Single-hop 301 for legitimate migrated URLs
    if (REDIRECTS[path]) {
      return Response.redirect(url.origin + REDIRECTS[path] + url.search, 301);
    }

    // 2) 410 Gone for deleted WordPress / spam / hacked paths
    if (GONE.some((re) => re.test(path))) {
      return shell(url, request, 410);
    }

    // 3) 200 for real assets and valid app routes
    if (ASSET.test(raw) || VALID.has(path)) {
      return fetch(request);
    }

    // 4) Everything else: real 404 — never a redirect to "/"
    return shell(url, request, 404);
  },
};
```

Notes:
- Trailing slashes are normalised, so `/payments/` and `/payments` both match.
- Redirect targets are all in `VALID`, so every redirect is single-hop.
- No rule maps an unknown URL to `/` with a 200 or a redirect.

## Redirect table (301, single-hop)

| Old URL | New URL |
| --- | --- |
| /seguros-para-autos-en-seattle-washington/ | /auto-insurance |
| /car-insurance-in-seattle-washington/ | /auto-insurance |
| /seguros-de-vida-en-seattle-washington/ | /life-insurance |
| /life-insurance-in-seattle-washington/ | /life-insurance |
| /seguros-para-propiedad-comercial-en-seattle-washington/ | /commercial-property |
| /commercial-property-insurance-in-seattle-washington/ | /commercial-property |
| /restaurant-insurance-in-seattle-washington/ | /restaurant-insurance |
| /renters-insurance-in-seattle-washington/ | /renters-insurance |
| /recreational-vehicle-insurance-in-seattle-washington/ | /rv-insurance |
| /contractors-insurance-in-seattle-washington/ | /contractors-insurance |
| /payments/ | /pay-my-bill |
| /pagos/ | /pay-my-bill |
| /fianzas-para-seguros-en-seattle-washington/ | /bonds-surety |
| /agentes-de-seguros-en-seattle-washington/ | /about |
| /customer-quoting/ | /quote |
| /es/seguros-para-autos-en-seattle-washington/ | /auto-insurance |
| /es/seguros-para-inquilinos-en-seattle-washington/ | /renters-insurance |

## Sent to 410 Gone

- `/wp-admin/*`, `/wp-content/*`, `/wp-includes/*`, `/wp-json/*`, `/wp-login*`
- `/category/*`, `/tag/*`, `/feed/*`, `/author/*`, `/comments/*`
- Dated WordPress archives `/YYYY/*` (the new app has no dated or blog routes,
  so this prefix is safe to treat as gone globally)
- `*.php`, `*.htm`, `*.asp`, `*.aspx`
- Any path containing casino / gambling / betting / slots / poker /
  game-coins / free-spins / bonus-code
- `/xmlrpc*`
- Explicitly:
  `/2025/08/05/experience-englishspeaking-online-casinos-in-canada-play-at-gigadats-toprated-gambling-platform/`

## robots.txt

Deleted URLs are deliberately **not** disallowed, so Google can crawl them and
record the 404/410. `robots.txt` only declares the sitemap.

## Acceptance tests (run after the Worker is deployed)

```sh
for p in / /auto-insurance /faq/ /2025/test-spam-page/ /wp-admin/ \
         /random-nonexistent-url-12345/ /seguros-para-autos-en-seattle-washington/ /payments/; do
  curl -s -o /dev/null -w "%{http_code} %{redirect_url} $p\n" "https://bringasinsurance.com$p"
done
```

Expected: `200`, `200`, `404`, `410`, `410`, `404`, `301 -> /auto-insurance`,
`301 -> /pay-my-bill`.
