import Link from "next/link";
import { useRouter } from "next/router";

import classNames from "classnames";
import RomanNumeralsTitle from "@/components/utils/roman-numerals-title";

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

  return (
    <ul
      className={`mt-6 flex flex-col gap-2 tabletLarge:grid grid-flow-row tabletLarge:h-[200px] tabletLarge:gap-0 ${cssClasses}`}
    >
      {locale === "en"
        ? navListEn.map(({ title, url, targetBlank }, index) => (
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
                <RomanNumeralsTitle index={index} title={title} />
              </Link>
            </li>
          ))
        : navListDe.map(({ title, url, targetBlank }, index) => (
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
                <RomanNumeralsTitle index={index} title={title} />
              </Link>
            </li>
          ))}
    </ul>
  );
};

export default PageFooterNavComponent;
