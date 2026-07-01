"use client";

const industries = [
  "BBFSI & Investment Banking Operations (Finance, Banking, & Investment Sectors)",
  "Mortgage & Title Insurance",
  "Finance & Accounting",
  "IT Sector (Entry to Mid-Level Software & Technical Roles)",
  "Healthcare, Logistics & Supply Chain",
  "Sales, Marketing, Customer Support & BPO Operations",
];

export default function JobAndIndustriesSections() {
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
            <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-8 py-3 rounded-md transition-colors">
              Contact Now
            </button>
            <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-8 py-3 rounded-md transition-colors">
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
              src="https://illustrations.popsy.co/blue/woman-with-a-laptop.svg"
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
              {industries.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700 text-base">
                  <span className="text-orange-400 font-bold text-lg leading-tight">»</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}