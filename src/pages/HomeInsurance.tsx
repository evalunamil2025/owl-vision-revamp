import { useTranslation } from "react-i18next";
import ServicePageLayout from "@/components/ServicePageLayout";
import heroHome from "@/assets/hero-home-insurance.webp";

const HomeInsurance = () => {
  const { t } = useTranslation();
  return (
    <ServicePageLayout
      title={t("home.title")}
      subtitle={t("home.subtitle")}
      heroDescription={t("home.heroDescription")}
      heroImage={heroHome}
      heroImageAlt={t("home.title")}
      coverages={[
        {
          title: t("home.coverages.dwelling.title"),
          description: t("home.coverages.dwelling.description"),
          items: [t("home.coverages.dwelling.i1"), t("home.coverages.dwelling.i2"), t("home.coverages.dwelling.i3"), t("home.coverages.dwelling.i4")],
        },
        {
          title: t("home.coverages.otherStructures.title"),
          description: t("home.coverages.otherStructures.description"),
          items: [t("home.coverages.otherStructures.i1"), t("home.coverages.otherStructures.i2"), t("home.coverages.otherStructures.i3"), t("home.coverages.otherStructures.i4")],
        },
        {
          title: t("home.coverages.personalProperty.title"),
          description: t("home.coverages.personalProperty.description"),
          items: [t("home.coverages.personalProperty.i1"), t("home.coverages.personalProperty.i2"), t("home.coverages.personalProperty.i3"), t("home.coverages.personalProperty.i4")],
        },
        {
          title: t("home.coverages.liability.title"),
          description: t("home.coverages.liability.description"),
          items: [t("home.coverages.liability.i1"), t("home.coverages.liability.i2"), t("home.coverages.liability.i3"), t("home.coverages.liability.i4")],
        },
        { title: t("home.coverages.medical.title"), description: t("home.coverages.medical.description") },
        {
          title: t("home.coverages.lossOfUse.title"),
          description: t("home.coverages.lossOfUse.description"),
          items: [t("home.coverages.lossOfUse.i1"), t("home.coverages.lossOfUse.i2"), t("home.coverages.lossOfUse.i3"), t("home.coverages.lossOfUse.i4")],
        },
      ]}
      importantNote={{
        title: t("home.importantNote.title"),
        content: t("home.importantNote.content"),
        items: [t("home.importantNote.i1"), t("home.importantNote.i2"), t("home.importantNote.i3"), t("home.importantNote.i4")],
      }}
      approach={{
        intro: t("home.approach.intro"),
        items: [t("home.approach.i1"), t("home.approach.i2"), t("home.approach.i3")],
        closing: t("home.approach.closing"),
      }}
    />
  );
};

export default HomeInsurance;
