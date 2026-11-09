import { createFileRoute } from "@tanstack/react-router";
import GeneralLiability from "@/pages/GeneralLiability";

export const Route = createFileRoute("/general-liability")({
  component: GeneralLiability,
});
