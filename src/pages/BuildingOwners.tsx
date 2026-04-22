import ServicePageLayout from "@/components/ServicePageLayout";

const BuildingOwners = () => (
  <ServicePageLayout
    title="Building Owners Insurance"
    subtitle="Your building isn't just a property — it's a source of income"
    heroDescription="Owning a building — whether apartments, mixed-use, or commercial rental property — is a significant investment. But it also involves constant risks that can directly affect your income. A fire, structural damage, tenant liability claim, or a single major lawsuit can halt your cash flow. Most lenders require comprehensive property coverage as a loan condition."
    coverages={[
      {
        title: "Building Property (Special Form)",
        description: "Open-peril coverage for the building structure, attached fixtures, and permanent installations against everything not specifically excluded.",
        items: ["Building structure", "Roof & foundation", "Built-in HVAC & plumbing", "Common-area improvements"],
      },
      {
        title: "Business Personal Property",
        description: "Covers landlord-owned equipment in common areas — lobby furniture, laundry equipment, maintenance tools, and supplies.",
      },
      {
        title: "Premises Liability",
        description: "Protects you when tenants, guests, or contractors are injured on the property or sue over a building-related issue.",
        items: ["Bodily injury claims", "Slip-and-fall accidents", "Legal defense", "Habitability lawsuits"],
      },
      {
        title: "Loss of Rental Income",
        description: "If a covered event makes units unrentable, replaces the rental income you would have collected during repairs — typically up to 12 months.",
      },
      {
        title: "Common Endorsements",
        description: "Closing the gaps in standard property policies.",
        items: [
          "Equipment breakdown (boilers, elevators)",
          "Ordinance or law (code upgrades)",
          "Sewer & drain backup",
          "Earthquake & flood (separate)",
          "Commercial umbrella",
          "Employee dishonesty",
        ],
      },
    ]}
    importantNote={{
      title: "Not All Buildings Have the Same Risk",
      content: "Carriers evaluate building age, construction class, occupancy mix, sprinkler systems, roof condition, and prior loss history. Older buildings with mixed commercial and residential tenants are underwritten very differently from newer single-use properties — and a generic policy can leave you significantly exposed.",
    }}
    approach={{
      intro: "We understand this is a business. We analyze your property as an investment.",
      items: ["Analyze as an investment", "Evaluate real risks", "Compare multiple carriers"],
    }}
  />
);

export default BuildingOwners;
