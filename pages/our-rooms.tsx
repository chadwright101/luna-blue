import Head from "next/head";
import { useRouter } from "next/router";

import RoomInfoSlider from "@/components/our-rooms-page/room-info-slider";
import imageList from "../data/image-data.json";
import roomData from "../data/room-data.json";
import HeroSplit from "@/components/hero-split";
import Translated from "@/components/utils/translated";

interface Props {
  cssClasses?: string;
}
const {
  ourRooms: { bedroom1, bedroom2, bedroom3, bedroom4 },
} = imageList;
const { en, de } = roomData;

const OurRooms = ({ cssClasses }: Props) => {
  const { locale } = useRouter();
  return (
    <>
      <Head>
        <title>
          {locale === "en" ? "Our Rooms" : "Unsere Zimmer"} - Luna Blue
          Guesthouse
        </title>
        <meta
          name="description"
          content={
            locale === "en"
              ? "Our rooms are designed to provide you with an unforgettable experience that will exceed your expectations. From the moment you step into your room, you&#39;ll be surrounded by elegance and comfort. Our attention to detail is unmatched, and we strive to ensure that every aspect of your stay is perfect. Whether you&#39;re here for business or pleasure, our upmarket rooms will provide you with the ultimate in comfort and luxury."
              : "Jedes unserer Zimmer wurde mit dem Ziel entworfen, Ihren Aufenthalt zu einem unvergesslichen Erlebnis zu machen, das Ihre Erwartungen übertrifft. Sobald Sie einen Schritt in eines unserer zauberhaften Zimmer setzen, umgibt Sie ein Gefühl von Eleganz und Komfort. Wir achten auf jedes Detail, damit jeder Aspekt Ihres Aufenthalts perfekt wird. Ob Geschäfts- oder Vergnügungsreise, unsere Luxuszimmer vereinen Komfort und Luxus auf höchstem Niveau."
          }
        />
        <meta
          name="keywords"
          content="luna blue guesthouse, plettenberg bay, plett, guesthouse, plett guesthouse, plett accomodation, plettenberg bay accomodation, plettenberg bay guesthouse, luxury, 5 star"
        />
        <meta
          property="og:image"
          content="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/robberg-beach/luna-blue-robberg-beach-view-villa-og-image-2.webp"
        />
        <meta
          property="og:image"
          content="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/robberg-beach/luna-blue-robberg-beach-view-villa-og-image-3.webp"
        />
        <meta
          property="og:image"
          content="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/robberg-beach/luna-blue-robberg-beach-view-villa-og-image-1.webp"
        />
        <meta property="og:title" content="Our rooms - Luna Blue Guesthouse" />
        <meta property="og:url" content="https://www.lunarblue.co.za" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Our rooms are designed to provide you with an unforgettable experience that will exceed your expectations. From the moment you step into your room, you&#39;ll be surrounded by elegance and comfort. Our attention to detail is unmatched, and we strive to ensure that every aspect of your stay is perfect. Whether you&#39;re here for business or pleasure, our upmarket rooms will provide you with the ultimate in comfort and luxury."
        />
        <meta
          property="og:site_name"
          content="Our rooms - Luna Blue Guesthouse"
        />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"></link>
      </Head>
      <div className={`${cssClasses}`}>
        <h1 className=" mb-6 tabletLarge:text-center desktopSmall:mb-8å">
          <Translated german="Unsere Zimmer">Our Rooms</Translated>
        </h1>

        {/* hero split */}
        <div className="mb-10 desktopSmall:mb-16 grid grid-cols-3 tabletLarge:grid-cols-4 desktop:grid-cols-5 gap-4">
          <HeroSplit
            url="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/robberg-beach/images/rooms/cyan/9U7A0792-HDR.jpg"
            cssClasses="hidden desktop:block"
          />
          <HeroSplit url="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/robberg-beach/images/rooms/sapphire/9U7A0836-HDR.jpg" />
          <HeroSplit url="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/robberg-beach/images/rooms/sapphire/9U7A0804-HDR.jpg" />
          <HeroSplit url="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/robberg-beach/images/rooms/sapphire/9U7A0848-HDR.jpg" />
          <HeroSplit
            url="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/robberg-beach/images/rooms/sapphire/9U7A0820-HDR.jpg"
            cssClasses="hidden tabletLarge:block"
          />
        </div>
        <main className="grid desktopSmall:grid-cols-[0.8fr_1fr] gap-10">
          <article className="bg-beige p-8">
            <div className="grid gap-4">
              <p
                className={
                  locale === "en" ? "" : "text-left phone:text-justify"
                }
              >
                <Translated german="Jedes unserer Zimmer wurde mit dem Ziel entworfen, Ihren Aufenthalt zu einem unvergesslichen Erlebnis zu machen, das Ihre Erwartungen übertrifft. Sobald Sie einen Schritt in eines unserer zauberhaften Zimmer setzen, umgibt Sie ein Gefühl von Eleganz und Komfort.">
                  Our rooms are designed to provide you with an unforgettable
                  experience that will exceed your expectations. From the moment
                  you step into your room, you&#39;ll be surrounded by elegance
                  and comfort.
                </Translated>
              </p>
              <p
                className={
                  locale === "en" ? "" : "text-left phone:text-justify"
                }
              >
                <Translated german="In unseren Luxuszimmern erwarten Sie erstklassige Einrichtungen, Plüschbettwäsche, hochwertige elektronische Geräte und Toilettenartikel. Lassen Sie sich von unseren weichen und bequemen Betten verwöhnen und genießen Sie einen wohlverdienten, erholsamen Schlaf.">
                  Our upmarket rooms feature only the finest amenities and
                  furnishings, including plush bedding, top of the line
                  electronics, and high-quality toiletries. You&#39;ll feel
                  pampered and indulged as you sink into our soft, comfortable
                  beds and enjoy a restful night&#39;s sleep.
                </Translated>
              </p>
              <p
                className={
                  locale === "en" ? "" : "text-left phone:text-justify"
                }
              >
                <Translated german="Wir achten auf jedes Detail, damit jeder Aspekt Ihres Aufenthalts perfekt wird. Ob Geschäfts- oder Vergnügungsreise, unsere Luxuszimmer vereinen Komfort und Luxus auf höchstem Niveau.">
                  Our attention to detail is unmatched, and we strive to ensure
                  that every aspect of your stay is perfect. Whether you&#39;re
                  here for business or pleasure, our upmarket rooms will provide
                  you with the ultimate in comfort and luxury.
                </Translated>
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
              <li>
                <Translated german="En-suite Badezimmer mit Dusche und Badewanne">
                  En-suite bathroom with shower and bath
                </Translated>
              </li>
              <li>
                <Translated german="Herrliche Aussicht auf das Meer">
                  Magnificent sea facing views
                </Translated>
              </li>
              <li>
                <Translated german="Kostenloses Wlan">Free Wifi</Translated>
              </li>
              <li>
                <Translated german="Smart-TV">Smart TV</Translated>
              </li>
              <li>
                <Translated german="Fußbodenheizung">
                  Underfloor Heating
                </Translated>
              </li>
              <li>
                <Translated german="Kissen-Auswahl">Pillow Library</Translated>
              </li>
              <li>
                <Translated german="Wäsche & Handtücher">
                  Linen & Towels
                </Translated>
              </li>
            </ul>
            <p
              className={`italic mt-4 ${
                locale === "en" ? "" : "text-left phone:text-justify"
              }`}
            >
              <Translated german="Im Folgenden sind die zusätzlichen Merkmale der einzelnen Räume aufgeführt...">
                Please see the additional facilities which are unique to each
                room below...
              </Translated>
            </p>
          </article>
        </main>
        <hr className="my-10 desktopSmall:my-16 text-black" />
        <RoomInfoSlider
          enRoomInfo={en.bedroom1}
          deRoomInfo={de.bedroom1}
          imageList={bedroom1}
          singleImageFast={true}
        />
        <hr className="my-10 desktopSmall:my-16 text-black" />
        <div className="grid gap-x-10 desktopSmall:grid-cols-2">
          <RoomInfoSlider
            enRoomInfo={en.bedroom2}
            deRoomInfo={de.bedroom2}
            imageList={bedroom2}
            flip
            singleImageMedium={true}
            cssClasses="mt-0"
          />
          <hr className="my-16 desktopSmall:hidden text-black" />
          <RoomInfoSlider
            enRoomInfo={en.bedroom3}
            deRoomInfo={de.bedroom3}
            imageList={bedroom3}
            flip
            singleImageSlow={true}
            cssClasses="-mt-5 desktopSmall:mt-0"
          />
        </div>
        <hr className="my-10 desktopSmall:my-16 text-black" />
        <RoomInfoSlider
          enRoomInfo={en.bedroom4}
          deRoomInfo={de.bedroom4}
          imageList={bedroom4}
          flip
          singleImageFast={true}
        />
      </div>
    </>
  );
};

export default OurRooms;
