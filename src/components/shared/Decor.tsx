import type { CSSProperties, ReactNode } from "react";

type ShapeProps = { className?: string; color?: string; style?: CSSProperties };

export function cn(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

export function Star({ className, color = "#FFC857", style }: ShapeProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden="true" focusable="false">
      <path
        d="M12 2.8l2.55 5.9 6.4.6-4.85 4.25 1.45 6.3L12 16.55 6.45 19.85l1.45-6.3L3.05 9.3l6.4-.6z"
        fill={color}
        stroke={color}
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Sparkle({ className, color = "#A9A2EF", style }: ShapeProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden="true" focusable="false">
      <path d="M12 0c1 8 4 11 12 12-8 1-11 4-12 12-1-8-4-11-12-12 8-1 11-4 12-12z" fill={color} />
    </svg>
  );
}

export function Flower({ className, color = "#FF9478", center = "#FFC857", style }: ShapeProps & { center?: string }) {
  const petals = Array.from({ length: 5 }, (_, i) => {
    const a = (i * 72 - 90) * (Math.PI / 180);
    return { cx: 20 + Math.cos(a) * 9.5, cy: 20 + Math.sin(a) * 9.5 };
  });
  return (
    <svg viewBox="0 0 40 40" className={className} style={style} aria-hidden="true" focusable="false">
      {petals.map((p, i) => (
        <circle key={i} cx={p.cx.toFixed(2)} cy={p.cy.toFixed(2)} r="7.6" fill={color} />
      ))}
      <circle cx="20" cy="20" r="6.2" fill={center} />
    </svg>
  );
}

export function Cloud({ className, color = "#FFFFFF", style }: ShapeProps) {
  return (
    <svg viewBox="0 0 64 40" className={className} style={style} aria-hidden="true" focusable="false">
      <path
        d="M17 38h33a12 12 0 0 0 1.6-23.9A16 16 0 0 0 21.4 10 11.5 11.5 0 0 0 17 38z"
        fill={color}
      />
    </svg>
  );
}

export function Squiggle({ className, color = "#5CCBBC", style }: ShapeProps) {
  return (
    <svg viewBox="0 0 80 20" preserveAspectRatio="none" className={className} style={style} fill="none" aria-hidden="true" focusable="false">
      <path
        d="M3 12c7-9 12-9 18 0s11 9 18 0 12-9 18 0 11 9 19 0"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Ring({ className, color = "#5CCBBC", style }: ShapeProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} style={style} fill="none" aria-hidden="true" focusable="false">
      <circle cx="20" cy="20" r="15" stroke={color} strokeWidth="5" strokeDasharray="5 6" strokeLinecap="round" />
    </svg>
  );
}

export function Dot({ className, color = "#FFC857", style }: ShapeProps) {
  return (
    <span
      className={cn("block rounded-full", className)}
      style={{ backgroundColor: color, ...style }}
      aria-hidden="true"
    />
  );
}

/** Плавающая декоративная фигурка (CSS-анимация, без JS). */
export function Float({
  children,
  className,
  delay = 0,
  slow,
  twinkle,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  slow?: boolean;
  twinkle?: boolean;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute block select-none",
        twinkle ? "animate-twinkle" : slow ? "animate-float-slow" : "animate-float",
        className
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </span>
  );
}

/** Волнообразный разделитель секций. */
export function Wave({
  className,
  color = "#FFFFFF",
  variant = 1,
  flip,
}: {
  className?: string;
  color?: string;
  variant?: 1 | 2 | 3;
  flip?: boolean;
}) {
  const paths = {
    1: "M0 40c120-34 260-40 400-14s300 44 460 20 340-56 580-14v48H0z",
    2: "M0 58c160 0 220-46 420-46s280 40 440 40 300-40 580-30v58H0z",
    3: "M0 30c90 22 200 34 330 10S560-6 720 18s310 46 470 22 200-26 250-18v58H0z",
  } as const;
  return (
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className={cn("block h-[34px] w-full sm:h-[48px] lg:h-[64px]", flip && "rotate-180", className)}
      aria-hidden="true"
      focusable="false"
    >
      <path d={paths[variant]} fill={color} />
    </svg>
  );
}
