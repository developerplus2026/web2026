"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import { Global } from "@solar-icons/react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight,
  Call02Icon,
  CircleArrowRight01Icon,
  Download02FreeIcons,
  Globe02Icon,
} from "@hugeicons/core-free-icons";
import { StaticRadialGradient } from "@paper-design/shaders-react";
import { SwitchChoiceCard } from "@/components/switch_group";
import { DotmTriangle2 } from "@/components/ui/dotm-triangle-2";
import { DotmCircular5 } from "@/components/ui/dotm-circular-5";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import { HexagonBackground } from "@/components/animate-ui/components/backgrounds/hexagon";
import { AttachmentUI } from "@/components/attachment";
import { MetalFx } from "metal-fx";
// import { AreaChart, Area, Grid, XAxis, ChartTooltip ,Line } from "@bklitui/ui/charts";
export default function Home() {
  return (
    <div className="flex z-40 h-[calc(100vh-56px)] w-full items-center  justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className=" h-full z-40  w-full flex justify-center py-32 px-24 bg-white dark:bg-black ">
        {/* <HexagonBackground className="absolute inset-0  flex items-center justify-center rounded-xl" /> */}
        <div className="flex flex-col h-full items-start gap-8">
          <div className="flex flex-col h-full  gap-8 items-start">
            <div>
              <Badge variant={"outline"}>
                {" "}
                Introducing AgentMatic Version 2.0.3 <ChevronRight />
              </Badge>
            </div>
            <h1 className="z-40 text-start instrument-serif-regular leading-24 text-[6rem]  text-balance">
              The AI Agent for Modern Software Development
            </h1>
            <p className="text-[#a1a1a1] z-40 instrument-serif-regular-italic  text-start text-xl w-160 text-balance">
              A powerful AI-driven assistant designed specifically for
              developers. It helps generate clean code, explain complex logic,
              fix errors, optimize performance, and streamline daily development
              tasks with speed and precision.
            </p>
          </div>
          <div className="flex z-40 gap-4 items-center">
            <MetalFx preset="gold">
              <Button size={"lg"} className="rounded-full" variant="outline">
                Getting Started{" "}
                <HugeiconsIcon icon={ArrowRight} size={"30"} strokeWidth={2} />
              </Button>
            </MetalFx>
            <MetalFx preset="gold">
              <Button size={"lg"} className="rounded-full" variant="outline">
                Contact Sale
                <HugeiconsIcon icon={Globe02Icon} size={"30"} strokeWidth={2} />
              </Button>
            </MetalFx>
            <MetalFx preset="gold">
              <Button size={"lg"} className="rounded-full" variant="outline">
                Download For MacOS
                <HugeiconsIcon
                  icon={Download02FreeIcons}
                  size={"30"}
                  strokeWidth={2}
                />
              </Button>
            </MetalFx>
          </div>
        </div>
        <div
          className=" h-full  flex items-center
"
        >
          {/* <AttachmentUI /> */}
          <StaticRadialGradient
            width={1280}
            height={720}
            colors={["#00bbff", "#00ffe1", "#ffffff"]}
            colorBack="#000000"
            radius={0.8}
            focalDistance={0.99}
            focalAngle={0}
            falloff={0.24}
            mixing={0.5}
            distortion={0}
            distortionShift={0}
            distortionFreq={12}
            grainMixer={0}
            grainOverlay={0}
          />
          {/* <DotmCircular5 size={32 * 7} dotSize={4 * 7} speed={1.2} bloom /> */}
        </div>

        {/* <SwitchChoiceCard /> */}
      </main>
    </div>
  );
}
