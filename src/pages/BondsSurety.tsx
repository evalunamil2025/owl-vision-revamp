import { useTranslation } from "react-i18next";
import ServicePageLayout from "@/components/ServicePageLayout";

const BondsSurety = () => {
  const { t } = useTranslation();
  return (
    <ServicePageLayout
      title={t("bondsSurety.title")}
      subtitle={t("bondsSurety.subtitle")}
      heroDescription={t("bondsSurety.heroDescription")}
      coverages={[
        {
          title: t("bondsSurety.coverages.contract.title"),
          description: t("bondsSurety.coverages.contract.description"),
          items: [
            t("bondsSurety.coverages.contract.i1"),
            t("bondsSurety.coverages.contract.i2"),
            t("bondsSurety.coverages.contract.i3"),
            t("bondsSurety.coverages.contract.i4"),
          ],
        },
        {
          title: t("bondsSurety.coverages.license.title"),
          description: t("bondsSurety.coverages.license.description"),
          items: [
            t("bondsSurety.coverages.license.i1"),
            t("bondsSurety.coverages.license.i2"),
            t("bondsSurety.coverages.license.i3"),
            t("bondsSurety.coverages.license.i4"),
          ],
        },
        { title: t("bondsSurety.coverages.commercial.title"), description: t("bondsSurety.coverages.commercial.description") },
        { title: t("bondsSurety.coverages.court.title"), description: t("bondsSurety.coverages.court.description") },
        { title: t("bondsSurety.coverages.subdivision.title"), description: t("bondsSurety.coverages.subdivision.description") },
      ]}
      importantNote={{
        title: t("bondsSurety.importantNote.title"),
        content: t("bondsSurety.importantNote.content"),
        items: [
          t("bondsSurety.importantNote.i1"),
          t("bondsSurety.importantNote.i2"),
          t("bondsSurety.importantNote.i3"),
          t("bondsSurety.importantNote.i4"),
        ],
      }}
      approach={{ intro: t("bondsSurety.approach.intro"), items: [t("bondsSurety.approach.i1"), t("bondsSurety.approach.i2"), t("bondsSurety.approach.i3")] }}
    />
  );
};

export default BondsSurety;
