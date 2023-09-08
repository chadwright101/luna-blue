import { useRouter } from "next/router";

import ImageCard from "@/components/image-card";
import Translated from "@/components/utils/translated";

interface Props {
  cssClasses?: string;
  data: {
    moreInfoAvailability: {
      bookingUrl: string;
      roomImageUrl: string;
      infoImageUrl: string;
    };
  };
}

const MoreInfoAvailability = ({
  cssClasses,
  data: {
    moreInfoAvailability: { bookingUrl, roomImageUrl, infoImageUrl },
  },
}: Props) => {
  const { locale } = useRouter();
  return (
    <section className={`grid gap-10 ${cssClasses}`}>
      <div>
        <div>
          <h2 className="mb-8 tabletLarge:hidden">
            <Translated german="Verfügbarkeit prüfen">
              Check Availability
            </Translated>
          </h2>
          <ImageCard
            title="Check Availability"
            titleGerman="Verfügbarkeit prüfen"
            link={bookingUrl}
            image={roomImageUrl}
            flip
            buttonText="View our calendar"
            buttonTextGerman="Unser Kalender"
            mobileButtonWidth={locale === "en" ? "" : "w-[216px]"}
            targetBlank
          />
        </div>
      </div>

      <div>
        <div>
          <h2 className="mb-8 tabletLarge:hidden">
            <Translated german="Über Plettenberg Bay">
              About Plettenberg Bay
            </Translated>
          </h2>
          <ImageCard
            title="About Plettenberg Bay"
            titleGerman="Über Plettenberg Bay"
            link="https://www.plett-tourism.co.za/"
            image={infoImageUrl}
            mobileButtonWidth={locale === "en" ? "w-[158px]" : "w-[170px]"}
            targetBlank
          />
        </div>
      </div>
    </section>
  );
};

export default MoreInfoAvailability;
