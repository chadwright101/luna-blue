import Head from "next/head";
import { useRouter } from "next/router";

import BasicSlider from "@/components/sliders/basic-slider";

import data from "@/data/lagoon-villa-data.json";

export default function LagoonVilla() {
  const {
    images: {
      homePage: { heroSlider },
    },
  } = data;

  const { locale } = useRouter();
  return (
    <>
      <Head>
        <title>Keurbooms Lagoon Villa - Plettenberg Bay</title>
        <meta
          name="description"
          content={
            locale === "en"
              ? "Located the Tsitsikamma Marine Protected Area, Plettenberg Bay in the Garden Route is known for it's crystal clear seas and white sand beaches. Our Guesthouses offer majestic views of the coast and were built to offer a cultivated experience of the things that we love. Keurbooms Lagoon Villa is the passion project of Nikki and Heath, who together found their home in Plettenberg Bay."
              : "Die an der Garden Route gelegene Stadt Plettenberg Bay im Tsitsikamma Marine Reserve ist bekannt für ihr kristallklares Meer und ihre weißen Sandstrände. Von den Gästehäusern aus hat man einen herrlichen Blick auf die Küste und alles ist darauf ausgerichtet, Ihnen ein kultiviertes Erlebnis zu bescheren, bei dem Sie die Dinge, die Sie lieben, in vollen Zügen genießen können. Die Gründung des Keurbooms Lagoon Villa ist das leidenschaftliche Projekt von Nikki und Heath, die gemeinsam in Plettenberg Bay."
          }
        />
        <meta
          name="keywords"
          content="Keurbooms Lagoon Villa, plettenberg bay, plett, guesthouse, plett guesthouse, plett accomodation, plettenberg bay accomodation, plettenberg bay guesthouse, luxury, 5 star"
        />
        <meta property="og:image" content="" />
        <meta property="og:image" content="" />
        <meta property="og:image" content="" />
        <meta
          property="og:title"
          content="Keurbooms Lagoon Villa by Luna Blue - Plettenberg Bay"
        />
        <meta property="og:url" content="https://www.lunarblue.co.za" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Located the Tsitsikamma Marine Protected Area, Plettenberg Bay in the Garden Route is known for it's crystal clear seas and white sand beaches. Our Guesthouses offer majestic views of the coast and were built to offer a cultivated experience of the things that we love. Keurbooms Lagoon Villa is the passion project of Nikki and Heath, who together found their home in Plettenberg Bay."
        />
        <meta
          property="og:site_name"
          content="Keurbooms Lagoon Villa - Plettenberg Bay"
        />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"></link>
        <meta
          name="google-site-verification"
          content="6wijN18bZX_HMfoo9Bj3JplvYLDxVw4-vczywhmz9Y0"
        />
      </Head>
      <BasicSlider imageData={heroSlider} />
    </>
  );
}
