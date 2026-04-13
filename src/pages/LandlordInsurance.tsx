import ServicePageLayout from "@/components/ServicePageLayout";

const LandlordInsurance = () => (
  <ServicePageLayout
    title="Landlord Insurance"
    subtitle="A rental property is a business — protect it like one"
    heroDescription="Being a rental property owner isn't just about collecting monthly payments. It's an investment that involves constant risks: property damage, tenant issues, income loss, and legal liability. A single event can seriously affect your cash flow and assets."
    coverages={[
      { title: "Property Protection", description: "Covers damage from fire, vandalism, weather events, and accidents. Applies to houses, apartments, or condos for rent." },
      { title: "Loss of Income", description: "If your property can't be rented due to a covered event, you can recover part of the lost income and maintain stability during repairs." },
      { title: "Liability Coverage", description: "Protects you if a tenant or visitor is injured or there's a property-related lawsuit.", items: ["Medical expenses", "Legal fees", "Defense costs"] },
      { title: "Additional Coverages", description: "Strengthen your protection based on your situation.", items: ["Rent guarantee", "Specific disaster coverage", "Contents protection (furnished rentals)", "Additional liability"] },
    ]}
    importantNote={{
      title: "What Many Landlords Don't Consider",
      content: "A traditional homeowner's insurance is NOT designed for rental properties. Using the wrong policy can leave coverage gaps and your claim may not be valid. That's why you need a specific landlord policy.",
    }}
    approach={{
      intro: "We understand this is an investment. We help you protect your property, secure your income, and reduce legal risks.",
      items: ["Protect your property", "Secure your income stream", "Reduce legal risks"],
    }}
  />
);

export default LandlordInsurance;
