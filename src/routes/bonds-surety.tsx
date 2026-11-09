import { createFileRoute } from "@tanstack/react-router";
import BondsSurety from "@/pages/BondsSurety";

export const Route = createFileRoute("/bonds-surety")({
  component: BondsSurety,
});
