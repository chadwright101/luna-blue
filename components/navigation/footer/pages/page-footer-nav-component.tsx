import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";

import WindowWidthContext from "@/components/utils/window-width-context";

import classNames from "classnames";

interface Props {
  cssClasses?: string;
  navListEn: { title: string; url: string; targetBlank: boolean }[];
  navListDe: { title: string; url: string; targetBlank: boolean }[];
}

const PageFooterNavComponent = ({
  cssClasses,
  navListEn,
  navListDe,
}: Props) => {
  const { locale } = useRouter();
  const { windowWidth } = useContext(WindowWidthContext);

  return (
    <ul className={`mt-6 grid gap-4 desktopSmall:gap-2 ${cssClasses}`}>
      {locale === "en"
        ? navListEn.map(({ title, url, targetBlank }, index) => (
            <li key={index}>
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
                  "p-3 -m-3 desktopSmall:p-0 desktopSmall:m-0",
                  {
                    "font-500": title === "Book direct",
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
                href={
                  windowWidth >= 1050 && url === "/#about-us"
                    ? url + "-desktop"
                    : windowWidth >= 1050 && url === "/#contact"
                    ? url + "-desktop"
                    : url
                }
                className={classNames(
                  "p-3 -m-3 desktopSmall:p-0 desktopSmall:m-0",
                  {
                    "font-500": title === "Direkt buchen",
                  }
                )}
                target={targetBlank ? "_blank" : "_self"}
              >
                {title}
              </Link>
            </li>
          ))}
    </ul>
  );
};

export default PageFooterNavComponent;
