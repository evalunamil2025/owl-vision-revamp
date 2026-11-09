import { createFileRoute } from "@tanstack/react-router";
import ContractorsInsurance from "@/pages/ContractorsInsurance";

export const Route = createFileRoute("/contractors-insurance")({
  component: ContractorsInsurance,
});
