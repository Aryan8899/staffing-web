"use client";

export default function NewSection() {
  return (
    <>
      {/* Our Vision Section */}
      <section className="w-full flex flex-col md:flex-row h-auto md:h-105">
        {/* Left - Image */}
        <div className="w-full md:w-1/2 h-64 md:h-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop"
            alt="Team meeting"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right - Blue Content */}
        <div className="w-full md:w-1/2 bg-[#3B72B8] flex flex-col justify-center px-12 py-14">
          <div className="w-12 h-0.5 bg-white mb-5" />
          <h2 className="text-4xl font-extrabold text-white mb-5">Our Vision</h2>
          <p className="text-white/85 text-base leading-relaxed">
            To transform lives and businesses by seamlessly bridging the gap between industry requirements and career aspirations. We envision a globally connected ecosystem where tier-2 and tier-3 talent gains equal access to premium opportunities, and leading corporations get transparent, highly competent workforce solutions built entirely on integrity.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full bg-white py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left - Text */}
          <div className="w-full md:w-1/2">
            <div className="w-14 h-0.75 bg-orange-400 rounded-full mb-5" />
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Why Choose Us?</h2>
            <p className="text-slate-600 text-base leading-relaxed">
              <span className="font-extrabold text-slate-900">Talenvora Global </span>
              stands out as a trusted staffing and education partner by delivering compliance-first solutions built on absolute transparency. Unlike conventional agencies, we never charge candidates for job placements. Our strength lies in our verified documentation processes, deep industry-focused professional certifications (like Investment Banking and Financial Modelling), and structured academic collaborations that empower individuals and give businesses a reliable, highly qualified edge.
            </p>
          </div>

          {/* Right - Illustration */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img
              src="https://illustrations.popsy.co/blue/remote-work.svg"
              alt="Why choose us illustration"
              className="w-full max-w-md"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://undraw.co/api/illustrations/undraw_team_work_re_84jb.svg";
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}