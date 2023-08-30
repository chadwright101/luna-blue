import { useRouter } from "next/router";

import LightBoxSlider from "@/components/sliders/lightbox-slider";

import classNames from "classnames";
import Translated from "../../../utils/translated";

interface Props {
  imageList?: Array<{ url: string }>;
  enRoomInfo: {
    enTitle: string;
    enFacilities: string[];
    enSize: number;
  };
  deRoomInfo: {
    deFacilities: string[];
  };
  flip?: boolean;
  singleImageFast?: boolean;
  singleImageMedium?: boolean;
  singleImageSlow?: boolean;
  cssClasses?: string;
  large?: boolean;
  medium?: boolean;
  small?: boolean;
}

const RoomInfoSlider = ({
  imageList,
  enRoomInfo,
  deRoomInfo,
  flip,
  singleImageFast,
  singleImageMedium,
  singleImageSlow,
  cssClasses,
}: Props) => {
  const { enTitle, enFacilities, enSize } = enRoomInfo;
  const { deFacilities } = deRoomInfo;
  const { locale } = useRouter();

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
        <h3 className="text-43px w-full mb-4 desktopSmall:mb-10">{enTitle}</h3>
        <p className="mb-10">
          <Translated german="Zimmergröße">Room Size</Translated>: {enSize}m
          <sup>2</sup>
        </p>
        <ul className="block phone:grid grid-cols-2 tablet:grid-cols-3 tabletLarge:block gap-x-10 list-disc ml-4">
          {locale === "en"
            ? enFacilities.map((item, index) => <li key={index}>{item}</li>)
            : deFacilities.map((item, index) => <li key={index}>{item}</li>)}
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
