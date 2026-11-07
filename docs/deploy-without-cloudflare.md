# Production deployment without Cloudflare

The production HTTP policy is implemented by `server/production-server.mjs`.
Cloudflare, Wrangler, Workers, WAF rules, and Cloudflare-managed DNS are not
required.

## What the Node server handles

- Serves the 26 valid React routes with HTTP 200.
- Injects the route-specific title, description, canonical, and robots tags
  into the initial HTML response.
- Redirects HTTP/`www`, trailing-slash, uppercase, locale, legacy, and known
  query duplicates with a single HTTP 301.
- Returns HTTP 404 plus `X-Robots-Tag: noindex` for unknown URLs.
- Returns HTTP 410 plus `X-Robots-Tag: noindex` for retired/spam URLs.
- Serves assets, `robots.txt`, `sitemap.xml`, and `llms.txt` directly.
- Receives contact and service-lead forms at `/api/contact` and sends them
  through Resend without exposing the API key to the browser.

## Deploy from GitHub on Render

The root `render.yaml` defines the complete web service. Lovable remains the
editor and continues syncing commits to GitHub; Render becomes only the public
runtime.

1. In Render, create a Blueprint and select the GitHub repository
   `evalunamil2025/owl-vision-revamp`.
2. Confirm the service uses `npm ci && npm run build` and `npm start`.
3. Enter `RESEND_API_KEY` when Render requests the unsynced secret. Never add
   this value to Git, Lovable variables prefixed with `VITE_`, or documentation.
4. Deploy and test the temporary `onrender.com` hostname first.
5. Add the root custom domain `bringasinsurance.com` in the service settings.
   Render automatically adds `www` and redirects it to the root domain.
6. At the current DNS registrar, replace only the apex and `www` web records
   with the exact values Render displays. Preserve MX, SPF, DKIM, DMARC, blog,
   and all email-related records.
7. Verify the custom domain and wait for its managed TLS certificate.
8. Do not start Search Console validation until the acceptance checks below
   pass on the public domain.

Render documents that Node web services deploy from a linked Git repository,
must listen on `0.0.0.0:$PORT`, support custom domains, and automatically
redirect custom-domain HTTP traffic to HTTPS. The included server follows that
contract.

## Acceptance checks

```sh
curl -I https://bringasinsurance.com/
curl -I https://www.bringasinsurance.com/contact
curl -I 'https://bringasinsurance.com/contact?v=cache'
curl -I https://bringasinsurance.com/unknown-seo-test
curl -I https://bringasinsurance.com/casino-bonus-code
curl -I https://bringasinsurance.com/robots.txt
curl -I https://bringasinsurance.com/sitemap.xml
curl -I https://bringasinsurance.com/llms.txt
```

Expected results:

| Request | Expected result |
| --- | --- |
| `/` and all sitemap routes | 200 |
| `www` and HTTP | one 301 to HTTPS apex |
| `?v=`, `?tid=`, `?lang=` | one 301 to the clean route |
| Unknown URL | 404 + `X-Robots-Tag: noindex` |
| Spam/retired URL | 410 + `X-Robots-Tag: noindex` |
| `robots.txt`, `sitemap.xml`, `llms.txt` | 200 |

Submit one contact form and confirm delivery to both configured recipients.
Then run `SEO_LIVE_BASE_URL=https://bringasinsurance.com npm test -- --run` and
start the relevant Search Console validations only if the live test passes.

## Rollback

If the new service fails before DNS cutover, no rollback is needed because the
public site is unchanged. After cutover, restore the previous apex and `www`
records at the DNS registrar. All email and blog records remain untouched.
