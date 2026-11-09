import { createFileRoute } from "@tanstack/react-router";
import BoatInsurance from "@/pages/BoatInsurance";

export const Route = createFileRoute("/boat-insurance")({
  component: BoatInsurance,
});
