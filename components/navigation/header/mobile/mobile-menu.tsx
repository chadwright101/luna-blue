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

export const robbergBeachUrls = [
  "/robberg-beach-view-villa",
  "/robberg-beach-view-villa/about",
  "/robberg-beach-view-villa/our-rooms",
  "/robberg-beach-view-villa/contact",
];

export const cliffSideUrls = [
  "/cliffside-cabins",
  "/cliffside-cabins/about",
  "/cliffside-cabins/our-cabins",
  "/cliffside-cabins/contact",
];
export const forestCabinsUrls = [
  "/forest-cabins",
  "/forest-cabins/about",
  "/forest-cabins/our-cabins",
  "/forest-cabins/contact",
];

const {
  robbergBeach: { en: robbergBeachEn, de: robbergBeachDe },
  lagoonVilla: { en: lagoonVillaEn, de: lagoonVillaDe },
  cliffSide: { en: cliffSideEn, de: cliffSideDe },
  forestCabins: { en: forestCabinsEn, de: forestCabinsDe },
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
  } else if (robbergBeachUrls.includes(currentRoute)) {
    return (
      <MobileMenuPageComponent
        cssClasses={cssClasses}
        navListEn={robbergBeachEn}
        navListDe={robbergBeachDe}
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
  } else if (forestCabinsUrls.includes(currentRoute)) {
    return (
      <MobileMenuPageComponent
        cssClasses={cssClasses}
        navListEn={forestCabinsEn}
        navListDe={forestCabinsDe}
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
