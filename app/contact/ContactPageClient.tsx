"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { SERVICES } from "@/lib/data/services";

const MAPS_EMBED = "https://maps.google.com/maps?q=Komarock+Plaza+Spine+Road+Nairobi&output=embed";
const MAPS_DIRECTIONS = "https://maps.google.com/?q=Komarock+Plaza+Spine+Road+Nairobi";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactPageClient() {
  const [state, setState] = useState<FormState>("idle");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, service, date, message }),
      });
      const data = await res.json();
      if (data.success) {
        setState("success");
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  const inputClass =
    "w-full min-h-[44px] rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#0E7490] focus:ring-2 focus:ring-[#0E7490]/20 transition-colors";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* LEFT: Contact Details */}
      <div className="flex flex-col gap-8">
        <div>
          <h2 className="text-2xl font-bold text-[#0D2D4E] mb-6">Contact Details</h2>

          <div className="flex flex-col gap-5">
            {/* Phone */}
            <div>
              <p className="text-xs font-semibold text-[#0E7490] uppercase tracking-wide mb-1">Primary Phone</p>
              <a href="tel:0704705709" className="text-2xl font-bold text-[#0D2D4E] hover:text-[#0E7490] transition-colors">0704 705 709</a>
            </div>
            {/* WhatsApp */}
            <div>
              <p className="text-xs font-semibold text-[#0E7490] uppercase tracking-wide mb-1">WhatsApp</p>
              <a href="https://wa.me/254704706709" target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-[#25D366] hover:underline">0704 706 709</a>
            </div>
            {/* Email */}
            <div>
              <p className="text-xs font-semibold text-[#0E7490] uppercase tracking-wide mb-1">Email</p>
              <a href="mailto:khamedicus@gmail.com" className="text-base text-[#0D2D4E] hover:text-[#0E7490] transition-colors font-medium">khamedicus@gmail.com</a>
            </div>
            {/* Address */}
            <div>
              <p className="text-xs font-semibold text-[#0E7490] uppercase tracking-wide mb-1">Address</p>
              <p className="text-gray-700 text-sm">Komarock Plaza, Spine Road, Nairobi North, Kenya</p>
            </div>
            {/* Hours */}
            <div>
              <p className="text-xs font-semibold text-[#0E7490] uppercase tracking-wide mb-2">Opening Hours</p>
              <div className="flex flex-col gap-1 text-sm">
                <div className="flex justify-between border-b border-gray-100 pb-1">
                  <span className="text-gray-600">Clinic</span>
                  <span className="font-medium text-[#0D2D4E]">24 hours, 7 days</span>
                </div>
                <div className="flex justify-between pb-1">
                  <span className="text-gray-600">Pharmacy</span>
                  <span className="font-medium text-[#0D2D4E]">24 hours, 7 days</span>
                </div>
              </div>
            </div>
            {/* Open indicator */}
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-sm font-semibold text-green-700">Open Now — 24 hours</span>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="rounded-2xl overflow-hidden shadow-sm">
          <iframe
            src={MAPS_EMBED}
            width="100%"
            height="280"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Kham Medicus location"
          />
        </div>
        <a
          href={MAPS_DIRECTIONS}
          target="_blank"
          rel="noopener noreferrer"
          className="self-start bg-[#0D2D4E] hover:bg-[#0a2340] text-white font-semibold rounded-lg px-6 py-2.5 text-sm transition-colors"
        >
          Get Directions
        </a>
      </div>

      {/* RIGHT: Appointment Form */}
      <div id="appointment-form" className="bg-white rounded-2xl shadow-sm p-8">
        <h2 className="text-2xl font-bold text-[#0D2D4E] mb-2">Book an Appointment</h2>
        <p className="text-sm text-gray-500 mb-7">Fill in the form and we will confirm within 2 hours.</p>

        {state === "success" ? (
          <div className="flex flex-col items-center gap-4 py-12 text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-8 h-8 stroke-green-600 fill-none stroke-2" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#0D2D4E]">Enquiry Sent!</h3>
            <p className="text-gray-600">
              Thank you, <strong>{name}</strong>. We will contact you within 2 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
              <input id="contact-name" type="text" required placeholder="Your full name" value={name} onChange={(e) => setName(e.target.value)} className={inputClass} />
            </div>
            <div>
              <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number *</label>
              <input id="contact-phone" type="tel" required placeholder="e.g. 0712 345 678" value={phone} onChange={(e) => setPhone(e.target.value)} className={inputClass} />
            </div>
            <div>
              <label htmlFor="contact-service" className="block text-sm font-medium text-gray-700 mb-1.5">Preferred Service *</label>
              <select id="contact-service" required value={service} onChange={(e) => setService(e.target.value)} className={inputClass}>
                <option value="">Select a service</option>
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.name}>{s.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="contact-date" className="block text-sm font-medium text-gray-700 mb-1.5">Preferred Date</label>
              <input id="contact-date" type="date" value={date} onChange={(e) => setDate(e.target.value)} className={inputClass} />
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
              <textarea id="contact-message" rows={4} placeholder="Any additional details..." value={message} onChange={(e) => setMessage(e.target.value)} className={`${inputClass} min-h-[100px] resize-none`} />
            </div>

            {state === "error" && (
              <p className="text-sm text-[#DC2626] bg-red-50 rounded-lg px-4 py-3">
                Something went wrong. Please call us on{" "}
                <a href="tel:0704705709" className="font-semibold underline">0704 705 709</a>.
              </p>
            )}

            <button
              type="submit"
              disabled={state === "loading"}
              id="submit-enquiry-btn"
              className="w-full bg-[#0E7490] hover:bg-[#0c6479] disabled:opacity-60 text-white font-semibold rounded-full py-3 text-sm transition-colors"
            >
              {state === "loading" ? "Sending…" : "Send Enquiry"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
