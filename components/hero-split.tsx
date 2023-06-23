import { useState } from "react";

import classNames from "classnames";
import ImageContainer from "./utils/image-container";

interface Props {
  cssClasses?: string;
  url: string;
}

const HeroSplit = ({ url, cssClasses }: Props) => {
  const [hoverZoom, setHoverZoom] = useState(false);
  return (
    <div className={`overflow-hidden ${cssClasses}`}>
      <ImageContainer
        src={url}
        alt="Luna Blue Off-grid Guesthouse"
        width={450}
        height={500}
        cssClasses={classNames(
          "object-cover h-[275px] phone:h-[300px] tablet:h-[375px] tabletLarge:h-[425px] desktop:h-[500px] ease-in-out duration-500",
          {
            "scale-[107.5%]": hoverZoom,
          }
        )}
        eager
        onMouseEnter={() => setHoverZoom(true)}
        onMouseLeave={() => setHoverZoom(false)}
        smallest={70}
        tablet={60}
        desktopSmall={45}
        desktop={35}
      />
    </div>
  );
};

export default HeroSplit;
