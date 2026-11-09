import { createFileRoute } from "@tanstack/react-router";
import BOPInsurance from "@/pages/BOPInsurance";

export const Route = createFileRoute("/bop-insurance")({
  component: BOPInsurance,
});
