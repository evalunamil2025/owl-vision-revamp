import {
  Shield, Users, Handshake, HeartHandshake,
  Building2, Car, Home, Heart, Briefcase, Anchor, Bike, Truck,
  Umbrella, Flame, Building, FileCheck, ShieldCheck, Sparkles
} from "lucide-react";
import mobileHomeInsuranceImage from "@/assets/service-mobile-home.webp";
import rvInsuranceImage from "@/assets/service-rv.webp";
import lifeInsuranceImage from "@/assets/life-insurance.jpg";
import serviceBoatImage from "@/assets/service-boat.webp";
import serviceMotorcycleImage from "@/assets/service-motorcycle.webp";
import personalUmbrellaImage from "@/assets/service-personal-umbrella.png";
import serviceRentersImage from "@/assets/service-renters.png";
import serviceLandlordImage from "@/assets/service-landlord.png";
import serviceAutoImage from "@/assets/service-auto.png";
import serviceHomeImage from "@/assets/service-home.png";
import owlieAutoIcon from "@/assets/owlie-auto-icon.png";
import owlieAutoIconWhite from "@/assets/owlie-auto-icon-white.png";
import owlieHomeIcon from "@/assets/owlie-home-icon.png";
import owlieHomeIconWhite from "@/assets/owlie-home-icon-white.png";
import owlieLifeIcon from "@/assets/owlie-life-icon.png";
import owlieLifeIconWhite from "@/assets/owlie-life-icon-white.png";
import owlieFloodIcon from "@/assets/owlie-flood-icon.png";
import owlieFloodIconWhite from "@/assets/owlie-flood-icon-white.png";
import owlieBoatIcon from "@/assets/owlie-boat-icon.png";
import owlieBoatIconWhite from "@/assets/owlie-boat-icon-white.png";
import owlieMotorcycleIcon from "@/assets/owlie-motorcycle-icon.png";
import owlieMotorcycleIconWhite from "@/assets/owlie-motorcycle-icon-white.png";
import owlieRvIcon from "@/assets/owlie-rv-icon.png";
import owlieRvIconWhite from "@/assets/owlie-rv-icon-white.png";
import owlieRentersIcon from "@/assets/owlie-renters-icon.png";
import owlieRentersIconWhite from "@/assets/owlie-renters-icon-white.png";
import owlieLandlordIcon from "@/assets/owlie-landlord-icon.png";
import owlieLandlordIconWhite from "@/assets/owlie-landlord-icon-white.png";
import owlieMobileHomeIcon from "@/assets/owlie-mobileHome-icon.png";
import owlieMobileHomeIconWhite from "@/assets/owlie-mobileHome-icon-white.png";
import owliePersonalUmbrellaIcon from "@/assets/owlie-personalUmbrella-icon.png";
import owliePersonalUmbrellaIconWhite from "@/assets/owlie-personalUmbrella-icon-white.png";
import owlieGeneralLiabilityIcon from "@/assets/owlie-generalLiability-icon.png";
import owlieGeneralLiabilityIconWhite from "@/assets/owlie-generalLiability-icon-white.png";
import owlieBopIcon from "@/assets/owlie-bop-icon.png";
import owlieBopIconWhite from "@/assets/owlie-bop-icon-white.png";
import owlieCommercialAutoIcon from "@/assets/owlie-commercialAuto-icon.png";
import owlieCommercialAutoIconWhite from "@/assets/owlie-commercialAuto-icon-white.png";
import owlieCommercialPropertyIcon from "@/assets/owlie-commercialProperty-icon.png";
import owlieCommercialPropertyIconWhite from "@/assets/owlie-commercialProperty-icon-white.png";
import owlieContractorsIcon from "@/assets/owlie-contractors-icon.png";
import owlieContractorsIconWhite from "@/assets/owlie-contractors-icon-white.png";
import owlieRestaurantIcon from "@/assets/owlie-restaurant-icon.png";
import owlieRestaurantIconWhite from "@/assets/owlie-restaurant-icon-white.png";
import owlieBuildingOwnersIcon from "@/assets/owlie-buildingOwners-icon.png";
import owlieBuildingOwnersIconWhite from "@/assets/owlie-buildingOwners-icon-white.png";
import owlieBondsSuretyIcon from "@/assets/owlie-bondsSurety-icon.png";
import owlieBondsSuretyIconWhite from "@/assets/owlie-bondsSurety-icon-white.png";
import serviceCommercialPropertyImage from "@/assets/service-commercial-property.webp";
import serviceContractorsImage from "@/assets/service-contractors.webp";
import serviceRestaurantImage from "@/assets/service-restaurant.webp";
import serviceBuildingOwnersImage from "@/assets/service-building-owners.webp";
import serviceBondsSuretyImage from "@/assets/service-bonds-surety.webp";

export const personalServices = [
  { key: "auto", icon: Car, customIcon: owlieAutoIcon, customIconHover: owlieAutoIconWhite, href: "/auto-insurance", image: serviceAutoImage },
  { key: "home", icon: Home, customIcon: owlieHomeIcon, customIconHover: owlieHomeIconWhite, href: "/home-insurance", image: serviceHomeImage },
  { key: "life", icon: Heart, customIcon: owlieLifeIcon, customIconHover: owlieLifeIconWhite, href: "/life-insurance", image: lifeInsuranceImage },
  { key: "flood", icon: Flame, customIcon: owlieFloodIcon, customIconHover: owlieFloodIconWhite, href: "/flood-insurance", image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=800&q=80" },
  { key: "boat", icon: Anchor, customIcon: owlieBoatIcon, customIconHover: owlieBoatIconWhite, href: "/boat-insurance", image: serviceBoatImage },
  { key: "motorcycle", icon: Bike, customIcon: owlieMotorcycleIcon, customIconHover: owlieMotorcycleIconWhite, href: "/motorcycle-insurance", image: serviceMotorcycleImage },
  { key: "rv", icon: Truck, customIcon: owlieRvIcon, customIconHover: owlieRvIconWhite, href: "/rv-insurance", image: rvInsuranceImage },
  { key: "renters", icon: ShieldCheck, customIcon: owlieRentersIcon, customIconHover: owlieRentersIconWhite, href: "/renters-insurance", image: serviceRentersImage },
  { key: "landlord", icon: Building, customIcon: owlieLandlordIcon, customIconHover: owlieLandlordIconWhite, href: "/landlord-insurance", image: serviceLandlordImage },
  { key: "mobileHome", icon: Home, customIcon: owlieMobileHomeIcon, customIconHover: owlieMobileHomeIconWhite, href: "/mobile-home-insurance", image: mobileHomeInsuranceImage },
  { key: "personalUmbrella", icon: Umbrella, customIcon: owliePersonalUmbrellaIcon, customIconHover: owliePersonalUmbrellaIconWhite, href: "/personal-umbrella", image: personalUmbrellaImage },
];

export const businessServices = [
  { key: "generalLiability", icon: Shield, customIcon: owlieGeneralLiabilityIcon, customIconHover: owlieGeneralLiabilityIconWhite, href: "/general-liability", image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80" },
  { key: "bop", icon: Briefcase, customIcon: owlieBopIcon, customIconHover: owlieBopIconWhite, href: "/bop-insurance", image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80" },
  { key: "commercialAuto", icon: Truck, customIcon: owlieCommercialAutoIcon, customIconHover: owlieCommercialAutoIconWhite, href: "/commercial-auto", image: "https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?w=800&q=80" },
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
