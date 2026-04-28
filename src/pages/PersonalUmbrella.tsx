import { useTranslation } from "react-i18next";
import ServicePageLayout from "@/components/ServicePageLayout";
import heroImage from "@/assets/hero-personal-umbrella.webp";

const PersonalUmbrella = () => {
  const { t } = useTranslation();
  return (
    <ServicePageLayout
      title={t("personalUmbrella.title")}
      subtitle={t("personalUmbrella.subtitle")}
      heroDescription={t("personalUmbrella.heroDescription")}
      heroImage={heroImage}
      heroImageAlt="Owlie advising a couple about Personal Umbrella Insurance"
      coverages={[
        { title: t("personalUmbrella.coverages.extended.title"), description: t("personalUmbrella.coverages.extended.description") },
        { title: t("personalUmbrella.coverages.personalInjury.title"), description: t("personalUmbrella.coverages.personalInjury.description") },
        { title: t("personalUmbrella.coverages.defense.title"), description: t("personalUmbrella.coverages.defense.description") },
        {
          title: t("personalUmbrella.coverages.multiPolicy.title"),
          description: t("personalUmbrella.coverages.multiPolicy.description"),
          items: [
            t("personalUmbrella.coverages.multiPolicy.i1"),
            t("personalUmbrella.coverages.multiPolicy.i2"),
            t("personalUmbrella.coverages.multiPolicy.i3"),
            t("personalUmbrella.coverages.multiPolicy.i4"),
          ],
        },
      ]}
      importantNote={{
        title: t("personalUmbrella.importantNote.title"),
        content: t("personalUmbrella.importantNote.content"),
        items: [
          t("personalUmbrella.importantNote.i1"),
          t("personalUmbrella.importantNote.i2"),
          t("personalUmbrella.importantNote.i3"),
          t("personalUmbrella.importantNote.i4"),
          t("personalUmbrella.importantNote.i5"),
        ],
      }}
      approach={{ intro: t("personalUmbrella.approach.intro"), items: [t("personalUmbrella.approach.i1"), t("personalUmbrella.approach.i2"), t("personalUmbrella.approach.i3")] }}
    />
  );
};

export default PersonalUmbrella;
