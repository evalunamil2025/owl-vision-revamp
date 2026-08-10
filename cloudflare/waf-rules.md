# Cloudflare HTTP status policy

Status: **prepared, not deployed**. `src/config/redirects.ts` is authoritative; run `npm run seo:generate` after every policy change and import `bringas-redirects.csv` as a Bulk Redirect List.

`worker.js` is also generated from that source and provides a test implementation with GET/HEAD-only 301/410/404 handling and pass-through for valid routes, assets, APIs and non-page methods. Use it only where Cloudflare Workers Routes actually execute for the origin; the native-rule order below still applies to Bulk Redirect deployments.

## Execution order

Cloudflare WAF custom rules run before Bulk Redirects. Create a first WAF **Skip** rule for every source URL in the generated redirect list, or implement the two critical migrations below as **Single Redirects** (301) before enabling the 410 rule:

```text
lower(http.request.uri.path) in {"/payments" "/payments/" "/seguro-para-casas-prefabricadas-en-seattle-washington" "/seguro-para-casas-prefabricadas-en-seattle-washington/" "/es/seguro-para-casas-prefabricadas-en-seattle-washington" "/es/seguro-para-casas-prefabricadas-en-seattle-washington/"}
```

Targets are `/pay-my-bill` and `/mobile-home-insurance`; disable query preservation. The CSV uses `include_subdomains=true`, covering apex and `www` in one hop.

## 410 custom response

Limit the rule to `GET` and `HEAD`, and exclude every redirect source before this expression. Action: Block with custom status `410`, content type `text/html`, `X-Robots-Tag: noindex` when the plan supports response headers.

```text
(http.request.method in {"GET" "HEAD"}) and (
  http.request.uri.path matches "^/wp-(admin|content|includes|json|login)(/|$)" or
  http.request.uri.path matches "^/xmlrpc" or
  http.request.uri.path matches "^/(category|tag|feed|author|comments)(/|$)" or
  http.request.uri.path matches "^/2025(/|$)" or
  http.request.uri.path matches "\\.(php|asp|aspx)$" or
  http.request.uri.path matches "^/(shop|shopdetail|cart|checkout|myaccount|order|shopping)(/|$)" or
  lower(http.request.uri.path) matches "(casino|gambling|betting|slots?|poker|game-?coins?|free-?spins?|bonus-?code)" or
  lower(http.request.uri.path) matches "^/(vvip|claim|match|reward|mega|prime|new|grab|win|boost)[a-z]*-[a-z0-9]{5,}-"
)
```

## Unknown GET/HEAD → 404

Do not implement this as a broad WAF block until its allowlist is tested. Allow `VALID_ROUTES`, every redirect source, extensions for static assets, form/API endpoints, `/assets/`, `/robots.txt`, `/sitemap.xml`, `/.well-known/`, and `/cdn-cgi/`; pass all methods other than GET/HEAD. Because a static WAF allowlist can drift, the safer fallback is Git deployment to Vercel/Netlify edge middleware generated from the same route policy, with explicit 200 rewrites and a terminal 404—not a universal SPA 200 fallback.

## Deployment and rollback

1. Import the generated CSV into a staging Bulk Redirect List; enable Single Redirects for the two critical paths.
2. Add redirect-source exclusions, then enable 410 in staging.
3. Add/test the 404 policy only after form/API endpoints are enumerated.
4. Run `SEO_BASE_URL=https://staging.example npm run seo:verify`, then repeat against production.
5. Roll back by disabling the 404 rule, then 410, then Single/Bulk Redirect rules in that order. No DNS change is required by these artifacts.

If Cloudflare rules do not intercept the Lovable origin, deploy the GitHub-synced `dist` build to a platform with edge middleware/SSR. Lovable remains the editor through GitHub sync; production deploys from Git. Enumerate valid paths and end unmatched requests with a real 404.
