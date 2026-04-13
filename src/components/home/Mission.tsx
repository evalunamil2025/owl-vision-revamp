import { motion, Variants } from "framer-motion";
import mascot from "@/assets/owlie-mascot.png";

const Mission = () => {
  // Text animations
  const containerVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f8fafc] -skew-x-12 translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Text Column (7 of 12 columns) */}
          <motion.div
            className="md:col-span-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-1 bg-[#00a651] rounded-full" />
              <span className="text-[#00a651] font-['Josefin_Sans'] font-bold uppercase tracking-wider text-sm">
                About Us
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-['Josefin_Sans'] font-bold text-[#0079c2] mb-8">Our Mission</h2>

            <div className="space-y-6 max-w-2xl">
              <p className="text-slate-600 font-body text-lg leading-relaxed">
                We take your peace of mind very seriously, but we don't believe the process of getting insured should be
                boring. Our goal is for you to feel safe and smile at the same time.
              </p>

              <p className="text-slate-500 font-body text-lg leading-relaxed italic border-l-4 border-slate-100 pl-6">
                By paying a relatively small premium, you transfer risks that could ruin your finances. We turn that
                process into a friendly and personalized experience, because insurance can also be approachable and
                human.
              </p>
            </div>
          </motion.div>

          {/* Mascot Column (5 of 12 columns) */}
          <div className="md:col-span-5 flex justify-center items-center">
            <div className="relative">
              {/* Background glow circle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="absolute inset-0 bg-gradient-to-br from-[#00a651]/10 to-[#0079c2]/10 rounded-full blur-2xl scale-110"
              />

              {/* Mascot container */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-50"
              >
                <motion.img
                  src={mascot}
                  alt="Owlie mascot"
                  className="w-48 md:w-64 drop-shadow-xl"
                  animate={{
                    y: [0, -12, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Floating decorative badge */}
                <div className="absolute -top-4 -right-4 w-14 h-14 bg-[#00a651] rounded-2xl flex items-center justify-center text-white shadow-lg rotate-12 group">
                  <span className="text-xl">✨</span>
                </div>
              </motion.div>

              {/* Bottom decorative element */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#0079c2]/5 rounded-full -z-10 blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
