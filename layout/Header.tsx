"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, ChevronDown, Menu, X, LucideProps } from "lucide-react";

const FacebookIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.06 5.66 21.2 10.44 22v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.91h-2.33V22C18.34 21.2 22 17.06 22 12.06z" />
  </svg>
);

const TwitterIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 5.92c-.74.33-1.53.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.47-1.68.81-2.62 1A4.1 4.1 0 0 0 11.78 9c0 .32.04.64.1.94-3.41-.17-6.44-1.81-8.47-4.3a4.1 4.1 0 0 0-.56 2.07c0 1.43.73 2.69 1.83 3.43a4.07 4.07 0 0 1-1.86-.51v.05c0 2 1.42 3.66 3.31 4.04-.35.1-.71.15-1.09.15-.27 0-.52-.03-.78-.07.53 1.64 2.05 2.84 3.86 2.87A8.23 8.23 0 0 1 2 19.54a11.6 11.6 0 0 0 6.29 1.85c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.53.8-.58 1.5-1.3 2.04-2.26z" />
  </svg>
);

const InstagramIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.22.6 1.77 1.15.55.55.9 1.11 1.15 1.77.25.64.42 1.37.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.22 1.15-1.77a4.9 4.9 0 0 1 1.77-1.15c.64-.25 1.37-.42 2.43-.47C8.94 2.01 9.28 2 12 2zm0 1.8c-2.67 0-2.99.01-4.04.06-.87.04-1.34.18-1.65.3-.42.16-.71.35-1.02.66-.31.31-.5.6-.66 1.02-.12.31-.26.78-.3 1.65C4.28 9.01 4.27 9.33 4.27 12s.01 2.99.06 4.04c.04.87.18 1.34.3 1.65.16.42.35.71.66 1.02.31.31.6.5 1.02.66.31.12.78.26 1.65.3 1.05.05 1.37.06 4.04.06s2.99-.01 4.04-.06c.87-.04 1.34-.18 1.65-.3.42-.16.71-.35 1.02-.66.31-.31.5-.6.66-1.02.12-.31.26-.78.3-1.65.05-1.05.06-1.37.06-4.04s-.01-2.99-.06-4.04c-.04-.87-.18-1.34-.3-1.65a2.75 2.75 0 0 0-.66-1.02 2.75 2.75 0 0 0-1.02-.66c-.31-.12-.78-.26-1.65-.3C14.99 3.81 14.67 3.8 12 3.8zm0 3.05a5.15 5.15 0 1 1 0 10.3 5.15 5.15 0 0 1 0-10.3zm0 1.8a3.35 3.35 0 1 0 0 6.7 3.35 3.35 0 0 0 0-6.7zm5.34-1.99a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" />
  </svg>
);

const LinkedinIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
  </svg>
);

type IconComponent = React.FC<{ size?: number }> | React.FC<LucideProps>;

const aboutItems = ["Our Story", "Our Team", "Mission & Vision"];
const serviceItems = ["Recruitment", "HR Consulting", "Staffing"];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#", dropdown: true },
    { label: "Services", href: "#", dropdown: true },
    { label: "Clients", href: "#" },
    { label: "Blogs", href: "#" },
    { label: "Contact Us", href: "#" },
  ];

  const socials: { icon: IconComponent; href: string }[] = [
    { icon: FacebookIcon, href: "#" },
    { icon: TwitterIcon, href: "#" },
    { icon: InstagramIcon, href: "#" },
    { icon: LinkedinIcon, href: "#" },
    { icon: MapPin, href: "#" },
  ];

  return (
    <header className="w-full font-sans">
      {/* Top accent bar */}
      

      {/* Top info bar */}
      <div className="bg-[#4d7ab8] text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2.5 text-xs md:text-sm md:px-8">
          {/* Contact info */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
            <a href="tel:+919313268260" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
              <Phone size={13} className="shrink-0" />
              <span className="hidden xs:inline">Call : </span>
              <span>+91 93132 68260</span>
            </a>
            <a href="mailto:sales@mspireventures.com" className="hidden sm:flex items-center gap-1.5 hover:text-white/80 transition-colors">
              <Mail size={13} className="shrink-0" />
              <span>sales@mspireventures.com</span>
            </a>
            <a href="mailto:careers@mspireventures.com" className="hidden md:flex items-center gap-1.5 hover:text-white/80 transition-colors">
              <Mail size={13} className="shrink-0" />
              <span>careers@mspireventures.com</span>
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-1.5">
            {socials.map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="flex h-6 w-6 md:h-7 md:w-7 items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white/30"
              >
                <Icon size={13} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main nav bar */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 shrink-0">
            <span className="relative inline-flex h-10 w-10 md:h-12 md:w-12 items-center justify-center">
              <svg viewBox="0 0 48 48" className="h-10 w-10 md:h-12 md:w-12">
                <path
                  d="M24 4 C34 4 42 12 42 22 C42 30 36 36 28 38 C32 34 34 29 34 24 C34 16 28 10 20 10 C13 10 8 15 8 21 C8 27 13 31 18 31"
                  fill="none"
                  stroke="#1f3f7a"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle cx="14" cy="8" r="1.4" fill="#e8b84b" />
                <circle cx="19" cy="5" r="1" fill="#e8b84b" />
                <circle cx="10" cy="13" r="1" fill="#e8b84b" />
              </svg>
            </span>
            <span className="leading-tight">
              <span className="block text-xl md:text-2xl font-bold tracking-tight text-[#1f3f7a]">MSPIRE</span>
              <span className="-mt-1 block text-xs md:text-sm font-semibold text-gray-500">Ventures Pvt Ltd</span>
              <span className="block text-[9px] md:text-[10px] italic text-[#1f3f7a]">"Finding The Path For You"</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 xl:gap-8 lg:flex">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() =>
                  link.label === "About"
                    ? setAboutOpen(true)
                    : link.label === "Services"
                    ? setServicesOpen(true)
                    : null
                }
                onMouseLeave={() =>
                  link.label === "About"
                    ? setAboutOpen(false)
                    : link.label === "Services"
                    ? setServicesOpen(false)
                    : null
                }
              >
                <a
                  href={link.href}
                  className="flex items-center gap-1 text-[14px] xl:text-[15px] font-medium text-gray-800 transition-colors hover:text-[#1f3f7a]"
                >
                  {link.label}
                  {link.dropdown && <ChevronDown size={14} />}
                </a>

                {link.dropdown && (
                  <div
                    className={`absolute left-0 top-full z-20 mt-2 w-44 rounded-md border border-gray-100 bg-white py-2 shadow-lg transition-all duration-150 ${
                      (link.label === "About" && aboutOpen) ||
                      (link.label === "Services" && servicesOpen)
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-1 opacity-0"
                    }`}
                  >
                    {(link.label === "About" ? aboutItems : serviceItems).map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1f3f7a]"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="hidden rounded-md bg-[#3f5fa6] px-4 xl:px-6 py-2 xl:py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#34508f] sm:inline-block"
            >
              Job Seeker
            </a>
            <button
              className="text-gray-700 lg:hidden p-1"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="flex flex-col border-t border-gray-100 bg-white px-4 py-3 lg:hidden">
            {navLinks.map((link) => (
              <div key={link.label}>
                <button
                  onClick={() => {
                    if (link.label === "About") setMobileAboutOpen((o) => !o);
                    else if (link.label === "Services") setMobileServicesOpen((o) => !o);
                  }}
                  className="flex w-full items-center justify-between rounded-md px-2 py-2.5 text-[15px] font-medium text-gray-800 hover:bg-gray-50 text-left"
                >
                  <a href={link.href} onClick={(e) => link.dropdown && e.preventDefault()}>
                    {link.label}
                  </a>
                  {link.dropdown && (
                    <ChevronDown
                      size={15}
                      className={`transition-transform duration-200 ${
                        (link.label === "About" && mobileAboutOpen) ||
                        (link.label === "Services" && mobileServicesOpen)
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  )}
                </button>

                {/* Mobile dropdown */}
                {link.dropdown && (
                  <div
                    className={`overflow-hidden transition-all duration-200 ${
                      (link.label === "About" && mobileAboutOpen) ||
                      (link.label === "Services" && mobileServicesOpen)
                        ? "max-h-40 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="ml-4 border-l-2 border-[#3f5fa6]/30 pl-3 pb-1">
                      {(link.label === "About" ? aboutItems : serviceItems).map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="block py-2 text-sm text-gray-600 hover:text-[#1f3f7a]"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <a
              href="#"
              className="mt-3 rounded-md bg-[#3f5fa6] px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-[#34508f] transition-colors"
            >
              Job Seeker
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}