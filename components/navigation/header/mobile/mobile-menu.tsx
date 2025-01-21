import { useRouter } from "next/router";

import MobileMenuPageComponent from "./mobile-menu-page-component";

import navigationList from "@/data/navigation-data.json";
import { CssProps } from "@/components/property-pages/home-page/home-page";

export const lagoonVillaUrls = [
  "/keurbooms-lagoon-villa",
  "/keurbooms-lagoon-villa/about",
  "/keurbooms-lagoon-villa/our-rooms",
  "/keurbooms-lagoon-villa/contact",
];

export const cliffSideUrls = [
  "/cliffside-suites",
  "/cliffside-suites/about",
  "/cliffside-suites/our-suites",
  "/cliffside-suites/contact",
];

const {
  lagoonVilla: { en: lagoonVillaEn, de: lagoonVillaDe },
  cliffSide: { en: cliffSideEn, de: cliffSideDe },
  homePage: { en: homePageEn, de: homePageDe },
} = navigationList;

const MobileMenu = ({ cssClasses }: CssProps) => {
  const router = useRouter();
  const currentRoute = router.pathname;
  if (lagoonVillaUrls.includes(currentRoute)) {
    return (
      <MobileMenuPageComponent
        cssClasses={cssClasses}
        navListEn={lagoonVillaEn}
        navListDe={lagoonVillaDe}
      />
    );
  } else if (cliffSideUrls.includes(currentRoute)) {
    return (
      <MobileMenuPageComponent
        cssClasses={cssClasses}
        navListEn={cliffSideEn}
        navListDe={cliffSideDe}
      />
    );
  } else {
    return (
      <MobileMenuPageComponent
        cssClasses={cssClasses}
        navListEn={homePageEn}
        navListDe={homePageDe}
      />
    );
  }
};

export default MobileMenu;
