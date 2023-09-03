import AboutUsPage from "@/components/property-pages/about-us/about-us-page";
import MetaComponent from "@/components/property-pages/meta-component";

import data from "@/data/lagoon-villa-data.json";

const AboutUs = () => {
  return (
    <>
      <MetaComponent data={data} pageName="About Us" />
      <AboutUsPage data={data} />
    </>
  );
};

export default AboutUs;
