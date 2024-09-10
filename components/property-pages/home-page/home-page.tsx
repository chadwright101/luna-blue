import { usePathname } from "next/navigation";

import BasicSlider from "../../sliders/basic-slider";
import About from "./components/about";
import OurRooms from "./components/our-rooms";
import MoreInfoAvailability from "./components/more-info-availability";
import Translated from "@/components/utils/translated";
import Policies from "./components/policies";

export interface DataProps {
  data: {
    general: {
      propertyName: string;
      address: {
        street: string;
        town: string;
        province: string;
        areaCode: number;
        googleMapsUrl: string;
      };
      contact: {
        subject: string;
      };
      meta: {
        description: {
          en: string;
          de: string;
        };
        keywords: string;
        images: string[];
      };
    };
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
      moreInfoAvailability: {
        bookingUrl: string;
        roomImageUrl: string;
        infoImageUrl: string;
      };
    };
    ourRoomsPage: {
      imageGridUrls: Array<string>;
      description: {
        en: {
          paragraph1: string;
          paragraph2?: string;
          paragraph3?: string;
        };
        de: {
          paragraph1: string;
          paragraph2?: string;
          paragraph3?: string;
        };
      };
      globalFacilities: {
        en?: Array<string>;
        de?: Array<string>;
      };
      roomInfo: {
        en: {
          bedroom1: {
            enTitle: string;
            enFacilities: Array<string>;
            enSize: number;
          };
          bedroom2: {
            enTitle: string;
            enFacilities: Array<string>;
            enSize: number;
          };
          bedroom3: {
            enTitle: string;
            enFacilities: Array<string>;
            enSize: number;
          };
          bedroom4: {
            enTitle: string;
            enFacilities: Array<string>;
            enSize: number;
          };
        };
        de: {
          bedroom1: {
            deFacilities: Array<string>;
          };
          bedroom2: {
            deFacilities: Array<string>;
          };
          bedroom3: {
            deFacilities: Array<string>;
          };
          bedroom4: {
            deFacilities: Array<string>;
          };
        };
      };
    };
    aboutPage: {
      imageGridUrls: Array<string>;
      description: {
        enDescription: {
          heading: string;
          paragraph1: string;
          paragraph2?: string;
        };
        deDescription: {
          heading: string;
          paragraph1: string;
          paragraph2?: string;
        };
      };
      thingsToDo: {
        images: {
          activities: string;
          restaurants: string;
          events: string;
        };
      };
    };
    facilities: {
      en: Array<{ url?: string; item: string; brackets?: string }>;
      de: Array<{ url?: string; item: string; brackets?: string }>;
    };
    images: {
      homePage: { heroSlider: Array<string> };
      aboutUsSlider: Array<string>;
      ourRooms: {
        bedroom1: Array<string>;
        bedroom2?: Array<string>;
        bedroom3?: Array<string>;
        bedroom4?: Array<string>;
      };
    };
  };
}
export interface CssProps {
  cssClasses?: string;
}

const HomePage = ({ data }: DataProps) => {
  const currentRoute = usePathname();

  return (
    <>
      <h1 className="text-[30px] text-center mb-6 phone:text-[30px] tablet:text-35px desktopSmall:text-43px">
        {data.general.propertyName}
      </h1>
      <BasicSlider
        imageData={data.images.homePage.heroSlider}
        propertyName={data.general.propertyName}
      />
      <About cssClasses="my-10 desktopSmall:my-16" data={data} />
      <OurRooms
        cssClasses="pt-4 mb-10 desktopSmall:mb-16"
        data={data.homePage}
      />
      {currentRoute === "/keurbooms-lagoon-villa" && (
        <div>
          <h2 className="mb-8">
            <Translated german="Besichtigen Sie unser Anwesen">
              Tour Our Property
            </Translated>
          </h2>
          <iframe
            width="100%"
            height="500px"
            allowFullScreen={true}
            allow="accelerometer magnetometer; gyroscope"
            src="https://virtual.escapism.ai/en/embed/lASLweAL3I"
          ></iframe>
        </div>
      )}
      <hr className="text-black my-10 desktopSmall:my-16" />
      <MoreInfoAvailability
        cssClasses="my-10 desktopSmall:my-16"
        data={data.homePage}
      />
      <Policies />
    </>
  );
};

export default HomePage;
