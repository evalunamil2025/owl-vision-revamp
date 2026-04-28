import { useTranslation } from "react-i18next";
import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/hero-motorcycle.webp";

const MotorcycleInsurance = () => {
  const { t } = useTranslation();
  return (
    <ServicePageLayout
      title={t("motorcycle.title")}
      subtitle={t("motorcycle.subtitle")}
      heroDescription={t("motorcycle.heroDescription")}
      heroImage={heroImg}
      heroImageAlt={t("motorcycle.title")}
      coverages={[
        {
          title: t("motorcycle.coverages.liability.title"),
          description: t("motorcycle.coverages.liability.description"),
          items: [t("motorcycle.coverages.liability.i1"), t("motorcycle.coverages.liability.i2"), t("motorcycle.coverages.liability.i3")],
        },
        { title: t("motorcycle.coverages.collision.title"), description: t("motorcycle.coverages.collision.description") },
        {
          title: t("motorcycle.coverages.comprehensive.title"),
          description: t("motorcycle.coverages.comprehensive.description"),
          items: [
            t("motorcycle.coverages.comprehensive.i1"),
            t("motorcycle.coverages.comprehensive.i2"),
            t("motorcycle.coverages.comprehensive.i3"),
            t("motorcycle.coverages.comprehensive.i4"),
            t("motorcycle.coverages.comprehensive.i5"),
          ],
        },
        { title: t("motorcycle.coverages.medical.title"), description: t("motorcycle.coverages.medical.description") },
        { title: t("motorcycle.coverages.umuim.title"), description: t("motorcycle.coverages.umuim.description") },
        {
          title: t("motorcycle.coverages.additional.title"),
          description: t("motorcycle.coverages.additional.description"),
          items: [
            t("motorcycle.coverages.additional.i1"),
            t("motorcycle.coverages.additional.i2"),
            t("motorcycle.coverages.additional.i3"),
            t("motorcycle.coverages.additional.i4"),
            t("motorcycle.coverages.additional.i5"),
          ],
        },
      ]}
      importantNote={{ title: t("motorcycle.importantNote.title"), content: t("motorcycle.importantNote.content") }}
      approach={{ intro: t("motorcycle.approach.intro"), items: [t("motorcycle.approach.i1"), t("motorcycle.approach.i2"), t("motorcycle.approach.i3")] }}
    />
  );
};

export default MotorcycleInsurance;
