"use client";

import { useEffect, useState, useRef } from "react";

const WA_URL =
  "https://wa.me/254704706709?text=Hello%20Kham%20Medicus%2C%20I%20would%20like%20to%20enquire%20about%20your%20services";

export default function WhatsAppButton() {
  const [isPulsing, setIsPulsing] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setIsPulsing(false);
    }, 3000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-2 md:bottom-8 md:right-8">
      {/* Tooltip */}
      {showTooltip && (
        <div className="hidden md:block bg-[#0D2D4E] text-white text-xs font-medium px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap">
          Chat with us on WhatsApp
          <div className="absolute bottom-[-5px] right-5 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-[#0D2D4E]" />
        </div>
      )}

      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className={`
          flex items-center justify-center w-14 h-14 rounded-full
          bg-[#25D366] text-white shadow-lg
          hover:scale-110 transition-transform duration-200
          ${isPulsing ? "wa-pulse" : ""}
        `}
      >
        {/* WhatsApp SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-7 h-7 fill-white"
          aria-hidden="true"
        >
          <path d="M16.003 2.667C8.636 2.667 2.667 8.636 2.667 16c0 2.358.632 4.652 1.832 6.667L2.667 29.333l6.862-1.798A13.276 13.276 0 0 0 16.003 29.333c7.364 0 13.33-5.97 13.33-13.333 0-7.364-5.966-13.333-13.33-13.333Zm0 24.197a10.84 10.84 0 0 1-5.53-1.513l-.396-.236-4.076 1.069 1.09-3.972-.258-.41a10.846 10.846 0 0 1-1.663-5.802c0-5.99 4.873-10.863 10.863-10.863 5.99 0 10.862 4.873 10.862 10.863 0 5.99-4.872 10.864-10.892 10.864Zm5.963-8.14c-.327-.164-1.934-.953-2.233-1.063-.3-.11-.518-.164-.736.163-.218.326-.845 1.063-.981 1.28-.136.218-.273.245-.6.082-.327-.163-1.38-.508-2.63-1.622-.972-.867-1.629-1.938-1.82-2.265-.19-.327-.02-.503.143-.665.147-.146.327-.381.49-.572.163-.19.218-.327.328-.545.109-.218.054-.409-.028-.572-.082-.163-.736-1.772-1.008-2.425-.264-.636-.534-.55-.736-.56-.19-.009-.409-.011-.627-.011s-.572.082-.872.41c-.3.326-1.145 1.117-1.145 2.724s1.172 3.16 1.335 3.378c.163.217 2.307 3.52 5.59 4.936.78.336 1.39.537 1.865.688.783.249 1.496.214 2.06.13.628-.093 1.934-.79 2.208-1.554.273-.763.273-1.417.19-1.554-.081-.137-.3-.218-.627-.38Z" />
        </svg>
      </a>
    </div>
  );
}
