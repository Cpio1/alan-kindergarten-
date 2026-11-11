import { about, accentClasses, groups } from "@/data/kindergarten";
import type { SiteImage } from "@/lib/images";
import { cn, Float, Flower, Sparkle, Star, Wave } from "../shared/Decor";
import { GroupCard } from "../shared/GroupCard";
import { highlightIcons } from "../shared/Icons";
import { Reveal } from "../shared/Reveal";
import { Eyebrow, ShapedImage } from "../shared/ui";

export function MobileAboutGroups({ image }: { image: SiteImage | null }) {
  return (
    <div className="relative">
      <div className="relative overflow-hidden bg-white pb-10 pt-6">
        <div className="container-site">
          <Reveal y={12} className="text-center">
            <Eyebrow color="teal">«Алан» туралы</Eyebrow>
            <h2 className="mt-3 font-display text-[clamp(26px,7.4vw,34px)] font-extrabold leading-[1.15] text-ink">
              {about.title}
            </h2>
            <p className="mx-auto mt-2 max-w-[420px] font-display text-[17px] font-semibold leading-snug text-coral-deep">
              {about.subtitle}
            </p>
            <p className="mx-auto mt-4 max-w-[520px] text-[15.5px] leading-relaxed text-ink-soft">{about.text}</p>
          </Reveal>

          <Reveal y={0} scale={0.96} className="relative mx-auto mt-8 w-[min(72vw,300px)]">
            <div className="relative aspect-[4/4.7]">
              <div aria-hidden="true" className="absolute -left-[7%] top-[7%] h-[90%] w-full rounded-t-[999px] rounded-b-[36px] bg-lav-soft" />
              <ShapedImage
                image={image}
                alt="«Алан» бөбекжай-балабақшасындағы күнделікті өмір"
                shape="arch"
                tone="lav"
                sizes="(min-width: 1280px) 460px, (min-width: 1024px) 40vw, 300px"
                className="absolute inset-0 shadow-card ring-[6px] ring-white"
              />
              <Float className="-right-3 top-[10%] w-9" twinkle>
                <Star color="#FFC857" />
              </Float>
              <Float className="-left-4 bottom-[16%] w-10" delay={0.6}>
                <Flower color="#FF9478" />
              </Float>
              <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-sun px-4 py-2 font-display text-[14px] font-bold text-ink shadow-soft">
                <Sparkle className="size-3.5" color="#263640" />
                1,6 – 6 жас
              </div>
            </div>
          </Reveal>

          <ul className="mx-auto mt-10 grid max-w-[520px] gap-2.5">
            {about.features.map((f, i) => {
              const Icon = highlightIcons[f.icon];
              const a = accentClasses[f.accent];
              return (
                <Reveal
                  as="li"
                  key={f.text}
                  y={10}
                  delay={i * 0.06}
                  className={cn("flex items-center gap-3 rounded-[22px] p-3.5", a.soft)}
                >
                  <span className={cn("grid size-11 shrink-0 place-items-center rounded-2xl bg-white shadow-soft", a.text)}>
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="text-[15px] font-bold leading-snug text-ink">{f.text}</span>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>

      <Wave color="#F4F2FE" variant={3} className="bg-white" />
      <div className="relative overflow-hidden bg-[#F4F2FE] pb-10 pt-4">
        <Float className="right-5 top-2 w-7" twinkle>
          <Star color="#FF9478" />
        </Float>
        <div className="container-site">
          <Reveal y={12} className="text-center">
            <Eyebrow color="lav">6 топ</Eyebrow>
            <h3 className="mt-3 font-display text-[26px] font-extrabold text-ink">{about.groupsTitle}</h3>
            <p className="mx-auto mt-2 max-w-[440px] text-[15.5px] leading-relaxed text-ink-soft">{about.groupsText}</p>
          </Reveal>

          <ul className="mx-auto mt-6 grid max-w-[640px] grid-cols-2 gap-3 md:grid-cols-3">
            {groups.map((g, i) => (
              <Reveal as="li" key={g.name} y={12} delay={(i % 2) * 0.06}>
                <GroupCard group={g} index={i} compact />
              </Reveal>
            ))}
          </ul>

          <p className="mx-auto mt-5 max-w-[420px] text-center text-[13.5px] font-semibold text-ink-soft">{about.groupsNote}</p>
        </div>
      </div>
      <Wave color="#FFF9F0" variant={1} className="bg-[#F4F2FE]" />
    </div>
  );
}
