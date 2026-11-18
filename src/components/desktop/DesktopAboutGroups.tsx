import { about, accentClasses, groups } from "@/data/kindergarten";
import type { SiteImage } from "@/lib/images";
import { cn, Float, Flower, Ring, Sparkle, Star, Wave } from "../shared/Decor";
import { GroupCard } from "../shared/GroupCard";
import { highlightIcons } from "../shared/Icons";
import { Reveal, Stagger, StaggerItem } from "../shared/Reveal";
import { Eyebrow, ShapedImage } from "../shared/ui";

export function DesktopAboutGroups({ image }: { image: SiteImage | null }) {
  return (
    <div className="relative">
      {/* Бөлім 1 — Біз туралы */}
      <div className="relative overflow-hidden bg-white">
        <div className="container-site grid grid-cols-[1fr_1.1fr] items-center gap-10 pb-10 pt-6 xl:gap-12 2xl:pb-12 2xl:pt-8">
          <Reveal x={-24} y={0} className="relative mx-auto w-full max-w-[420px] xl:max-w-[450px] 2xl:max-w-[500px]">
            <div className="relative" style={{ aspectRatio: image ? `${image.width} / ${image.height}` : "3 / 2" }}>
              <div aria-hidden="true" className="absolute -left-[4%] top-[7%] h-full w-full rounded-[80px_80px_26px_26px] bg-lav-soft" />
              <ShapedImage
                image={image}
                alt="«Алан» бөбекжай-балабақшасындағы күнделікті өмір"
                shape="dome"
                tone="lav"
                sizes="(min-width: 1536px) 500px, 450px"
                className="absolute inset-0 shadow-card ring-[6px] ring-white"
              />
              <Float className="-right-4 -top-5 w-9" twinkle>
                <Star color="#FFC857" />
              </Float>
              <Float className="-left-6 top-[38%] w-10" delay={0.6}>
                <Flower color="#FF9478" />
              </Float>
              <Float className="-right-6 bottom-[10%] w-11" slow delay={1.4}>
                <Ring color="#5CCBBC" />
              </Float>
              <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-sun px-4 py-1.5 font-display text-[14px] font-bold text-ink shadow-soft">
                <Sparkle className="size-3.5" color="#263640" />
                1,6 – 6 жас
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal y={18}>
              <Eyebrow color="teal">«Алан» туралы</Eyebrow>
              <h2 className="mt-3 font-display text-[32px] font-extrabold leading-[1.12] text-ink xl:text-[34px] 2xl:text-[40px]">
                {about.title}
              </h2>
              <p className="mt-2 font-display text-[17px] font-semibold leading-snug text-coral-deep">{about.subtitle}</p>
              <p className="mt-3 max-w-[560px] text-[15.5px] leading-relaxed text-ink-soft">{about.text}</p>
            </Reveal>

            <Stagger as="ul" className="mt-5 grid grid-cols-3 gap-3">
              {about.features.map((f, i) => {
                const Icon = highlightIcons[f.icon];
                const a = accentClasses[f.accent];
                return (
                  <StaggerItem
                    as="li"
                    key={f.text}
                    hover
                    className={cn(
                      "relative flex flex-col gap-2 p-3.5 ring-1 ring-ink/5",
                      a.soft,
                      i === 0 && "rounded-[22px_22px_22px_8px]",
                      i === 1 && "rounded-[22px]",
                      i === 2 && "rounded-[22px_8px_22px_22px]"
                    )}
                  >
                    <span className={cn("grid size-9 place-items-center rounded-xl bg-white shadow-soft", a.text)}>
                      <Icon className="size-[18px]" aria-hidden="true" />
                    </span>
                    <span className="text-[14px] font-bold leading-snug text-ink">{f.text}</span>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        </div>
      </div>

      {/* Толқынды өту → Бөлім 2 — Топтар */}
      <Wave color="#F4F2FE" variant={3} className="bg-white" />
      <div className="relative overflow-hidden bg-[#F4F2FE] pb-9 pt-3 2xl:pb-12">
        <Float className="left-[6%] top-8 w-7" twinkle>
          <Star color="#FF9478" />
        </Float>
        <Float className="right-[8%] top-12 w-9" delay={0.8}>
          <Flower color="#5CCBBC" />
        </Float>

        <div className="container-site">
          <Reveal y={18} className="mx-auto max-w-2xl text-center">
            <Eyebrow color="lav">6 топ</Eyebrow>
            <h3 className="mt-2 font-display text-[28px] font-extrabold text-ink 2xl:text-[32px]">{about.groupsTitle}</h3>
            <p className="mt-2 text-[15.5px] leading-relaxed text-ink-soft">{about.groupsText}</p>
          </Reveal>

          <Stagger className="mx-auto mt-6 grid max-w-[920px] grid-cols-3 gap-3.5 2xl:max-w-[1000px]">
            {groups.map((g, i) => (
              <StaggerItem key={g.name} hover>
                <GroupCard group={g} index={i} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
      <Wave color="#FFF9F0" variant={1} className="bg-[#F4F2FE]" />
    </div>
  );
}
