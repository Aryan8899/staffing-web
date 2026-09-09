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
            To be a trusted recruitment partner recognized for bridging the gap between talent and opportunity with integrity, transparency, and quality-driven placement solutions.          </p>
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
              <span className="font-extrabold text-slate-900">TalentNexa Consulting </span>
            is a specialized recruitment and talent acquisition firm dedicated to bridging the gap between organizations and qualified professionals across all experience levels, from fresh graduates to seasoned executives. Rather than focusing on volume, the firm prioritizes precision, quality, and clear communication to foster long-term professional relationships For job seekers, the agency acts as a transparent career gateway, providing opportunities to connect with top-tier hiring companies across various industries.
            </p>


            
          </div>

          {/* Right - Illustration */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img
              src="https://st4.depositphotos.com/14431644/20908/i/450/depositphotos_209083412-stock-illustration-conceptual-hand-writing-showing-why.jpg"
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