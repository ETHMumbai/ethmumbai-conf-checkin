"use client";

import React from "react";
import Link from "next/link";

export default function ClosingCTA() {
  return (
    <section className="bg-white w-full pt-10 pb-20">
      
      {/* Title */}
      <div className="flex items-center justify-center w-full pb-6">
        <h2 className="text-black text-4xl sm:text-5xl md:text-6xl lg:text-6xl 
                       font-[MPlusRounded1c] tracking-tighter font-medium 
                       text-center mb-8">
          Don’t miss out — tickets are selling fast!
        </h2>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center w-full mt-6">
        <Link href="/tickets" target="_blank">
          <button
            className="bg-[#E2231A] border text-white
                       font-semibold text-base px-8 py-4 rounded-[14px]
                       hover:bg-gray-100 transition-all duration-200"
          >
            Buy Tickets
          </button>
        </Link>
      </div>

    </section>
  );
}
