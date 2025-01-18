import MapComponent from "~/components/map";

export default function HomePage() {
  const mapsApiKey = process.env.GOOGLE_MAPS_API_KEY ?? "";
  return (
    <main>
      <MapComponent apiKey={mapsApiKey} />
    </main>
  );
}
