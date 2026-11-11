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
        <div className="container-site grid grid-cols-[0.92fr_1.08fr] items-center gap-12 pb-16 pt-8 xl:gap-16 xl:pb-20 xl:pt-10">
          <Reveal x={-24} y={0} className="relative mx-auto w-full max-w-[460px]">
            <div className="relative aspect-[4/4.6]">
              <div aria-hidden="true" className="absolute -left-[6%] top-[8%] h-[88%] w-[96%] rounded-t-[999px] rounded-b-[48px] bg-lav-soft" />
              <ShapedImage
                image={image}
                alt="«Алан» бөбекжай-балабақшасындағы күнделікті өмір"
                shape="arch"
                tone="lav"
                sizes="(min-width: 1280px) 460px, 40vw"
                className="absolute inset-0 shadow-card ring-8 ring-white"
              />
              <Float className="-right-6 top-[12%] w-14" twinkle>
                <Star color="#FFC857" />
              </Float>
              <Float className="-left-8 bottom-[18%] w-16" delay={0.6}>
                <Flower color="#FF9478" />
              </Float>
              <Float className="-right-10 bottom-[8%] w-20" slow delay={1.4}>
                <Ring color="#5CCBBC" />
              </Float>
              <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-sun px-5 py-2.5 font-display text-[15px] font-bold text-ink shadow-soft">
                <Sparkle className="size-4" color="#263640" />
                1,6 – 6 жас
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal y={18}>
              <Eyebrow color="teal">«Алан» туралы</Eyebrow>
              <h2 className="mt-4 font-display text-[40px] font-extrabold leading-[1.12] text-ink xl:text-[46px]">
                {about.title}
              </h2>
              <p className="mt-3 font-display text-[20px] font-semibold leading-snug text-coral-deep">{about.subtitle}</p>
              <p className="mt-5 max-w-[580px] text-[17px] leading-relaxed text-ink-soft">{about.text}</p>
            </Reveal>

            <Stagger as="ul" className="mt-8 grid grid-cols-3 gap-3.5">
              {about.features.map((f, i) => {
                const Icon = highlightIcons[f.icon];
                const a = accentClasses[f.accent];
                return (
                  <StaggerItem
                    as="li"
                    key={f.text}
                    hover
                    className={cn(
                      "relative flex flex-col gap-3 p-4 ring-1 ring-ink/5 xl:p-5",
                      a.soft,
                      i === 0 && "rounded-[28px_28px_28px_10px]",
                      i === 1 && "rounded-[28px]",
                      i === 2 && "rounded-[28px_10px_28px_28px]"
                    )}
                  >
                    <span className={cn("grid size-11 place-items-center rounded-2xl bg-white shadow-soft", a.text)}>
                      <Icon className="size-[22px]" aria-hidden="true" />
                    </span>
                    <span className="text-[15px] font-bold leading-snug text-ink">{f.text}</span>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        </div>
      </div>

      {/* Толқынды өту → Бөлім 2 — Топтар */}
      <Wave color="#F4F2FE" variant={3} className="bg-white" />
      <div className="relative overflow-hidden bg-[#F4F2FE] pb-16 pt-6 xl:pb-20">
        <Float className="left-[6%] top-10 w-10" twinkle>
          <Star color="#FF9478" />
        </Float>
        <Float className="right-[8%] top-16 w-12" delay={0.8}>
          <Flower color="#5CCBBC" />
        </Float>

        <div className="container-site">
          <Reveal y={18} className="mx-auto max-w-2xl text-center">
            <Eyebrow color="lav">6 топ</Eyebrow>
            <h3 className="mt-3 font-display text-[34px] font-extrabold text-ink xl:text-[38px]">{about.groupsTitle}</h3>
            <p className="mt-3 text-[17px] leading-relaxed text-ink-soft">{about.groupsText}</p>
          </Reveal>

          <Stagger className="mt-10 grid grid-cols-3 gap-5 xl:gap-6">
            {groups.map((g, i) => (
              <StaggerItem key={g.name} hover>
                <GroupCard group={g} index={i} />
              </StaggerItem>
            ))}
          </Stagger>

          <p className="mt-8 text-center text-[14px] font-semibold text-ink-soft">{about.groupsNote}</p>
        </div>
      </div>
      <Wave color="#FFF9F0" variant={1} className="bg-[#F4F2FE]" />
    </div>
  );
}
