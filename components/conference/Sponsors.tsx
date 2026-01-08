"use client";

import React from "react";
import Image from "next/image";
import { conferenceSponsors } from "../../lib/sponsorsData";

export default function Sponsors() {
  return (
    <section className="bg-[#3FA9F5] w-full py-10">
      {/* Title */}
      <div className="flex pb-6 items-center justify-center w-full">
        <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-6xl tracking-tighter font-[MPlusRounded1c] font-medium text-center mb-8">
          Sponsors
        </h2>
      </div>

      {/* Grid */}
      <div className="max-w-[1600px] mx-auto px-[6vw] md:px-[8vw] xl:px-[10vw] 2xl:px-[12vw] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-14 gap-y-16 justify-items-center">
        {conferenceSponsors.map((s, i) => (
          <div
            key={i}
            className={`
              relative
              w-full
              max-w-[390px]
              aspect-[2.32/1]
              rounded-[10px]
              overflow-hidden
              cursor-pointer
              group
              ${i === 8 ? "lg:col-start-2" : ""}  
              ${i === 9 ? "lg:col-start-3" : ""} 
              bg-[url('/assets/sponsors/sponsors-card-lg.png')]
              bg-contain 
              bg-no-repeat
              bg-center
            `}
            onClick={() => s.twitter && window.open(s.twitter, "_blank")}
          >
            {/* Logo and name */}
            <div className="absolute inset-0 flex items-center justify-center gap-4 z-10 px-6">
              <Image
                src={s.logo}
                alt={s.name}
                fill
                className="object-contain p-6"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Fancy dot loader */}
      <div className="flex justify-center mt-12">
        <div className="loader">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i}></div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      {/* <a
        href="https://tally.so/r/3NkdGb"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex justify-center mt-12">
          <button className="bg-[#D63A2F] text-white text-lg md:text-xl px-10 py-3 rounded-xl cursor-pointer transition-all duration-200 hover:opacity-90 hover:scale-105 hover:shadow-lg">
            Become a Sponsor
          </button>
        </div>
      </a> */}
    </section>
  );
}
