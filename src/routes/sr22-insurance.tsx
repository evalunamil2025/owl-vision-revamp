import { createFileRoute } from "@tanstack/react-router";
import SR22Insurance from "@/pages/SR22Insurance";

export const Route = createFileRoute("/sr22-insurance")({
  component: SR22Insurance,
});
