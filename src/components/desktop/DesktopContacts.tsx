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
    <div className="relative overflow-hidden bg-cream pb-24 pt-16 xl:pt-20">
      <div aria-hidden="true" className="absolute -left-40 bottom-0 size-[420px] blob bg-sun-soft/70" />
      <Float className="right-[4%] top-16 w-20" slow>
        <Cloud color="#DFF5F1" />
      </Float>
      <Float className="left-[5%] top-24 w-10" twinkle>
        <Star color="#FF9478" />
      </Float>

      <div className="container-site relative">
        <Reveal y={18}>
          <SectionTitle eyebrow="Байланыс" color="teal" title={contactsSection.title} subtitle={contactsSection.subtitle} />
        </Reveal>

        <div className="mt-12 grid grid-cols-[1fr_1.12fr] items-stretch gap-8 xl:gap-10">
          <Reveal x={-20} y={0} className="relative rounded-[44px_44px_44px_14px] bg-teal-soft/70 p-7 ring-1 ring-teal/20 xl:p-8">
            <Sparkle className="absolute right-7 top-7 size-5" color="#5CCBBC" />
            <ContactList />
            <div className="mt-6 grid grid-cols-2 gap-3">
              <ButtonLink href={contacts.whatsapp} external variant="primary" className="col-span-2">
                <WhatsAppIcon className="size-5" />
                {contactsSection.whatsapp}
              </ButtonLink>
              <ButtonLink href={contacts.instagram} external variant="white" className="px-4">
                <InstagramIcon className="size-5 text-lav-deep" />
                {contactsSection.instagram}
              </ButtonLink>
              <ButtonLink href={contacts.phoneHref} variant="sun" className="px-4">
                <Phone className="size-[18px]" aria-hidden="true" />
                {contactsSection.call}
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal x={20} y={0} className="relative min-h-[440px]">
            <MapCard className="absolute inset-0 rounded-[44px_14px_44px_44px]" />
            <Float className="-right-5 -top-6 w-14" delay={0.5}>
              <Flower color="#A9A2EF" />
            </Float>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
