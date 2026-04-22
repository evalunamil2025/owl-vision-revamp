import ServicePageLayout from "@/components/ServicePageLayout";

const GeneralLiability = () => (
  <ServicePageLayout
    title="General Liability Insurance"
    subtitle="An accident can happen in seconds — its consequences can last years"
    heroDescription="No matter what type of business you have, there's always a risk that someone gets injured or something goes wrong. A customer slips in your space, a service causes damage, or a product generates a problem. According to The Hartford, slip-and-fall claims average $20,000 — and Commercial General Liability (CGL) is the foundation of business protection."
    coverages={[
      {
        title: "Bodily Injury (Third Parties)",
        description: "Pays for medical bills, lost wages, and pain & suffering when a non-employee is injured because of your business operations.",
        items: ["Medical expenses", "Lost wages", "Pain & suffering", "Funeral costs"],
      },
      {
        title: "Property Damage (Third Parties)",
        description: "Covers damage your business causes to property owned by others — at a job site, in a client's home, or anywhere your operations occur.",
      },
      {
        title: "Personal & Advertising Injury",
        description: "Protects against non-physical harm claims that don't fit bodily injury — a critical and often-overlooked coverage.",
        items: ["Libel & slander", "Copyright infringement (advertising)", "False arrest", "Wrongful eviction"],
      },
      {
        title: "Products-Completed Operations",
        description: "Covers injury or damage caused by your products after they've been sold — or by your work after a job is finished.",
      },
      {
        title: "Legal Defense Costs",
        description: "Pays attorney fees, court costs, and settlements — typically outside your policy limit. Defense alone can run $30,000+ even for groundless suits.",
        items: ["Attorney fees", "Court costs & filing fees", "Expert witnesses", "Settlements & judgments"],
      },
    ]}
    importantNote={{
      title: "Who Needs This Coverage?",
      content: "Practically any business with public exposure: retail stores, restaurants, contractors, salons, offices, and service providers. Many commercial leases, client contracts, and licensing requirements mandate a $1M/$2M CGL policy as a minimum — but standard limits are often well below today's claim costs.",
    }}
    approach={{
      intro: "We analyze your real operation, identify specific risks, and design adequate coverage.",
      items: ["Analyze your real operation", "Identify specific risks", "Design adequate coverage"],
      closing: "As an independent agency, we compare multiple options to find the best solution — not a standard one.",
    }}
  />
);

export default GeneralLiability;
