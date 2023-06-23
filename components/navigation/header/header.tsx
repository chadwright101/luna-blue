import DesktopMenu from "./desktop/desktop-menu";
import MobileMenu from "./mobile/mobile-menu";

interface Props {
  cssClasses?: string;
}

const Header = ({ cssClasses }: Props) => {
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
