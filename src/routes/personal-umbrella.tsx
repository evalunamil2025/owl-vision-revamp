import { createFileRoute } from "@tanstack/react-router";
import PersonalUmbrella from "@/pages/PersonalUmbrella";

export const Route = createFileRoute("/personal-umbrella")({
  component: PersonalUmbrella,
});
