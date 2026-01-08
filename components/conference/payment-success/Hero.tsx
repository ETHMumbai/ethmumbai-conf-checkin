"use client";

import { SuccessIcon } from "@/icons/conference/success";

export default function Hero() {
  return (
    <section className="relative flex justify-center overflow-hidden bg-[#E2231A] text-white">
      {/* Centered content */}
      <div
        className="relative z-10 flex flex-col items-center w-full px-4 mt-10
                      py-[3rem] pt-[6rem] sm:py-[9rem] md:py-[6rem] lg:py-[4rem] lg:pt-[7rem]
                      max-w-[95%] sm:max-w-[85%] md:max-w-[70%] lg:max-w-[60%] gap-3 flex-shrink-0"
      >
        <SuccessIcon />
        <h1
          className="font-[MPlusRounded1c] font-extrabold tracking-[-0.05em]
                       text-[2rem] sm:text-[4.8rem] md:text-[54px] lg:text-[54px] leading-[1.05] pt-5"
        >
          Payment Successful!
        </h1>

        <p className="mt-[1rem] font-medium text-center text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-100">
          Your ticket has been confirmed. See you at ETHMumbai 2026!
        </p>
      </div>
    </section>
  );
}
