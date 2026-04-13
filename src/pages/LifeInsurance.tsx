import ServicePageLayout from "@/components/ServicePageLayout";

const LifeInsurance = () => (
  <ServicePageLayout
    title="Life Insurance"
    subtitle="Protect your loved ones — even when you're not there"
    heroDescription="Talking about life insurance isn't easy, but it is necessary. If someone depends on you financially — your family, partner, or children — you need a plan that supports them in case something unexpected happens. Life insurance isn't for you. It's for the people you love."
    coverages={[
      { title: "Family Protection", description: "Ensures your dependents maintain their quality of life if you're no longer here." },
      { title: "Final Expenses", description: "Prevents your family from having to cover immediate costs like funeral services." },
      { title: "Income Replacement", description: "Can replace the income you generated, helping cover daily expenses." },
      { title: "Legacy Planning", description: "Allows you to leave financial support even if you don't have significant assets." },
      { title: "Term Life Insurance", description: "Coverage for a defined period (10, 20, or 30 years). More affordable and ideal for key stages.", items: ["More accessible cost", "Ideal during mortgage or young children stages", "Coverage for a defined period"] },
      { title: "Permanent Life Insurance", description: "Lifetime coverage with stable premiums and potential cash value growth.", items: ["Lifetime coverage", "More stable premiums and benefits", "Can generate cash value over time"] },
    ]}
    importantNote={{
      title: "Something Important to Consider",
      content: "The younger and healthier you are, the more affordable your insurance will be. Waiting can mean higher premiums, fewer options, or even not qualifying at all.",
    }}
    approach={{
      intro: "We help you understand what type of insurance you need, how much you really need, and what option best fits your budget.",
      items: ["Understand your needs", "Compare different companies", "Design a solution based on your reality"],
    }}
  />
);

export default LifeInsurance;
