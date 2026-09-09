"use client";

import { useState } from "react";


type Service = {
  id: number;
  title: string;
  description: string;
  image: string;
  fullDetails: {
    overview: string;
    features?: string[]; // 👈 optional
    note?: string;
  };
};

const services: Service[] = [{
  id: 1,
  title: "Recruitment Solutions",
  description:
    "Full-cycle hiring support—from requirement analysis, sourcing, screening, and assessment to shortlisting, interview coordination, and onboarding follow-up. Final hiring decisions rest with the client company.",
  image: "https://mspireventures.com/wp-content/uploads/2023/06/erherthrtht.png",
  fullDetails: {
    overview:
      "Finding the right candidate takes time. At TalentNexa Consulting, we help companies identify suitable candidates for their open positions. We first understand the role, required qualifications, experience and skills. Based on the requirement, we source and review candidate profiles, speak with suitable candidates, and share relevant CVs with the company.We also support the process by coordinating interviews and staying in touch with candidates and the hiring team until the recruitment process is completed. The final interview, selection and employment decision is made by the client company. Selected candidates are hired directly by the company.",




  },
},
{
  id: 2,
  title: "Talent Acquisition Support",
  description:
    "Scalable hiring assistance tailored to business needs, whether filling a single role or scaling up multiple positions.",
  image: "https://mspireventures.com/wp-content/uploads/2023/06/new-2.png",
  fullDetails: {
    overview:
      "Practical recruitment support when your hiring team needs it. Hiring can become time-consuming when a company has multiple positions to fill or needs to find candidates with specific skills. TalentNexa Consulting provides recruitment support to help businesses manage the candidate search more efficiently. We work with your hiring requirements, understand the type of person you are looking for, and help identify suitable candidates for the role. From finding profiles and reviewing CVs to shortlisting and coordinating with candidates, we can assist with the early stages of the hiring process. Our role is to make the recruitment process easier for your team while keeping the focus on finding candidates who are genuinely relevant to the position.",
    features: [
      "Understanding the job requirement",
      "Searching for suitable candidates",
      "Reviewing and screening CVs",
      "Shortlisting relevant profiles",
    ],
    note: "The final interview, selection and employment decision remains with the client company.",
  },
},
{
  id: 3,
  title: "Candidate Sourcing",
  description:
    "Multi-channel talent discovery via professional networks, job platforms, referrals, and active headhunting to find exact matches.",
  image: "https://mspireventures.com/wp-content/uploads/2023/06/new-3.png",
  fullDetails: {
    overview:
      "Good hiring starts with reaching the right people. At TalentNexa Consulting, we help businesses find candidates for their open positions through our professional network, referrals and targeted candidate outreach. We first understand what the company is looking for and then approach candidates who have a genuine connection with the role. Our aim is not to send hundreds of CVs. It is to introduce people who are worth considering.",
    // features: [
    //   "Access to premium job platforms",
    //   "Referral network of 10,000+ professionals",
    //   "Active headhunting for niche roles",
    //   "AI-assisted candidate matching",
    // ],
    // note: "Sourcing channels vary by role and location.",
  },
},
{
  id: 4,
  title: "Candidate Screening",
  description:
    "Partnering closely with leading Tier 2 and Tier 3 colleges and universities, we establish professional degree pathways aligned with modern global market requirements.",
  image: "https://mspireventures.com/wp-content/uploads/2023/06/new-4.png",
  fullDetails: {
    overview:
      "Before a candidate is introduced to a company, we take time to understand their profile. We look beyond the job title and check whether the candidate’s background, experience, skills and career expectations make sense for the particular opportunity. We also speak with candidates to understand their interest in the position and whether they are comfortable with the role’s basic requirements.This gives the employer a better starting point when reviewing candidates and helps avoid unnecessary interviews. Better profiles. Better conversations. Better hiring decisions.",
    // features: [
    //   "Resume and background verification",
    //   "Skill-based assessment tests",
    //   "Behavioral interview rounds",
    //   "Reference checks",
    // ],
    // note: "Screening criteria can be customized per role requirement.",
  },
},
{
  id: 5,
  title: "Career Opportunities",
  description:
    "Free profile registration for job seekers across industries. Note: Employment is not guaranteed; final selection rests solely with the hiring company.",
  image: "https://mspireventures.com/wp-content/uploads/2023/06/new-5.png",
  fullDetails: {
    overview:
      "Your next career move starts with the right opportunity. Whether you are starting your career or looking for a new role, TalentNexa Consulting helps connect candidates with suitable openings shared by our hiring partners. For Freshers Starting your first job can be challenging. We share relevant entry-level opportunities where your education, skills and career interests match the employer’s requirements.For Working Professionals If you are considering a change, we can connect you with openings that are relevant to your experience, skills and preferred career direction.",
    // features: [
    //   "100% free profile registration",
    //   "Visibility across multiple industries",
    //   "Profile matching with live openings",
    //   "Email alerts for relevant roles",
    // ],
    note: "Ready for your next opportunity? Share your updated CV with us and we will consider your profile for suitable openings.",
  },
},
];


function ServiceCard({
  service,
  onReadMore,
}: {
  service: Service;
  onReadMore: (service: Service) => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`bg-white rounded-2xl border border-gray-200 flex flex-col items-center text-center p-6 cursor-pointer transition-all duration-300 ${hovered ? "shadow-lg -translate-y-1 border-blue-100" : "shadow-sm"
        }`}
    >
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-44 object-contain mb-5"
      />
      <h3 className="text-base font-bold text-gray-900 mb-2">{service.title}</h3>
      <p
        style={{
          color: "#6B7280",
          fontSize: "13px",
          lineHeight: "1.6",
          marginBottom: "20px",
          fontWeight: 400,
          fontStyle: "normal",
        }}
      >
        {service.description}
      </p>
      <button
        onClick={() => onReadMore(service)}
        className={`px-7 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-200 cursor-pointer ${hovered ? "bg-blue-700 shadow-md" : "bg-blue-600 hover:bg-blue-700"
          }`}
      >
        Read More
      </button>
    </div>
  );
}

function ServiceModal({
  service,
  onClose,
}: {
  service: Service;
  onClose: () => void;
}) {
  const details = service.fullDetails ?? {
    overview: service.description,
    features: [],
    note: "",
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl max-w-lg w-full p-6 relative shadow-xl max-h-[85vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-colors"
          aria-label="Close"
        >
          ✕
        </button>

        <img
          src={service.image}
          alt={service.title}
          className="w-full h-36 object-contain mb-4"
        />
        <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
          {service.title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {details.overview}
        </p>

        {details.features && details.features.length > 0 && (<>
          <h4 className="text-sm font-semibold text-gray-900 mb-2">
            What We Support:
          </h4>
          <ul className="mb-4 space-y-2">
            {details.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-blue-600 mt-0.5">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </>
        )}

        {details.note && (
          <p className="text-xs text-gray-400 border-t border-gray-100 pt-3">
            {details.note}
          </p>
        )}
      </div>
    </div>
  );
}

export default function OurServices() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const topRow = services.slice(0, 3);
  const bottomRow = services.slice(3);

  return (
    <section
      id="services"
      className="w-full bg-[#E8EEF7] pt-8 pb-12 px-6 md:px-10 lg:px-16 scroll-mt-[130px]"
    >
      {/* Header */}
      <div className="mb-8 relative">
        <p className="text-blue-600 font-semibold text-sm tracking-wide mb-1">
          We Provide
        </p>
        <div className="w-14 h-0.5 bg-orange-400 mb-2" />
        <h2 className="text-3xl font-extrabold text-gray-900 leading-tight">
          Our Services
        </h2>
      </div>

      {/* Top row — 3 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
        {topRow.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onReadMore={setSelectedService}
          />
        ))}
      </div>

      {/* Bottom row — 2 cards centered */}
      <div className="flex flex-col sm:flex-row gap-5 justify-center">
        {bottomRow.map((service) => (
          <div key={service.id} className="w-full lg:w-[calc(33.333%-10px)]">
            <ServiceCard service={service} onReadMore={setSelectedService} />
          </div>
        ))}
      </div>

      {/* Popup */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  );
}