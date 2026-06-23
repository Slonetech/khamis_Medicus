import Link from "next/link";

const WA_URL = "https://wa.me/254704706709?text=Hello%20Kham%20Medicus%2C%20I%20would%20like%20to%20enquire%20about%20your%20services";

export default function MobileBottomBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 flex h-14 border-t border-white/10">
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center bg-[#25D366] text-white text-sm font-semibold gap-2 active:opacity-90"
        aria-label="WhatsApp Us"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-4 h-4 fill-white"
          aria-hidden="true"
        >
          <path d="M12.002 2C6.477 2 2 6.477 2 12c0 1.765.473 3.48 1.373 4.99L2 22l5.178-1.354A9.958 9.958 0 0 0 12.002 22C17.525 22 22 17.523 22 12c0-5.522-4.475-10-9.998-10Zm0 18.15a8.125 8.125 0 0 1-4.146-1.133l-.297-.177-3.052.801.816-2.976-.193-.308A8.128 8.128 0 0 1 3.851 12c0-4.49 3.654-8.15 8.151-8.15 4.495 0 8.148 3.66 8.148 8.15 0 4.494-3.653 8.15-8.148 8.15Zm4.47-6.1c-.245-.123-1.45-.715-1.675-.797-.225-.082-.389-.122-.552.122-.163.245-.633.797-.776.958-.143.163-.204.184-.45.061-.245-.123-1.034-.381-1.97-1.215-.729-.65-1.22-1.452-1.364-1.697-.143-.245-.015-.377.107-.499.11-.11.245-.285.368-.429.122-.143.163-.245.245-.409.082-.164.04-.306-.02-.43-.062-.122-.552-1.328-.757-1.818-.198-.476-.4-.412-.552-.42-.143-.006-.306-.009-.47-.009s-.429.061-.653.306c-.224.245-.858.839-.858 2.044s.878 2.37 1 2.534c.123.163 1.729 2.638 4.19 3.699.585.253 1.042.402 1.398.516.588.187 1.122.16 1.545.097.47-.07 1.45-.593 1.654-1.165.204-.572.204-1.063.143-1.165-.061-.103-.224-.164-.47-.286Z" />
        </svg>
        WhatsApp Us
      </a>
      <Link
        href="/contact#appointment-form"
        className="flex-1 flex items-center justify-center bg-[#0E7490] text-white text-sm font-semibold active:opacity-90"
        aria-label="Book Appointment"
      >
        Book Appointment
      </Link>
    </div>
  );
}
