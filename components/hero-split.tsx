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
        width={450}
        height={500}
        className={classNames(
          "object-cover h-[275px] phone:h-[300px] tablet:h-[375px] tabletLarge:h-[425px] desktop:h-[500px] ease-in-out duration-500",
          {
            "scale-[107.5%]": hoverZoom,
          }
        )}
        priority
        onMouseEnter={() => setHoverZoom(true)}
        onMouseLeave={() => setHoverZoom(false)}
        sizes="(max-width: 425px) 60vw, (max-width: 900px) 50vw,(max-width: 1400px) 50vw, 25vw"
      />
    </div>
  );
};

export default HeroSplit;
