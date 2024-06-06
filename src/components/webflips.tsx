import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export function Aboutflips() {
  const words = ["better", "fast", "robust", "modern", "secure","scalable"];

  return (
    <div className="flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        I can build
        <FlipWords words={words} /> 
        websites using 
      </div>
    </div>
  );
}
