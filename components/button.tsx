import Link from "next/link";
import Image from "next/image";
import { useState, ReactNode } from "react";

import classNames from "classnames";

interface Props {
  cssClasses?: string;
  url: string;
  children?: ReactNode;
  width?: string;
}

const Button = ({ cssClasses, url, children, width }: Props) => {
  const [arrowAnimate, setArrowAnimate] = useState(false);
  return (
    <Link
      href={url}
      className={`flex gap-2 items-center uppercase text-14px text-left text-pureBlack font-350 tracking-widest hover:text-black hover:tabletLarge:text-brown ${
        width || "w-[147px]"
      } p-3 -m-3 desktopSmall:p-0 desktopSmall:m-0 ${cssClasses}`}
      onMouseEnter={() => setArrowAnimate(true)}
      onMouseLeave={() => setArrowAnimate(false)}
    >
      {children || "Read more"}
      <Image
        src="/icons/plus.svg"
        alt="Plus sign icon"
        width={13}
        height={13}
        className={classNames("-translate-y-[1.5px] ease-in-out duration-500", {
          "tabletLarge:w-[16px] tabletLarge:animate-pulse tabletLarge:rotate-180":
            arrowAnimate,
        })}
      />
    </Link>
  );
};

export default Button;
