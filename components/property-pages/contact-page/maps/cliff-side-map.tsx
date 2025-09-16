import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Translated from "../../../utils/translated";

interface Props {
  cssClasses?: string;
}

const CliffSideMap = ({ cssClasses }: Props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });
  if (!isLoaded)
    return (
      <div className="mt-10 bg-beige text-43px text-center py-16 max-w-[1400px]">
        <Translated german="Laden der Karte">Map loading...</Translated>
      </div>
    );
  return (
    <GoogleMap
      zoom={14}
      center={{ lat: -34.067461338564286, lng: 23.28103294335703 }}
      mapContainerClassName={`${cssClasses}`}
    >
      <Marker position={{ lat: -34.067461338564286, lng: 23.28103294335703 }} />
    </GoogleMap>
  );
};

export default CliffSideMap;
