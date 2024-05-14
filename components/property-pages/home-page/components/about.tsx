import { useRouter } from "next/router";
import Link from "next/link";

import Button from "../../../button";
import ImageContainer from "../../../utils/image-container";
import Translated from "../../../utils/translated";

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
          <p className="flex gap-2 mt-6 tabletLarge:mt-4 italic">
            <Translated german="Haustierrichtlinie - ">Pet Policy -</Translated>
            <Link
              href="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/luna-blue-dog-policy-2023.pdf"
              className="flex gap-2 items-center hover:desktopSmall:text-brown p-3 text-blueLink -m-3 desktopSmall:p-0 desktopSmall:m-0"
              target="_blank"
            >
              <Translated german="Herunterladen">Download</Translated>
            </Link>
          </p>
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
      <div className="bg-brown -mx-8 px-8 py-8 grid gap-8 desktopSmall:col-span-2 desktopSmall:mx-0 desktopSmall:gap-4 desktopSmall:py-4">
        <div className="flex flex-col items-center gap-8 desktopSmall:flex-row justify-center">
          <h3 className="text-center text-lightBeige">
            Want to book our entire property?
          </h3>
          <Link
            href="https://book.nightsbridge.com/35555"
            target="_blank"
            className="px-4 pt-[6px] pb-1 bg-lightBeige border-2 rounded-xl text-25px text-brown font-500 desktopSmall:hover:bg-brown desktopSmall:hover:border-2 border-lightBeige ease-in-out duration-300 desktopSmall:hover:text-white desktopSmall:text-[20px]"
          >
            Click here
          </Link>
        </div>
        <p className="text-center text-white italic">
          Available dates:{" "}
          <span className="font-500">13 Dec 2024 - 12 Jan 2024</span> (minimum
          stay 3 weeks)
        </p>
      </div>
    </main>
  );
};
export default About;
