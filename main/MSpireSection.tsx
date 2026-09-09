"use client";

import { useEffect, useRef, useState } from "react";

// ─── Animated Counter Hook ────────────────────────────────────────────────────
function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
}

// ─── Stat Card ────────────────────────────────────────────────────────────────
interface StatCardProps {
  label: string;
  value: number;
  suffix: string;
  description: string;
  animate: boolean;
}

function StatCard({ label, value, suffix, description, animate }: StatCardProps) {
  const count = useCountUp(value, 2200, animate);

  return (
    <div className="bg-white rounded-2xl shadow-md px-8 py-10 flex flex-col items-center text-center flex-1 min-w-55">
      <p className="text-[15px] font-semibold text-gray-800 mb-4">{label}</p>
      <p className="text-5xl font-extrabold text-[#3B6FE8] mb-4 leading-none tabular-nums">
        {value >= 1000 ? count.toLocaleString("en-IN") : count}
        <span className="ml-1">{suffix}</span>
      </p>
      <p className="text-[13px] text-gray-500 leading-snug max-w-50">{description}</p>
    </div>
  );
}

// ─── Feedback Card ────────────────────────────────────────────────────────────
interface FeedbackCardProps {
  type: "Candidate Feedback" | "Hiring Partner Feedback";
  quote: string;
  attribution: string;
  avatarUrl?: string; // drop in a real photo URL; falls back to initials if omitted
}

// Deterministic accent color per name so the same person always gets the same
// avatar color, without relying on an external stock-photo service (whose
// ethnicity you can't control or guarantee anyway).
const AVATAR_PALETTE = ["#3B6FE8", "#F97316", "#0EA5A0", "#8B5CF6", "#DB2777"];
function avatarColor(name: string) {
  const sum = name.split("").reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  return AVATAR_PALETTE[sum % AVATAR_PALETTE.length];
}
function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function FeedbackCard({ type, quote, attribution, avatarUrl }: FeedbackCardProps) {
  const isPartner = type === "Hiring Partner Feedback";

  return (
    <div className="bg-white rounded-2xl shadow-md p-7 flex flex-col gap-4 relative overflow-visible border border-gray-100">
      {/* Quote badge */}
      <div className="absolute -top-4 left-6 w-10 h-10 bg-[#3B6FE8] rounded-tl-2xl rounded-br-2xl flex items-center justify-center">
        <svg className="w-5 h-5 text-white fill-white" viewBox="0 0 24 24">
          <path d="M7.17 17c.51 0 .98-.29 1.2-.74l1.42-2.84c.19-.38.21-.62.21-.78V9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h2l-1.03 2.06c-.45.89.2 1.94 1.2 1.94zm10 0c.51 0 .98-.29 1.2-.74l1.42-2.84c.19-.38.21-.62.21-.78V9c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h2l-1.03 2.06c-.45.89.2 1.94 1.2 1.94z" />
        </svg>
      </div>

      {/* Avatar (real photo if provided, else initials) + type badge */}
      <div className="flex items-center gap-3 pt-3">
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt={attribution}
            className="w-11 h-11 rounded-full object-cover shrink-0 border border-gray-100"
          />
        ) : (
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-semibold shrink-0"
            style={{ backgroundColor: avatarColor(attribution) }}
          >
            {initials(attribution)}
          </div>
        )}
        <span
          className={`inline-block text-[11px] font-semibold px-3 py-1 rounded-full ${
            isPartner
              ? "bg-orange-50 text-orange-600"
              : "bg-blue-50 text-[#3B6FE8]"
          }`}
        >
          {type}
        </span>
      </div>

      {/* Quote */}
      <p className="text-[14px] text-gray-600 leading-relaxed italic">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Attribution */}
      <p className="text-xs font-semibold text-gray-400 mt-auto">— {attribution}</p>
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function MSpireSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      label: "Qualified Candidate Shortlists",
      value: 500,
      suffix: "+",
      description: "Screened and pre-evaluated CVs matching your specific job roles.",
    },
    {
      label: "Interview Management",
      value: 100,
      suffix: "+",
      description: "End-to-end interview scheduling, coordination, and feedback compilation.",
    },
    {
      label: "Tailored Hiring Strategy",
      value: 2500,
      suffix: "+",
      description: "Placed more than 2.5K+ professionals in industry in last few months.",
    },
  ];

  // Paste real photo URLs (from Pexels/Freepik, or better, actual candidates
  // and clients) into avatarUrl below. Leave it undefined to keep the
  // initials avatar as a fallback.
  const feedback: FeedbackCardProps[] = [
    {
      type: "Candidate Feedback",
      quote:
        "TalentNexa was helpful throughout the process. The communication was clear, and I received proper information about the opportunity before moving forward.",
      attribution: "Priya Sharma",
      avatarUrl: "https://images.pexels.com/photos/18477692/pexels-photo-18477692.jpeg", // e.g. "/avatars/priya.jpg"
    },
    {
      type: "Hiring Partner Feedback",
      quote:
        "The team understood our requirement and shared relevant profiles within the expected timeline. The overall coordination was professional and straightforward.",
      attribution: "Rohan Mehta",
      avatarUrl: "https://images.pexels.com/photos/10987899/pexels-photo-10987899.jpeg", // e.g. "/avatars/rohan.jpg"
    },
    {
      type: "Candidate Feedback",
      quote:
        "I appreciated the transparency during the process. I was kept informed about the opportunity and the next steps.",
      attribution: "Ananya Iyer",
      avatarUrl: "https://images.pexels.com/photos/30004323/pexels-photo-30004323.jpeg", // e.g. "/avatars/ananya.jpg"
    },
  ];

  return (
    <div className="font-sans">
      {/* ── Deliverables Section ─────────────────────────────────────────── */}
      <section className="bg-[#EEF2FB] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-start gap-10 mb-14">
            <div className="md:w-1/2">
              <div className="w-10 h-0.75 bg-orange-500 mb-4" />
              <h2 className="text-4xl font-extrabold text-gray-900">Deliverables</h2>
            </div>
            <div className="md:w-1/2">
              <p className="text-gray-600 text-[15px] leading-relaxed">
                At{" "}
                <strong className="text-gray-900">TalentNexa Consulting</strong>, we provide our clients and candidates with side-by-side career mapping, trusted guidance, and streamlined professional opportunities. We understand the importance of making confident workforce decisions and career moves, and we are here to support you at every single step.
              </p>
            </div>
          </div>

          <div ref={sectionRef} className="flex flex-col md:flex-row gap-6">
            {stats.map((s) => (
              <StatCard key={s.label} {...s} animate={animate} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Feedback Section ─────────────────────────────────────────────── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-start gap-10 mb-14">
            <div className="md:w-1/2">
              <p className="text-[#3B6FE8] font-semibold text-sm mb-1">Positive feedback</p>
              <div className="w-10 h-0.75 bg-orange-500 mb-4" />
              <h2 className="text-3xl font-extrabold text-gray-900 leading-snug">
                Honest feedback from people we have worked with.
              </h2>
            </div>
            <div className="md:w-1/2 self-center">
              <p className="text-gray-500 text-[14px] leading-relaxed">
                We value the experience of every candidate and hiring partner we work with. Their feedback helps us improve the way we communicate, understand requirements and support the recruitment process.
              </p>
            </div>
          </div>

          {/* 3 cards in a single row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
            {feedback.map((f, idx) => (
              <FeedbackCard key={idx} {...f} />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 bg-[#EEF2FB] rounded-2xl px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-extrabold text-gray-900 mb-1">
                Have you worked with us?
              </h3>
              <p className="text-gray-500 text-sm">
                We would appreciate your feedback.
              </p>
            </div>
            <a
              href="mailto:info@talentnexa.com?subject=Feedback%20for%20TalentNexa"
              className="bg-[#3B6FE8] hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-md transition-colors whitespace-nowrap inline-block text-center"
            >
              Share Your Feedback
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}