"use client";
import { APIProvider, Map, type MapMouseEvent } from "@vis.gl/react-google-maps";
import { useState } from "react";
import { type Marker}

export default function MapComponent({ apiKey }: { apiKey: string }) {

  const [marker, setMarkers] = useState([]);

  const handleRightClick = (e: MapMouseEvent) => {
    console.log("Right click", e);
    // Extract the lat and lng from the event

    const latLng = e.detail.latLng;
    if (!latLng) {
      throw new Error("No latLng in event");
    }

    const lat = latLng.lat;
    const lng = latLng.lng;
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
        mapTypeId={"hybrid"}
        onContextmenu={handleRightClick}
        styles={
          [
            {
              featureType: "poi.business",
              stylers: [{ visibility: "off" }]
            }
          ]
        }
      />
    </APIProvider>
  );
}
