import ServicePageLayout from "@/components/ServicePageLayout";

const MotorcycleInsurance = () => (
  <ServicePageLayout
    title="Motorcycle Insurance"
    subtitle="Enjoy the road — with the right protection"
    heroDescription="Riding a motorcycle isn't the same as driving a car. It's more freedom, more adrenaline — but also more exposure to risk. A small mistake, another driver's distraction, or road conditions can turn into a serious accident."
    coverages={[
      { title: "Liability Coverage", description: "Covers damage to other people or their property if you're responsible for an accident." },
      { title: "Collision Coverage", description: "Covers damage to your motorcycle from an accident." },
      { title: "Comprehensive Coverage", description: "Protects against non-collision incidents.", items: ["Theft", "Vandalism", "Fire", "Weather events"] },
      { title: "Medical Payments", description: "Helps cover medical attention in case of an accident." },
      { title: "Uninsured Motorist Protection", description: "Protects you if an uninsured driver causes an accident." },
      { title: "Additional Coverages", description: "Strengthen your policy with optional extras.", items: ["Roadside assistance", "Accessory protection", "Total loss reimbursement", "Extended coverage based on use"] },
    ]}
    importantNote={{
      title: "Not All Companies Insure Motorcycles the Same Way",
      content: "Some limit coverages, raise prices without clear justification, or don't understand the client's real use. This is where an independent agency makes the difference.",
    }}
    approach={{
      intro: "Instead of giving you a standard option, we find the right protection for when you really need it.",
      items: ["Compare different carriers", "Evaluate your real profile", "Adjust coverage and cost to your situation"],
    }}
  />
);

export default MotorcycleInsurance;
