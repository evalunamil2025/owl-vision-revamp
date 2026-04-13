import { motion } from "framer-motion";
import { Eye, Heart, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import mascot from "@/assets/owlie-mascot.png";

const About = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="gradient-blue text-primary-foreground section-padding relative overflow-hidden">
      <div className="absolute inset-0 owl-pattern opacity-20" />
      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4 text-white">About Bringas Insurance Group</h1>
          <p className="text-lg text-primary-foreground/80 font-body max-w-2xl mx-auto">Peace, security, and a smile — that's what drives us every day.</p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="icon-circle-sm"><Eye className="w-5 h-5" strokeWidth={2} /></div>
              <span className="text-sm font-heading font-bold text-secondary uppercase tracking-wider">Our Vision</span>
            </div>
            <h2 className="text-3xl font-heading font-bold mb-4">Financial peace shouldn't be an empty promise</h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">We believe financial peace of mind should be an everyday reality. Our vision is simple: that you and your family live with the confidence that you're protected, without losing joy or good humor.</p>
            <p className="text-muted-foreground font-body leading-relaxed">Studies show that 69% of people with life insurance feel less stressed knowing their family is protected, and 65% say they enjoy life more thanks to that security. We turn insurance into a tool for your emotional wellbeing.</p>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl rotate-3" style={{ background: 'hsl(152 100% 33% / 0.08)' }} />
              <img src={mascot} alt="Owlie mascot" className="relative w-56 drop-shadow-xl" />
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {[
            { icon: Heart, title: "Personalized Care", desc: "We give independent, objective advice tailored to your priorities — not to a single company's agenda." },
            { icon: Users, title: "Community First", desc: "We're bilingual, local, and deeply connected to the Hispanic community. We speak your language — literally." },
            { icon: Eye, title: "Transparent Always", desc: "We explain everything without jargon. You'll always know what you're paying for and why." },
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="elevated-card p-6 text-center group">
              <div className="icon-circle mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"><item.icon className="w-6 h-6" strokeWidth={2} /></div>
              <h3 className="font-heading font-bold text-primary mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground font-body">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="elevated-card p-8 border-l-4 border-l-secondary">
          <h2 className="text-2xl font-heading font-bold mb-4">Our Team</h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-4">When you think of insurance agents, do you picture someone in a gray suit speaking complicated language? Forget that. Our team is made up of real people who live in your community and speak your language.</p>
          <p className="text-muted-foreground font-body leading-relaxed">As an independent agency, our agents give you impartial advice adapted to your priorities. They're bilingual, locally trained, and here to listen, explain, and support you. Whether you're new to insurance or have been managing policies for years, they're here for you.</p>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default About;
