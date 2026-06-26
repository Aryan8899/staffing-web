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
    <>
      <style>{`
        .partners-section {
          width: 100%;
          background: #E8EEF7;
          padding: 112px 80px;
        }

        .partners-header {
          text-align: center;
          margin-bottom: 64px;
        }

        .partners-bar {
          width: 64px;
          height: 4px;
          background: #fb923c;
          border-radius: 9999px;
          margin: 0 auto 24px;
        }

        .partners-heading {
          font-size: clamp(1.75rem, 4vw, 3rem);
          font-weight: 800;
          color: #0f172a;
          margin: 0;
          line-height: 1.2;
        }

        .partners-subtext {
          color: #64748b;
          margin-top: 16px;
          font-size: clamp(0.95rem, 2vw, 1.125rem);
        }

        .partners-carousel {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .partners-arrow {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #fff;
          border: 1px solid #e2e8f0;
          cursor: pointer;
          transition: background 0.2s;
        }

        .partners-arrow:hover {
          background: #f8fafc;
        }

        .partners-track {
          display: flex;
          gap: 24px;
          overflow-x: auto;
          scroll-behavior: smooth;
          padding: 12px 0;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .partners-track::-webkit-scrollbar {
          display: none;
        }

        .partner-card {
          flex-shrink: 0;
          width: 240px;
          height: 192px;
          background: #fff;
          border-radius: 24px;
          border: 1px solid #f1f5f9;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 16px;
          padding: 24px;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .partner-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.12);
        }

        .partner-card img {
          width: 128px;
          height: 64px;
          object-fit: contain;
        }

        .partner-name {
          font-size: 14px;
          font-weight: 600;
          color: #64748b;
          text-align: center;
        }

        /* Tablet: 768px – 1023px */
        @media (max-width: 1023px) {
          .partners-section {
            padding: 80px 40px;
          }

          .partner-card {
            width: 200px;
            height: 172px;
          }

          .partner-card img {
            width: 108px;
            height: 54px;
          }
        }

        /* Mobile: below 768px */
        @media (max-width: 767px) {
          .partners-section {
            padding: 56px 16px;
          }

          .partners-header {
            margin-bottom: 40px;
          }

          .partners-carousel {
            gap: 10px;
          }

          .partners-arrow {
            width: 36px;
            height: 36px;
          }

          .partners-track {
            gap: 16px;
            padding: 8px 0;
          }

          .partner-card {
            width: 160px;
            height: 148px;
            border-radius: 16px;
            padding: 16px;
            gap: 12px;
          }

          .partner-card img {
            width: 90px;
            height: 44px;
          }

          .partner-name {
            font-size: 12px;
          }
        }

        /* Very small mobile: below 400px */
        @media (max-width: 399px) {
          .partners-section {
            padding: 48px 12px;
          }

          .partners-arrow {
            width: 32px;
            height: 32px;
          }

          .partner-card {
            width: 140px;
            height: 136px;
            border-radius: 14px;
            padding: 12px;
          }

          .partner-card img {
            width: 76px;
            height: 38px;
          }
        }
      `}</style>

      <section className="partners-section">
        {/* Header */}
        <div className="partners-header">
          <div className="partners-bar" />
          <h2 className="partners-heading">Look Who Partners With Us</h2>
          <p className="partners-subtext">Trusted by the world's leading companies</p>
        </div>

        {/* Carousel */}
        <div className="partners-carousel">
          {/* Left Arrow */}
          <button onClick={() => scroll("left")} className="partners-arrow" aria-label="Scroll left">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Cards Track */}
          <div ref={scrollRef} className="partners-track">
            {partners.map((p) => (
              <div key={p.name} className="partner-card">
                <img
                  src={p.image}
                  alt={p.name}
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
                <span className="partner-name">{p.name}</span>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button onClick={() => scroll("right")} className="partners-arrow" aria-label="Scroll right">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </section>
    </>
  );
}