import Head from "next/head";
import { useRouter } from "next/router";

import OurRoomsPage from "@/components/property-pages/our-rooms/our-rooms-page";
import robbergBeachData from "@/data/robberg-beach-data.json";

const OurRooms = () => {
  const { locale } = useRouter();
  return (
    <>
      <Head>
        <title>
          {locale === "en" ? "Our Rooms" : "Unsere Zimmer"} - Luna Blue -
          Robberg Beach View Villa
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
          content="Robberg Beach View Villa, plettenberg bay, plett, guesthouse, plett guesthouse, plett accomodation, plettenberg bay accomodation, plettenberg bay guesthouse, luxury, 5 star"
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
        <meta
          property="og:title"
          content="Our rooms - Robberg Beach View Villa"
        />
        <meta property="og:url" content="https://www.lunarblue.co.za" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Our rooms are designed to provide you with an unforgettable experience that will exceed your expectations. From the moment you step into your room, you&#39;ll be surrounded by elegance and comfort. Our attention to detail is unmatched, and we strive to ensure that every aspect of your stay is perfect. Whether you&#39;re here for business or pleasure, our upmarket rooms will provide you with the ultimate in comfort and luxury."
        />
        <meta
          property="og:site_name"
          content="Our rooms - Robberg Beach View Villa"
        />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"></link>
      </Head>
      <OurRoomsPage data={robbergBeachData} />
    </>
  );
};

export default OurRooms;
