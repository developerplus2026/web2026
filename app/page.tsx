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
        <div className="flex flex-col items-start gap-8">
          <div className="flex flex-col  gap-8 items-start">
            <div>
              <Badge variant={"outline"}>
                {" "}
                Introducing AgentMatic Version 2.0.3 <ChevronRight />
              </Badge>
            </div>
            <h1 className=" text-start font-[instrument-serif] leading-24 text-[6rem]  text-balance">
              The AI Agent for Modern Software Development
            </h1>
            <p className="text-[#a1a1a1] font-[instrument-serif]  text-start text-xl w-160 text-balance">
              A powerful AI-driven assistant designed specifically for
              developers. It helps generate clean code, explain complex logic,
              fix errors, optimize performance, and streamline daily development
              tasks with speed and precision.
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <Button size={"lg"} variant="outline">
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
            <Button size={"lg"} variant="outline">
              Contact Sale
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#ffffff"
                viewBox="0 0 256 256"
              >
                <path d="M224,154.8l-47.09-21.11-.18-.08a19.94,19.94,0,0,0-19,1.75,13.08,13.08,0,0,0-1.12.84l-22.31,19c-13-7.05-26.43-20.37-33.49-33.21l19.06-22.66a11.76,11.76,0,0,0,.85-1.15,20,20,0,0,0,1.66-18.83,1.42,1.42,0,0,1-.08-.18L101.2,32A20.06,20.06,0,0,0,80.42,20.15,60.27,60.27,0,0,0,28,80c0,81.61,66.39,148,148,148a60.27,60.27,0,0,0,59.85-52.42A20.06,20.06,0,0,0,224,154.8ZM176,204A124.15,124.15,0,0,1,52,80,36.29,36.29,0,0,1,80.48,44.46l18.82,42L80.14,109.28a12,12,0,0,0-.86,1.16A20,20,0,0,0,78,130.08c9.42,19.28,28.83,38.56,48.31,48A20,20,0,0,0,146,176.63a11.63,11.63,0,0,0,1.11-.85l22.43-19.07,42,18.81A36.29,36.29,0,0,1,176,204Z"></path>
              </svg>
            </Button>
          </div>
        </div>

        <SwitchChoiceCard />
      </main>
    </div>
  );
}
