import { accentClasses, type groups } from "@/data/kindergarten";
import { cn, Sparkle, Star } from "./Decor";
import { GroupArt } from "./GroupArt";

type Group = (typeof groups)[number];

const corners = [
  "rounded-[32px_32px_32px_12px]",
  "rounded-[32px_12px_32px_32px]",
  "rounded-[12px_32px_32px_32px]",
  "rounded-[32px_32px_12px_32px]",
  "rounded-[32px_12px_32px_32px]",
  "rounded-[32px_32px_32px_12px]",
];

const compactCorners = [
  "rounded-[24px_24px_24px_8px]",
  "rounded-[24px_8px_24px_24px]",
  "rounded-[8px_24px_24px_24px]",
  "rounded-[24px_24px_8px_24px]",
  "rounded-[24px_24px_24px_8px]",
  "rounded-[24px_8px_24px_24px]",
];

const cardBg: Record<Group["accent"], string> = {
  teal: "bg-gradient-to-br from-teal-soft to-[#c6eee7]",
  sun: "bg-gradient-to-br from-sun-soft to-[#ffe4a3]",
  coral: "bg-gradient-to-br from-coral-soft to-[#ffd2c4]",
  lav: "bg-gradient-to-br from-lav-soft to-[#d9d5fb]",
};

/** «Жұлдыз тобы» → { main: "Жұлдыз", suffix: "тобы" } */
function splitName(name: string) {
  const parts = name.trim().split(/\s+/);
  if (parts.length > 1 && /^тобы$/i.test(parts[parts.length - 1])) {
    return { main: parts.slice(0, -1).join(" "), suffix: parts[parts.length - 1] };
  }
  return { main: name, suffix: "" };
}

export function GroupCard({ group, index, compact }: { group: Group; index: number; compact?: boolean }) {
  const a = accentClasses[group.accent];
  const { main, suffix } = splitName(group.name);

  const age = (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-white font-display font-bold shadow-soft",
        a.text,
        compact ? "px-2 py-0.5 text-[12px]" : "px-3 py-1 text-[13px]"
      )}
    >
      <span className={cn("rounded-full", a.bg, compact ? "size-1.5" : "size-1.5")} aria-hidden="true" />
      {group.age}
    </span>
  );

  return (
    <div
      className={cn(
        "group/card relative isolate h-full overflow-hidden ring-1 ring-white/70",
        cardBg[group.accent],
        compact ? cn(compactCorners[index % compactCorners.length], "p-3") : cn(corners[index % corners.length], "p-4 2xl:p-5"),
        !compact && "transition-shadow duration-300 hover:shadow-card"
      )}
    >
      {/* Фондағы үлкен сан және жеңіл декор */}
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -z-10 font-display font-black leading-none text-white/60",
          compact ? "-bottom-2 right-2 text-[52px]" : "-bottom-4 right-4 text-[84px]"
        )}
      >
        {index + 1}
      </span>
      <Sparkle
        className={cn(
          "absolute",
          compact ? "right-2.5 top-2.5 size-2.5" : "right-4 top-4 size-3.5 transition-transform duration-500 group-hover/card:rotate-90"
        )}
        color="#FFFFFF"
      />
      {!compact && <Star className="absolute right-10 top-8 size-2 opacity-80" color="#FFFFFF" />}

      {compact ? (
        <div className="flex h-full flex-col items-start">
          <span className="grid size-[44px] place-items-center bg-white shadow-soft blob">
            <GroupArt art={group.art} className="size-8" />
          </span>
          <h4 className="mt-2 font-display font-extrabold leading-[1.1] text-ink [overflow-wrap:anywhere]">
            <span className="block text-[clamp(15px,4.2vw,17px)]">{main}</span>
            {suffix && <span className="block text-[12px] font-bold text-ink-soft">{suffix}</span>}
          </h4>
          <div className="mt-auto pt-2">{age}</div>
        </div>
      ) : (
        <div className="flex items-center gap-3.5">
          <span className="grid size-[58px] shrink-0 place-items-center bg-white shadow-soft blob transition-transform duration-500 group-hover/card:-rotate-6 group-hover/card:scale-105 2xl:size-[66px]">
            <GroupArt art={group.art} className="size-[42px] 2xl:size-[48px]" />
          </span>
          <div className="min-w-0">
            <h4 className="font-display font-extrabold leading-[1.1] text-ink">
              <span className="block text-[18px] 2xl:text-[20px]">{main}</span>
              {suffix && <span className="mt-0.5 block text-[13px] font-bold text-ink-soft">{suffix}</span>}
            </h4>
            <div className="mt-2">{age}</div>
          </div>
        </div>
      )}
    </div>
  );
}
