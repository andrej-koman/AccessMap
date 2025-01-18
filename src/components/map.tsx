/* eslint-disable @next/next/no-img-element */
"use client";
import {
  APIProvider,
  Map,
  type MapMouseEvent,
  AdvancedMarker,
} from "@vis.gl/react-google-maps";
import ElevatorIcon from "~/icons/elevator";
import MarkerDialog from "./marker-dialog";
import { useState } from "react";
import { type Marker } from "~/types/schema";

export default function MapComponent({ apiKey }: { apiKey: string }) {
  const [markers, setMarkers] = useState<Marker[]>([]);

  const handleRightClick = (e: MapMouseEvent) => {
    console.log("Right click", e);
    // find the button open-marker-dialog and click it
    const button = document.querySelector(".open-marker-dialog");
    if (button) {
      (button as HTMLButtonElement).click();
    }

    // Extract the lat and lng from the even
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
      markerType: "",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // Set the marker state
    setMarkers([...markers, newMarker]);
  };

  const renderMarkerImage = (markerType: string) => {
    switch (markerType) {
      case "danger":
        return "/danger.png";
      case "safe":
        return "/safe.png";
      default:
        return <ElevatorIcon />;
    }
  };
  return (
    <>
      <MarkerDialog />
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
          mapTypeId={"roadmap"}
        >
          {markers.map((marker) => (
            <AdvancedMarker
              key={marker.lat + marker.lng}
              position={{
                lat: marker.lat,
                lng: marker.lng,
              }}
            >
              {renderMarkerImage(marker.markerType)}
            </AdvancedMarker>
          ))}
        </Map>
      </APIProvider>
    </>
  );
}
