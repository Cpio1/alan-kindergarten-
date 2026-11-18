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
      <div className="relative overflow-hidden bg-white pb-7 pt-4">
        <div className="container-site">
          <Reveal y={12} className="text-center">
            <Eyebrow color="teal">«Алан» туралы</Eyebrow>
            <h2 className="mt-2 font-display text-[clamp(22px,6.2vw,28px)] font-extrabold leading-[1.15] text-ink">
              {about.title}
            </h2>
            <p className="mx-auto mt-1.5 max-w-[400px] font-display text-[15.5px] font-semibold leading-snug text-coral-deep">
              {about.subtitle}
            </p>
            <p className="mx-auto mt-3 max-w-[520px] text-[14.5px] leading-relaxed text-ink-soft">{about.text}</p>
          </Reveal>

          <Reveal y={0} scale={0.96} className="relative mx-auto mt-5 w-[82%] max-w-[340px]">
            <div className="relative" style={{ aspectRatio: image ? `${image.width} / ${image.height}` : "3 / 2" }}>
              <div aria-hidden="true" className="absolute -left-[3%] top-[8%] h-full w-full rounded-[52px_52px_20px_20px] bg-lav-soft" />
              <ShapedImage
                image={image}
                alt="«Алан» бөбекжай-балабақшасындағы күнделікті өмір"
                shape="dome"
                tone="lav"
                sizes="(min-width: 640px) 340px, 82vw"
                className="absolute inset-0 shadow-card ring-4 ring-white"
              />
              <Float className="-top-3 right-[2%] w-6" twinkle>
                <Star color="#FFC857" />
              </Float>
              <Float className="-left-2 bottom-[22%] w-6" delay={0.6}>
                <Flower color="#FF9478" />
              </Float>
              <div className="absolute -bottom-3.5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-sun px-3.5 py-1.5 font-display text-[13px] font-bold text-ink shadow-soft">
                <Sparkle className="size-3" color="#263640" />
                1,6 – 6 жас
              </div>
            </div>
          </Reveal>

          <ul className="mx-auto mt-6 grid max-w-[520px] gap-2 md:max-w-[720px] md:grid-cols-3">
            {about.features.map((f, i) => {
              const Icon = highlightIcons[f.icon];
              const a = accentClasses[f.accent];
              return (
                <Reveal
                  as="li"
                  key={f.text}
                  y={10}
                  delay={i * 0.06}
                  className={cn("flex items-center gap-2.5 rounded-[18px] p-2.5", a.soft)}
                >
                  <span className={cn("grid size-9 shrink-0 place-items-center rounded-xl bg-white shadow-soft", a.text)}>
                    <Icon className="size-[18px]" aria-hidden="true" />
                  </span>
                  <span className="text-[14px] font-bold leading-snug text-ink">{f.text}</span>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>

      <Wave color="#F4F2FE" variant={3} className="bg-white" />
      <div className="relative overflow-hidden bg-[#F4F2FE] pb-7 pt-2">
        <Float className="right-5 top-1 w-5" twinkle>
          <Star color="#FF9478" />
        </Float>
        <div className="container-site">
          <Reveal y={12} className="text-center">
            <Eyebrow color="lav">6 топ</Eyebrow>
            <h3 className="mt-2 font-display text-[22px] font-extrabold text-ink">{about.groupsTitle}</h3>
            <p className="mx-auto mt-1.5 max-w-[440px] text-[14.5px] leading-relaxed text-ink-soft">{about.groupsText}</p>
          </Reveal>

          <ul className="mx-auto mt-5 grid max-w-[520px] grid-cols-2 gap-2 min-[400px]:gap-2.5 md:max-w-[720px] md:grid-cols-3">
            {groups.map((g, i) => (
              <Reveal as="li" key={g.name} y={12} delay={(i % 2) * 0.06} className="h-full">
                <GroupCard group={g} index={i} compact />
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
      <Wave color="#FFF9F0" variant={1} className="bg-[#F4F2FE]" />
    </div>
  );
}
