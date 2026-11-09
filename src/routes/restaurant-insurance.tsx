import { createFileRoute } from "@tanstack/react-router";
import RestaurantInsurance from "@/pages/RestaurantInsurance";

export const Route = createFileRoute("/restaurant-insurance")({
  component: RestaurantInsurance,
});
