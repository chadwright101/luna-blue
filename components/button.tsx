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
      className={`flex gap-2 uppercase text-14px text-pureBlack font-350 tracking-widest ${
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
          "w-[16px] animate-pulse rotate-180 -translate-x-[1.5px]":
            arrowAnimate,
        })}
      />
    </Link>
  );
};

export default Button;
