import { ArrowUpRight } from "lucide-react";
import { accentClasses, activities, activitiesSection, contacts } from "@/data/kindergarten";
import { cn, Float, Flower, Sparkle, Squiggle, Star } from "../shared/Decor";
import { activityIcons } from "../shared/Icons";
import { Reveal, Stagger, StaggerItem } from "../shared/Reveal";
import { SectionTitle } from "../shared/ui";

const shapes = [
  "rounded-[32px_32px_32px_10px]",
  "rounded-[10px_32px_32px_32px]",
  "rounded-[32px_10px_32px_32px]",
  "rounded-[32px_32px_10px_32px]",
  "rounded-[32px_32px_32px_10px]",
  "rounded-[32px_10px_32px_32px]",
];

const iconShapes = ["blob", "rounded-[40%]", "rounded-full", "rounded-[30%_70%_60%_40%/50%_40%_60%_50%]", "rounded-[35%]", "blob"];

export function DesktopActivities() {
  const classes = activities.filter((a) => a.icon !== "bus");
  const transport = activities.find((a) => a.icon === "bus");

  return (
    <div className="relative overflow-hidden bg-cream py-16 xl:py-20">
      <Float className="left-[4%] top-16 w-12" twinkle>
        <Star color="#A9A2EF" />
      </Float>
      <Float className="right-[5%] top-24 w-14" delay={0.7}>
        <Flower color="#FFC857" center="#FF9478" />
      </Float>

      <div className="container-site">
        <Reveal y={18}>
          <SectionTitle eyebrow="Үйірмелер" color="coral" title={activitiesSection.title} subtitle={activitiesSection.subtitle} />
        </Reveal>

        <Stagger as="ul" className="mt-12 grid grid-cols-4 gap-5">
          {classes.map((act, i) => {
            const Icon = activityIcons[act.icon];
            const a = accentClasses[act.accent];
            return (
              <StaggerItem
                as="li"
                key={act.title}
                hover
                className={cn(
                  "group/act relative isolate flex flex-col overflow-hidden bg-white p-6 shadow-soft ring-1 ring-ink/5 transition-shadow duration-300 hover:shadow-card",
                  shapes[i % shapes.length]
                )}
              >
                <span aria-hidden="true" className={cn("absolute -right-10 -top-10 -z-10 size-28 rounded-full opacity-60 transition-transform duration-500 group-hover/act:scale-125", a.soft)} />
                <span
                  className={cn(
                    "grid size-14 place-items-center text-white shadow-soft transition-transform duration-500 group-hover/act:-rotate-6 group-hover/act:scale-105",
                    a.bg,
                    iconShapes[i % iconShapes.length]
                  )}
                >
                  <Icon className="size-7 text-ink" strokeWidth={2.1} aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-[20px] font-bold text-ink">{act.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{act.text}</p>
                <Squiggle className="mt-auto w-14 pt-5 opacity-80" color={a.fill} />
              </StaggerItem>
            );
          })}

          {transport && (
            <StaggerItem
              as="li"
              hover
              className="relative isolate col-span-2 flex items-center gap-6 overflow-hidden rounded-[32px_32px_32px_10px] bg-gradient-to-br from-sun to-[#ffb547] p-6 shadow-soft"
            >
              <Sparkle aria-hidden="true" className="absolute right-6 top-5 size-5" color="#FFFFFF" />
              <span aria-hidden="true" className="absolute -bottom-16 -right-10 -z-10 size-48 rounded-full bg-white/25" />
              <span className="grid size-20 shrink-0 place-items-center blob bg-white shadow-soft">
                {(() => {
                  const Icon = activityIcons.bus;
                  return <Icon className="size-10 text-sun-deep" strokeWidth={2} aria-hidden="true" />;
                })()}
              </span>
              <div className="min-w-0">
                <span className="inline-block rounded-full bg-white/70 px-3 py-1 text-[12px] font-bold text-sun-deep">Қызмет</span>
                <h3 className="mt-2 font-display text-[21px] font-bold text-ink">{transport.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-ink/80">{transport.text}</p>
                <a
                  href={contacts.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex min-h-[44px] items-center gap-1.5 rounded-full bg-ink px-4 font-display text-[14px] font-semibold text-white transition-transform hover:-translate-y-0.5"
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
