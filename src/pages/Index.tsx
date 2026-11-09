import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import UnifiedServices from "@/components/home/UnifiedServices";
import Mission from "@/components/home/Mission";
import Community from "@/components/home/Community";
import FinalCTA from "@/components/home/FinalCTA";
import CarrierSlider from "@/components/home/CarrierSlider";
import AIAnswers from "@/components/home/AIAnswers";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Bringas Insurance Group | Auto, Home, Life & Business Insurance"
        description="Bringas Insurance Group helps individuals, families, and businesses find auto, home, life, and business insurance coverage tailored to their needs."
        path="/"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://bringasinsurance.com/#website",
            name: "Bringas Insurance Group",
            url: "https://bringasinsurance.com/",
            inLanguage: ["en", "es"],
            publisher: { "@id": "https://bringasinsurance.com/#organization" },
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": "https://bringasinsurance.com/#frequently-asked-questions",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is Bringas Insurance Group?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Bringas Insurance Group is an independent insurance agency based in Everett, Washington. The agency helps individuals, families, and businesses compare coverage options from multiple insurance carriers.",
                },
              },
              {
                "@type": "Question",
                name: "What types of insurance does Bringas Insurance Group offer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Bringas Insurance Group provides guidance for auto, home, renters, landlord, life, recreational vehicle, umbrella, SR-22, general liability, business owners, commercial auto, commercial property, contractor, restaurant, building owner, and surety bond coverage.",
                },
              },
              {
                "@type": "Question",
                name: "Does Bringas Insurance Group provide service in Spanish?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Bringas Insurance Group provides insurance guidance in both English and Spanish for clients in Washington State.",
                },
              },
              {
                "@type": "Question",
                name: "How can I request an insurance quote from Bringas Insurance Group?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Request a quote through bringasinsurance.com/quote or call Bringas Insurance Group at (425) 405-7111. Coverage is not bound until it is confirmed directly by a licensed agent.",
                },
              },
            ],
          },
        ]}
      />
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <UnifiedServices />
      <AIAnswers />
      <Community />
      <Mission />
      <FinalCTA />
      <CarrierSlider />
      <Footer />
    </div>
  );
};

export default Index;
