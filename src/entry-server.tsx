import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider, type FilledContext } from "react-helmet-async";
import i18n from "./i18n";

import Index from "./pages/Index";
import About from "./pages/About";
import Quote from "./pages/Quote";
import Contact from "./pages/Contact";
import AutoInsurance from "./pages/AutoInsurance";
import HomeInsurance from "./pages/HomeInsurance";
import LifeInsurance from "./pages/LifeInsurance";
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
import PayMyBill from "./pages/PayMyBill";
import ClientCenter from "./pages/ClientCenter";
import Carriers from "./pages/Carriers";
import SR22Insurance from "./pages/SR22Insurance";

const pages = {
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
} as const;

export const prerenderRoutes = Object.keys(pages);

export async function render(pathname: string) {
  const Page = pages[pathname as keyof typeof pages];
  if (!Page) throw new Error(`Cannot prerender unknown route: ${pathname}`);

  await i18n.changeLanguage("en");
  const helmetContext = {} as FilledContext;
  const appHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={pathname}>
        <Page />
      </StaticRouter>
    </HelmetProvider>,
  );

  const { helmet } = helmetContext;
  return {
    appHtml,
    headHtml: [
      helmet.title.toString(),
      helmet.meta.toString(),
      helmet.link.toString(),
      helmet.script.toString(),
    ].filter(Boolean).join("\n    "),
  };
}
