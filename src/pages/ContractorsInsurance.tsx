import ServicePageLayout from "@/components/ServicePageLayout";

const ContractorsInsurance = () => (
  <ServicePageLayout
    title="Contractors Insurance"
    subtitle="In construction, risk is part of the job — protection should be part of the plan"
    heroDescription="If you work in construction, you know every project has variables you can't control: on-site accidents, third-party damage, expensive equipment in constant use, and human error. A single incident can halt a project, generate lawsuits, or seriously affect your finances."
    coverages={[
      { title: "General Liability", description: "Covers third-party injuries, property damage, and workplace accidents. Includes legal expenses and defense.", items: ["Third-party injuries", "Property damage", "Worksite accidents"] },
      { title: "Tools & Equipment", description: "Protects your manual tools, portable equipment, and specialized machinery — especially important as these assets are constantly moving." },
      { title: "Builders Risk", description: "Covers damage to projects in progress.", items: ["Construction works", "Remodeling", "On-site materials"] },
      { title: "Commercial Auto", description: "If you use vehicles for your business: transporting tools, moving personnel, or field operations." },
    ]}
    importantNote={{
      title: "What Many Contractors Underestimate",
      content: "The risk isn't just the work — it's the environment: other workers, clients, third-party properties, and regulations. An incorrect policy can leave you exposed at the most critical moment.",
      items: ["Type of work (residential, commercial, industrial)", "Project size", "Number of employees", "Type of tools and equipment", "On-site risk level"],
    }}
    approach={{
      intro: "We understand the construction industry. We evaluate your real risks, analyze your operation type, and design complete coverage.",
      items: ["Evaluate real risks", "Analyze your operation", "Design complete coverage"],
    }}
  />
);

export default ContractorsInsurance;
