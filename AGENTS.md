# Project rules

- The app runs on TanStack Start with SSR: one file per page under `src/routes/`, shared head/providers in `src/routes/__root.tsx`. Why: pages must be fully server-rendered for SEO.
- Per-page SEO tags are rendered by `src/components/SEO.tsx` as native React 19 `<title>/<meta>/<link>` elements (hoisted into `<head>` during SSR); do not reintroduce react-helmet. Why: Helmet does not work with React 19 SSR.
- Existing components import routing APIs from `@/lib/router-compat` (react-router-style API over TanStack Router). Why: keeps call sites unchanged after the migration.
- i18n starts in English on server and first client render, then switches to the detected language after hydration. Why: avoids hydration mismatches.
