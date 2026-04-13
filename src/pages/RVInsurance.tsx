import ServicePageLayout from "@/components/ServicePageLayout";

const RVInsurance = () => (
  <ServicePageLayout
    title="Recreational Vehicle Insurance"
    subtitle="Enjoy your adventures — without carrying the risk"
    heroDescription="Recreational vehicles are made for enjoyment: trips, getaways, weekends away from routine. But they also involve different risks than a regular car. Not just because of their size or use, but because of everything you carry with you."
    coverages={[
      { title: "Vehicle Damage", description: "Protects your RV or recreational vehicle.", items: ["Accidents", "Theft", "Vandalism", "Fire", "Weather events"] },
      { title: "Liability Coverage", description: "Covers damage to other people or their property if you're responsible for an incident." },
      { title: "Extras Protection", description: "Many recreational vehicles include equipment, accessories, and trailers that can be covered." },
      { title: "Road Protection", description: "Additional coverages depending on your use.", items: ["Roadside assistance", "Towing", "Vacation or frequent use coverage", "Off-road protection"] },
    ]}
    importantNote={{
      title: "What Many People Overlook",
      content: "An RV isn't used like a car. It may be parked for long periods, function as temporary housing, or travel long distances. That's why it needs a policy specifically designed for that use.",
    }}
    approach={{
      intro: "We don't give you a generic solution. We design coverage that truly fits your lifestyle.",
      items: ["Analyze how you use your vehicle", "Identify real risks", "Compare multiple carriers"],
    }}
  />
);

export default RVInsurance;
