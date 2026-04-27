import { useTranslation } from "react-i18next";
import ServicePageLayout from "@/components/ServicePageLayout";

const BOPInsurance = () => {
  const { t } = useTranslation();
  return (
    <ServicePageLayout
      title={t("bop.title")}
      subtitle={t("bop.subtitle")}
      heroDescription={t("bop.heroDescription")}
      coverages={[
        {
          title: t("bop.coverages.property.title"),
          description: t("bop.coverages.property.description"),
          items: [
            t("bop.coverages.property.i1"),
            t("bop.coverages.property.i2"),
            t("bop.coverages.property.i3"),
            t("bop.coverages.property.i4"),
            t("bop.coverages.property.i5"),
          ],
        },
        { title: t("bop.coverages.liability.title"), description: t("bop.coverages.liability.description") },
        { title: t("bop.coverages.interruption.title"), description: t("bop.coverages.interruption.description") },
        {
          title: t("bop.coverages.endorsements.title"),
          description: t("bop.coverages.endorsements.description"),
          items: [
            t("bop.coverages.endorsements.i1"),
            t("bop.coverages.endorsements.i2"),
            t("bop.coverages.endorsements.i3"),
            t("bop.coverages.endorsements.i4"),
            t("bop.coverages.endorsements.i5"),
            t("bop.coverages.endorsements.i6"),
          ],
        },
      ]}
      importantNote={{ title: t("bop.importantNote.title"), content: t("bop.importantNote.content") }}
      approach={{ intro: t("bop.approach.intro"), items: [t("bop.approach.i1"), t("bop.approach.i2"), t("bop.approach.i3")] }}
    />
  );
};

export default BOPInsurance;
