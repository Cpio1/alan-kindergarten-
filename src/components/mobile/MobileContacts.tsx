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
    <div className="relative overflow-hidden bg-cream pb-14 pt-10">
      <Float className="left-4 top-4 w-7" twinkle>
        <Star color="#FF9478" />
      </Float>
      <div className="container-site">
        <Reveal y={12}>
          <SectionTitle eyebrow="Байланыс" color="teal" title={contactsSection.title} subtitle={contactsSection.subtitle} />
        </Reveal>

        <div className="mx-auto mt-7 max-w-[520px]">
          <Reveal y={12} className="rounded-[28px] bg-teal-soft/70 p-4 ring-1 ring-teal/20">
            <ContactList compact />
          </Reveal>

          <div className="mt-4 grid gap-2.5">
            <ButtonLink href={contacts.whatsapp} external variant="primary" className="min-h-[54px] w-full text-[16px]">
              <WhatsAppIcon className="size-5" />
              {contactsSection.whatsapp}
            </ButtonLink>
            <div className="grid grid-cols-2 gap-2.5">
              <ButtonLink href={contacts.phoneHref} variant="sun" className="min-h-[52px] w-full px-3">
                <Phone className="size-[18px] shrink-0" aria-hidden="true" />
                {contactsSection.call}
              </ButtonLink>
              <ButtonLink href={contacts.instagram} external variant="white" className="min-h-[52px] w-full px-3 text-center">
                <InstagramIcon className="size-5 shrink-0 text-lav-deep" />
                Instagram
              </ButtonLink>
            </div>
          </div>

          <Reveal y={12} className="relative mt-6 aspect-[4/3.4]">
            <MapCard className="absolute inset-0 rounded-[28px]" />
          </Reveal>
        </div>
      </div>
    </div>
  );
}
