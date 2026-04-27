import { useTranslation } from "react-i18next";
import ServicePageLayout from "@/components/ServicePageLayout";

const RestaurantInsurance = () => {
  const { t } = useTranslation();
  return (
    <ServicePageLayout
      title={t("restaurant.title")}
      subtitle={t("restaurant.subtitle")}
      heroDescription={t("restaurant.heroDescription")}
      coverages={[
        { title: t("restaurant.coverages.property.title"), description: t("restaurant.coverages.property.description") },
        { title: t("restaurant.coverages.liability.title"), description: t("restaurant.coverages.liability.description") },
        { title: t("restaurant.coverages.interruption.title"), description: t("restaurant.coverages.interruption.description") },
        {
          title: t("restaurant.coverages.liquor.title"),
          description: t("restaurant.coverages.liquor.description"),
          items: [
            t("restaurant.coverages.liquor.i1"),
            t("restaurant.coverages.liquor.i2"),
            t("restaurant.coverages.liquor.i3"),
            t("restaurant.coverages.liquor.i4"),
          ],
        },
        { title: t("restaurant.coverages.workers.title"), description: t("restaurant.coverages.workers.description") },
        {
          title: t("restaurant.coverages.endorsements.title"),
          description: t("restaurant.coverages.endorsements.description"),
          items: [
            t("restaurant.coverages.endorsements.i1"),
            t("restaurant.coverages.endorsements.i2"),
            t("restaurant.coverages.endorsements.i3"),
            t("restaurant.coverages.endorsements.i4"),
            t("restaurant.coverages.endorsements.i5"),
          ],
        },
      ]}
      importantNote={{ title: t("restaurant.importantNote.title"), content: t("restaurant.importantNote.content") }}
      approach={{ intro: t("restaurant.approach.intro"), items: [t("restaurant.approach.i1"), t("restaurant.approach.i2"), t("restaurant.approach.i3")] }}
    />
  );
};

export default RestaurantInsurance;
