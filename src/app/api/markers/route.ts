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
