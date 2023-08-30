import BasicSlider from "../../sliders/basic-slider";
import About from "./components/about";
import OurRooms from "./components/our-rooms";
import MoreInfoAvailability from "./components/more-info-availability";

interface Props {
  data: {
    images: { homePage: { heroSlider: Array<{ url: string }> } };
    homePage: {
      url: string;
      aboutUs: {
        amenities: {
          en: Array<{ url: string; title: string }>;
          de: Array<{ url: string; title: string }>;
        };
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
            paragraph2: string;
          };
          de: {
            paragraph1: string;
            paragraph2: string;
          };
        };
      };
      moreInfoAvailability: {
        bookingUrl: string;
        roomImageUrl: string;
        infoImageUrl: string;
      };
    };
  };
}

const HomePage = ({ data }: Props) => {
  return (
    <>
      <BasicSlider imageData={data.images.homePage.heroSlider} />
      <About cssClasses="my-10 desktopSmall:my-16" data={data.homePage} />
      <OurRooms cssClasses="pt-4" data={data.homePage} />
      <hr className="text-black my-10 desktopSmall:my-16" />
      <MoreInfoAvailability
        cssClasses="my-10 desktopSmall:my-16"
        data={data.homePage}
      />
    </>
  );
};

export default HomePage;
