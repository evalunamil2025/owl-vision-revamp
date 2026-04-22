import ServicePageLayout from "@/components/ServicePageLayout";

const RVInsurance = () => (
  <ServicePageLayout
    title="Recreational Vehicle Insurance"
    subtitle="Enjoy your adventures — without carrying the risk"
    heroDescription="Recreational vehicles are made for enjoyment: trips, getaways, weekends away from routine. But they also involve different risks than a regular car — they're larger, more expensive, often serve as temporary homes, and carry valuable personal contents."
    coverages={[
      {
        title: "Vehicle Damage",
        description: "Covers the RV itself (motorhome, travel trailer, fifth wheel, or camper) from collision and non-collision losses.",
        items: ["Collision damage", "Theft & vandalism", "Fire & explosion", "Hail, wind, flood", "Animal collisions"],
      },
      {
        title: "Liability Coverage",
        description: "Required for motorhomes (Class A, B, C). Pays for injuries and damage you cause to others. Travel trailers are usually covered by your tow vehicle's liability — but only while attached.",
      },
      {
        title: "Personal Effects & Attached Accessories",
        description: "Covers belongings inside the RV and permanently attached equipment — both often excluded from standard auto policies.",
        items: ["Awnings & satellite dishes", "Generators & solar panels", "Clothing & electronics", "Outdoor gear"],
      },
      {
        title: "Full-Timer Coverage",
        description: "Essential if your RV is your primary residence. Adds homeowners-style protections like personal liability at your campsite and loss assessment.",
        items: ["Personal liability at campsite", "Medical payments to others", "Loss assessment", "Storage shed coverage"],
      },
      {
        title: "Vacation & Roadside Protection",
        description: "Add-ons designed for life on the road.",
        items: [
          "24/7 roadside assistance",
          "Towing for large vehicles",
          "Emergency expense coverage",
          "Total loss replacement",
        ],
      },
    ]}
    importantNote={{
      title: "What Many People Overlook",
      content: "An RV isn't used like a car. It may sit parked for months, function as temporary or full-time housing, or travel thousands of miles each season. Standard auto policies don't account for personal contents, attached accessories, or full-time living — gaps that surface only at claim time.",
    }}
    approach={{
      intro: "We don't give you a generic solution. We design coverage that truly fits your lifestyle.",
      items: ["Analyze how you use your vehicle", "Identify real risks", "Compare multiple carriers"],
    }}
  />
);

export default RVInsurance;
