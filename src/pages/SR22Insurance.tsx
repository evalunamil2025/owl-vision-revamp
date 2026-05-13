import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  FileCheck2,
  Clock,
  Car,
  DollarSign,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Phone,
  Sparkles,
  FileText,
  Scale,
  ListChecks,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const reasons = [
  "Driving without valid auto insurance",
  "License suspension or revocation",
  "DUI or DWI-related offenses",
  "Multiple traffic violations",
  "At-fault accidents while uninsured",
  "Court or DMV orders requiring proof of financial responsibility",
];

const filingSteps = [
  { title: "Notification", text: "The court, DMV, or state agency notifies you that an SR-22 is required." },
  { title: "Contact a Provider", text: "Reach out to an insurance provider that offers SR-22 filing." },
  { title: "Qualifying Policy", text: "The insurer issues a qualifying policy or adds the filing to your existing one." },
  { title: "State Filing", text: "Your insurance company submits the SR-22 certificate to the state." },
  { title: "Stay Covered", text: "Maintain continuous coverage for the entire required period." },
];

const nonOwnerBenefits = [
  "You need to reinstate your license",
  "You do not currently own a car",
  "You occasionally drive a vehicle that belongs to someone else",
  "Your state requires proof of financial responsibility before restoring driving privileges",
];

const rateFactors = [
  "Your driving record",
  "The reason for the SR-22 requirement",
  "Your state",
  "Your age and location",
  "The vehicle you drive",
  "Your coverage limits",
  "The insurance company you choose",
];

const compliance = [
  "Pay your insurance bill on time",
  "Avoid coverage lapses",
  "Keep your address updated with your insurer and DMV",
  "Drive safely and avoid additional violations",
  "Confirm with your provider before changing or cancelling your policy",
  "Ask when your SR-22 requirement officially ends",
];

const SR22Insurance = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>SR-22 Insurance: Fast Filing, Affordable Coverage & License Reinstatement</title>
        <meta
          name="description"
          content="Need SR-22 insurance? Learn what an SR-22 is, when it's required, how filing works, and how to find affordable coverage to get back on the road legally."
        />
        <link rel="canonical" href="https://bringasinsurance.com/sr22-insurance" />
        <meta property="og:title" content="SR-22 Insurance: Fast Filing, Affordable Coverage & License Reinstatement" />
        <meta
          property="og:description"
          content="Need SR-22 insurance? Learn what an SR-22 is, when it's required, how filing works, and how to find affordable coverage to get back on the road legally."
        />
        <meta property="og:url" content="https://bringasinsurance.com/sr22-insurance" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0079c2] via-[#015093] to-[#012a4f] text-white">
        <div className="absolute inset-0 opacity-20" aria-hidden="true">
          <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-[#00a651] blur-3xl" />
          <div className="absolute -bottom-32 -right-32 w-[520px] h-[520px] rounded-full bg-[#0079c2] blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#7ee2a8]" />
              <span className="text-xs uppercase tracking-widest font-bold">SR-22 Filing Made Simple</span>
            </div>
            <h1 className="font-josefin font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              SR-22 Insurance: Get the Filing You Need and{" "}
              <span className="text-[#7ee2a8]">Drive Legally Again</span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 mb-8 leading-relaxed">
              Reinstate your license, meet state requirements, and get back to your routine — fast, affordable,
              and stress-free with Bringas Insurance Group.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/quote"
                className="inline-flex items-center gap-2 bg-[#00a651] hover:bg-[#00913f] text-white font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all"
              >
                Get My SR-22 Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+14254057111"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 text-white font-bold px-8 py-4 rounded-full transition-all"
              >
                <Phone className="w-5 h-5" />
                (425) 405-7111
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#00a651] flex items-center justify-center shadow-lg">
                  <FileCheck2 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#7ee2a8] font-bold">Certificate</p>
                  <p className="text-2xl font-josefin font-bold">SR-22 Filing</p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { icon: ShieldCheck, label: "State-compliant filing" },
                  { icon: Clock, label: "Fast turnaround" },
                  { icon: DollarSign, label: "Affordable rates" },
                  { icon: Car, label: "Owner & non-owner policies" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3">
                    <item.icon className="w-5 h-5 text-[#7ee2a8]" />
                    <span className="text-sm font-medium text-white/90">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Being told you need an SR-22 can feel stressful — especially if you're trying to reinstate your
              license, keep your job, or simply get back to your normal routine. The good news? With the right
              auto insurance policy and proper state filing, you can meet your requirement and move forward with
              confidence.
            </p>
            <p className="mt-6 text-lg text-slate-700 leading-relaxed">
              At <span className="font-bold text-[#0079c2]">Bringas Insurance Group</span>, we help drivers find
              affordable auto insurance options that include SR-22 filing when required.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHAT IS SR-22 */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#0079c2]/10 text-[#0079c2] px-4 py-2 rounded-full mb-4">
              <FileText className="w-4 h-4" />
              <span className="text-xs uppercase tracking-widest font-bold">The Basics</span>
            </div>
            <h2 className="font-josefin font-bold text-3xl md:text-4xl text-slate-900 mb-6">
              What Is SR-22 Insurance?
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Although many people call it "SR-22 insurance," an SR-22 is{" "}
              <span className="font-semibold text-slate-900">not actually a separate policy</span>. It's a
              certificate of financial responsibility filed by your insurance company with your state, confirming
              that you carry at least the minimum liability coverage required by law.
            </p>
            <p className="text-slate-600 leading-relaxed">
              In simple terms: the SR-22 tells the state, "this driver has active auto insurance and is maintaining
              the required coverage." A regular insurance card may not be enough if your state specifically
              requires an SR-22 certificate.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-[#0079c2] to-[#015093] rounded-3xl p-8 text-white shadow-2xl overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#00a651]/30 rounded-full blur-3xl" />
              <div className="relative">
                <ShieldCheck className="w-12 h-12 text-[#7ee2a8] mb-4" />
                <p className="text-xs uppercase tracking-widest text-[#7ee2a8] font-bold mb-2">Did You Know?</p>
                <p className="text-2xl font-josefin font-bold mb-3 leading-snug">
                  Most states require the filing to come directly from the insurance provider.
                </p>
                <p className="text-white/80 text-sm leading-relaxed">
                  For example, Texas DPS states that an insurance card or policy is not accepted in place of an
                  SR-22 when that filing is required.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY NEED IT */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-[#00a651]/10 text-[#00a651] px-4 py-2 rounded-full mb-4">
              <AlertTriangle className="w-4 h-4" />
              <span className="text-xs uppercase tracking-widest font-bold">Common Triggers</span>
            </div>
            <h2 className="font-josefin font-bold text-3xl md:text-4xl text-slate-900 mb-4">
              Why Would a Driver Need an SR-22?
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Requirements vary by state, but these are the most common reasons drivers are required to file an
              SR-22 certificate.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group bg-white p-6 rounded-2xl border border-slate-100 hover:border-[#0079c2]/30 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0079c2] to-[#015093] flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <p className="text-slate-700 font-medium leading-relaxed">{reason}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 max-w-4xl mx-auto bg-white border-l-4 border-[#00a651] p-6 rounded-r-2xl shadow-md"
          >
            <p className="text-slate-700 leading-relaxed">
              <span className="font-bold text-[#0079c2]">Note:</span> Some states may also require proof of future
              financial responsibility after insurance-related suspensions. Indiana's BMV, for example, notes that
              SR-22 filing may be required to regain driving privileges after certain suspensions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* HOW FILING WORKS */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <div className="inline-flex items-center gap-2 bg-[#0079c2]/10 text-[#0079c2] px-4 py-2 rounded-full mb-4">
              <ListChecks className="w-4 h-4" />
              <span className="text-xs uppercase tracking-widest font-bold">Step by Step</span>
            </div>
            <h2 className="font-josefin font-bold text-3xl md:text-4xl text-slate-900 mb-4">
              How Does SR-22 Filing Work?
            </h2>
            <p className="text-slate-600 leading-relaxed">
              The process usually starts with purchasing or updating an auto insurance policy. Once your policy
              is active, your insurance company files the SR-22 with the appropriate state agency.
            </p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0079c2] via-[#00a651] to-[#0079c2] -translate-x-1/2" />
            <div className="space-y-8">
              {filingSteps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`relative md:flex md:items-center md:gap-8 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="md:w-1/2">
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-3xl font-josefin font-bold text-[#00a651]">0{i + 1}</span>
                        <h3 className="font-josefin font-bold text-xl text-slate-900">{step.title}</h3>
                      </div>
                      <p className="text-slate-600 leading-relaxed">{step.text}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex md:w-12 md:h-12 absolute left-1/2 -translate-x-1/2 bg-white rounded-full border-4 border-[#0079c2] items-center justify-center shadow-lg">
                    <CheckCircle2 className="w-5 h-5 text-[#00a651]" />
                  </div>
                  <div className="md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 max-w-4xl mx-auto bg-amber-50 border border-amber-200 rounded-2xl p-6 flex gap-4"
          >
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-slate-700 leading-relaxed">
              <span className="font-bold text-amber-800">Important:</span> Don't let your policy lapse. Some states
              require insurers to notify the DMV if the SR-22 is cancelled, terminated, or lapses. In Texas, the
              provider automatically notifies the Department when that happens.
            </p>
          </motion.div>
        </div>
      </section>

      {/* DURATION & NON-OWNER side by side */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0079c2] to-[#015093] flex items-center justify-center mb-5 shadow-md">
              <Clock className="w-7 h-7 text-white" />
            </div>
            <h2 className="font-josefin font-bold text-2xl md:text-3xl text-slate-900 mb-4">
              How Long Do You Need an SR-22?
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Duration depends on your state and the reason for the requirement. Some drivers only need it for a
              shorter period; others may need to maintain it for several years.
            </p>
            <p className="text-slate-600 leading-relaxed">
              The key is <span className="font-bold text-[#0079c2]">continuous coverage</span>. Oregon DMV states
              that drivers must maintain the SR-22 filing until the requirement ends and that driving privileges
              can be suspended for failing to file it.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00a651] to-[#00913f] flex items-center justify-center mb-5 shadow-md">
              <Car className="w-7 h-7 text-white" />
            </div>
            <h2 className="font-josefin font-bold text-2xl md:text-3xl text-slate-900 mb-4">
              SR-22 Without Owning a Car?
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Yes — if you don't own a vehicle but still need to satisfy an SR-22 requirement, you may purchase a{" "}
              <span className="font-bold text-[#00a651]">non-owner SR-22 policy</span>.
            </p>
            <ul className="space-y-2">
              {nonOwnerBenefits.map((b) => (
                <li key={b} className="flex items-start gap-2 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-[#00a651] flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* COST */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-[#00a651]/10 text-[#00a651] px-4 py-2 rounded-full mb-4">
              <DollarSign className="w-4 h-4" />
              <span className="text-xs uppercase tracking-widest font-bold">What It Costs</span>
            </div>
            <h2 className="font-josefin font-bold text-3xl md:text-4xl text-slate-900 mb-4">
              Is SR-22 Insurance Expensive?
            </h2>
            <p className="text-slate-600 leading-relaxed">
              The filing itself is usually small. The bigger expense comes from the premium, since drivers needing
              an SR-22 may be considered higher risk. Your final rate depends on several factors:
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rateFactors.map((factor, i) => (
              <motion.div
                key={factor}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="flex items-center gap-3 bg-gradient-to-br from-slate-50 to-blue-50/50 p-4 rounded-xl border border-slate-100"
              >
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm flex-shrink-0">
                  <span className="font-josefin font-bold text-[#0079c2]">{i + 1}</span>
                </div>
                <span className="text-slate-700 font-medium text-sm">{factor}</span>
              </motion.div>
            ))}
          </div>

          <p className="text-center mt-8 text-slate-600 max-w-2xl mx-auto">
            The best way to find a better rate is to{" "}
            <span className="font-bold text-[#0079c2]">compare multiple options</span>. Not every insurance company
            handles SR-22 filings, and prices can vary significantly.
          </p>
        </div>
      </section>

      {/* SR-22 vs FR-44 */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-[#015093] to-[#012a4f] text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 px-4 py-2 rounded-full mb-4">
              <Scale className="w-4 h-4 text-[#7ee2a8]" />
              <span className="text-xs uppercase tracking-widest font-bold">Know the Difference</span>
            </div>
            <h2 className="font-josefin font-bold text-3xl md:text-4xl mb-4">SR-22 vs. FR-44</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-7">
              <h3 className="font-josefin font-bold text-2xl text-[#7ee2a8] mb-3">SR-22</h3>
              <p className="text-white/85 leading-relaxed">
                Standard certificate of financial responsibility. Confirms you carry at least the minimum liability
                coverage required by your state.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-7">
              <h3 className="font-josefin font-bold text-2xl text-[#7ee2a8] mb-3">FR-44</h3>
              <p className="text-white/85 leading-relaxed">
                Used in states like Virginia for certain serious convictions, including DUI. The Virginia DMV
                states FR-44 liability limits are <span className="font-bold">double</span> the SR-22 limits.
              </p>
            </div>
          </div>

          <p className="text-center mt-8 text-white/80">
            Rules vary by state — confirm whether you need an SR-22, FR-44, or another type of filing.
          </p>
        </div>
      </section>

      {/* COMPLIANCE CHECKLIST */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-[#0079c2]/10 text-[#0079c2] px-4 py-2 rounded-full mb-4">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-xs uppercase tracking-widest font-bold">Stay Compliant</span>
            </div>
            <h2 className="font-josefin font-bold text-3xl md:text-4xl text-slate-900 mb-4">
              Keep Your SR-22 in Good Standing
            </h2>
            <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Once filed, the most important thing is to keep your policy active. Missing payments or cancelling
              coverage too early can create more problems with your license.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {compliance.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-start gap-4 bg-gradient-to-br from-white to-slate-50 p-5 rounded-2xl border border-slate-100 hover:border-[#00a651]/40 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-[#00a651]/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-[#00a651]" />
                </div>
                <p className="text-slate-700 font-medium leading-relaxed pt-1.5">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-br from-[#00a651] via-[#00913f] to-[#007a35] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-josefin font-bold text-3xl md:text-5xl mb-6">
              Get Help With SR-22 Filing Today
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed">
              Needing an SR-22 doesn't mean you're out of options. Bringas Insurance Group helps drivers find
              auto insurance policies that meet state requirements — including SR-22 filing when needed.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/quote"
                className="inline-flex items-center gap-2 bg-white text-[#00a651] hover:bg-slate-100 font-bold px-10 py-4 rounded-full shadow-2xl hover:-translate-y-0.5 transition-all"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+14254057111"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur border-2 border-white/40 text-white font-bold px-10 py-4 rounded-full transition-all"
              >
                <Phone className="w-5 h-5" />
                Call (425) 405-7111
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SR22Insurance;
