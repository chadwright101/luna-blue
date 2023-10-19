import HomePage from "@/components/property-pages/home-page/home-page";
import MetaComponent from "@/components/property-pages/meta-component";

import data from "@/data/robberg-beach-data.json";

export default function RobbergBeach() {
  return (
    <>
      <MetaComponent data={data} />
      <HomePage data={data} />
    </>
  );
}
