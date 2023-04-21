import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import classNames from "classnames";

import navigationList from "../data/navigation.json";

interface Props {
  cssClasses?: string;
}

const Header = ({ cssClasses }: Props) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <header className={`${cssClasses}`}>
      <div className="desktop:max-w-[1400px] desktop:mx-auto">
        {/* mobile view */}
        <div className="tabletLarge:hidden">
          <div className="flex justify-between items-center">
            <Image
              src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/Luna-Blue-Logo.png"
              alt="Luna Blue logo"
              width={150}
              height={193}
              className="w-10 h-auto"
            />
            <button onClick={() => setToggleMenu(true)}>
              <Image
                src="/icons/menu.svg"
                alt="Menu icon"
                width={45}
                height={45}
              />
            </button>
          </div>
          {toggleMenu && (
            <nav className="fixed top-0 h-screen w-full bg-beige -mx-8 pl-8 pt-14">
              <ul className="flex flex-col gap-7">
                {navigationList.map(({ title, url }, index) => (
                  <li key={index}>
                    <Link
                      href={url}
                      className={classNames(
                        "p-4 -m-4 text-17px uppercase font-Raleway tracking-widest",
                        {
                          "text-brown": currentRoute === url,
                        }
                      )}
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
              <button onClick={() => setToggleMenu(false)}>
                <Image
                  src="/icons/close.svg"
                  alt="Close icon"
                  width={45}
                  height={45}
                  className="fixed top-0 pt-3 right-8"
                />
              </button>
            </nav>
          )}
        </div>

        {/* desktop view */}
        <div className="hidden tabletLarge:block">
          <div className="flex justify-between items-end">
            <Image
              src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/Luna-Blue-Logo.png"
              alt="Luna Blue logo"
              width={150}
              height={193}
              className="w-10 h-auto tabletLarge:w-[75px]"
            />
            <nav>
              <ul className="flex gap-6 -translate-y-3">
                {navigationList.map(({ title, url }, index) => (
                  <li key={index}>
                    <Link
                      href={url}
                      className={classNames(
                        "p-4 -m-4 text-14px uppercase font-Raleway tracking-widest hover:text-brown",
                        {
                          "text-brown": currentRoute === url,
                        }
                      )}
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
