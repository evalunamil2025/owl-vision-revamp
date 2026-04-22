import ServicePageLayout from "@/components/ServicePageLayout";

const RentersInsurance = () => (
  <ServicePageLayout
    title="Renters Insurance"
    subtitle="You don't own the property — but you own everything inside it"
    heroDescription="Many renters think their landlord's insurance covers them. But the owner's policy only covers the building — NOT your belongings. If a fire, theft, or burst pipe occurs, your furniture, clothing, and electronics are entirely your responsibility. The average renters policy costs only $15–$20 per month."
    coverages={[
      {
        title: "Personal Property Coverage",
        description: "Pays to repair or replace your belongings after a covered loss — both inside your unit and often when you're traveling.",
        items: ["Electronics & appliances", "Furniture & clothing", "Items stolen from your car", "Bicycles & sports gear"],
      },
      {
        title: "Personal Liability",
        description: "Protects you if you accidentally injure someone or damage their property — including damage you cause to your rental unit (e.g., kitchen fire, overflowing tub).",
        items: ["Bodily injury to guests", "Damage to others' property", "Legal defense costs", "Dog bites (varies by carrier)"],
      },
      {
        title: "Loss of Use (Additional Living Expenses)",
        description: "If a covered loss makes your unit uninhabitable, pays for hotel stays, restaurant meals, and additional costs above your normal living expenses.",
      },
      {
        title: "Medical Payments to Others",
        description: "No-fault coverage (typically $1,000–$5,000) for minor guest injuries — helps avoid small incidents turning into liability claims.",
      },
    ]}
    importantNote={{
      title: "Something Most People Underestimate",
      content: "Most renters dramatically underestimate the value of their belongings. A quick room-by-room inventory typically reveals $20,000–$40,000 in property. High-value items like jewelry, firearms, and electronics often have sub-limits and may need scheduled coverage.",
      items: [
        "Document with photos & video",
        "Keep receipts for major items",
        "Consider Replacement Cost vs. Actual Cash Value",
        "Schedule jewelry, firearms, & collectibles separately",
      ],
    }}
    approach={{
      intro: "It's not just about giving you a basic policy. We help you calculate what you really need.",
      items: ["Calculate real coverage needs", "Avoid being underinsured", "Adjust insurance to your lifestyle"],
      closing: "In most cases, renters insurance is one of the most affordable types — the cost is low compared to the value it protects.",
    }}
  />
);

export default RentersInsurance;
