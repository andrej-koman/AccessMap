"use client";
import { APIProvider, Map } from "@vis.gl/react-google-maps";

export default function MapComponent({ apiKey }: { apiKey: string }) {
  return (
    <APIProvider apiKey={apiKey}>
      <Map
        style={{ width: "100vw", height: "100vh" }}
        defaultCenter={{ lat: 46.55339352380859, lng: 15.647246427534268 }}
        defaultZoom={14}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      />
    </APIProvider>
  );
}
