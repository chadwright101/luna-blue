import LagoonVillaMap from "@/components/property-pages/contact-page/maps/lagoon-villa-map";
import ContactPage from "@/components/property-pages/contact-page/contact-page";
import MetaComponent from "@/components/property-pages/meta-component";

import data from "@/data/cliffside-data.json";

const Contact = () => {
  return (
    <>
      <MetaComponent data={data} pageName="Contact" />
      <ContactPage
        data={data}
        verticalImage="/cliffside/images/9U7A4253-HDR-2.jpg"
        horizontalImage="/cliffside/images/9U7A4241.jpg"
      />
      <LagoonVillaMap cssClasses="w-full mt-10 h-[350px] phone:h-[400px] tabletLarge:h-[500px]" />
    </>
  );
};

export default Contact;
