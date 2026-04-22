import ServicePageLayout from "@/components/ServicePageLayout";

const ContractorsInsurance = () => (
  <ServicePageLayout
    title="Contractors Insurance"
    subtitle="In construction, risk is part of the job — protection should be part of the plan"
    heroDescription="If you work in construction, you know every project has variables you can't control: on-site accidents, third-party damage, expensive equipment in constant use, and human error. In Washington, contractors must register with L&I and most clients require proof of $1M+ in General Liability before signing a contract."
    coverages={[
      {
        title: "General Liability",
        description: "Foundation coverage required by most general contractors and project owners. Pays for third-party bodily injury, property damage, and completed-operations claims.",
        items: ["Third-party injuries", "Damage to client property", "Completed operations (post-job)", "Subcontractor liability (varies)"],
      },
      {
        title: "Tools & Equipment (Inland Marine)",
        description: "Covers tools and portable equipment wherever they go — at the shop, in transit, on the job site, or in your truck overnight. Standard property policies often exclude this.",
        items: ["Hand & power tools", "Portable equipment under $10K", "Scheduled large equipment", "Borrowed/leased equipment"],
      },
      {
        title: "Builders Risk (Course of Construction)",
        description: "A specialized policy that covers a project under construction — including materials on-site, in transit, or in temporary storage.",
        items: ["New construction", "Renovations & remodels", "Materials & supplies", "Temporary structures"],
      },
      {
        title: "Commercial Auto",
        description: "Required if you use vehicles for business — transporting tools, hauling materials, or moving crews. Personal policies exclude commercial use.",
      },
      {
        title: "Workers' Compensation",
        description: "Mandatory in Washington for contractors with employees. Pays medical bills and lost wages for on-the-job injuries — and shields you from employee lawsuits.",
      },
    ]}
    importantNote={{
      title: "What Many Contractors Underestimate",
      content: "A Certificate of Insurance (COI) isn't just paperwork — it's often a contract requirement before you can step on site. Most clients require Additional Insured status and Waiver of Subrogation endorsements. Missing these can delay payment or terminate a contract entirely.",
      items: [
        "Type of work (residential, commercial, industrial)",
        "Project size & dollar value",
        "Number of employees & subcontractors",
        "Tool & equipment values",
        "Additional Insured & Waiver requirements",
      ],
    }}
    approach={{
      intro: "We understand the construction industry. We evaluate your real risks, analyze your operation type, and design complete coverage.",
      items: ["Evaluate real risks", "Analyze your operation", "Design complete coverage"],
    }}
  />
);

export default ContractorsInsurance;
