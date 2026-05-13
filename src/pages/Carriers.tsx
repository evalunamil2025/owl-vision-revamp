import { motion } from "framer-motion";
import { Phone, ArrowRight, Sparkles, ExternalLink, FileText, CreditCard, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import contactHeroBg from "@/assets/seattle-hero-bg.jpg";

import progressive from "@/assets/images/carriers/progressive.png";
import nationalGeneral from "@/assets/images/carriers/national-general.jpg";
import dairyland from "@/assets/images/carriers/dairyland.png";
import safeco from "@/assets/images/carriers/safeco.jpg";
import travelers from "@/assets/images/carriers/travelers.jpg";
import bristolWest from "@/assets/images/carriers/bristol-west.png";
import foremost from "@/assets/images/carriers/foremost.png";
import btis from "@/assets/images/carriers/btis.png";
import nationwide from "@/assets/images/carriers/nationwide.jpg";

interface InfoItem {
  phone?: string;
  phoneHref?: string;
  linkLabel?: string;
  linkHref?: string;
}

interface Carrier {
  name: string;
  logo: string;
  website: string;
  service: InfoItem;
  billing: InfoItem;
  claims: InfoItem;
}

const carriers: Carrier[] = [
  {
    name: "Progressive",
    logo: progressive,
    website: "https://www.progressive.com/",
    service: { phone: "866-407-4844", phoneHref: "tel:+18664074844", linkLabel: "Visit Website", linkHref: "https://www.progressive.com/" },
    billing: { phone: "866-407-4844", phoneHref: "tel:+18664074844", linkLabel: "Make Payment", linkHref: "https://account.progressive.com/access/ez-payment/policy-info" },
    claims: { phone: "866-407-4844", phoneHref: "tel:+18664074844", linkLabel: "Submit Claim", linkHref: "https://www.progressive.com/claims/" },
  },
  {
    name: "National General",
    logo: nationalGeneral,
    website: "https://www.nationalgeneral.com/",
    service: { linkLabel: "Customer Service", linkHref: "https://www.nationalgeneral.com/Contact/CustomerService.asp" },
    billing: { phone: "888-293-5108", phoneHref: "tel:+18882935108", linkLabel: "Make Payment", linkHref: "https://www.mynatgenpolicy.com/Pay" },
    claims: { phone: "888-325-1190", phoneHref: "tel:+18883251190", linkLabel: "Submit Claim", linkHref: "https://www.nationalgeneral.com/claims-center/default.asp" },
  },
  {
    name: "Dairyland",
    logo: dairyland,
    website: "https://www.dairylandinsurance.com/",
    service: { phone: "800-334-0090", phoneHref: "tel:+18003340090", linkLabel: "Visit Website", linkHref: "https://www.dairylandinsurance.com/" },
    billing: { phone: "800-334-0090", phoneHref: "tel:+18003340090", linkLabel: "Make Payment", linkHref: "https://account.progressive.com/access/ez-payment/policy-info" },
    claims: { phone: "800-334-0090", phoneHref: "tel:+18003340090", linkLabel: "Submit Claim", linkHref: "https://www.dairylandinsurance.com/contact-us/file-claim" },
  },
  {
    name: "Safeco",
    logo: safeco,
    website: "https://www.safeco.com/",
    service: { phone: "800-332-3226", phoneHref: "tel:+18003323226", linkLabel: "Customer Service", linkHref: "https://customer.safeco.com/accountservices/login.aspx" },
    billing: { phone: "888-723-3260", phoneHref: "tel:+18887233260", linkLabel: "Make Payment", linkHref: "https://www.safeco.com/customer-resources/customer-support/billing-and-payment" },
    claims: { phone: "800-332-3226", phoneHref: "tel:+18003323226", linkLabel: "Submit Claim", linkHref: "https://www.safeco.com/claims" },
  },
  {
    name: "Travelers",
    logo: travelers,
    website: "https://www.travelers.com/",
    service: { linkLabel: "Visit Website", linkHref: "https://www.travelers.com/" },
    billing: { phone: "800-252-2268", phoneHref: "tel:+18002522268", linkLabel: "Make Payment", linkHref: "https://www.travelers.com/online-service" },
    claims: { phone: "800-238-6225", phoneHref: "tel:+18002386225", linkLabel: "Submit Claim", linkHref: "https://www.travelers.com/claims/report-claim/index" },
  },
  {
    name: "Bristol West",
    logo: bristolWest,
    website: "https://www.bristolwest.com/",
    service: { phone: "888-888-0080", phoneHref: "tel:+18888880080", linkLabel: "Visit Website", linkHref: "https://www.bristolwest.com/" },
    billing: { phone: "888-888-0080", phoneHref: "tel:+18888880080", linkLabel: "Make Payment", linkHref: "https://www.bristolwest.com/nologin?type=pay" },
    claims: { phone: "800-274-7865", phoneHref: "tel:+18002747865", linkLabel: "Submit Claim", linkHref: "https://www.bristolwest.com/nologin?type=claims" },
  },
  {
    name: "Foremost Insurance",
    logo: foremost,
    website: "https://www.foremost.com/",
    service: { phone: "800-527-3905", phoneHref: "tel:+18005273905", linkLabel: "Visit Website", linkHref: "https://www.foremost.com/" },
    billing: { phone: "888-383-4244", phoneHref: "tel:+18883834244", linkLabel: "Make Payment", linkHref: "https://www.foremost.com/payonline/" },
    claims: { phone: "800-527-3907", phoneHref: "tel:+18005273907", linkLabel: "Submit Claim", linkHref: "https://www.foremost.com/claims" },
  },
  {
    name: "BTIS",
    logo: btis,
    website: "https://btisinc.com/",
    service: { phone: "877-585-2853", phoneHref: "tel:+18775852853", linkLabel: "Visit Website", linkHref: "https://btisinc.com/" },
    billing: { phone: "877-585-2853", phoneHref: "tel:+18775852853", linkLabel: "Make Payment", linkHref: "https://btisinc.com/contact/" },
    claims: { phone: "877-585-2853", phoneHref: "tel:+18775852853", linkLabel: "Report a Claim", linkHref: "https://btisinc.com/contact/" },
  },
  {
    name: "Nationwide Insurance",
    logo: nationwide,
    website: "https://www.nationwide.com/",
    service: { phone: "877-669-6877", phoneHref: "tel:+18776696877", linkLabel: "Customer Service", linkHref: "https://www.nationwide.com/personal/contact-us/" },
    billing: { phone: "888-891-0102", phoneHref: "tel:+18888910102", linkLabel: "Make Payment", linkHref: "https://myservicing.nationwide.com/#/personal/quickpay/search" },
    claims: { phone: "800-421-3535", phoneHref: "tel:+18004213535", linkLabel: "Submit Claim", linkHref: "https://www.nationwide.com/personal/claims/" },
  },
];

const InfoCell = ({ item, accentIcon: Icon }: { item: InfoItem; accentIcon: typeof Phone }) => (
  <div className="space-y-2">
    {item.phone && (
      <a
        href={item.phoneHref}
        className="flex items-center gap-2 text-[#015093] font-bold text-sm hover:text-[#00a651] transition-colors"
      >
        <Phone className="w-3.5 h-3.5 text-[#00a651] flex-shrink-0" />
        {item.phone}
      </a>
    )}
    {item.linkLabel && item.linkHref && (
      <a
        href={item.linkHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0079c2] hover:text-[#00a651] transition-colors"
      >
        <Icon className="w-3.5 h-3.5" />
        {item.linkLabel}
        <ExternalLink className="w-3 h-3" />
      </a>
    )}
  </div>
);

const Carriers = () => {
  return (
    <div className="min-h-screen bg-white">
      <title>Insurance Carriers | Bringas Insurance Group</title>
      <meta
        name="description"
        content="Carrier library for Bringas Insurance Group. Contact, billing and claims information for Progressive, National General, Dairyland, Safeco, Travelers, Bristol West, Foremost, BTIS and Nationwide."
      />

      <Navbar />

      {/* HERO */}
      <section className="relative pt-32 pb-48 overflow-hidden bg-[#015093]">
        <div className="absolute inset-0 z-0">
          <img src={contactHeroBg} alt="Seattle Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#015093]/95 via-[#015093]/90 to-[#0079c2]/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-[#001e2b]/40" />
        </div>

        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#00a651]/20 rounded-full blur-[120px] animate-pulse z-0" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8">
              <Sparkles className="w-4 h-4 text-[#00a651]" />
              <span className="text-[10px] font-black tracking-[0.4em] text-white uppercase">Carrier Library</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-bold text-white tracking-tighter leading-[0.9] mb-8 font-heading">
              Insurance Companies
            </h1>

            <p className="text-lg md:text-xl text-white/90 font-body font-light max-w-2xl mx-auto mb-10 leading-relaxed">
              The carriers we partner with so you always get the right coverage at the right price.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180 z-10">
          <svg className="relative block w-full h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V120C0,120,321.39,56.44,321.39,56.44Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>

      {/* INTRO CARD */}
      <section className="pb-12 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto -translate-y-24 bg-white p-8 md:p-12 rounded-[2.5rem] border border-[#0079c2]/10 shadow-xl shadow-[#0079c2]/5 relative z-20"
          >
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 flex-shrink-0 bg-[#00a651]/10 rounded-2xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-[#00a651]" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#015093] tracking-tight mb-3 font-heading">
                  Some of the insurance companies we represent
                </h2>
                <p className="text-[#015093]/70 font-body leading-relaxed">
                  Below is a list of some of the insurance companies we represent. If you need to contact them, make a
                  payment, request customer support, or anything else, please use the information listed. If you don't
                  see your carrier here,{" "}
                  <Link to="/contact" className="text-[#00a651] font-bold hover:underline">
                    contact us
                  </Link>{" "}
                  or call{" "}
                  <a href="tel:+14254057111" className="text-[#00a651] font-bold hover:underline">
                    (425) 405-7111
                  </a>
                  .
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CARRIERS TABLE - Desktop */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="hidden lg:block bg-white rounded-[2rem] border border-[#0079c2]/10 shadow-xl shadow-[#0079c2]/5 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-[#015093] to-[#0079c2]">
                <tr>
                  <th className="text-left px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-white w-[180px]">
                    Logo
                  </th>
                  <th className="text-left px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-white">
                    Carrier Name
                  </th>
                  <th className="text-left px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-white">
                    Service Information
                  </th>
                  <th className="text-left px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-white">
                    Billing Information
                  </th>
                  <th className="text-left px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-white">
                    Claims Information
                  </th>
                </tr>
              </thead>
              <tbody>
                {carriers.map((c, i) => (
                  <tr
                    key={c.name}
                    className={`border-t border-[#0079c2]/10 hover:bg-[#0079c2]/[0.03] transition-colors ${
                      i % 2 === 1 ? "bg-[#0079c2]/[0.015]" : ""
                    }`}
                  >
                    <td className="px-6 py-6 align-middle">
                      <a href={c.website} target="_blank" rel="noopener noreferrer" className="block">
                        <img
                          src={c.logo}
                          alt={c.name}
                          loading="lazy"
                          className="h-14 w-auto max-w-[140px] object-contain hover:scale-105 transition-transform"
                        />
                      </a>
                    </td>
                    <td className="px-6 py-6 align-middle">
                      <a
                        href={c.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-[#015093] hover:text-[#00a651] transition-colors text-base font-heading"
                      >
                        {c.name}
                      </a>
                    </td>
                    <td className="px-6 py-6 align-middle">
                      <InfoCell item={c.service} accentIcon={ShieldCheck} />
                    </td>
                    <td className="px-6 py-6 align-middle">
                      <InfoCell item={c.billing} accentIcon={CreditCard} />
                    </td>
                    <td className="px-6 py-6 align-middle">
                      <InfoCell item={c.claims} accentIcon={FileText} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile/Tablet Cards */}
          <div className="lg:hidden grid sm:grid-cols-2 gap-6">
            {carriers.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="bg-white border border-[#0079c2]/10 rounded-[1.75rem] p-6 shadow-lg shadow-[#0079c2]/5"
              >
                <div className="h-20 flex items-center justify-center mb-4">
                  <img src={c.logo} alt={c.name} loading="lazy" className="max-h-16 w-auto object-contain" />
                </div>
                <h3 className="text-lg font-bold text-[#015093] text-center mb-5 font-heading">
                  <a href={c.website} target="_blank" rel="noopener noreferrer" className="hover:text-[#00a651] transition-colors">
                    {c.name}
                  </a>
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#00a651] mb-2">Service</p>
                    <InfoCell item={c.service} accentIcon={ShieldCheck} />
                  </div>
                  <div className="pt-4 border-t border-[#0079c2]/10">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#00a651] mb-2">Billing</p>
                    <InfoCell item={c.billing} accentIcon={CreditCard} />
                  </div>
                  <div className="pt-4 border-t border-[#0079c2]/10">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#00a651] mb-2">Claims</p>
                    <InfoCell item={c.claims} accentIcon={FileText} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-[#015093] to-[#003f5e] rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#00a651]/10 blur-[80px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0079c2]/10 blur-[60px] rounded-full" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter mb-6 leading-[1.05] font-heading">
                Get Insurance
              </h2>
              <p className="text-white/90 text-lg font-body font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                Our knowledgeable agents are experts at finding the right coverage for your family or business. Start
                your insurance quote today.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Link
                  to="/quote"
                  className="px-12 py-6 bg-[#00a651] text-white rounded-full font-black text-[11px] uppercase tracking-[0.2em] shadow-xl shadow-[#00a651]/30 hover:bg-white hover:text-[#015093] transition-all flex items-center justify-center gap-2 group"
                >
                  Get Insurance Quote
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+14254057111"
                  className="px-12 py-6 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-full font-black text-[11px] uppercase tracking-[0.2em] hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#00a651]" /> (425) 405-7111
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

export default Carriers;
