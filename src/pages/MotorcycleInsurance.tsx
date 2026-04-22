import ServicePageLayout from "@/components/ServicePageLayout";

const MotorcycleInsurance = () => (
  <ServicePageLayout
    title="Motorcycle Insurance"
    subtitle="Enjoy the road — with the right protection"
    heroDescription="Riding a motorcycle isn't the same as driving a car. It's more freedom, more adrenaline — but also more exposure. NHTSA data shows motorcyclists are 24× more likely than car occupants to die in a crash per mile traveled. The right policy is essential."
    coverages={[
      {
        title: "Liability Coverage",
        description: "Required in Washington (25/50/10 minimum). Pays for injuries and property damage you cause to others in an at-fault crash.",
        items: ["Bodily injury liability", "Property damage liability", "Legal defense"],
      },
      {
        title: "Collision Coverage",
        description: "Pays to repair or replace your motorcycle after a crash with another vehicle or object — regardless of fault.",
      },
      {
        title: "Comprehensive Coverage",
        description: "Covers non-collision losses. Especially important given how often motorcycles are stolen.",
        items: ["Theft", "Vandalism", "Fire & explosion", "Hail, wind, falling objects", "Animal collisions"],
      },
      {
        title: "Medical Payments",
        description: "Pays medical and funeral expenses for you and your passenger after an accident — no fault required.",
      },
      {
        title: "Uninsured/Underinsured Motorist",
        description: "Critical for riders. Protects you when an uninsured or underinsured driver causes a crash that injures you or damages your bike.",
      },
      {
        title: "Additional Coverages",
        description: "Options that cover what standard policies often leave out.",
        items: [
          "Custom parts & accessories",
          "Roadside assistance & towing",
          "Total loss replacement (new bike)",
          "Trip interruption",
          "OEM parts endorsement",
        ],
      },
    ]}
    importantNote={{
      title: "Not All Companies Insure Motorcycles the Same Way",
      content: "Carriers vary widely on accessory limits, OEM part requirements, and whether passenger liability is included by default. Standard policies often cap custom parts coverage at $3,000 — well below what most riders have invested.",
    }}
    approach={{
      intro: "Instead of giving you a standard option, we find the right protection for when you really need it.",
      items: ["Compare different carriers", "Evaluate your real profile", "Adjust coverage and cost to your situation"],
    }}
  />
);

export default MotorcycleInsurance;
