import { createFileRoute, notFound } from "@tanstack/react-router";
import { SPANISH_ROUTE_PAGES } from "@/lib/spanish-route-pages";

export const Route = createFileRoute("/es/$")({
  beforeLoad: ({ params }) => {
    const path = `/${params._splat ?? ""}`.replace(/\/+$/, "") || "/";
    if (!SPANISH_ROUTE_PAGES[path]) throw notFound();
  },
  component: SpanishPage,
});

function SpanishPage() {
  const { _splat } = Route.useParams();
  const path = `/${_splat ?? ""}`.replace(/\/+$/, "") || "/";
  const Page = SPANISH_ROUTE_PAGES[path];
  return Page ? <Page /> : null;
}
