import type { Metadata } from "next";
import FAQPageClient from "./FAQPageClient";

export const metadata: Metadata = {
  title: "FAQ — Kham Medicus Care",
  description:
    "Frequently asked questions about Kham Medicus Care — appointments, pharmacy, insurance, payments, location, and services.",
};

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D2D4E] py-14 md:py-20" aria-label="FAQ hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Frequently Asked Questions</h1>
          <p className="mt-4 text-gray-300 text-lg max-w-xl mx-auto">
            Find quick answers to common questions. Can&apos;t find what you need? Call or WhatsApp us.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 md:py-24 bg-[#FFFBF5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQPageClient />
        </div>
      </section>
    </>
  );
}
