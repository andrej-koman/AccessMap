"use client";
import {
  DialogFooter,
  DialogHeader,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";

export default function MarkerDialog({
  saveMarker,
}: {
  saveMarker?: (markerType: string) => void;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="open-marker-dialog hidden" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Place marker</DialogTitle>
        </DialogHeader>
        <div>IM here</div>
        <DialogFooter>
          <Button variant="default">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
