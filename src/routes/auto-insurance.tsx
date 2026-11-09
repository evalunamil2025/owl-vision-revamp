import { createFileRoute } from "@tanstack/react-router";
import AutoInsurance from "@/pages/AutoInsurance";

export const Route = createFileRoute("/auto-insurance")({
  component: AutoInsurance,
});
