import ServicePageLayout from "@/components/ServicePageLayout";

const BOPInsurance = () => (
  <ServicePageLayout
    title="Business Owners Policy (BOP)"
    subtitle="Your entire business in one well-structured policy"
    heroDescription="When you have a business, you need multiple protections: property, liability, income, and operations. Managing separate policies can be complex, costly, and leave coverage gaps. A BOP combines essential coverages in a single package."
    coverages={[
      { title: "Property Protection", description: "Covers your space, equipment, inventory, and furniture.", items: ["Your location or building", "Equipment", "Inventory", "Furniture"] },
      { title: "Liability Coverage", description: "Protects if a client is injured, you cause third-party damage, or face a lawsuit. Includes legal defense." },
      { title: "Business Interruption", description: "If a covered event stops your operations, compensates for lost income and helps cover expenses during recovery." },
      { title: "Additional Coverages", description: "A BOP isn't rigid — it adapts to your industry.", items: ["Equipment breakdown", "Internal theft or fraud", "Signage", "Industry-specific coverages"] },
    ]}
    importantNote={{
      title: "Important to Know",
      content: "A BOP doesn't replace everything. Coverages like commercial auto, workers' compensation, and employee benefits are typically handled separately. That's why it's important to properly structure your total protection.",
    }}
    approach={{
      intro: "We don't just assemble packages. We analyze your business, identify real risks, and adjust each coverage within the BOP.",
      items: ["Analyze your business", "Identify real risks", "Compare different carriers"],
    }}
  />
);

export default BOPInsurance;
