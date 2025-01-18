"use client";
import {
  APIProvider,
  Map,
  type MapMouseEvent,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";
import { useState } from "react";
import { type Marker } from "~/types/schema";

export default function MapComponent({ apiKey }: { apiKey: string }) {
  const [marker, setMarkers] = useState<Marker>();

  const handleRightClick = (e: MapMouseEvent) => {
    console.log("Right click", e);
    // Extract the lat and lng from the event

    const latLng = e.detail.latLng;
    if (!latLng) {
      throw new Error("No latLng in event");
    }

    const lat = latLng.lat;
    const lng = latLng.lng;

    // Create a new marker object
    const newMarker: Marker = {
      id: 1,
      lat: lat,
      lng: lng,
      name: "New Marker",
      disabilityId: 1,
      markerType: "default",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // Set the marker state
    setMarkers(newMarker);
  };

  return (
    <APIProvider apiKey={apiKey}>
      <Map
        style={{ width: "100vw", height: "100vh", zIndex: 0 }}
        defaultCenter={{ lat: 46.55736240967441, lng: 15.646026756007503 }}
        defaultZoom={15}
        disableDefaultUI={true}
        colorScheme="dark"
        reuseMaps={true}
        onContextmenu={handleRightClick}
        mapId={"1d3a5ab35e55c11"}
        styles={[
          {
            featureType: "poi.business",
            stylers: [{ visibility: "off" }],
          },
        ]}
      >
        {marker && (
          <AdvancedMarker
            key={marker.id}
            position={{
              lat: marker.lat,
              lng: marker.lng,
            }}
          >
            <Pin
              background={"#0f9d58"}
              borderColor={"#006425"}
              glyphColor={"#60d98f"}
            />
          </AdvancedMarker>
        )}
      </Map>
    </APIProvider>
  );
}
