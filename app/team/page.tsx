import type { Metadata } from "next";
import StaffCard from "@/components/ui/StaffCard";

export const metadata: Metadata = {
  title: "Our Team — Kham Medicus Care",
  description:
    "Meet the Kham Medicus care team — Margaret Thatcher (Clinical Officer) and Moses Wafula (Pharmacist/Nurse). Expert healthcare professionals serving Komarock, Nairobi North.",
};

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0E7490] py-16 md:py-20" aria-label="Team hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Our Care Team</h1>
          <p className="mt-4 text-teal-100 text-lg max-w-xl mx-auto">
            Dedicated professionals committed to your health and wellbeing.
          </p>
        </div>
      </section>

      {/* Staff Cards */}
      <section className="py-16 md:py-24 bg-[#FFFBF5]" aria-labelledby="team-section-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="team-section-heading" className="sr-only">Team Members</h2>

          {/* Photography banner */}
          <div className="mb-10 bg-amber-50 border border-amber-200 rounded-lg px-6 py-4 flex items-start gap-3">
            <svg viewBox="0 0 24 24" className="w-5 h-5 mt-0.5 flex-shrink-0 stroke-amber-500 fill-none stroke-2" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <p className="text-sm text-amber-700">
              <strong>Note:</strong> Professional staff photography is being arranged and will replace these placeholders shortly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <StaffCard
              name="Margaret Thatcher"
              title="Clinical Officer"
              bio="Margaret is our lead Clinical Officer, providing comprehensive outpatient and preventive care to patients across Komarock and Nairobi North."
              large
            />
            <StaffCard
              name="Moses Wafula"
              title="Pharmacist / Nurse"
              bio="Moses leads our pharmacy and nursing services, ensuring every patient receives the right medication and care with expert guidance."
              large
            />
          </div>
        </div>
      </section>
    </>
  );
}
