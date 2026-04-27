import { useTranslation } from "react-i18next";
import ServicePageLayout from "@/components/ServicePageLayout";

const BoatInsurance = () => {
  const { t } = useTranslation();
  return (
    <ServicePageLayout
      title={t("boat.title")}
      subtitle={t("boat.subtitle")}
      heroDescription={t("boat.heroDescription")}
      coverages={[
        {
          title: t("boat.coverages.hull.title"),
          description: t("boat.coverages.hull.description"),
          items: [t("boat.coverages.hull.i1"), t("boat.coverages.hull.i2"), t("boat.coverages.hull.i3"), t("boat.coverages.hull.i4")],
        },
        { title: t("boat.coverages.liability.title"), description: t("boat.coverages.liability.description") },
        { title: t("boat.coverages.uninsured.title"), description: t("boat.coverages.uninsured.description") },
        { title: t("boat.coverages.medical.title"), description: t("boat.coverages.medical.description") },
        {
          title: t("boat.coverages.additional.title"),
          description: t("boat.coverages.additional.description"),
          items: [
            t("boat.coverages.additional.i1"),
            t("boat.coverages.additional.i2"),
            t("boat.coverages.additional.i3"),
            t("boat.coverages.additional.i4"),
            t("boat.coverages.additional.i5"),
          ],
        },
      ]}
      importantNote={{ title: t("boat.importantNote.title"), content: t("boat.importantNote.content") }}
      approach={{ intro: t("boat.approach.intro"), items: [t("boat.approach.i1"), t("boat.approach.i2"), t("boat.approach.i3")] }}
    />
  );
};

export default BoatInsurance;
