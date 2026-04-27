import { useTranslation } from "react-i18next";
import ServicePageLayout from "@/components/ServicePageLayout";

const CommercialProperty = () => {
  const { t } = useTranslation();
  return (
    <ServicePageLayout
      title={t("commercialProperty.title")}
      subtitle={t("commercialProperty.subtitle")}
      heroDescription={t("commercialProperty.heroDescription")}
      coverages={[
        {
          title: t("commercialProperty.coverages.building.title"),
          description: t("commercialProperty.coverages.building.description"),
          items: [
            t("commercialProperty.coverages.building.i1"),
            t("commercialProperty.coverages.building.i2"),
            t("commercialProperty.coverages.building.i3"),
            t("commercialProperty.coverages.building.i4"),
          ],
        },
        { title: t("commercialProperty.coverages.bpp.title"), description: t("commercialProperty.coverages.bpp.description") },
        { title: t("commercialProperty.coverages.inventory.title"), description: t("commercialProperty.coverages.inventory.description") },
        { title: t("commercialProperty.coverages.electronic.title"), description: t("commercialProperty.coverages.electronic.description") },
        {
          title: t("commercialProperty.coverages.endorsements.title"),
          description: t("commercialProperty.coverages.endorsements.description"),
          items: [
            t("commercialProperty.coverages.endorsements.i1"),
            t("commercialProperty.coverages.endorsements.i2"),
            t("commercialProperty.coverages.endorsements.i3"),
            t("commercialProperty.coverages.endorsements.i4"),
            t("commercialProperty.coverages.endorsements.i5"),
            t("commercialProperty.coverages.endorsements.i6"),
          ],
        },
      ]}
      importantNote={{ title: t("commercialProperty.importantNote.title"), content: t("commercialProperty.importantNote.content") }}
      approach={{ intro: t("commercialProperty.approach.intro"), items: [t("commercialProperty.approach.i1"), t("commercialProperty.approach.i2"), t("commercialProperty.approach.i3")] }}
    />
  );
};

export default CommercialProperty;
