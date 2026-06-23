import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us — Kham Medicus Care",
  description:
    "Book an appointment or contact Kham Medicus Care. Call 0704 705 709, WhatsApp 0704 706 709, or fill in our appointment form. Komarock Plaza, Spine Road, Nairobi North.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D2D4E] py-14 md:py-20" aria-label="Contact hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Contact Us</h1>
          <p className="mt-4 text-gray-300 text-lg max-w-xl mx-auto">
            We&apos;re here 24 hours a day. Book an appointment, enquire about our services, or simply say hello.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 md:py-24 bg-[#FFFBF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactPageClient />
        </div>
      </section>
    </>
  );
}
