import LightBoxSlider from "@/components/sliders/lightbox-slider";

import classNames from "classnames";

interface Props {
  imageList?: Array<{ url: string }>;
  roomInfo: {
    title: string;
    facilities: string[];
    size: number;
    excluding?: string;
  };
  flip?: boolean;
  singleImageFast?: boolean;
  singleImageMedium?: boolean;
  singleImageSlow?: boolean;
  cssClasses?: string;
}

const RoomInfoSlider = ({
  imageList,
  roomInfo,
  flip,
  singleImageFast,
  singleImageMedium,
  singleImageSlow,
  cssClasses,
}: Props) => {
  const { title, facilities, size, excluding } = roomInfo;
  return (
    <section
      className={classNames(`block desktopSmall:grid gap-10 ${cssClasses}`, {
        "desktopSmall:grid-cols-[1fr_2fr]": flip,
        "desktopSmall:grid-cols-[2fr_1fr]": !flip,
      })}
    >
      <div
        className={classNames("mb-10", {
          "desktopSmall:order-2": !flip,
        })}
      >
        <h3 className="text-43px w-full mb-4 desktopSmall:mb-10">{title}</h3>
        <p className="mb-10">
          Room Size: {size}m<sup>2</sup>{" "}
          {excluding && <span className="italic">({excluding})</span>}
        </p>
        <ul className="block phone:grid grid-cols-2 tablet:grid-cols-3 tabletLarge:block gap-x-10 list-disc ml-4">
          {facilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <LightBoxSlider
        imageList={imageList}
        singleImageFast={singleImageFast}
        singleImageMedium={singleImageMedium}
        singleImageSlow={singleImageSlow}
      />
    </section>
  );
};

export default RoomInfoSlider;
