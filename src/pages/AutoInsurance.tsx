import ServicePageLayout from "@/components/ServicePageLayout";

const AutoInsurance = () => (
  <ServicePageLayout
    title="Auto Insurance"
    subtitle="Drive with confidence — we've got you covered"
    heroDescription="Your car isn't just transportation. It takes you to work, to see family, on vacations — to all the moments that make up your life. An accident, theft, or even a storm can become a serious financial problem without proper protection."
    coverages={[
      { title: "Collision Coverage", description: "Covers damage to your vehicle in an accident, even if you're at fault." },
      { title: "Comprehensive Coverage", description: "Covers non-collision damage to your vehicle.", items: ["Theft", "Vandalism", "Fire", "Flooding"] },
      { title: "Liability Coverage", description: "Covers damage you cause to other people or their property. One of the most important coverages to protect your assets." },
      { title: "Medical Payments", description: "Covers medical expenses for you and your passengers, regardless of who was at fault." },
      { title: "Uninsured/Underinsured Motorist", description: "Protects you if someone without insurance (or insufficient coverage) causes an accident." },
      { title: "Personal Injury Protection (PIP)", description: "Can cover medical expenses, rehabilitation, and lost income.", items: ["Medical expenses", "Rehabilitation", "Lost income"] },
      { title: "Additional Coverages", description: "Not mandatory, but can be key when you need them most.", items: ["Roadside assistance", "Rental car reimbursement", "Towing", "Rental reimbursement"] },
    ]}
    importantNote={{
      title: "How Much Coverage Do You Need?",
      content: "It depends on your personal situation. There's no one-size-fits-all answer. Factors include the value of your vehicle, your ability to handle a deductible, your assets, and your risk tolerance.",
      items: ["Working with an independent agency makes the difference", "We compare multiple carriers for the best price-protection combination", "We're not limited to a single option"],
    }}
    approach={{
      intro: "It's not just about giving you a price. It's about making sure you understand what your policy covers, what it doesn't, and what you truly need.",
      items: ["Compare multiple carriers", "Evaluate your real profile", "Adjust coverage and cost to your situation"],
      closing: "A cheap policy that doesn't protect well can end up costing much more later.",
    }}
  />
);

export default AutoInsurance;
