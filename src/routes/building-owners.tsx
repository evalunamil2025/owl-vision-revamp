import { createFileRoute } from "@tanstack/react-router";
import BuildingOwners from "@/pages/BuildingOwners";

export const Route = createFileRoute("/building-owners")({
  component: BuildingOwners,
});
