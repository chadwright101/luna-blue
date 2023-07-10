import Head from "next/head";
import { useRouter } from "next/router";

import ImageCard from "@/components/image-card";
import LightboxSlider from "@/components/sliders/lightbox-slider";
import DesktopImageGrid from "@/components/desktop-image-grid";
import Translated from "@/components/utils/translated";

import imageData from "@/data/image-data.json";
import facilities from "@/data/faclilities-data.json";

const {
  lunaBlue1: { aboutUsSlider },
} = imageData;
const { en, de } = facilities;

const AboutUs = () => {
  const { locale } = useRouter();
  return (
    <>
      <Head>
        <title>
          {locale === "en" ? "About us" : "Über uns"} - Luna Blue Guesthouse
        </title>
        <meta
          name="description"
          content={
            locale === "en"
              ? "Located the Tsitsikamma Marine Protected Area, Plettenberg Bay in the Garden Route is known for it's crystal clear seas and white sand beaches. Our Guesthouses offer majestic views of the coast and were built to offer a cultivated experience of the things that we love. Luna Blue Guesthouse is the passion project of Nikki and Heath, who together found their home in Plettenberg Bay."
              : "Die an der Garden Route gelegene Stadt Plettenberg Bay im Tsitsikamma Marine Reserve ist bekannt für ihr kristallklares Meer und ihre weißen Sandstrände. Von den Gästehäusern aus hat man einen herrlichen Blick auf die Küste und alles ist darauf ausgerichtet, Ihnen ein kultiviertes Erlebnis zu bescheren, bei dem Sie die Dinge, die Sie lieben, in vollen Zügen genießen können. Die Gründung des Luna Blue Off-grid Guesthouse ist das leidenschaftliche Projekt von Nikki und Heath, die gemeinsam in Plettenberg Bay."
          }
        />
        <meta
          name="keywords"
          content="luna blue guesthouse, plettenberg bay, plett, guesthouse, plett guesthouse, plett accomodation, plettenberg bay accomodation, plettenberg bay guesthouse, luxury, 5 star"
        />
        <meta
          property="og:image"
          content="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/Luna-Blue-Guesthouse-og-image-2.webp"
        />
        <meta
          property="og:image"
          content="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/Luna-Blue-Guesthouse-og-image-3.webp"
        />
        <meta
          property="og:image"
          content="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/Luna-Blue-Guesthouse-og-image-1.webp"
        />
        <meta property="og:title" content="About us - Luna Blue Guesthouse" />
        <meta property="og:url" content="https://www.lunarblue.co.za" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Located the Tsitsikamma Marine Protected Area, Plettenberg Bay in the Garden Route is known for it's crystal clear seas and white sand beaches. Our Guesthouses offer majestic views of the coast and were built to offer a cultivated experience of the things that we love. Luna Blue Guesthouse is the passion project of Nikki and Heath, who together found their home in Plettenberg Bay."
        />
        <meta
          property="og:site_name"
          content="About us - Luna Blue Guesthouse"
        />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"></link>
      </Head>
      <h1 className="mb-6 tabletLarge:text-center desktopSmall:mb-8">
        <Translated german="Über uns">About Us</Translated>
      </h1>
      <div className="mb-10 desktopSmall:mb-16 grid grid-cols-3 tabletLarge:grid-cols-4 desktop:grid-cols-5 gap-4">
        <DesktopImageGrid
          url="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/About+us/hero/9U7A0520-HDR.jpg"
          cssClasses="hidden tabletLarge:block"
        />
        <DesktopImageGrid
          url="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/About+us/hero/Plett_Imagery-03669.jpg"
          cssClasses="hidden desktop:block"
        />
        <DesktopImageGrid url="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/About+us/hero/9U7A0428-HDR.jpg" />
        <DesktopImageGrid url="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/About+us/hero/9U7A0632-HDR.jpg" />
        <DesktopImageGrid url="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/About+us/hero/9U7A0460-HDR.jpg" />
      </div>
      <article className=" max-w-[900px] mx-auto">
        <h2
          className={`${
            locale === "en" ? "text-43px" : "text-35px"
          } tabletLarge:text-center mb-10`}
        >
          <Translated german="An der wunderschönen, von Natur geprägten Küste des Indischen Ozeans liegt unser Hotel - das Luna Blue Off-grid Guesthouse.">
            Located on the magnificent, unspoilt shores of the Indian Ocean.
          </Translated>
        </h2>
        <p
          className={`${
            locale === "en" ? "" : "text-left phone:text-justify"
          } tabletLarge:text-center`}
        >
          <Translated german="Kaum eine Liebesgeschichte ist älter oder bedeutender als die von Mond und Meer, deren Beziehung sowohl in der Mythologie als auch in der Wissenschaft thematisiert wird. Sie haben die Macht, uns mit ihrer Schönheit zu verzaubern, unsere Seelen sanft zu berühren oder uns einfach innehalten zu lassen, um uns eine größere Perspektive über unseren Platz in dieser Welt zu geben, ob sie nun getrennt sind oder zusammen. Bei einem Besuch in unseren Gästehäusern möchten wir Sie diesen Zauber spüren lassen.">
            There is no older or greater love story than that of the moon and
            the sea, with this relationship covered by both mythology and
            science. Whether apart or together they have the power to entrance
            with their beauty, gently touch our souls or simply make us stop and
            give us a greater perspective of how we fit into this world. This is
            the magic we want you to feel when you visit our guesthouses.
          </Translated>
        </p>
      </article>
      <div id="gallery" className="-translate-y-20"></div>
      <section className="my-10 desktopSmall:my-16">
        <h2 className="mb-10">
          <Translated german="Galerie">Gallery</Translated>
        </h2>
        <LightboxSlider
          imageList={aboutUsSlider}
          singleImageFast={false}
          singleImageMedium={false}
          singleImageSlow={false}
        />
      </section>
      <main>
        <p className={locale === "en" ? "" : "text-left phone:text-justify"}>
          <Translated german="Die an der Garden Route gelegene Stadt Plettenberg Bay im Tsitsikamma Marine Reserve ist bekannt für ihr kristallklares Meer und ihre weißen Sandstrände. Von den Gästehäusern aus hat man einen herrlichen Blick auf die Küste und alles ist darauf ausgerichtet, Ihnen ein kultiviertes Erlebnis zu bescheren, bei dem Sie die Dinge, die Sie lieben, in vollen Zügen genießen können. Die Gründung des Luna Blue Off-grid Guesthouse ist das leidenschaftliche Projekt von Nikki und Heath, die gemeinsam in Plettenberg Bay. ihr Zuhause gefunden haben. Auch wenn ihre beruflichen Erfahrungen sehr unterschiedlich sind, so sind doch ihre Gastfreundschaft und ihre Leidenschaft für den Umgang mit Menschen ein Faktor, der sie verbindet. Die Gästehäuser sind ein Spiegelbild der Dinge, die ihnen am meisten am Herzen liegen: Umwelt, Fitness, Tiere, vegane Küche und eine starke Liebe zu Afrika. Abseits vom Trubel des Zentrums von Plettenberg Bay gelegen, wird Ihr Aufenthalt bei uns zu einem friedlichen und erholsamen Erlebnis. Der Flughafen von Plettenberg Bay ist in 5 Minuten, die Stadt in 7 Minuten und die wunderschönen Strände in 10 Minuten zu erreichen.">
            Located in the Tsitsikamma Marine Protected Area, Plettenberg Bay in
            the Garden Route is known for it&#39;s crystal clear seas and white
            sand beaches. Our guesthouses offer majestic views of the coast and
            were built to offer a cultivated experience of the things that we
            love. Luna Blue Off-grid Guesthouse is the passion project of Nikki
            and Heath, who together found their home in Plettenberg Bay. While
            their work experience has been vast, the one consistent factor
            throughout is their hospitality and passion for dealing with people.
            The guesthouses are a reflection of the things that they most care
            for, including the environment, fitness, animals, vegan cuisine and
            a deep love for Africa. Located outside of the hustle and bustle of
            central Plettenberg Bay, your stay with us will be a peaceful, soul
            restoring experience, while giving you quick access through a 5
            minute drive to the Plettenberg Bay Airport, 7 minute drive to town
            and 10 minute drive to the beautiful beaches.
          </Translated>
        </p>
        <article className="my-10 desktopSmall:my-16">
          <h2 className={`mb-10 ${locale === "en" ? "" : "text-35px"}`}>
            <Translated german="Einrichtungen">Facilities</Translated>
          </h2>
          <ul className="list-disc pl-4 grid gap-y-1 gap-x-10 tablet:grid-cols-2 desktopSmall:grid-cols-3">
            {locale === "en"
              ? en.map((item, index) => <li key={index}>{item}</li>)
              : de.map((item, index) => <li key={index}>{item}</li>)}
            <li
              className={locale === "en" ? "" : "text-left phone:text-justify"}
            >
              <Translated german="Persönlicher Koch">Personal Chef</Translated>{" "}
              (
              <span className="italic">
                <Translated german="auf Anfrage erhältlich">
                  available on request
                </Translated>
              </span>
              )
            </li>
            <li
              className={locale === "en" ? "" : "text-left phone:text-justify"}
            >
              <Translated german="Fitnessraum">Gym</Translated> (
              <span className="italic">
                <Translated german="Personal Trainer auf Anfrage">
                  personal trainer available on request
                </Translated>
              </span>
              )
            </li>
            <li
              className={locale === "en" ? "" : "text-left phone:text-justify"}
            >
              <Translated german="Nachhaltiger Tourismus &#8212; Solarenergie, Regenwassernutzung und ausschließliche Verwendung von recycelten/recycelbaren Produkten">
                Sustainable Tourism &#8212; solar power, rainwater harvesting
                and the use of recycled / recyclable products only
              </Translated>
            </li>
          </ul>
        </article>
      </main>
      <section>
        <div className="max-w-[900px] mx-auto mb-10">
          <h3 className="tabletLarge:text-center mb-10">
            <Translated german="Was man unternehmen kann">
              Things To Do
            </Translated>
          </h3>
          <p
            className={`${
              locale === "en" ? "" : "text-left phone:text-justify"
            } tabletLarge:text-center`}
          >
            <Translated german="In dieser wunderschönen Region gibt es erstklassige Golfplätze, Wanderwege, Weinberge, Kajak fahren, Surfen, Naturschutzgebiete, Bootsausflüge, Märkte und zahlreiche adrenalingeladene Aktivitäten wie beispielsweise Paragliding.">
              This beautiful region offers you access to top rated golf courses,
              hiking trails, vineyards, kayaking, surfing, wildlife sanctuaries,
              ocean tours, markets and numerous adrenalin inducing activities,
              including paragliding.
            </Translated>
          </p>
        </div>
        <div className="grid tabletLarge:grid-cols-2 desktop:grid-cols-3 gap-10">
          <div>
            <h2
              className={`mb-8 ${
                locale === "en" ? "" : "text-35px"
              } tabletLarge:hidden`}
            >
              <Translated german="Aktivitäten">Activities</Translated>
            </h2>
            <ImageCard
              title="Activities"
              titleGerman="Aktivitäten"
              image="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/About+us/activities.webp"
              link="https://www.plett-tourism.co.za/do/activities/"
              targetBlank
              thinDesktopOnly
              buttonText="Read More"
              mobileButtonWidth={locale === "en" ? "w-[161px]" : "w-[170px"}
              center
            />
          </div>
          <div>
            <h2
              className={`mb-8 ${
                locale === "en" ? "" : "text-35px"
              } tabletLarge:hidden`}
            >
              Restaurants
            </h2>
            <ImageCard
              title="Restaurants"
              titleGerman="Restaurants"
              image="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/About+us/plett-food.webp"
              link="https://www.plett-tourism.co.za/eat/"
              targetBlank
              thinDesktopOnly
              buttonText="Read More"
              mobileButtonWidth={locale === "en" ? "w-[161px]" : "w-[170px"}
              center
            />
          </div>
          <div>
            <h2
              className={`mb-8 ${
                locale === "en" ? "" : "text-35px"
              } tabletLarge:hidden`}
            >
              <Translated german="Veranstaltungen">Events</Translated>
            </h2>
            <ImageCard
              title="Events"
              titleGerman="Veranstaltungen"
              image="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/About+us/IMG_6545.webp"
              link="https://www.plett-tourism.co.za/do/event/"
              targetBlank
              thinDesktopOnly
              buttonText="Read More"
              mobileButtonWidth={locale === "en" ? "w-[161px]" : "w-[170px"}
              cssClasses="tabletLarge:col-span-2 desktop:col-span-1"
              center
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
