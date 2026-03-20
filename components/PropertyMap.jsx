"use client";

import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { useQuery } from "@tanstack/react-query";
import L from "leaflet";

// dynamic imports (Next.js fix)
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false },
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false },
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false },
);

const PropertyMap = ({ property }) => {
  const TILE_URL = process.env.NEXT_PUBLIC_MAP_TILE_URL;

  const address = `${property.location.street} ${property.location.city} ${property.location.state} ${property.location.zipcode}`;

  const getCoords = async () => {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`,
    );
    const data = await res.json();

    if (!data || data.length === 0) throw new Error("No data");

    return {
      lat: parseFloat(data[0].lat),
      lng: parseFloat(data[0].lon),
    };
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["coords", address],
    queryFn: getCoords,
    staleTime: 1000 * 60 * 60,
  });

  const customIcon = L.divIcon({
    html: `<div style="color: red; font-size: 30px;">📍</div>`,
  });

  if (isLoading) return <h3>Loading...</h3>;
  if (error) return <div>No location data found</div>;

  const { lat, lng } = data;

  return (
    <MapContainer
      center={[lat, lng]}
      zoom={14}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url={TILE_URL}
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={[lat, lng]} icon={customIcon} />
    </MapContainer>
  );
};

export default PropertyMap;
