import { NextResponse } from "next/server";
import { db } from "~/server/db";
import { marker } from "~/server/db/schema";

export async function POST(req: Request) {
  try {
    const { name, lat, lng, markerType } = await req.json();

    if (!name || !lat || !lng || !markerType) {
      return new Response("Please fill out all fields", { status: 400 });
    }

    // Save the marker
    const newMarker = await db.insert(marker).values({
      name,
      lat,
      lng,
      markerType,
    });

    return NextResponse.json(newMarker, { status: 201 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: e }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    // Get all markerTypes from query params
    const markerTypes = searchParams.getAll("markerType");

    // Query the database
    const query = db.select().from(marker);

    const markers = await query.execute();
    const sanitizedMarkers = markers.map((m) => ({
      ...m,
      lat: parseFloat(m.lat!),
      lng: parseFloat(m.lng!)
    }))

    return NextResponse.json(sanitizedMarkers, { status: 200 });
  }
  catch (e) {
    console.error(e);
    return NextResponse.json({ error: e }, { status: 500 });
  }
}
