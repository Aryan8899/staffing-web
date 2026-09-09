"use client";

import { ArrowRight, Users, ClipboardCheck, Handshake, BarChart3 } from "lucide-react";

/**
 * ---------------------------------------------------------------------------
 * Design tokens — accent moved to a deep blue to match your site's existing
 * brand color (navbar / "Job Seeker" button) instead of the brass tried earlier.
 * Register Fraunces + Inter once in your root layout (next/font/google) for
 * the serif/sans pairing; falls back to system fonts otherwise.
 * ---------------------------------------------------------------------------
 */
const COLORS = {
  ink: "#1B2430",
  paper: "#FFFFFF",
  primary: "#2557A7",
  primaryDark: "#1D4380",
  slate: "#5B6570",
  line: "#E4DFD3",
  surface: "#F5F8FC",
};

const FONT_DISPLAY = 'var(--font-display, "Fraunces"), Georgia, "Times New Roman", serif';
const FONT_SANS =
  'var(--font-sans, "Inter"), -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80";

const features = [
  {
    icon: Users,
    title: "Talent acquisition",
    description: "Sourcing and screening candidates who fit your team.",
  },
  {
    icon: ClipboardCheck,
    title: "Workforce planning",
    description: "Structured hiring plans aligned to your growth.",
  },
  {
    icon: Handshake,
    title: "Employer branding",
    description: "Positioning your company to attract top talent.",
  },
  {
    icon: BarChart3,
    title: "HR analytics",
    description: "Data-backed insight across every hire you make.",
  },
];

export default function HeroSection() {
  // Scrolls to the real "Our Services" / "Contact" sections elsewhere on the
  // page (id="services" / id="contact"). NOTE: those ids must be unique in
  // the DOM — if any other element reuses them, getElementById will grab
  // whichever one comes first, breaking the scroll.
  const scrollTo = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="home" style={{ position: "relative", background: COLORS.paper, fontFamily: FONT_SANS }}>
      <style>{`
        .hero-focusable:focus-visible {
          outline: 2px solid ${COLORS.primary};
          outline-offset: 3px;
        }
        .hero-feature-card {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .hero-feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(15,23,42,0.12);
        }
      `}</style>

      {/* Full-bleed background image */}
      <div style={{ position: "relative", minHeight: 620, display: "flex", alignItems: "center" }}>
        <img
          src={HERO_IMAGE}
          alt="Two professionals shaking hands after a successful hire"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(100deg, rgba(15,26,46,0.88) 0%, rgba(20,34,58,0.74) 40%, rgba(20,34,58,0.4) 100%)",
          }}
        />

        {/* Content */}
        <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px, 5vw, 48px)", width: "100%" }}>
          <div style={{ maxWidth: 620, padding: "96px 0 140px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 22 }}>
              <span style={{ width: 18, height: 1.5, background: "#7FA8E0", display: "inline-block" }} />
              <span style={{ fontSize: 13, fontWeight: 500, color: "#7FA8E0" }}>Talent acquisition</span>
            </div>

            <h1
              style={{
                fontFamily: FONT_DISPLAY,
                fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
                fontWeight: 600,
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
                color: COLORS.paper,
                margin: "0 0 22px",
              }}
            >
              Empowering organizations through recruitment
            </h1>

            <p style={{ fontSize: 16.5, color: "rgba(255,255,255,0.82)", lineHeight: 1.7, maxWidth: 460, margin: "0 0 34px" }}>
              Connecting the right talent with the right opportunities — since day one.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
              <a
                href="#services"
                onClick={scrollTo("services")}
                className="hero-focusable"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  background: COLORS.primary,
                  color: COLORS.paper,
                  fontSize: 14.5,
                  fontWeight: 600,
                  padding: "13px 26px",
                  borderRadius: 8,
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = COLORS.primaryDark)}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = COLORS.primary)}
              >
                Our services <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                onClick={scrollTo("contact")}
                className="hero-focusable"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  fontSize: 14.5,
                  fontWeight: 600,
                  color: COLORS.paper,
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.55)",
                  padding: "13px 26px",
                  borderRadius: 8,
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.borderColor = COLORS.paper)}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.55)")}
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Feature strip — individual rounded, shadowed boxes overlapping the hero image */}
      <div style={{ maxWidth: 1280, margin: "-64px auto 0", padding: "0 clamp(20px, 5vw, 48px)", position: "relative", zIndex: 2 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 20,
          }}
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="hero-feature-card"
                style={{
                  background: COLORS.paper,
                  borderRadius: 14,
                  boxShadow: "0 12px 30px rgba(15,23,42,0.08)",
                  border: `1px solid ${COLORS.line}`,
                  padding: "28px 24px",
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    background: COLORS.surface,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 16,
                  }}
                >
                  <Icon size={20} color={COLORS.primary} />
                </div>
                <div style={{ fontSize: 16, fontWeight: 600, color: COLORS.ink, marginBottom: 6 }}>
                  {feature.title}
                </div>
                <div style={{ fontSize: 14, color: COLORS.slate, lineHeight: 1.6 }}>{feature.description}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Spacer so the next section clears the overlapping cards */}
      <div style={{ height: 80 }} />
    </section>
  );
}