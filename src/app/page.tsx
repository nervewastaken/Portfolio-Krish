"use client"
import React from "react";
import { LampDemo } from "@/components/lamp";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="flex flex-col justify-center">
      <LampDemo/>
      <div className="p-24">
      
      </div>
      <Hero/>

    </main>
  );
}
