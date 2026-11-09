import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, LoaderCircle, Mail, Phone, Send, User } from "lucide-react";
import { useTranslation } from "react-i18next";

const CONTACT_API_URL =
  import.meta.env["VITE_CONTACT_API_URL"] || "/api/contact";

type SubmissionState = "idle" | "sending" | "success" | "error";

interface ServiceLeadFormProps {
  serviceTitle: string;
  pathname: string;
}

const getInterest = (pathname: string) => {
  if (pathname.includes("auto") || pathname.includes("motorcycle") || pathname.includes("boat") || pathname.includes("rv") || pathname.includes("sr22")) return "auto";
  if (pathname.includes("home") || pathname.includes("renters") || pathname.includes("landlord") || pathname.includes("umbrella")) return "home";
  if (pathname.includes("life")) return "life";
  return "business";
};

const ServiceLeadForm = ({ serviceTitle, pathname }: ServiceLeadFormProps) => {
  const { t } = useTranslation();
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmissionState("sending");
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
          email: formData.get("email"),
          interest: getInterest(pathname),
          message: `${t("service.form.messagePrefix")}: ${serviceTitle} (${pathname})`,
          website: formData.get("website"),
          locale: document.documentElement.lang || "en",
          submissionId: crypto.randomUUID(),
        }),
      });

      const result = await response.json().catch(() => null);
      if (!response.ok || result?.ok !== true) throw new Error("Lead request failed");
      form.reset();
      setSubmissionState("success");
    } catch {
      setSubmissionState("error");
    }
  };

  const fields = [
    { name: "name", type: "text", autoComplete: "name", icon: User, label: t("service.form.name"), placeholder: t("service.form.namePlaceholder"), maxLength: 100 },
    { name: "phone", type: "tel", autoComplete: "tel", icon: Phone, label: t("service.form.phone"), placeholder: t("service.form.phonePlaceholder"), maxLength: 30 },
    { name: "email", type: "email", autoComplete: "email", icon: Mail, label: t("service.form.email"), placeholder: t("service.form.emailPlaceholder"), maxLength: 254 },
  ];

  return (
    <section className="relative z-20 bg-white px-6 pb-16 md:pb-24" aria-labelledby="service-lead-form-title">
      <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.15 }} className="container mx-auto -mt-8 max-w-6xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#0079c2]/15 bg-white shadow-[0_30px_80px_-24px_rgba(1,80,147,0.35)] md:rounded-[2.75rem]">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#00a651] via-[#0079c2] to-[#015093]" />
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#00a651]/10 blur-3xl" aria-hidden="true" />

          <div className="relative p-6 md:p-10 lg:p-12">
            <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#00a651]/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#008f45] font-heading">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#00a651]" /> {t("service.form.badge")}
                </span>
                <h2 id="service-lead-form-title" className="text-3xl font-bold tracking-tight text-[#015093] font-heading md:text-4xl">{t("service.form.title")}</h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-[#015093]/65 font-body md:text-right md:text-base">{t("service.form.description")}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
                <label htmlFor="service-website">Website</label>
                <input id="service-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {fields.map(({ icon: Icon, ...field }) => (
                  <div key={field.name} className="space-y-2">
                    <label htmlFor={`service-${field.name}`} className="ml-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#015093]/70 font-heading">{field.label}</label>
                    <div className="group relative">
                      <Icon className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#0079c2] transition-colors group-focus-within:text-[#00a651]" aria-hidden="true" />
                      <input id={`service-${field.name}`} name={field.name} type={field.type} autoComplete={field.autoComplete} required maxLength={field.maxLength} placeholder={field.placeholder} className="h-16 w-full rounded-2xl border border-[#0079c2]/15 bg-[#f6f9fc] pl-14 pr-5 text-[#015093] outline-hidden transition-all placeholder:text-[#015093]/35 focus:border-[#00a651] focus:bg-white focus:ring-4 focus:ring-[#00a651]/10 font-body" />
                    </div>
                  </div>
                ))}
              </div>

              <button type="submit" disabled={submissionState === "sending"} className="group flex min-h-16 w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#00a651] to-[#008f45] px-8 py-5 text-[11px] font-black uppercase tracking-[0.22em] text-white shadow-[0_16px_35px_-12px_rgba(0,166,81,0.75)] transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_45px_-12px_rgba(0,166,81,0.85)] focus-visible:outline-hidden focus-visible:ring-4 focus-visible:ring-[#00a651]/30 disabled:cursor-not-allowed disabled:opacity-60 md:ml-auto md:w-auto font-heading">
                {submissionState === "sending" ? <LoaderCircle className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />}
                {submissionState === "sending" ? t("service.form.sending") : t("service.form.submit")}
              </button>

              <div aria-live="polite" aria-atomic="true">
                {submissionState === "success" && <p role="status" className="flex items-center gap-2 rounded-2xl bg-[#00a651]/10 px-5 py-4 text-sm font-semibold text-[#007a3c]"><CheckCircle2 className="h-5 w-5 shrink-0" /> {t("service.form.success")}</p>}
                {submissionState === "error" && <p role="alert" className="flex items-center gap-2 rounded-2xl bg-red-50 px-5 py-4 text-sm font-semibold text-red-700"><AlertCircle className="h-5 w-5 shrink-0" /> {t("service.form.error")}</p>}
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ServiceLeadForm;
