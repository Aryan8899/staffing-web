"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const industries = [
  {
    title: "Marketing",
    roles: [
      "Digital Marketing",
      "Performance Marketing",
      "Social Media",
      "Brand & Product Marketing",
      "Content Marketing",
      "Sales & Marketing",
    ],
  },
  {
    title: "Finance",
    roles: [
      "Core Finance",
      "Financial Planning & Analysis (FP&A)",
      "Accounting & Reporting",
      "Financial Operations",
      "Accounts Payable & Receivable",
      "MIS & Business Finance",
    ],
  },
  {
    title: "Banking",
    roles: [
      "Retail Banking",
      "Corporate Banking",
      "Credit & Lending",
      "Risk & Compliance",
      "Banking Operations",
      "Customer Service",
    ],
  },
  {
    title: "E-Commerce",
    roles: [
      "E-Commerce Operations",
      "Marketplace Management",
      "Order Management",
      "Customer Experience",
      "Sales & Business Development",
      "Supply Chain Operations",
    ],
  },
  {
    title: "Real Estate",
    roles: [
      "Property Sales",
      "Business Development",
      "Real Estate Operations",
      "Customer Relationship Management",
      "Property Management",
    ],
  },
  {
    title: "Human Resources & Business Operations",
    roles: [
      "Talent Acquisition",
      "Recruitment",
      "HR Operations",
      "Employee Coordination",
      "Business Operations",
      "Process Management",
    ],
  },
  {
    title: "Investment Banking & Mortgage",
    roles: [
      "Investment Banking",
      "Equity Research",
      "Financial Modelling",
      "Valuation",
      "Mortgage Processing",
      "Loan Operations",
    ],
  },
  {
    title: "BPO",
    roles: [
      "Domestic BPO",
      "International BPO",
      "Customer Support",
      "Voice & Non-Voice Processes",
      "Back-Office Operations",
      "Process Management",
    ],
  },
];

function IndustryItem({ industry }: { industry: (typeof industries)[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <li className="text-slate-700">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-start justify-between gap-3 text-left cursor-pointer"
      >
        <span className="flex items-start gap-3 text-base">
          <span className="text-orange-400 font-bold text-lg leading-tight">»</span>
          {industry.title}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`w-4 h-4 mt-1 text-slate-400 shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr] mt-3" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="pl-7 space-y-2 pb-1">
            {industry.roles.map((role) => (
              <li key={role} className="flex items-start gap-2 text-sm text-slate-500">
                <span className="text-orange-300 font-bold leading-tight">–</span>
                {role}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}

export default function JobAndIndustriesSections() {
  const router = useRouter();

  // "Contact Now" scrolls to the Contact Us section on the same page.
  // If it's not on the current page yet, this pushes to home with the hash.
  const handleContactClick = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      router.push("/#contact");
    }
  };

  // "Find Jobs" always navigates to the real /jobs page.
  const handleFindJobsClick = () => {
    router.push("/jobs");
  };

  return (
    <>
      {/* Job Search & Talent Acquisition Section */}
      <section
        className="w-full relative py-24 px-6 flex flex-col items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Blue overlay */}
        <div className="absolute inset-0 bg-[#2B5BA8]/80" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="w-16 h-0.5 bg-white mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
            Job Search & Talent Acquisition
          </h2>
          <p className="text-white/80 text-base md:text-lg leading-relaxed mb-10">
            Connect with us today to explore professional solutions tailored for organizations and individuals seeking trustworthy, compliance-backed staffing or industry-focused education pathways. Contact our team now!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={handleContactClick}
              className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-8 py-3 rounded-md transition-colors"
            >
              Contact Now
            </button>
            <button
              onClick={handleFindJobsClick}
              className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-8 py-3 rounded-md transition-colors"
            >
              Find Jobs
            </button>
          </div>
        </div>
      </section>

      {/* Industries We Have Worked With Section */}
      <section className="w-full bg-white py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left - Illustration */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img
              src="https://img.magnific.com/free-vector/illustration-people-avatar-business-teamwork-concept_53876-37220.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Industries illustration"
              className="w-full max-w-sm"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://undraw.co/api/illustrations/undraw_career_progress_ivdb.svg";
              }}
            />
          </div>

          {/* Right - Text */}
          <div className="w-full md:w-1/2">
            <div className="w-14 h-0.75 bg-orange-400 rounded-full mb-5" />
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
              Industries We Have <br /> Worked With
            </h2>
            <p className="text-slate-500 text-base mb-8 leading-relaxed">
              We provide specialized end-to-end recruitment solutions and professional talent mapping across high-growth global and domestic sectors:
            </p>
            <ul className="space-y-4">
              {industries.map((industry) => (
                <IndustryItem key={industry.title} industry={industry} />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}