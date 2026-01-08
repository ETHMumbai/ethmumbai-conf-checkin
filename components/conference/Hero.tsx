"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { useRef, useEffect, useState } from "react";

export default function Hero() {
  return (
    <section className="relative flex justify-center overflow-hidden bg-[#E2231A] border text-white">
      {/* Centered content */}
      <div
        className="relative z-10 flex flex-col items-center w-full px-4 mt-10
                      pt-[7rem] sm:pt-[9rem] md:pt-[6rem] lg:pt-[7rem]
                      pb-[3rem] sm:pb-[3rem] md:pb-[3rem] lg:pb-[4rem]
                      max-w-[95%] sm:max-w-[85%] md:max-w-[70%] lg:max-w-[60%] gap-3 flex-shrink-0"
      >
        <h1
          className="font-[MPlusRounded1c] font-extrabold tracking-[-0.05em] text-center
                       text-[3rem] sm:text-[4.8rem] md:text-[4rem] lg:text-[5rem] leading-[1.05] whitespace-normal sm:whitespace-nowrap"
        >
          ETHMumbai Conference
        </h1>

        <p className="mt-[1rem] font-medium text-center text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-100">
          A full-day conference with 50 speakers presenting talks on DeFi,
          Privacy, and AI in front of 500 attendees.
        </p>

        <div className="mt-[1.2rem] flex items-center gap-2 text-md sm:text-lg md:text-xl text-white">
          <a
            title="Add to Calendar"
            target="_blank"
            rel="noopener noreferrer"
            // href="https://calendar.google.com/calendar/?cid=Y18wYTU4ODdkMWJkNDU4YmY2ZDllNmQ2OWRiODg5OTAzMjAyOTM4OWJhMmY1OWMwNjI5NzZlODlmMGVmODAwZjI4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20"
          >
            {/* <Calendar className="w-5 h-5 cursor-pointer" /> */}
            <Calendar className="w-5 h-5" />
          </a>
          <span>12 March 2026</span>
        </div>

        {/* Action Buttons */}
        <div className="mt-[0.5rem] sm:mt-[1rem] flex flex-col sm:flex-row items-center gap-5 sm:gap-4 w-full sm:w-auto">
          <Link href="/tickets">
            <button
              className="bg-white border border-white text-[#E2231A]
                        font-semibold text-base px-6 py-3 rounded-[14px]
                        hover:bg-gray-300 cursor-pointer transition-all duration-200"
            >
              Buy Tickets
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
