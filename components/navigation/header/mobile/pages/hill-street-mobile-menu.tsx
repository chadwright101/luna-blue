import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import useScrollPosition from "../../../../utils/scroll-position";
import LanguageMobileMenu from "../../../../../pages/robberg-ridge/language-mobile-menu";

import classNames from "classnames";

import navigationList from "../../../../../data/navigation-data.json";

interface Props {
  cssClasses?: string;
}

const {
  hillStreet: { en, de },
} = navigationList;

const HillStreetMobileMenu = ({ cssClasses }: Props) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const router = useRouter();
  const currentRoute = router.pathname;
  const { locale } = useRouter();

  const scrollPosition = useScrollPosition();

  return (
    <div className={`desktopSmall:hidden ${cssClasses}`}>
      <div className="flex justify-between items-center">
        <Link
          href="/"
          className="p-3 -m-3 desktopSmall:p-0 desktopSmall:m-0"
          rel="preload"
          as="image"
        >
          <Image
            src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/Luna-Blue-Logo.png"
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
  );
};

export default HillStreetMobileMenu;
