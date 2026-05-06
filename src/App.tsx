import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import ScrollToTop from "./components/ScrollToTop";

// Lazy-load non-critical routes for faster initial load
const About = lazy(() => import("./pages/About"));
const Quote = lazy(() => import("./pages/Quote"));
const Contact = lazy(() => import("./pages/Contact"));
const AutoInsurance = lazy(() => import("./pages/AutoInsurance"));
const HomeInsurance = lazy(() => import("./pages/HomeInsurance"));
const LifeInsurance = lazy(() => import("./pages/LifeInsurance"));
const FloodInsurance = lazy(() => import("./pages/FloodInsurance"));
const BoatInsurance = lazy(() => import("./pages/BoatInsurance"));
const MotorcycleInsurance = lazy(() => import("./pages/MotorcycleInsurance"));
const RVInsurance = lazy(() => import("./pages/RVInsurance"));
const RentersInsurance = lazy(() => import("./pages/RentersInsurance"));
const LandlordInsurance = lazy(() => import("./pages/LandlordInsurance"));
const MobileHomeInsurance = lazy(() => import("./pages/MobileHomeInsurance"));
const PersonalUmbrella = lazy(() => import("./pages/PersonalUmbrella"));
const GeneralLiability = lazy(() => import("./pages/GeneralLiability"));
const BOPInsurance = lazy(() => import("./pages/BOPInsurance"));
const CommercialAuto = lazy(() => import("./pages/CommercialAuto"));
const CommercialProperty = lazy(() => import("./pages/CommercialProperty"));
const ContractorsInsurance = lazy(() => import("./pages/ContractorsInsurance"));
const RestaurantInsurance = lazy(() => import("./pages/RestaurantInsurance"));
const BuildingOwners = lazy(() => import("./pages/BuildingOwners"));
const BondsSurety = lazy(() => import("./pages/BondsSurety"));
const PayMyBill = lazy(() => import("./pages/PayMyBill"));
const ClientCenter = lazy(() => import("./pages/ClientCenter"));
const NotFound = lazy(() => import("./pages/NotFound"));
const InsuranceChatbot = lazy(() => import("./components/InsuranceChatbot"));
const WhatsAppButton = lazy(() => import("./components/WhatsAppButton"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auto-insurance" element={<AutoInsurance />} />
            <Route path="/home-insurance" element={<HomeInsurance />} />
            <Route path="/life-insurance" element={<LifeInsurance />} />
            <Route path="/flood-insurance" element={<FloodInsurance />} />
            <Route path="/boat-insurance" element={<BoatInsurance />} />
            <Route path="/motorcycle-insurance" element={<MotorcycleInsurance />} />
            <Route path="/rv-insurance" element={<RVInsurance />} />
            <Route path="/renters-insurance" element={<RentersInsurance />} />
            <Route path="/landlord-insurance" element={<LandlordInsurance />} />
            <Route path="/mobile-home-insurance" element={<MobileHomeInsurance />} />
            <Route path="/personal-umbrella" element={<PersonalUmbrella />} />
            <Route path="/general-liability" element={<GeneralLiability />} />
            <Route path="/bop-insurance" element={<BOPInsurance />} />
            <Route path="/commercial-auto" element={<CommercialAuto />} />
            <Route path="/commercial-property" element={<CommercialProperty />} />
            <Route path="/contractors-insurance" element={<ContractorsInsurance />} />
            <Route path="/restaurant-insurance" element={<RestaurantInsurance />} />
            <Route path="/building-owners" element={<BuildingOwners />} />
            <Route path="/bonds-surety" element={<BondsSurety />} />
            <Route path="/pay-my-bill" element={<PayMyBill />} />
            <Route path="/client-center" element={<ClientCenter />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <InsuranceChatbot />
          <WhatsAppButton />
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
