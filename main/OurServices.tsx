"use client";

import { useState } from "react";

const services = [
  {
    id: 1,
    title: "Recruitment Solutions",
    description: "MSpire streamlines the recruitment process through outsourcing, ensuring efficient and effective hiring.",
    image: "https://mspireventures.com/wp-content/uploads/2023/06/erherthrtht.png",
  },
  {
    id: 2,
    title: "Payroll & Compliances",
    description: "MSpire offers staffing outsourcing solutions, optimizing workforce management for organizations.",
    image: "https://mspireventures.com/wp-content/uploads/2023/06/new-2.png",
  },
  {
    id: 3,
    title: "Training & Development",
    description: "MSpire specializes in permanent recruitment, finding the right talent for long-term growth.",
    image: "https://mspireventures.com/wp-content/uploads/2023/06/new-3.png",
  },
  {
    id: 4,
    title: "HR Core Services",
    description: "MSpire excels in contract recruitment, providing skilled professionals efficiently.",
    image: "https://mspireventures.com/wp-content/uploads/2023/06/new-4.png",
  },
  {
    id: 5,
    title: "Resume Building",
    description: "MSpire promotes diversity hiring, fostering inclusive and representative workforces.",
    image: "https://mspireventures.com/wp-content/uploads/2023/06/new-5.png",
  },
];

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`bg-white rounded-2xl border border-gray-200 flex flex-col items-center text-center p-6 cursor-pointer transition-all duration-300 ${
        hovered ? "shadow-lg -translate-y-1 border-blue-100" : "shadow-sm"
      }`}
    >
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-44 object-contain mb-5"
      />
      <h3 className="text-base font-bold text-gray-900 mb-2">{service.title}</h3>
      <p style={{ color: "#6B7280", fontSize: "13px", lineHeight: "1.6", marginBottom: "20px", fontWeight: 400, fontStyle: "normal" }}>{service.description}</p>
      <button
        className={`px-7 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-200 ${
          hovered ? "bg-blue-700 shadow-md" : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        Read More
      </button>
    </div>
  );
}

export default function OurServices() {
  const topRow = services.slice(0, 3);
  const bottomRow = services.slice(3);

  return (
<section className="w-full bg-[#E8EEF7] pt-8 pb-12 px-6 md:px-10 lg:px-16">
      {/* Header */}
   {/* Header */}
<div className="mb-8 relative">
  <p className="text-blue-600 font-semibold text-sm tracking-wide mb-1">We Provide</p>
  <div className="w-14 h-0.5 bg-orange-400 mb-2" />
  <h2 className="text-3xl font-extrabold text-gray-900 leading-tight">Our Services</h2>
 
</div>
      {/* Top row — 3 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
        {topRow.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      {/* Bottom row — 2 cards centered */}
      <div className="flex flex-col sm:flex-row gap-5 justify-center">
        {bottomRow.map((service) => (
          <div key={service.id} className="w-full lg:w-[calc(33.333%-10px)]">
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </section>
  );
}