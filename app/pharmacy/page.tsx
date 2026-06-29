import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "24-Hour Pharmacy — Kham Medicus Care",
  description:
    "Kham Medicus pharmacy is open 24 hours, 7 days a week. OTC and prescription medications. No appointment needed. Komarock Plaza, Nairobi North.",
};

const WA_PHARMACY =
  "https://wa.me/254114461958?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20a%20prescription%20at%20Kham%20Medicus%20Pharmacy.";

const CATEGORIES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 stroke-[#0E7490] fill-none stroke-2" aria-hidden="true">
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18" />
      </svg>
    ),
    title: "Prescription Medications",
    desc: "Dispensed by our qualified pharmacist with expert counselling.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 stroke-[#0E7490] fill-none stroke-2" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "OTC & Wellness",
    desc: "Over-the-counter medicines, vitamins, supplements, and personal care.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 stroke-[#0E7490] fill-none stroke-2" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Family & Baby",
    desc: "Baby care essentials, maternal health products, and family wellness supplies.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 stroke-[#0E7490] fill-none stroke-2" aria-hidden="true">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Emergency Supplies",
    desc: "First-aid, emergency medication, and critical health supplies available around the clock.",
  },
];

export default function PharmacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D2D4E] py-20 md:py-32 relative overflow-hidden" aria-label="Pharmacy hero">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(135deg, rgba(14,116,144,0.3) 0%, transparent 60%)" }} aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-[#0E7490] text-white text-sm font-bold px-5 py-2 rounded-full mb-6">
            Open 24 Hours — Every Day
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">Kham Medicus Pharmacy</h1>
          <p className="mt-5 text-gray-300 text-lg max-w-2xl mx-auto">
            OTC and prescription medications. Walk in or enquire via WhatsApp. No appointment needed — our pharmacy is open every hour of every day.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={WA_PHARMACY} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:opacity-90 text-white font-semibold rounded-full px-7 py-3 transition-opacity shadow-lg">
              WhatsApp for a Prescription Enquiry
            </a>
            <a href="tel:+254114461958" className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white/10 font-semibold rounded-full px-7 py-3 transition-colors">
              Call 0114 461 958
            </a>
          </div>
        </div>
      </section>

      {/* Hours Block */}
      <section className="py-12 bg-[#F3F4F6]" aria-labelledby="hours-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left">
              <h2 id="hours-heading" className="text-2xl font-bold text-[#0D2D4E] mb-2">Operating Hours</h2>
              <p className="text-gray-600 text-sm mb-1">Pharmacy: <strong className="text-[#0D2D4E]">24 hours, 7 days a week</strong></p>
              <p className="text-xs text-gray-400 mt-2">Subject to change. Call <a href="tel:+254114461958" className="text-[#0E7490] hover:underline">0114 461 958</a> to confirm.</p>
            </div>
            <div className="flex items-center gap-3 bg-[#0E7490]/10 rounded-xl px-6 py-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
              </span>
              <span className="text-[#0E7490] font-bold text-lg">Open Now</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-[#FFFBF5]" aria-labelledby="categories-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="categories-heading" className="text-3xl font-bold text-[#0D2D4E] text-center mb-10">What We Stock</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((cat) => (
              <div key={cat.title} className="bg-white rounded-2xl shadow-sm p-7 flex flex-col gap-4 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-[#F0F9FF] flex items-center justify-center">{cat.icon}</div>
                <h3 className="text-lg font-bold text-[#0D2D4E]">{cat.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & CTA */}
      <section className="py-16 bg-[#F3F4F6]" aria-labelledby="pharmacy-contact-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="pharmacy-contact-heading" className="text-3xl font-bold text-[#0D2D4E] mb-4">Need a Medication?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">Walk in any time or contact us to confirm stock availability before your visit.</p>
          <a href={WA_PHARMACY} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:opacity-90 text-white font-semibold rounded-full px-8 py-3 text-base transition-opacity shadow-lg mb-8">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" aria-hidden="true">
              <path d="M12.002 2C6.477 2 2 6.477 2 12c0 1.765.473 3.48 1.373 4.99L2 22l5.178-1.354A9.958 9.958 0 0 0 12.002 22C17.525 22 22 17.523 22 12c0-5.522-4.475-10-9.998-10Z" />
            </svg>
            WhatsApp for a Prescription Enquiry
          </a>

          <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm text-gray-600">
            <div>
              <span className="block text-xs text-gray-400 uppercase tracking-wide mb-1">Phone</span>
              <a href="tel:+254114461958" className="font-semibold text-[#0E7490] hover:underline">0114 461 958</a>
            </div>
            <div>
              <span className="block text-xs text-gray-400 uppercase tracking-wide mb-1">WhatsApp</span>
              <a href="https://wa.me/254114461958" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#25D366] hover:underline">0114 461 958</a>
            </div>
            <div>
              <span className="block text-xs text-gray-400 uppercase tracking-wide mb-1">Email</span>
              <a href="mailto:khamedicus@gmail.com" className="font-semibold text-[#0E7490] hover:underline">khamedicus@gmail.com</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
