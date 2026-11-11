import { ExternalLink, MapPin } from "lucide-react";
import { contacts, contactsSection, map } from "@/data/kindergarten";
import { cn } from "./Decor";

/** 2GIS картасы. URL-ды src/data/kindergarten.ts → map ішінде көрсетіңіз. */
export function MapCard({ className }: { className?: string }) {
  if (map.embedUrl) {
    return (
      <div className={cn("overflow-hidden bg-teal-soft shadow-card ring-[6px] ring-white", className)}>
        <iframe
          src={map.embedUrl}
          title={`2GIS картасы: ${contacts.address}`}
          loading="lazy"
          className="absolute inset-0 size-full border-0"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    );
  }

  return (
    <div className={cn("isolate overflow-hidden bg-[#e9f7f4] shadow-card ring-[6px] ring-white", className)}>
      {/* Иллюстрациялық карта фоны (нақты орын емес) */}
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 -z-10 size-full" aria-hidden="true">
        <rect width="400" height="300" fill="#e9f7f4" />
        <path d="M-10 210C80 180 120 240 220 200S350 120 420 150" stroke="#fff" strokeWidth="22" fill="none" />
        <path d="M120-10C140 80 90 150 130 310" stroke="#fff" strokeWidth="16" fill="none" />
        <path d="M290-10c-20 90 30 170-10 320" stroke="#fff" strokeWidth="12" fill="none" />
        <path d="M-10 80h420" stroke="#fff" strokeWidth="10" />
        <circle cx="330" cy="60" r="34" fill="#cdeee8" />
        <rect x="30" y="110" width="60" height="44" rx="14" fill="#fff1cf" />
        <rect x="180" y="40" width="70" height="30" rx="12" fill="#eceafd" />
        <circle cx="60" cy="250" r="26" fill="#ffe6de" />
      </svg>
      <div className="flex size-full flex-col items-center justify-center p-6 text-center">
        <span className="grid size-16 place-items-center rounded-full bg-white text-coral-deep shadow-card ring-8 ring-coral/20 motion-safe:animate-float">
          <MapPin className="size-8" aria-hidden="true" />
        </span>
        <p className="mt-4 max-w-[280px] font-display text-[17px] font-bold leading-snug text-ink">{contacts.address}</p>
        <p className="mt-1.5 max-w-[300px] text-[14px] font-semibold text-ink-soft">{contactsSection.mapPlaceholder}</p>
        {map.linkUrl && (
          <a
            href={map.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-[44px] items-center gap-2 rounded-full bg-white px-5 font-display text-[14px] font-semibold text-ink shadow-soft"
          >
            {contactsSection.mapOpen}
            <ExternalLink className="size-4" aria-hidden="true" />
          </a>
        )}
      </div>
    </div>
  );
}
