import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import useScrollPosition from "./utils/scroll-position";

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

  const scrollPosition = useScrollPosition();

  return (
    <header className={`bg-white ${cssClasses}`}>
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
                className={classNames(
                  "w-12 h-auto ease-in-out duration-300 delay-[10ms]",
                  {
                    "w-[40px] -translate-y-0.5": scrollPosition > 0,
                  }
                )}
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
              <ul className="flex flex-col gap-8">
                <li className="mb-4 flex gap-8">
                  <p className="px-3 pt-2 pb-1.5 -mx-3 -my-2 border-brown border-2 font-500">
                    English
                  </p>
                  <p className="p-3 -m-3">Deutsch</p>
                </li>
                {navigationList.map(({ title, url }, index) => (
                  <li key={index}>
                    <Link
                      href={url}
                      onClick={() => setToggleMenu(false)}
                      className={classNames(
                        "p-4 -m-4 text-18px uppercase font-Raleway tracking-widest desktopSmall:p-0 desktopSmall:m-0",
                        {
                          "text-brown": currentRoute === url,
                          "font-350 p-3 -m-3 bg-brown text-white hover:text-white":
                            index === 5,
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
                  className="fixed top-0 pt-[24px] right-8"
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
              className="desktopSmall:hover:scale-105 ease-in-out duration-500"
            >
              <Image
                src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/Luna-Blue-Logo.png"
                alt="Luna Blue logo"
                width={150}
                height={193}
                className={classNames(
                  "h-auto ease-in-out duration-300 delay-[10ms]",
                  {
                    "w-[75px]": scrollPosition === 0,
                    "w-[50px]": scrollPosition > 0,
                  }
                )}
              />
            </Link>
            <nav>
              <ul
                className={classNames(
                  "flex gap-6 ease-in-out delay-[10ms] duration-300 -translate-y-3",
                  { "translate-y-2": scrollPosition > 0 }
                )}
              >
                {navigationList.map(({ title, url }, index) => (
                  <li
                    key={index}
                    className="desktopSmall:hover:scale-105 ease-in-out duration-300"
                  >
                    <Link
                      href={url}
                      className={classNames(
                        "text-14px uppercase font-Raleway tracking-widest",
                        {
                          "text-brown": currentRoute === url,
                          "font-350 py-2 px-2.5 -my-2 -mx-2.5 bg-brown text-white hover:text-white":
                            index === 5,
                        }
                      )}
                    >
                      {title}
                    </Link>
                  </li>
                ))}
                {/* language submenu */}
                <li
                  className="ml-3 flex flex-col gap-4 items-center text-14px uppercase font-Raleway tracking-widest cursor-pointer desktopSmall:hover:scale-105 ease-in-out duration-300"
                  onMouseEnter={() => setToggleLanguage(true)}
                  onMouseLeave={() => setToggleLanguage(false)}
                >
                  <div className="flex hover:text-brown  p-2 -m-2 translate-y-[3px] desktopSmall:p-0 desktopSmall:m-0">
                    EN
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
                      "ease-in-out duration-300 scale-y-0",
                      {
                        "scale-y-100": toggleLanguage,
                      }
                    )}
                  >
                    {toggleLanguage && (
                      <ul className="-translate-x-10 flex flex-col gap-3 bg-white/90 px-5 pb-5 pt-7 absolute -translate-y-5 text-[12px]">
                        <li className="hover:text-brown ease-in-out duration-300 cursor-pointer desktopSmall:hover:scale-110">
                          DE
                          <Image
                            src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/125px-Flag_of_Germany.svg.png"
                            alt="German flag"
                            width={20}
                            height={15}
                          />
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
