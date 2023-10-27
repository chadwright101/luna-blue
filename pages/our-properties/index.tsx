import { useRouter } from "next/router";
import Head from "next/head";

import robbergData from "@/data/robberg-beach-data.json";
import lagoonData from "@/data/lagoon-villa-data.json";
import cliffsideData from "@/data/cliffside-data.json";
import forestData from "@/data/forest-cabins-data.json";
import OurPropertiesComponent from "@/components/our-properties-page/our-properties-component";
import Translated from "@/components/utils/translated";

const Properties = () => {
  const { locale } = useRouter();
  return (
    <>
      <Head>
        <title>Properties - Luna Blue</title>
        <meta
          name="description"
          content={
            locale === "en"
              ? "Located the Tsitsikamma Marine Protected Area, Plettenberg Bay in the Garden Route is known for it's crystal clear seas and white sand beaches. Our guesthouses and villas offer majestic views of the coast and were built to offer a cultivated experience of the things that we love. Luna Blue is the passion project of Nikki and Heath, who together found their home in Plettenberg Bay."
              : "Die an der Garden Route gelegene Stadt Plettenberg Bay im Tsitsikamma Marine Reserve ist bekannt für ihr kristallklares Meer und ihre weißen Sandstrände. Von den Gästehäusern aus hat man einen herrlichen Blick auf die Küste und alles ist darauf ausgerichtet, Ihnen ein kultiviertes Erlebnis zu bescheren, bei dem Sie die Dinge, die Sie lieben, in vollen Zügen genießen können. Die Gründung des Luna Blue ist das leidenschaftliche Projekt von Nikki und Heath, die gemeinsam in Plettenberg Bay."
          }
        />
        <meta
          name="keywords"
          content="luna blue,villa, guesthouse, plettenberg bay, plett, guesthouse, plett guesthouse, plett accomodation, plettenberg bay accomodation, plettenberg bay guesthouse, luxury, 5 star"
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
        <meta property="og:title" content="Properties - Luna Blue" />
        <meta property="og:url" content="https://www.lunarblue.co.za" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Located the Tsitsikamma Marine Protected Area, Plettenberg Bay in the Garden Route is known for it's crystal clear seas and white sand beaches. Our guesthouses offer majestic views of the coast and were built to offer a cultivated experience of the things that we love. Luna Blue is the passion project of Nikki and Heath, who together found their home in Plettenberg Bay."
        />
        <meta property="og:site_name" content="Properties - Luna Blue" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"></link>
      </Head>
      <main>
        <h1 className="mb-6 tabletLarge:text-center desktopSmall:mb-8">
          <Translated german="Unsere Objekte">Our Properties</Translated>
        </h1>
        <section className="grid tabletLarge:grid-cols-2 tabletLarge:gap-12">
          <OurPropertiesComponent
            data={lagoonData}
            featuredImage={lagoonData.images.homePage.heroSlider[1]}
          />
          <hr className="text-black my-10 tabletLarge:hidden" />
          <OurPropertiesComponent
            data={robbergData}
            featuredImage={robbergData.images.homePage.heroSlider[0]}
          />
          <hr className="text-black my-10 tabletLarge:hidden" />
          <OurPropertiesComponent
            data={cliffsideData}
            featuredImage={cliffsideData.images.homePage.heroSlider[0]}
          />
        </section>
      </main>
    </>
  );
};

export default Properties;
