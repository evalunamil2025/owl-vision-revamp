import { useTranslation } from "react-i18next";
import { MessageCircleQuestion } from "lucide-react";

const answerKeys = ["what", "services", "spanish", "quote"] as const;

const AIAnswers = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-slate-50 py-20 md:py-24" aria-labelledby="bringas-answers-title">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#0079c2]/10 px-4 py-2 text-[#015093]">
              <MessageCircleQuestion className="h-4 w-4" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-[0.18em]">{t("aiAnswers.eyebrow")}</span>
            </div>
            <h2 id="bringas-answers-title" className="font-heading text-3xl font-bold text-[#012f57] md:text-5xl">
              {t("aiAnswers.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
              {t("aiAnswers.intro")}
            </p>
          </div>

          <dl className="grid gap-5 md:grid-cols-2">
            {answerKeys.map((key) => (
              <div key={key} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xs">
                <dt className="font-heading text-xl font-bold text-[#015093]">
                  {t(`aiAnswers.items.${key}.question`)}
                </dt>
                <dd className="mt-3 leading-relaxed text-slate-700">
                  {t(`aiAnswers.items.${key}.answer`)}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default AIAnswers;
