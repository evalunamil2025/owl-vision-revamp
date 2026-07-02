import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import UnifiedServices from "@/components/home/UnifiedServices";
import Mission from "@/components/home/Mission";
import Community from "@/components/home/Community";
import FinalCTA from "@/components/home/FinalCTA";
import CarrierSlider from "@/components/home/CarrierSlider";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Bringas Insurance Group | Auto, Home, Life & Business Insurance"
        description="Bringas Insurance Group helps individuals, families, and businesses find auto, home, life, and business insurance coverage tailored to their needs."
        path="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "InsuranceAgency",
          name: "Bringas Insurance Group",
          url: "https://bringasinsurance.com/",
          telephone: "+1-425-405-7111",
          address: {
            "@type": "PostalAddress",
            streetAddress: "9111 Evergreen Way",
            addressLocality: "Everett",
            addressRegion: "WA",
            postalCode: "98204",
            addressCountry: "US",
          },
          areaServed: ["Washington", "Oregon", "United States"],
          openingHours: "Mo-Fr 09:00-18:00",
          sameAs: [
            "https://www.facebook.com/Bringas-Insurance-111132600590435/",
            "https://www.linkedin.com/in/bringas-insurance-54111bb1/",
            "https://twitter.com/BringasIns",
            "https://www.instagram.com/bringas_insurance_group/",
          ],
        }}
      />
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <UnifiedServices />
      <Community />
      <Mission />
      <FinalCTA />
      <CarrierSlider />
      <Footer />
    </div>
  );
};

export default Index;
