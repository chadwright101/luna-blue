import Link from "next/link";
import Image from "next/image";
import { useState, ReactNode } from "react";

import classNames from "classnames";

interface Props {
  cssClasses?: string;
  url: string;
  children?: ReactNode;
  width?: string;
  whiteText?: boolean;
  targetBlank?: boolean;
}

const Button = ({
  cssClasses,
  url,
  children,
  width,
  whiteText,
  targetBlank,
}: Props) => {
  const [arrowAnimate, setArrowAnimate] = useState(false);
  return (
    <Link
      href={url}
      className={classNames(
        `flex gap-2 items-center uppercase text-14px w-[123px] text-left font-350 tracking-widest hover:tabletLarge:text-brown ${width} p-3 -m-3 desktopSmall:p-0 desktopSmall:m-0 ${cssClasses}`,
        {
          "text-pureBlack": !whiteText,
          "text-white": whiteText,
        }
      )}
      onMouseEnter={() => setArrowAnimate(true)}
      onMouseLeave={() => setArrowAnimate(false)}
      target={targetBlank ? "_blank" : "_self"}
    >
      {children || "Read more"}
      {whiteText ? (
        <Image
          src="/icons/plus-white.svg"
          alt="Plus sign icon"
          width={13}
          height={13}
          className={classNames(
            "-translate-y-[1.5px] ease-in-out duration-500",
            {
              "tabletLarge:w-[16px] tabletLarge:animate-pulse tabletLarge:rotate-180":
                arrowAnimate,
            }
          )}
        />
      ) : (
        <Image
          src="/icons/plus.svg"
          alt="Plus sign icon"
          width={13}
          height={13}
          className={classNames(
            "-translate-y-[1.5px] ease-in-out duration-500",
            {
              "tabletLarge:w-[16px] tabletLarge:animate-pulse tabletLarge:rotate-180":
                arrowAnimate,
            }
          )}
        />
      )}
    </Link>
  );
};

export default Button;
