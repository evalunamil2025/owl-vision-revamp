import ServicePageLayout from "@/components/ServicePageLayout";

const BOPInsurance = () => (
  <ServicePageLayout
    title="Business Owners Policy (BOP)"
    subtitle="Your entire business in one well-structured policy"
    heroDescription="When you have a business, you need multiple protections: property, liability, income, and operations. Managing separate policies can be complex, costly, and leave coverage gaps. A BOP bundles General Liability, Commercial Property, and Business Interruption at a discounted rate — designed for small to mid-sized businesses."
    coverages={[
      {
        title: "Commercial Property",
        description: "Covers your physical business assets on a Special Form basis (open peril) — whether you own or lease the space.",
        items: ["Building (if owned)", "Tenant improvements", "Furniture, fixtures & equipment", "Inventory & supplies", "Outdoor signs"],
      },
      {
        title: "General Liability",
        description: "Same protection as a standalone CGL — bodily injury, property damage, products/operations, and personal & advertising injury claims by third parties.",
      },
      {
        title: "Business Interruption (Income)",
        description: "If a covered loss forces you to suspend operations, replaces lost net income and pays continuing operating expenses (rent, payroll, loan payments) until you're back up.",
      },
      {
        title: "Common Endorsements",
        description: "A BOP isn't rigid — it adapts to your industry with optional add-ons.",
        items: [
          "Equipment breakdown",
          "Cyber liability",
          "Employee dishonesty",
          "Spoilage (refrigerated goods)",
          "Hired & non-owned auto",
          "Professional liability",
        ],
      },
    ]}
    importantNote={{
      title: "Important to Know",
      content: "A BOP doesn't replace everything. Workers' compensation, commercial auto (owned vehicles), professional liability (E&O), and employee benefits are sold separately. BOPs are also designed for businesses under specific size thresholds — larger operations need a Commercial Package Policy (CPP).",
    }}
    approach={{
      intro: "We don't just assemble packages. We analyze your business, identify real risks, and adjust each coverage within the BOP.",
      items: ["Analyze your business", "Identify real risks", "Compare different carriers"],
    }}
  />
);

export default BOPInsurance;
