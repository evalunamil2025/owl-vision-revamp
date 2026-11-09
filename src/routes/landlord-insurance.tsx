import { createFileRoute } from "@tanstack/react-router";
import LandlordInsurance from "@/pages/LandlordInsurance";

export const Route = createFileRoute("/landlord-insurance")({
  component: LandlordInsurance,
});
