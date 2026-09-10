"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { submitContactForm } from "@/api/contact";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await submitContactForm({ name, email, phone, message });
      setSuccess(true);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full bg-white py-20 px-6 md:px-16 lg:px-24 scroll-mt-[130px]">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left — info */}
        <div>
          <p className="text-blue-600 font-semibold text-sm mb-1">Get In Touch</p>
          <div className="w-14 h-0.75 bg-orange-400 rounded-full mb-5" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
            Have a hiring need or a question about our services? Send us a message and our team will get back to you shortly.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-600 text-sm">
              <Phone size={16} className="text-[#3f5fa6]" /> +91 93132 68260
            </div>
            <div className="flex items-center gap-3 text-gray-600 text-sm">
              <Mail size={16} className="text-[#3f5fa6]" /> sales@mspireventures.com
            </div>
            <div className="flex items-center gap-3 text-gray-600 text-sm">
              <MapPin size={16} className="text-[#3f5fa6]" /> India
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div className="bg-[#F5F8FC] rounded-2xl p-6 md:p-8">
          {success ? (
            <div className="flex flex-col items-center text-center py-8">
              <CheckCircle2 size={44} className="text-green-500 mb-3" />
              <h3 className="text-lg font-bold text-gray-900">Message Sent!</h3>
              <p className="text-sm text-gray-500 mt-1">
                Thanks for reaching out — we'll get back to you soon.
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="mt-6 text-sm font-semibold text-[#3f5fa6] hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              {error && (
                <div className="rounded-lg bg-red-50 px-4 py-2 text-sm text-red-700">{error}</div>
              )}

              <input
                type="text"
                placeholder="Your Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#3f5fa6]/40"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#3f5fa6]/40"
              />
              <input
                type="tel"
                placeholder="Phone Number (optional)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#3f5fa6]/40"
              />
              <textarea
                placeholder="Your Message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#3f5fa6]/40"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-[#3f5fa6] py-2.5 text-sm font-semibold text-white hover:bg-[#34508f] transition-colors disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}