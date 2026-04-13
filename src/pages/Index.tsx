import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import PersonalInsurance from "@/components/home/PersonalInsurance";
import BusinessInsurance from "@/components/home/BusinessInsurance";
import Mission from "@/components/home/Mission";
import Community from "@/components/home/Community";
import FinalCTA from "@/components/home/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <PersonalInsurance />
      <BusinessInsurance />
      <Mission />
      <Community />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
