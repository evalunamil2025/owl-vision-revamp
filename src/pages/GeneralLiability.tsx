import ServicePageLayout from "@/components/ServicePageLayout";

const GeneralLiability = () => (
  <ServicePageLayout
    title="General Liability Insurance"
    subtitle="An accident can happen in seconds — its consequences can last years"
    heroDescription="No matter what type of business you have, there's always a risk that someone gets injured or something goes wrong. A customer falls in your space, a service causes damage, or a product generates a problem. General liability is the foundation of protection for any business."
    coverages={[
      { title: "Third-Party Injuries", description: "If someone gets hurt at your business or through your operations.", items: ["Medical expenses", "Compensations"] },
      { title: "Third-Party Property Damage", description: "Covers damage your business causes to other people's property." },
      { title: "Legal Defense", description: "Includes attorney fees, court costs, and settlements. Key because legal costs can be high even if you're not at fault.", items: ["Attorney fees", "Court costs", "Settlements or indemnifications"] },
    ]}
    importantNote={{
      title: "Who Needs This Coverage?",
      content: "Practically any business: stores, restaurants, contractors, offices, service companies. If you interact with clients, vendors, or the public, you need this protection. It's not just about 'having insurance' — it's about having the right limits and understanding what it covers.",
    }}
    approach={{
      intro: "We analyze your real operation, identify specific risks, and design adequate coverage.",
      items: ["Analyze your real operation", "Identify specific risks", "Design adequate coverage"],
      closing: "As an independent agency, we compare multiple options to find the best solution — not a standard one.",
    }}
  />
);

export default GeneralLiability;
