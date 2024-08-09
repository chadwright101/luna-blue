import RobbergBeachMap from "@/components/property-pages/contact-page/maps/robberg-beach-map";
import ContactPage from "@/components/property-pages/contact-page/contact-page";
import MetaComponent from "@/components/property-pages/meta-component";

import data from "@/data/robberg-beach-data.json";

const Contact = () => {
  return (
    <>
      <MetaComponent data={data} pageName="Contact" />
      <ContactPage
        data={data}
        verticalImage="/assets/images/robberg-beach/images/DSC01683.jpg"
        horizontalImage="/assets/images/robberg-beach/images/DSC01930.jpg"
      />
      <RobbergBeachMap cssClasses="w-full mt-10 h-[350px] phone:h-[400px] tabletLarge:h-[500px]" />
    </>
  );
};

export default Contact;
