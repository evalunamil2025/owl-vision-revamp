import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import UnifiedServices from "@/components/home/UnifiedServices";
import Mission from "@/components/home/Mission";
import Community from "@/components/home/Community";
import FinalCTA from "@/components/home/FinalCTA";
import CarrierSlider from "@/components/home/CarrierSlider";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <PersonalInsurance />
      <MidCTA />
      <BusinessInsurance />
      <Community />
      <Mission />
      <FinalCTA />
      <CarrierSlider />
      <Footer />
    </div>
  );
};

export default Index;
