import { useState } from "react";

import classNames from "classnames";
import ImageContainer from "./utils/image-container";

interface Props {
  propertyName?: string;
  cssClasses?: string;
  url: string;
}

const DesktopImageGrid = ({ url, cssClasses, propertyName }: Props) => {
  const [hoverZoom, setHoverZoom] = useState(false);
  return (
    <div className={`overflow-hidden ${cssClasses}`}>
      <ImageContainer
        src={url}
        alt={`${
          propertyName
            ? `${propertyName} by Luna Blue - Plettenberg Bay`
            : "Luna Blue Plettenberg Bay"
        }`}
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
        phone={70}
        tabletLarge={60}
        desktop={45}
      />
    </div>
  );
};

export default DesktopImageGrid;
