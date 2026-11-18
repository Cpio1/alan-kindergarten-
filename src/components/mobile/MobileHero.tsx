import { ArrowDown } from "lucide-react";
import { accentClasses, contacts, hero, highlights } from "@/data/kindergarten";
import type { SiteImage } from "@/lib/images";
import { cn, Cloud, Float, Flower, Sparkle, Squiggle, Star, Wave } from "../shared/Decor";
import { highlightIcons, WhatsAppIcon } from "../shared/Icons";
import { Reveal } from "../shared/Reveal";
import { ButtonLink, Eyebrow, ShapedImage } from "../shared/ui";

export function MobileHero({ image }: { image: SiteImage | null }) {
  return (
    <div className="relative overflow-hidden bg-cream pt-[var(--header-h)]">
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 top-6 size-[200px] blob bg-teal-soft" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-16 top-[40%] size-[140px] rounded-full bg-lav-soft" />

      <div className="container-site relative pb-6 pt-4 text-center">
        <Reveal y={10}>
          <Eyebrow color="coral">{hero.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal y={12} delay={0.06}>
          <h1 className="mx-auto mt-3 max-w-[480px] font-display text-[clamp(25px,7vw,34px)] font-extrabold leading-[1.15] text-ink">
            <span className="relative inline-block text-teal-deep">
              {hero.titleLead}
              <Squiggle className="absolute -bottom-1.5 left-0 h-2 w-full" color="#FFC857" />
            </span>{" "}
            {hero.titleRest}
          </h1>
        </Reveal>
        <Reveal y={12} delay={0.12}>
          <p className="mx-auto mt-3 max-w-[420px] text-[15px] leading-relaxed text-ink-soft">{hero.text}</p>
        </Reveal>

        {/* Көлденең фото өз пропорциясында — экраннан шықпайды, балалар кесілмейді */}
        <Reveal y={0} scale={0.96} delay={0.15} className="relative mx-auto mt-5 w-[86%] max-w-[380px]">
          <div className="relative" style={{ aspectRatio: image ? `${image.width} / ${image.height}` : "16 / 10" }}>
            <div aria-hidden="true" className="absolute inset-0 translate-x-[2.5%] translate-y-[6%] rotate-[3deg] rounded-[32px_32px_32px_12px] bg-sun" />
            <ShapedImage
              image={image}
              alt="«Алан» бөбекжай-балабақшасының балалары"
              shape="frame"
              priority
              sizes="(min-width: 640px) 380px, 86vw"
              className="absolute inset-0 shadow-card ring-4 ring-white"
            />
            <Float className="-left-2 -top-4 w-9" slow>
              <Cloud />
            </Float>
            <Float className="-top-3 right-[3%] w-5" twinkle>
              <Star color="#FF9478" />
            </Float>
            <Float className="-bottom-4 right-[6%] w-7" delay={0.8}>
              <Flower color="#A9A2EF" />
            </Float>
            <Float className="-bottom-2 left-[8%] w-4" twinkle delay={1.2}>
              <Sparkle color="#5CCBBC" />
            </Float>
          </div>
        </Reveal>

        <Reveal y={12} delay={0.1} className="mx-auto mt-6 grid max-w-[420px] gap-2 min-[380px]:grid-cols-2">
          <ButtonLink href={contacts.whatsapp} external variant="primary" className="w-full px-4">
            <WhatsAppIcon className="size-5 shrink-0" />
            {hero.primaryCta}
          </ButtonLink>
          <ButtonLink href="#about" variant="ghost" className="w-full px-4">
            {hero.secondaryCta}
            <ArrowDown className="size-4" aria-hidden="true" />
          </ButtonLink>
        </Reveal>

        <ul className="mx-auto mt-4 grid max-w-[420px] grid-cols-2 gap-2 text-left md:max-w-[680px] md:grid-cols-4" aria-label="Негізгі артықшылықтар">
          {highlights.map((h, i) => {
            const Icon = highlightIcons[h.icon];
            const a = accentClasses[h.accent];
            return (
              <Reveal
                as="li"
                key={h.value}
                y={10}
                delay={0.05 * i}
                className={cn(
                  "flex min-w-0 items-center gap-2 bg-white p-2.5 shadow-soft ring-1 ring-ink/5",
                  i % 2 === 0 ? "rounded-[16px_16px_16px_6px]" : "rounded-[16px_16px_6px_16px]"
                )}
              >
                <span className={cn("grid size-8 shrink-0 place-items-center blob", a.soft, a.text)}>
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <span className="min-w-0 leading-tight">
                  <span className="block font-display text-[14px] font-bold text-ink">{h.value}</span>
                  <span className="mt-0.5 block text-[11px] font-semibold text-ink-soft">{h.label}</span>
                </span>
              </Reveal>
            );
          })}
        </ul>
      </div>

      <Wave color="#FFFFFF" variant={2} className="relative -mb-px" />
    </div>
  );
}
