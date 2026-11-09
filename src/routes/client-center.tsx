import { createFileRoute } from "@tanstack/react-router";
import ClientCenter from "@/pages/ClientCenter";

export const Route = createFileRoute("/client-center")({
  component: ClientCenter,
});
