# Real HTTP status codes for bringasinsurance.com

## Hosting limitation (read first)

Lovable hosting serves this project as a **static SPA with an automatic
`index.html` fallback**: any unknown path returns that HTML with **HTTP 200**.
The platform does not process `_redirects`, `_headers`, `netlify.toml` or
`vercel.json`, and there is no server hook in the project that can set a
status code. `NotFound.tsx` renders a page; it cannot produce 404/410.

**Therefore requirements 2, 3, 4 and 10 cannot be satisfied from this
repository.** They must be applied in front of the origin, at the domain/CDN
layer.

## Who controls the Cloudflare in front of this domain (verified)

Measured on 2026-08-05:

```
bringasinsurance.com   NS   ns77.domaincontrol.com. / ns78.domaincontrol.com.   (GoDaddy)
bringasinsurance.com   A    185.158.133.1                                       (Lovable hosting)
response headers       server: cloudflare, cf-ray, __cf_bm
```

The domain is **not** on a Cloudflare zone. Authoritative DNS is GoDaddy, and
the apex A record points straight at Lovable's hosting IP. The
`server: cloudflare` / `cf-ray` / `__cf_bm` headers come from **Lovable's own
Cloudflare account**, which fronts the Lovable hosting platform — it is shared
infrastructure, not a per-customer zone. There is no zone dashboard for
`bringasinsurance.com` that the domain owner or Lovable Support can attach a
Worker Route to, and customers cannot deploy Workers into Lovable's
infrastructure account.

**Conclusion: the Worker below cannot be deployed as-is today.** Two ways
forward:

- **A — Move the zone to Cloudflare (domain owner action).** Create a free
  Cloudflare account, add `bringasinsurance.com`, and change the nameservers
  at GoDaddy to the two Cloudflare nameservers. Recreate the existing records
  (apex A `185.158.133.1`, plus the current `www` record and any MX/TXT for
  email — copy them from GoDaddy *before* switching). Then the zone is yours,
  the records must be **Proxied (orange cloud)**, and the Worker + Routes below
  apply exactly as written. This is a nameserver change and must not be done
  without the owner's explicit confirmation.
- **B — Host the site somewhere with real status-code control** (Vercel or
  Netlify). See "Migration path" at the end of this document.

## Route, NOT Custom Domain

*(Applies only after option A: the zone is on Cloudflare.)*

Attach the Worker with a **Workers Route**, never with a **Custom Domain**.

- A **Route** intercepts traffic for a hostname that already resolves through
  Cloudflare and lets the Worker call `fetch()` back to the existing origin —
  which stays **Lovable**. This is what we need.
- A **Custom Domain** makes the Worker itself the origin: Cloudflare rewrites
  the DNS record to point at the Worker, the Lovable origin is detached, and
  every `fetch(request)` pass-through in step 4 breaks (the site goes down or
  loops). Do not use it.

Requirement for the Route to fire: the `bringasinsurance.com` (and `www`)
records must be **Proxied (orange cloud)** in *your* Cloudflare DNS.

### Which routes to add

| Route pattern | Add it? |
| --- | --- |
| `bringasinsurance.com/*` | **Yes** — this is the production hostname (HTTP 200). |
| `www.bringasinsurance.com/*` | **Yes** — `www` is active today: it answers `302 -> https://bringasinsurance.com/`. Without the Worker, a legacy `www` URL costs two hops (302 to apex, then 301). With the Worker on `www` too, `REDIRECTS` resolves against `CANON`, so it is a single 301 straight to the final apex URL. |

Do not add routes for the `*.lovable.app` preview or published hostnames —
those are not on this Cloudflare zone and must keep working untouched.


## Cloudflare Worker code

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

// Static assets that must always pass through untouched
// (includes robots.txt, sitemap.xml, favicon, JS/CSS bundles, images, fonts).
const ASSET = /\.(js|mjs|css|png|jpe?g|webp|avif|gif|svg|ico|woff2?|ttf|txt|xml|json|map|webmanifest|mp4|pdf)$/i;

// Canonical host. Redirect targets always land on the apex so a www hit is
// still a single hop, and the shell fetch never depends on the incoming host.
const CANON = "https://bringasinsurance.com";

async function shell(status) {
  // Reuse the SPA shell as the body so users still see a branded page,
  // but with the correct status code and X-Robots-Tag.
  // Plain GET: never replays the original method/body/cookies.
  const res = await fetch(CANON + "/", {
    headers: { accept: "text/html" },
    cf: { cacheTtl: 300 },
  });
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

    // 0) Anything that is not a plain page read (form POST, preflight, API
    //    call, beacon) goes straight to the origin, untouched.
    if (request.method !== "GET" && request.method !== "HEAD") {
      return fetch(request);
    }

    // 1) Static assets, robots.txt and sitemap.xml: never rewritten.
    if (ASSET.test(raw)) return fetch(request);

    // 2) Single-hop 301 for legitimate migrated URLs.
    //    Query string is preserved here only (campaign params must survive).
    if (REDIRECTS[path]) {
      const target = CANON + REDIRECTS[path] + url.search;
      // Loop guard: never redirect a URL to itself.
      if (target !== url.origin + raw + url.search) {
        return Response.redirect(target, 301);
      }
    }

    // 3) 410 Gone for deleted WordPress / spam / hacked paths.
    //    No query string is carried: the resource is gone.
    if (GONE.some((re) => re.test(path))) {
      return shell(410);
    }

    // 4) 200 for valid app routes — fetched from the Lovable origin as-is.
    if (VALID.has(path)) return fetch(request);

    // 5) Everything else: real 404 — never a redirect to "/".
    return shell(404);
  },
};
```

Notes:
- Trailing slashes are normalised, so `/payments/` and `/payments` both match.
- Every redirect target is a member of `VALID`, so no chained redirects; the
  explicit loop guard also blocks a self-redirect if the table is edited badly.
- No rule maps an unknown URL to `/` with a 200 or a redirect.
- `fetch(CANON + "/")` from inside the Worker is a subrequest to the origin;
  Cloudflare does not re-invoke the same Worker script on it, so there is no
  recursion.


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

## What the Worker does NOT touch

| Surface | Behaviour |
| --- | --- |
| Valid routes (the 26 in `VALID`) | Step 4 `fetch(request)` — original request forwarded to the Lovable origin unchanged: same headers, cookies, query string, status 200. |
| Forms / POST / PUT / OPTIONS preflight | Step 0 returns `fetch(request)` before any rule runs. |
| Analytics (GA4 `gtag`) | Loaded from `googletagmanager.com`, a different hostname — the Route never matches it. Beacons are POSTs to `google-analytics.com`, also off-zone. |
| JS/CSS bundles, images, fonts | Matched by `ASSET` in step 1 and passed through. |
| `robots.txt` | `.txt` matches `ASSET` — passed through, 200, unmodified. |
| `sitemap.xml` | `.xml` matches `ASSET` — passed through, 200, unmodified. |
| `favicon.ico`, `placeholder.svg` | Matched by `ASSET`. |
| Preview / `*.lovable.app` URLs | Different zone, no Route, unaffected. |

## Cloudflare dashboard deployment steps

1. Sign in at <https://dash.cloudflare.com> and select the
   **bringasinsurance.com** zone.
2. **DNS → Records**: confirm the `bringasinsurance.com` (and `www`) records
   show an **orange cloud / Proxied**. If grey, click it to proxy. A Worker
   Route cannot fire on a DNS-only record.
3. Left sidebar → **Workers & Pages → Create → Workers → Create Worker**.
4. Name it `bringas-seo-status`, click **Deploy** (the placeholder code is
   fine for now).
5. Click **Edit code**, delete everything in `worker.js`, paste the full
   Worker from the "Cloudflare Worker code" section above, then
   **Deploy**.
6. Go back to the Worker → **Settings → Domains & Routes → Add → Route**.
   - Zone: `bringasinsurance.com`
   - Route: `bringasinsurance.com/*`
   - Failure mode: **Fail open** (if the Worker errors, traffic still reaches
     the origin — the site never goes dark).
   - Click **Add route**.
   Do **not** pick **Custom Domain** in that dialog.
7. Repeat step 6 for the route `www.bringasinsurance.com/*`.
8. Zone → **Caching → Configuration → Purge Everything** so old cached 200s
   for spam URLs are dropped.
9. Wait ~30 seconds, then run the verification command below.

Rollback: Worker → **Settings → Domains & Routes** → delete the two routes.
Traffic returns to the current behaviour immediately; nothing in the Lovable
project changes.

## Final curl verification

```sh
for p in / /auto-insurance /faq/ /2025/test-spam-page/ /wp-admin/ \
         /random-nonexistent-url-12345/ /seguros-para-autos-en-seattle-washington/ \
         /payments/ /robots.txt /sitemap.xml; do
  printf '%-58s ' "$p"
  curl -s -o /dev/null -w '%{http_code} %{redirect_url}\n' "https://bringasinsurance.com$p"
done
```

Expected output:

```text
/                                                          200
/auto-insurance                                            200
/faq/                                                      404
/2025/test-spam-page/                                      410
/wp-admin/                                                 410
/random-nonexistent-url-12345/                             404
/seguros-para-autos-en-seattle-washington/                 301 https://bringasinsurance.com/auto-insurance
/payments/                                                 301 https://bringasinsurance.com/pay-my-bill
/robots.txt                                                200
/sitemap.xml                                               200
```

Single-hop check for every redirect (must print exactly one `301` line then a
`200`):

```sh
curl -sIL -o /dev/null -w '%{http_code} %{url_effective}\n' \
  https://bringasinsurance.com/payments/
```

