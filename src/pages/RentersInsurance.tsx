import { useTranslation } from "react-i18next";
import ServicePageLayout from "@/components/ServicePageLayout";
import heroRenters from "@/assets/hero-renters-insurance.webp";

const RentersInsurance = () => {
  const { t } = useTranslation();
  return (
    <ServicePageLayout
      title={t("renters.title")}
      subtitle={t("renters.subtitle")}
      heroDescription={t("renters.heroDescription")}
      heroImage={heroRenters}
      heroImageAlt={t("renters.title")}
      coverages={[
        {
          title: t("renters.coverages.property.title"),
          description: t("renters.coverages.property.description"),
          items: [t("renters.coverages.property.i1"), t("renters.coverages.property.i2"), t("renters.coverages.property.i3"), t("renters.coverages.property.i4")],
        },
        {
          title: t("renters.coverages.liability.title"),
          description: t("renters.coverages.liability.description"),
          items: [t("renters.coverages.liability.i1"), t("renters.coverages.liability.i2"), t("renters.coverages.liability.i3"), t("renters.coverages.liability.i4")],
        },
        { title: t("renters.coverages.lossOfUse.title"), description: t("renters.coverages.lossOfUse.description") },
        { title: t("renters.coverages.medical.title"), description: t("renters.coverages.medical.description") },
      ]}
      importantNote={{
        title: t("renters.importantNote.title"),
        content: t("renters.importantNote.content"),
        items: [t("renters.importantNote.i1"), t("renters.importantNote.i2"), t("renters.importantNote.i3"), t("renters.importantNote.i4")],
      }}
      approach={{
        intro: t("renters.approach.intro"),
        items: [t("renters.approach.i1"), t("renters.approach.i2"), t("renters.approach.i3")],
        closing: t("renters.approach.closing"),
      }}
    />
  );
};

export default RentersInsurance;
