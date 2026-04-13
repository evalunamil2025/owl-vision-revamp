import ServicePageLayout from "@/components/ServicePageLayout";

const BuildingOwners = () => (
  <ServicePageLayout
    title="Building Owners Insurance"
    subtitle="Your building isn't just a property — it's a source of income"
    heroDescription="Owning a building — whether apartments, residential units, or rental properties — is a significant investment. But it also involves constant risks that can directly affect your income. A fire, structural damage, tenant issues, or even a lawsuit can halt your operation."
    coverages={[
      { title: "Building Protection", description: "Covers damage to the main building and related structures from fire, weather events, vandalism, and accidents." },
      { title: "Business Contents", description: "Protects equipment, common areas, and operational installations." },
      { title: "Liability Coverage", description: "If someone is injured on the property or an incident occurs.", items: ["Medical expenses", "Legal defense", "Possible indemnifications"] },
      { title: "Business Interruption", description: "If a covered event prevents renting or using the building, compensates for lost income and helps maintain financial stability." },
      { title: "Additional Coverages", description: "Depending on your property type.", items: ["Equipment and machinery", "Mechanical failure damage", "Umbrella-type coverage", "Employee dishonesty protection"] },
    ]}
    importantNote={{
      title: "Not All Buildings Have the Same Risk",
      content: "Factors like location, tenant type, property use, and building condition completely change the type of coverage you need. A generic policy can leave you exposed.",
    }}
    approach={{
      intro: "We understand this is a business. We analyze your property as an investment.",
      items: ["Analyze as an investment", "Evaluate real risks", "Compare multiple carriers"],
    }}
  />
);

export default BuildingOwners;
