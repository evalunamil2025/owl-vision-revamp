# Crawler CSV review — Bringas Insurance Group

Source files reviewed read-only:

- `bringasinsurance.com_issues_20261107.csv`
- `bringasinsurance.com_pages_20261107.csv`

Review performed 2026-11-06 (America/Mexico_City). The source exports were not
rewritten because they are crawl evidence, not application configuration.

## Bottom line

- Issues export DQS: **90.8/100**; pages export DQS: **88.4/100**. Both are
  usable evidence. Page URLs are unique and every row has an HTTP status.
- The pages export contains 45 rows: 44 HTML observations plus the sitemap.
  It crawled 23 apex URLs and 22 `www` URLs, causing duplicate-host findings.
- Nine audit rules failed. Four are now fixed in repository code, one low-value
  notice is resolved, one is partly mitigated, and three require a new crawl or
  a more detailed issue export before a safe content/link change.

## Evidence and remediation status

| Finding | CSV evidence | Impact | Remediation | Status |
| --- | ---: | --- | --- | --- |
| Duplicate host/canonical variants | 22 `www` pages return 200 and canonicalize to apex | High | Node production server sends one 301 from HTTP/`www` to the HTTPS apex path | Prepared; Node deployment required |
| Duplicate meta descriptions | 22 failed groups; the same description appears on all 44 HTML rows | High | 26-route metadata manifest plus React and edge metadata output | Fixed in repository |
| Duplicate titles | 2 failed checks; `/contractors-insurance` exposed the home title during one apex crawl | High | Route-specific title manifest and edge injection; host duplicate removed by 301 | Fixed in repository |
| Orphaned sitemap pages | 4 of 26 sitemap URLs | High | Added crawlable footer links for `/sr22-insurance`, `/pay-my-bill`, `/client-center`, and `/carriers` | Fixed in repository |
| `llms.txt` missing | 1 of 1 | Low | Added `public/llms.txt` | Fixed in repository |
| Missing H1 | 1 of 44 | Medium | All 26 application routes render one H1 in the verified local build; the failing URL is not identified by the summary export | Re-crawl required |
| Slow HTML response | 7 of 44; 3.42–4.215 s | Medium | Four slow observations are duplicate `www` fetches removed by the host redirect. Remaining apex observations were `/rv-insurance`, `/contact`, and `/about` | Partly mitigated; measure production TTFB after deploy |
| Low text-to-HTML ratio | 44 of 44 | Low/Medium | This is site-wide and consistent with the React SPA/rendered-markup structure; metadata changes alone cannot resolve it | SSR/prerender decision required |
| Low word count | 3 of 44 | Medium | Summary CSV does not identify the three URLs | Detailed issue export required before editing content |
| Broken external links | 44 of 89 checks | Medium | Summary CSV contains neither source/target pairs nor response codes. Social networks commonly block audit bots, so links were not removed without proof | Detailed link export and browser verification required |

## Data-quality caveats

- `Unique Pageviews` and `Blocked AI search bots` are empty in every row. They
  are optional crawler fields and do not invalidate the technical findings.
- The sitemap row correctly lacks HTML-only fields such as title, H1, Open
  Graph, and JavaScript size; it must not be treated as a broken web page.
- All 45 rows show HTTP 200, so this export cannot validate the prepared 301,
  404, and 410 policies until those rules are active in production.
- The filename is dated 2026-11-07 while the local file modification time is
  2026-11-06. This is likely an export timezone/date convention, but it should
  be documented when comparing audits.

## Acceptance criteria for the next crawl

1. Only `https://bringasinsurance.com/*` HTML URLs return 200; `www` and HTTP
   variants return a single 301.
2. All 26 sitemap URLs are discovered through internal links and self-canonical.
3. Every HTML route has one unique title, one unique description, and one H1.
4. `/llms.txt`, `/robots.txt`, and `/sitemap.xml` return 200.
5. Unknown URLs return 404 and known spam patterns return 410 with
   `X-Robots-Tag: noindex`.
6. Export the detailed broken-link and low-word-count tables, not only the
   issue summary, if either rule still fails.

## Public spot check after implementation

Checked from outside the workspace on 2026-11-06:

- `https://bringasinsurance.com/llms.txt` → 200
- `https://www.bringasinsurance.com/contact` → 200
- `http://bringasinsurance.com/contact` → 301 to the HTTPS apex URL
- `https://bringasinsurance.com/contractors-insurance` → 200
- `https://bringasinsurance.com/this-page-does-not-exist-seo-test` → 200

This proves only the static `llms.txt` change is public; the Node HTTP policy is
not active on the public request path. Do not start Search Console validation
until a repeat check shows 301 for `www`, 404 for the unknown URL, and 410 for
confirmed spam.
