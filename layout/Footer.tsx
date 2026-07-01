"use client";

// ─── Chevron Icon ─────────────────────────────────────────────────────────────
function ChevronDouble() {
  return (
    <svg className="w-3.5 h-3.5 text-[#3B6FE8] shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="13 17 18 12 13 7" />
      <polyline points="6 17 11 12 6 7" />
    </svg>
  );
}

// ─── Footer Link ──────────────────────────────────────────────────────────────
// Now accepts an `id` (matching the section ids used in Header) and
// smooth-scrolls to that section instead of just being a dead "#" link.
function FooterLink({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (typeof window !== "undefined") {
      window.location.hash = id;
    }
  };

  return (
    <li>
      <a
        href={`#${id}`}
        onClick={handleClick}
        className="flex items-start gap-2 text-gray-300 hover:text-white text-[14px] transition-colors group"
      >
        <ChevronDouble />
        <span className="group-hover:text-white transition-colors">{children}</span>
      </a>
    </li>
  );
}

// ─── Social Icon ──────────────────────────────────────────────────────────────
function SocialIcon({ href = "#", children }: { href?: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="w-9 h-9 rounded-full border border-gray-600 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#3B6FE8] hover:bg-[#3B6FE8] transition-all"
    >
      {children}
    </a>
  );
}

// ─── Main Footer ──────────────────────────────────────────────────────────────
export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0d0d0d] text-white scroll-mt-32.5">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">

        {/* Brand / About */}
        <div className="lg:pr-6">
          <div className="w-10 h-0.75 bg-[#3B6FE8] mb-5" />
          <h3 className="text-lg font-bold text-white mb-4">Talenvora Global</h3>
          <p className="text-gray-400 text-[14px] leading-relaxed mb-6">
            Trusted staffing and workforce solutions, connecting exceptional talent
            with leading organizations across India and international markets.
          </p>
          <div className="flex gap-3">
            <SocialIcon>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </SocialIcon>
            <SocialIcon>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </SocialIcon>
            <SocialIcon>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
            </SocialIcon>
            <SocialIcon>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </SocialIcon>
            <SocialIcon>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
              </svg>
            </SocialIcon>
          </div>
        </div>

        {/* Quick Links — ids now match Header's section ids (home/about/services/contact) */}
        <div>
          <div className="w-10 h-0.75 bg-[#3B6FE8] mb-5" />
          <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
          <ul className="space-y-3">
            <FooterLink id="home">HOME</FooterLink>
            <FooterLink id="about">About</FooterLink>
            <FooterLink id="services">Services</FooterLink>
            <FooterLink id="contact">Contact Us</FooterLink>
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <div className="w-10 h-0.75 bg-[#3B6FE8] mb-5" />
          <h3 className="text-lg font-bold text-white mb-6">Get In Touch</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-gray-300 text-[13.5px] leading-relaxed">
              <svg className="w-4 h-4 text-[#3B6FE8] shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                <rect x="3" y="3" width="7" height="5" rx="1" />
                <rect x="3" y="10" width="7" height="2" rx="0.5" opacity="0.4" />
                <path d="M20 4H4a1 1 0 00-1 1v14a1 1 0 001 1h16a1 1 0 001-1V5a1 1 0 00-1-1zm-9 3h6v1h-6V7zm0 2h6v1h-6V9zm-4-.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM4.5 15c0-1.5 1.5-2.5 3-2.5s3 1 3 2.5H4.5zm8.5 0v-1h5v1h-5zm0-2v-1h5v1h-5z" />
              </svg>
              <span>312-Shree Balaji Paragon tower,<br />Near Axis Bank, CG ROAD,<br />Ahmedabad-380007</span>
            </li>

            <li className="flex items-center gap-3 text-gray-300 text-[13.5px]">
              <svg className="w-4 h-4 text-[#3B6FE8] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
              </svg>
              <span>+91 93132 68260</span>
            </li>

            <li className="flex items-center gap-3 text-gray-300 text-[13.5px]">
              <svg className="w-4 h-4 text-[#3B6FE8] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
              </svg>
              <span>+91 81609 91800</span>
            </li>

            <li className="flex items-center gap-3 text-gray-300 text-[13.5px]">
              <svg className="w-4 h-4 text-[#3B6FE8] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
              </svg>
              <span>+91 63525 82375</span>
            </li>

            <li className="flex items-center gap-3 text-gray-300 text-[13.5px]">
              <svg className="w-4 h-4 text-[#3B6FE8] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <span>sales@mspireventures.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-5 text-center text-gray-400 text-[13px]">
          Copyright © 2023 Talenvora Global PVT LTD. All rights reserved. Powered by TechFanatic
        </div>
      </div>
    </footer>
  );
}