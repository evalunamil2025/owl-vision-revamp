import ServicePageLayout from "@/components/ServicePageLayout";

const CommercialProperty = () => (
  <ServicePageLayout
    title="Commercial Property Insurance"
    subtitle="Your business needs a space — protect it as the asset it is"
    heroDescription="Your office, warehouse, building, or retail space isn't just a physical location. It's where your operation happens, where you generate income, and where much of your investment sits. A fire, theft, structural damage, or disaster can halt your business in hours."
    coverages={[
      { title: "Building & Structures", description: "Protects the property (if you own it), improvements, adaptations, and related structures." },
      { title: "Equipment & Furniture", description: "Covers machinery, tools, furniture, and work equipment." },
      { title: "Inventory", description: "Protects stored products against theft, damage, and unexpected events." },
      { title: "Systems & Technology", description: "Includes computers, operating systems, and important records." },
      { title: "Additional Coverages", description: "Depending on your business needs.", items: ["Earthquake damage", "Glass and display cases", "Fences and exteriors", "Workers' liability", "Commercial auto (when applicable)"] },
    ]}
    importantNote={{
      title: "What Many Businesses Underestimate",
      content: "Not all damage is the same. Factors like industry type, location, construction type, and loss history completely change the type of coverage you need. A poorly structured policy can leave you with significant losses.",
    }}
    approach={{
      intro: "We analyze your property as a strategic asset, identify specific risks, and design complete coverage.",
      items: ["Analyze as a strategic asset", "Identify specific risks", "Design complete coverage"],
    }}
  />
);

export default CommercialProperty;
