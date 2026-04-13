import ServicePageLayout from "@/components/ServicePageLayout";

const CommercialAuto = () => (
  <ServicePageLayout
    title="Commercial Auto Insurance"
    subtitle="If your vehicle works for your business — you need more than personal insurance"
    heroDescription="Many businesses use vehicles daily to transport tools, deliver products, visit clients, or operate services. But here's a common mistake: a personal auto policy does NOT cover commercial use. If an accident happens while using your vehicle for work, you could be left without coverage."
    coverages={[
      { title: "Liability Coverage", description: "Covers damage to other people, vehicles, and third-party property. Includes legal defense in case of lawsuits." },
      { title: "Collision Coverage", description: "Covers damage to your vehicles from accidents." },
      { title: "Comprehensive Coverage", description: "Protects against non-collision incidents.", items: ["Theft", "Vandalism", "Fire", "Natural events"] },
      { title: "Medical/Personal Protection", description: "Covers medical expenses for drivers and passengers, depending on coverage selected." },
      { title: "Uninsured Motorist", description: "Protects you if an uninsured driver causes an accident." },
    ]}
    importantNote={{
      title: "When Do You Need Commercial Insurance?",
      content: "If you use your vehicle for business activities, transport tools or equipment, carry products or merchandise, have employees who drive the vehicle, or the vehicle is registered to a company.",
      items: ["Vehicle used for business activities", "Transport of tools or equipment", "Employees driving the vehicle", "Vehicle registered to a company"],
    }}
    approach={{
      intro: "We understand how businesses operate. We evaluate how you use your vehicles, identify real risks, and compare carriers.",
      items: ["Evaluate your vehicle usage", "Identify real risks", "Find the right coverage"],
    }}
  />
);

export default CommercialAuto;
