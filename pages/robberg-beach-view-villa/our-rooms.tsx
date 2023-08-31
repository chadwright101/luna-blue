import OurRoomsPage from "@/components/property-pages/our-rooms/our-rooms-page";
import MetaComponent from "@/components/property-pages/meta-component";

import data from "@/data/robberg-beach-data.json";

const OurRooms = () => {
  return (
    <>
      <MetaComponent data={data} pageName="Our Rooms" />
      <OurRoomsPage data={data} />
    </>
  );
};

export default OurRooms;
