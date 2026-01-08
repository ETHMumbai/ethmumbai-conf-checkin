"use client";

import Image from "next/image";
import { Calendar } from "lucide-react";
import { useRef, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";

import Bus from "../public/assets/hero/bus-cropped.png";
import Road from "../public/assets/hero/road-cropped.png";
import Cityscape from "../public/assets/hero/cityscape-cropped.png";

export default function Hero() {
  const balloonRef = useRef<HTMLImageElement | null>(null);
  const [screenType, setScreenType] = useState<"mobile" | "tablet" | "desktop">(
    "desktop"
  );

  // detect short-height screens
  const [isShortScreen, setIsShortScreen] = useState(false);

  useLayoutEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.visualViewport?.height || window.innerHeight;

      if (width < 640) setScreenType("mobile");
      else if (width < 1024) setScreenType("tablet");
      else setScreenType("desktop");

      setIsShortScreen(height < 700);
    };

    handleResize();
    window.visualViewport?.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      window.visualViewport?.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  // Animation start and bottom positions based on screen type
  const getBusInitialX = () => {
    if (screenType === "mobile") return "calc(50vw + 100%)";
    if (screenType === "tablet") return "calc(60vw + 100%)";
    return "calc(50vw + 100%)";
  };
  const getBusInitialY = () => {
    if (screenType === "mobile") return -350;
    if (screenType === "tablet") return 20;
    return 40; // desktop
  };

  const getBusInitialScale = () => {
    if (screenType === "mobile") return 0.2;
    if (screenType === "tablet") return 0.2;
    return 0.1;
  };

  const getBusBottom = () => {
    if (screenType === "mobile") return "45px";
    if (screenType === "tablet") return "60px";
    return "95px";
  };

  return (
    <section className="relative top-10 flex min-h-screen h-[100svh] justify-center overflow-hidden bg-[#E2231A] border border-black text-white">
      {/* Centered content */}
      <div
        className="relative z-10 flex flex-col items-center w-full px-4
                      pt-[8rem] sm:pt-[8rem] md:pt-[6rem] lg:pt-[7rem]
                      max-w-[95%] sm:max-w-[85%] md:max-w-[70%] lg:max-w-[60%] flex-shrink-0"
      >
        <h1
          className="font-[MPlusRounded1c] font-extrabold tracking-[-0.05em]
                       text-[4rem] sm:text-[5.8rem] md:text-[5rem] lg:text-[6rem] leading-[1.05]"
        >
          ETHMUMBAI
        </h1>

        <p className="mt-[1rem] font-semibold text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-100">
          BEST Conference & Hackathon
        </p>

        <div className="mt-[1.2rem] flex items-center gap-2 text-md sm:text-lg md:text-xl text-gray-100">
          <a
            title="Add to Calendar"
            target="_blank"
            rel="noopener noreferrer"
            // href="https://calendar.google.com/calendar/?cid=Y180OTNlNmQ3YWRlYzIyMTA0NGE5OWYwOTY4MGVlMzZjZTZlOTkyYjA4ZWM3OTljZDVjMTQ3YzU3MzZiNDA1YjRkQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20"
          >
            {/* <Calendar className="w-5 h-5 cursor-pointer" /> */}
            <Calendar className="w-5 h-5 " />
          </a>
          <span>12 – 15 March 2026</span>
        </div>

        {/* Action Buttons */}
        <div className="mt-[1.5rem] sm:mt-[2rem] flex flex-col sm:flex-row items-center gap-5 sm:gap-4 w-full sm:w-auto">
          <a href="tickets" target="_blank" rel="noopener noreferrer">
            <button
              className="bg-white border border-white text-[#E2231A]
                        font-semibold text-base px-6 py-3 rounded-[14px]
                        hover:bg-gray-300 hover:scale-105 hover:shadow-lg cursor-pointer transition-all duration-200"
            >
              Buy Tickets
            </button>
          </a>
          {/* <button
            style={{ cursor: "pointer" }}
            onClick={() => {
              window.open("https://ethmumbai2026.devfolio.co/", "_blank");
            }}
            className="border border-white text-white
                        font-semibold text-base px-6 py-3 rounded-[14px]
                        hover:opacity-90 hover:scale-105 hover:shadow-lg cursor-pointer transition-all duration-200"
          >
            Apply to Hack
          </button> */}
        </div>
        {/* <div className="mt-[1.5rem] sm:mt-[2rem] flex flex-col sm:flex-row items-center gap-5 sm:gap-4 w-full sm:w-auto">
          <a
            href="https://tally.so/r/3NkdGb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="bg-white border border-white text-[#E2231A]
                        font-semibold text-base px-6 py-3 rounded-[14px]
                        hover:bg-gray-300 cursor-pointer transition-all duration-200"
            >
              Apply to Sponsor
            </button>
          </a>

          <a
            href="https://tally.so/r/nGW5Bz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="bg-white border border-white text-[#E2231A] font-semibold text-base px-6 py-3
                        rounded-[14px] hover:bg-gray-300 cursor-pointer transition-all duration-200"
            >
              Apply to Speak
            </button>
          </a>
        </div> */}
      </div>

      {/* Road + Bus */}
      <motion.div
        className="absolute left-0 w-full pointer-events-none"
        animate={{ y: isShortScreen ? 80 : 0 }}
        transition={{ duration: 0 }}
        style={{
          bottom:
            screenType === "mobile"
              ? "70px"
              : screenType === "tablet"
                ? "20px"
                : "0px",
        }}
      >
        <div className="relative w-full ">
          {/* Cityscape Image */}
          <Image
            src={Cityscape}
            alt="Cityscape"
            unoptimized
            priority
            width={2000}
            height={600}
            sizes="(max-width: 640px) 1500px, (max-width: 1024px) 1800px, 2000px"
            className="w-full h-auto block origin-bottom transition-transform duration-300"
            style={{
              transform:
                screenType === "mobile"
                  ? "translateY(-50px)"
                  : screenType === "tablet"
                    ? "scale(1.2) translateY(-30px)"
                    : "scale(1) translateY(0px)",
            }}
          />

          {/* Road Image */}
          <Image
            src={Road}
            alt="Road"
            unoptimized
            priority
            width={2000}
            height={600}
            sizes="(max-width: 640px) 1500px, 
            (max-width: 1024px) 1800px,
            2000px"
            className="
              w-full h-auto block
              scale-[1.2]
              sm:scale-[1.3]
              md:scale-[1.1]
              lg:scale-[1]
              origin-bottom
              -translate-y-5
              transition-transform duration-300
            "
          />

          {/* Bus with animation */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2"
            style={{ bottom: getBusBottom() }}
            initial={{
              x: getBusInitialX(),
              y: getBusInitialY(),
              scale: getBusInitialScale(),
              opacity: 0.8,
              rotate: 0,
            }}
            animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 3.5, ease: "easeOut", delay: 0 }}
          >
            <Image
              src={Bus}
              alt="Bus"
              unoptimized
              className="
                w-auto h-auto
                scale-[1.1]
                sm:scale-[1.1]
                md:scale-[1]
                lg:scale-[0.6]
                origin-bottom
                transition-transform duration-300
              "
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Elements */}
      <motion.img
        src="/assets/hero/balloon.svg"
        alt="Balloon"
        className="absolute z-[5] pointer-events-none select-none"
        style={{
          left:
            screenType === "mobile"
              ? "2vw"
              : screenType === "tablet"
                ? "6vw"
                : "22vw",
          top:
            screenType === "mobile"
              ? isShortScreen
                ? "58vh"
                : "46vh"
              : screenType === "tablet"
                ? isShortScreen
                  ? "52vh"
                  : "40vh"
                : isShortScreen
                  ? "50vh"
                  : "38vh",
          width:
            screenType === "mobile"
              ? "35vw"
              : screenType === "tablet"
                ? "25vw"
                : "18vw",
        }}
        animate={{ translateY: [0, -12, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.img
        src="/assets/hero/plane.svg"
        alt="Plane"
        className="absolute w-auto h-auto z-[5] pointer-events-none select-none"
        style={{
          right: screenType === "desktop" ? "7vw" : "1vw",
          width:
            screenType === "mobile"
              ? "45vw"
              : screenType === "tablet"
                ? "30vw"
                : "20vw",
        }}
        initial={{
          y:
            screenType === "mobile"
              ? isShortScreen
                ? "82vh"
                : "70vh"
              : screenType === "tablet"
                ? isShortScreen
                  ? "67vh"
                  : "55vh"
                : isShortScreen
                  ? "62vh"
                  : "50vh",
          x: -80,
          opacity: 0,
        }}
        animate={{
          y:
            screenType === "mobile"
              ? isShortScreen
                ? "62vh"
                : "50vh"
              : screenType === "tablet"
                ? isShortScreen
                  ? "57vh"
                  : "45vh"
                : isShortScreen
                  ? "54vh"
                  : "42vh",
          x: 0,
          opacity: 1,
        }}
        transition={{ duration: 4, ease: "easeOut" }}
      />

      {/* CLOUD LEFT */}
      <motion.img
        src="/assets/hero/cloud-left.svg"
        alt="Cloud"
        className="absolute w-auto h-auto z-[5] pointer-events-none select-none"
        style={{
          left:
            screenType === "mobile"
              ? "5vw"
              : screenType === "tablet"
                ? "8vw"
                : "16vw",
          top:
            screenType === "mobile"
              ? isShortScreen
                ? "68vh"
                : "55vh"
              : screenType === "tablet"
                ? isShortScreen
                  ? "60vh"
                  : "48vh"
                : isShortScreen
                  ? "58vh"
                  : "44vh",
          width:
            screenType === "mobile"
              ? "35vw"
              : screenType === "tablet"
                ? "25vw"
                : "18vw",
        }}
        animate={{ translateX: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* CLOUD RIGHT */}
      <motion.img
        src="/assets/hero/cloud-right.svg"
        alt="Cloud"
        className="absolute w-auto h-auto pointer-events-none select-none"
        style={{
          right:
            screenType === "mobile"
              ? "5vw"
              : screenType === "tablet"
                ? "18vw"
                : "25vw",
          top:
            screenType === "mobile"
              ? isShortScreen
                ? "72vh"
                : "58vh"
              : screenType === "tablet"
                ? isShortScreen
                  ? "60vh"
                  : "48vh"
                : isShortScreen
                  ? "60vh"
                  : "48vh",
          width:
            screenType === "mobile"
              ? "35vw"
              : screenType === "tablet"
                ? "30vw"
                : "15vw",
        }}
        animate={{ translateX: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
