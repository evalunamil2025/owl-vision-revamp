import {
  Shield, Users, Handshake, HeartHandshake,
  Building2, Car, Home, Heart, Briefcase, Anchor, Bike, Truck,
  Umbrella, Building, FileCheck, ShieldCheck, Sparkles
} from "lucide-react";
import mobileHomeInsuranceImage from "@/assets/service-mobile-home-card.webp";
import rvInsuranceImage from "@/assets/service-rv-card.webp";
import lifeInsuranceImage from "@/assets/life-insurance-card.webp";
import serviceBoatImage from "@/assets/service-boat-card.webp";
import serviceMotorcycleImage from "@/assets/service-motorcycle-card.webp";
import personalUmbrellaImage from "@/assets/service-personal-umbrella-card.webp";
import serviceRentersImage from "@/assets/service-renters-card.webp";
import serviceLandlordImage from "@/assets/service-landlord-card.webp";
import serviceAutoImage from "@/assets/service-auto-card.webp";
import serviceHomeImage from "@/assets/service-home-card.webp";
import owlieAutoIcon from "@/assets/owlie-auto-icon-small.webp";
import owlieAutoIconWhite from "@/assets/owlie-auto-icon-white-small.webp";
import owlieHomeIcon from "@/assets/owlie-home-icon-small.webp";
import owlieHomeIconWhite from "@/assets/owlie-home-icon-white-small.webp";
import owlieLifeIcon from "@/assets/owlie-life-icon-small.webp";
import owlieLifeIconWhite from "@/assets/owlie-life-icon-white-small.webp";
import owlieBoatIcon from "@/assets/owlie-boat-icon-small.webp";
import owlieBoatIconWhite from "@/assets/owlie-boat-icon-white-small.webp";
import owlieMotorcycleIcon from "@/assets/owlie-motorcycle-icon-small.webp";
import owlieMotorcycleIconWhite from "@/assets/owlie-motorcycle-icon-white-small.webp";
import owlieRvIcon from "@/assets/owlie-rv-icon-small.webp";
import owlieRvIconWhite from "@/assets/owlie-rv-icon-white-small.webp";
import owlieRentersIcon from "@/assets/owlie-renters-icon-small.webp";
import owlieRentersIconWhite from "@/assets/owlie-renters-icon-white-small.webp";
import owlieLandlordIcon from "@/assets/owlie-landlord-icon-small.webp";
import owlieLandlordIconWhite from "@/assets/owlie-landlord-icon-white-small.webp";
import owlieMobileHomeIcon from "@/assets/owlie-mobileHome-icon-small.webp";
import owlieMobileHomeIconWhite from "@/assets/owlie-mobileHome-icon-white-small.webp";
import owliePersonalUmbrellaIcon from "@/assets/owlie-personalUmbrella-icon-small.webp";
import owliePersonalUmbrellaIconWhite from "@/assets/owlie-personalUmbrella-icon-white-small.webp";
import owlieGeneralLiabilityIcon from "@/assets/owlie-generalLiability-icon-small.webp";
import owlieGeneralLiabilityIconWhite from "@/assets/owlie-generalLiability-icon-white-small.webp";
import owlieBopIcon from "@/assets/owlie-bop-icon-small.webp";
import owlieBopIconWhite from "@/assets/owlie-bop-icon-white-small.webp";
import owlieCommercialAutoIcon from "@/assets/owlie-commercialAuto-icon-small.webp";
import owlieCommercialAutoIconWhite from "@/assets/owlie-commercialAuto-icon-white-small.webp";
import owlieCommercialPropertyIcon from "@/assets/owlie-commercialProperty-icon-small.webp";
import owlieCommercialPropertyIconWhite from "@/assets/owlie-commercialProperty-icon-white-small.webp";
import owlieContractorsIcon from "@/assets/owlie-contractors-icon-small.webp";
import owlieContractorsIconWhite from "@/assets/owlie-contractors-icon-white-small.webp";
import owlieRestaurantIcon from "@/assets/owlie-restaurant-icon-small.webp";
import owlieRestaurantIconWhite from "@/assets/owlie-restaurant-icon-white-small.webp";
import owlieBuildingOwnersIcon from "@/assets/owlie-buildingOwners-icon-small.webp";
import owlieBuildingOwnersIconWhite from "@/assets/owlie-buildingOwners-icon-white-small.webp";
import owlieBondsSuretyIcon from "@/assets/owlie-bondsSurety-icon-small.webp";
import owlieBondsSuretyIconWhite from "@/assets/owlie-bondsSurety-icon-white-small.webp";
import serviceCommercialPropertyImage from "@/assets/service-commercial-property-card.webp";
import serviceContractorsImage from "@/assets/service-contractors-card.webp";
import serviceRestaurantImage from "@/assets/service-restaurant-card.webp";
import serviceBuildingOwnersImage from "@/assets/service-building-owners-card.webp";
import serviceBondsSuretyImage from "@/assets/service-bonds-surety-card.webp";

import serviceGeneralLiabilityImage from "@/assets/service-general-liability-card.webp";
import serviceBopImage from "@/assets/service-bop-card.webp";
import serviceCommercialAutoImage from "@/assets/service-commercial-auto-card.webp";

export const personalServices = [
  { key: "auto", icon: Car, customIcon: owlieAutoIcon, customIconHover: owlieAutoIconWhite, href: "/auto-insurance", image: serviceAutoImage },
  { key: "home", icon: Home, customIcon: owlieHomeIcon, customIconHover: owlieHomeIconWhite, href: "/home-insurance", image: serviceHomeImage },
  { key: "life", icon: Heart, customIcon: owlieLifeIcon, customIconHover: owlieLifeIconWhite, href: "/life-insurance", image: lifeInsuranceImage },
  
  { key: "boat", icon: Anchor, customIcon: owlieBoatIcon, customIconHover: owlieBoatIconWhite, href: "/boat-insurance", image: serviceBoatImage },
  { key: "motorcycle", icon: Bike, customIcon: owlieMotorcycleIcon, customIconHover: owlieMotorcycleIconWhite, href: "/motorcycle-insurance", image: serviceMotorcycleImage },
  { key: "rv", icon: Truck, customIcon: owlieRvIcon, customIconHover: owlieRvIconWhite, href: "/rv-insurance", image: rvInsuranceImage },
  { key: "renters", icon: ShieldCheck, customIcon: owlieRentersIcon, customIconHover: owlieRentersIconWhite, href: "/renters-insurance", image: serviceRentersImage },
  { key: "landlord", icon: Building, customIcon: owlieLandlordIcon, customIconHover: owlieLandlordIconWhite, href: "/landlord-insurance", image: serviceLandlordImage },
  { key: "mobileHome", icon: Home, customIcon: owlieMobileHomeIcon, customIconHover: owlieMobileHomeIconWhite, href: "/mobile-home-insurance", image: mobileHomeInsuranceImage },
  { key: "personalUmbrella", icon: Umbrella, customIcon: owliePersonalUmbrellaIcon, customIconHover: owliePersonalUmbrellaIconWhite, href: "/personal-umbrella", image: personalUmbrellaImage },
];

export const businessServices = [
  { key: "generalLiability", icon: Shield, customIcon: owlieGeneralLiabilityIcon, customIconHover: owlieGeneralLiabilityIconWhite, href: "/general-liability", image: serviceGeneralLiabilityImage },
  { key: "bop", icon: Briefcase, customIcon: owlieBopIcon, customIconHover: owlieBopIconWhite, href: "/bop-insurance", image: serviceBopImage },
  { key: "commercialAuto", icon: Truck, customIcon: owlieCommercialAutoIcon, customIconHover: owlieCommercialAutoIconWhite, href: "/commercial-auto", image: serviceCommercialAutoImage },
  { key: "commercialProperty", icon: Building2, customIcon: owlieCommercialPropertyIcon, customIconHover: owlieCommercialPropertyIconWhite, href: "/commercial-property", image: serviceCommercialPropertyImage },
  { key: "contractors", icon: Handshake, customIcon: owlieContractorsIcon, customIconHover: owlieContractorsIconWhite, href: "/contractors-insurance", image: serviceContractorsImage },
  { key: "restaurant", icon: Sparkles, customIcon: owlieRestaurantIcon, customIconHover: owlieRestaurantIconWhite, href: "/restaurant-insurance", image: serviceRestaurantImage },
  { key: "buildingOwners", icon: Building2, customIcon: owlieBuildingOwnersIcon, customIconHover: owlieBuildingOwnersIconWhite, href: "/building-owners", image: serviceBuildingOwnersImage },
  { key: "bondsSurety", icon: FileCheck, customIcon: owlieBondsSuretyIcon, customIconHover: owlieBondsSuretyIconWhite, href: "/bonds-surety", image: serviceBondsSuretyImage },
];

export const whyUs = [
  { key: "freedom", icon: Handshake },
  { key: "honest", icon: HeartHandshake },
  { key: "local", icon: Users },
  { key: "ongoing", icon: Shield },
];
