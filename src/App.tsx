import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import About from "./pages/About";
import Quote from "./pages/Quote";
import Contact from "./pages/Contact";
import AutoInsurance from "./pages/AutoInsurance";
import HomeInsurance from "./pages/HomeInsurance";
import LifeInsurance from "./pages/LifeInsurance";
import FloodInsurance from "./pages/FloodInsurance";
import BoatInsurance from "./pages/BoatInsurance";
import MotorcycleInsurance from "./pages/MotorcycleInsurance";
import RVInsurance from "./pages/RVInsurance";
import RentersInsurance from "./pages/RentersInsurance";
import LandlordInsurance from "./pages/LandlordInsurance";
import MobileHomeInsurance from "./pages/MobileHomeInsurance";
import PersonalUmbrella from "./pages/PersonalUmbrella";
import GeneralLiability from "./pages/GeneralLiability";
import BOPInsurance from "./pages/BOPInsurance";
import CommercialAuto from "./pages/CommercialAuto";
import CommercialProperty from "./pages/CommercialProperty";
import ContractorsInsurance from "./pages/ContractorsInsurance";
import RestaurantInsurance from "./pages/RestaurantInsurance";
import BuildingOwners from "./pages/BuildingOwners";
import BondsSurety from "./pages/BondsSurety";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
