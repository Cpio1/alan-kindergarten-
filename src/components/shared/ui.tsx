import Image from "next/image";
import type { ComponentProps, ReactNode } from "react";
import type { SiteImage } from "@/lib/images";
import { cn, Cloud, Flower, Sparkle, Star } from "./Decor";
import { GroupArt } from "./GroupArt";
import { site } from "@/data/kindergarten";

/* ---------- Батырмалар ---------- */

type BtnVariant = "primary" | "sun" | "ghost" | "white" | "coral";

const btnBase =
  "group/btn inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-full px-6 font-display text-[15px] font-semibold leading-tight transition-[transform,box-shadow,background-color,color] duration-300 ease-out active:scale-[0.97] motion-safe:hover:-translate-y-0.5";

const btnVariants: Record<BtnVariant, string> = {
  primary: "bg-teal-deep text-white shadow-pop hover:bg-[#0f6a5e]",
  sun: "bg-sun text-ink shadow-[0_16px_34px_-18px_rgb(148_98_10/0.7)] hover:bg-[#ffbf3c]",
  coral: "bg-coral-deep text-white shadow-[0_16px_34px_-18px_rgb(194_74_44/0.7)] hover:bg-[#ad3f23]",
  ghost: "bg-white/80 text-ink ring-2 ring-ink/10 backdrop-blur hover:bg-white hover:ring-teal",
  white: "bg-white text-ink shadow-soft hover:shadow-card",
};

export function ButtonLink({
  variant = "primary",
  className,
  children,
  external,
  ...rest
}: ComponentProps<"a"> & { variant?: BtnVariant; external?: boolean }) {
  return (
    <a
      className={cn(btnBase, btnVariants[variant], className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}

/* ---------- Бөлім тақырыбы ---------- */

export function Eyebrow({ children, className, color = "teal" }: { children: ReactNode; className?: string; color?: "teal" | "coral" | "lav" | "sun" }) {
  const map = {
    teal: "bg-teal-soft text-teal-deep",
    coral: "bg-coral-soft text-coral-deep",
    lav: "bg-lav-soft text-lav-deep",
    sun: "bg-sun-soft text-sun-deep",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[13px] font-bold tracking-wide",
        map[color],
        className
      )}
    >
      <Sparkle className="size-3.5" color="currentColor" />
      {children}
    </span>
  );
}

export function SectionTitle({
  title,
  subtitle,
  eyebrow,
  align = "center",
  className,
  color = "teal",
  id,
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  align?: "center" | "left";
  className?: string;
  color?: "teal" | "coral" | "lav" | "sun";
  id?: string;
}) {
  return (
    <div className={cn(align === "center" ? "mx-auto text-center" : "text-left", "max-w-2xl", className)}>
      {eyebrow && <Eyebrow color={color}>{eyebrow}</Eyebrow>}
      <h2
        id={id}
        className={cn(
          "font-display text-[28px] font-extrabold leading-[1.15] text-ink sm:text-[34px] lg:text-[40px]",
          eyebrow && "mt-3"
        )}
      >
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-[16px] leading-relaxed text-ink-soft lg:text-[17px]">{subtitle}</p>}
    </div>
  );
}

/* ---------- Фигуралы сурет ---------- */

export type Shape = "blob" | "arch" | "oval" | "pebble" | "leaf";

const shapeClass: Record<Shape, string> = {
  blob: "blob",
  arch: "rounded-t-[999px] rounded-b-[40px]",
  oval: "rounded-[50%]",
  pebble: "rounded-[46%_54%_42%_58%/58%_44%_56%_42%]",
  leaf: "rounded-[60px_6px_60px_6px] sm:rounded-[90px_10px_90px_10px]",
};

export function ShapedImage({
  image,
  alt,
  shape = "blob",
  className,
  sizes,
  priority,
  morph,
  tone = "teal",
}: {
  image: SiteImage | null;
  alt: string;
  shape?: Shape;
  className?: string;
  sizes: string;
  priority?: boolean;
  morph?: boolean;
  tone?: "teal" | "sun" | "lav" | "coral";
}) {
  return (
    <div
      className={cn(
        "isolate overflow-hidden",
        !/(^|\s)(absolute|fixed)(\s|$)/.test(className ?? "") && "relative",
        shapeClass[shape],
        morph && shape === "blob" && "lg:animate-morph",
        className
      )}
    >
      {image ? (
        <Image
          src={image.src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : (
        <PhotoPlaceholder label={alt} tone={tone} />
      )}
    </div>
  );
}

const toneBg = {
  teal: "from-teal-soft via-[#c9eee8] to-teal/60",
  sun: "from-sun-soft via-[#ffe6a8] to-sun/70",
  lav: "from-lav-soft via-[#dcd8fb] to-lav/70",
  coral: "from-coral-soft via-[#ffd3c6] to-coral/60",
};

/** Фото әлі жүктелмеген кездегі ұқыпты иллюстрация (сынған сурет емес). */
export function PhotoPlaceholder({ label, tone = "teal" }: { label: string; tone?: keyof typeof toneBg }) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn("absolute inset-0 overflow-hidden bg-gradient-to-br", toneBg[tone])}
    >
      <Cloud className="absolute left-[8%] top-[14%] w-[30%] opacity-90" />
      <Cloud className="absolute right-[6%] top-[30%] w-[22%] opacity-80" />
      <Star className="absolute right-[22%] top-[10%] w-[9%]" color="#FFC857" />
      <Sparkle className="absolute left-[18%] bottom-[30%] w-[7%]" color="#FFFFFF" />
      <Flower className="absolute left-[12%] bottom-[12%] w-[16%]" />
      <Flower className="absolute right-[14%] bottom-[16%] w-[11%]" color="#A9A2EF" />
      <GroupArt art="sun" className="absolute left-1/2 top-1/2 w-[34%] -translate-x-1/2 -translate-y-1/2" />
      <svg viewBox="0 0 400 80" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-[22%] w-full" aria-hidden="true">
        <path d="M0 40c80-30 160-30 220 0s120 30 180 0v40H0z" fill="#FFFFFF" opacity=".55" />
      </svg>
    </div>
  );
}

/* ---------- Логотип ---------- */

export function Logo({ image, compact, light }: { image: SiteImage | null; compact?: boolean; light?: boolean }) {
  return (
    <span className="flex min-w-0 items-center gap-2.5">
      {image ? (
        <Image
          src={image.src}
          alt=""
          width={image.width}
          height={image.height}
          sizes="56px"
          priority
          className={cn("w-auto shrink-0 object-contain", compact ? "h-10" : "h-11 lg:h-12")}
        />
      ) : (
        <LogoMark className={cn("shrink-0", compact ? "size-10" : "size-11 lg:size-12")} />
      )}
      <span className="flex min-w-0 flex-col leading-none">
        <span className={cn("font-display text-[20px] font-extrabold tracking-tight lg:text-[22px]", light ? "text-white" : "text-ink")}>
          {site.shortName}
        </span>
        <span className={cn("mt-1 truncate text-[11px] font-semibold lg:text-[12px]", light ? "text-white/80" : "text-ink-soft")}>
          бөбекжай-балабақшасы
        </span>
      </span>
    </span>
  );
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" focusable="false">
      {Array.from({ length: 8 }, (_, i) => (
        <rect key={i} x="22" y="1" width="4" height="9" rx="2" fill="#FFC857" transform={`rotate(${i * 45} 24 24)`} />
      ))}
      <circle cx="24" cy="24" r="15" fill="#5CCBBC" />
      <path d="M17.5 31.5 24 15l6.5 16.5M19.8 26h8.4" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}
