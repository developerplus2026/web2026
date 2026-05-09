"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import { Global } from "@solar-icons/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Call02Icon, CircleArrowRight01Icon } from "@hugeicons/core-free-icons";
import { SwitchChoiceCard } from "@/components/switch_group";
export default function Home() {
  return (
    <div className="flex h-[calc(100vh-56px)] w-full items-center  justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className=" h-full  w-full flex justify-center py-32 px-24 bg-white dark:bg-black ">
        <div className="flex flex-col h-full items-start gap-8">
          <div className="flex flex-col h-full  gap-8 items-start">
            <div>
              <Badge variant={"outline"}>
                {" "}
                Introducing AgentMatic Version 2.0.3 <ChevronRight />
              </Badge>
            </div>
            <h1 className=" text-start instrument-serif-regular leading-24 text-[6rem]  text-balance">
              The AI Agent for Modern Software Development
            </h1>
            <p className="text-[#a1a1a1] instrument-serif-regular-italic  text-start text-xl w-160 text-balance">
              A powerful AI-driven assistant designed specifically for
              developers. It helps generate clean code, explain complex logic,
              fix errors, optimize performance, and streamline daily development
              tasks with speed and precision.
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <Button size={"lg"} className="rounded-full" variant="outline">
              Getting Started{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#ffffff"
                viewBox="0 0 256 256"
              >
                <path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm32.49-92.49a12,12,0,0,1,0,17l-40,40a12,12,0,0,1-17-17L135,128,103.51,96.49a12,12,0,0,1,17-17Z"></path>
              </svg>
            </Button>
            <Button size={"lg"} className="rounded-full" variant="outline">
              Contact Sale
             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm83.13,96H179.56a144.3,144.3,0,0,0-21.35-66.36A84.22,84.22,0,0,1,211.13,116ZM128,207c-9.36-10.81-24.46-33.13-27.45-67h54.94a119.74,119.74,0,0,1-17.11,52.77A108.61,108.61,0,0,1,128,207Zm-27.45-91a119.74,119.74,0,0,1,17.11-52.77A108.61,108.61,0,0,1,128,49c9.36,10.81,24.46,33.13,27.45,67ZM97.79,49.64A144.3,144.3,0,0,0,76.44,116H44.87A84.22,84.22,0,0,1,97.79,49.64ZM44.87,140H76.44a144.3,144.3,0,0,0,21.35,66.36A84.22,84.22,0,0,1,44.87,140Zm113.34,66.36A144.3,144.3,0,0,0,179.56,140h31.57A84.22,84.22,0,0,1,158.21,206.36Z"></path></svg>
            </Button>
              <Button size={"lg"} className="rounded-full" variant="outline">
              Download For MacOS
           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M228,144v64a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V144a12,12,0,0,1,24,0v52H204V144a12,12,0,0,1,24,0Zm-108.49,8.49a12,12,0,0,0,17,0l40-40a12,12,0,0,0-17-17L140,115V32a12,12,0,0,0-24,0v83L96.49,95.51a12,12,0,0,0-17,17Z"></path></svg>
            </Button>
          </div>
        </div>
<div className=" h-full flex items-center
">
  <img src="./icons/clock.svg" className="dark:invert-[1] size-[600px]" alt="" />
</div>
      
         {/* <SwitchChoiceCard /> */}
      
      </main>
    </div>
  );
}
