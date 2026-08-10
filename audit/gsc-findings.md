# Bringas indexation audit

## Executive summary

- High: the current SPA origin has historically returned 200 for legacy, spam, and unknown paths, creating soft 404s. Correct status codes require an edge/hosting layer.
- High: 319 unique Search Console rows were found in `seo/reports/gsc-url-audit.csv`; the generated policy consolidates these with 26 valid routes and the explicit legacy map.
- High: the manufactured-home Spanish legacy URL was missing and the suffix fallback failed to re-check the legacy map. Both are now covered by unit tests.
- Medium: no approved Spanish landing-page content exists in scope, so `/es/` is specified as a temporary one-hop 301 to `/`; it must not be served as a 200 NotFound page.
- Quick win: `robots.txt` already permits crawling and references the sitemap, allowing Google to observe 301/404/410 after deployment.

## Technical findings

| Issue | Impact | Evidence | Fix | Priority |
| --- | --- | --- | --- | --- |
| SPA shell masks missing URLs | Soft 404 and crawl waste | GSC export records HTTP 200 for hacked URLs; React cannot set the initial response | Apply edge redirects, 410 and terminal 404 | Critical |
| Incomplete mobile-home redirect | Legitimate migrated URL does not resolve reliably | Missing explicit slug and resolver checked only `VALID_ROUTES` after suffix removal | Explicit mapping plus second `LEGACY_REDIRECTS` lookup | Critical |
| WAF/Bulk Redirect order | A 410 rule can pre-empt a legitimate 301 | Cloudflare execution-order constraint in project brief | Single Redirect critical URLs and exclude all redirect sources from WAF | Critical |
| `/es/` is not a real page | A 200 NotFound would be indexation ambiguity | No `/es` route in App/VALID_ROUTES/sitemap | Temporary 301 to `/` pending approved Spanish page | High |
| Policy drift | Redirect chains or sitemap-invalid routes | App, config, sitemap and edge rules were separately maintained | Generate edge/audit artifacts and test invariants from config | High |
| GA4 duplicate risk | Inflated page views | GA config already uses `send_page_view: false`; app sends only for `VALID_ROUTES` | Preserve current setup; verify network/DebugView after deployment | Medium |

## Inventory and classification

`audit/url-policy.csv` contains the requested columns. `verified=NO` means the expected edge result is not proven on the public domain. Query-string variants of valid paths are `CANONICAL_ALTERNATE`; known equivalent migrations are `REDIRECT_301`; WordPress/spam/commerce patterns are `GONE_410`; ambiguous URLs are `MANUAL_REVIEW`, not speculative redirects.

Internal links were scanned from `src`; application route, `VALID_ROUTES`, and sitemap equality is enforced by tests. Sitemap entries are canonical clean paths only. NotFound provides a unique title/description, `noindex, follow`, and omits canonical rather than inheriting the home canonical.

## GA4 evidence boundary

The ID `G-5QM8V0WQ00` is unchanged and configured with `send_page_view: false`. Manual `page_view` events are restricted to `VALID_ROUTES`; `page_not_found` remains diagnostic and no code marks it as a key event. DebugView and request evidence require a deployed build and GA property/browser access, so they remain unverified.

## Production HTTP check (2026-08-10)

| Request | Expected after deployment | Public result | Verified |
| --- | --- | --- | --- |
| `/`, `/auto-insurance`, `/mobile-home-insurance` | 200 | 200 | Yes, valid-route status only |
| `/payments/` | 301 → `/pay-my-bill` | 200 | No |
| `/seguro-para-casas-prefabricadas-en-seattle-washington/` | 301 → `/mobile-home-insurance` | 200 | No |
| `/es/` | Temporary 301 → `/` | 200 SPA/NotFound behavior | No |
| `/wp-admin/` | 410 | 200 | No |
| Representative 2025 casino URL | 410 | 200 | No |
| `/random-nonexistent-url-12345/` | 404 | 200 | No |
| `/robots.txt`, `/sitemap.xml` | 200 | 200 | Yes |

The four required public status classes are therefore not all verified. No production or DNS changes were attempted.

## Prioritized action plan

1. Import and stage `cloudflare/bringas-redirects.csv`; configure critical Single Redirects.
2. Add redirect exclusions, then stage the 410 custom response in `cloudflare/waf-rules.md`.
3. Implement the GET/HEAD-only terminal 404 after enumerating origin form/API endpoints.
4. Run the HTTP verifier in staging and public production; verify assets, forms, OPTIONS/POST, and GA DebugView.
5. Submit the clean sitemap in Search Console, inspect representative 301/410/404 URLs, request validation, and monitor Page indexing/Crawl stats weekly. Do not use Removals as a substitute for status codes.
