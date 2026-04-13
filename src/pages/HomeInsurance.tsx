import ServicePageLayout from "@/components/ServicePageLayout";

const HomeInsurance = () => (
  <ServicePageLayout
    title="Home Insurance"
    subtitle="Your home isn't just a property — it's your foundation"
    heroDescription="Your home is probably the biggest investment you've ever made. But beyond the money, it's where your memories, your family, and everything you've built with effort reside. A fire, theft, water leak, or even an accident on your property can become a serious financial problem without proper protection."
    coverages={[
      { title: "Property Protection", description: "Covers damage to your home, garage, and other structures.", items: ["Your home", "Garage and other structures", "Fixed installations"] },
      { title: "Personal Belongings", description: "Covers items inside your home.", items: ["Electronics", "Furniture", "Jewelry", "Personal objects"] },
      { title: "Liability Coverage", description: "If someone is injured on your property or you cause damage to third parties.", items: ["Medical expenses", "Legal claims", "Defense costs"] },
      { title: "Medical Payments to Others", description: "Applies when a non-resident suffers an accident on your property." },
      { title: "Temporary Living Expenses", description: "If your home becomes uninhabitable due to a covered event.", items: ["Lodging", "Food", "Additional expenses while repairs are made"] },
    ]}
    importantNote={{
      title: "What Many Homeowners Don't Know",
      content: "Not all policies cover all risks. For example, floods typically require an additional policy. Earthquakes or specific damages may need extra coverage. That's why having 'insurance' doesn't always mean being well protected.",
      items: ["Location of your home", "Property and contents value", "Zone-specific risks", "Your lifestyle"],
    }}
    approach={{
      intro: "We don't work with just one company. As an independent agency, we find what's right for you.",
      items: ["Compare multiple carriers", "Identify gaps in your coverage", "Adjust your policy to your reality"],
      closing: "The goal isn't to sell you more — it's to make sure you have the right coverage.",
    }}
  />
);

export default HomeInsurance;
