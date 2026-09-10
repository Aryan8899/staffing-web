"use client";

import { useState } from "react";
import { subscribeEmail } from "@/api/subscribe";

export default function SubscribeSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = async () => {
    if (!email.trim()) return;
    setError("");
    setLoading(true);
    try {
      await subscribeEmail(email.trim());
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full py-24 px-6 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-[#2B5CE6] opacity-75" />

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center text-center gap-6">
        <div className="w-16 h-0.5 bg-white opacity-60" />

        <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-snug">
          Subscribe for Job Market Updates!
        </h2>

        <p className="text-white/80 text-[15px] leading-relaxed max-w-lg">
          Our newsletter brings you the latest workforce insights, career trends, and exclusive training programs to keep you informed and inspired.
        </p>

        {error && (
          <p className="text-sm bg-white/90 text-red-600 px-4 py-2 rounded-md">{error}</p>
        )}

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
          placeholder="Email Address"
          className="w-full max-w-xl px-5 py-3.5 rounded-md text-gray-700 text-[14px] outline-none bg-white placeholder-gray-400 shadow-sm"
        />

        <button
          onClick={handleSubscribe}
          disabled={loading}
          className="px-10 py-3 bg-orange-500 hover:bg-orange-600 transition-colors text-white font-bold rounded-md text-[15px] shadow-md disabled:opacity-50"
        >
          {loading ? "Subscribing..." : submitted ? "Subscribed ✓" : "Subscribe"}
        </button>
      </div>
    </section>
  );
}