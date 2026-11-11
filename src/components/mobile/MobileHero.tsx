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
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-6 size-[260px] blob bg-teal-soft" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-20 top-[40%] size-[180px] rounded-full bg-lav-soft" />

      <div className="container-site relative pb-8 pt-6 text-center">
        <Reveal y={10}>
          <Eyebrow color="coral">{hero.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal y={12} delay={0.06}>
          <h1 className="mx-auto mt-4 max-w-[520px] font-display text-[clamp(28px,8.4vw,40px)] font-extrabold leading-[1.14] text-ink">
            <span className="relative inline-block text-teal-deep">
              {hero.titleLead}
              <Squiggle className="absolute -bottom-2 left-0 h-2.5 w-full" color="#FFC857" />
            </span>{" "}
            {hero.titleRest}
          </h1>
        </Reveal>
        <Reveal y={12} delay={0.12}>
          <p className="mx-auto mt-4 max-w-[440px] text-[16px] leading-relaxed text-ink-soft">{hero.text}</p>
        </Reveal>

        {/* Фигуралы рамкадағы фото — экраннан шықпайды */}
        <Reveal y={0} scale={0.96} delay={0.15} className="relative mx-auto mt-7 w-[min(84vw,360px)]">
          <div className="relative aspect-[1/0.92]">
            <div aria-hidden="true" className="absolute inset-0 translate-x-[3%] translate-y-[4%] rotate-[5deg] blob bg-sun" />
            <ShapedImage
              image={image}
              alt="«Алан» бөбекжай-балабақшасының балалары"
              shape="blob"
              priority
              sizes="(min-width: 1280px) 540px, (min-width: 1024px) 44vw, 90vw"
              className="absolute inset-0 shadow-card ring-[6px] ring-white"
            />
            <Float className="-left-2 top-[6%] w-14" slow>
              <Cloud />
            </Float>
            <Float className="right-[2%] -top-2 w-8" twinkle>
              <Star color="#FF9478" />
            </Float>
            <Float className="right-[-2%] bottom-[8%] w-10" delay={0.8}>
              <Flower color="#A9A2EF" />
            </Float>
            <Float className="left-[4%] bottom-[12%] w-6" twinkle delay={1.2}>
              <Sparkle color="#5CCBBC" />
            </Float>
          </div>
        </Reveal>

        <Reveal y={12} delay={0.1} className="mx-auto mt-8 grid max-w-[440px] gap-2.5 min-[400px]:grid-cols-2">
          <ButtonLink href={contacts.whatsapp} external variant="primary" className="w-full px-4">
            <WhatsAppIcon className="size-5 shrink-0" />
            {hero.primaryCta}
          </ButtonLink>
          <ButtonLink href="#about" variant="ghost" className="w-full px-4">
            {hero.secondaryCta}
            <ArrowDown className="size-4" aria-hidden="true" />
          </ButtonLink>
        </Reveal>

        <ul className="mx-auto mt-6 grid max-w-[440px] grid-cols-2 gap-2.5 text-left" aria-label="Негізгі артықшылықтар">
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
                  "flex items-center gap-2.5 bg-white p-3 shadow-soft ring-1 ring-ink/5",
                  i % 2 === 0 ? "rounded-[20px_20px_20px_8px]" : "rounded-[20px_20px_8px_20px]"
                )}
              >
                <span className={cn("grid size-10 shrink-0 place-items-center blob", a.soft, a.text)}>
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="min-w-0 leading-tight">
                  <span className="block font-display text-[15px] font-bold text-ink">{h.value}</span>
                  <span className="mt-0.5 block text-[12px] font-semibold text-ink-soft">{h.label}</span>
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
