import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

import useScrollPosition from "../../../../utils/scroll-position";

import classNames from "classnames";

import navigationList from "../../../../../data/navigation-data.json";
import LanguageDesktopSubmenu from "../../../../language-desktop-submenu";

interface Props {
  cssClasses?: string;
}

const {
  hillStreet: { en, de },
} = navigationList;

const HillStreetDesktopMenu = ({ cssClasses }: Props) => {
  const router = useRouter();
  const currentRoute = router.pathname;
  const { locale } = useRouter();

  const scrollPosition = useScrollPosition();

  return (
    <div className={`hidden desktopSmall:block ${cssClasses}`}>
      <div className="flex justify-between items-end">
        <Link
          href="/"
          className="desktopSmall:hover:scale-105 ease-in-out duration-500"
          rel="preload"
          as="image"
        >
          <Image
            src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/Luna-Blue-Logo.png"
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
  );
};

export default HillStreetDesktopMenu;
