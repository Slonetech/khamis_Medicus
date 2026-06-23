import Link from "next/link";
import type { Service } from "@/lib/data/services";

// Teal SVG icons by service id
const ICONS: Record<string, React.ReactNode> = {
  "outpatient-consultation": (
    <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-[#0E7490] fill-none stroke-2" aria-hidden="true">
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
      <rect x="9" y="3" width="6" height="4" rx="2" />
      <path d="M9 12h6M9 16h4" />
    </svg>
  ),
  "emergency-services": (
    <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-[#DC2626] fill-none stroke-2" aria-hidden="true">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  "immunisation": (
    <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-[#0E7490] fill-none stroke-2" aria-hidden="true">
      <path d="m18.5 2.5-1 1" /><path d="m14 7 1.5-1.5" />
      <path d="m7 14-2 2" /><path d="M4.93 16.07 3 18l3 3 1.93-1.93" />
      <path d="M9 14.5 14.5 9" /><path d="m19 3-5.5 5.5" />
      <path d="M5 21 3 19" />
    </svg>
  ),
  "minor-surgery": (
    <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-[#0E7490] fill-none stroke-2" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  ),
  "antenatal-care": (
    <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-[#0E7490] fill-none stroke-2" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  "family-planning": (
    <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-[#0E7490] fill-none stroke-2" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  "pharmacy-services": (
    <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-[#0E7490] fill-none stroke-2" aria-hidden="true">
      <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18" />
    </svg>
  ),
};

interface ServiceCardProps {
  service: Service;
  showLearnMore?: boolean;
}

export default function ServiceCard({ service, showLearnMore = true }: ServiceCardProps) {
  return (
    <div
      className={`
        bg-white rounded-2xl shadow-sm p-6 flex flex-col gap-3
        hover:shadow-md transition-shadow duration-200
        ${service.isEmergency ? "border-l-4 border-[#DC2626]" : ""}
      `}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="w-11 h-11 rounded-xl bg-[#F0F9FF] flex items-center justify-center">
          {ICONS[service.id] ?? (
            <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-[#0E7490] fill-none stroke-2" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v8M8 12h8" />
            </svg>
          )}
        </div>
        {service.is24hr && (
          <span className="text-xs font-semibold bg-[#0E7490] text-white px-2 py-0.5 rounded-full">
            24hr
          </span>
        )}
        {service.isEmergency && (
          <span className="text-xs font-semibold bg-[#DC2626] text-white px-2 py-0.5 rounded-full">
            Emergency
          </span>
        )}
      </div>
      <h3 className="text-base font-bold text-[#0D2D4E]">{service.name}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
      {showLearnMore && (
        <Link
          href={`/services#${service.id}`}
          className="text-sm font-medium text-[#0E7490] hover:underline mt-auto"
        >
          Learn more →
        </Link>
      )}
    </div>
  );
}
