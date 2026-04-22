import ServicePageLayout from "@/components/ServicePageLayout";

const CommercialProperty = () => (
  <ServicePageLayout
    title="Commercial Property Insurance"
    subtitle="Your business needs a space — protect it as the asset it is"
    heroDescription="Your office, warehouse, building, or retail space isn't just a physical location. It's where your operation happens, where you generate income, and where much of your investment sits. The Insurance Institute reports that 40% of businesses never reopen after a major disaster — proper property coverage is the difference."
    coverages={[
      {
        title: "Building & Structures",
        description: "Covers the building (if owned) plus permanent improvements, fixtures, and outdoor structures on Special Form (open peril) basis.",
        items: ["Building structure", "Tenant improvements & betterments", "Permanently installed equipment", "Outdoor signs & fences"],
      },
      {
        title: "Business Personal Property (BPP)",
        description: "Covers everything you use to run the business — furniture, computers, machinery, tools, and supplies — even property of others in your care.",
      },
      {
        title: "Inventory & Stock",
        description: "Protects products and raw materials from fire, theft, water damage, and vandalism. Special considerations apply for high-value or perishable goods.",
      },
      {
        title: "Electronic Data & Equipment",
        description: "Covers computers, servers, point-of-sale systems, and important records — often with sub-limits that can be increased by endorsement.",
      },
      {
        title: "Common Endorsements",
        description: "Closing the gaps in standard policies.",
        items: [
          "Equipment breakdown (boiler & machinery)",
          "Earthquake & flood (separate forms)",
          "Ordinance or law (code upgrades)",
          "Spoilage of perishables",
          "Glass coverage",
          "Business income & extra expense",
        ],
      },
    ]}
    importantNote={{
      title: "What Many Businesses Underestimate",
      content: "Most policies enforce a coinsurance clause — typically 80%. If you insure your building for less than 80% of replacement cost, every claim is penalized proportionally. Earthquake, flood, and most cyber events are excluded by default and require separate coverage.",
    }}
    approach={{
      intro: "We analyze your property as a strategic asset, identify specific risks, and design complete coverage.",
      items: ["Analyze as a strategic asset", "Identify specific risks", "Design complete coverage"],
    }}
  />
);

export default CommercialProperty;
