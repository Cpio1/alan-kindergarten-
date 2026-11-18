import { Phone } from "lucide-react";
import { contacts, contactsSection } from "@/data/kindergarten";
import { Cloud, Float, Flower, Sparkle, Star } from "../shared/Decor";
import { ContactList } from "../shared/ContactList";
import { InstagramIcon, WhatsAppIcon } from "../shared/Icons";
import { MapCard } from "../shared/MapCard";
import { Reveal } from "../shared/Reveal";
import { ButtonLink, SectionTitle } from "../shared/ui";

export function DesktopContacts() {
  return (
    <div className="relative overflow-hidden bg-cream pb-14 pt-9 2xl:pb-16 2xl:pt-12">
      <div aria-hidden="true" className="absolute -left-32 bottom-0 size-[300px] blob bg-sun-soft/70" />
      <Float className="right-[4%] top-12 w-14" slow>
        <Cloud color="#DFF5F1" />
      </Float>
      <Float className="left-[5%] top-16 w-7" twinkle>
        <Star color="#FF9478" />
      </Float>

      <div className="container-site relative">
        <Reveal y={18}>
          <SectionTitle eyebrow="Байланыс" color="teal" title={contactsSection.title} subtitle={contactsSection.subtitle} />
        </Reveal>

        <div className="mx-auto mt-7 grid max-w-[1040px] grid-cols-[1.08fr_1fr] items-stretch gap-6">
          <Reveal x={-20} y={0} className="relative rounded-[32px_32px_32px_12px] bg-teal-soft/70 p-5 ring-1 ring-teal/20 2xl:p-6">
            <Sparkle className="absolute right-5 top-5 size-4" color="#5CCBBC" />
            <ContactList />
            <div className="mt-4 grid grid-cols-2 gap-2.5">
              <ButtonLink href={contacts.whatsapp} external variant="primary" className="col-span-2">
                <WhatsAppIcon className="size-5" />
                {contactsSection.whatsapp}
              </ButtonLink>
              <ButtonLink href={contacts.instagram} external variant="white" className="whitespace-nowrap px-3 text-[14px]">
                <InstagramIcon className="size-5 text-lav-deep" />
                {contactsSection.instagram}
              </ButtonLink>
              <ButtonLink href={contacts.phoneHref} variant="sun" className="whitespace-nowrap px-3 text-[14px]">
                <Phone className="size-[18px]" aria-hidden="true" />
                {contactsSection.call}
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal x={20} y={0} className="relative min-h-[320px]">
            <MapCard className="absolute inset-0 rounded-[32px_12px_32px_32px]" />
            <Float className="-right-4 -top-5 w-10" delay={0.5}>
              <Flower color="#A9A2EF" />
            </Float>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
