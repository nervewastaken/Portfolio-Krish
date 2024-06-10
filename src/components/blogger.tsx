"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";

export function BloggerPin() {
  return (
    <div className="h-[20rem] w-full flex items-center justify-center ">
      <PinContainer
        title="Github Link"
        href="https://github.com/nervewastaken/blogger-app"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Blogger App
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              PERN stack application which utilizes JWT authentication with PostgreSQL as backend database. Handles CRUD operations using Node and Express. Also has an admin account for moderation.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    </div>
  );
}
