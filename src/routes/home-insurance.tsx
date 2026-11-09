import { createFileRoute } from "@tanstack/react-router";
import HomeInsurance from "@/pages/HomeInsurance";

export const Route = createFileRoute("/home-insurance")({
  component: HomeInsurance,
});
