"use client";

import Interior from "../public/assets/subhero2/medium/interior.svg";
import Laptop from "../public/assets/subhero2/medium/laptop.svg";
import Handle from "../public/assets/subhero2/medium/handle.svg";
import Screws from "../public/assets/subhero2/medium/screws.svg";
import ScrewsSm from "../public/assets/subhero2/small/screws.svg";

import InteriorSm from "../public/assets/subhero2/small/interior.svg";
import Image from "next/image";
import { Box } from "./Box";
import Link from "next/link";

export default function Overview() {
  return (
    <section className=" bg-[#3FA9F5] border border-black text-white">
      {/* Medium */}
      <div className="hidden relative md:flex overflow-hidden">
        {/* Interior */}
        <Image
          src={Interior}
          alt=""
          className="object-cover object-left w-full h-full relative z-0 scale-x-[1.05] scale-y-[1.05]"
        />

        {/* Laptop Man */}
        <Image
          src={Laptop}
          alt=""
          className="w-full h-full  md:left-[1%] absolute z-10 scale-x-[1.09]"
        />

        {/* Handles */}
        <Image
          src={Handle}
          alt=""
          className="
      absolute z-10  object-center   
      -top-[5%] 
      left-[25%]
      md:scale-x-[1] md:scale-y-[1] md:-top-[1%]
      lg:scale-x-[1.5] lg:scale-y-[1.5] lg:top-[3%]
      scale-x-[0.9] scale-y-[0.9] 
    
    "
        />
        <Image
          src={Handle}
          alt=""
          className="
             
      absolute z-10  object-center  
      -top-[5%]     
      left-[72%]     
      md:scale-x-[1] md:scale-y-[1] md:-top-[1%]
      lg:scale-x-[1.5] lg:scale-y-[1.5] lg:top-[3%]

      scale-x-[0.9] scale-y-[0.9] 
    
    "
        />

        {/* Cards */}

        {/* Conference */}
        <div className="bg-[#E53931] absolute z-10 top-[28%] left-[19.5%] xl:p-5 md:p-4 w-[22%] h-[35%] rounded-[14px]">
          <Image
            src={Screws}
            fill
            alt=""
            className=" absolute z-20 object-center
       scale-x-[0.95] scale-y-[0.95] 
    "
          />

          <h2 className=" xl:pb-0 xl:text-4xl xl:p-3 font-bold text-xl lg:text-3xl font-['MPlusRounded1c']">
            Conference
          </h2>
          <p className="xl:px-3 xl:text-sm lg:pb-3 pb-0 font-light text-xs">
            12 March 2026
          </p>
          <ul className="xl:p-3 md:pt-2 xl:text-xl xl:space-y-2 lg:text-sm pt-1 font-light text-[10px] md:space-y-0.5 ">
            <li>Talks and Panels</li>
            <li>Sponsor Activation</li>
            <li>Interactive Zones</li>
            <li>Open Networking</li>
          </ul>
        </div>

        {/* 4 Days of Innovation */}
        <div
          className="
      absolute
      z-10
      top-1/2 left-[51%] 
    -translate-x-1/2 -translate-y-1/2 "
        >
          <h2 className="p-3 pb-0 font-bold md:text-2xl lg:text-4xl text-center items-center justify-center mx-auto font-['MPlusRounded1c']">
            4 Days of
            <br /> Innovation
          </h2>
        </div>

        {/* Hackathon */}
        <div className="bg-[#E53931] absolute z-10 top-[28%] right-[18%] xl:p-5 md:p-4 w-[22%] h-[35%] rounded-[14px]">
          <Image
            src={Screws}
            fill
            alt=""
            className=" absolute z-20 object-center
       scale-x-[-0.95] scale-y-[0.95] 
    "
          />

          <h2 className=" xl:pb-0 xl:text-4xl xl:p-3 font-bold text-xl lg:text-3xl font-['MPlusRounded1c']">
            Hackathon
          </h2>
          <p className="xl:px-3 xl:text-sm lg:pb-3 pb-0 font-light text-xs">
            13 - 15 March 2026
          </p>
          <ul className="xl:p-3 md:pt-2 xl:text-xl xl:space-y-2 lg:text-sm pt-1 font-light text-[10px] md:space-y-0.5 ">
            <li>Nonstop Hacking</li>
            <li>Technical Workshops</li>
            <li>Sponsor Bounties</li>
            <li>Mentorship</li>
          </ul>
        </div>

        <Link
          href="/conference"
          className="bg-white absolute z-10  left-[23%] xl:p-3 md:p-2  top-[70%] p-2 text-center text-[#E53931] w-[15%]  rounded-[14px] cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg"
        >
          <h2 className=" font-medium lg:text-xl ">Conference</h2>
        </Link>
        <Link
          href="/hackathon"
          className="bg-white absolute z-10  right-[22%] xl:p-3 md:p-2  top-[70%] p-2 text-center text-[#E53931] w-[15%]  rounded-[14px] cursor-pointer transition-all duration-200  hover:scale-105 hover:shadow-lg"
        >
          <h2 className=" font-medium lg:text-xl">Hackathon</h2>
        </Link>
        <></>
      </div>

      {/* Small */}
      <div className="md:hidden overflow-hidden flex ">
        <Image
          src={InteriorSm}
          alt=""
          className="object-cover object-left w-full h-full relative z-0 scale-x-[1.05] scale-y-[1.09]
    "
        />

        {/* 4 Days of Innovation */}

        {/* Cards */}
        <div className="absolute items-center justify-center w-full flex max-[361px]:translate-y-35 max-[400px]:translate-y-40 translate-y-50">
          <div className="absolute flex flex-col gap-4 max-[345px]:gap-2 min-sm:translate-y-50 translate-y-35 w-[50%]">
            {/* Conference */}
            <a href="/conference" target="_blank" rel="noopener noreferrer">
              <Box className="relative flex-1 w-full p-6 max-[345px]:p-4 bg-[#E53931] text-white rounded-xl">
                <Image
                  src={ScrewsSm}
                  fill
                  alt=""
                  className="z-20 object-center p-2"
                />

                <h2 className=" pb-0  font-bold text-2xl font-['MPlusRounded1c']">
                  Conference
                </h2>
                <p className=" font-light pb-2 text-xs">12 March 2026</p>
                <ul className="font-light text-sm space-y-1 max-[345px]:-space-y-0.5">
                  <li>Talks and Panels</li>
                  <li>Sponsor Activation</li>
                  <li>Interactive Zones</li>
                  <li>Open Networking</li>
                </ul>
              </Box>
            </a>

            {/* Hackathon */}
            <a href="/hackathon" target="_blank" rel="noopener noreferrer">
              <Box className="relative flex-1 w-full p-6  max-[345px]:p-4 bg-[#E53931] text-white rounded-xl">
                <Image
                  src={ScrewsSm}
                  fill
                  alt=""
                  className="z-20 object-center p-2"
                />

                <h2 className=" pb-0  font-bold text-2xl font-['MPlusRounded1c']">
                  Hackathon
                </h2>
                <p className=" font-light pb-2 text-xs">13 - 15 March 2026</p>
                <ul className="font-light text-sm space-y-1 max-[345px]:-space-y-0.5">
                  <li>Nonstop Hacking</li>
                  <li>Technical Workshops</li>
                  <li>Sponsor Bounties</li>
                  <li>Mentorship</li>
                </ul>
              </Box>
            </a>

            {/* Hackathon */}
            {/* <Box className="relative flex-1 w-full bg-[#E53931] p-6 text-white rounded-xl">
              <Image
                src={ScrewsSm}
                alt=""
                fill
                className="z-20 object-center p-2"
              />

              <h2 className=" pb-0  font-bold text-2xl font-['MPlusRounded1c']">
                Hackathon
              </h2>
              <p className=" font-light pb-2 text-xs">13 - 15 March 2026</p>
              <ul className="font-light  text-sm space-y-1">
                <li>Nonstop Hacking</li>
                <li>Technical Workshops</li>
                <li>Sponsor Bounties</li>
                <li>Mentorship</li>
              </ul>
            </Box> */}
          </div>
        </div>

        {/* Conference */}
        {/* <div className="bg-[#E53931] absolute z-10 w-[50%] h-[35%] sm:w-[50%] sm:h-[50%] left-[25%] translate-y-52 sm:left-[25%] sm:translate-y-60 p-6 rounded-[14px]">
          <Image
            src={Screws}
            fill
            alt=""
            className=" absolute z-20 object-center
       scale-x-[0.95] scale-y-[0.95] 
    "
          />

          <h2 className=" pb-0  font-bold text-2xl ">Conference</h2>
          <p className=" font-light pb-2 text-xs">March 12</p>
          <ul className="pt-1 font-light  text-xs space-y-1 ">
            <li>Opening Ceremony</li>
            <li>Keynote Speeches</li>
            <li>Team Formation</li>
            <li>Workshops</li>
          </ul>
        </div> */}

        {/* Hackathon */}
        {/* <div className="bg-[#E53931] absolute z-10 w-[50%] h-[35%] sm:w-[50%] sm:h-[50%] left-[25%] translate-y-140 sm:left-[25%] sm:translate-y-155 p-8 rounded-[14px]">
          <Image
            src={Screws}
            fill
            alt=""
            className=" absolute z-20 object-center
       scale-x-[0.95] scale-y-[0.95] 
    "
          />

          <h2 className=" pb-0  font-bold text-2xl ">Hackathon</h2>
          <p className=" font-light pb-2 text-xs">March 12</p>
          <ul className="pt-1 font-light  text-xs space-y-1 ">
            <li>Opening Ceremony</li>
            <li>Keynote Speeches</li>
            <li>Team Formation</li>
            <li>Workshops</li>
          </ul>
        </div> */}
      </div>
    </section>
  );
}
