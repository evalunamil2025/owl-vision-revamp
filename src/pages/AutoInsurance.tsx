import { useTranslation } from "react-i18next";
import ServicePageLayout from "@/components/ServicePageLayout";
import owlieDriving from "@/assets/owlie-driving.png";

const AutoInsurance = () => {
  const { t } = useTranslation();

  return (
    <ServicePageLayout
      heroImage={owlieDriving}
      heroImageAlt={t("auto.heroImageAlt")}
      title={t("auto.title")}
      subtitle={t("auto.subtitle")}
      heroDescription={t("auto.heroDescription")}
      coverages={[
        {
          title: t("auto.coverages.liability.title"),
          description: t("auto.coverages.liability.description"),
          items: [
            t("auto.coverages.liability.i1"),
            t("auto.coverages.liability.i2"),
            t("auto.coverages.liability.i3"),
            t("auto.coverages.liability.i4"),
          ],
        },
        {
          title: t("auto.coverages.collision.title"),
          description: t("auto.coverages.collision.description"),
          items: [
            t("auto.coverages.collision.i1"),
            t("auto.coverages.collision.i2"),
            t("auto.coverages.collision.i3"),
            t("auto.coverages.collision.i4"),
          ],
        },
        {
          title: t("auto.coverages.comprehensive.title"),
          description: t("auto.coverages.comprehensive.description"),
          items: [
            t("auto.coverages.comprehensive.i1"),
            t("auto.coverages.comprehensive.i2"),
            t("auto.coverages.comprehensive.i3"),
            t("auto.coverages.comprehensive.i4"),
            t("auto.coverages.comprehensive.i5"),
          ],
        },
        {
          title: t("auto.coverages.umuim.title"),
          description: t("auto.coverages.umuim.description"),
          items: [
            t("auto.coverages.umuim.i1"),
            t("auto.coverages.umuim.i2"),
            t("auto.coverages.umuim.i3"),
            t("auto.coverages.umuim.i4"),
          ],
        },
        {
          title: t("auto.coverages.medpay.title"),
          description: t("auto.coverages.medpay.description"),
          items: [
            t("auto.coverages.medpay.i1"),
            t("auto.coverages.medpay.i2"),
            t("auto.coverages.medpay.i3"),
            t("auto.coverages.medpay.i4"),
          ],
        },
        {
          title: t("auto.coverages.pip.title"),
          description: t("auto.coverages.pip.description"),
          items: [
            t("auto.coverages.pip.i1"),
            t("auto.coverages.pip.i2"),
            t("auto.coverages.pip.i3"),
            t("auto.coverages.pip.i4"),
          ],
        },
        {
          title: t("auto.coverages.additional.title"),
          description: t("auto.coverages.additional.description"),
          items: [
            t("auto.coverages.additional.i1"),
            t("auto.coverages.additional.i2"),
            t("auto.coverages.additional.i3"),
            t("auto.coverages.additional.i4"),
            t("auto.coverages.additional.i5"),
          ],
        },
      ]}
      importantNote={{
        title: t("auto.importantNote.title"),
        content: t("auto.importantNote.content"),
        items: [
          t("auto.importantNote.i1"),
          t("auto.importantNote.i2"),
          t("auto.importantNote.i3"),
        ],
      }}
      approach={{
        intro: t("auto.approach.intro"),
        items: [
          t("auto.approach.i1"),
          t("auto.approach.i2"),
          t("auto.approach.i3"),
        ],
        closing: t("auto.approach.closing"),
      }}
    />
  );
};

export default AutoInsurance;
