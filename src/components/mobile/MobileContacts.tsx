import { Phone } from "lucide-react";
import { contacts, contactsSection } from "@/data/kindergarten";
import { Float, Star } from "../shared/Decor";
import { ContactList } from "../shared/ContactList";
import { InstagramIcon, WhatsAppIcon } from "../shared/Icons";
import { MapCard } from "../shared/MapCard";
import { Reveal } from "../shared/Reveal";
import { ButtonLink, SectionTitle } from "../shared/ui";

export function MobileContacts() {
  return (
    <div className="relative overflow-hidden bg-cream pb-8 pt-7">
      <Float className="left-4 top-3 w-5" twinkle>
        <Star color="#FF9478" />
      </Float>
      <div className="container-site">
        <Reveal y={12}>
          <SectionTitle eyebrow="Байланыс" color="teal" title={contactsSection.title} subtitle={contactsSection.subtitle} />
        </Reveal>

        <div className="mx-auto mt-5 max-w-[520px]">
          <Reveal y={12} className="rounded-[24px] bg-teal-soft/70 p-3 ring-1 ring-teal/20">
            <ContactList compact />
          </Reveal>

          <div className="mt-3 grid gap-2">
            <ButtonLink href={contacts.whatsapp} external variant="primary" className="min-h-[48px] w-full text-[15px]">
              <WhatsAppIcon className="size-5" />
              {contactsSection.whatsapp}
            </ButtonLink>
            <div className="grid grid-cols-2 gap-2">
              <ButtonLink href={contacts.phoneHref} variant="sun" className="min-h-[46px] w-full px-3">
                <Phone className="size-[18px] shrink-0" aria-hidden="true" />
                {contactsSection.call}
              </ButtonLink>
              <ButtonLink href={contacts.instagram} external variant="white" className="min-h-[46px] w-full px-3 text-center">
                <InstagramIcon className="size-5 shrink-0 text-lav-deep" />
                Instagram
              </ButtonLink>
            </div>
          </div>

          <Reveal y={12} className="relative mt-4 aspect-[16/10]">
            <MapCard className="absolute inset-0 rounded-[24px]" />
          </Reveal>
        </div>
      </div>
    </div>
  );
}
