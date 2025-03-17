import "leaflet/dist/leaflet.css";
import type { Place } from "../api/Place";            //Bemærk import "type" da det er et interface type vi importerer
import type { Map as LeafletMap } from "leaflet";
import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

interface MapProps {
  place: Place | null;           //Bemærk at place kan være null, i starten er der ikke valgt nogen place
}

export default function Map({ place }: MapProps) {  //Props til Map er place som er af typen Place eller null jf interface MapProps
  const mapRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    if (mapRef.current && place) {
      mapRef.current.flyTo([place.latitude, place.longitude]);
    }
  }, [place]);

  return (
    <MapContainer
      ref={mapRef}
      center={[55.6419, 12.0878]}
      zoom={12}
      scrollWheelZoom
      className="h-full"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {place && <Marker position={[place.latitude, place.longitude]} />}
    </MapContainer>
  );
}
