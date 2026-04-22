import ServicePageLayout from "@/components/ServicePageLayout";

const HomeInsurance = () => (
  <ServicePageLayout
    title="Home Insurance"
    subtitle="Your home isn't just a property — it's your foundation"
    heroDescription="Your home is probably the biggest investment you've ever made. But beyond the money, it's where your memories, your family, and everything you've built with effort reside. A fire, theft, water leak, or even an accident on your property can become a serious financial problem without proper protection."
    coverages={[
      {
        title: "Dwelling Coverage (Coverage A)",
        description: "Pays to rebuild or repair the physical structure of your home — including walls, roof, foundation, and built-in appliances — at today's construction costs.",
        items: ["House structure", "Attached garage", "Built-in appliances", "Permanently installed fixtures"],
      },
      {
        title: "Other Structures (Coverage B)",
        description: "Typically 10% of your dwelling limit. Covers structures on your property that aren't attached to the main home.",
        items: ["Detached garage", "Fences & sheds", "Driveways & gazebos", "Guesthouses"],
      },
      {
        title: "Personal Property (Coverage C)",
        description: "Covers your belongings inside (and often outside) the home. Standard policies cover Actual Cash Value — Replacement Cost is a smart upgrade.",
        items: ["Furniture & electronics", "Clothing & appliances", "Jewelry (sub-limits apply)", "Items stolen while traveling"],
      },
      {
        title: "Personal Liability (Coverage E)",
        description: "Protects you if someone is injured on your property or you accidentally damage someone else's. Includes legal defense even if the lawsuit is groundless.",
        items: ["Bodily injury claims", "Property damage to others", "Legal defense costs", "Dog bite incidents (varies)"],
      },
      {
        title: "Medical Payments (Coverage F)",
        description: "No-fault coverage for minor injuries to guests on your property. Usually $1,000–$5,000 — helps prevent small incidents from escalating into lawsuits.",
      },
      {
        title: "Loss of Use (Coverage D)",
        description: "If a covered loss makes your home unlivable, pays for additional living expenses above your normal cost of living until repairs are complete.",
        items: ["Hotel or rental housing", "Restaurant meals above normal grocery costs", "Pet boarding", "Storage fees"],
      },
    ]}
    importantNote={{
      title: "What Many Homeowners Don't Know",
      content: "Standard HO-3 policies exclude floods, earthquakes, normal wear & tear, and sewer backup. Floods alone require a separate NFIP or private policy. Most claims also pay Actual Cash Value (depreciated) unless you elect Replacement Cost.",
      items: [
        "Floods are NOT covered — separate policy required",
        "Earthquakes need a separate endorsement",
        "Sewer backup is an optional add-on",
        "Insure to 100% of replacement cost — not market value",
      ],
    }}
    approach={{
      intro: "We don't work with just one company. As an independent agency, we find what's right for you.",
      items: ["Compare multiple carriers", "Identify gaps in your coverage", "Adjust your policy to your reality"],
      closing: "The goal isn't to sell you more — it's to make sure you have the right coverage.",
    }}
  />
);

export default HomeInsurance;
