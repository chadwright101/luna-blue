import Link from "next/link";
import { useRouter } from "next/router";

import navigation from "@/data/navigation-data.json";
import classNames from "classnames";

const {
  hillStreet: { en, de },
} = navigation;

const HillStreetFooterNav = () => {
  const { locale } = useRouter();

  return (
    <ul className="mt-6 flex flex-col gap-2 tabletLarge:grid grid-flow-row tabletLarge:h-[200px] tabletLarge:gap-0">
      {locale === "en"
        ? en.map(({ title, url, targetBlank }, index) => (
            <li key={index}>
              <Link
                href={url}
                className={classNames(
                  "p-3 -m-3 desktopSmall:p-0 desktopSmall:m-0",
                  {
                    "font-500": targetBlank,
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
                className={classNames(
                  "p-3 -m-3 desktopSmall:p-0 desktopSmall:m-0",
                  {
                    "font-500": targetBlank,
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

export default HillStreetFooterNav;
