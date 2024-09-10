import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { useContext } from "react";

import useScrollPosition from "../../../utils/scroll-position";
import WindowWidthContext from "@/components/utils/window-width-context";

import classNames from "classnames";

import DesktopLanguageSubmenu from "./desktop-language-submenu";

interface Props {
  cssClasses?: string;
  navListEn: { title: string; url: string; targetBlank: boolean }[];
  navListDe: { title: string; url: string; targetBlank: boolean }[];
}

const DesktopMenuPageComponent = ({
  cssClasses,
  navListEn,
  navListDe,
}: Props) => {
  const router = useRouter();
  const currentRoute = router.pathname;
  const { locale } = useRouter();

  const scrollPosition = useScrollPosition();

  const { windowWidth } = useContext(WindowWidthContext);

  return (
    <div className={`hidden desktopSmall:block ${cssClasses}`}>
      <div className="flex justify-between items-end">
        <Link
          prefetch={false}
          href="/"
          className="desktopSmall:hover:scale-105 ease-in-out duration-500"
        >
          <Image
            src="/assets/images/luna-blue-logo.png"
            alt="Luna Blue logo"
            width={150}
            height={193}
            className={classNames(
              "h-auto ease-in-out duration-300 delay-[10ms] w-[75px]",
              {
                "scale-[80%] translate-y-2": scrollPosition > 0,
              }
            )}
            priority
            sizes="(max-width: 1400px) 15vw, 15vw"
          />
        </Link>
        <nav>
          <ul
            className={classNames(
              "flex gap-6 ease-in-out delay-[10ms] duration-300 translate-y-2"
            )}
          >
            {locale === "en"
              ? navListEn.map(({ title, url, targetBlank }, index) => (
                  <li
                    key={index}
                    className="desktopSmall:hover:scale-105 ease-in-out duration-300"
                  >
                    <Link
                      prefetch={false}
                      href={
                        windowWidth >= 1050 && url === "/#about-us"
                          ? url + "-desktop"
                          : windowWidth >= 1050 && url === "/#contact"
                          ? url + "-desktop"
                          : url
                      }
                      className={classNames(
                        "text-14px uppercase font-Raleway tracking-widest",
                        {
                          "text-brown": currentRoute === url,
                          "font-350 p-[0.8rem_0.75rem_0.75rem_0.75rem] -m-[0.8rem_0.75rem_0.75rem_0.75rem] bg-brown text-white hover:text-white ml-0":
                            title === "Book direct",
                        }
                      )}
                      target={targetBlank ? "_blank" : "_self"}
                    >
                      {title}
                    </Link>
                  </li>
                ))
              : navListDe.map(({ title, url, targetBlank }, index) => (
                  <li
                    key={index}
                    className="desktopSmall:hover:scale-105 ease-in-out duration-300"
                  >
                    <Link
                      prefetch={false}
                      href={
                        windowWidth >= 1050 && url === "/#about-us"
                          ? url + "-desktop"
                          : windowWidth >= 1050 && url === "/#contact"
                          ? url + "-desktop"
                          : url
                      }
                      className={classNames(
                        "text-14px uppercase font-Raleway tracking-widest",
                        {
                          "text-brown": currentRoute === url,
                          "font-350 p-[0.8rem_0.75rem_0.75rem_0.75rem] -m-[0.8rem_0.75rem_0.75rem_0.75rem] bg-brown text-white hover:text-white ml-0":
                            title === "Direkt buchen",
                        }
                      )}
                      target={targetBlank ? "_blank" : "_self"}
                    >
                      {title}
                    </Link>
                  </li>
                ))}
            {/* language submenu */}
            <DesktopLanguageSubmenu />
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DesktopMenuPageComponent;
