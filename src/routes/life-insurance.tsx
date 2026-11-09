import { createFileRoute } from "@tanstack/react-router";
import LifeInsurance from "@/pages/LifeInsurance";

export const Route = createFileRoute("/life-insurance")({
  component: LifeInsurance,
});
