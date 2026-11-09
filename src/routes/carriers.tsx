import { createFileRoute } from "@tanstack/react-router";
import Carriers from "@/pages/Carriers";

export const Route = createFileRoute("/carriers")({
  component: Carriers,
});
