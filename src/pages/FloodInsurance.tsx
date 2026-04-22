import ServicePageLayout from "@/components/ServicePageLayout";

const FloodInsurance = () => (
  <ServicePageLayout
    title="Flood Insurance"
    subtitle="When water gets in — the problem is just beginning"
    heroDescription="Floods don't warn you. When they happen, they don't just affect your home — they affect everything inside: furniture, memories, appliances, and often your financial stability. According to FEMA, just one inch of water can cause more than $25,000 in damage — and standard homeowner policies do NOT cover flood damage."
    coverages={[
      {
        title: "Building Property Coverage",
        description: "Through the National Flood Insurance Program (NFIP), covers up to $250,000 for the structure of a residential building. Private flood policies can offer higher limits.",
        items: [
          "Foundation & structural elements",
          "Electrical & plumbing systems",
          "HVAC equipment",
          "Built-in appliances & cabinets",
          "Permanently installed flooring",
        ],
      },
      {
        title: "Contents Coverage",
        description: "Covers up to $100,000 for personal belongings under NFIP. Sold separately from building coverage — most renters need only contents.",
        items: ["Furniture & electronics", "Clothing", "Portable appliances", "Window AC units", "Valuables (sub-limits apply)"],
      },
    ]}
    importantNote={{
      title: "Who Needs Flood Insurance?",
      content: "FEMA reports that more than 25% of flood claims come from properties OUTSIDE high-risk zones. Most policies have a 30-day waiting period before they take effect — you can't buy it when a storm is forecast. Federal disaster aid is typically a loan that must be repaid.",
      items: [
        "Floods can happen outside designated zones",
        "Heavy rain, snowmelt, and drainage failures cause damage",
        "30-day waiting period applies",
        "Federal assistance often comes as a loan, not a grant",
      ],
    }}
    approach={{
      intro: "It's not about selling you insurance 'just in case.' It's about helping you understand if you really need it and what type of coverage is adequate.",
      items: ["Evaluate if you truly need it", "Find the right coverage type", "Protect you without overpaying"],
    }}
  />
);

export default FloodInsurance;
