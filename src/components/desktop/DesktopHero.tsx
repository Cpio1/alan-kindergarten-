import { ArrowDown, Clock } from "lucide-react";
import { contacts, hero, highlights, accentClasses } from "@/data/kindergarten";
import type { SiteImage } from "@/lib/images";
import { cn, Cloud, Float, Flower, Ring, Sparkle, Squiggle, Star, Wave } from "../shared/Decor";
import { highlightIcons, WhatsAppIcon } from "../shared/Icons";
import { Reveal } from "../shared/Reveal";
import { ButtonLink, Eyebrow, ShapedImage } from "../shared/ui";

export function DesktopHero({ image }: { image: SiteImage | null }) {
  return (
    <div className="relative overflow-hidden bg-cream pt-[var(--header-h)]">
      {/* Фондық пішіндер */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 size-[640px] blob bg-teal-soft" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-1/3 size-[300px] rounded-full bg-lav-soft/80" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-24 left-[46%] size-[140px] rounded-full bg-sun-soft" />

      <div className="container-site relative grid grid-cols-[1.08fr_1fr] items-center gap-10 pb-10 pt-4 xl:gap-14 xl:pb-14 xl:pt-8">
        <div className="relative z-10 max-w-[600px]">
          <Reveal y={16}>
            <Eyebrow color="coral">{hero.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.08} y={20}>
            <h1 className="mt-4 font-display text-[42px] font-extrabold leading-[1.08] text-ink xl:text-[54px]">
              <span className="relative inline-block text-teal-deep">
                {hero.titleLead}
                <Squiggle className="absolute -bottom-3 left-0 h-3.5 w-full" color="#FFC857" />
              </span>{" "}
              {hero.titleRest}
            </h1>
          </Reveal>
          <Reveal delay={0.16} y={20}>
            <p className="mt-5 max-w-[520px] text-[17px] xl:text-[18px] leading-relaxed text-ink-soft">{hero.text}</p>
          </Reveal>
          <Reveal delay={0.24} y={20} className="mt-7 flex flex-wrap gap-3">
            <ButtonLink href={contacts.whatsapp} external variant="primary" className="px-7">
              <WhatsAppIcon className="size-5" />
              {hero.primaryCta}
            </ButtonLink>
            <ButtonLink href="#about" variant="ghost" className="px-7">
              {hero.secondaryCta}
              <ArrowDown className="size-4 transition-transform duration-300 group-hover/btn:translate-y-0.5" aria-hidden="true" />
            </ButtonLink>
          </Reveal>

          <Reveal delay={0.32} y={20}>
            <ul className="mt-8 grid grid-cols-4 gap-3" aria-label="Негізгі артықшылықтар">
              {highlights.map((h, i) => {
                const Icon = highlightIcons[h.icon];
                const a = accentClasses[h.accent];
                return (
                  <li
                    key={h.value}
                    className={cn(
                      "flex flex-col items-start gap-2.5 bg-white/85 p-3.5 shadow-soft ring-1 ring-ink/5 backdrop-blur",
                      i % 2 === 0 ? "rounded-[22px_22px_22px_8px]" : "rounded-[22px_8px_22px_22px]"
                    )}
                  >
                    <span className={cn("grid size-10 place-items-center blob", a.soft, a.text)}>
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block font-display text-[16px] font-bold leading-tight text-ink xl:text-[17px]">{h.value}</span>
                      <span className="mt-0.5 block text-[12.5px] font-semibold text-ink-soft">{h.label}</span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>

        {/* Фото композициясы */}
        <Reveal delay={0.1} scale={0.94} y={0} className="relative mx-auto w-full max-w-[440px] xl:max-w-[500px] 2xl:max-w-[540px]">
          <div className="relative aspect-[1/1.04]">
            <div aria-hidden="true" className="absolute inset-[2%] translate-x-[5%] translate-y-[4%] rotate-6 blob bg-sun" />
            <div aria-hidden="true" className="absolute -inset-[3%] rotate-[-8deg] blob border-[3px] border-dashed border-teal/60" />
            <ShapedImage
              image={image}
              alt="«Алан» бөбекжай-балабақшасының балалары"
              shape="blob"
              morph
              priority
              sizes="(min-width: 1280px) 540px, (min-width: 1024px) 44vw, 90vw"
              className="absolute inset-[4%] shadow-card ring-8 ring-white"
            />

            <Float className="-left-6 top-[8%] w-24" delay={0.4} slow>
              <Cloud />
            </Float>
            <Float className="-right-2 top-[2%] w-12" twinkle>
              <Star color="#FF9478" />
            </Float>
            <Float className="right-[6%] bottom-[16%] w-14" delay={1}>
              <Flower color="#A9A2EF" />
            </Float>
            <Float className="left-[2%] bottom-[30%] w-8" twinkle delay={1.6}>
              <Sparkle color="#5CCBBC" />
            </Float>
            <Float className="-right-8 top-[42%] w-16" slow delay={2}>
              <Ring color="#FF9478" />
            </Float>

            <div className="absolute -left-4 bottom-[6%] flex items-center gap-3 rounded-[22px] bg-white px-4 py-3 shadow-card motion-safe:animate-float-slow xl:-left-10">
              <span className="grid size-10 place-items-center rounded-full bg-teal-soft text-teal-deep">
                <Clock className="size-5" aria-hidden="true" />
              </span>
              <span className="leading-tight">
                <span className="block text-[12px] font-semibold text-ink-soft">Жұмыс уақыты</span>
                <span className="block font-display text-[16px] font-bold text-ink">{contacts.hours}</span>
              </span>
            </div>
          </div>
        </Reveal>
      </div>

      <Wave color="#FFFFFF" variant={1} className="relative -mb-px" />
    </div>
  );
}
