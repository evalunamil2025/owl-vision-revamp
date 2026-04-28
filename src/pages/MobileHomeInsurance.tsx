import { useTranslation } from "react-i18next";
import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/hero-mobile-home.webp";

const MobileHomeInsurance = () => {
  const { t } = useTranslation();
  return (
    <ServicePageLayout
      title={t("mobileHome.title")}
      subtitle={t("mobileHome.subtitle")}
      heroDescription={t("mobileHome.heroDescription")}
      heroImage={heroImg}
      heroImageAlt={t("mobileHome.title")}
      coverages={[
        { title: t("mobileHome.coverages.structure.title"), description: t("mobileHome.coverages.structure.description") },
        { title: t("mobileHome.coverages.property.title"), description: t("mobileHome.coverages.property.description") },
        {
          title: t("mobileHome.coverages.liability.title"),
          description: t("mobileHome.coverages.liability.description"),
          items: [t("mobileHome.coverages.liability.i1"), t("mobileHome.coverages.liability.i2"), t("mobileHome.coverages.liability.i3"), t("mobileHome.coverages.liability.i4")],
        },
        { title: t("mobileHome.coverages.lossOfUse.title"), description: t("mobileHome.coverages.lossOfUse.description") },
        { title: t("mobileHome.coverages.transit.title"), description: t("mobileHome.coverages.transit.description") },
        {
          title: t("mobileHome.coverages.addOns.title"),
          description: t("mobileHome.coverages.addOns.description"),
          items: [t("mobileHome.coverages.addOns.i1"), t("mobileHome.coverages.addOns.i2"), t("mobileHome.coverages.addOns.i3"), t("mobileHome.coverages.addOns.i4")],
        },
      ]}
      importantNote={{ title: t("mobileHome.importantNote.title"), content: t("mobileHome.importantNote.content") }}
      approach={{ intro: t("mobileHome.approach.intro"), items: [t("mobileHome.approach.i1"), t("mobileHome.approach.i2"), t("mobileHome.approach.i3")] }}
    />
  );
};

export default MobileHomeInsurance;
