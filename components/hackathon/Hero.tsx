"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { useRef, useEffect, useState } from "react";

export default function Hero() {
  const balloonRef = useRef<HTMLImageElement | null>(null);
  const [screenType, setScreenType] = useState<"mobile" | "tablet" | "desktop">(
    "desktop"
  );

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setScreenType("mobile");
      else if (width < 1024) setScreenType("tablet");
      else setScreenType("desktop");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="relative flex justify-center overflow-hidden bg-[#E2231A]  text-white">
      {/* Centered content */}
      <div
        className="relative z-10 flex flex-col items-center w-full px-4 mt-10
                      pt-[7rem] sm:pt-[9rem] md:pt-[6rem] lg:pt-[7rem]
                      pb-[3rem] sm:pb-[3rem] md:pb-[3rem] lg:pb-[4rem]
                      max-w-[95%] sm:max-w-[85%] md:max-w-[70%] lg:max-w-[60%] gap-3 flex-shrink-0"
      >
        <h1
          className="font-[MPlusRounded1c] font-extrabold tracking-[-0.05em] text-center
                       text-[3rem] sm:text-[4.8rem] md:text-[4rem] lg:text-[5rem] leading-[1.05]"
        >
          ETHMumbai Hackathon
        </h1>

        <p className="mt-[1rem] font-medium text-center text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-100">
          Build for 42 hours, learn from a panel of mentors, and win $50,000 in
          bounties — all with the BEST community.
        </p>

        <div className="mt-[1.2rem] flex items-center gap-2 text-md sm:text-lg md:text-xl text-white">
          <a
            title="Add to Calendar"
            target="_blank"
            rel="noopener noreferrer"
            // href="https://calendar.google.com/calendar/?cid=Y183YWRmNTgwNjAzNjI1YzRlNmJlMDM1ODkyZDU1ZGFlOTg3NTk2YzRkYWJkMGQ0NjQ1MzdhYTQ2M2EyNDc5MjEwQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20"
          >
            {/* <Calendar className="w-5 h-5 cursor-pointer" /> */}
            <Calendar className="w-5 h-5" />
          </a>
          <span>13 - 15 March 2026</span>
        </div>

        {/* Action Buttons */}
        <div className="mt-[0.5rem] sm:mt-[1rem] flex flex-col sm:flex-row items-center gap-5 sm:gap-4 w-full sm:w-auto">
          {/* <button
            style={{ cursor: "pointer" }}
            onClick={() => {
              window.open("https://ethmumbai2026.devfolio.co/", "_blank");
            }}
            className="bg-white border border-white text-[#E2231A]
                        font-semibold text-base px-6 py-3 rounded-[14px]
                        hover:bg-gray-300 cursor-pointer transition-all duration-200"
          >
            Apply to Hack
          </button> */}
          {/* <Link
            href="#apply-to-hack"
          >
            <button
              className="bg-white border border-white text-[#E2231A]
                        font-semibold text-base px-6 py-3 rounded-[14px]
                        hover:bg-gray-300 cursor-pointer transition-all duration-200"
            >
              Apply To Hack
            </button>
          </Link> */}
        </div>
      </div>
    </section>
  );
}
