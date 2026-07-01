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

// ─── Star Rating ─────────────────────────────────────────────────────────────
function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118L10 14.347l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.624 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
        </svg>
      ))}
    </div>
  );
}

// ─── Testimonial Card ─────────────────────────────────────────────────────────
interface TestimonialCardProps {
  name: string;
  review: string;
  avatarUrl: string;
}

function TestimonialCard({ name, review, avatarUrl }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4 relative overflow-visible">
      {/* Quote badge */}
      <div className="absolute -top-4 right-4 w-10 h-10 bg-[#3B6FE8] rounded-tl-2xl rounded-br-2xl flex items-center justify-center">
        <svg className="w-5 h-5 text-white fill-white" viewBox="0 0 24 24">
          <path d="M7.17 17c.51 0 .98-.29 1.2-.74l1.42-2.84c.19-.38.21-.62.21-.78V9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h2l-1.03 2.06c-.45.89.2 1.94 1.2 1.94zm10 0c.51 0 .98-.29 1.2-.74l1.42-2.84c.19-.38.21-.62.21-.78V9c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h2l-1.03 2.06c-.45.89.2 1.94 1.2 1.94z" />
        </svg>
      </div>

      {/* Avatar + name */}
      <div className="flex flex-col items-center gap-2 pt-2">
        <div className="w-14 h-14 rounded-full border-2 border-[#3B6FE8] overflow-hidden">
          <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="text-center">
          <p className="font-bold text-[#3B6FE8] text-sm">{name}</p>
          <p className="text-xs text-gray-400">Customer</p>
        </div>
        <Stars />
      </div>

      {/* Review */}
      <p className="text-[13px] text-gray-500 text-center leading-relaxed">{review}</p>
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
      label: "Verified Applications",
      value: 75000,
      suffix: "+",
      description: "Received 75,000+ approximate applications in last few months from across India.",
    },
    {
      label: "Empanelled Partners",
      value: 50,
      suffix: "+",
      description: "Total 50+ active clients acquired in last few months from multiple industries.",
    },
    {
      label: "Pathways Created",
      value: 2500,
      suffix: "+",
      description: "Placed more than 2.5K+ professionals in industry in last few months.",
    },
  ];

  // 3 cards with random photos from randomuser.me
  const testimonials = [
    {
      name: "Paliwal Kirti",
      avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
      review:
        "I've had a fantastic experience working with the Talenvora Global team. Their verified documentation process is thorough, and their recruiters are incredibly professional, helpful, and transparent throughout the hiring cycle",
    },
    {
      name: "Hiren Patel",
      avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
      review:
        "The professional certification program was highly practical. Talenvora's financial modeling and advanced training directly enhanced my skill set. I received excellent placement support completely free of charge!",
    },
    {
      name: "Jigneshsinh Solanki",
      avatarUrl: "https://randomuser.me/api/portraits/men/76.jpg",
      review:
        "Thanks to Talenvora Global, I transitioned into a premium BFSI role. Their ethical framework means they never charge a single rupee to candidates. A genuinely supportive and transparent organization.",
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
                <strong className="text-gray-900">Talenvora Global</strong>, we provide our clients and candidates with side-by-side career mapping, trusted guidance, and streamlined professional opportunities. We understand the importance of making confident workforce decisions and career moves, and we are here to support you at every single step.
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

      {/* ── Testimonials Section ─────────────────────────────────────────── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-start gap-10 mb-14">
            <div className="md:w-1/2">
              <p className="text-[#3B6FE8] font-semibold text-sm mb-1">Positive feedback</p>
              <div className="w-10 h-0.75 bg-orange-500 mb-4" />
              <h2 className="text-3xl font-extrabold text-gray-900 leading-snug">
                See What Our Customer's Saying
              </h2>
            </div>
            <div className="md:w-1/2 self-center">
              <p className="text-gray-500 text-[14px] leading-relaxed">
                As a trusted staffing and professional education provider, Talenvora Global consistently delivers customized talent solutions and ethical placement pathways. Our unwavering commitment to zero-fee structures for candidates and absolute transparency drives our continuous pursuit of excellence.
              </p>
            </div>
          </div>

          {/* 3 cards in a single row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}