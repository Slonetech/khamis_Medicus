import Link from "next/link";

interface StaffCardProps {
  name: string;
  title: string;
  bio: string;
  large?: boolean;
}

function AvatarSVG({ size = 80 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Staff avatar placeholder"
      role="img"
    >
      <circle cx="60" cy="60" r="60" fill="#E5E7EB" />
      <circle cx="60" cy="46" r="20" fill="#9CA3AF" />
      <ellipse cx="60" cy="100" rx="32" ry="24" fill="#9CA3AF" />
    </svg>
  );
}

export default function StaffCard({ name, title, bio, large = false }: StaffCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col items-center text-center gap-4">
      <AvatarSVG size={large ? 120 : 80} />
      <div>
        <h3 className={`font-bold text-[#0D2D4E] ${large ? "text-xl" : "text-lg"}`}>{name}</h3>
        <p className="text-sm text-[#0E7490] font-medium mt-0.5">{title}</p>
      </div>
      {bio && <p className="text-sm text-gray-600 leading-relaxed">{bio}</p>}
      <Link
        href="/contact#appointment-form"
        className="mt-2 text-sm font-semibold text-[#0E7490] hover:underline"
      >
        Book with {name.split(" ")[0]} →
      </Link>
    </div>
  );
}
