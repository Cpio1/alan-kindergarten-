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
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-32 size-[480px] blob bg-teal-soft" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-28 top-1/3 size-[220px] rounded-full bg-lav-soft/80" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-16 left-[46%] size-[100px] rounded-full bg-sun-soft" />

      <div className="container-site relative grid grid-cols-[1fr_1fr] items-center gap-10 pb-8 pt-3 xl:gap-12 xl:pb-10 xl:pt-5 2xl:pb-12 2xl:pt-8">
        <div className="relative z-10 max-w-[540px]">
          <Reveal y={16}>
            <Eyebrow color="coral">{hero.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.08} y={20}>
            <h1 className="mt-3 font-display text-[36px] font-extrabold leading-[1.1] text-ink xl:text-[40px] 2xl:text-[46px]">
              <span className="relative inline-block text-teal-deep">
                {hero.titleLead}
                <Squiggle className="absolute -bottom-2 left-0 h-2.5 w-full" color="#FFC857" />
              </span>{" "}
              {hero.titleRest}
            </h1>
          </Reveal>
          <Reveal delay={0.16} y={20}>
            <p className="mt-4 max-w-[480px] text-[15.5px] leading-relaxed 2xl:text-[16.5px] text-ink-soft">{hero.text}</p>
          </Reveal>
          <Reveal delay={0.24} y={20} className="mt-5 flex flex-wrap gap-2.5">
            <ButtonLink href={contacts.whatsapp} external variant="primary" className="px-6">
              <WhatsAppIcon className="size-5" />
              {hero.primaryCta}
            </ButtonLink>
            <ButtonLink href="#about" variant="ghost" className="px-6">
              {hero.secondaryCta}
              <ArrowDown className="size-4 transition-transform duration-300 group-hover/btn:translate-y-0.5" aria-hidden="true" />
            </ButtonLink>
          </Reveal>

          <Reveal delay={0.32} y={20}>
            <ul className="mt-6 grid grid-cols-4 gap-2.5" aria-label="Негізгі артықшылықтар">
              {highlights.map((h, i) => {
                const Icon = highlightIcons[h.icon];
                const a = accentClasses[h.accent];
                return (
                  <li
                    key={h.value}
                    className={cn(
                      "flex flex-col items-start gap-2 bg-white/85 p-3 shadow-soft ring-1 ring-ink/5 backdrop-blur",
                      i % 2 === 0 ? "rounded-[18px_18px_18px_7px]" : "rounded-[18px_7px_18px_18px]"
                    )}
                  >
                    <span className={cn("grid size-8 place-items-center blob", a.soft, a.text)}>
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block font-display text-[14.5px] font-bold leading-tight text-ink 2xl:text-[15.5px]">{h.value}</span>
                      <span className="mt-0.5 block text-[11.5px] font-semibold text-ink-soft">{h.label}</span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>

        {/* Фото композициясы — көлденең кадр өз пропорциясында, балалар кесілмейді */}
        <Reveal delay={0.1} scale={0.94} y={0} className="relative mx-auto w-full max-w-[440px] xl:max-w-[480px] 2xl:max-w-[560px]">
          <div className="relative" style={{ aspectRatio: image ? `${image.width} / ${image.height}` : "16 / 10" }}>
            <div aria-hidden="true" className="absolute inset-0 translate-x-[4%] translate-y-[7%] rotate-[3deg] rounded-[40px_40px_40px_14px] bg-sun" />
            <div aria-hidden="true" className="absolute -inset-[4%] rotate-[-3deg] rounded-[52px_52px_52px_20px] border-[2.5px] border-dashed border-teal/60" />
            <ShapedImage
              image={image}
              alt="«Алан» бөбекжай-балабақшасының балалары"
              shape="frame"
              priority
              sizes="(min-width: 1536px) 560px, (min-width: 1024px) 480px, 90vw"
              className="absolute inset-0 shadow-card ring-[6px] ring-white"
            />

            <Float className="-left-8 -top-6 w-16" delay={0.4} slow>
              <Cloud />
            </Float>
            <Float className="-right-2 -top-5 w-8" twinkle>
              <Star color="#FF9478" />
            </Float>
            <Float className="-right-5 bottom-[22%] w-9" delay={1}>
              <Flower color="#A9A2EF" />
            </Float>
            <Float className="-left-5 top-[40%] w-5" twinkle delay={1.6}>
              <Sparkle color="#5CCBBC" />
            </Float>
            <Float className="-bottom-7 right-[18%] w-10" slow delay={2}>
              <Ring color="#FF9478" />
            </Float>

            <div className="absolute -bottom-5 -left-4 flex items-center gap-2.5 rounded-[18px] bg-white px-3 py-2 shadow-card motion-safe:animate-float-slow xl:-left-6">
              <span className="grid size-8 place-items-center rounded-full bg-teal-soft text-teal-deep">
                <Clock className="size-4" aria-hidden="true" />
              </span>
              <span className="leading-tight">
                <span className="block text-[11px] font-semibold text-ink-soft">Жұмыс уақыты</span>
                <span className="block font-display text-[14px] font-bold text-ink">{contacts.hours}</span>
              </span>
            </div>
          </div>
        </Reveal>
      </div>

      <Wave color="#FFFFFF" variant={1} className="relative -mb-px" />
    </div>
  );
}
