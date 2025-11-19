import ContactPage from "@/components/property-pages/contact-page/contact-page";
import MetaComponent from "@/components/property-pages/meta-component";

import data from "@/data/cliffside-data.json";
import CliffSideMap from "@/components/property-pages/contact-page/maps/cliff-side-map";

const Contact = () => {
  return (
    <>
      <MetaComponent data={data} pageName="Contact" />
      <ContactPage
        data={data}
        verticalImage="/assets/images/cliffside/images/DJI_20251007154311_0623_D.jpg"
        horizontalImage="/assets/images/cliffside/images/9U7A4237.jpg"
      />
      <CliffSideMap cssClasses="w-full mt-10 h-[350px] phone:h-[400px] tabletLarge:h-[500px]" />
    </>
  );
};

export default Contact;
