"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  generalFAQ,
  conferenceFAQ,
  hackathonFAQ,
} from "../lib/faqContent";

/* -------------------------------------------
   Utils: parse markdown-style links
   Example: [speaker form](https://example.com)
-------------------------------------------- */
const renderContent = (text: string) => {
  const regex = /\[([^\]]+)\]\((https?:\/\/[^\s]+)\)/g;

  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    const [fullMatch, label, url] = match;

    // Text before link
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    // Link
    parts.push(
      <a
        key={url + match.index}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline hover:text-blue-800"
      >
        {label}
      </a>
    );

    lastIndex = match.index + fullMatch.length;
  }

  // Remaining text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
};

/* -------------------------------------------
   Accordion
-------------------------------------------- */
interface AccordionProps {
  title: string;
  content: string;
  isActive: boolean;
  onClick: () => void;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  content,
  isActive,
  onClick,
}) => {
  return (
    <div className="w-full text-left px-3 py-1 sm:px-4 sm:py-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-[14px] text-[#0A0A0A] font-medium text-[14px]">
      <button
        onClick={onClick}
        className={`flex w-full items-center justify-between p-4 text-left cursor-pointer focus:outline-none ${
          isActive ? "font-semibold text-[15px]" : ""
        }`}
      >
        <span>{title}</span>
        <ChevronDown
          className={`h-5 w-5 transition-transform ${
            isActive ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-200 ${
          isActive ? "grid-rows-[1fr] px-4 pb-2" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden text-gray-700 font-medium leading-relaxed">
          {renderContent(content)}
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------
   FAQ Wrapper
-------------------------------------------- */
interface FAQProps {
  type?: "general" | "conference" | "hackathon";
}

const FAQ: React.FC<FAQProps> = ({ type = "general" }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const data =
    type === "conference"
      ? conferenceFAQ
      : type === "hackathon"
      ? hackathonFAQ
      : generalFAQ;

  return (
    <section className="relative bg-[#FFD600] py-10 px-4">
      <div className="mb-5">
        <h2 className="font-['MPlusRounded1c'] font-medium text-3xl sm:text-[48px] tracking-[-1px] text-center text-[#0A0A0A] mb-10">
          FAQs
        </h2>
      </div>

      <div className="mx-auto my-6 max-w-[832px] space-y-5">
        {data.map((item, index) => (
          <Accordion
            key={index}
            title={item.title}
            content={item.content}
            isActive={activeIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
