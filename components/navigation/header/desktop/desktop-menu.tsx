import { useRouter } from "next/router";
import HomePageDesktopMenu from "./pages/home-page-desktop-menu";
import RobbergRidgeDesktopMenu from "./pages/robberg-ridge-desktop-menu";
import HillStreetDesktopMenu from "./pages/robberg-ridge-desktop-menu";
import { hillStreetUrls, robbergRidgeUrls } from "../mobile/mobile-menu";

interface Props {
  cssClasses?: string;
}

const DesktopMenu = ({ cssClasses }: Props) => {
  const router = useRouter();
  const currentRoute = router.pathname;
  if (hillStreetUrls.includes(currentRoute)) {
    return <HillStreetDesktopMenu cssClasses={cssClasses} />;
  } else if (robbergRidgeUrls.includes(currentRoute)) {
    return <RobbergRidgeDesktopMenu cssClasses={cssClasses} />;
  } else {
    return <HomePageDesktopMenu cssClasses={cssClasses} />;
  }
};

export default DesktopMenu;
