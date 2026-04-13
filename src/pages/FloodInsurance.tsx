import ServicePageLayout from "@/components/ServicePageLayout";

const FloodInsurance = () => (
  <ServicePageLayout
    title="Flood Insurance"
    subtitle="When water gets in — the problem is just beginning"
    heroDescription="Floods don't warn you. When they happen, they don't just affect your home — they affect everything inside: furniture, memories, appliances, and often your financial stability. Most homeowner policies do NOT cover flood damage."
    coverages={[
      { title: "Building Coverage", description: "Protects your property structure.", items: ["Home or building", "Electrical and plumbing systems", "Air conditioning", "Built-in appliances", "Cabinets"] },
      { title: "Contents Coverage", description: "Protects what's inside your home.", items: ["Furniture", "Clothing", "Electronics", "Personal objects"] },
    ]}
    importantNote={{
      title: "Who Needs Flood Insurance?",
      content: "Many people think 'I don't live in a high-risk zone.' But floods can occur outside designated areas. Heavy rains, saturated drainage, or infrastructure failures can cause damage. Federal assistance doesn't always cover all losses.",
      items: ["Floods can happen outside designated zones", "Intense rainfall and saturated drains can cause damage", "Federal assistance may not cover everything"],
    }}
    approach={{
      intro: "It's not about selling you insurance 'just in case.' It's about helping you understand if you really need it and what type of coverage is adequate.",
      items: ["Evaluate if you truly need it", "Find the right coverage type", "Protect you without overpaying"],
    }}
  />
);

export default FloodInsurance;
