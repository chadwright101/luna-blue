import { ReactNode } from "react";

interface Props {
  cssClasses?: string;
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
