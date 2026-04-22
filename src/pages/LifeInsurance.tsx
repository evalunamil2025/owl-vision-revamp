import ServicePageLayout from "@/components/ServicePageLayout";

const LifeInsurance = () => (
  <ServicePageLayout
    title="Life Insurance"
    subtitle="Protect your loved ones — even when you're not there"
    heroDescription="Talking about life insurance isn't easy, but it is necessary. If someone depends on you financially — your family, partner, or children — you need a plan that supports them in case something unexpected happens. Life insurance isn't for you. It's for the people you love."
    coverages={[
      {
        title: "Family Protection",
        description: "A tax-free death benefit paid to your beneficiaries that helps them maintain their standard of living, stay in the family home, and avoid financial disruption.",
      },
      {
        title: "Final Expenses",
        description: "The average U.S. funeral costs $7,000–$12,000 (NFDA). Life insurance prevents your family from absorbing these immediate, unexpected costs.",
        items: ["Funeral & burial services", "Outstanding medical bills", "Probate & legal fees"],
      },
      {
        title: "Income Replacement",
        description: "Industry rule of thumb: 10–12× your annual income. Replaces lost wages so your family can pay the mortgage, raise children, and save for the future.",
      },
      {
        title: "Debt & Mortgage Payoff",
        description: "Pays off the mortgage, car loans, student loans, and credit cards so your family doesn't inherit your debt.",
      },
      {
        title: "Term Life Insurance",
        description: "Affordable coverage for a set period (10, 20, or 30 years). Ideal for protecting income-earning years, mortgages, and dependent children.",
        items: ["Lowest cost per dollar of coverage", "Level premiums for the term", "Convertible to permanent (most policies)", "No cash value"],
      },
      {
        title: "Permanent Life Insurance",
        description: "Lifetime coverage that builds tax-deferred cash value you can borrow against. Includes Whole Life, Universal Life, and Indexed UL.",
        items: ["Coverage that never expires", "Builds cash value over time", "Tax-advantaged growth", "Living benefits available"],
      },
    ]}
    importantNote={{
      title: "Something Important to Consider",
      content: "Premiums are based on your age and health at the time of application. A healthy 30-year-old can lock in rates that may be 3–4× cheaper than waiting until 50. Waiting can mean higher premiums, fewer options, or even not qualifying at all.",
    }}
    approach={{
      intro: "We help you understand what type of insurance you need, how much you really need, and what option best fits your budget.",
      items: ["Understand your needs", "Compare different companies", "Design a solution based on your reality"],
    }}
  />
);

export default LifeInsurance;
