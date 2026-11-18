import { MapPin, Phone } from "lucide-react";
import { contacts, nav, site } from "@/data/kindergarten";
import type { SiteImage } from "@/lib/images";
import { Flower, Sparkle, Star, Wave } from "../shared/Decor";
import { InstagramIcon, WhatsAppIcon } from "../shared/Icons";
import { Logo } from "../shared/ui";
import { FooterYear } from "./FooterYear";

export function Footer({ logo }: { logo: SiteImage | null }) {
  return (
    <footer className="relative bg-cream">
      <Wave color="#137A6D" variant={2} />
      <div className="relative overflow-hidden bg-teal-deep text-white">
        <Star aria-hidden="true" className="absolute right-[8%] top-6 size-6 opacity-90" color="#FFC857" />
        <Flower aria-hidden="true" className="absolute -bottom-5 left-[42%] size-16 opacity-20" color="#FFFFFF" center="#FFC857" />
        <Sparkle aria-hidden="true" className="absolute left-[6%] top-10 size-4" color="#A9A2EF" />

        <div className="container-site relative grid gap-6 pb-6 pt-6 lg:grid-cols-[1.2fr_1.6fr_1fr] lg:gap-10 lg:pb-8 lg:pt-8">
          <div>
            <span className="inline-flex rounded-[18px] bg-white px-3 py-2">
              <Logo image={logo} compact />
            </span>
            <p className="mt-3 font-display text-[16px] font-bold">{site.name}</p>
            <p className="mt-1 text-[14px] text-white/85">{site.tagline}</p>
          </div>

          <nav aria-label="Төменгі мәзір">
            <p className="font-display text-[13px] font-bold uppercase tracking-wider text-sun">Бөлімдер</p>
            <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-0">
              {nav.map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`} className="inline-flex min-h-[38px] items-center text-[14px] font-semibold text-white/90 underline-offset-4 hover:text-white hover:underline">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-display text-[13px] font-bold uppercase tracking-wider text-sun">Байланыс</p>
            <a href={contacts.phoneHref} className="mt-2 flex min-h-[40px] items-center gap-2 font-display text-[16px] font-bold hover:underline">
              <Phone className="size-5" aria-hidden="true" />
              {contacts.phoneDisplay}
            </a>
            <p className="mt-1 flex items-center gap-2 text-[14px] text-white/90">
              <MapPin className="size-5 shrink-0" aria-hidden="true" />
              {contacts.address}
            </p>
            <div className="mt-3 flex gap-2.5">
              <a
                href={contacts.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="grid size-11 place-items-center rounded-full bg-white text-teal-deep transition-transform hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="size-6" />
              </a>
              <a
                href={contacts.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid size-11 place-items-center rounded-full bg-white text-lav-deep transition-transform hover:-translate-y-0.5"
              >
                <InstagramIcon className="size-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/15">
          <div className="container-site flex flex-col gap-1 py-4 pb-[calc(76px+env(safe-area-inset-bottom))] text-[12.5px] text-white/80 sm:flex-row sm:items-center sm:justify-between lg:pb-4">
            <p>{site.legalName}</p>
            <p>
              © <FooterYear /> {site.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
