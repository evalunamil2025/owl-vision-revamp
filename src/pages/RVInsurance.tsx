import { useTranslation } from "react-i18next";
import ServicePageLayout from "@/components/ServicePageLayout";

const RVInsurance = () => {
  const { t } = useTranslation();
  return (
    <ServicePageLayout
      title={t("rv.title")}
      subtitle={t("rv.subtitle")}
      heroDescription={t("rv.heroDescription")}
      coverages={[
        {
          title: t("rv.coverages.damage.title"),
          description: t("rv.coverages.damage.description"),
          items: [t("rv.coverages.damage.i1"), t("rv.coverages.damage.i2"), t("rv.coverages.damage.i3"), t("rv.coverages.damage.i4"), t("rv.coverages.damage.i5")],
        },
        { title: t("rv.coverages.liability.title"), description: t("rv.coverages.liability.description") },
        {
          title: t("rv.coverages.personalEffects.title"),
          description: t("rv.coverages.personalEffects.description"),
          items: [t("rv.coverages.personalEffects.i1"), t("rv.coverages.personalEffects.i2"), t("rv.coverages.personalEffects.i3"), t("rv.coverages.personalEffects.i4")],
        },
        {
          title: t("rv.coverages.fullTimer.title"),
          description: t("rv.coverages.fullTimer.description"),
          items: [t("rv.coverages.fullTimer.i1"), t("rv.coverages.fullTimer.i2"), t("rv.coverages.fullTimer.i3"), t("rv.coverages.fullTimer.i4")],
        },
        {
          title: t("rv.coverages.vacation.title"),
          description: t("rv.coverages.vacation.description"),
          items: [t("rv.coverages.vacation.i1"), t("rv.coverages.vacation.i2"), t("rv.coverages.vacation.i3"), t("rv.coverages.vacation.i4")],
        },
      ]}
      importantNote={{ title: t("rv.importantNote.title"), content: t("rv.importantNote.content") }}
      approach={{ intro: t("rv.approach.intro"), items: [t("rv.approach.i1"), t("rv.approach.i2"), t("rv.approach.i3")] }}
    />
  );
};

export default RVInsurance;
