import { useTranslation } from "react-i18next";
import ServicePageLayout from "@/components/ServicePageLayout";

const ContractorsInsurance = () => {
  const { t } = useTranslation();
  return (
    <ServicePageLayout
      title={t("contractors.title")}
      subtitle={t("contractors.subtitle")}
      heroDescription={t("contractors.heroDescription")}
      coverages={[
        {
          title: t("contractors.coverages.liability.title"),
          description: t("contractors.coverages.liability.description"),
          items: [
            t("contractors.coverages.liability.i1"),
            t("contractors.coverages.liability.i2"),
            t("contractors.coverages.liability.i3"),
            t("contractors.coverages.liability.i4"),
          ],
        },
        {
          title: t("contractors.coverages.tools.title"),
          description: t("contractors.coverages.tools.description"),
          items: [
            t("contractors.coverages.tools.i1"),
            t("contractors.coverages.tools.i2"),
            t("contractors.coverages.tools.i3"),
            t("contractors.coverages.tools.i4"),
          ],
        },
        {
          title: t("contractors.coverages.builders.title"),
          description: t("contractors.coverages.builders.description"),
          items: [
            t("contractors.coverages.builders.i1"),
            t("contractors.coverages.builders.i2"),
            t("contractors.coverages.builders.i3"),
            t("contractors.coverages.builders.i4"),
          ],
        },
        { title: t("contractors.coverages.auto.title"), description: t("contractors.coverages.auto.description") },
        { title: t("contractors.coverages.workers.title"), description: t("contractors.coverages.workers.description") },
      ]}
      importantNote={{
        title: t("contractors.importantNote.title"),
        content: t("contractors.importantNote.content"),
        items: [
          t("contractors.importantNote.i1"),
          t("contractors.importantNote.i2"),
          t("contractors.importantNote.i3"),
          t("contractors.importantNote.i4"),
          t("contractors.importantNote.i5"),
        ],
      }}
      approach={{ intro: t("contractors.approach.intro"), items: [t("contractors.approach.i1"), t("contractors.approach.i2"), t("contractors.approach.i3")] }}
    />
  );
};

export default ContractorsInsurance;
