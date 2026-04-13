import ServicePageLayout from "@/components/ServicePageLayout";

const RestaurantInsurance = () => (
  <ServicePageLayout
    title="Restaurant Insurance"
    subtitle="Your restaurant doesn't just serve food — it manages risks every day"
    heroDescription="A restaurant is one of the most dynamic businesses around. Everything happens at once: customers coming and going, kitchen in constant operation, staff under pressure, equipment running all day. And with that come real risks: accidents, fires, foodborne illness, lawsuits, or business interruptions."
    coverages={[
      { title: "Property Protection", description: "Covers damage to your space, kitchen, equipment, and inventory from fire, electrical damage, or vandalism." },
      { title: "Business Interruption", description: "If you can't operate due to a covered event, compensates for lost income and helps maintain operating expenses." },
      { title: "Liability Coverage", description: "Protects if a customer is injured, there's a food problem, or a lawsuit. Includes legal fees and potential indemnifications." },
      { title: "Liquor Liability", description: "If you sell alcohol, this coverage is key. Protects you in situations where a customer causes damage after consuming at your establishment." },
      { title: "Additional Coverages", description: "Depending on your restaurant type.", items: ["Food contamination or spoilage", "Equipment breakdown", "Employee dishonesty", "Drainage or water backup damage"] },
    ]}
    importantNote={{
      title: "More Risk Points Than Most Businesses",
      content: "A restaurant has unique exposures: kitchen (fire, gas, heat), on-site customers, food handling, and high staff turnover. A generic policy doesn't correctly cover these exposures.",
    }}
    approach={{
      intro: "We don't treat your business as just another one. We understand the restaurant industry.",
      items: ["Understand your industry", "Evaluate real risks", "Design specific coverage"],
    }}
  />
);

export default RestaurantInsurance;
