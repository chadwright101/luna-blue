import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import useScrollPosition from "./utils/scroll-position";
import LanguageMobileMenu from "./language-mobile-menu";

import classNames from "classnames";

import navigationList from "../data/navigation-data.json";
import LanguageDesktopSubmenu from "./language-desktop-submenu";

interface Props {
  cssClasses?: string;
}

const { en, de } = navigationList;

const Header = ({ cssClasses }: Props) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const router = useRouter();
  const currentRoute = router.pathname;
  const { locale } = useRouter();

  const scrollPosition = useScrollPosition();

  return (
    <header className={`bg-white ${cssClasses}`}>
      <div className="desktop:max-w-[1400px] desktop:mx-auto">
        {/* mobile view */}
        <div className="desktopSmall:hidden">
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="p-3 -m-3 desktopSmall:p-0 desktopSmall:m-0"
              rel="preload"
              as="image"
            >
              <Image
                src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/luna-blue-logo.png"
                alt="Luna Blue Off-grid Guesthouse logo"
                width={50}
                height={65}
                className={classNames(
                  "w-12 h-auto ease-in-out duration-300 delay-[10ms]",
                  {
                    "w-[40px] -translate-y-0.5": scrollPosition > 0,
                  }
                )}
                priority
                sizes="(max-width: 425px) 5vw, 5vw"
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
                priority
              />
            </button>
          </div>
          {toggleMenu && (
            <nav className="fixed top-0 h-screen w-full bg-beige -mx-8 pl-8 pt-14">
              <ul className="flex flex-col gap-8">
                <LanguageMobileMenu />
                {locale === "en"
                  ? en.map(({ title, url, targetBlank }, index) => (
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
                          target={targetBlank ? "_blank" : "_self"}
                        >
                          {title}
                        </Link>
                      </li>
                    ))
                  : de.map(({ title, url, targetBlank }, index) => (
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
                          target={targetBlank ? "_blank" : "_self"}
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
                  priority
                />
              </button>
            </nav>
          )}
        </div>

        {/* desktop view */}
        <div className="hidden desktopSmall:block">
          <div className="flex justify-between items-end">
            <Link
              href="/"
              className="desktopSmall:hover:scale-105 ease-in-out duration-500"
              rel="preload"
              as="image"
            >
              <Image
                src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/luna-blue-logo.png"
                alt="Luna Blue Off-grid Guesthouse logo"
                width={150}
                height={193}
                className={classNames(
                  "h-auto ease-in-out duration-300 delay-[10ms]",
                  {
                    "w-[75px]": scrollPosition === 0,
                    "w-[50px]": scrollPosition > 0,
                  }
                )}
                priority
                sizes="(max-width: 1400px) 15vw, 15vw"
              />
            </Link>
            <nav>
              <ul
                className={classNames(
                  "flex gap-6 ease-in-out delay-[10ms] duration-300 -translate-y-3",
                  {
                    "translate-y-2": scrollPosition > 0,
                  }
                )}
              >
                {locale === "en"
                  ? en.map(({ title, url, targetBlank }, index) => (
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
                          target={targetBlank ? "_blank" : "_self"}
                        >
                          {title}
                        </Link>
                      </li>
                    ))
                  : de.map(({ title, url, targetBlank }, index) => (
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
                          target={targetBlank ? "_blank" : "_self"}
                        >
                          {title}
                        </Link>
                      </li>
                    ))}
                {/* language submenu */}
                <LanguageDesktopSubmenu />
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
