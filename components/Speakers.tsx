"use client";

import Image from "next/image";
import Link from "next/link";
import { pastSpeakers } from "../lib/speakersData";
// import { homeSpeakers } from "../lib/speakersData";

export default function Speakers() {
  return (
    <section className="w-full bg-[#FFD600] py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-black text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-[MPlusRounded1c] tracking-tighter font-medium text-center mb-8">
        People @ ETHMumbai
      </h2>

      {/* Speakers Grid */}
      <div className="px-4 sm:px-8 lg:px-12 flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 mb-12 mx-auto">
        {pastSpeakers.map((speaker, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-[150px] sm:w-40 lg:w-[150px]"
          >
            {/* Wrapper with padding for overflow */}
            <div className="relative w-[150px] sm:w-40 lg:w-[150px] mb-3 pt-6 group">
              {/* CLICKABLE ONLY IF xLink EXISTS */}
              {speaker.xLink ? (
                // <a
                //   href={speaker.xLink}
                //   target="_blank"
                //   rel="noopener noreferrer"
                //   className="cursor-pointer group"
                // >
                  <div className="w-[150px] h-[150px] sm:w-40 sm:h-40 lg:w-[150px] lg:h-[150px] rounded-4xl border-[5px] border-[#EBEBEB] bg-[#E2231A] overflow-visible relative">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      width={150}
                      height={185}
                      className={`absolute bottom-0 left-[50%] -translate-x-1/2 object-cover rounded-3xl ${
                        speaker.imageScale || "h-[118%]"
                      }`}
                      style={{
                        width: "112%",
                        objectPosition: "center 30%",
                        borderBottomLeftRadius: "28px",
                      }}
                    />

                    {/* Hover gradient */}
                    <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10" />
                    </div>
                  </div>
                // </a>
              ) : (
                <div className="cursor-default group">
                  <div className="w-[150px] h-[150px] sm:w-40 sm:h-40 lg:w-[150px] lg:h-[150px] rounded-4xl border-[5px] border-[#EBEBEB] bg-[#E2231A] overflow-visible relative">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      width={150}
                      height={185}
                      className={`absolute bottom-0 left-[50%] -translate-x-1/2 object-cover rounded-3xl ${
                        speaker.imageScale || "h-[118%]"
                      }`}
                      style={{
                        width: "112%",
                        objectPosition: "center 30%",
                        borderBottomLeftRadius: "28px",
                      }}
                    />

                    {/* Hover gradient still works */}
                    <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Speaker Info */}
            <h3 className="text-[16px] leading-6 tracking-[-0.31px] text-[#0A0A0A] text-center mb-1">
              {speaker.name}
            </h3>
            <p className="text-[14px] leading-5 tracking-[-0.015px] text-[#575757] text-center">
              {speaker.company}
            </p>
          </div>
        ))}
      </div>

      {/* Apply to Speak Button */}
      <div className="flex justify-center gap-6 mt-16 flex-wrap">
        <Link href="/conference#conference-speakers" scroll>
          <span className="bg-[#D63A2F] text-white text-lg md:text-xl px-14 py-3 rounded-xl cursor-pointer transition-all duration-200 hover:opacity-90 hover:scale-105 hover:shadow-lg text-center">
            View All Speakers
          </span>
        </Link>

        <Link href="/hackathon#judges-mentors" scroll>
          <span className="border border-[#D63A2F] text-[#D63A2F] text-lg md:text-xl px-8 py-3 rounded-xl cursor-pointer transition-all duration-200 hover:opacity-90 hover:scale-105 hover:shadow-lg text-center">
            View All Judges & Mentors
          </span>
        </Link>
      </div>
    </section>
  );
}
