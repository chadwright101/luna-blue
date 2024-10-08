import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import useScrollPosition from "../../../utils/scroll-position";
import MobileLanguageMenu from "./mobile-language-menu";

import classNames from "classnames";

interface Props {
  cssClasses?: string;
  navListEn: { title: string; url: string; targetBlank: boolean }[];
  navListDe: { title: string; url: string; targetBlank: boolean }[];
}

const MobileMenuPageComponent = ({
  cssClasses,
  navListEn,
  navListDe,
}: Props) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const router = useRouter();
  const currentRoute = router.pathname;
  const { locale } = useRouter();

  const scrollPosition = useScrollPosition();

  useEffect(() => {
    if (toggleMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [toggleMenu]);

  return (
    <div className={`desktopSmall:hidden ${cssClasses}`}>
      <div className="flex justify-between items-center">
        <Link
          prefetch={false}
          href="/"
          className="p-3 -m-3 desktopSmall:p-0 desktopSmall:m-0"
        >
          <Image
            src="/assets/images/luna-blue-logo.png"
            alt="Luna Blue logo"
            width={80}
            height={80}
            className={classNames(
              "w-12 h-auto ease-in-out duration-300 delay-[10ms]",
              {
                "scale-[85%] translate-y-1": scrollPosition > 0,
              }
            )}
            priority
            sizes="(max-width: 425px) 7.5vw, 7.5vw"
          />
        </Link>
        <button
          onClick={() => setToggleMenu(true)}
          className="p-3 -m-3 desktopSmall:p-0 desktopSmall:m-0"
        >
          <Image
            src="/assets/icons/menu.svg"
            alt="Menu icon"
            width={45}
            height={45}
            priority
            className={`ease-in-out duration-300 translate-y-1 ${
              scrollPosition > 0 ? "translate-y-2" : ""
            }`}
          />
        </button>
      </div>
      {toggleMenu && (
        <nav className="fixed top-0 h-screen w-full bg-beige -mx-8 pl-8 pt-14">
          <ul className="flex flex-col gap-8">
            <MobileLanguageMenu />
            {locale === "en"
              ? navListEn.map(({ title, url, targetBlank }, index) => (
                  <li key={index}>
                    <Link
                      prefetch={false}
                      href={url}
                      onClick={() => setToggleMenu(false)}
                      className={classNames(
                        "p-4 -m-4 text-18px uppercase font-Raleway tracking-widest desktopSmall:p-0 desktopSmall:m-0",
                        {
                          "text-brown": currentRoute === url,
                          "font-350 p-[1.2rem_1rem_1rem_1rem] bg-brown text-white ml-0":
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
                  <li key={index}>
                    <Link
                      prefetch={false}
                      href={url}
                      onClick={() => setToggleMenu(false)}
                      className={classNames(
                        "p-4 -m-4 text-18px uppercase font-Raleway tracking-widest desktopSmall:p-0 desktopSmall:m-0",
                        {
                          "text-brown": currentRoute === url,
                          "font-350 p-[1.2rem_1rem_1rem_1rem] bg-brown text-white ml-0":
                            title === "Direkt buchen",
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
              src="/assets/icons/close.svg"
              alt="Close icon"
              width={45}
              height={45}
              className={classNames("fixed top-0 right-8", {
                "pt-7": scrollPosition === 0 && toggleMenu,
                "pt-8": scrollPosition > 0 && toggleMenu,
              })}
              priority
            />
          </button>
        </nav>
      )}
    </div>
  );
};

export default MobileMenuPageComponent;
