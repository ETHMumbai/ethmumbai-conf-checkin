"use client";

import { useState } from "react";
import { hackathonAgenda } from "../../lib/hackathonAgendaData";
import { Calendar } from "lucide-react";

export default function Agenda() {
  const [activeDay, setActiveDay] = useState(0);
  type AgendaEvent = {
    time: string;
    title: string;
    speaker?: string;
    subtitle?: string;
  };
  type Day = { items: AgendaEvent[]; title?: string };
  const days: Day[] = hackathonAgenda as unknown as Day[];
  const safeActiveDay =
    days.length > 0 ? Math.min(Math.max(activeDay, 0), days.length - 1) : 0;

  return (
    <section className="w-full bg-white py-10 px-4">
      {/* TITLE */}

      <h2 className="flex items-center justify-center gap-3 font-[MPlusRounded1c] text-center text-4xl md:text-5xl font-semibold text-black mb-8">
        Agenda{" "}
        {/* <a
          title="Add to Calendar"
          target="_blank"
          rel="noopener noreferrer"
          href="https://calendar.google.com/calendar/?cid=Y183YWRmNTgwNjAzNjI1YzRlNmJlMDM1ODkyZDU1ZGFlOTg3NTk2YzRkYWJkMGQ0NjQ1MzdhYTQ2M2EyNDc5MjEwQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20"
        > */}
          {/* <Calendar className="w-5 h-5 mt-1 md:mt-2 " /> */}
        {/* </a> */}
      </h2>

      {/* DAY SWITCHER */}
      <div className="flex justify-center mb-10 px-2 md:px-0">
        <div className="bg-[#E2231A] p-1 rounded-full flex flex-wrap gap-2 md:gap-4 justify-center">
          {days.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveDay(index)}
              className={`px-4 sm:px-6 md:px-12 py-2 rounded-full text-sm font-medium transition cursor-pointer
          ${
            activeDay === index
              ? "bg-white text-black"
              : "text-white hover:bg-white/20"
          }
        `}
            >
              {`Day ${index + 1}`}
            </button>
          ))}
        </div>
      </div>

      {/* AGENDA LIST */}
      <div className="max-w-3xl mx-auto  flex flex-col gap-6">
        {days[safeActiveDay]?.items?.map((item, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-[#E2231A] text-white p-4 flex items-center gap-6 shadow-sm"
          >
            <div className="text-lg font-regular w-20 text-right">
              {item.time}
            </div>

            <div className="flex justify-center">
              <div className="w-[4px] h-full min-h-[24px] bg-white rounded-full" />
            </div>

            <div className="flex flex-col">
              <p className="text-lg font-medium">{item.title}</p>

              {item.speaker && (
                <p className="text-sm text-gray-600 mt-1">{item.speaker}</p>
              )}

              {item.subtitle && (
                <p className="text-sm text-gray-500">{item.subtitle}</p>
              )}
            </div>
          </div>
        ))}

        {!days[safeActiveDay]?.items?.length && (
          <div className="text-center text-white opacity-80">
            Agenda will be announced soon.
          </div>
        )}
      </div>
    </section>
  );
}
