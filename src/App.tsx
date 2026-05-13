import { lazy, Suspense, useEffect, useState } from "react";
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
const Carriers = lazy(() => import("./pages/Carriers"));
const SR22Insurance = lazy(() => import("./pages/SR22Insurance"));
const NotFound = lazy(() => import("./pages/NotFound"));
const InsuranceChatbot = lazy(() => import("./components/InsuranceChatbot"));
const WhatsAppButton = lazy(() => import("./components/WhatsAppButton"));

const queryClient = new QueryClient();

// Defer floating widgets until the browser is idle or user interacts.
// This reduces Total Blocking Time without changing the UI.
const DeferredWidgets = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    let cancelled = false;
    const reveal = () => { if (!cancelled) setShow(true); };
    const w = window as Window & { requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number };
    const idleId = w.requestIdleCallback
      ? w.requestIdleCallback(reveal, { timeout: 3500 })
      : (window.setTimeout(reveal, 2500) as unknown as number);
    const events: Array<keyof WindowEventMap> = ["pointerdown", "keydown", "scroll", "touchstart"];
    events.forEach((e) => window.addEventListener(e, reveal, { once: true, passive: true } as AddEventListenerOptions));
    return () => {
      cancelled = true;
      const wc = window as Window & { cancelIdleCallback?: (id: number) => void };
      if (wc.cancelIdleCallback) wc.cancelIdleCallback(idleId);
      else clearTimeout(idleId);
      events.forEach((e) => window.removeEventListener(e, reveal));
    };
  }, []);
  if (!show) return null;
  return (
    <Suspense fallback={null}>
      <InsuranceChatbot />
      <WhatsAppButton />
    </Suspense>
  );
};

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
            <Route path="/carriers" element={<Carriers />} />
            <Route path="/sr22-insurance" element={<SR22Insurance />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <DeferredWidgets />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
