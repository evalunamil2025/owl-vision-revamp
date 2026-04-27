import { useTranslation } from "react-i18next";
import ServicePageLayout from "@/components/ServicePageLayout";

const CommercialAuto = () => {
  const { t } = useTranslation();
  return (
    <ServicePageLayout
      title={t("commercialAuto.title")}
      subtitle={t("commercialAuto.subtitle")}
      heroDescription={t("commercialAuto.heroDescription")}
      coverages={[
        {
          title: t("commercialAuto.coverages.liability.title"),
          description: t("commercialAuto.coverages.liability.description"),
          items: [
            t("commercialAuto.coverages.liability.i1"),
            t("commercialAuto.coverages.liability.i2"),
            t("commercialAuto.coverages.liability.i3"),
            t("commercialAuto.coverages.liability.i4"),
          ],
        },
        { title: t("commercialAuto.coverages.physical.title"), description: t("commercialAuto.coverages.physical.description") },
        { title: t("commercialAuto.coverages.medical.title"), description: t("commercialAuto.coverages.medical.description") },
        { title: t("commercialAuto.coverages.umuim.title"), description: t("commercialAuto.coverages.umuim.description") },
        {
          title: t("commercialAuto.coverages.hired.title"),
          description: t("commercialAuto.coverages.hired.description"),
          items: [t("commercialAuto.coverages.hired.i1"), t("commercialAuto.coverages.hired.i2"), t("commercialAuto.coverages.hired.i3")],
        },
      ]}
      importantNote={{
        title: t("commercialAuto.importantNote.title"),
        content: t("commercialAuto.importantNote.content"),
        items: [
          t("commercialAuto.importantNote.i1"),
          t("commercialAuto.importantNote.i2"),
          t("commercialAuto.importantNote.i3"),
          t("commercialAuto.importantNote.i4"),
          t("commercialAuto.importantNote.i5"),
        ],
      }}
      approach={{ intro: t("commercialAuto.approach.intro"), items: [t("commercialAuto.approach.i1"), t("commercialAuto.approach.i2"), t("commercialAuto.approach.i3")] }}
    />
  );
};

export default CommercialAuto;
