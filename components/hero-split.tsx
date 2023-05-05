import { useState } from "react";
import Image from "next/image";

import classNames from "classnames";

interface Props {
  cssClasses?: string;
  url: string;
}

const HeroSplit = ({ url, cssClasses }: Props) => {
  const [hoverZoom, setHoverZoom] = useState(false);
  return (
    <div className={`overflow-hidden ${cssClasses}`}>
      <Image
        src={url}
        alt="Luna Blue Guesthouse"
        width={1400}
        height={750}
        className={classNames(
          "object-cover h-[275px] phone:h-[325px] tablet:h-[375px] tabletLarge:h-[425px] desktop:h-[500px] ease-in-out duration-500",
          {
            "scale-[107.5%]": hoverZoom,
          }
        )}
        priority
        onMouseEnter={() => setHoverZoom(true)}
        onMouseLeave={() => setHoverZoom(false)}
      />
    </div>
  );
};

export default HeroSplit;
