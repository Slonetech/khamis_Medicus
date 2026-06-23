"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Pharmacy", href: "/pharmacy" },
  { label: "Team", href: "/team" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

function MedicalCrossIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-7 h-7"
      aria-hidden="true"
    >
      <rect x="9" y="2" width="6" height="20" rx="2" fill="#0E7490" />
      <rect x="2" y="9" width="20" height="6" rx="2" fill="#0E7490" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-shadow duration-200 ${
        scrolled
          ? "backdrop-blur-sm bg-white/90 shadow-sm"
          : "bg-white/95"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" aria-label="Kham Medicus home">
            <MedicalCrossIcon />
            <span className="text-lg font-bold text-[#0D2D4E] tracking-tight">
              Kham Medicus
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-150 ${
                  pathname === link.href
                    ? "text-[#0E7490] border-b-2 border-[#0E7490] pb-0.5"
                    : "text-[#0D2D4E] hover:text-[#0E7490]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            {/* Open 24hrs indicator */}
            <div className="flex items-center gap-1.5 text-xs font-medium text-green-700">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              Open 24 hrs
            </div>

            <Link
              href="/contact#appointment-form"
              className="bg-[#0E7490] hover:bg-[#0c6479] text-white text-sm font-semibold rounded-full px-5 py-2 transition-colors duration-150"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <div className="flex items-center gap-1 text-xs font-medium text-green-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span>Open 24 hrs</span>
            </div>
            <button
              onClick={() => setMobileOpen((o) => !o)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="p-2 rounded-lg text-[#0D2D4E] hover:bg-gray-100 transition-colors"
            >
              {mobileOpen ? (
                <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-current fill-none stroke-2" aria-hidden="true">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-current fill-none stroke-2" aria-hidden="true">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-white border-t border-gray-100`}
        aria-hidden={!mobileOpen}
      >
        <nav className="px-4 py-3 flex flex-col gap-1" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "bg-[#EFF9FC] text-[#0E7490]"
                  : "text-[#0D2D4E] hover:bg-gray-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact#appointment-form"
            className="mt-2 bg-[#0E7490] text-white text-sm font-semibold rounded-full px-5 py-2.5 text-center transition-colors hover:bg-[#0c6479]"
          >
            Book Appointment
          </Link>
        </nav>
      </div>
    </header>
  );
}
