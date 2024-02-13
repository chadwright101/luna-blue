import OurRoomsPage from "@/components/property-pages/our-rooms/our-rooms-page";
import MetaComponent from "@/components/property-pages/meta-component";

import data from "@/data/cliffside-data.json";

const OurCabins = () => {
  return (
    <>
      <MetaComponent data={data} pageName="Our Rooms" />
      <OurRoomsPage data={data} />
    </>
  );
};

export default OurCabins;
