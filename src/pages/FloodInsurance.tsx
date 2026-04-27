import { useTranslation } from "react-i18next";
import ServicePageLayout from "@/components/ServicePageLayout";

const FloodInsurance = () => {
  const { t } = useTranslation();
  return (
    <ServicePageLayout
      title={t("flood.title")}
      subtitle={t("flood.subtitle")}
      heroDescription={t("flood.heroDescription")}
      coverages={[
        {
          title: t("flood.coverages.building.title"),
          description: t("flood.coverages.building.description"),
          items: [t("flood.coverages.building.i1"), t("flood.coverages.building.i2"), t("flood.coverages.building.i3"), t("flood.coverages.building.i4"), t("flood.coverages.building.i5")],
        },
        {
          title: t("flood.coverages.contents.title"),
          description: t("flood.coverages.contents.description"),
          items: [t("flood.coverages.contents.i1"), t("flood.coverages.contents.i2"), t("flood.coverages.contents.i3"), t("flood.coverages.contents.i4"), t("flood.coverages.contents.i5")],
        },
      ]}
      importantNote={{
        title: t("flood.importantNote.title"),
        content: t("flood.importantNote.content"),
        items: [t("flood.importantNote.i1"), t("flood.importantNote.i2"), t("flood.importantNote.i3"), t("flood.importantNote.i4")],
      }}
      approach={{ intro: t("flood.approach.intro"), items: [t("flood.approach.i1"), t("flood.approach.i2"), t("flood.approach.i3")] }}
    />
  );
};

export default FloodInsurance;
