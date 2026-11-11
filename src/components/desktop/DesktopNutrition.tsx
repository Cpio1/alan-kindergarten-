import { accentClasses, nutrition } from "@/data/kindergarten";
import { cn, Float, Flower, Sparkle, Star, Wave } from "../shared/Decor";
import { mealIcons } from "../shared/Icons";
import { Reveal, Stagger, StaggerItem } from "../shared/Reveal";
import { SectionTitle } from "../shared/ui";

const offsets = ["mt-0", "mt-10", "mt-0", "mt-10"];

export function DesktopNutrition() {
  return (
    <div className="relative">
      <Wave color="#DFF5F1" variant={2} className="bg-cream" />
      <div className="relative overflow-hidden bg-teal-soft pb-20 pt-8">
        <div aria-hidden="true" className="absolute -left-24 top-10 size-72 blob bg-white/40" />
        <div aria-hidden="true" className="absolute -right-20 bottom-0 size-80 blob bg-white/40" />
        <Float className="left-[10%] top-[22%] w-10" twinkle>
          <Star color="#FFC857" />
        </Float>
        <Float className="right-[9%] top-[18%] w-12" delay={0.6}>
          <Flower color="#FF9478" />
        </Float>

        <div className="container-site relative">
          <Reveal y={18}>
            <SectionTitle eyebrow="Күніне 4 мезгіл" color="teal" title={nutrition.title} subtitle={nutrition.text} />
          </Reveal>

          <div className="relative mt-14">
            {/* Тағамдарды байланыстыратын пунктир жол */}
            <svg
              viewBox="0 0 1000 120"
              preserveAspectRatio="none"
              className="absolute inset-x-[8%] top-[58px] h-[90px] w-[84%]"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M0 40C120 40 150 100 333 100S540 30 666 40 880 100 1000 100"
                stroke="#5CCBBC"
                strokeWidth="4"
                strokeDasharray="2 14"
                strokeLinecap="round"
              />
            </svg>

            <Stagger as="ol" className="relative grid grid-cols-4 gap-6">
              {nutrition.meals.map((m, i) => {
                const Icon = mealIcons[m.icon];
                const a = accentClasses[m.accent];
                return (
                  <StaggerItem as="li" key={m.title} className={cn("flex flex-col items-center text-center", offsets[i])}>
                    <div className="group/meal relative">
                      <span
                        aria-hidden="true"
                        className={cn("absolute inset-0 translate-x-2 translate-y-2 rounded-full opacity-50", a.bg)}
                      />
                      <span
                        className={cn(
                          "relative grid size-[150px] place-items-center rounded-full bg-white shadow-card ring-[10px] transition-transform duration-500 hover:-translate-y-1.5 hover:rotate-3 xl:size-[164px]",
                          i === 0 && "ring-sun-soft",
                          i === 1 && "ring-coral-soft",
                          i === 2 && "ring-teal/25",
                          i === 3 && "ring-lav-soft"
                        )}
                      >
                        <span className={cn("grid size-[92px] place-items-center blob", a.soft)}>
                          <Icon className={cn("size-11", a.text)} strokeWidth={1.9} aria-hidden="true" />
                        </span>
                      </span>
                      <span
                        className={cn(
                          "absolute -right-1 top-2 grid size-10 place-items-center rounded-full font-display text-[17px] font-extrabold text-ink shadow-soft ring-4 ring-white",
                          a.bg
                        )}
                      >
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="mt-6 font-display text-[22px] font-bold text-ink">{m.title}</h3>
                    <Sparkle className="mt-2 size-4" color={a.fill} />
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        </div>
      </div>
      <Wave color="#FFF9F0" variant={3} className="bg-teal-soft" />
    </div>
  );
}
