import { useRouter } from "next/router";

import ImageCard from "@/components/image-card";
import Translated from "@/components/utils/translated";

interface Props {
  cssClasses?: string;
}

const MoreInfoAvailability = ({ cssClasses }: Props) => {
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
            link="https://book.nightsbridge.com/34927"
            image="/luna-ii-placeholders/property-9422457-4530587_sd.jpg"
            flip
            buttonText="View our calendar"
            buttonTextGerman="Unser Kalender"
            mobileButtonWidth={locale === "en" ? "w-[249px]" : "w-[216px]"}
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
            image="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/robberg-beach/Home+page/footprints-in-the-sand.webp"
            mobileButtonWidth={locale === "en" ? "w-[158px]" : "w-[170px]"}
            targetBlank
          />
        </div>
      </div>
    </section>
  );
};

export default MoreInfoAvailability;
