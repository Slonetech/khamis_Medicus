import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — Kham Medicus Care",
  description:
    "Learn about Kham Medicus Care LTD — our story, mission, values, and KMPDC registration. Serving Komarock and Nairobi North since 2025.",
};

const MAPS_EMBED =
  "https://maps.google.com/maps?q=Komarock+Plaza+Spine+Road+Nairobi&output=embed";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0E7490] py-16 md:py-24" aria-label="About hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            About Kham Medicus
          </h1>
          <p className="mt-4 text-teal-100 text-lg max-w-2xl mx-auto">
            A clinic and pharmacy built on trust, quality, and community.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-[#FFFBF5]" aria-labelledby="story-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="story-heading" className="text-3xl font-bold text-[#0D2D4E] mb-6">
            Our Story
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed text-base mb-4">
              Founded in 2025, Kham Medicus Care LTD was established with a clear
              purpose: to bring quality, accessible healthcare to the heart of
              Komarock and Nairobi North. Situated in Komarock Plaza on Spine
              Road, our clinic and pharmacy serve a rapidly growing community
              that deserves professional medical care close to home.
            </p>
            <p className="text-gray-700 leading-relaxed text-base">
              From outpatient consultations to emergency services, antenatal
              care, immunisations, minor surgery, family planning, and a
              round-the-clock pharmacy — Kham Medicus is designed to cover the
              full spectrum of primary healthcare needs in one convenient
              location.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-[#F3F4F6]" aria-labelledby="mission-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 text-center">
            <div className="w-14 h-14 rounded-full bg-[#0E7490]/10 flex items-center justify-center mx-auto mb-6">
              <svg
                viewBox="0 0 24 24"
                className="w-7 h-7 stroke-[#0E7490] fill-none stroke-2"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v8M8 12h8" />
              </svg>
            </div>
            <h2 id="mission-heading" className="text-2xl md:text-3xl font-bold text-[#0D2D4E] mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed italic max-w-2xl mx-auto">
              &ldquo;To provide customer-centric, quality healthcare that is
              accessible to every member of our community.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-[#FFFBF5]" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="values-heading"
            className="text-3xl font-bold text-[#0D2D4E] text-center mb-10"
          >
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-[#0E7490] fill-none stroke-2" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                ),
                title: "Quality Care",
                desc: "We maintain the highest clinical standards in every consultation, procedure, and medication dispensed.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-[#0E7490] fill-none stroke-2" aria-hidden="true">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
                title: "Community Focus",
                desc: "Komarock and Nairobi North are our home. We are committed to the wellbeing of every resident in our community.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-[#0E7490] fill-none stroke-2" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                ),
                title: "Always Available",
                desc: "Healthcare doesn't keep office hours. Our clinic and pharmacy operate 24 hours a day, 7 days a week.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl shadow-sm p-8 flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#F0F9FF] flex items-center justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0D2D4E]">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KMPDC Registration */}
      <section className="py-14 bg-[#F3F4F6]" aria-labelledby="kmpdc-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-12 h-12 flex-shrink-0 rounded-full bg-[#0E7490]/10 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 stroke-[#0E7490] fill-none stroke-2"
                aria-hidden="true"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <div>
              <h2 id="kmpdc-heading" className="text-xl font-bold text-[#0D2D4E] mb-2">
                KMPDC Registration
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Kham Medicus Care LTD is registered with the Kenya Medical
                Practitioners and Dentists Council (KMPDC). Registration number
                to be displayed upon confirmation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Map */}
      <section className="py-16 bg-[#FFFBF5]" aria-labelledby="location-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="location-heading"
            className="text-3xl font-bold text-[#0D2D4E] mb-10 text-center"
          >
            Location &amp; How to Find Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-sm font-semibold text-[#0E7490] uppercase tracking-wide mb-1">Address</p>
                <p className="text-gray-700">Komarock Plaza, Spine Road, Nairobi North, Kenya</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#0E7490] uppercase tracking-wide mb-2">Opening Hours</p>
                <div className="flex flex-col gap-1 text-sm text-gray-700">
                  <div className="flex justify-between border-b border-gray-100 pb-1">
                    <span>Clinic</span>
                    <span className="font-medium text-[#0D2D4E]">24 hours, 7 days</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-1">
                    <span>Pharmacy</span>
                    <span className="font-medium text-[#0D2D4E]">24 hours, 7 days</span>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#0E7490] uppercase tracking-wide mb-1">Phone</p>
                <a href="tel:0704705709" className="text-[#0E7490] font-medium hover:underline">
                  0704 705 709
                </a>
              </div>
              <Link
                href="/contact"
                className="self-start bg-[#0D2D4E] hover:bg-[#0a2340] text-white font-semibold rounded-lg px-6 py-2.5 text-sm transition-colors"
              >
                Contact Us
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm">
              <iframe
                src={MAPS_EMBED}
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kham Medicus location map"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
