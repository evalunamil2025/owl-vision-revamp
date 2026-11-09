import { createFileRoute } from "@tanstack/react-router";
import PayMyBill from "@/pages/PayMyBill";

export const Route = createFileRoute("/pay-my-bill")({
  component: PayMyBill,
});
