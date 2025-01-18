"use client";
import {
  DialogFooter,
  DialogHeader,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { type Marker } from "~/types/schema";

export default function MarkerDialog({
  selectedLocation,
  addMarker,
}: {
  selectedLocation: { lat: number; lng: number } | null;
  addMarker: (marker: Marker) => void;
}) {
  const [name, setName] = useState<string>();
  const [markerType, setMarkerType] = useState<string>();
  const [error, setError] = useState<string>();

  if (!selectedLocation) return null;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="open-marker-dialog hidden" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Place marker</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="marker-details-name"
              placeholder="Name"
              defaultValue={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="markerType">Marker Type</Label>
            <Select
              onValueChange={(value) => setMarkerType(value)}
              defaultValue={markerType}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a marker type" />
              </SelectTrigger>
              <SelectContent id="marker-details-markerType">
                <SelectItem value="elevator">Elevator</SelectItem>
                <SelectItem value="ramp">Ramp</SelectItem>
                <SelectItem value="accessibleEntrance">
                  Accessible Entrance
                </SelectItem>
                <SelectItem value="audioSignal">Audio Signal</SelectItem>
                <SelectItem value="visualSignal">Visual Signal</SelectItem>
                <SelectItem value="bench">Bench</SelectItem>
                <SelectItem value="handRail">Hand Rail</SelectItem>
                <SelectItem value="lowNoiseZone">Low Noise Zone</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {error && <div className="text-sm text-red-500">{error}</div>}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              className="close-marker-dialog"
              type="button"
              variant="outline"
              onClick={() => {
                setName("");
                setMarkerType("");
                setError("");
              }}
            >
              Cancel
            </Button>
          </DialogClose>
          <Button
            variant="default"
            className="save-marker-dialog"
            onClick={async () => {
              // Disable the save button
              const closeButton = document.querySelector(
                ".close-marker-dialog",
              );
              const saveButton = document.querySelector(".save-marker-dialog");
              if (!saveButton || !closeButton) return;

              if (!name || !markerType) {
                setError("Please fill out all fields");
                return;
              }

              (saveButton as HTMLButtonElement).disabled = true;

              // Save the marker to the database on route /api/markers
              try {
                const marker = {
                  name,
                  lat: selectedLocation.lat,
                  lng: selectedLocation.lng,
                  markerType,
                };

                const response = await fetch("/api/markers", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(marker),
                });

                if (!response.ok) {
                  setError("Failed to save marker");
                  (saveButton as HTMLButtonElement).disabled = false;
                  return;
                }

                // Start saving the marker
                addMarker(marker);

                setName("");
                setMarkerType("");
                setError("");

                (closeButton as HTMLButtonElement).click();
                (saveButton as HTMLButtonElement).disabled = false;
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
              } catch (e) {
                setError("Failed to save marker");
                (saveButton as HTMLButtonElement).disabled = false;
                return;
              }
            }}
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
