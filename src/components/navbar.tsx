"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#about">About</HoveredLink>
            <HoveredLink href="#skills">Skills</HoveredLink>
            <HoveredLink href="#webdev">Web Development</HoveredLink>
            <HoveredLink href="#ml">Machine Learning</HoveredLink>
            <HoveredLink href="dm">Digital Marketing</HoveredLink>

          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Links">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="https://github.com/nervewastaken">Github</HoveredLink>
            <HoveredLink href="https://www.linkedin.com/in/krish-verma-607408256/">LinkedIn</HoveredLink>
            <HoveredLink href="https://www.instagram.com/krish_vxrma/">Instagram</HoveredLink>
            <HoveredLink href="https://leetcode.com/u/krishverma2004/">Leetcode</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#about">About Me</HoveredLink>
            <HoveredLink href="#exp">Experience</HoveredLink>
            <HoveredLink href="#education">Education</HoveredLink>
          </div>
        </MenuItem>

      </Menu>
    </div>
  );
}
