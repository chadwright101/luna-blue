import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Translated from "../utils/translated";

interface Props {
  cssClasses?: string;
}

const Luna1Map = ({ cssClasses }: Props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });
  if (!isLoaded)
    return (
      <div className="mt-10 bg-beige text-43px text-center py-16 max-w-[1400px] font-Poiret_One">
        <Translated german="Laden der Karte">Map loading...</Translated>
      </div>
    );
  return (
    <GoogleMap
      zoom={13}
      center={{ lat: -34.05196563834431, lng: 23.372731539639542 }}
      mapContainerClassName={`${cssClasses}`}
    >
      <Marker position={{ lat: -34.05196563834431, lng: 23.372731539639542 }} />
    </GoogleMap>
  );
};

export default Luna1Map;
