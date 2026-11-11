import { ArrowUpRight } from "lucide-react";
import { accentClasses, activities, activitiesSection, contacts } from "@/data/kindergarten";
import { cn, Float, Sparkle, Star } from "../shared/Decor";
import { activityIcons } from "../shared/Icons";
import { Reveal } from "../shared/Reveal";
import { SectionTitle } from "../shared/ui";

export function MobileActivities() {
  const classes = activities.filter((a) => a.icon !== "bus");
  const transport = activities.find((a) => a.icon === "bus");

  return (
    <div className="relative overflow-hidden bg-cream py-10">
      <Float className="right-4 top-6 w-7" twinkle>
        <Star color="#A9A2EF" />
      </Float>
      <div className="container-site">
        <Reveal y={12}>
          <SectionTitle eyebrow="Үйірмелер" color="coral" title={activitiesSection.title} subtitle={activitiesSection.subtitle} />
        </Reveal>

        <ul className="mx-auto mt-7 grid max-w-[680px] gap-3 min-[560px]:grid-cols-2">
          {classes.map((act, i) => {
            const Icon = activityIcons[act.icon];
            const a = accentClasses[act.accent];
            return (
              <Reveal
                as="li"
                key={act.title}
                y={10}
                delay={(i % 2) * 0.05}
                className={cn(
                  "relative flex items-start gap-3.5 overflow-hidden bg-white p-4 shadow-soft ring-1 ring-ink/5",
                  i % 2 === 0 ? "rounded-[24px_24px_24px_8px]" : "rounded-[24px_8px_24px_24px]"
                )}
              >
                <span aria-hidden="true" className={cn("absolute -right-6 -top-6 size-16 rounded-full opacity-60", a.soft)} />
                <span className={cn("relative grid size-12 shrink-0 place-items-center blob", a.bg)}>
                  <Icon className="size-6 text-ink" strokeWidth={2.1} aria-hidden="true" />
                </span>
                <div className="relative min-w-0">
                  <h3 className="font-display text-[17px] font-bold text-ink">{act.title}</h3>
                  <p className="mt-1 text-[14.5px] leading-snug text-ink-soft">{act.text}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>

        {transport && (
          <Reveal
            y={10}
            className="relative mx-auto mt-3 max-w-[680px] overflow-hidden rounded-[26px] bg-gradient-to-br from-sun to-[#ffb547] p-5 shadow-soft"
          >
            <Sparkle aria-hidden="true" className="absolute right-4 top-4 size-4" color="#FFFFFF" />
            <div className="flex items-center gap-3.5">
              <span className="grid size-14 shrink-0 place-items-center blob bg-white">
                {(() => {
                  const Icon = activityIcons.bus;
                  return <Icon className="size-7 text-sun-deep" aria-hidden="true" />;
                })()}
              </span>
              <h3 className="font-display text-[18px] font-bold leading-tight text-ink">{transport.title}</h3>
            </div>
            <p className="mt-3 text-[14.5px] leading-snug text-ink/80">{transport.text}</p>
            <a
              href={contacts.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex min-h-[46px] w-full items-center justify-center gap-1.5 rounded-full bg-ink px-4 font-display text-[15px] font-semibold text-white"
            >
              Сұрау жіберу
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </Reveal>
        )}
      </div>
    </div>
  );
}
