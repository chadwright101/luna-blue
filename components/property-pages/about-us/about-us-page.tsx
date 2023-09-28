import { useRouter } from "next/router";

import ImageCard from "@/components/image-card";
import LightboxSlider from "@/components/sliders/lightbox-slider";
import DesktopImageGrid from "@/components/desktop-image-grid";
import Translated from "@/components/utils/translated";
import { DataProps } from "../home-page/home-page";

const AboutUsPage = ({
  data: {
    general: { propertyName },
    aboutUsPage: {
      imageGridUrls,
      description: { enDescription, deDescription },
      thingsToDo: {
        images: { activities, restaurants, events },
      },
    },
    facilities,
    images: { aboutUsSlider },
  },
}: DataProps) => {
  const { locale } = useRouter();
  return (
    <>
      <h1 className="mb-6 tabletLarge:text-center desktopSmall:mb-8">
        <Translated german="Über uns">About Us</Translated>
      </h1>
      <div className="mb-10 desktopSmall:mb-16 grid grid-cols-3 tabletLarge:grid-cols-4 desktop:grid-cols-5 gap-4">
        {imageGridUrls.map((url, index) => (
          <div
            className={
              index === 0
                ? "hidden tabletLarge:block"
                : index === 1
                ? "hidden desktop:block"
                : ""
            }
            key={index}
          >
            <DesktopImageGrid url={url} propertyName={propertyName} />
          </div>
        ))}
      </div>
      <article className=" max-w-[900px] mx-auto">
        <h2
          className={`${
            locale === "en" ? "text-43px" : "text-35px"
          } tabletLarge:text-center mb-10`}
        >
          <Translated german={deDescription.heading}>
            {enDescription.heading}
          </Translated>
        </h2>
        <p
          className={`${
            locale === "en" ? "" : "text-left phone:text-justify"
          } tabletLarge:text-center`}
        >
          <Translated german={deDescription.paragraph1}>
            {enDescription.paragraph1}
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
          propertyName={propertyName}
          roomName={""}
        />
      </section>
      <main>
        <p className={locale === "en" ? "" : "text-left phone:text-justify"}>
          <Translated german={deDescription.paragraph2!}>
            {enDescription.paragraph2}
          </Translated>
        </p>
        <article className="my-10 desktopSmall:my-16">
          <h2 className={`mb-10 ${locale === "en" ? "" : "text-35px"}`}>
            <Translated german="Einrichtungen">Facilities</Translated>
          </h2>
          <ul className="list-disc pl-4 grid gap-y-1 gap-x-10 tablet:grid-cols-2 desktopSmall:grid-cols-3">
            {locale === "en"
              ? facilities.en.map(({ item, brackets }, index) => (
                  <li className="text-left" key={index}>
                    {item}
                    {brackets && <span className="italic"> ({brackets})</span>}
                  </li>
                ))
              : facilities.de.map(({ item, brackets }, index) => (
                  <li className="text-left" key={index}>
                    {item}
                    {brackets && <span className="italic"> ({brackets})</span>}
                  </li>
                ))}
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
              image={activities}
              link="https://www.plett-tourism.co.za/do/activities/"
              targetBlank
              thinDesktopOnly
              buttonText="Read More"
              mobileButtonWidthEnglish="w-[158px]"
              mobileButtonWidthGerman="w-[167px]"
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
              image={restaurants}
              link="https://www.plett-tourism.co.za/eat/"
              targetBlank
              thinDesktopOnly
              buttonText="Read More"
              mobileButtonWidthEnglish="w-[158px]"
              mobileButtonWidthGerman="w-[167px]"
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
              image={events}
              link="https://www.plett-tourism.co.za/do/event/"
              targetBlank
              thinDesktopOnly
              buttonText="Read More"
              mobileButtonWidthEnglish="w-[158px]"
              mobileButtonWidthGerman="w-[167px]"
              cssClasses="tabletLarge:col-span-2 desktop:col-span-1"
              center
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsPage;
