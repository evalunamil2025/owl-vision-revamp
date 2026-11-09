import {
  createStart,
  createCsrfMiddleware,
  createMiddleware,
} from "@tanstack/react-start";

import { renderErrorPage } from "./lib/error-page";
import {
  classifyServerUrl,
  renderGonePage,
  withNoIndexHeader,
} from "./lib/server-url-policy";

const seoStatusMiddleware = createMiddleware().server(
  async ({ request, handlerType, next }) => {
    if (handlerType !== "router" || !["GET", "HEAD"].includes(request.method)) {
      return next();
    }

    const decision = classifyServerUrl(new URL(request.url));
    if (decision.kind === "redirect") {
      return new Response(null, {
        status: decision.status,
        headers: {
          location: decision.location,
          "cache-control": "public, max-age=3600",
        },
      });
    }

    if (decision.kind === "gone") {
      return new Response(request.method === "HEAD" ? null : renderGonePage(), {
        status: decision.status,
        headers: {
          "content-type": "text/html; charset=utf-8",
          "cache-control": "public, max-age=3600",
          "x-robots-tag": "noindex, nofollow",
        },
      });
    }

    const result = await next();
    if (result.response.status === 404) {
      return { ...result, response: withNoIndexHeader(result.response) };
    }
    return result;
  },
);

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

// Start installs this automatically when src/start.ts is absent; defining the
// file opts out, so re-add it explicitly to keep server functions protected
// from cross-site requests.
const csrfMiddleware = createCsrfMiddleware({
  filter: (ctx) => ctx.handlerType === "serverFn",
});

// requestMiddleware runs on every request; functionMiddleware only on server functions, where
// client sendContext is unvalidated input. Append to these arrays, never replace them.
// Enabling Lovable Cloud adds functionMiddleware: [attachSupabaseAuth], the bearer token that
// requireSupabaseAuth server functions need. Add it by hand only if Lovable Cloud or a
// user-managed Supabase project is connected, no middleware here sets Authorization, and the
// project did not intentionally replace it.
export const startInstance = createStart(() => ({
  requestMiddleware: [errorMiddleware, seoStatusMiddleware, csrfMiddleware],
}));
