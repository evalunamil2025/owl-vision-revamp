import ServicePageLayout from "@/components/ServicePageLayout";

const RestaurantInsurance = () => (
  <ServicePageLayout
    title="Restaurant Insurance"
    subtitle="Your restaurant doesn't just serve food — it manages risks every day"
    heroDescription="A restaurant is one of the most dynamic businesses around. Everything happens at once: customers coming and going, kitchen in constant operation, staff under pressure, equipment running all day. The NRA reports that fire is the leading cause of restaurant losses — and a single foodborne illness lawsuit can exceed $100,000."
    coverages={[
      {
        title: "Property Protection",
        description: "Covers the building (if owned), tenant improvements, kitchen equipment, dining furniture, and inventory from fire, water damage, theft, and vandalism.",
      },
      {
        title: "General Liability",
        description: "Covers slip-and-falls, foodborne illness claims, and other third-party injuries. Required in nearly every commercial lease and by most landlords.",
      },
      {
        title: "Business Interruption",
        description: "If a covered event closes your restaurant, replaces lost income and pays ongoing expenses (rent, payroll, loan payments) until you reopen — typically up to 12 months.",
      },
      {
        title: "Liquor Liability",
        description: "Required by Washington's WSLCB and most landlords if you serve alcohol. Protects you when an intoxicated patron causes injury or damage after being over-served.",
        items: ["Required if you serve alcohol", "Mandatory in many leases", "Dram shop law protection", "Often excluded from standard CGL"],
      },
      {
        title: "Workers' Compensation",
        description: "Mandatory in Washington for any business with employees. Covers cuts, burns, slips, and back injuries — common in fast-paced kitchens.",
      },
      {
        title: "Common Endorsements",
        description: "Coverages designed for the realities of food service.",
        items: [
          "Food spoilage (power outage)",
          "Equipment breakdown",
          "Employee dishonesty",
          "Sewer & drain backup",
          "Outdoor seating & signage",
        ],
      },
    ]}
    importantNote={{
      title: "More Risk Points Than Most Businesses",
      content: "Restaurants have unique exposures: open flames, hot oil, fryers, walk-in coolers, gas lines, alcohol service, and high employee turnover. The NFPA estimates U.S. fire departments respond to 8,000+ restaurant fires per year — most caused by cooking equipment. A generic policy doesn't address these properly.",
    }}
    approach={{
      intro: "We don't treat your business as just another one. We understand the restaurant industry.",
      items: ["Understand your industry", "Evaluate real risks", "Design specific coverage"],
    }}
  />
);

export default RestaurantInsurance;
