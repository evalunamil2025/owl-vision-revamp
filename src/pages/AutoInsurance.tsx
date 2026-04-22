import ServicePageLayout from "@/components/ServicePageLayout";

const AutoInsurance = () => (
  <ServicePageLayout
    title="Auto Insurance"
    subtitle="Drive with confidence — we've got you covered"
    heroDescription="Your car isn't just transportation. It takes you to work, to see family, on vacations — to all the moments that make up your life. An accident, theft, or even a storm can become a serious financial problem without proper protection."
    coverages={[
      {
        title: "Liability Coverage",
        description: "Required by Washington State law. Pays for bodily injury and property damage you cause to others in an at-fault accident, plus your legal defense.",
        items: ["Bodily Injury Liability", "Property Damage Liability", "Legal defense costs", "WA minimum: 25/50/10"],
      },
      {
        title: "Collision Coverage",
        description: "Pays to repair or replace your vehicle after a collision with another vehicle or object — regardless of fault. Subject to your deductible.",
        items: ["Single-car accidents", "Hitting another vehicle", "Hitting an object (pole, fence)", "Rollovers"],
      },
      {
        title: "Comprehensive Coverage",
        description: "Covers damage to your vehicle from non-collision events. Often required by lenders if you're financing or leasing.",
        items: ["Theft & vandalism", "Fire & explosions", "Hail, windstorm, flood", "Falling objects & animals", "Glass breakage"],
      },
      {
        title: "Uninsured/Underinsured Motorist",
        description: "Roughly 1 in 8 U.S. drivers is uninsured (III). UM/UIM pays for your injuries and damage when the at-fault driver has no insurance — or not enough.",
        items: ["Hit-and-run accidents", "Uninsured at-fault drivers", "Underinsured drivers", "Bodily injury & property damage"],
      },
      {
        title: "Medical Payments (MedPay)",
        description: "No-fault coverage that pays medical bills for you and your passengers after an accident, regardless of who caused it.",
        items: ["Hospital & doctor visits", "Surgery & X-rays", "Dental treatment", "Funeral expenses"],
      },
      {
        title: "Personal Injury Protection (PIP)",
        description: "Optional in Washington but highly recommended. Broader than MedPay — also covers lost wages and essential services.",
        items: ["Medical expenses", "Lost wages", "Essential services (childcare, housekeeping)", "Funeral expenses"],
      },
      {
        title: "Additional Coverages",
        description: "Optional add-ons that close common gaps and avoid out-of-pocket surprises.",
        items: ["Roadside assistance", "Rental car reimbursement", "Towing & labor", "Gap insurance (loan/lease)", "New car replacement"],
      },
    ]}
    importantNote={{
      title: "How Much Coverage Do You Need?",
      content: "Washington's state minimums (25/50/10) are rarely enough — a single ER visit can exceed $25,000. Your real number depends on your assets, vehicle value, ability to handle a deductible, and personal risk tolerance.",
      items: [
        "Working with an independent agency makes the difference",
        "We compare multiple carriers for the best price-protection combination",
        "We're not limited to a single option",
      ],
    }}
    approach={{
      intro: "It's not just about giving you a price. It's about making sure you understand what your policy covers, what it doesn't, and what you truly need.",
      items: ["Compare multiple carriers", "Evaluate your real profile", "Adjust coverage and cost to your situation"],
      closing: "A cheap policy that doesn't protect well can end up costing much more later.",
    }}
  />
);

export default AutoInsurance;
