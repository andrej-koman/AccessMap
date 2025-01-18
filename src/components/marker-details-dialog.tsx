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
import { Input } from "./ui/input";
import { Label } from "./ui/label";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function MarkerDetailsDialog() {
  const [name, setName] = useState<string>();
  const [markerType, setMarkerType] = useState<string>();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="open-marker-details-dialog hidden" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Marker details</DialogTitle>
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
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              className="close-marker-details-dialog"
              type="button"
              variant="outline"
            >
              Close
            </Button>
          </DialogClose>
          <Button variant="default">Save</Button>
          <Button variant="destructive">Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
