import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import classNames from "classnames";

const DesktopLanguageSubmenu = () => {
  const [toggleLanguage, setToggleLanguage] = useState(false);
  const { pathname, query, asPath, locale } = useRouter();

  if (locale === "en") {
    return (
      <li
        className="ml-3 flex flex-col gap-4 items-center text-14px uppercase font-Raleway tracking-widest cursor-pointer desktopSmall:hover:scale-105 ease-in-out duration-300"
        onMouseEnter={() => setToggleLanguage(true)}
        onMouseLeave={() => setToggleLanguage(false)}
      >
        <div className="flex hover:text-brown  p-2 -m-2 translate-y-[3px] desktopSmall:p-0 desktopSmall:m-0">
          EN
          <Image
            src="/assets/icons/down-arrow.svg"
            alt="Down arrow icon"
            width={25}
            height={25}
            className="-mt-0.5"
            priority
          />
        </div>
        <div
          className={classNames("ease-in-out duration-300 scale-y-0", {
            "scale-y-100": toggleLanguage,
          })}
        >
          {toggleLanguage && (
            <ul className="-translate-x-10 flex flex-col gap-3 bg-white/90 px-5 pb-5 pt-7 absolute -translate-y-5 text-[12px]">
              <li>
                <Link
                  prefetch={false}
                  href={{ pathname, query }}
                  as={asPath}
                  locale="de"
                  className="hover:text-brown ease-in-out duration-300 cursor-pointer desktopSmall:hover:scale-110"
                >
                  DE
                  <Image
                    src="/assets/images/german-flag.png"
                    alt="German flag"
                    width={20}
                    height={15}
                  />
                </Link>
              </li>
            </ul>
          )}
        </div>
      </li>
    );
  } else {
    return (
      <li
        className="ml-3 flex flex-col gap-4 items-center text-14px uppercase font-Raleway tracking-widest cursor-pointer desktopSmall:hover:scale-105 ease-in-out duration-300"
        onMouseEnter={() => setToggleLanguage(true)}
        onMouseLeave={() => setToggleLanguage(false)}
      >
        <button className="flex hover:text-brown  p-2 -m-2 translate-y-[3px] desktopSmall:p-0 desktopSmall:m-0">
          DE
          <Image
            src="/assets/icons/down-arrow.svg"
            alt="Down arrow icon"
            width={25}
            height={25}
            className="-mt-0.5"
            priority
          />
        </button>
        <div
          className={classNames("ease-in-out duration-300 scale-y-0", {
            "scale-y-100": toggleLanguage,
          })}
        >
          {toggleLanguage && (
            <ul className="-translate-x-10 flex flex-col gap-3 bg-white/90 px-5 pb-5 pt-7 absolute -translate-y-5 text-[12px]">
              <li>
                <Link
                  prefetch={false}
                  className="hover:text-brown ease-in-out duration-300 cursor-pointer desktopSmall:hover:scale-110"
                  href={{ pathname, query }}
                  as={asPath}
                  locale="en"
                >
                  EN
                  <Image
                    src="/assets/images/england-flag.png"
                    alt="German flag"
                    width={20}
                    height={15}
                  />
                </Link>
              </li>
            </ul>
          )}
        </div>
      </li>
    );
  }
};

export default DesktopLanguageSubmenu;
