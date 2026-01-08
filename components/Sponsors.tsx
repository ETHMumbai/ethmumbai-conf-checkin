"use client";

import React from "react";
import Image from "next/image";
import TwitterLogo from "../public/assets/x-logo.png";

const sponsors = [
  {
    logo: "/assets/sponsors/arweave.png",
    name: "Arweave",
    twitter: " https://x.com/arweaveindia",
  },
  {
    logo: "/assets/sponsors/avail.png",
    name: "Avail",
    twitter: "https://x.com/AvailProject",
  },
  {
    logo: "/assets/sponsors/esp.png",
    name: "ESP",
    twitter: "https://x.com/EF_ESP",
  },
  {
    logo: "/assets/sponsors/Polygon.png",
    name: "Polygon",
    twitter: "https://twitter.com/0xPolygon",
  },

  {
    logo: "/assets/sponsors/core.png",
    name: "Core",
    twitter: "https://x.com/Coredao_Org",
  },
  {
    logo: "/assets/sponsors/Fuel.png",
    name: "Fuel",
    twitter: "https://x.com/fuel_network",
  },
  {
    logo: "/assets/sponsors/lumio.png",
    name: "Lumio",
    twitter: "https://x.com/lumioFDN",
  },
  {
    logo: "/assets/sponsors/purpledao.png",
    name: "Purple DAO",
    twitter: "https://purple.construction/about/",
  },

  {
    logo: "/assets/sponsors/TheGraph.png",
    name: "The Graph",
    twitter: "https://x.com/graphprotocol",
  },
  {
    logo: "/assets/sponsors/VaraNetwork.png",
    name: "Vara",
    twitter: "https://x.com/VaraNetwork",
  },
];

export default function Sponsors() {
  return (
    <section className="bg-[#3FA9F5] w-full py-10">
      {/* Title */}
      <div className="flex pb-6 items-center justify-center w-full">
        <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-6xl tracking-tighter font-[MPlusRounded1c] font-medium text-center mb-8">
          Past Sponsors
        </h2>
      </div>

      {/* Grid */}
      <div className="max-w-[1600px] mx-auto px-[6vw] md:px-[8vw] xl:px-[10vw] 2xl:px-[12vw] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-14 gap-y-16 justify-items-center">
        {sponsors.map((s, i) => (
          <div
            key={i}
            className={`
              relative
              w-full
              max-w-[320px]
              aspect-[2.4/1]
              rounded-[10px]
              overflow-hidden
              
              group
              ${i === 8 ? "lg:col-start-2" : ""}  
              ${i === 9 ? "lg:col-start-3" : ""} 
              bg-[url('/assets/sponsors/sponsors-card.png')]
              bg-cover
              bg-center
            `}
            // onClick={() => s.twitter && window.open(s.twitter, "_blank")}
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

      {/* CTA Button */}
      {/* <a
        href="https://tally.so/r/3NkdGb"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex justify-center mt-16">
          <button className="bg-[#D63A2F] text-white text-lg md:text-xl px-10 py-3 rounded-xl cursor-pointer transition-all duration-200 hover:opacity-90 hover:scale-105 hover:shadow-lg">
            Become a Sponsor
          </button>
        </div>
      </a> */}
    </section>
  );
}
