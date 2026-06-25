"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const slides = [
  {
    heading: ["EMPOWERING", "ORGANIZATIONS", "THROUGH", "RECRUITMENT"],
    subtext: "Connecting the right talent with the right opportunities — since day one.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80",
    tag: "Talent Acquisition",
  },
  {
    heading: ["INNOVATIVE", "RECRUITMENT", "SOLUTIONS"],
    subtext: "End-to-end hiring support for growing teams across every industry.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
    tag: "HR Strategy",
  },
];

export default function HeroSection() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  const navigate = (next: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(next);
      setAnimating(false);
    }, 300);
  };

  const goPrev = () =>
    navigate(active === 0 ? slides.length - 1 : active - 1);
  const goNext = () =>
    navigate(active === slides.length - 1 ? 0 : active + 1);

  useEffect(() => {
    const timer = setInterval(goNext, 5000);
    return () => clearInterval(timer);
  }, [active]);

  const slide = slides[active];

  return (
    <section
   
    >
      {/* Top accent bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: "linear-gradient(90deg, #4d7ab8 0%, #f0a04b 100%)",
          zIndex: 20,
        }}
      />

      {/* Main grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: 600,
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 48px",
          alignItems: "center",
          gap: 48,
        }}
      >
        {/* LEFT: Text panel */}
        <div
          style={{
            paddingTop: 72,
            paddingBottom: 72,
            opacity: animating ? 0 : 1,
            transform: animating ? "translateY(12px)" : "translateY(0)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        >
          {/* Tag pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "#eef4fb",
              color: "#4d7ab8",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "5px 14px",
              borderRadius: 100,
              marginBottom: 28,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#4d7ab8",
                display: "inline-block",
              }}
            />
            {slide.tag}
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
              fontWeight: 900,
              lineHeight: 1.08,
              letterSpacing: "-0.01em",
              color: "#4d7ab8",
              textTransform: "uppercase",
              margin: "0 0 20px",
            }}
          >
            {slide.heading.map((line, idx) => (
              <span key={idx} style={{ display: "block" }}>
                {line}
              </span>
            ))}
          </h1>

          {/* Divider */}
          <div
            style={{
              width: 48,
              height: 3,
              background: "#f0a04b",
              borderRadius: 2,
              marginBottom: 20,
            }}
          />

          {/* Subtext */}
          <p
            style={{
              fontSize: 16,
              color: "#64748b",
              lineHeight: 1.65,
              maxWidth: 380,
              margin: "0 0 36px",
            }}
          >
            {slide.subtext}
          </p>

          {/* CTA row */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#f0a04b",
                color: "#fff",
                fontSize: 14,
                fontWeight: 700,
                padding: "12px 28px",
                borderRadius: 8,
                textDecoration: "none",
                letterSpacing: "0.02em",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#e08f3a")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#f0a04b")}
            >
              Know More <ArrowRight size={16} />
            </a>
            <a
              href="#"
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "#4d7ab8",
                textDecoration: "none",
                borderBottom: "1.5px solid #4d7ab8",
                paddingBottom: 1,
              }}
            >
              Our Services
            </a>
          </div>
        </div>

        {/* RIGHT: Image panel */}
        <div
          style={{
            position: "relative",
            height: 480,
            borderRadius: 16,
            overflow: "hidden",
            opacity: animating ? 0 : 1,
            transition: "opacity 0.3s ease",
          }}
        >
          <img
            src={slide.image}
            alt={slide.heading.join(" ")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />

          {/* Slide counter badge */}
          <div
            style={{
              position: "absolute",
              bottom: 20,
              right: 20,
              background: "rgba(255,255,255,0.95)",
              borderRadius: 8,
              padding: "8px 16px",
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 13,
              fontWeight: 700,
              color: "#4d7ab8",
              boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
              zIndex: 5,
            }}
          >
            <span style={{ color: "#f0a04b" }}>
              0{active + 1}
            </span>
            <span style={{ color: "#cbd5e1", fontWeight: 400 }}>/</span>
            <span>0{slides.length}</span>
          </div>
        </div>
      </div>

      {/* Bottom controls bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
          paddingTop: 24,
          paddingBottom: 32,
        }}
      >
        <button
          onClick={goPrev}
          aria-label="Previous slide"
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            border: "1.5px solid #4d7ab8",
            background: "#fff",
            color: "#4d7ab8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#eef4fb")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}
        >
          <ChevronLeft size={16} />
        </button>

        {/* Dots */}
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => navigate(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: i === active ? 24 : 8,
                height: 8,
                borderRadius: 100,
                background: i === active ? "#4d7ab8" : "#cbd5e1",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>

        <button
          onClick={goNext}
          aria-label="Next slide"
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            border: "1.5px solid #4d7ab8",
            background: "#fff",
            color: "#4d7ab8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#eef4fb")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </section>
  );
}