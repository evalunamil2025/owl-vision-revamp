import { createFileRoute } from "@tanstack/react-router";
import CommercialProperty from "@/pages/CommercialProperty";

export const Route = createFileRoute("/commercial-property")({
  component: CommercialProperty,
});
