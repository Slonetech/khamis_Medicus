import Link from "next/link";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pharmacy", href: "/pharmacy" },
  { label: "Our Team", href: "/team" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
];

function SocialIcon({ label }: { label: string }) {
  return (
    <span className="group relative inline-block">
      <button
        aria-label={`${label} — coming soon`}
        className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-400 cursor-default"
      >
        {label === "Facebook" && (
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        )}
        {label === "Instagram" && (
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
          </svg>
        )}
        {label === "TikTok" && (
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34l-.01-8.39a8.16 8.16 0 0 0 4.77 1.52V5.01a4.85 4.85 0 0 1-1-.32z" />
          </svg>
        )}
      </button>
      {/* Tooltip */}
      <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-white/10 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        Coming soon
      </span>
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0D2D4E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1: Logo + tagline + address */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="w-7 h-7" aria-hidden="true">
              <rect x="9" y="2" width="6" height="20" rx="2" fill="#0E7490" />
              <rect x="2" y="9" width="20" height="6" rx="2" fill="#0E7490" />
            </svg>
            <span className="text-lg font-bold tracking-tight">Kham Medicus</span>
          </div>
          <p className="text-sm text-gray-300 italic">Quality care, close to home.</p>
          <address className="not-italic text-sm text-gray-400 leading-relaxed">
            Komarock Plaza, Spine Road<br />
            Nairobi North, Kenya
          </address>
        </div>

        {/* Column 2: Quick links */}
        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-[#0E7490] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact + socials */}
        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-4">Contact</h3>
          <ul className="flex flex-col gap-3 text-sm text-gray-400">
            <li>
              <span className="block text-xs text-gray-500 uppercase tracking-wide mb-0.5">Phone</span>
              <a href="tel:0704705709" className="hover:text-white transition-colors font-medium">
                0704 705 709
              </a>
            </li>
            <li>
              <span className="block text-xs text-gray-500 uppercase tracking-wide mb-0.5">WhatsApp</span>
              <a
                href="https://wa.me/254704706709"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#25D366] transition-colors font-medium"
              >
                0704 706 709
              </a>
            </li>
            <li>
              <span className="block text-xs text-gray-500 uppercase tracking-wide mb-0.5">Email</span>
              <a
                href="mailto:khamedicus@gmail.com"
                className="hover:text-white transition-colors font-medium break-all"
              >
                khamedicus@gmail.com
              </a>
            </li>
          </ul>

          {/* Social icons */}
          <div className="mt-6">
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-3">Follow Us</p>
            <div className="flex items-center gap-2">
              <SocialIcon label="Facebook" />
              <SocialIcon label="Instagram" />
              <SocialIcon label="TikTok" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Kham Medicus Care LTD. All rights reserved.</p>
          <Link href="/privacy" className="hover:text-gray-300 transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
