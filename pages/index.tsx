import Head from "next/head";

import BasicSlider from "@/components/sliders/basic-slider";

import imageData from "../data/image-data.json";
import About from "@/components/home-page/about";
import OurRooms from "@/components/home-page/our-rooms";
import MoreInfoAvailability from "@/components/home-page/more-info-availability";

export default function Home() {
  const {
    homePage: { heroSlider },
  } = imageData;
  return (
    <>
      <Head>
        <title>Luna Blue Off-grid Guesthouse - Plettenberg Bay</title>
        <meta
          name="description"
          content="Located the Tsitsikamma Marine Protected Area, Plettenburg Bay in the Garden Route is known for it's crystal clear seas and white sand beaches. Our Villas offer majestic views of the coast and were built to offer a cultivated experience of the things that we love. Luna Blue Guesthouse is the passion project of Nikki and Heath, who together found their home in Plettenburg Bay."
        />
        <meta
          name="keywords"
          content="luna blue guesthouse, plettenberg bay, plett, guesthouse, plett guesthouse, plett accomodation, plettenberg bay accomodation, plettenberg bay guesthouse, luxury, 5 star"
        />
        <meta
          property="og:image"
          content="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/Luna-Blue-Logo-square.png"
        />
        <meta property="og:title" content="Luna Blue Off-grid Guesthouse" />
        <meta property="og:url" content="https://www.lunarblue.co.za" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Located the Tsitsikamma Marine Protected Area, Plettenburg Bay in the Garden Route is known for it's crystal clear seas and white sand beaches. Our Villas offer majestic views of the coast and were built to offer a cultivated experience of the things that we love. Luna Blue Guesthouse is the passion project of Nikki and Heath, who together found their home in Plettenburg Bay."
        />
        <meta
          property="og:site_name"
          content="Lunar Blue Off-grid Guesthouse"
        />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"></link>
        <meta
          name="google-site-verification"
          content="6wijN18bZX_HMfoo9Bj3JplvYLDxVw4-vczywhmz9Y0"
        />
      </Head>
      <BasicSlider imageData={heroSlider} />
      <About cssClasses="my-10 desktopSmall:my-16" />
      <OurRooms cssClasses="pt-4" />
      <hr className="text-black my-10 desktopSmall:my-16" />
      <MoreInfoAvailability cssClasses="my-10 desktopSmall:my-16" />
    </>
  );
}
