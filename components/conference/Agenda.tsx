"use client";
import Image from "next/image";
import { agendaData } from "@/lib/conferenceAgendaData";

export default function Agenda() {
  return (
    <section className="w-full bg-white py-16">
      {/* TITLE */}
      <div className="flex justify-center items-center mb-8">
        <h2 className="text-4xl font-[MPlusRounded1c] md:text-5xl font-semibold tracking-tight">
          Agenda
        </h2>

        <button className="ml-4 bg-[#3FA9F5] text-white px-4 py-2 rounded-xl text-sm font-medium hover:opacity-80 transition">
          + Add to Calendar
        </button>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto px-4">
        {agendaData.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6"
          >
            {/* TIME + TAG */}
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#FF4D4D] text-white text-xs font-medium px-3 py-1 rounded-md">
                {item.time} • {item.duration}
              </span>

              <span className="text-xs font-semibold text-gray-600 tracking-wide">
                {item.type}
              </span>
            </div>

            {/* TITLE */}
            <h3 className="text-xl font-semibold mb-4 leading-snug">
              {item.title}
            </h3>

            {/* SPEAKERS */}
            <div className="flex flex-col gap-4">
              {item.speakers.map((speaker, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                  />

                  <div>
                    <p className="text-sm font-medium">{speaker.name}</p>
                    <p className="text-xs text-gray-500">
                      {speaker.company} • {speaker.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
