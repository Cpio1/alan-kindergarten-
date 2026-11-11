import { accentClasses, type groups } from "@/data/kindergarten";
import { cn, Sparkle } from "./Decor";
import { GroupArt } from "./GroupArt";

type Group = (typeof groups)[number];

const corners = [
  "rounded-[36px_36px_36px_12px]",
  "rounded-[36px_12px_36px_36px]",
  "rounded-[12px_36px_36px_36px]",
  "rounded-[36px_36px_12px_36px]",
  "rounded-[36px_12px_36px_36px]",
  "rounded-[36px_36px_36px_12px]",
];

const cardBg: Record<Group["accent"], string> = {
  teal: "bg-gradient-to-br from-teal-soft to-[#c6eee7]",
  sun: "bg-gradient-to-br from-sun-soft to-[#ffe4a3]",
  coral: "bg-gradient-to-br from-coral-soft to-[#ffd2c4]",
  lav: "bg-gradient-to-br from-lav-soft to-[#d9d5fb]",
};

export function GroupCard({ group, index, compact }: { group: Group; index: number; compact?: boolean }) {
  const a = accentClasses[group.accent];
  const num = group.name.match(/\d+/)?.[0] ?? String(index + 1);
  return (
    <div
      className={cn(
        "group/card relative isolate h-full overflow-hidden ring-1 ring-white/70",
        cardBg[group.accent],
        compact ? "rounded-[26px] p-4" : cn(corners[index % corners.length], "p-6 xl:p-7"),
        !compact && "transition-shadow duration-300 hover:shadow-card"
      )}
    >
      {/* Фондағы үлкен сан */}
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -z-10 font-display font-black leading-none text-white/70",
          compact ? "-bottom-3 right-2 text-[84px]" : "-bottom-6 right-4 text-[150px]"
        )}
      >
        {num}
      </span>
      <Sparkle
        className={cn("absolute", compact ? "right-3 top-3 size-3.5" : "right-6 top-6 size-5 transition-transform duration-500 group-hover/card:rotate-90")}
        color="#FFFFFF"
      />

      <div className={cn("flex", compact ? "flex-col items-start gap-3" : "flex-col items-start gap-5")}>
        <span
          className={cn(
            "grid place-items-center bg-white shadow-soft blob",
            compact ? "size-[60px]" : "size-[96px] transition-transform duration-500 group-hover/card:scale-105 group-hover/card:-rotate-6"
          )}
        >
          <GroupArt art={group.art} className={compact ? "size-11" : "size-[72px]"} />
        </span>
        <div>
          <h4 className={cn("font-display font-extrabold text-ink", compact ? "text-[20px]" : "text-[26px]")}>{group.name}</h4>
          <span
            className={cn(
              "mt-1.5 inline-block h-1.5 rounded-full",
              a.bg,
              compact ? "w-8" : "w-10 transition-[width] duration-500 group-hover/card:w-16"
            )}
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}
