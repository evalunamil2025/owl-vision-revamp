import mascot from "@/assets/owlie-mascot.png";

const Mission = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-3">
            <h2 className="text-3xl font-heading font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              We take your peace of mind very seriously, but we don't believe the process of getting insured should be boring. Our goal is for you to feel safe and smile at the same time.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              By paying a relatively small premium, you transfer risks that could ruin your finances. We turn that process into a friendly and personalized experience, because insurance can also be approachable and human.
            </p>
          </div>
          <div className="md:col-span-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl -rotate-3" style={{ background: 'hsl(152 100% 33% / 0.08)' }} />
              <img src={mascot} alt="Owlie mascot" className="relative w-48 md:w-56" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
