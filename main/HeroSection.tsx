"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = {
  heading: string[];
  image: string;
};

const slides: Slide[] = [
  {
    heading: ["EMPOWERING", "ORGANIZATIONS", "THROUGH", "RECRUITMENT"],
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    heading: ["INNOVATIVE", "RECRUITMENT", "SOLUTIONS"],
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function HeroSection() {
  const [active, setActive] = useState(0);

  const goPrev = () =>
    setActive((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const goNext = () =>
    setActive((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* soft shadow at the very top, simulating a sticky header edge */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-6 bg-gradient-to-b from-black/10 to-transparent" />

      {/* decorative blob / rings / dots, bottom-right */}
      <svg
        className="pointer-events-none absolute -bottom-10 right-0 z-0 h-64 w-64 text-blue-100 opacity-70"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M30 170 Q 80 120 130 150 T 190 110"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>

      <div className="relative mx-auto flex min-h-[640px] max-w-[1920px] items-center">
        {/* left arrow */}
        <button
          onClick={goPrev}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-800 shadow-sm transition-colors hover:bg-gray-50 md:left-9"
        >
          <ChevronLeft size={20} />
        </button>

        {/* right arrow */}
        <button
          onClick={goNext}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-800 shadow-sm transition-colors hover:bg-gray-50 md:right-9"
        >
          <ChevronRight size={20} />
        </button>

        {/* slides */}
        <div className="relative h-full w-full">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`grid w-full grid-cols-1 items-center gap-8 px-6 transition-opacity duration-500 ease-in-out md:grid-cols-2 md:gap-12 md:px-16 ${
                i === active
                  ? "relative z-10 opacity-100"
                  : "pointer-events-none absolute inset-0 z-0 opacity-0"
              }`}
            >
              {/* left: text panel */}
              <div className="relative flex flex-col items-start gap-6 py-16 md:py-0">
                {/* decorative arched / dotted blob behind the text */}
                <div className="pointer-events-none absolute -left-10 -top-24 -z-10 h-[420px] w-[420px] max-w-[80vw] overflow-hidden md:-left-16">
                  <svg viewBox="0 0 400 400" className="h-full w-full">
                    <circle
                      cx="120"
                      cy="220"
                      r="150"
                      className="fill-blue-50"
                    />
                    <circle
                      cx="160"
                      cy="160"
                      r="90"
                      className="fill-blue-100/70"
                    />
                    <path
                      d="M0 160 C 60 60, 160 60, 160 160"
                      stroke="#bcd4f0"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M-20 200 C 50 80, 180 80, 200 220"
                      stroke="#bcd4f0"
                      strokeWidth="2"
                      fill="none"
                    />
                    {[
                      [70, 250],
                      [100, 280],
                      [130, 310],
                      [70, 310],
                      [100, 340],
                      [40, 340],
                    ].map(([cx, cy], idx) => (
                      <circle
                        key={idx}
                        cx={cx}
                        cy={cy}
                        r="4"
                        className="fill-blue-200"
                      />
                    ))}
                  </svg>
                </div>

                <h1 className="text-4xl font-extrabold uppercase leading-tight tracking-tight text-[#4d7ab8] sm:text-5xl">
                  {slide.heading.map((line, idx) => (
                    <span key={idx} className="block">
                      {line}
                    </span>
                  ))}
                </h1>

                <a
                  href="#"
                  className="inline-block rounded-md bg-[#f0a04b] px-7 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#e08f3a]"
                >
                  Know More
                </a>
              </div>

              {/* right: image */}
              <div className="relative h-[320px] w-full overflow-hidden rounded-xl shadow-lg sm:h-[420px] md:h-[580px]">
                <img
                  src={slide.image}
                  alt={slide.heading.join(" ")}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* pagination dots */}
      <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === active ? "w-6 bg-[#4d7ab8]" : "w-2 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}