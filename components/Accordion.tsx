"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SliderArrow from "./icons/SliderArrow";

type Section = {
  title: string;
  content?: string;
};

const SECTIONS: Section[] = [
  {
    title: "ESTRATEGIA Y DISEÑO",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "TIENDA ONLINE",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "SITIO WEB PARA TURISMO",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "SITIO WEB INSTITUCIONAL",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "APPS Y PROYECTOS A MEDIDA",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "HOSTING Y SOPORTE",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export default function Accordion() {
  // First panel open by default, matching the reference image
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="accordion w-full lg:max-w-[70%]">
      {SECTIONS.map((section, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={section.title} className={`border-b border-mint`}>
            <button
              type="button"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between py-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-md"
            >
              <span
                className={`title-small leading-[100%] transition ${
                  isOpen ? "text-mint-400" : "text-black"
                }`}
              >
                {section.title}
              </span>
              <SliderArrow
              strokeWidth={4}
                className={`h-8 w-16 transition-transform duration-300 ${
                  isOpen ? "-rotate-90" : "rotate-90"
                }`}
              />
            </button>

            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                {section.content && (
                  <p className="pb-4 text-sm leading-relaxed text-slate-600">
                    {section.content}
                  </p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
