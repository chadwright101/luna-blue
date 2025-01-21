import { useRouter } from "next/router";

import Button from "@/components/button";
import ImageCard from "@/components/image-card";
import Translated from "@/components/utils/translated";

interface Props {
  cssClasses?: string;
  data: {
    url: string;
    ourRooms: {
      imageUrl: string;
      description: {
        en: {
          paragraph1: string;
          paragraph2?: string;
        };
        de: {
          paragraph1: string;
          paragraph2?: string;
        };
      };
    };
  };
}

const OurRooms = ({
  cssClasses,
  data: {
    url,
    ourRooms: {
      imageUrl,
      description: { en, de },
    },
  },
}: Props) => {
  const { locale } = useRouter();
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <section
      className={`grid gap-8 desktopSmall:gap-10 desktopSmall:grid-cols-[2fr_1fr] ${cssClasses}`}
    >
      <div>
        <h2 className="mb-8 tabletLarge:hidden">
          {currentRoute === "/cliffside-suites/our-suites" ? (
            <Translated german="Unsere Suiten">Our Suites</Translated>
          ) : (
            <Translated german="Unsere Zimmer">Our Rooms</Translated>
          )}
        </h2>
        <ImageCard
          title={
            currentRoute === "/cliffside-suites" ? "Our Suites" : "Our Rooms"
          }
          titleGerman={
            currentRoute === "/cliffside-suites"
              ? "Unsere Suiten"
              : "Unsere Zimmer"
          }
          link={`/${url}/${
            currentRoute === "/cliffside-suites" ? "our-suites" : "our-rooms"
          }`}
          image={imageUrl}
          blankMobileCard
        />
      </div>
      <p className={locale === "en" ? "" : "text-left phone:text-justify"}>
        <Translated german={de.paragraph1}>{en.paragraph1}</Translated>
        <br />
        <br />
        <Translated german={de.paragraph2!}>{en.paragraph2}</Translated>
      </p>
      <Button url={`/${url}/our-rooms`} cssClasses="tabletLarge:hidden" />
    </section>
  );
};

export default OurRooms;
