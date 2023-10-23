import LagoonVillaMap from "@/components/property-pages/contact-page/maps/lagoon-villa-map";
import ContactPage from "@/components/property-pages/contact-page/contact-page";
import MetaComponent from "@/components/property-pages/meta-component";

import data from "@/data/lagoon-villa-data.json";

const Contact = () => {
  return (
    <>
      <MetaComponent data={data} pageName="Contact" />
      <ContactPage
        data={data}
        verticalImage="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/lagoon-villa/images/DJI_0670.jpg"
        horizontalImage="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/lagoon-villa/images/middle-floor/9U7A6465-HDR.jpg"
      />
      <LagoonVillaMap cssClasses="w-full mt-10 h-[350px] phone:h-[400px] tabletLarge:h-[500px]" />
    </>
  );
};

export default Contact;
