import type { ComponentType } from "react";
import About from "@/pages/About";
import AutoInsurance from "@/pages/AutoInsurance";
import BoatInsurance from "@/pages/BoatInsurance";
import BondsSurety from "@/pages/BondsSurety";
import BOPInsurance from "@/pages/BOPInsurance";
import BuildingOwners from "@/pages/BuildingOwners";
import Carriers from "@/pages/Carriers";
import ClientCenter from "@/pages/ClientCenter";
import CommercialAuto from "@/pages/CommercialAuto";
import CommercialProperty from "@/pages/CommercialProperty";
import Contact from "@/pages/Contact";
import ContractorsInsurance from "@/pages/ContractorsInsurance";
import GeneralLiability from "@/pages/GeneralLiability";
import HomeInsurance from "@/pages/HomeInsurance";
import Index from "@/pages/Index";
import LandlordInsurance from "@/pages/LandlordInsurance";
import LifeInsurance from "@/pages/LifeInsurance";
import MobileHomeInsurance from "@/pages/MobileHomeInsurance";
import MotorcycleInsurance from "@/pages/MotorcycleInsurance";
import PayMyBill from "@/pages/PayMyBill";
import PersonalUmbrella from "@/pages/PersonalUmbrella";
import Quote from "@/pages/Quote";
import RentersInsurance from "@/pages/RentersInsurance";
import RestaurantInsurance from "@/pages/RestaurantInsurance";
import RVInsurance from "@/pages/RVInsurance";
import SR22Insurance from "@/pages/SR22Insurance";

export const SPANISH_ROUTE_PAGES: Record<string, ComponentType> = {
  "/": Index,
  "/about": About,
  "/quote": Quote,
  "/contact": Contact,
  "/auto-insurance": AutoInsurance,
  "/home-insurance": HomeInsurance,
  "/life-insurance": LifeInsurance,
  "/boat-insurance": BoatInsurance,
  "/motorcycle-insurance": MotorcycleInsurance,
  "/rv-insurance": RVInsurance,
  "/renters-insurance": RentersInsurance,
  "/landlord-insurance": LandlordInsurance,
  "/mobile-home-insurance": MobileHomeInsurance,
  "/personal-umbrella": PersonalUmbrella,
  "/general-liability": GeneralLiability,
  "/bop-insurance": BOPInsurance,
  "/commercial-auto": CommercialAuto,
  "/commercial-property": CommercialProperty,
  "/contractors-insurance": ContractorsInsurance,
  "/restaurant-insurance": RestaurantInsurance,
  "/building-owners": BuildingOwners,
  "/bonds-surety": BondsSurety,
  "/pay-my-bill": PayMyBill,
  "/client-center": ClientCenter,
  "/carriers": Carriers,
  "/sr22-insurance": SR22Insurance,
};
