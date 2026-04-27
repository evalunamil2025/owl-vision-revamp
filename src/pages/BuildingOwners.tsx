import { useTranslation } from "react-i18next";
import ServicePageLayout from "@/components/ServicePageLayout";

const BuildingOwners = () => {
  const { t } = useTranslation();
  return (
    <ServicePageLayout
      title={t("buildingOwners.title")}
      subtitle={t("buildingOwners.subtitle")}
      heroDescription={t("buildingOwners.heroDescription")}
      coverages={[
        {
          title: t("buildingOwners.coverages.buildingProperty.title"),
          description: t("buildingOwners.coverages.buildingProperty.description"),
          items: [
            t("buildingOwners.coverages.buildingProperty.i1"),
            t("buildingOwners.coverages.buildingProperty.i2"),
            t("buildingOwners.coverages.buildingProperty.i3"),
            t("buildingOwners.coverages.buildingProperty.i4"),
          ],
        },
        { title: t("buildingOwners.coverages.bpp.title"), description: t("buildingOwners.coverages.bpp.description") },
        {
          title: t("buildingOwners.coverages.premises.title"),
          description: t("buildingOwners.coverages.premises.description"),
          items: [
            t("buildingOwners.coverages.premises.i1"),
            t("buildingOwners.coverages.premises.i2"),
            t("buildingOwners.coverages.premises.i3"),
            t("buildingOwners.coverages.premises.i4"),
          ],
        },
        { title: t("buildingOwners.coverages.rentalIncome.title"), description: t("buildingOwners.coverages.rentalIncome.description") },
        {
          title: t("buildingOwners.coverages.endorsements.title"),
          description: t("buildingOwners.coverages.endorsements.description"),
          items: [
            t("buildingOwners.coverages.endorsements.i1"),
            t("buildingOwners.coverages.endorsements.i2"),
            t("buildingOwners.coverages.endorsements.i3"),
            t("buildingOwners.coverages.endorsements.i4"),
            t("buildingOwners.coverages.endorsements.i5"),
            t("buildingOwners.coverages.endorsements.i6"),
          ],
        },
      ]}
      importantNote={{ title: t("buildingOwners.importantNote.title"), content: t("buildingOwners.importantNote.content") }}
      approach={{ intro: t("buildingOwners.approach.intro"), items: [t("buildingOwners.approach.i1"), t("buildingOwners.approach.i2"), t("buildingOwners.approach.i3")] }}
    />
  );
};

export default BuildingOwners;
