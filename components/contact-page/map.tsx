import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

interface Props {
  cssClasses?: string;
}

const ContactMap = ({ cssClasses }: Props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });
  if (!isLoaded)
    return (
      <div className="mt-10 bg-beige text-43px text-center py-16 max-w-[1400px]">
        Map loading...
      </div>
    );
  return (
    <GoogleMap
      zoom={13}
      center={{ lat: -34.083758, lng: 23.358114 }}
      mapContainerClassName={`${cssClasses}`}
    >
      <Marker position={{ lat: -34.083758, lng: 23.358114 }} />
    </GoogleMap>
  );
};

export default ContactMap;
