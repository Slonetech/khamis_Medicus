import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Medical Services — Kham Medicus Care",
  description:
    "Outpatient, emergency, immunisation, minor surgery, antenatal, family planning, and 24-hour pharmacy at Kham Medicus Care, Komarock Nairobi.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Emergency Band */}
      <section className="bg-[#DC2626] py-12" aria-label="Emergency services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Emergency? We&apos;re Here.</h2>
          <p className="mt-3 text-red-100 max-w-xl mx-auto">Emergency services available 24 hours. Walk in or call us immediately.</p>
          <a href="tel:0704705709" className="mt-6 inline-flex items-center gap-2 bg-white text-[#DC2626] font-bold rounded-full px-7 py-3 hover:bg-red-50 transition-colors shadow">
            Call 0704 705 709
          </a>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-[#FFFBF5]" aria-labelledby="services-page-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h1 id="services-page-heading" className="text-4xl font-bold text-[#0D2D4E]">Our Medical Services</h1>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">Comprehensive primary healthcare for individuals and families in Komarock and Nairobi North.</p>
          </div>

          <div className="flex flex-col gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} id={service.id} className={`bg-white rounded-2xl shadow-sm p-8 ${service.isEmergency ? "border-l-4 border-[#DC2626]" : ""}`}>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h2 className="text-xl font-bold text-[#0D2D4E]">{service.name}</h2>
                  {service.is24hr && <span className="text-xs font-semibold bg-[#0E7490] text-white px-2.5 py-1 rounded-full">24hr</span>}
                  {service.isEmergency && <span className="text-xs font-semibold bg-[#DC2626] text-white px-2.5 py-1 rounded-full">Emergency</span>}
                </div>
                <p className="text-gray-600 leading-relaxed mb-5">{service.description}</p>
                <p className="text-sm font-semibold text-[#0D2D4E] mb-3 uppercase tracking-wide">What to Expect</p>
                <ul className="flex flex-col gap-2 mb-6">
                  {service.whatToExpect.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 mt-0.5 flex-shrink-0 stroke-[#0E7490] fill-none stroke-2" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                      {point}
                    </li>
                  ))}
                </ul>
                <Link href="/contact#appointment-form" className="inline-flex items-center gap-2 bg-[#0E7490] hover:bg-[#0c6479] text-white font-semibold rounded-full px-6 py-2.5 text-sm transition-colors">
                  Book Appointment
                </Link>
              </div>
            ))}
          </div>

          {/* Corporate CTA */}
          <div className="mt-14 bg-[#0D2D4E] rounded-2xl p-10 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Looking for Corporate or Insurance Packages?</h3>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">Contact us to discuss group health services, corporate wellness programmes, and insurance partnerships.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#0E7490] hover:bg-[#0c6479] text-white font-semibold rounded-full px-7 py-3 transition-colors">Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}
