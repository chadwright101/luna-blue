import { ReactNode } from "react";
import { CssProps } from "./property-pages/home-page/home-page";

interface Props extends CssProps {
  children: ReactNode;
}

const Layout = ({ cssClasses, children }: Props) => {
  return (
    <div className={`px-8 ${cssClasses}`}>
      <div className="desktop:max-w-[1400px] desktop:mx-auto">{children}</div>
    </div>
  );
};

export default Layout;
