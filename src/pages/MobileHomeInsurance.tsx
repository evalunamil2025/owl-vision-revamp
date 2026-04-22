import ServicePageLayout from "@/components/ServicePageLayout";

const MobileHomeInsurance = () => (
  <ServicePageLayout
    title="Mobile Home Insurance"
    subtitle="Your home, regardless of how it's built, deserves protection"
    heroDescription="For many families, a manufactured or mobile home represents an accessible and smart way to own a home. But these homes have unique characteristics — different construction, transit risk, and exposure to wind — that require a specialized HO-7 policy. A standard HO-3 won't apply."
    coverages={[
      {
        title: "Structure Protection",
        description: "Covers the home itself plus permanently attached additions like decks, porches, and carports against fire, weather, and other named perils.",
      },
      {
        title: "Personal Property",
        description: "Protects your belongings inside the home — furniture, electronics, clothing, and appliances — on either Actual Cash Value or Replacement Cost basis.",
      },
      {
        title: "Personal Liability",
        description: "Protects you if someone is injured on your property or you cause damage to others. Includes legal defense.",
        items: ["Bodily injury claims", "Property damage to others", "Medical payments to guests", "Legal defense costs"],
      },
      {
        title: "Loss of Use",
        description: "If your home becomes uninhabitable due to a covered loss, pays for additional living expenses (hotel, meals, storage) during repairs.",
      },
      {
        title: "Trip Collision (In-Transit)",
        description: "Specific to mobile homes — covers damage that occurs while the home is being transported to a new location.",
      },
      {
        title: "Optional Add-Ons",
        description: "Common endorsements for mobile homes.",
        items: ["Replacement cost coverage", "Flood insurance (separate NFIP policy)", "Earthquake endorsement", "Adjacent structures (sheds, fences)"],
      },
    ]}
    importantNote={{
      title: "What Many Mobile Home Owners Don't Know",
      content: "Mobile homes need an HO-7 form — not the HO-3 used for site-built homes. Many carriers require tie-downs or skirting to qualify. Replacement Cost coverage is essential because Actual Cash Value depreciates the home heavily, leaving you well short of replacement at claim time.",
    }}
    approach={{
      intro: "It's not just about insuring you. It's about insuring you well.",
      items: ["Identify real risks", "Understand your policy coverage", "Design protection for your home type"],
    }}
  />
);

export default MobileHomeInsurance;
