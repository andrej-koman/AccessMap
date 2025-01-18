/* eslint-disable @next/next/no-img-element */
"use client";
import {
  APIProvider,
  Map,
  type MapMouseEvent,
  AdvancedMarker,
  AdvancedMarkerAnchorPoint,
} from "@vis.gl/react-google-maps";
import MarkerDialog from "./marker-dialog";
import { useState } from "react";
import { type Marker } from "~/types/schema";
import MarkerDetailsDialog from "./marker-details-dialog";
import {
  ArrowUpDownIcon,
  DoorOpenIcon,
  EarIcon,
  EarOffIcon,
  EyeIcon,
  FenceIcon,
  RockingChairIcon,
  TriangleRightIcon,
} from "lucide-react";

export default function MapComponent({ apiKey }: { apiKey: string }) {
  // Use states
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
      lat: lat,
      lng: lng,
      name: "New Marker",
      markerType: "lowNoiseZone",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // Set the marker state
    setMarkers([...markers, newMarker]);
  };

  const renderMarkerImage = (markerType: string) => {
    switch (markerType) {
      case "ramp":
        return (
          <div className="rounded-full border-2 border-red-500 bg-white p-1">
            <TriangleRightIcon color="red" />
          </div>
        );
      case "accessibleEntrance":
        return (
          <div className="rounded-full border-2 border-blue-500 bg-white p-1">
            <DoorOpenIcon color="blue" />
          </div>
        );
      case "elevator":
        return (
          <div className="rounded-full border-2 border-green-500 bg-white p-1">
            <ArrowUpDownIcon color="green" />
          </div>
        );
      case "audioSignal":
        return (
          <div className="rounded-full border-2 border-purple-900 bg-white p-1">
            <EarIcon color="purple" />
          </div>
        );
      case "visualSignal":
        return (
          <div className="rounded-full border-2 border-yellow-500 bg-white p-1">
            <EyeIcon color="#BA8E23" />
          </div>
        );
      case "bench":
        return (
          <div className="rounded-full border-2 border-black bg-white p-1">
            <RockingChairIcon color="black" />
          </div>
        );
      case "handRail":
        return (
          <div className="rounded-full border-2 border-gray-500 bg-white p-1">
            <FenceIcon color="gray" />
          </div>
        );
      case "lowNoiseZone":
        return (
          <div
            className="rounded-full border-2 bg-white p-1"
            style={{ borderColor: "brown" }}
          >
            <EarOffIcon color="brown" />
          </div>
        );
      default:
        return "missing";
    }
  };
  return (
    <>
      <MarkerDialog />
      <MarkerDetailsDialog />
      <APIProvider apiKey={apiKey}>
        <Map
          style={{ width: "100vw", height: "100vh", zIndex: 0 }}
          defaultCenter={{ lat: 46.55736240967441, lng: 15.646026756007503 }}
          defaultZoom={15}
          disableDefaultUI={true}
          reuseMaps={true}
          onContextmenu={handleRightClick}
          mapId={"Maribor-map"}
        >
          {markers.map((marker) => (
            <AdvancedMarker
              key={marker.lat + marker.lng}
              position={{
                lat: marker.lat,
                lng: marker.lng,
              }}
              onClick={() => {
                const button = document.querySelector(
                  ".open-marker-details-dialog",
                );
                if (button) {
                  (button as HTMLButtonElement).click();
                }
              }}
              anchorPoint={AdvancedMarkerAnchorPoint.CENTER}
            >
              {renderMarkerImage(marker.markerType)}
            </AdvancedMarker>
          ))}
        </Map>
      </APIProvider>
    </>
  );
}
