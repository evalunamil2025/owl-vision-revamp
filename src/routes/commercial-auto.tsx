import { createFileRoute } from "@tanstack/react-router";
import CommercialAuto from "@/pages/CommercialAuto";

export const Route = createFileRoute("/commercial-auto")({
  component: CommercialAuto,
});
