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
        <Star aria-hidden="true" className="absolute right-[8%] top-8 size-8 opacity-90" color="#FFC857" />
        <Flower aria-hidden="true" className="absolute -bottom-6 left-[42%] size-20 opacity-20" color="#FFFFFF" center="#FFC857" />
        <Sparkle aria-hidden="true" className="absolute left-[6%] top-12 size-5" color="#A9A2EF" />

        <div className="container-site relative grid gap-8 pb-8 pt-8 lg:grid-cols-[1.2fr_1.6fr_1fr] lg:gap-12 lg:pb-12 lg:pt-10">
          <div>
            <span className="inline-flex rounded-[22px] bg-white px-3.5 py-2.5">
              <Logo image={logo} compact />
            </span>
            <p className="mt-4 font-display text-[18px] font-bold">{site.name}</p>
            <p className="mt-1 text-[15px] text-white/85">{site.tagline}</p>
          </div>

          <nav aria-label="Төменгі мәзір">
            <p className="font-display text-[15px] font-bold uppercase tracking-wider text-sun">Бөлімдер</p>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1">
              {nav.map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`} className="inline-flex min-h-[40px] items-center text-[15px] font-semibold text-white/90 underline-offset-4 hover:text-white hover:underline">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-display text-[15px] font-bold uppercase tracking-wider text-sun">Байланыс</p>
            <a href={contacts.phoneHref} className="mt-3 flex min-h-[44px] items-center gap-2.5 font-display text-[18px] font-bold hover:underline">
              <Phone className="size-5" aria-hidden="true" />
              {contacts.phoneDisplay}
            </a>
            <p className="mt-1 flex items-center gap-2.5 text-[15px] text-white/90">
              <MapPin className="size-5 shrink-0" aria-hidden="true" />
              {contacts.address}
            </p>
            <div className="mt-4 flex gap-2.5">
              <a
                href={contacts.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="grid size-12 place-items-center rounded-full bg-white text-teal-deep transition-transform hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="size-6" />
              </a>
              <a
                href={contacts.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid size-12 place-items-center rounded-full bg-white text-lav-deep transition-transform hover:-translate-y-0.5"
              >
                <InstagramIcon className="size-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/15">
          <div className="container-site flex flex-col gap-1 py-5 pb-[calc(88px+env(safe-area-inset-bottom))] text-[13px] text-white/80 sm:flex-row sm:items-center sm:justify-between lg:pb-5">
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
