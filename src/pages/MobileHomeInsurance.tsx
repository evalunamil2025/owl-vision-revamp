import ServicePageLayout from "@/components/ServicePageLayout";

const MobileHomeInsurance = () => (
  <ServicePageLayout
    title="Mobile Home Insurance"
    subtitle="Your home, regardless of how it's built, deserves protection"
    heroDescription="For many families, a mobile home represents an accessible and smart way to own a home. But it has unique characteristics that require a different type of insurance. Assuming both are covered the same way can leave you exposed."
    coverages={[
      { title: "Structure Protection", description: "Covers damage to your home from fire, weather events, and accidents." },
      { title: "Natural Hazard Protection", description: "Depending on your location, you can include coverage for storms, wind, and floods (with additional policy)." },
      { title: "Accidental Damage", description: "Protects your property from unexpected situations that may affect its integrity." },
      { title: "Loss of Use", description: "If your home becomes uninhabitable, this coverage can help with temporary expenses during repairs." },
      { title: "Liability Coverage", description: "Protects you if someone is injured on your property or if you cause damage to third parties." },
    ]}
    importantNote={{
      title: "What Many Mobile Home Owners Don't Know",
      content: "Not all insurance companies handle this type of housing correctly. Working with an independent agency is key — it allows you to compare real options and find companies that truly understand this property type.",
    }}
    approach={{
      intro: "It's not just about insuring you. It's about insuring you well.",
      items: ["Identify real risks", "Understand your policy coverage", "Design protection for your home type"],
    }}
  />
);

export default MobileHomeInsurance;
