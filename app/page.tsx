import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/data/services";
import ServiceCard from "@/components/ui/ServiceCard";
import StaffCard from "@/components/ui/StaffCard";

export const metadata: Metadata = {
  title: "Kham Medicus Care — Clinic & 24-Hour Pharmacy, Komarock Nairobi",
  description:
    "Kham Medicus Care — your trusted clinic and 24-hour pharmacy in Komarock Plaza, Spine Road, Nairobi North. Emergency services, outpatient, antenatal, and family planning.",
};

const MAPS_EMBED =
  "https://maps.google.com/maps?q=Komarock+Plaza+Spine+Road+Nairobi&output=embed";
const MAPS_DIRECTIONS =
  "https://maps.google.com/?q=Komarock+Plaza+Spine+Road+Nairobi";
const WA_URL =
  "https://wa.me/254114461958?text=Hello%20Kham%20Medicus%2C%20I%20would%20like%20to%20enquire%20about%20your%20services";

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="relative bg-[#0D2D4E] overflow-hidden"
        aria-label="Hero"
      >
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(14,116,144,0.35) 0%, rgba(13,45,78,0) 60%)",
          }}
          aria-hidden="true"
        />
        {/* Decorative circles */}
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10 pointer-events-none"
          style={{ background: "#0E7490" }}
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full opacity-5 pointer-events-none"
          style={{ background: "#0E7490" }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">
              Your Health, Our Priority —{" "}
              <span className="text-[#0E7490]">24 Hours a Day</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-xl">
              Kham Medicus Care — clinic and pharmacy serving Komarock and
              Nairobi North. Expert care, every hour of every day.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact#appointment-form"
                id="hero-book-appointment"
                className="inline-flex items-center gap-2 bg-[#0E7490] hover:bg-[#0c6479] text-white font-semibold rounded-full px-7 py-3 transition-colors duration-150 shadow-lg"
              >
                Book Appointment
              </Link>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp"
                className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white/10 font-semibold rounded-full px-7 py-3 transition-colors duration-150"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-white"
                  aria-hidden="true"
                >
                  <path d="M12.002 2C6.477 2 2 6.477 2 12c0 1.765.473 3.48 1.373 4.99L2 22l5.178-1.354A9.958 9.958 0 0 0 12.002 22C17.525 22 17.523 22 22 12c0-5.522-4.475-10-9.998-10Zm0 18.15a8.125 8.125 0 0 1-4.146-1.133l-.297-.177-3.052.801.816-2.976-.193-.308A8.128 8.128 0 0 1 3.851 12c0-4.49 3.654-8.15 8.151-8.15 4.495 0 8.148 3.66 8.148 8.15 0 4.494-3.653 8.15-8.148 8.15Zm4.47-6.1c-.245-.123-1.45-.715-1.675-.797-.225-.082-.389-.122-.552.122-.163.245-.633.797-.776.958-.143.163-.204.184-.45.061-.245-.123-1.034-.381-1.97-1.215-.729-.65-1.22-1.452-1.364-1.697-.143-.245-.015-.377.107-.499.11-.11.245-.285.368-.429.122-.143.163-.245.245-.409.082-.164.04-.306-.02-.43-.062-.122-.552-1.328-.757-1.818-.198-.476-.4-.412-.552-.42-.143-.006-.306-.009-.47-.009s-.429.061-.653.306c-.224.245-.858.839-.858 2.044s.878 2.37 1 2.534c.123.163 1.729 2.638 4.19 3.699.585.253 1.042.402 1.398.516.588.187 1.122.16 1.545.097.47-.07 1.45-.593 1.654-1.165.204-.572.204-1.063.143-1.165-.061-.103-.224-.164-.47-.286Z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            {/* Badges */}
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-4 py-2 rounded-full shadow">
                ✓ Pharmacy Open 24 Hours
              </span>
              <span className="inline-flex items-center gap-2 bg-[#DC2626] text-white text-sm font-semibold px-4 py-2 rounded-full shadow">
                ⚡ Emergency Services Available
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ────────────────────────────── */}
      <section
        className="py-16 md:py-24 bg-[#FFFBF5]"
        aria-labelledby="services-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              id="services-heading"
              className="text-3xl md:text-4xl font-bold text-[#0D2D4E]"
            >
              What We Treat
            </h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">
              Comprehensive healthcare services from outpatient consultations to
              emergency care and 24-hour pharmacy.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* ── EMERGENCY BAND ───────────────────────────────── */}
      <section
        className="bg-[#DC2626] py-14"
        aria-labelledby="emergency-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="emergency-heading"
            className="text-3xl md:text-4xl font-bold text-white"
          >
            Emergency? We&apos;re Here.
          </h2>
          <p className="mt-4 text-red-100 text-lg max-w-xl mx-auto">
            Kham Medicus provides emergency services around the clock. Walk in
            or call us directly.
          </p>
          <a
            href="tel:+254114461958"
            id="emergency-call-btn"
            className="mt-8 inline-flex items-center gap-3 bg-white text-[#DC2626] font-bold rounded-full px-8 py-4 text-xl hover:bg-red-50 transition-colors shadow-lg"
            aria-label="Call 0114 461 958 for emergencies"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-none stroke-[#DC2626] stroke-2"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            0114 461 958
          </a>
        </div>
      </section>

      {/* ── STAFF PREVIEW ────────────────────────────────── */}
      <section
        className="py-16 md:py-24 bg-[#F3F4F6]"
        aria-labelledby="team-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              id="team-heading"
              className="text-3xl md:text-4xl font-bold text-[#0D2D4E]"
            >
              Meet Your Care Team
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <StaffCard
              name="Margaret Thatcher"
              title="Clinical Officer"
              bio=""
            />
            <StaffCard
              name="Moses Wafula"
              title="Pharmacist / Nurse"
              bio=""
            />
          </div>
          <p className="mt-6 text-center text-xs text-gray-400">
            Professional photography coming soon.
          </p>
        </div>
      </section>

      {/* ── 24HR PHARMACY ────────────────────────────────── */}
      <section
        className="py-16 md:py-24 bg-[#FFFBF5]"
        aria-labelledby="pharmacy-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Image placeholder */}
            <div className="rounded-2xl bg-gradient-to-br from-[#0E7490]/10 to-[#0D2D4E]/10 aspect-[4/3] flex items-center justify-center">
              <div className="text-center p-8">
                <svg
                  viewBox="0 0 24 24"
                  className="w-20 h-20 mx-auto stroke-[#0E7490] fill-none stroke-1"
                  aria-hidden="true"
                >
                  <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18" />
                </svg>
                <p className="mt-4 text-sm text-gray-400">Pharmacy imagery coming soon</p>
              </div>
            </div>
            {/* Right: Content */}
            <div className="flex flex-col gap-5">
              <span className="inline-flex self-start items-center gap-2 bg-[#0E7490] text-white text-sm font-bold px-4 py-2 rounded-full">
                Open 24 Hours
              </span>
              <h2
                id="pharmacy-heading"
                className="text-3xl md:text-4xl font-bold text-[#0D2D4E] leading-tight"
              >
                The Pharmacy That Never Closes
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Need medication at 2am? We&apos;ve got you. Kham Medicus pharmacy
                stocks OTC and prescription medications and is open every hour
                of every day.
              </p>
              <Link
                href="/pharmacy"
                className="self-start text-[#0E7490] font-semibold hover:underline"
              >
                Visit Our Pharmacy Page →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FIND US (MAP) ────────────────────────────────── */}
      <section
        className="py-16 md:py-24 bg-[#F3F4F6]"
        aria-labelledby="map-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="map-heading"
            className="text-3xl md:text-4xl font-bold text-[#0D2D4E] text-center mb-10"
          >
            Find Us
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-sm">
            <iframe
              src={MAPS_EMBED}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kham Medicus location — Komarock Plaza, Spine Road, Nairobi"
            />
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-[#0D2D4E]">
                Komarock Plaza, Spine Road, Nairobi North
              </p>
              <a
                href="tel:+254114461958"
                className="text-[#0E7490] text-sm font-medium hover:underline"
              >
                0114 461 958
              </a>
            </div>
            <a
              href={MAPS_DIRECTIONS}
              target="_blank"
              rel="noopener noreferrer"
              id="get-directions-btn"
              className="bg-[#0D2D4E] hover:bg-[#0a2340] text-white font-semibold rounded-lg px-6 py-2.5 text-sm transition-colors"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
