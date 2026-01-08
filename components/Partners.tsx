"use client";

import React from "react";
import Image from "next/image";

const partners = [
  {
    logo: "/assets/partners/ETHBarcelona.png",
    name: "ETHBarcelona",
    twitter: "https://x.com/eth_barcelona",
  },
  {
    logo: "/assets/partners/ETHRome.png",
    name: "ETHRome",
    twitter: "https://x.com/ETHRome",
  },
  {
    logo: "/assets/partners/ethchicago.svg",
    name: "ETHChicago",
    twitter: "https://x.com/0xEthChicago",
  },
  {
    logo: "/assets/partners/ethbelgrade.svg",
    name: "ETHBelgrade",
    twitter: "https://x.com/ethbelgrade",
  },
];

export default function Partners() {
  return (
    <section className="bg-white w-full pt-10 pb-15">
      {/* Title */}
      <div className="flex pb-6 items-center justify-center w-full">
        <h2 className="text-black text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-[MPlusRounded1c] tracking-tighter font-medium text-center mb-8">
          Friends of ETHMumbai
        </h2>
      </div>

      {/* Grid */}
      <div className="max-w-[1600px] mx-auto px-[6vw] md:px-[8vw] xl:px-[15vw] 2xl:px-[25vw] grid sm:grid-cols-2 gap-x-14 gap-y-10 justify-items-center">
        {partners.map((p, i) => (
          <div
            key={i}
            // onClick={() => p.twitter && window.open(p.twitter, "_blank")}
            className="relative w-full max-w-[320px] h-[107px] flex items-center justify-center gap-4 px-6 bg-[#F9FAFB] border-[2.8px] border-[#E5E7EB] rounded-[29px]  transition-transform duration-200 hover:scale-105"
          >
            <Image
              src={p.logo}
              alt={p.name}
              fill
              className="object-contain p-5"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
