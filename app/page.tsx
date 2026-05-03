"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import { Global } from "@solar-icons/react";
export default function Home() {
  return (
    <div className="flex h-[calc(100vh-56px)] w-full items-center pl-24 justify-start bg-zinc-50 font-sans dark:bg-black">
      <main className=" h-full  w-full flex justify-center py-32 px-16 bg-white dark:bg-black ">
        <div className="flex flex-col items-start gap-8">
          <div className="flex flex-col gap-8 items-start">
            <div>
              <Badge variant={"outline"}>
                {" "}
                Introducing AgentMatic Version 2.0.3 <ChevronRight />
              </Badge>
            </div>
            <h1 className=" text-start font-[instrument-serif] leading-24 text-[6rem] w-240 text-balance">
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
              Getting Started
            </Button>
            <Button size={"lg"} variant="outline">
              Contact Sale
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
