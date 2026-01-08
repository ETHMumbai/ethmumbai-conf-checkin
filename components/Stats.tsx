"use client";

import Stat from "../public/assets/subhero1/medium/stats.svg";
import StatSm from "../public/assets/subhero1/small/stats.svg";
import Image from "next/image";

export default function Stats() {
  return (
    <section className="relative flex justify-center overflow-hidden bg-white border border-black text-white">
      {/* Medium Screens */}
      <div className="hidden md:flex">
        {/* <a
          href="https://2024.ethmumbai.in/"
          target="_blank"
          rel="noopener noreferrer"
        > */}
          <Image
            src={Stat}
            alt=""
            className="
      object-cover w-full h-full
      px-6 py-10 scale-120     
   
      md:px-20 md:py-16   
      lg:px-32 lg:py-24  
      xl:px-40 xl:py-32  
    "
          />
        {/* </a> */}
      </div>

      {/* Small Screens */}
      <div className="flex md:hidden">
        {/* <a
          href="https://2024.ethmumbai.in/"
          target="_blank"
          rel="noopener noreferrer"
        > */}
          <Image
            src={StatSm}
            alt=""
            className="
      object-cover w-full h-full
      px-6 py-10         
      sm:px-12 sm:py-10
    "
          />
        {/* </a> */}
      </div>
    </section>
  );
}
