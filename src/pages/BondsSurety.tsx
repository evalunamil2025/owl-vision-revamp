import ServicePageLayout from "@/components/ServicePageLayout";

const BondsSurety = () => (
  <ServicePageLayout
    title="Bonds (Surety Bonds)"
    subtitle="It's not insurance — it's a guarantee that you deliver"
    heroDescription="Bonds don't work like traditional insurance. While insurance protects your business, a bond protects third parties against your failure to fulfill obligations. It's a guarantee that you'll do the job as promised."
    coverages={[
      { title: "Contract Bonds", description: "Guarantee that you'll fulfill what was agreed in a project.", items: ["Bid Bonds (proposals)", "Performance Bonds (fulfillment)", "Payment Bonds (vendor payments)"] },
      { title: "License & Permit Bonds", description: "Required by authorities to operate legally. Ensure compliance with state or municipal regulations." },
      { title: "Commercial Surety Bonds", description: "Cover general commercial obligations that require a guarantee." },
      { title: "Court Bonds", description: "Related to legal processes, such as judicial bonds and specific legal proceedings." },
      { title: "Subdivision Bonds", description: "Guarantee that improvements will be made to land as required by authorities." },
    ]}
    importantNote={{
      title: "What Many Don't Understand",
      content: "If a claim occurs, the insurer pays the third party — but you are responsible for reimbursing that money. That's why it's key to understand that a bond is not direct protection — it's a guarantee of fulfillment.",
      items: ["Financial history matters", "Experience is evaluated", "Project type and risk affect cost", "Not everyone qualifies the same"],
    }}
    approach={{
      intro: "We know bonds can be complicated. We explain clearly what you need, help you meet requirements, and work with reliable companies.",
      items: ["Clear explanations", "Help meeting requirements", "Reliable company partners"],
    }}
  />
);

export default BondsSurety;
