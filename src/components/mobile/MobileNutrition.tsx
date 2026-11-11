import { accentClasses, nutrition } from "@/data/kindergarten";
import { cn, Float, Star, Wave } from "../shared/Decor";
import { mealIcons } from "../shared/Icons";
import { Reveal } from "../shared/Reveal";
import { SectionTitle } from "../shared/ui";

export function MobileNutrition() {
  return (
    <div className="relative">
      <Wave color="#DFF5F1" variant={2} className="bg-cream" />
      <div className="relative overflow-hidden bg-teal-soft pb-10 pt-4">
        <div aria-hidden="true" className="absolute -right-16 top-24 size-48 blob bg-white/45" />
        <Float className="left-4 top-2 w-7" twinkle>
          <Star color="#FFC857" />
        </Float>
        <div className="container-site relative">
          <Reveal y={12}>
            <SectionTitle eyebrow="Күніне 4 мезгіл" color="teal" title={nutrition.title} subtitle={nutrition.text} />
          </Reveal>

          <ol className="mx-auto mt-7 grid max-w-[460px] grid-cols-2 gap-3 md:max-w-[680px] md:grid-cols-4">
            {nutrition.meals.map((m, i) => {
              const Icon = mealIcons[m.icon];
              const a = accentClasses[m.accent];
              return (
                <Reveal
                  as="li"
                  key={m.title}
                  y={10}
                  delay={(i % 2) * 0.06}
                  className="relative flex flex-col items-center rounded-[28px] bg-white px-3 pb-4 pt-5 text-center shadow-soft"
                >
                  <span className={cn("relative grid size-[84px] place-items-center rounded-full ring-8 ring-cream", a.soft)}>
                    <Icon className={cn("size-9", a.text)} strokeWidth={1.9} aria-hidden="true" />
                    <span
                      className={cn(
                        "absolute -right-2 -top-1 grid size-8 place-items-center rounded-full font-display text-[14px] font-extrabold text-ink ring-[3px] ring-white",
                        a.bg
                      )}
                    >
                      {i + 1}
                    </span>
                  </span>
                  <h3 className="mt-3 font-display text-[17px] font-bold text-ink">{m.title}</h3>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
      <Wave color="#FFF9F0" variant={3} className="bg-teal-soft" />
    </div>
  );
}
