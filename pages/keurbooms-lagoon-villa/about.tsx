import AboutPage from "@/components/property-pages/about/about-page";
import MetaComponent from "@/components/property-pages/meta-component";

import data from "@/data/lagoon-villa-data.json";

const About = () => {
  return (
    <>
      <MetaComponent data={data} pageName="About Us" />
      <AboutPage data={data} />
    </>
  );
};

export default About;
