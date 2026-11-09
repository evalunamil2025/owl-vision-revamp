import { createFileRoute } from "@tanstack/react-router";
import MotorcycleInsurance from "@/pages/MotorcycleInsurance";

export const Route = createFileRoute("/motorcycle-insurance")({
  component: MotorcycleInsurance,
});
