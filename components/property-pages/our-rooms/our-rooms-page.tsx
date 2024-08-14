import { useRouter } from "next/router";

import RoomInfoSlider from "@/components/property-pages/our-rooms/components/room-info-slider";
import DesktopImageGrid from "@/components/desktop-image-grid";
import Translated from "@/components/utils/translated";
import { DataProps } from "../home-page/home-page";

const OurRoomsPage = ({
  data: {
    general: { propertyName },
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
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <div>
      <h1 className="mb-6 tabletLarge:text-center desktopSmall:mb-8">
        {currentRoute === "/cliffside-suites/our-suites" ? (
          <Translated german="Unsere Suiten">Our Suites</Translated>
        ) : (
          <Translated german="Unsere Zimmer">Our Rooms</Translated>
        )}
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
            <DesktopImageGrid url={url} propertyName={propertyName} />
          </div>
        ))}
      </div>
      <main
        className={
          enFacilities ? "grid desktopSmall:grid-cols-[0.8fr_1fr] gap-10" : ""
        }
      >
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
        <article className={!enFacilities ? "hidden" : ""}>
          <h2 className="mb-10">
            <Translated german="Folgendes ist in jedem Zimmer vorhanden:">
              Each room boasts the following facilities:
            </Translated>
          </h2>
          <ul className={`list-disc pl-4 text-left`}>
            {locale === "en" && enFacilities
              ? enFacilities.map((facility, index) => (
                  <li key={index}>{facility}</li>
                ))
              : deFacilities
              ? deFacilities.map((facility, index) => (
                  <li key={index}>{facility}</li>
                ))
              : null}
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
        roomName={enRoomInfo.bedroom1.enTitle}
        propertyName={propertyName}
        enRoomInfo={enRoomInfo.bedroom1}
        deRoomInfo={deRoomInfo.bedroom1}
        imageList={images.ourRooms.bedroom1}
        singleImageMedium
      />
      {enRoomInfo.bedroom3.enTitle && (
        <>
          <hr className="my-10 desktopSmall:my-16 text-black" />
          <RoomInfoSlider
            roomName={enRoomInfo.bedroom3.enTitle}
            propertyName={propertyName}
            enRoomInfo={enRoomInfo.bedroom3}
            deRoomInfo={deRoomInfo.bedroom3}
            imageList={images.ourRooms.bedroom3}
            singleImageSlow
            flip
            cssClasses="mt-0"
          />
        </>
      )}
      {enRoomInfo.bedroom4.enTitle && (
        <>
          <hr className="my-10 desktopSmall:my-16 text-black" />
          <RoomInfoSlider
            roomName={enRoomInfo.bedroom4.enTitle}
            propertyName={propertyName}
            enRoomInfo={enRoomInfo.bedroom4}
            deRoomInfo={deRoomInfo.bedroom4}
            imageList={images.ourRooms.bedroom4}
            singleImageMedium
            cssClasses="desktopSmall:-mb-10"
          />
        </>
      )}
      {enRoomInfo.bedroom2.enTitle && (
        <>
          <hr className="my-10 desktopSmall:my-16 text-black" />
          <RoomInfoSlider
            roomName={enRoomInfo.bedroom2.enTitle}
            propertyName={propertyName}
            enRoomInfo={enRoomInfo.bedroom2}
            deRoomInfo={deRoomInfo.bedroom2}
            imageList={images.ourRooms.bedroom2}
            singleImageFast
            flip
            cssClasses="mt-0 desktopSmall:pb-5"
          />
        </>
      )}
    </div>
  );
};

export default OurRoomsPage;
