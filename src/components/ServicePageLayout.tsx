import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  ArrowRight, Phone, Shield, Sparkles, CheckCircle2, Search, ClipboardCheck, Settings2,
  Car, ShieldAlert, Users, HeartPulse, UserX, Stethoscope, LifeBuoy, Home, Sofa,
  Hotel, Scale, FileText, HandCoins, Coins, Building2, Briefcase, AlertTriangle,
  Wrench, Droplets, Anchor, Bike, Truck, Flame, Umbrella, Package, Cpu,
  Hammer, HardHat, Construction, UtensilsCrossed, Wine, BadgeCheck, Gavel, ScrollText,
  TrendingDown, Map, Zap, FileCheck, Award, LayoutGrid,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import RichText from "./RichText";
import SEO from "./SEO";
import heroBg from "@/assets/seattle-hero-bg.jpg";

// Map coverage titles to contextual icons
const ICON_MAP: { test: RegExp; icon: LucideIcon }[] = [
  { test: /collision/i, icon: Car },
  { test: /comprehensive/i, icon: ShieldAlert },
  { test: /uninsured|underinsured|motorist/i, icon: UserX },
  { test: /personal injury|pip/i, icon: Stethoscope },
  { test: /medical pay|medical exp/i, icon: HeartPulse },
  { test: /liquor/i, icon: Wine },
  { test: /liability|legal defense|legal cost|extended liability/i, icon: Scale },
  { test: /roadside|road protection|additional cover/i, icon: LifeBuoy },
  { test: /property protection|building protection|building cover|building &|building and/i, icon: Home },
  { test: /personal belong|contents|extras protection/i, icon: Sofa },
  { test: /temporary living|loss of use|living expense/i, icon: Hotel },
  { test: /family protection/i, icon: Users },
  { test: /final expense/i, icon: ScrollText },
  { test: /income replacement|loss of income|business interrupt/i, icon: TrendingDown },
  { test: /legacy/i, icon: HandCoins },
  { test: /term life/i, icon: FileText },
  { test: /permanent life/i, icon: Award },
  { test: /flood|water/i, icon: Droplets },
  { test: /physical damage|vehicle damage|structure protection|natural hazard|accidental damage/i, icon: ShieldAlert },
  { test: /tools|equipment|builders risk/i, icon: Wrench },
  { test: /commercial auto/i, icon: Truck },
  { test: /general liability|third-party injur|third-party prop/i, icon: Shield },
  { test: /inventory/i, icon: Package },
  { test: /systems|technology/i, icon: Cpu },
  { test: /equipment & furniture|business contents/i, icon: Briefcase },
  { test: /contract bond/i, icon: FileCheck },
  { test: /license|permit/i, icon: BadgeCheck },
  { test: /commercial surety/i, icon: Briefcase },
  { test: /court bond/i, icon: Gavel },
  { test: /subdivision/i, icon: Map },
  { test: /multi-policy/i, icon: LayoutGrid },
  { test: /accident coverage/i, icon: HeartPulse },
];

const getIcon = (title: string): LucideIcon => {
  const match = ICON_MAP.find((m) => m.test.test(title));
  return match ? match.icon : CheckCircle2;
};

interface CoverageItem {
  title: string;
  description: string;
  items?: string[];
}

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  heroDescription: string;
  coverages: CoverageItem[];
  importantNote?: {
    title: string;
    content: string;
    items?: string[];
  };
  approach?: {
    intro: string;
    items: string[];
    closing?: string;
  };
  additionalSections?: ReactNode;
  heroImage?: string;
  heroImageAlt?: string;
}

const ServicePageLayout = ({
  title,
  subtitle,
  heroDescription,
  coverages,
  importantNote,
  approach,
  additionalSections,
  heroImage,
  heroImageAlt,
}: ServicePageLayoutProps) => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={`${title} | Bringas Insurance Group`}
        description={(heroDescription || subtitle || title).replace(/\s+/g, " ").trim().slice(0, 155)}
        path={pathname}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: title,
          description: (heroDescription || subtitle || title).replace(/\s+/g, " ").trim(),
          url: `https://bringasinsurance.com${pathname}`,
          provider: {
            "@type": "InsuranceAgency",
            name: "Bringas Insurance Group",
            url: "https://bringasinsurance.com/",
            telephone: "+1-425-405-7111",
          },
          areaServed: ["Washington", "Oregon"],
        }}
      />
      <Navbar />

      {/* ─── HERO (Blue Gradient + Buttons) ─── */}
      <section className="relative pt-32 pb-48 overflow-hidden bg-[#015093]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage || heroBg}
            alt={heroImage ? (heroImageAlt || "") : ""}
            className={`w-full h-full object-cover ${heroImage ? "object-[85%_center]" : "object-center"}`}
          />
          {heroImage ? (
            <>
              <div className="absolute inset-0 bg-gradient-to-r from-[#015093]/70 via-[#015093]/40 to-[#015093]/20" />
              <div className="absolute inset-0 bg-[#001e2b]/15" />
            </>
          ) : (
            <>
              <div className="absolute inset-0 bg-[#015093]/80" />
              <div className="absolute inset-0 bg-[#001e2b]/20" />
            </>
          )}
        </div>

        {/* Decorative glow */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#0079c2]/20 rounded-full blur-[120px] animate-pulse z-0" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-[10px] font-black tracking-[0.4em] text-white uppercase font-heading">
                {t("service.brand")}
              </span>
            </div>

            <RichText
              as="h1"
              text={title}
              className="text-5xl md:text-7xl lg:text-[5rem] font-bold text-white tracking-tighter leading-[0.9] mb-10 font-heading"
            />

            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link
                to="/quote"
                className="px-10 py-5 bg-white text-[#00a651] rounded-full font-black text-[11px] uppercase tracking-[0.2em] shadow-xl shadow-black/10 hover:bg-[#00a651] hover:text-white transition-all flex items-center justify-center gap-2 group"
              >
                <Shield className="w-4 h-4" />
                {t("common.getFreeQuote")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+14254057111"
                className="px-10 py-5 bg-transparent border-2 border-white/30 text-white rounded-full font-black text-[11px] uppercase tracking-[0.2em] hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                <Phone className="w-4 h-4 text-[#00a651]" /> {t("common.phone")}
              </a>
            </div>
          </motion.div>
        </div>

        {/* SVG Wave divisor */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180 z-10">
          <svg className="relative block w-full h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V120C0,120,321.39,56.44,321.39,56.44Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* ─── INTRODUCTION SECTION — Premium Blue Statement ─── */}
      <section className="relative py-24 md:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-w-6xl mx-auto"
          >
            {/* Outer glow */}
            <div className="absolute -inset-6 bg-gradient-to-br from-[#0079c2]/20 via-transparent to-[#00a651]/20 rounded-[3.5rem] blur-2xl opacity-70" />

            {/* Main card */}
            <div className="relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-30px_rgba(1,80,147,0.55)]">
              {/* Gradient background using brand blue */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#012f57] via-[#015093] to-[#0079c2]" />

              {/* Decorative blurs */}
              <div className="absolute -top-32 -right-20 w-[480px] h-[480px] bg-[#0079c2]/40 rounded-full blur-[140px]" />
              <div className="absolute -bottom-40 -left-24 w-[420px] h-[420px] bg-[#00a651]/25 rounded-full blur-[140px]" />

              {/* Subtle grid */}
              <div
                className="absolute inset-0 opacity-[0.07] pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
                  backgroundSize: "56px 56px",
                }}
              />

              {/* Giant decorative quote glyph */}
              <span
                className="absolute -top-10 left-4 md:left-10 text-[16rem] md:text-[22rem] font-black font-heading leading-none text-white/[0.06] select-none pointer-events-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <div className="relative z-10 px-8 md:px-16 lg:px-20 py-16 md:py-24 text-center">
                {/* Eyebrow chip */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/10 border border-white/25 backdrop-blur-md mb-10"
                >
                  <span className="w-2 h-2 rounded-full bg-[#00a651] animate-pulse shadow-[0_0_12px_rgba(0,166,81,0.8)]" />
                  <RichText
                    as="span"
                    text={subtitle}
                    className="text-sm md:text-base font-black uppercase tracking-[0.25em] text-white font-heading"
                  />
                </motion.div>

                {/* Description */}
                <RichText
                  as="p"
                  text={heroDescription}
                  className="text-2xl md:text-3xl lg:text-[2.25rem] font-light text-white font-body leading-[1.45] tracking-tight max-w-4xl mx-auto"
                />

                {/* Bottom accent line */}
                <div className="flex items-center justify-center gap-3 mt-12">
                  <span className="h-px w-12 bg-white/30" />
                  <span className="w-2 h-2 rounded-full bg-[#00a651]" />
                  <span className="h-px w-12 bg-white/30" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── COVERAGES — Bento Magazine Layout ─── */}
      <section className="relative py-28 bg-[#f6f8fb] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#015093 1px, transparent 1px), linear-gradient(90deg, #015093 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute -top-32 -right-24 w-[480px] h-[480px] bg-[#00a651]/10 rounded-full blur-[140px]" />
        <div className="absolute -bottom-32 -left-24 w-[420px] h-[420px] bg-[#0079c2]/10 rounded-full blur-[140px]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-14">
              <div>
                <div className="inline-flex items-center gap-3 pl-2 pr-5 py-2 rounded-full bg-gradient-to-r from-[#00a651] to-[#0079c2] shadow-[0_12px_30px_-10px_rgba(0,166,81,0.55)] mb-7">
                  <span className="w-8 h-8 rounded-full bg-white/95 flex items-center justify-center shadow-inner">
                    <Shield className="w-4 h-4 text-[#00a651]" strokeWidth={2.4} />
                  </span>
                  <span className="text-sm md:text-[15px] font-black uppercase tracking-[0.28em] text-white font-heading">
                    {t("service.coverageDetails")}
                  </span>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-[#015093] tracking-tighter leading-[0.95] font-heading">
                  {t("service.whatsCoveredA")} <span className="text-[#00a651] italic font-light">{t("service.whatsCoveredB")}</span>
                </h2>
              </div>
              <div className="md:max-w-sm md:text-right">
                <div className="hidden md:flex items-center justify-end gap-2 mb-3">
                  <span className="h-px w-10 bg-[#00a651]" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#00a651] font-heading">
                    Overview
                  </span>
                </div>
                <p className="text-lg md:text-xl font-medium text-[#015093] font-body leading-snug">
                  {t("service.coverageBreakdown")}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
              {coverages.map((c, i) => {
                const themes = [
                  { bg: "bg-white", text: "text-[#015093]", sub: "text-[#015093]/70", accent: "#00a651", chip: "bg-[#00a651]/10 text-[#00a651]" },
                  { bg: "bg-[#015093]", text: "text-white", sub: "text-white/75", accent: "#ffffff", chip: "bg-white/15 text-white" },
                  { bg: "bg-white", text: "text-[#015093]", sub: "text-[#015093]/70", accent: "#0079c2", chip: "bg-[#0079c2]/10 text-[#0079c2]" },
                  { bg: "bg-[#00a651]", text: "text-white", sub: "text-white/85", accent: "#ffffff", chip: "bg-white/15 text-white" },
                ];
                const t = themes[i % themes.length];
                const isFeature = i % 5 === 0;
                const span = isFeature ? "md:col-span-4" : "md:col-span-2";

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: (i % 4) * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ scale: 1.03, y: -6 }}
                    className={`${span} ${t.bg} relative overflow-hidden rounded-[2rem] p-8 md:p-10 border border-black/5 shadow-[0_20px_50px_-25px_rgba(1,80,147,0.25)] hover:shadow-[0_40px_80px_-20px_rgba(1,80,147,0.45)] transition-shadow duration-500 group cursor-pointer`}
                  >
                    <span
                      className="absolute -top-6 -right-2 text-[9rem] font-black font-heading leading-none select-none pointer-events-none"
                      style={{ color: t.accent, opacity: 0.08 }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="flex items-center justify-between mb-6 relative z-10">
                      <div className="relative">
                        <div
                          className="absolute inset-0 rounded-2xl blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"
                          style={{ backgroundColor: t.accent }}
                        />
                        <div className={`relative w-14 h-14 rounded-2xl ${t.chip} flex items-center justify-center backdrop-blur-sm border border-white/20 group-hover:scale-110 group-hover:rotate-[-6deg] transition-transform duration-500`}>
                          {(() => {
                            const Ico = getIcon(c.title);
                            return <Ico className="w-6 h-6" strokeWidth={1.8} />;
                          })()}
                        </div>
                      </div>
                      <span className={`text-[10px] font-black uppercase tracking-[0.3em] font-heading ${t.sub}`}>
                        / {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <RichText
                      as="h3"
                      text={c.title}
                      className={`${isFeature ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"} font-bold ${t.text} font-heading tracking-tight leading-tight mb-3 relative z-10`}
                    />

                    <RichText
                      as="p"
                      text={c.description}
                      className={`text-sm md:text-[15px] ${t.sub} font-body leading-relaxed mb-5 relative z-10`}
                    />

                    {c.items && (
                      <div className="flex flex-wrap gap-2 relative z-10">
                        {c.items.map((item, j) => (
                          <span
                            key={j}
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold font-body ${t.chip}`}
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ backgroundColor: t.accent }}
                            />
                            <RichText text={item} />
                          </span>
                        ))}
                      </div>
                    )}

                    <div
                      className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500"
                      style={{ backgroundColor: t.accent }}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {additionalSections}

      {/* ─── IMPORTANT NOTE ─── */}
      {importantNote && (
        <section className="py-24 bg-[#f8fafb]">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto bg-white p-10 md:p-14 rounded-[3rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.06)] border border-[#0079c2]/10 relative overflow-hidden"
            >
              <div className="absolute top-[-30%] right-[-20%] w-64 h-64 bg-[#00a651]/10 rounded-full blur-[80px]" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#00a651]/10 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-[#00a651]" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#015093]/60 font-heading">
                    {t("service.important")}
                  </span>
                </div>
                <RichText
                  as="h3"
                  text={importantNote.title}
                  className="text-2xl md:text-3xl font-bold text-[#015093] tracking-tight mb-4 font-heading"
                />
                <RichText
                  as="p"
                  text={importantNote.content}
                  className="text-[#015093]/70 font-body leading-relaxed mb-6"
                />
                {importantNote.items && (
                  <ul className="space-y-3">
                    {importantNote.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#015093]/80 font-body">
                        <span className="w-2 h-2 rounded-full bg-[#00a651] mt-1.5 flex-shrink-0" />
                        <RichText text={item} />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ─── OUR APPROACH — Editorial Timeline ─── */}
      {approach && (
        <section className="relative py-32 bg-gradient-to-br from-[#012f57] via-[#015093] to-[#013a6b] overflow-hidden">
          {/* Backdrop decorations */}
          <div className="absolute top-[-15%] right-[-10%] w-[500px] h-[500px] bg-[#0079c2]/30 rounded-full blur-[140px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#00a651]/20 rounded-full blur-[120px]" />
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />

          <div className="container mx-auto px-6 max-w-6xl relative z-10">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-20">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
                <Sparkles className="w-3.5 h-3.5 text-[#00a651]" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/80 font-heading">
                  {t("service.process")}
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white font-heading mb-6 tracking-tighter leading-[0.95]">
                {t("service.ourApproachA")} <span className="text-[#00a651] italic font-light">{t("service.ourApproachB")}</span>
              </h2>
              <p className="text-white/70 font-body text-lg leading-relaxed">{approach.intro}</p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Connector line (desktop) */}
              <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-[2px]">
                <div className="w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-r from-[#00a651] via-white to-[#00a651] origin-left"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-10 md:gap-6 relative">
                {approach.items.map((item, i) => {
                  const StepIcon = [Search, ClipboardCheck, Settings2][i % 3];
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ y: -8 }}
                      className="group relative flex flex-col items-center text-center"
                    >
                      {/* Number badge */}
                      <div className="relative mb-8">
                        <div className="absolute inset-0 bg-[#00a651] rounded-full blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
                        <div className="relative w-[120px] h-[120px] rounded-full bg-gradient-to-br from-white to-white/90 flex items-center justify-center shadow-[0_20px_60px_-15px_rgba(0,166,81,0.6)] group-hover:scale-110 transition-transform duration-500">
                          <span className="absolute text-[5rem] font-black text-[#015093]/10 font-heading leading-none select-none">
                            {i + 1}
                          </span>
                          <StepIcon
                            className="w-10 h-10 text-[#00a651] relative z-10 group-hover:scale-110 transition-transform duration-500"
                            strokeWidth={1.8}
                          />
                        </div>
                        {/* Step label chip */}
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#00a651] shadow-lg">
                          <span className="text-[9px] font-black uppercase tracking-[0.25em] text-white font-heading whitespace-nowrap">
                            {t("service.step")} {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>
                      </div>

                      {/* Card */}
                      <div className="w-full bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 group-hover:bg-white/[0.08] group-hover:border-[#00a651]/40 transition-all duration-500 relative overflow-hidden">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-2/3 h-[2px] bg-[#00a651] transition-all duration-500" />
                        <RichText
                          as="h3"
                          text={item}
                          className="text-lg md:text-xl font-bold text-white font-heading leading-snug"
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {approach.closing && (
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mt-20 text-center text-white/70 font-body italic text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
              >
                "{approach.closing}"
              </motion.p>
            )}
          </div>
        </section>
      )}

      {/* ─── FINAL CTA (Green Gradient) ─── */}
      <section className="pb-24 bg-white pt-24">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-[#00a651] to-[#008f45] rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[80px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#015093]/10 blur-[60px] rounded-full" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-8 leading-[0.95] font-heading">
                {t("service.finalCtaTitleA")} <br /> <span className="text-white/80 italic font-light">{t("service.finalCtaTitleB")}</span>
              </h2>
              <p className="text-white/90 text-lg font-body font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                {t("service.finalCtaDesc")}
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Link
                  to="/quote"
                  className="px-12 py-6 bg-white text-[#00a651] rounded-full font-black text-[11px] uppercase tracking-[0.2em] shadow-xl shadow-black/10 hover:bg-[#015093] hover:text-white transition-all flex items-center justify-center gap-2 group"
                >
                  {t("common.getFreeQuote")}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+14254057111"
                  className="px-12 py-6 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-full font-black text-[11px] uppercase tracking-[0.2em] hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-white" /> {t("common.phone")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicePageLayout;
