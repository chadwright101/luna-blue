import { useRouter } from "next/router";
import Link from "next/link";

import Button from "../../../button";
import ImageContainer from "../../../utils/image-container";
import Translated from "../../../utils/translated";
import BookEntireProperty from "../../../book-entire-property";
import { usePathname } from "next/navigation";

interface Props {
  cssClasses?: string;
  data: {
    homePage: {
      url: string;
      aboutUs: {
        video: {
          videoUrl?: string;
          posterUrl?: string;
        };
        description: {
          en: string;
          de: string;
        };
      };
    };
    facilities: {
      en: Array<{ url?: string; item: string; brackets?: string }>;
      de: Array<{ url?: string; item: string; brackets?: string }>;
    };
  };
}

const About = ({
  cssClasses,
  data: {
    homePage: {
      url,
      aboutUs: {
        video: { videoUrl, posterUrl },
        description,
      },
    },
    facilities,
  },
}: Props) => {
  const { locale } = useRouter();
  const currentRoute = usePathname();

  return (
    <main
      className={`grid ${
        videoUrl
          ? "desktopSmall:grid-cols-[1fr_2fr] desktop:grid-cols-[2fr_1fr]"
          : "desktopSmall:grid-cols-2"
      } gap-10 ${cssClasses}`}
    >
      <div
        className={
          videoUrl
            ? "grid tabletLarge:grid-cols-[360px_1fr] gap-10 desktopSmall:col-span-2 desktop:col-span-1"
            : ""
        }
      >
        {videoUrl && (
          <video
            src={videoUrl}
            controls
            className="w-[360px] h-[400px] justify-self-center order-1 tabletLarge:order-none"
            poster={posterUrl}
            preload="auto"
          >
            Your browser does not support the video tag.
          </video>
        )}
        <article>
          <h2>
            <Translated german="Über uns">About</Translated>
          </h2>
          <p
            className={`mt-4 mb-8 ${
              locale === "en" ? "" : "text-left phone:text-justify"
            }`}
          >
            <Translated german={description.de}>{description.en}</Translated>
          </p>
          <Button url={`/${url}/about-us`} />
        </article>
      </div>

      <article
        className={
          videoUrl &&
          "desktopSmall:row-start-2 desktopSmall:col-span-2 desktop:row-start-auto desktop:col-span-1"
        }
      >
        <ul className="grid grid-cols-2 phone:grid-cols-2 bg-beige py-8 px-4 gap-y-8 tablet:grid-cols-3 tabletLarge:grid-cols-4 desktop:gap-y-12">
          {locale === "en"
            ? facilities.en
                .filter(({ url }) => url)
                .map(({ url, item }, index) => (
                  <li
                    key={index}
                    className="flex flex-col items-center gap-3 text-center"
                  >
                    <ImageContainer
                      src={url!}
                      alt={`${item} icon`}
                      width={60}
                      height={60}
                      cssClasses={`desktopSmall:w-[50px] desktopSmall:h-auto ${
                        index === 0 && "pt-1.5 -mb-1.5"
                      }`}
                    />
                    {item}
                  </li>
                ))
            : facilities.de
                .filter(({ url }) => url)
                .map(({ url, item }, index) => (
                  <li
                    key={index}
                    className="flex flex-col items-center gap-3 text-center"
                  >
                    <ImageContainer
                      src={url!}
                      alt={`${item} icon`}
                      width={60}
                      height={60}
                      cssClasses={`desktopSmall:w-[50px] desktopSmall:h-auto ${
                        index === 0 && "pt-1.5 -mb-1.5"
                      }`}
                    />
                    {item}
                  </li>
                ))}
        </ul>
      </article>
      <div className="desktopSmall:col-span-2">
        <h3 className="mb-8">
          <Translated german="Richtlinien">Policies</Translated>
        </h3>
        <ul className="grid gap-8">
          <li className="flex gap-2 flex-col desktopSmall:flex-row">
            <h4 className="text-18px font-Josefin_Sans font-500 underline underline-offset-4 decoration-[0.5px]">
              <Translated german="Kautionsrichtlinie:">
                Breakage deposit policy:
              </Translated>
            </h4>
            <p>
              {currentRoute === "/keurbooms-lagoon-villa" ? (
                <Translated german="Bitte beachten Sie, dass für jeden Aufenthalt vor dem Check-in eine erstattbare Kaution in Höhe von R2500 zu hinterlegen ist.">
                  Please note that a{" "}
                  <span className="font-350 italic">
                    refundable breakage deposit of R2500
                  </span>{" "}
                  is required to be paid for each stay before check-in.
                </Translated>
              ) : currentRoute === "/cliffside-suites" ? (
                <Translated german="Bitte beachten Sie, dass für jeden Aufenthalt vor dem Check-in eine erstattbare Kaution in Höhe von R1000 zu hinterlegen ist.">
                  Please note that a{" "}
                  <span className="font-350 italic">
                    refundable breakage deposit of R1000
                  </span>{" "}
                  is required to be paid for each stay before check-in.
                </Translated>
              ) : null}
            </p>
          </li>
          <li className="flex gap-2 flex-col desktopSmall:flex-row">
            <h4 className="text-18px font-Josefin_Sans font-500 underline underline-offset-4 decoration-[0.5px]">
              <Translated german="Raucherrichtlinie:">
                Smoking policy:
              </Translated>
            </h4>
            <Translated german="Das Rauchen im Innenbereich ist strengstens untersagt, jedes Zimmer ist mit einem sensiblen Rauchmelder ausgestattet. Im Außenbereich stehen Aschenbecher zur Verfügung.">
              Smoking indoors is strictly prohibited, each room is fitted with a
              sensitive smoke detector. Ashtrays will be be provided outdoors.
            </Translated>
          </li>
          <li className="flex gap-2 flex-col desktopSmall:flex-row">
            <h4 className="text-18px font-Josefin_Sans font-500 underline underline-offset-4 decoration-[0.5px]">
              <Translated german="Haustierrichtlinie:">Pets policy:</Translated>
            </h4>
            <Link
              href="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/luna-blue-dog-policy-2023.pdf"
              className="flex gap-2 hover:desktopSmall:text-brown p-3 text-blueLink -m-3 desktopSmall:p-0 desktopSmall:m-0"
              target="_blank"
            >
              <Translated german="Herunterladen">Download</Translated>
            </Link>
          </li>
        </ul>
      </div>
      <BookEntireProperty />
    </main>
  );
};
export default About;
