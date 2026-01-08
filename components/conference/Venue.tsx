"use client";
import React from "react";
import Image from "next/image";
import { MapPin, Send } from "lucide-react";
import { conferenceVenue, hackathonVenue, VenueData } from "../../lib/venueData";

interface VenueProps {
  type: "conference" | "hackathon";
}

const Venue: React.FC<VenueProps> = ({ type }) => {
  const venue: VenueData =
    type === "conference" ? conferenceVenue : hackathonVenue;

  return (
    <section className="w-full bg-[#00A859] py-16">
        <div className="flex pb-2 items-center justify-center w-full mt-[-10px]">
            <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-6xl tracking-tighter font-[MPlusRounded1c] font-medium text-center mb-8">
                Venue
            </h2>
      </div>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
        
        {/* LEFT IMAGE */}
        <div className="flex justify-center md:justify-start">
          <Image
            src={venue.image}
            alt={venue.name}
            width={500}
            height={500}
            className="
              w-full h-auto
              max-w-[300px] max-h-[260px]
              sm:max-w-[380px] sm:max-h-[340px]
              md:max-w-[480px] md:max-h-[420px]
              lg:max-w-[550px] lg:max-h-[500px]
              rounded-xl
              object-cover
            "
            priority
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-medium text-white leading-tight mb-4">
            {venue.name}
          </h2>

          {/* ADDRESS */}
          <div className="flex items-center md:items-start justify-center md:justify-start text-center text-white mb-3 gap-2">
            <MapPin className="w-6 h-6 flex-shrink-0 mt-1 sm:w-7 sm:h-7 items-center md:items-left" />
            <span className="text-base sm:text-lg md:text-xl leading-relaxed text-left">
              {venue.address}
            </span>
          </div>

          {/* BUTTON */}
          <a href={venue.directionLink} target="_blank" rel="noopener noreferrer">
            <button className="bg-black text-white font-semibold px-6 py-3 rounded-[14px] hover:bg-gray-200 hover:text-black transition-all duration-200">
              <Send className="w-5 h-5 inline-block mr-2 -mt-1" />
              Get Directions
            </button>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Venue;
