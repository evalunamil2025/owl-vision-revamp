import { createFileRoute } from "@tanstack/react-router";
import MobileHomeInsurance from "@/pages/MobileHomeInsurance";

export const Route = createFileRoute("/mobile-home-insurance")({
  component: MobileHomeInsurance,
});
