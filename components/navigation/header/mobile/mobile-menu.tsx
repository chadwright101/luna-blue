import { useRouter } from "next/router";
import RobbergRidgeMobileMenu from "./pages/robberg-ridge-mobile-menu";
import HomePageMobileMenu from "./pages/home-page-mobile-menu";
import HillStreetMobileMenu from "./pages/hill-street-mobile-menu";

interface Props {
  cssClasses?: string;
}

export const hillStreetUrls = [
  "/hill-street",
  "/hill-street/about-us",
  "/hill-street/our-rooms",
  "/hill-street/contact",
];

export const robbergRidgeUrls = [
  "/robberg-ridge",
  "/robberg-ridge/about-us",
  "/robberg-ridge/our-rooms",
  "/robberg-ridge/contact",
];

const MobileMenu = ({ cssClasses }: Props) => {
  const router = useRouter();
  const currentRoute = router.pathname;
  if (hillStreetUrls.includes(currentRoute)) {
    return <HillStreetMobileMenu cssClasses={cssClasses} />;
  } else if (robbergRidgeUrls.includes(currentRoute)) {
    return <RobbergRidgeMobileMenu cssClasses={cssClasses} />;
  } else {
    return <HomePageMobileMenu cssClasses={cssClasses} />;
  }
};

export default MobileMenu;
