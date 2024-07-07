import React from "react";

import { Aboutflips } from "./webflips";
import Skills from "./tech";
import Education from "./education";
import Experience from "./expeience";

import { TGEkrish } from "./gentext";
import { CanvasKrish } from "./canvas";
import Image from "next/image";
import krish from "@/components/krish.jpg";
import { Movingbutton } from "./coolbutton";
import RenderCard from "./card-render";

const Hero = () => {
  return (
    <>
      <section id="webdev" className="justify-center items-center">
        <div className="flex justify-center items-center">
          <span className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl ">
            Web Development
          </span>
        </div>
        <Aboutflips />
        <Skills />
      </section>

      <section id="ml" className="justify-center items-center">
        <div className="flex justify-center items-center">
          <span className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl ">
            Machine Learning
          </span>
        </div>
        <div className="flex justify-center items-center px-10">
          <TGEkrish />
        </div>
        <CanvasKrish />
        <div className="flex justify-center items-center">
          <span className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-md font-medium tracking-tight text-transparent md:text-3xl">
            Certification
          </span>
        </div>
        <div className="flex justify-center items-center p-10">
          <span className="text-xl text-white">
            Supervised Machine Learning: Regression and Classification
          </span>
          <a
            className="p-5"
            href="https://www.coursera.org/account/accomplishments/verify/4RT9B7PA5J7N"
          >
            <Movingbutton />
          </a>
        </div>
      </section>

      <section id="about" className="justify-center items-center p-4">
        <div className="flex flex-col justify-center items-center">
          <span className="mt-4 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl ">
            About Me
          </span>
          <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center">
            <span className="xxs:mt-4 md:mt-0 xl:px-12 xs:text-justify md:text-base lg:text-lg xl:text-1xl xxs:text-center text-white ">
              I am a passionate Full Stack Developer with a knack for crafting
              robust and scalable web applications. I have honed my Skills in
              front-end technologies like React and Next.js, as well as back-end
              technologies like Node.js Express.js, PostgreSQL and BAAS
              solutions like Firebase. My goal is to leverage my expertise to
              create innovative solutions that drive business growth and deliver
              robust back-end solutions
            </span>
            <Image
              src={krish}
              width={200}
              height={200}
              alt="Krish"
              className="m-20"
            />
          </div>
          <div>
            <Experience />
          </div>

          <span className="p-10 md:p-24">
            <Education />
          </span>
        </div>
      </section>
      <section id="proj" className="justify-center items-center">
        <div className="flex flex-col justify-center items-center pb-24 gap-5">
          <span className="mt-4 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl ">
            Projects
          </span>
          <div>
            <RenderCard />
          </div>
        </div>
      </section>

      <footer className="justify-center items-center"></footer>
    </>
  );
};

export default Hero;
