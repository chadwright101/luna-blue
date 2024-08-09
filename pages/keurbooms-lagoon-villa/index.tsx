import HomePage from "@/components/property-pages/home-page/home-page";
import MetaComponent from "@/components/property-pages/meta-component";

import data from "@/data/lagoon-villa-data.json";

export default function LagoonVilla() {
  return (
    <>
      <MetaComponent data={data} />
      <HomePage data={data} />
    </>
  );
}
