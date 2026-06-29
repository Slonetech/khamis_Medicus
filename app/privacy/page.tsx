import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Kham Medicus Care",
  description:
    "Privacy policy for Kham Medicus Care LTD — how we collect, use, and protect your personal data in compliance with the Kenya Data Protection Act 2019.",
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D2D4E] py-12" aria-label="Privacy policy hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
          <p className="mt-3 text-gray-400 text-sm">Last updated: June 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-[#FFFBF5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray">
          <p className="text-gray-600 leading-relaxed">
            Kham Medicus Care LTD (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, and safeguard your personal data when you
            use our website at khamismedicuscare.co.ke.
          </p>

          <hr className="my-8 border-gray-200" />

          <h2 className="text-2xl font-bold text-[#0D2D4E] mt-8 mb-4">1. Data We Collect</h2>
          <p className="text-gray-600 leading-relaxed mb-4">When you use our website, we may collect:</p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Your name, phone number, and message when you submit our appointment enquiry form.</li>
            <li>Preferred service and preferred date if provided.</li>
            <li>Technical data such as IP address, browser type, and pages visited (via Google Analytics, if enabled).</li>
          </ul>

          <hr className="my-8 border-gray-200" />

          <h2 className="text-2xl font-bold text-[#0D2D4E] mt-8 mb-4">2. How We Use Your Data</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>To respond to your appointment enquiry and confirm bookings.</li>
            <li>To contact you regarding your healthcare needs.</li>
            <li>To improve our website and services using aggregated, anonymised analytics data.</li>
            <li>We do <strong>not</strong> sell, rent, or share your personal data with third parties for marketing purposes.</li>
          </ul>

          <hr className="my-8 border-gray-200" />

          <h2 className="text-2xl font-bold text-[#0D2D4E] mt-8 mb-4">3. Form Submissions</h2>
          <p className="text-gray-600 leading-relaxed">
            When you submit the appointment enquiry form, your data is transmitted securely to our
            email via Resend (resend.com). Data is not stored in any database on our end. You may
            contact us at any time to request deletion of your enquiry.
          </p>

          <hr className="my-8 border-gray-200" />

          <h2 className="text-2xl font-bold text-[#0D2D4E] mt-8 mb-4">4. Google Analytics &amp; Cookies</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We may use Google Analytics to understand how visitors use our website. Google Analytics
            uses cookies — small text files stored on your device — to collect anonymous usage data.
            No personally identifiable information is included in this data.
          </p>
          <p className="text-gray-600 leading-relaxed">
            You can opt out of Google Analytics tracking by installing the{" "}
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[#0E7490] hover:underline">
              Google Analytics Opt-out Browser Add-on
            </a>.
          </p>

          <hr className="my-8 border-gray-200" />

          <h2 className="text-2xl font-bold text-[#0D2D4E] mt-8 mb-4">5. Your Rights (Kenya Data Protection Act 2019)</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Under the Kenya Data Protection Act 2019, you have the right to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Access the personal data we hold about you.</li>
            <li>Request correction of inaccurate data.</li>
            <li>Request deletion of your personal data.</li>
            <li>Object to or restrict processing of your personal data.</li>
            <li>Lodge a complaint with the Office of the Data Protection Commissioner (ODPC) of Kenya.</li>
          </ul>

          <hr className="my-8 border-gray-200" />

          <h2 className="text-2xl font-bold text-[#0D2D4E] mt-8 mb-4">6. Contact for Data Queries</h2>
          <p className="text-gray-600 leading-relaxed">
            For any privacy or data-related queries, contact us at:
          </p>
          <ul className="list-none mt-3 text-gray-600 space-y-1">
            <li>
              Email:{" "}
              <a href="mailto:khamedicus@gmail.com" className="text-[#0E7490] hover:underline">
                khamedicus@gmail.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a href="tel:+254114461958" className="text-[#0E7490] hover:underline">
                0114 461 958
              </a>
            </li>
            <li>Address: Komarock Plaza, Spine Road, Nairobi North, Kenya</li>
          </ul>

          <hr className="my-8 border-gray-200" />

          <p className="text-sm text-gray-400">
            This policy was last reviewed in June 2026. We reserve the right to update this policy
            at any time. Please check back periodically.
          </p>

          <div className="mt-8">
            <Link href="/" className="text-[#0E7490] font-medium hover:underline text-sm">← Return to Home</Link>
          </div>
        </div>
      </section>
    </>
  );
}
