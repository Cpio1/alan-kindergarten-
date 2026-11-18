import { ArrowUpRight } from "lucide-react";
import { accentClasses, activities, activitiesSection, contacts } from "@/data/kindergarten";
import { cn, Float, Flower, Sparkle, Squiggle, Star } from "../shared/Decor";
import { activityIcons } from "../shared/Icons";
import { Reveal, Stagger, StaggerItem } from "../shared/Reveal";
import { SectionTitle } from "../shared/ui";

const shapes = [
  "rounded-[26px_26px_26px_8px]",
  "rounded-[8px_26px_26px_26px]",
  "rounded-[26px_8px_26px_26px]",
  "rounded-[26px_26px_8px_26px]",
  "rounded-[26px_26px_26px_8px]",
  "rounded-[26px_8px_26px_26px]",
];

const iconShapes = ["blob", "rounded-[40%]", "rounded-full", "rounded-[30%_70%_60%_40%/50%_40%_60%_50%]", "rounded-[35%]", "blob"];

export function DesktopActivities() {
  const classes = activities.filter((a) => a.icon !== "bus");
  const transport = activities.find((a) => a.icon === "bus");

  return (
    <div className="relative overflow-hidden bg-cream py-10 2xl:py-14">
      <Float className="left-[4%] top-12 w-8" twinkle>
        <Star color="#A9A2EF" />
      </Float>
      <Float className="right-[5%] top-16 w-10" delay={0.7}>
        <Flower color="#FFC857" center="#FF9478" />
      </Float>

      <div className="container-site">
        <Reveal y={18}>
          <SectionTitle eyebrow="Үйірмелер" color="coral" title={activitiesSection.title} subtitle={activitiesSection.subtitle} />
        </Reveal>

        <Stagger as="ul" className="mx-auto mt-7 grid max-w-[1080px] grid-cols-4 gap-3.5">
          {classes.map((act, i) => {
            const Icon = activityIcons[act.icon];
            const a = accentClasses[act.accent];
            return (
              <StaggerItem
                as="li"
                key={act.title}
                hover
                className={cn(
                  "group/act relative isolate flex flex-col overflow-hidden bg-white p-4 shadow-soft 2xl:p-5 ring-1 ring-ink/5 transition-shadow duration-300 hover:shadow-card",
                  shapes[i % shapes.length]
                )}
              >
                <span aria-hidden="true" className={cn("absolute -right-8 -top-8 -z-10 size-20 rounded-full opacity-60 transition-transform duration-500 group-hover/act:scale-125", a.soft)} />
                <span
                  className={cn(
                    "grid size-11 place-items-center text-white shadow-soft transition-transform duration-500 group-hover/act:-rotate-6 group-hover/act:scale-105",
                    a.bg,
                    iconShapes[i % iconShapes.length]
                  )}
                >
                  <Icon className="size-[22px] text-ink" strokeWidth={2.1} aria-hidden="true" />
                </span>
                <h3 className="mt-3 font-display text-[17px] font-bold text-ink">{act.title}</h3>
                <p className="mt-1 text-[14px] leading-snug text-ink-soft">{act.text}</p>
                <Squiggle className="mt-auto w-10 pt-3 opacity-80" color={a.fill} />
              </StaggerItem>
            );
          })}

          {transport && (
            <StaggerItem
              as="li"
              hover
              className="relative isolate col-span-2 flex items-center gap-5 overflow-hidden rounded-[26px_26px_26px_8px] bg-gradient-to-br from-sun to-[#ffb547] p-4 shadow-soft 2xl:p-5"
            >
              <Sparkle aria-hidden="true" className="absolute right-5 top-4 size-4" color="#FFFFFF" />
              <span aria-hidden="true" className="absolute -bottom-12 -right-8 -z-10 size-36 rounded-full bg-white/25" />
              <span className="grid size-16 shrink-0 place-items-center blob bg-white shadow-soft">
                {(() => {
                  const Icon = activityIcons.bus;
                  return <Icon className="size-8 text-sun-deep" strokeWidth={2} aria-hidden="true" />;
                })()}
              </span>
              <div className="min-w-0">
                <span className="inline-block rounded-full bg-white/70 px-2.5 py-0.5 text-[11.5px] font-bold text-sun-deep">Қызмет</span>
                <h3 className="mt-1.5 font-display text-[18px] font-bold text-ink">{transport.title}</h3>
                <p className="mt-1 text-[14px] leading-snug text-ink/80">{transport.text}</p>
                <a
                  href={contacts.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2.5 inline-flex min-h-[40px] items-center gap-1.5 rounded-full bg-ink px-4 font-display text-[13.5px] font-semibold text-white transition-transform hover:-translate-y-0.5"
                >
                  Сұрау жіберу
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              </div>
            </StaggerItem>
          )}
        </Stagger>
      </div>
    </div>
  );
}
