import { CssProps } from "@/components/property-pages/home-page/home-page";
import DesktopMenu from "./desktop/desktop-menu";
import MobileMenu from "./mobile/mobile-menu";

const Header = ({ cssClasses }: CssProps) => {
  return (
    <header className={`bg-white drop-shadow-md ${cssClasses}`}>
      <div className="desktop:max-w-[1400px] desktop:mx-auto">
        {/* mobile view */}
        <MobileMenu />
        {/* desktop view */}
        <DesktopMenu />
      </div>
    </header>
  );
};

export default Header;
