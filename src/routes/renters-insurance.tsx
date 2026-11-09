import { createFileRoute } from "@tanstack/react-router";
import RentersInsurance from "@/pages/RentersInsurance";

export const Route = createFileRoute("/renters-insurance")({
  component: RentersInsurance,
});
