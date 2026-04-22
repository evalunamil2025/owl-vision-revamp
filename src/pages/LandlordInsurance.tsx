import ServicePageLayout from "@/components/ServicePageLayout";

const LandlordInsurance = () => (
  <ServicePageLayout
    title="Landlord Insurance"
    subtitle="A rental property is a business — protect it like one"
    heroDescription="Being a rental property owner isn't just about collecting monthly payments. It's an investment that involves constant risks: property damage, tenant issues, income loss, and legal liability. A standard homeowners policy can be void the moment you start renting — a dedicated DP-3 or landlord policy is essential."
    coverages={[
      {
        title: "Dwelling & Other Structures",
        description: "Covers the rental building, attached structures, and detached structures (garages, fences, sheds) on a Special Form (DP-3) basis — typically open peril.",
        items: ["Fire & lightning", "Wind & hail", "Vandalism & theft", "Water damage from plumbing"],
      },
      {
        title: "Loss of Rental Income (Fair Rental Value)",
        description: "If a covered loss makes the unit uninhabitable, reimburses the rental income you would have collected during repairs — typically up to 12 months.",
      },
      {
        title: "Premises Liability",
        description: "Protects you if a tenant, visitor, or contractor is injured on the property or sues over a property-related issue.",
        items: ["Bodily injury claims", "Medical payments to others", "Legal defense", "Wrongful eviction defense (some carriers)"],
      },
      {
        title: "Optional Endorsements",
        description: "Strengthen your protection based on your situation.",
        items: [
          "Building ordinance & law (code upgrades)",
          "Equipment breakdown",
          "Vandalism & malicious mischief",
          "Landlord contents (appliances, furnishings)",
          "Umbrella liability",
        ],
      },
    ]}
    importantNote={{
      title: "What Many Landlords Don't Consider",
      content: "A traditional homeowners (HO-3) policy is NOT designed for tenant-occupied properties. Continuing to use it after renting can void your coverage entirely. Tenant-caused damage beyond normal wear, eviction-related losses, and lost income from non-payment are typically excluded — those need separate solutions.",
    }}
    approach={{
      intro: "We understand this is an investment. We help you protect your property, secure your income, and reduce legal risks.",
      items: ["Protect your property", "Secure your income stream", "Reduce legal risks"],
    }}
  />
);

export default LandlordInsurance;
