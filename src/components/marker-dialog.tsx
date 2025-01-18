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
          <DialogClose asChild>
            <Button
              className="close-marker-dialog"
              type="button"
              variant="outline"
            >
              Cancel
            </Button>
          </DialogClose>
          <Button variant="default">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
