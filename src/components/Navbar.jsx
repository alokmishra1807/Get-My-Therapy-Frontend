"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
  <>
   <div className="relative w-full  items-center justify-center  ">
      <Navbar className="top-2 " /> </div>
     {/* <div className="block md:hidden w-full px-4 py-3  bg-white shadow-md flex justify-evenly items-center space-x-2 fixed top-0 left-0 z-50 rounded-full">
  <a href="#home" className="px-4 py-2 bg-[#7091E6] text-black rounded-full text-sm font-medium shadow hover:bg-[#8697C4] transition">
    Home
  </a>
  <a href="#service" className="px-4 py-2 bg-[#7091E6] text-black rounded-full text-sm font-medium shadow hover:bg-[#8697C4] transition">
    Services
  </a>
  < a href="#fee" className="px-4 py-2 bg-[#7091E6] text-black rounded-full text-sm font-medium shadow hover:bg-[#8697C4] transition">
    Pricing
 </a>
</div> */}

  </>
   
   
  );
}

function Navbar({
  className
}) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ", className)}>
      <Menu setActive={setActive} >
        
        <MenuItem setActive={setActive} active={active} item="Home">
          
        <a href="#home">View Home</a>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm ">
            <a href="#service">Anxiety & Stress Management</a>
            <a href="#service">Relationship Counseling </a>
            <a href="#service">Trauma Recovery</a>
           
          </div>
        </MenuItem>
        
        <MenuItem setActive={setActive} active={active} item="Pricing">
          
         <a href="#fee" className="text-sm font-medium hover:underline">
   Consultancy Fee
  </a>
        </MenuItem>
      </Menu>
    </div>
  );
}
