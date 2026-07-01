"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const slides = [
  {
    heading: ["EMPOWERING", "ORGANIZATIONS", "THROUGH", "RECRUTIMENT"],
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
    tag: "HR STRATEGY",
  },
];

export default function HeroSection() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const navigate = (next: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(next);
      setAnimating(false);
    }, 300);
  };

  const goPrev = () => navigate(active === 0 ? slides.length - 1 : active - 1);
  const goNext = () => navigate(active === slides.length - 1 ? 0 : active + 1);

  useEffect(() => {
    const timer = setInterval(goNext, 5000);
    return () => clearInterval(timer);
  }, [active]);

  // Scrolls to the real "Our Services" section (id="services" in OurServices.tsx).
  // NOTE: this section must NOT also carry id="services" — IDs must be unique
  // in the DOM, otherwise document.getElementById("services") will grab
  // whichever element with that id comes first (this one), breaking the scroll.
  const scrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const slide = slides[active];
  const isSmall = isMobile || isTablet;

  return (
    <section
      id="home"
      style={{ position: "relative", background: "#fff", overflow: "hidden", scrollMarginTop: 130 }}
    >
      {/* Top accent bar */}
      <div
     
      />

      {/* Main grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isSmall ? "1fr" : "1fr 1fr",
          minHeight: isSmall ? "auto" : 600,
          maxWidth: 1280,
          margin: "0 auto",
          padding: isMobile ? "0 16px" : isTablet ? "0 28px" : "0 48px",
          alignItems: "center",
          gap: isSmall ? 24 : 48,
        }}
      >
        {/* Image first on mobile/tablet */}
        {isSmall && (
          <div
            style={{
              position: "relative",
              height: isMobile ? 220 : 320,
              borderRadius: 16,
              overflow: "hidden",
              opacity: animating ? 0 : 1,
              transition: "opacity 0.3s ease",
              marginTop: 24,
            }}
          >
            <img
              src={slide.image}
              alt={slide.heading.join(" ")}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 16,
                right: 16,
                background: "rgba(255,255,255,0.95)",
                borderRadius: 8,
                padding: "6px 14px",
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
              <span style={{ color: "#f0a04b" }}>0{active + 1}</span>
              <span style={{ color: "#cbd5e1", fontWeight: 400 }}>/</span>
              <span>0{slides.length}</span>
            </div>
          </div>
        )}

        {/* LEFT: Text panel */}
        <div
          style={{
            paddingTop: isSmall ? 24 : 72,
            paddingBottom: isSmall ? 16 : 72,
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
              marginBottom: 20,
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
              fontSize: isMobile ? "1.8rem" : isTablet ? "2.4rem" : "clamp(2.2rem, 4vw, 3.4rem)",
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
              fontSize: isMobile ? 14 : 16,
              color: "#64748b",
              lineHeight: 1.65,
              maxWidth: 380,
              margin: "0 0 28px",
            }}
          >
            {slide.subtext}
          </p>

          {/* CTA row */}
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 16 }}>
            <a
              href="#services"
              onClick={scrollToServices}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#f0a04b",
                color: "#fff",
                fontSize: 14,
                fontWeight: 700,
                padding: "11px 24px",
                borderRadius: 8,
                textDecoration: "none",
                letterSpacing: "0.02em",
                transition: "background 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#e08f3a")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#f0a04b")}
            >
              Our Services <ArrowRight size={16} />
            </a>
            <a
              href="#services"
              onClick={scrollToServices}
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "#4d7ab8",
                textDecoration: "none",
                borderBottom: "1.5px solid #4d7ab8",
                paddingBottom: 1,
                cursor: "pointer",
              }}
            >
              Our Services
            </a>
          </div>
        </div>

        {/* RIGHT: Image panel — desktop only */}
        {!isSmall && (
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
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
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
              <span style={{ color: "#f0a04b" }}>0{active + 1}</span>
              <span style={{ color: "#cbd5e1", fontWeight: 400 }}>/</span>
              <span>0{slides.length}</span>
            </div>
          </div>
        )}
      </div>

      {/* Bottom controls bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
          paddingTop: isSmall ? 16 : 24,
          paddingBottom: isSmall ? 24 : 32,
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