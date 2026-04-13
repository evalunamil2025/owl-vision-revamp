import ServicePageLayout from "@/components/ServicePageLayout";

const BoatInsurance = () => (
  <ServicePageLayout
    title="Boat & Watercraft Insurance"
    subtitle="Enjoy the water — without worrying about what could happen"
    heroDescription="Having a boat, jet ski, or any watercraft means freedom. But on the water, there are also risks: accidents, damage, theft, or liability toward others. Insurance isn't just a requirement — it's a way to protect your investment."
    coverages={[
      { title: "Physical Damage", description: "Protects your boat or jet ski while on the water, in transport, or in storage.", items: ["Fire", "Theft", "Vandalism", "Weather events"] },
      { title: "Liability Coverage", description: "If you have an accident and cause damage to another vessel, dock, or person." },
      { title: "Personal Liability", description: "Protects you and your family if someone is injured in an accident related to your boat." },
      { title: "Medical Payments", description: "Covers medical expenses if you or your passengers are injured during an incident." },
      { title: "Additional Coverages", description: "Depending on your use and vessel type.", items: ["Emergency services reimbursement", "On-water towing", "Labor and supplies", "Extended off-water protection"] },
    ]}
    importantNote={{
      title: "What Many Owners Don't Know",
      content: "Small watercraft may be partially covered by your home policy. However, that coverage is usually limited and not always sufficient. It's key to properly evaluate your vessel type, value, and how you use it.",
    }}
    approach={{
      intro: "It's not just about insuring you. It's about making sure you understand your real risks and what coverage you need.",
      items: ["Assess your real risks", "Find the right coverage", "Avoid paying for things you don't use"],
    }}
  />
);

export default BoatInsurance;
