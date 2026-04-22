import ServicePageLayout from "@/components/ServicePageLayout";

const BondsSurety = () => (
  <ServicePageLayout
    title="Bonds (Surety Bonds)"
    subtitle="It's not insurance — it's a guarantee that you deliver"
    heroDescription="Bonds work differently than traditional insurance. A surety bond is a three-party agreement: the principal (you), the obligee (the party requiring the bond), and the surety (the company guaranteeing performance). Insurance protects you — a bond protects the third party against your failure to fulfill an obligation."
    coverages={[
      {
        title: "Contract Bonds",
        description: "Used in construction projects to guarantee a contractor will bid honestly, complete the work, and pay subcontractors and suppliers.",
        items: ["Bid Bonds (proposal guarantee)", "Performance Bonds (project completion)", "Payment Bonds (sub & supplier payments)", "Maintenance Bonds (warranty period)"],
      },
      {
        title: "License & Permit Bonds",
        description: "Required by federal, state, or local agencies for businesses to operate legally. Common for contractors, auto dealers, mortgage brokers, and many trades.",
        items: ["WA Contractor Bond ($12K-$30K)", "Auto Dealer Bond", "Notary Bond", "Mortgage Broker Bond"],
      },
      {
        title: "Commercial Surety",
        description: "Covers a wide range of business and financial obligations required by contracts, statutes, or regulators.",
      },
      {
        title: "Court Bonds",
        description: "Required by courts in legal proceedings — including judicial bonds (appeals, attachments) and fiduciary bonds (executors, guardians, administrators).",
      },
      {
        title: "Subdivision (Site Improvement) Bonds",
        description: "Required by municipalities to guarantee that developers complete public improvements — streets, sidewalks, sewers, lighting — as part of a new development.",
      },
    ]}
    importantNote={{
      title: "What Many Don't Understand",
      content: "If a claim is paid, the surety covers the obligee — but you (the principal) must reimburse the surety in full. Underwriting is based on personal credit, business financials, experience, and the size of the project. Better credit and stronger financials directly translate into lower bond rates.",
      items: [
        "Personal credit history is reviewed",
        "Business financials are evaluated",
        "Project type & risk affect the rate",
        "Indemnity agreement is required",
      ],
    }}
    approach={{
      intro: "We know bonds can be complicated. We explain clearly what you need, help you meet requirements, and work with reliable companies.",
      items: ["Clear explanations", "Help meeting requirements", "Reliable company partners"],
    }}
  />
);

export default BondsSurety;
