import { accentClasses, nutrition } from "@/data/kindergarten";
import { cn, Float, Star, Wave } from "../shared/Decor";
import { mealIcons } from "../shared/Icons";
import { Reveal } from "../shared/Reveal";
import { SectionTitle } from "../shared/ui";

export function MobileNutrition() {
  return (
    <div className="relative">
      <Wave color="#DFF5F1" variant={2} className="bg-cream" />
      <div className="relative overflow-hidden bg-teal-soft pb-7 pt-2">
        <div aria-hidden="true" className="absolute -right-12 top-20 size-36 blob bg-white/45" />
        <Float className="left-4 top-1 w-5" twinkle>
          <Star color="#FFC857" />
        </Float>
        <div className="container-site relative">
          <Reveal y={12}>
            <SectionTitle eyebrow="Күніне 4 мезгіл" color="teal" title={nutrition.title} subtitle={nutrition.text} />
          </Reveal>

          <ol className="mx-auto mt-5 grid max-w-[420px] grid-cols-2 gap-2 md:max-w-[680px] md:grid-cols-4">
            {nutrition.meals.map((m, i) => {
              const Icon = mealIcons[m.icon];
              const a = accentClasses[m.accent];
              return (
                <Reveal
                  as="li"
                  key={m.title}
                  y={10}
                  delay={(i % 2) * 0.06}
                  className="relative flex flex-col items-center rounded-[22px] bg-white px-2 pb-3 pt-3.5 text-center shadow-soft"
                >
                  <span className={cn("relative grid size-[62px] place-items-center rounded-full ring-[5px] ring-cream", a.soft)}>
                    <Icon className={cn("size-7", a.text)} strokeWidth={1.9} aria-hidden="true" />
                    <span
                      className={cn(
                        "absolute -right-2 -top-1 grid size-6 place-items-center rounded-full font-display text-[12px] font-extrabold text-ink ring-2 ring-white",
                        a.bg
                      )}
                    >
                      {i + 1}
                    </span>
                  </span>
                  <h3 className="mt-2.5 font-display text-[15px] font-bold text-ink">{m.title}</h3>
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
