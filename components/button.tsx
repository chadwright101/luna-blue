import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import classNames from "classnames";

interface Props {
  cssClasses?: string;
  url: string;
}

const Button = ({ cssClasses, url }: Props) => {
  const [arrowAnimate, setArrowAnimate] = useState(false);
  return (
    <Link
      href={url}
      className={`flex gap-2 uppercase text-14px text-pureBlack font-350 tracking-widest ${cssClasses}`}
      onMouseEnter={() => setArrowAnimate(true)}
      onMouseLeave={() => setArrowAnimate(false)}
    >
      Read more
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
