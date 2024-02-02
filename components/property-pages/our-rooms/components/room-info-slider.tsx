import { useRouter } from "next/router";

import LightBoxSlider from "@/components/sliders/lightbox-slider";

import classNames from "classnames";
import Translated from "../../../utils/translated";

interface Props {
  propertyName: string;
  roomName?: string;
  imageList?: Array<string>;
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
  propertyName,
  roomName,
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

  const router = useRouter();
  const currentRoute = router.pathname;

  const cabinUrls =
    currentRoute === "/cliffside-suites/our-suites" ||
    currentRoute === "/forest-view-cabins/our-cabins";

  return (
    <section
      className={classNames(`block desktopSmall:grid gap-10 ${cssClasses}`, {
        "desktopSmall:grid-cols-[1fr_2fr]": flip && !cabinUrls,
        "desktopSmall:grid-cols-[2fr_1fr]": !flip && !cabinUrls,
        "desktopSmall:block": cabinUrls,
      })}
    >
      <h3
        className={
          !cabinUrls ? "hidden" : "text-43px w-full mb-4 desktopSmall:-mb-8"
        }
      >
        {enTitle}
      </h3>
      <p className={cabinUrls ? "mb-10 desktopSmall:-mb-4" : "hidden"}>
        <Translated german="Zimmergröße">Room Size</Translated>: {enSize}m
        <sup>2</sup>
      </p>
      <div
        className={classNames("mb-10", {
          "desktopSmall:order-2": !flip,
        })}
      >
        <h3
          className={
            cabinUrls ? "hidden" : "text-43px w-full mb-4 desktopSmall:mb-10"
          }
        >
          {enTitle}
        </h3>
        <p className={!cabinUrls ? "mb-10" : "hidden"}>
          <Translated german="Zimmergröße">Room Size</Translated>: {enSize}m
          <sup>2</sup>
        </p>
        <h4 className={cabinUrls ? "hidden desktopSmall:block mb-4" : "hidden"}>
          Facilities:
        </h4>
        <ul
          className={
            !cabinUrls
              ? "list-disc ml-4 text-left"
              : "list-disc ml-4 text-left tabletLarge:grid grid-cols-2 gap-x-10"
          }
        >
          {locale === "en"
            ? enFacilities.map((item, index) => <li key={index}>{item}</li>)
            : deFacilities.map((item, index) => <li key={index}>{item}</li>)}
          <li className="font-350 italic">
            <Translated german="Für Gäste unter 21 Jahren ist die Begleitung eines Erwachsenen erforderlich.">
              Guests under the age of 21 must be accompanied by an adult
            </Translated>
          </li>
        </ul>
      </div>
      <LightBoxSlider
        roomName={roomName}
        propertyName={propertyName}
        imageList={imageList}
        singleImageFast={singleImageFast}
        singleImageMedium={singleImageMedium}
        singleImageSlow={singleImageSlow}
      />
    </section>
  );
};

export default RoomInfoSlider;
