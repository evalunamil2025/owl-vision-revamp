import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { SPANISH_ROUTE_PAGES } from "@/lib/spanish-route-pages";
import { canonicalizeSpanishPath, stripSpanishPrefix } from "@/lib/locale-path";

export const Route = createFileRoute("/es/$")({
  beforeLoad: ({ params }) => {
    const spanishPath =
      `/es/${params._splat ?? ""}`.replace(/\/+$/, "") || "/es";
    const canonicalPath = canonicalizeSpanishPath(spanishPath);
    if (canonicalPath && canonicalPath !== spanishPath) {
      throw redirect({ to: canonicalPath as never, replace: true });
    }

    const path = stripSpanishPrefix(canonicalPath ?? spanishPath);
    if (!SPANISH_ROUTE_PAGES[path]) throw notFound();
  },
  component: SpanishPage,
});

function SpanishPage() {
  const { _splat } = Route.useParams();
  const spanishPath = `/es/${_splat ?? ""}`.replace(/\/+$/, "") || "/es";
  const path = stripSpanishPrefix(spanishPath);
  const Page = SPANISH_ROUTE_PAGES[path];
  return Page ? <Page /> : null;
}
