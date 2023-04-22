import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import classNames from "classnames";

import navigationList from "../data/navigation-data.json";

interface Props {
  cssClasses?: string;
}

const Header = ({ cssClasses }: Props) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleLanguage, setToggleLanguage] = useState(false);

  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <header className={`${cssClasses}`}>
      <div className="desktop:max-w-[1400px] desktop:mx-auto">
        {/* mobile view */}
        <div className="tabletLarge:hidden">
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="p-3 -m-3 desktopSmall:p-0 desktopSmall:m-0"
            >
              <Image
                src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/Luna-Blue-Logo.png"
                alt="Luna Blue logo"
                width={150}
                height={193}
                className="w-12 h-auto"
              />
            </Link>
            <button
              onClick={() => setToggleMenu(true)}
              className="p-3 -m-3 desktopSmall:p-0 desktopSmall:m-0"
            >
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
                        "p-4 -m-4 text-18px uppercase font-Raleway tracking-widest desktopSmall:p-0 desktopSmall:m-0",
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
              <button
                onClick={() => setToggleMenu(false)}
                className="p-3 -m-3 desktopSmall:p-0 desktopSmall:m-0"
              >
                <Image
                  src="/icons/close.svg"
                  alt="Close icon"
                  width={45}
                  height={45}
                  className="fixed top-0 pt-[18px] right-8"
                />
              </button>
            </nav>
          )}
        </div>

        {/* desktop view */}
        <div className="hidden tabletLarge:block">
          <div className="flex justify-between items-end">
            <Link
              href="/"
              className="desktopSmall:hover:scale-105 transition-all duration-500"
            >
              <Image
                src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/Luna-Blue-Logo.png"
                alt="Luna Blue logo"
                width={150}
                height={193}
                className="w-10 h-auto tabletLarge:w-[75px]"
              />
            </Link>
            <nav>
              <ul className="flex gap-6 -translate-y-3">
                {navigationList.map(({ title, url }, index) => (
                  <li
                    key={index}
                    className="desktopSmall:hover:scale-110 transition-all duration-500"
                  >
                    <Link
                      href={url}
                      className={classNames(
                        "text-14px uppercase font-Raleway tracking-widest",
                        {
                          "text-brown": currentRoute === url,
                        }
                      )}
                    >
                      {title}
                    </Link>
                  </li>
                ))}
                {/* language submenu */}
                <li
                  className="flex flex-col gap-4 items-center text-14px uppercase font-Raleway tracking-widest cursor-pointer desktopSmall:hover:scale-110 transition-all duration-500"
                  onMouseEnter={() => setToggleLanguage(true)}
                  onMouseLeave={() => setToggleLanguage(false)}
                >
                  <div className="flex hover:text-brown  p-2 -m-2 translate-y-[3px] desktopSmall:p-0 desktopSmall:m-0">
                    EN{" "}
                    <Image
                      src="/icons/down-arrow.svg"
                      alt="Down arrow icon"
                      width={25}
                      height={25}
                      className="-mt-0.5"
                    />
                  </div>
                  <div
                    className={classNames(
                      "transition-all duration-300 scale-y-0",
                      {
                        "scale-y-100": toggleLanguage,
                      }
                    )}
                  >
                    {toggleLanguage && (
                      <ul className="-translate-x-10 flex flex-col gap-3 bg-white/90 px-5 pb-5 pt-7 absolute -translate-y-5 text-[12px]">
                        <li className="hover:text-brown transition-all duration-300 cursor-pointer desktopSmall:hover:scale-110">
                          FR
                        </li>
                        <li className="hover:text-brown transition-all duration-300 cursor-pointer desktopSmall:hover:scale-110">
                          GR
                        </li>
                        <li className="hover:text-brown transition-all duration-300 cursor-pointer desktopSmall:hover:scale-110">
                          IT
                        </li>
                      </ul>
                    )}
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
