import { useTranslation } from "react-i18next";
import ServicePageLayout from "@/components/ServicePageLayout";
import heroLife from "@/assets/hero-life-insurance.webp";

const LifeInsurance = () => {
  const { t } = useTranslation();
  return (
    <ServicePageLayout
      title={t("life.title")}
      subtitle={t("life.subtitle")}
      heroDescription={t("life.heroDescription")}
      heroImage={heroLife}
      heroImageAlt={t("life.title")}
      coverages={[
        { title: t("life.coverages.family.title"), description: t("life.coverages.family.description") },
        {
          title: t("life.coverages.finalExpenses.title"),
          description: t("life.coverages.finalExpenses.description"),
          items: [t("life.coverages.finalExpenses.i1"), t("life.coverages.finalExpenses.i2"), t("life.coverages.finalExpenses.i3")],
        },
        { title: t("life.coverages.income.title"), description: t("life.coverages.income.description") },
        { title: t("life.coverages.debt.title"), description: t("life.coverages.debt.description") },
        {
          title: t("life.coverages.term.title"),
          description: t("life.coverages.term.description"),
          items: [t("life.coverages.term.i1"), t("life.coverages.term.i2"), t("life.coverages.term.i3"), t("life.coverages.term.i4")],
        },
        {
          title: t("life.coverages.permanent.title"),
          description: t("life.coverages.permanent.description"),
          items: [t("life.coverages.permanent.i1"), t("life.coverages.permanent.i2"), t("life.coverages.permanent.i3"), t("life.coverages.permanent.i4")],
        },
      ]}
      importantNote={{ title: t("life.importantNote.title"), content: t("life.importantNote.content") }}
      approach={{ intro: t("life.approach.intro"), items: [t("life.approach.i1"), t("life.approach.i2"), t("life.approach.i3")] }}
    />
  );
};

export default LifeInsurance;
