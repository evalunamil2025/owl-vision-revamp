import ServicePageLayout from "@/components/ServicePageLayout";

const CommercialAuto = () => (
  <ServicePageLayout
    title="Commercial Auto Insurance"
    subtitle="If your vehicle works for your business — you need more than personal insurance"
    heroDescription="Many businesses use vehicles daily to transport tools, deliver products, visit clients, or operate services. Here's a critical mistake: a personal auto policy excludes business use. If an accident happens while using your vehicle for work, your claim can be denied — and you're personally exposed."
    coverages={[
      {
        title: "Liability Coverage",
        description: "Pays for bodily injury and property damage caused by your business vehicles. Many states and contracts require $1M Combined Single Limit minimum for commercial use.",
        items: ["Bodily injury liability", "Property damage liability", "Combined Single Limit (CSL)", "Legal defense"],
      },
      {
        title: "Physical Damage (Collision & Comprehensive)",
        description: "Repairs or replaces your vehicles after a covered loss — collision (impact) and comprehensive (theft, fire, weather, vandalism).",
      },
      {
        title: "Medical Payments / PIP",
        description: "Covers medical bills for the driver and passengers regardless of fault. Coverage type varies by state.",
      },
      {
        title: "Uninsured/Underinsured Motorist",
        description: "Protects your business when an uninsured or underinsured driver injures your driver or damages your vehicle.",
      },
      {
        title: "Hired & Non-Owned Auto",
        description: "Often-overlooked coverage. Protects your business when employees rent vehicles for work or use their personal car for business errands.",
        items: ["Rented vehicles for business", "Employee personal cars used for work", "Vehicles owned by partners or subsidiaries"],
      },
    ]}
    importantNote={{
      title: "When Do You Need Commercial Insurance?",
      content: "If you use your vehicle for business activities, transport tools or merchandise, have employees who drive, or the vehicle is titled to a company — you need commercial auto. Personal policies typically exclude business use entirely, even if you only use the vehicle occasionally for work.",
      items: [
        "Vehicle used for business activities",
        "Transport of tools, equipment, or inventory",
        "Employees driving the vehicle",
        "Vehicle titled to a company or LLC",
        "Delivery, ride-share, or livery services",
      ],
    }}
    approach={{
      intro: "We understand how businesses operate. We evaluate how you use your vehicles, identify real risks, and compare carriers.",
      items: ["Evaluate your vehicle usage", "Identify real risks", "Find the right coverage"],
    }}
  />
);

export default CommercialAuto;
