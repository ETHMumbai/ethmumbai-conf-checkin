"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

export default function Hero() {
  return (
    <section className="relative flex justify-center overflow-hidden bg-[#E2231A] border border-black text-white">
      {/* Centered content */}
      <div
        className="relative z-10 flex flex-col items-center w-full px-4 mt-2
                      pt-[8rem] sm:pt-[7rem] md:pt-[8rem] lg:pt-[9rem]
                      pb-[3rem] sm:pb-[3rem] md:pb-[4rem] lg:pb-[4rem]
                      max-w-[95%] sm:max-w-[85%] md:max-w-[70%] lg:max-w-[60%] gap-3 flex-shrink-0"
      >
        <h1
          className="font-[MPlusRounded1c] font-extrabold tracking-[-0.05em]
                       text-[3rem] sm:text-[4.8rem] md:text-[4rem] lg:text-[5rem] leading-[1.05] pt-4"
        >
          Buy Tickets
        </h1>

        <p className="mt-[1rem] font-medium text-center text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-100">
          Secure your spot at ETHMumbai 2026
        </p>
      </div>
    </section>
  );
}
