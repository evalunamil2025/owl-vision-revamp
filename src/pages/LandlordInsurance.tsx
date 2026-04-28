import { useTranslation } from "react-i18next";
import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/hero-landlord-insurance.webp";

const LandlordInsurance = () => {
  const { t } = useTranslation();
  return (
    <ServicePageLayout
      title={t("landlord.title")}
      subtitle={t("landlord.subtitle")}
      heroDescription={t("landlord.heroDescription")}
      heroImage={heroImg}
      heroImageAlt={t("landlord.title")}
      coverages={[
        {
          title: t("landlord.coverages.dwelling.title"),
          description: t("landlord.coverages.dwelling.description"),
          items: [t("landlord.coverages.dwelling.i1"), t("landlord.coverages.dwelling.i2"), t("landlord.coverages.dwelling.i3"), t("landlord.coverages.dwelling.i4")],
        },
        { title: t("landlord.coverages.rentalIncome.title"), description: t("landlord.coverages.rentalIncome.description") },
        {
          title: t("landlord.coverages.premises.title"),
          description: t("landlord.coverages.premises.description"),
          items: [t("landlord.coverages.premises.i1"), t("landlord.coverages.premises.i2"), t("landlord.coverages.premises.i3"), t("landlord.coverages.premises.i4")],
        },
        {
          title: t("landlord.coverages.endorsements.title"),
          description: t("landlord.coverages.endorsements.description"),
          items: [
            t("landlord.coverages.endorsements.i1"),
            t("landlord.coverages.endorsements.i2"),
            t("landlord.coverages.endorsements.i3"),
            t("landlord.coverages.endorsements.i4"),
            t("landlord.coverages.endorsements.i5"),
          ],
        },
      ]}
      importantNote={{ title: t("landlord.importantNote.title"), content: t("landlord.importantNote.content") }}
      approach={{ intro: t("landlord.approach.intro"), items: [t("landlord.approach.i1"), t("landlord.approach.i2"), t("landlord.approach.i3")] }}
    />
  );
};

export default LandlordInsurance;
