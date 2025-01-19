import MapComponent from "~/components/map";
import Header from "~/components/header";

export default function HomePage() {
  const mapsApiKey = process.env.GOOGLE_MAPS_API_KEY ?? "";

  return (
    <main>
      <Header />
      <MapComponent apiKey={mapsApiKey} />
    </main>
  );
}
