import ServicePageLayout from "@/components/ServicePageLayout";

const BoatInsurance = () => (
  <ServicePageLayout
    title="Boat & Watercraft Insurance"
    subtitle="Enjoy the water — without worrying about what could happen"
    heroDescription="Having a boat, jet ski, or any watercraft means freedom. But on the water, there are also risks: accidents, damage, theft, or liability toward others. Insurance isn't just a requirement at most marinas — it's a way to protect your investment."
    coverages={[
      {
        title: "Physical Damage (Hull)",
        description: "Covers your boat, motor, and permanently attached equipment whether on the water, on a trailer, or in storage. Choose Agreed Value or Actual Cash Value.",
        items: ["Collision & sinking", "Theft & vandalism", "Fire & explosion", "Storm & lightning damage"],
      },
      {
        title: "Liability Coverage",
        description: "Pays for bodily injury or property damage you cause to others — including damage to other boats, docks, or fuel spills (often regulated under federal law).",
      },
      {
        title: "Uninsured Watercraft",
        description: "Many states don't require boat insurance. Protects you and your passengers if an uninsured boater causes injuries or damage.",
      },
      {
        title: "Medical Payments",
        description: "No-fault coverage that pays medical bills for you, your family, and passengers injured in a boating accident — regardless of fault.",
      },
      {
        title: "Additional Coverages",
        description: "Add-ons designed for the realities of boating and trailering.",
        items: [
          "On-water towing & assistance",
          "Personal effects (gear, electronics)",
          "Fishing equipment",
          "Fuel spill liability",
          "Wreck removal",
        ],
      },
    ]}
    importantNote={{
      title: "What Many Owners Don't Know",
      content: "Homeowners policies often include very limited boat coverage — typically only for small, low-horsepower craft (under 25 mph), with liability caps that may be insufficient. Anything larger needs a dedicated marine policy.",
    }}
    approach={{
      intro: "It's not just about insuring you. It's about making sure you understand your real risks and what coverage you need.",
      items: ["Assess your real risks", "Find the right coverage", "Avoid paying for things you don't use"],
    }}
  />
);

export default BoatInsurance;
