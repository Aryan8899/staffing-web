"use client";

import { useRef } from "react";

const partners = [
  { name: "Google", image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Amazon", image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Microsoft", image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Apple", image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { name: "Infosys", image: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
  { name: "Tata", image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_logo.svg" },
  { name: "HDFC Bank", image: "https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg" },
  { name: "Wipro", image: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" },
  { name: "IBM", image: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "Accenture", image: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
];

export default function Partners() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "right" ? 280 : -280, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-[#E8EEF7] py-28 px-6 md:px-14 lg:px-20">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="w-16 h-1 bg-orange-400 rounded-full mx-auto mb-6" />
        <h2 className="text-5xl font-extrabold text-slate-900">Look Who Partners With Us</h2>
        <p className="text-slate-500 mt-4 text-lg">Trusted by the world's leading companies</p>
      </div>

      {/* Carousel */}
      <div className="flex items-center gap-5">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="shrink-0 w-13 h-13 w-12 h-12 flex items-center justify-center rounded-full bg-white border border-slate-200 hover:bg-slate-50 transition-colors"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Cards Track */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth py-3"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {partners.map((p) => (
            <div
              key={p.name}
              className="shrink-0 w-[240px] h-48 bg-white rounded-3xl border border-slate-100 flex flex-col items-center justify-center gap-4 p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-200"
            >
              <img
                src={p.image}
                alt={p.name}
                className="w-32 h-16 object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent) {
                    const fb = document.createElement("div");
                    fb.style.cssText =
                      "width:64px;height:64px;border-radius:12px;background:#F1F5F9;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;color:#64748B;letter-spacing:0.5px;";
                    fb.textContent = p.name.slice(0, 2).toUpperCase();
                    parent.insertBefore(fb, parent.firstChild);
                  }
                }}
              />
              <span className="text-sm font-semibold text-slate-500 text-center">{p.name}</span>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-white border border-slate-200 hover:bg-slate-50 transition-colors"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}