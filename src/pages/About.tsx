import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Eye, Heart, Users, Sparkles, ArrowRight, ShieldCheck, Headphones } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import mascot from "@/assets/owlie-mascot.png";
import aboutHeroBg from "@/assets/seattle-hero-bg.jpg";

const About = () => {
  // Estilo de badge superior (Aquos Style)
  const badgeStyle =
    "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8";

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* --- HERO SECTION (Estilo Aquos con curvas profundas) --- */}
      <section className="relative pt-32 pb-48 overflow-hidden bg-[#015093]">
        <div className="absolute inset-0 z-0">
          <img src={aboutHeroBg} alt="Our Vision" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#015093]/95 via-[#015093]/90 to-[#0079c2]/80 mix-blend-multiply" />
        </div>

        {/* Glow decorativo verde */}
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#00a651]/15 rounded-full blur-[120px] animate-pulse z-0" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className={badgeStyle}>
              <Sparkles className="w-4 h-4 text-[#00a651]" />
              <span className="text-[10px] font-black tracking-[0.4em] text-white uppercase font-heading">
                Peace · Security · Smiles
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-bold text-white tracking-tighter leading-[0.9] mb-8 font-heading">
              More than insurance, <br />
              <span className="text-[#00a651] font-light italic text-4xl md:text-6xl">we provide peace of mind</span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 font-body font-light max-w-2xl mx-auto leading-relaxed">
              That's what drives us every day: ensuring you can live with the confidence that you're protected, without
              losing your joy.
            </p>
          </motion.div>
        </div>

        {/* Divisor Wave SVG */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180 z-10">
          <svg className="relative block w-full h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V120C0,120,321.39,56.44,321.39,56.44Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>

      {/* --- SECCIÓN VISIÓN (2 Columnas con Mascota) --- */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center -translate-y-12 relative z-20">
            {/* Columna Texto */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-14 rounded-[3rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] border border-[#0079c2]/5"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#00a651]/10 rounded-xl flex items-center justify-center">
                  <Eye className="w-5 h-5 text-[#00a651]" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#015093]/60 font-heading">
                  Our Vision
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[#015093] tracking-tight mb-6 font-heading">
                Financial peace shouldn't be an empty promise
              </h2>

              <div className="space-y-4 font-body text-[#015093]/80 leading-relaxed">
                <p>
                  We believe financial peace of mind should be an everyday reality. Our vision is simple: that you and
                  your family live with the confidence that you're protected, without losing joy or good humor.
                </p>
                <p className="bg-[#0079c2]/5 p-6 rounded-2xl border-l-4 border-[#00a651] italic">
                  "Studies show that 69% of people with life insurance feel less stressed knowing their family is
                  protected."
                </p>
                <p>
                  We turn insurance into a tool for your emotional wellbeing, explaining every detail without the boring
                  jargon.
                </p>
              </div>
            </motion.div>

            {/* Columna Mascota */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex justify-center relative"
            >
              <div className="absolute w-[80%] h-[80%] bg-[#00a651]/5 rounded-full blur-3xl" />
              <img
                src={mascot}
                alt="Owlie mascot"
                className="relative w-64 md:w-80 drop-shadow-[0_35px_35px_rgba(0,0,0,0.2)] hover:rotate-3 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- CARDS DE VALORES (3 Columnas) --- */}
      <section className="py-24 bg-[#f8fafb]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#015093] font-heading mb-4">What makes us different</h2>
            <p className="text-[#015093]/60 font-body">
              Independence, transparency, and a deep connection to our community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Personalized Care",
                desc: "Independent and objective advice tailored to your priorities — not a single company's agenda.",
              },
              {
                icon: Users,
                title: "Community First",
                desc: "Bilingual, local, and deeply connected to the Hispanic community. We speak your language.",
              },
              {
                icon: ShieldCheck,
                title: "Transparent Always",
                desc: "We explain everything without jargon. You'll always know what you're paying for and why.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[2.5rem] border border-[#0079c2]/5 shadow-xl shadow-[#0079c2]/5 flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 bg-[#015093]/5 rounded-3xl flex items-center justify-center mb-6 group-hover:bg-[#015093] transition-colors">
                  <item.icon className="w-8 h-8 text-[#0079c2] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-[#015093] mb-4 font-heading">{item.title}</h3>
                <p className="text-[#015093]/70 font-body text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECCIÓN NUESTRO EQUIPO (Full Width Rounded) --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2">
              <div className="relative rounded-[3rem] overflow-hidden group">
                <img
                  src={aboutHeroBg}
                  alt="Our Team"
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#015093] via-transparent to-transparent opacity-60" />
              </div>
            </div>

            <motion.div
              className="lg:col-span-3 space-y-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#00a651]/10 rounded-xl flex items-center justify-center">
                  <Headphones className="w-5 h-5 text-[#00a651]" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#015093]/60 font-heading">
                  The Bringas Team
                </span>
              </div>

              <h2 className="text-4xl font-bold text-[#015093] font-heading tracking-tight">
                Real people, real service
              </h2>

              <div className="space-y-6 text-[#015093]/80 font-body leading-relaxed text-lg">
                <p>
                  When you think of insurance agents, do you picture someone in a gray suit speaking complicated
                  language? <strong>Forget that.</strong> Our team is made up of real people who live in your community
                  and speak your language.
                </p>
                <p>
                  As an independent agency, our agents give you impartial advice. They're locally trained and here to
                  listen, explain, and support you. Whether you're new to insurance or have been managing policies for
                  years, we're here for you.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#015093] text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] shadow-xl shadow-[#015093]/20 hover:bg-[#00a651] transition-all group"
              >
                Meet an Agent
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN CTA FINAL (Estilo Aquos) --- */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-[#015093] to-[#003f5e] rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#00a651]/15 blur-[80px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0079c2]/10 blur-[60px] rounded-full" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-8 leading-[0.95] font-heading">
                Ready to find <br /> <span className="text-[#00a651]">your peace of mind?</span>
              </h2>
              <p className="text-white text-lg md:text-xl font-body font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                Join the hundreds of families in Washington who have found a simpler, more human way to handle
                insurance.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Link
                  to="/quote"
                  className="px-12 py-6 bg-[#00a651] text-white rounded-full font-black text-[11px] uppercase tracking-[0.2em] shadow-xl shadow-[#00a651]/30 hover:bg-white hover:text-[#015093] transition-all flex items-center justify-center gap-2 group"
                >
                  Start My Quote
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="px-12 py-6 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-full font-black text-[11px] uppercase tracking-[0.2em] hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
