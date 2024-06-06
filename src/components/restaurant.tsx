"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";

export function Restaurant() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center ">
      <PinContainer
        title="Github Link"
        href="https://github.com/nervewastaken/restaurant-ordering"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Restaurant Ordering
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              (IN PROGRESS) Uses Firebase & NEXT.JS to create a restaurant ordering app with friends. Friends can create rooms where they can login using a pin code and order together.  
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    </div>
  );
}

