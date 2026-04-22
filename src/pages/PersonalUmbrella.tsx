import ServicePageLayout from "@/components/ServicePageLayout";

const PersonalUmbrella = () => (
  <ServicePageLayout
    title="Personal Umbrella Insurance"
    subtitle="When the basics aren't enough — you need an extra layer of protection"
    heroDescription="Most people think their auto or home insurance is enough. But what happens when a single jury verdict exceeds those limits? Umbrella insurance adds $1M–$5M of liability protection on top of your existing policies — and typically costs only $200–$400 per year for the first million."
    coverages={[
      {
        title: "Extended Liability",
        description: "Kicks in once your underlying auto, home, or boat liability limits are exhausted. Protects against bodily injury and property damage claims.",
      },
      {
        title: "Personal Injury Protection",
        description: "Covers claims that standard policies often exclude, such as defamation, libel, slander, false arrest, and invasion of privacy.",
      },
      {
        title: "Worldwide Legal Defense",
        description: "Pays attorney fees, court costs, and expert witnesses — often outside your policy limit. Defense costs alone can exceed $50,000 in serious cases.",
      },
      {
        title: "Multi-Policy Protection",
        description: "A single umbrella sits over multiple underlying policies for unified, higher-limit protection.",
        items: ["Auto insurance", "Homeowners or renters", "Boat & RV", "Rental properties (DP-3)"],
      },
    ]}
    importantNote={{
      title: "Something Many Don't Consider",
      content: "Million-dollar liability verdicts are no longer rare. A serious at-fault auto accident, a dog bite, a swimming pool injury, or a teen driver crash can produce judgments well above standard limits. Umbrella insurance protects future income and assets — including wages garnished after a judgment.",
      items: [
        "If you own a home or rental properties",
        "If you have savings, retirement, or investments",
        "If you have teen drivers in the household",
        "If you own a pool, trampoline, or dog",
        "If you serve on a nonprofit board",
      ],
    }}
    approach={{
      intro: "We don't recommend umbrella insurance to everyone. We first analyze your risk level, assets, and current coverages.",
      items: ["Analyze your risk level", "Review your current coverages", "Design a complementary solution"],
    }}
  />
);

export default PersonalUmbrella;
