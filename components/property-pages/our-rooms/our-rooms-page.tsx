import { useRouter } from "next/router";

import RoomInfoSlider from "@/components/property-pages/our-rooms/components/room-info-slider";
import DesktopImageGrid from "@/components/desktop-image-grid";
import Translated from "@/components/utils/translated";
import { DataProps } from "../home-page/home-page";

const OurRoomsPage = ({
  data: {
    images,
    ourRoomsPage: {
      imageGridUrls,
      description: { en, de },
      globalFacilities: { en: enFacilities, de: deFacilities },
      roomInfo: { en: enRoomInfo, de: deRoomInfo },
    },
  },
}: DataProps) => {
  const { locale } = useRouter();
  return (
    <div>
      <h1 className=" mb-6 tabletLarge:text-center desktopSmall:mb-8å">
        <Translated german="Unsere Zimmer">Our Rooms</Translated>
      </h1>

      {/* hero split */}
      <div className="mb-10 desktopSmall:mb-16 grid grid-cols-3 tabletLarge:grid-cols-4 desktop:grid-cols-5 gap-4">
        {imageGridUrls.map((url, index) => (
          <div
            className={
              index === 0
                ? "hidden tabletLarge:block"
                : index === 3
                ? "hidden desktop:block"
                : ""
            }
            key={index}
          >
            <DesktopImageGrid url={url} />
          </div>
        ))}
      </div>
      <main className="grid desktopSmall:grid-cols-[0.8fr_1fr] gap-10">
        <article className="bg-beige p-8">
          <div className="grid gap-4">
            <p
              className={locale === "en" ? "" : "text-left phone:text-justify"}
            >
              <Translated german={de.paragraph1}>{en.paragraph1}</Translated>
            </p>
            <p
              className={locale === "en" ? "" : "text-left phone:text-justify"}
            >
              <Translated german={de.paragraph2!}>{en.paragraph2}</Translated>
            </p>
            <p
              className={locale === "en" ? "" : "text-left phone:text-justify"}
            >
              <Translated german={de.paragraph3!}>{en.paragraph3}</Translated>
            </p>
          </div>
        </article>
        <article>
          <h2 className="mb-10">
            <Translated german="Folgendes ist in jedem Zimmer vorhanden:">
              Each room boasts the following facilities:
            </Translated>
          </h2>
          <ul
            className={`list-disc pl-4 ${
              locale === "en" ? "" : "text-left phone:text-justify"
            }`}
          >
            {locale === "en"
              ? enFacilities.map((facility, index) => (
                  <li key={index}>{facility}</li>
                ))
              : deFacilities.map((facility, index) => (
                  <li key={index}>{facility}</li>
                ))}
          </ul>
          <p
            className={`italic mt-4 ${
              locale === "en" ? "" : "text-left phone:text-justify"
            }`}
          >
            <Translated german="Im Folgenden sind die zusätzlichen Merkmale der einzelnen Räume aufgeführt...">
              Please see the additional facilities which are unique to each room
              below...
            </Translated>
          </p>
        </article>
      </main>
      <hr className="my-10 desktopSmall:my-16 text-black" />
      <RoomInfoSlider
        enRoomInfo={enRoomInfo.bedroom1}
        deRoomInfo={deRoomInfo.bedroom1}
        imageList={images.ourRooms.bedroom1}
        singleImageFast={true}
      />
      <hr className="my-10 desktopSmall:my-16 text-black" />
      <div className="grid gap-x-10 desktopSmall:grid-cols-2">
        <RoomInfoSlider
          enRoomInfo={enRoomInfo.bedroom2}
          deRoomInfo={deRoomInfo.bedroom2}
          imageList={images.ourRooms.bedroom2}
          flip
          singleImageMedium={true}
          cssClasses="mt-0"
        />
        <hr className="my-16 desktopSmall:hidden text-black" />
        <RoomInfoSlider
          enRoomInfo={enRoomInfo.bedroom3}
          deRoomInfo={deRoomInfo.bedroom3}
          imageList={images.ourRooms.bedroom3}
          flip
          singleImageSlow={true}
          cssClasses="-mt-5 desktopSmall:mt-0"
        />
      </div>
      <hr className="my-10 desktopSmall:my-16 text-black" />
      <RoomInfoSlider
        enRoomInfo={enRoomInfo.bedroom4}
        deRoomInfo={deRoomInfo.bedroom4}
        imageList={images.ourRooms.bedroom4}
        flip
        singleImageFast={true}
      />
    </div>
  );
};

export default OurRoomsPage;
