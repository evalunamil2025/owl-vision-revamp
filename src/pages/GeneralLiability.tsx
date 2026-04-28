import { useTranslation } from "react-i18next";
import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/hero-general-liability.webp";

const GeneralLiability = () => {
  const { t } = useTranslation();
  return (
    <ServicePageLayout
      title={t("generalLiability.title")}
      subtitle={t("generalLiability.subtitle")}
      heroDescription={t("generalLiability.heroDescription")}
      heroImage={heroImg}
      heroImageAlt={t("generalLiability.title")}
      coverages={[
        {
          title: t("generalLiability.coverages.bodily.title"),
          description: t("generalLiability.coverages.bodily.description"),
          items: [
            t("generalLiability.coverages.bodily.i1"),
            t("generalLiability.coverages.bodily.i2"),
            t("generalLiability.coverages.bodily.i3"),
            t("generalLiability.coverages.bodily.i4"),
          ],
        },
        { title: t("generalLiability.coverages.property.title"), description: t("generalLiability.coverages.property.description") },
        {
          title: t("generalLiability.coverages.personal.title"),
          description: t("generalLiability.coverages.personal.description"),
          items: [
            t("generalLiability.coverages.personal.i1"),
            t("generalLiability.coverages.personal.i2"),
            t("generalLiability.coverages.personal.i3"),
            t("generalLiability.coverages.personal.i4"),
          ],
        },
        { title: t("generalLiability.coverages.products.title"), description: t("generalLiability.coverages.products.description") },
        {
          title: t("generalLiability.coverages.defense.title"),
          description: t("generalLiability.coverages.defense.description"),
          items: [
            t("generalLiability.coverages.defense.i1"),
            t("generalLiability.coverages.defense.i2"),
            t("generalLiability.coverages.defense.i3"),
            t("generalLiability.coverages.defense.i4"),
          ],
        },
      ]}
      importantNote={{ title: t("generalLiability.importantNote.title"), content: t("generalLiability.importantNote.content") }}
      approach={{
        intro: t("generalLiability.approach.intro"),
        items: [t("generalLiability.approach.i1"), t("generalLiability.approach.i2"), t("generalLiability.approach.i3")],
        closing: t("generalLiability.approach.closing"),
      }}
    />
  );
};

export default GeneralLiability;
