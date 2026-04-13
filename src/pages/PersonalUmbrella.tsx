import ServicePageLayout from "@/components/ServicePageLayout";

const PersonalUmbrella = () => (
  <ServicePageLayout
    title="Personal Umbrella Insurance"
    subtitle="When the basics aren't enough — you need an extra layer of protection"
    heroDescription="Most people think their auto or home insurance is enough. But what happens when the damage exceeds those limits? Umbrella insurance is an additional layer of protection designed to cover large, costly, and infrequent situations — but ones that do happen."
    coverages={[
      { title: "Extended Liability", description: "Protects against situations where you're legally responsible for damages to third parties." },
      { title: "Legal Costs", description: "Includes legal defense, which in many cases can be as costly as the claim itself." },
      { title: "Multi-Policy Coverage", description: "Applies over multiple policies.", items: ["Auto", "Home", "Additional properties"] },
    ]}
    importantNote={{
      title: "Something Many Don't Consider",
      content: "Liability lawsuits can be higher than you imagine. Although uncommon, when they happen they can affect years of work and compromise your financial stability. This insurance isn't for 'more coverage' — it's to protect everything you've already achieved.",
      items: ["If you own a home or properties", "If you have savings or assets to protect", "If you have stable income", "If you want to avoid major financial risks"],
    }}
    approach={{
      intro: "We don't recommend umbrella insurance to everyone. We first analyze your risk level, assets, and current coverages.",
      items: ["Analyze your risk level", "Review your current coverages", "Design a complementary solution"],
    }}
  />
);

export default PersonalUmbrella;
