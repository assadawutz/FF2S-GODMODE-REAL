"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SLIDES = [
  { src: "/rectangle-689.png", alt: "AI-Driven intelligence banner" },
  { src: "/rectangle-689.png", alt: "AI-Driven intelligence banner duplicate" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const timer = useRef<NodeJS.Timeout | null>(null);

  /* AUTOPLAY */
  useEffect(() => {
    startAuto();
    return stopAuto;
  }, [index]);

  const startAuto = () => {
    stopAuto();
    timer.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, 4000);
  };

  const stopAuto = () => {
    if (timer.current) clearTimeout(timer.current);
  };

  const goTo = (i: number) => {
    stopAuto();
    setIndex(i);
    startAuto();
  };

  return (
    <section
      className="w-full bg-white overflow-hidden"
      aria-label="AI-Driven Hero Section"
    >

      {/* ========== DESKTOP ========== */}
      <div className="hidden md:block">
        <figure className="relative w-full h-[560px] overflow-hidden m-0">

          {SLIDES.map((slide, i) => {
            const active = i === index;
            return (
              <div
                key={i}
                aria-hidden={!active}
                className={`
                  absolute inset-0 transition-all duration-[1200ms]
                  ease-[cubic-bezier(.16,.84,.44,1)]
                  ${active ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-105 translate-x-6"}
                `}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover transition-transform duration-[1200ms] hover:scale-[1.04]"
                />
              </div>
            );
          })}

          {/* TEXT LAYER */}
          <figcaption className="absolute inset-0 flex items-center z-20">
            <div className="w-full flex justify-center">
              <div className="max-w-[1440px] w-full px-10 pointer-events-none">

                <Image
                  src="/okmd_ai_logo.png"
                  width={80}
                  height={80}
                  alt="OKMD Logo"
                  className="mb-6 transition-all hover:scale-[1.05] pointer-events-auto"
                />

                <h1 className="text-[#1B1D20] font-bold text-[64px] leading-[72px]">
                  AI-Driven intelligence:
                </h1>

                <p className="text-[#1B1D20] text-[24px] mt-4 opacity-90 max-w-[600px]">
                  Search, summarize, and Recommend in an instant.
                </p>

                <button
                  type="button"
                  className="mt-6 bg-[#74CEE2] px-6 py-3 rounded-xl text-white text-[18px] font-medium
                    hover:bg-[#5FC4D8] active:scale-95 transition shadow-md pointer-events-auto"
                >
                  ดูรายละเอียด
                </button>
              </div>
            </div>
          </figcaption>
        </figure>

        {/* PAGINATION DESKTOP */}
        <nav className="w-full flex justify-center mt-4" aria-label="Slide navigation">
          <ul className="flex items-center gap-3 list-none m-0 p-0">
            {SLIDES.map((_, i) => (
              <li key={i}>
                <button
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-pressed={i === index}
                  className={`
                    block transition-all rounded-full cursor-pointer
                    ${i === index ? "w-12 h-2 bg-[#74CEE2]" : "w-2 h-2 bg-[#ECECED]"}
                  `}
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* ========== MOBILE ========== */}
      <div className="md:hidden">
        <figure className="relative w-full h-[320px] overflow-hidden m-0">

          {SLIDES.map((slide, i) => {
            const active = i === index;
            return (
              <div
                key={i}
                aria-hidden={!active}
                className={`
                  absolute inset-0 transition-all duration-[1000ms]
                  ${active ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-105 translate-x-4"}
                `}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            );
          })}

          {/* MOBILE TEXT */}
          <figcaption className="absolute left-4 bottom-[40px] w-[260px] z-20">
            <h2 className="text-[#1B1D20] font-bold text-[20px] leading-[24px]">
              AI-Driven intelligence:
            </h2>
            <p className="text-[#1B1D20] text-[10px] mt-1 leading-[14px] opacity-90">
              Search, summarize, and Recommend in an instant.
            </p>
          </figcaption>
        </figure>

        {/* PAGINATION MOBILE */}
        <nav className="flex gap-2 mt-4 justify-center px-4" aria-label="Mobile slide navigation">
          <ul className="flex gap-2 m-0 p-0 list-none">
            {SLIDES.map((_, i) => (
              <li key={i}>
                <button
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  aria-pressed={i === index}
                  onClick={() => goTo(i)}
                  className={`
                    cursor-pointer block rounded-sm transition-all
                    ${i === index ? "w-[21px] h-[5px] bg-[#74CEE2]" : "w-[21px] h-[5px] bg-[#C4C5C8]"}
                  `}
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>

    </section>
  );
}
