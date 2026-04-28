import {
  Shield, Users, Handshake, HeartHandshake,
  Building2, Car, Home, Heart, Briefcase, Anchor, Bike, Truck,
  Umbrella, Flame, Building, FileCheck, ShieldCheck, Sparkles
} from "lucide-react";
import mobileHomeInsuranceImage from "@/assets/mobile-home-insurance.jpg";
import rvInsuranceImage from "@/assets/rv-insurance.jpg";
import lifeInsuranceImage from "@/assets/life-insurance.jpg";
import personalUmbrellaImage from "@/assets/personal-umbrella.jpg";

export const personalServices = [
  { key: "auto", icon: Car, href: "/auto-insurance", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80" },
  { key: "home", icon: Home, href: "/home-insurance", image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80" },
  { key: "life", icon: Heart, href: "/life-insurance", image: lifeInsuranceImage },
  { key: "flood", icon: Flame, href: "/flood-insurance", image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=800&q=80" },
  { key: "boat", icon: Anchor, href: "/boat-insurance", image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80" },
  { key: "motorcycle", icon: Bike, href: "/motorcycle-insurance", image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80" },
  { key: "rv", icon: Truck, href: "/rv-insurance", image: rvInsuranceImage },
  { key: "renters", icon: ShieldCheck, href: "/renters-insurance", image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80" },
  { key: "landlord", icon: Building, href: "/landlord-insurance", image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80" },
  { key: "mobileHome", icon: Home, href: "/mobile-home-insurance", image: mobileHomeInsuranceImage },
  { key: "personalUmbrella", icon: Umbrella, href: "/personal-umbrella", image: personalUmbrellaImage },
];

export const businessServices = [
  { key: "generalLiability", icon: Shield, href: "/general-liability", image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80" },
  { key: "bop", icon: Briefcase, href: "/bop-insurance", image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80" },
  { key: "commercialAuto", icon: Truck, href: "/commercial-auto", image: "https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?w=800&q=80" },
  { key: "commercialProperty", icon: Building2, href: "/commercial-property", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80" },
  { key: "contractors", icon: Handshake, href: "/contractors-insurance", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80" },
  { key: "restaurant", icon: Sparkles, href: "/restaurant-insurance", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80" },
  { key: "buildingOwners", icon: Building2, href: "/building-owners", image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80" },
  { key: "bondsSurety", icon: FileCheck, href: "/bonds-surety", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80" },
];

export const whyUs = [
  { key: "freedom", icon: Handshake },
  { key: "honest", icon: HeartHandshake },
  { key: "local", icon: Users },
  { key: "ongoing", icon: Shield },
];
