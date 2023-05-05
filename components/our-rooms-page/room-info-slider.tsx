import LightBoxSlider from "@/components/sliders/lightbox-slider";

import classNames from "classnames";

interface Props {
  imageList?: Array<{ url: string }>;
  roomInfo: {
    title: string;
    facilities: string[];
  };
  flip?: boolean;
}

const RoomInfoSlider = ({ imageList, roomInfo, flip }: Props) => {
  const { title, facilities } = roomInfo;
  return (
    <section
      className={classNames(
        "mt-10 desktopSmall:mt-16 block desktopSmall:grid gap-10",
        {
          "desktopSmall:grid-cols-[1fr_2fr]": flip,
          "desktopSmall:grid-cols-[2fr_1fr]": !flip,
        }
      )}
    >
      <div
        className={classNames("mb-10", {
          "desktopSmall:order-2": !flip,
        })}
      >
        <h3 className="text-43px w-full mb-4 desktopSmall:mb-10">{title}</h3>
        <ul className="block phone:grid grid-cols-2 tablet:grid-cols-3 tabletLarge:block gap-x-10 list-disc ml-4">
          {facilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <LightBoxSlider imageList={imageList} singleImage={true} />
    </section>
  );
};

export default RoomInfoSlider;
