import {
  ArrowUpDownIcon,
  DoorOpenIcon,
  EarIcon,
  EarOffIcon,
  EyeIcon,
  FenceIcon,
  RockingChairIcon,
  TriangleRightIcon,
} from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { TooltipProvider, Tooltip } from "./ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";

export default function Header(filters: string[]) {
  return (
    <header
      className="fixed left-0 top-0 h-max w-full p-2"
      style={{ zIndex: 100 }}
    >
      <TooltipProvider>
        <div className="flex items-center justify-between rounded-xl bg-white px-8 py-4 shadow-xl">
          {/* Left side */}
          {/* Middle with logo */}
          <h1 className="relative flex select-none flex-row items-baseline text-4xl font-bold">
            <span className="tracking-light text-black">
              Access
              <span className="text-primary">Map</span>
            </span>
          </h1>
          {/* Right side */}
          <ToggleGroup type="multiple" variant="outline">
            <ToggleGroupItem value="elevator" aria-label="Toggle elevator">
              <Tooltip>
                <TooltipTrigger>
                  <ArrowUpDownIcon color="green" />
                </TooltipTrigger>
              </Tooltip>
            </ToggleGroupItem>
            <ToggleGroupItem value="ramp" aria-label="Toggle ramp">
              <TriangleRightIcon color="red" />
            </ToggleGroupItem>
            <ToggleGroupItem value="accessibleEntrance" aria-label="Toggle entrance">
              <DoorOpenIcon color="blue" />
            </ToggleGroupItem>
            <ToggleGroupItem value="audioSignal" aria-label="Toggle audio signal">
              <EarIcon color="purple" />
            </ToggleGroupItem>
            <ToggleGroupItem value="visualSignal" aria-label="Toggle visual signal">
              <EyeIcon color="#BA8E23" />
            </ToggleGroupItem>
            <ToggleGroupItem value="bench" aria-label="Toggle bench">
              <RockingChairIcon color="black" />
            </ToggleGroupItem>
            <ToggleGroupItem value="handRail" aria-label="Toggle hand rail">
              <FenceIcon color="gray" />
            </ToggleGroupItem>
            <ToggleGroupItem value="lowNoiseZone" aria-label="Toggle low noise zone">
              <EarOffIcon color="brown" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </TooltipProvider>
    </header>
  );
}
