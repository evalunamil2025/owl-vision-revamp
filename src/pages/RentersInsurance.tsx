import ServicePageLayout from "@/components/ServicePageLayout";

const RentersInsurance = () => (
  <ServicePageLayout
    title="Renters Insurance"
    subtitle="You don't own the property — but you own everything inside it"
    heroDescription="Many renters think their landlord's insurance covers them. But the owner's policy does NOT cover your belongings. If a fire, theft, or water damage occurs, everything that's yours — furniture, clothing, electronics — is exposed."
    coverages={[
      { title: "Personal Belongings", description: "Covers your personal items in case of damage or loss.", items: ["Electronics", "Clothing", "Furniture", "Personal articles"] },
      { title: "Liability Coverage", description: "Protects you if you cause damage to the property or other people. Includes legal expenses and third-party claims." },
      { title: "Accident Coverage", description: "If someone is injured in your rental space, this coverage can help with medical expenses." },
    ]}
    importantNote={{
      title: "Something Most People Underestimate",
      content: "Most people don't know how much their belongings are really worth until they lose them. That's why it's recommended to make a list of your items, keep receipts when possible, and document with photos or video.",
    }}
    approach={{
      intro: "It's not just about giving you a basic policy. We help you calculate what you really need.",
      items: ["Calculate real coverage needs", "Avoid being underinsured", "Adjust insurance to your lifestyle"],
      closing: "In most cases, renters insurance is one of the most affordable types — the cost is low compared to the value it protects.",
    }}
  />
);

export default RentersInsurance;
