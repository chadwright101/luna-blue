import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

import classNames from "classnames";

interface Props {
  cssClasses?: string;
  url: string;
  germanWidth?: string;
  englishWidth?: string;
  whiteText?: boolean;
  targetBlank?: boolean;
  german?: string;
  english?: string;
}

const Button = ({
  cssClasses,
  url,
  germanWidth,
  englishWidth,
  whiteText,
  targetBlank,
  german,
  english,
}: Props) => {
  const [arrowAnimate, setArrowAnimate] = useState(false);
  const { locale } = useRouter();
  return (
    <Link
      prefetch={false}
      href={url}
      className={classNames(
        `flex gap-2 items-center uppercase text-14px text-left font-350 tracking-widest hover:desktopSmall:text-brown p-3 -m-3 desktopSmall:p-0 desktopSmall:m-0 ${
          !englishWidth && locale === "en"
            ? "w-[144px] desktopSmall:w-[123px]"
            : !germanWidth && locale !== "en"
            ? "w-[152px] desktopSmall:w-[131px]"
            : englishWidth && locale === "en"
            ? englishWidth
            : germanWidth
        } " ${cssClasses}`,
        {
          "text-pureBlack": !whiteText,
          "text-white": whiteText,
        }
      )}
      onMouseEnter={() => setArrowAnimate(true)}
      onMouseLeave={() => setArrowAnimate(false)}
      target={targetBlank ? "_blank" : "_self"}
    >
      {locale === "en" ? english || "View more" : german || "Mehr lesen"}
      {whiteText ? (
        <Image
          src="/assets/icons/plus-white.svg"
          alt="Plus sign icon"
          width={13}
          height={13}
          className={classNames(
            "-translate-y-[1.5px] ease-in-out duration-500",
            {
              "desktopSmall:w-[16px] desktopSmall:animate-pulse desktopSmall:rotate-180":
                arrowAnimate,
            }
          )}
        />
      ) : (
        <Image
          src="/assets/icons/plus.svg"
          alt="Plus sign icon"
          width={13}
          height={13}
          className={classNames(
            "-translate-y-[1.5px] ease-in-out duration-500",
            {
              "desktopSmall:w-[16px] desktopSmall:animate-pulse desktopSmall:rotate-180":
                arrowAnimate,
            }
          )}
        />
      )}
    </Link>
  );
};

export default Button;
