"use client";
import { APIProvider, Map } from "@vis.gl/react-google-maps";

export default function MapComponent({ apiKey }: { apiKey: string }) {
  return (
    <APIProvider apiKey={apiKey}>
      <Map
        style={{ width: "100vw", height: "100vh", position: "absolute" }}
        defaultCenter={{ lat: 46.55339352380859, lng: 15.647246427534268 }}
        defaultZoom={15}
        disableDefaultUI={true}
        colorScheme="dark"
        reuseMaps={true}
        mapTypeId={"roadmap"}
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
