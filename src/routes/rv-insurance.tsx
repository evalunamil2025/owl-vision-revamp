import { createFileRoute } from "@tanstack/react-router";
import RVInsurance from "@/pages/RVInsurance";

export const Route = createFileRoute("/rv-insurance")({
  component: RVInsurance,
});
