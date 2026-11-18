"use client";

import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Expand, ImageIcon } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { gallerySection } from "@/data/kindergarten";
import type { SiteImage } from "@/lib/images";
import { cn, Flower, Sparkle, Star } from "./Decor";
import { Lightbox } from "./Lightbox";
import { PhotoPlaceholder } from "./ui";

/**
 * Галерея «justified» қатарлармен құрылады: бір қатардағы суреттердің биіктігі бірдей,
 * ал ені әр суреттің өз пропорциясына тең. Сондықтан фото ешқашан созылмайды
 * және кесілмейді, ал қатарлардағы сурет саны әртүрлі болғандықтан өлшемдері де алуан.
 *
 * Desktop: «ірі» қатар (2–3 сурет) мен «ықшам» қатар (3–4 сурет) алмасады.
 * Mobile: бір кең сурет, содан кейін жұп-жұп қатарлар — бөлек ықшам композиция.
 */
type Layout = { targets: number[]; maxPerRow: number };

const layouts: Record<"desktop" | "mobile", Layout> = {
  // targets — қатардағы пропорциялар қосындысы: үлкен болса, қатар аласа әрі суреттер көп.
  desktop: { targets: [4.4, 5.6], maxPerRow: 5 },
  mobile: { targets: [2.6], maxPerRow: 2 },
};

type Item = { img: SiteImage; index: number; ratio: number };
/** fill — қатардың толу үлесі (1 = толық ен). Соңғы қысқа қатар созылмай, ортада тұрады. */
type Row = { items: Item[]; fill: number };

const ratioOf = (img: SiteImage) => Math.min(Math.max(img.width / img.height, 0.6), 2.2);

function buildRows(items: Item[], { targets, maxPerRow }: Layout, offset = 0, allowShortLast = true): Row[] {
  const rows: Row[] = [];
  let row: Item[] = [];
  let sum = 0;
  const target = () => targets[(rows.length + offset) % targets.length];
  for (const it of items) {
    // Келесі сурет қатарды мақсатқа жақындатпаса — қатарды жабамыз.
    if (row.length && (row.length >= maxPerRow || Math.abs(sum + it.ratio - target()) > Math.abs(sum - target()))) {
      rows.push({ items: row, fill: 1 });
      row = [];
      sum = 0;
    }
    row.push(it);
    sum += it.ratio;
  }
  if (row.length) {
    const t = target();
    rows.push({ items: row, fill: allowShortLast && sum < t * 0.85 ? sum / t : 1 });
  }
  return rows;
}

/** Әр суретке әртүрлі органикалық бұрыштар. */
const desktopRadius = [
  "rounded-[28px_28px_28px_10px]",
  "rounded-[20px]",
  "rounded-[10px_28px_28px_28px]",
  "rounded-[28px_10px_28px_28px]",
  "rounded-[22px]",
  "rounded-[28px_28px_10px_28px]",
  "rounded-[36px_18px_36px_18px]",
];
const mobileRadius = ["rounded-[20px_20px_20px_7px]", "rounded-[16px]", "rounded-[7px_20px_20px_20px]", "rounded-[20px_7px_20px_20px]"];

export function Gallery({ images, variant }: { images: SiteImage[]; variant: "desktop" | "mobile" }) {
  const [expanded, setExpanded] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const initial = gallerySection.initialCount;
  const hasMore = images.length > initial;
  const isDesktop = variant === "desktop";

  // Алғашқы 6 сурет өз алдына толық қатарлар құрайды — «Тағы көрсету» басылғанда
  // жоғарғы бөлік қайта орналаспайды, жаңа қатарлар тек төменнен қосылады.
  const { firstRows, restRows } = useMemo(() => {
    const items = images.map((img, index) => ({ img, index, ratio: ratioOf(img) }));
    const layout = layouts[variant];
    const firstRows = buildRows(items.slice(0, initial), layout, 0, images.length <= initial);
    const restRows = buildRows(items.slice(initial), layout, firstRows.length);
    return { firstRows, restRows };
  }, [images, initial, variant]);

  if (!images.length) return <GalleryEmpty desktop={isDesktop} />;

  const gap = isDesktop ? "gap-3" : "gap-2";
  const radius = isDesktop ? desktopRadius : mobileRadius;
  const sizesFor = (row: Row, it: Item) => {
    const share = (it.ratio / row.items.reduce((s, r) => s + r.ratio, 0)) * row.fill;
    const vw = Math.max(20, Math.round(share * 100));
    return isDesktop ? `(min-width: 1280px) ${Math.round(share * 840)}px, ${vw}vw` : `${vw}vw`;
  };

  const renderRows = (rows: Row[], animateFrom: number) =>
    rows.map((row, r) => (
      <motion.ul
        key={row.items[0].img.src}
        className={cn("flex w-full", gap, row.fill < 1 && "mx-auto")}
        style={row.fill < 1 ? { width: `${(row.fill * 100).toFixed(2)}%` } : undefined}
        initial="hidden"
        whileInView="show"
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
        viewport={{ once: true, margin: "0px 0px -6% 0px" }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: animateFrom ? 0.05 : 0 } } }}
      >
        {row.items.map((it) => (
          <motion.li
            key={it.img.src}
            variants={{
              hidden: { opacity: 0, y: isDesktop ? 22 : 14, scale: 0.96 },
              show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
            }}
            className={cn("relative min-w-0 overflow-hidden bg-cream-deep shadow-soft", radius[(it.index + r) % radius.length])}
            style={{ flex: `${it.ratio} 1 0%`, aspectRatio: String(it.ratio) }}
          >
            <Thumb img={it.img} index={it.index} onOpen={setLightbox} sizes={sizesFor(row, it)} />
          </motion.li>
        ))}
      </motion.ul>
    ));

  return (
    <>
      <div className={cn("flex flex-col", gap, isDesktop && "mx-auto max-w-[780px] xl:max-w-[820px] 2xl:max-w-[920px]")}>
        {renderRows(firstRows, 0)}
        <AnimatePresence initial={false}>{expanded && renderRows(restRows, 1)}</AnimatePresence>
      </div>

      {hasMore && (
        <div className={cn("flex justify-center", isDesktop ? "mt-5" : "mt-4")}>
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className={cn(
              "group inline-flex min-h-[44px] items-center gap-2 rounded-full bg-white px-6 font-display text-[14.5px] font-semibold text-ink shadow-soft ring-2 ring-teal/40 transition-all duration-300 hover:ring-teal-deep motion-safe:hover:-translate-y-0.5",
              !isDesktop && "w-full max-w-[320px] justify-center"
            )}
          >
            {expanded ? gallerySection.less : gallerySection.more}
            {!expanded && <span className="text-ink-soft">(+{images.length - initial})</span>}
            <ChevronDown className={cn("size-5 transition-transform duration-300", expanded && "rotate-180")} aria-hidden="true" />
          </button>
        </div>
      )}

      <Lightbox images={images} index={lightbox} onClose={() => setLightbox(null)} onChange={setLightbox} />
    </>
  );
}

function Thumb({
  img,
  index,
  onOpen,
  sizes,
}: {
  img: SiteImage;
  index: number;
  onOpen: (i: number) => void;
  sizes: string;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(index)}
      className="group/thumb absolute inset-0 block size-full cursor-zoom-in"
      aria-label={`Фотоны үлкейту: ${index + 1}`}
    >
      <Image
        src={img.src}
        alt={`Балабақша өмірінен фото ${index + 1}`}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-700 ease-out group-hover/thumb:scale-[1.04]"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/thumb:opacity-100" />
      <span className="absolute bottom-3 right-3 hidden size-10 scale-75 place-items-center rounded-full bg-white/95 text-ink opacity-0 shadow-soft transition-all duration-300 group-hover/thumb:scale-100 group-hover/thumb:opacity-100 lg:grid">
        <Expand className="size-4" aria-hidden="true" />
      </span>
    </button>
  );
}

function GalleryEmpty({ desktop }: { desktop: boolean }) {
  return (
    <div
      className={cn(
        "relative mx-auto overflow-hidden bg-white text-center shadow-soft ring-1 ring-ink/5",
        desktop ? "grid max-w-[980px] grid-cols-[1fr_1.1fr] items-center gap-10 rounded-[48px_48px_48px_14px] p-10 text-left" : "max-w-[520px] rounded-[32px] p-5"
      )}
    >
      <div className={cn("grid grid-cols-3 gap-2.5", desktop ? "h-[260px]" : "h-[150px]")} aria-hidden="true">
        <div className="relative col-span-2 overflow-hidden rounded-[28px_28px_28px_8px]">
          <PhotoPlaceholder label="" tone="teal" />
        </div>
        <div className="grid gap-2.5">
          <div className="relative overflow-hidden rounded-[999px_999px_20px_20px]">
            <PhotoPlaceholder label="" tone="coral" />
          </div>
          <div className="relative overflow-hidden rounded-[20px]">
            <PhotoPlaceholder label="" tone="lav" />
          </div>
        </div>
      </div>
      <div className={desktop ? "" : "mt-5"}>
        <span className={cn("inline-grid size-12 place-items-center blob bg-sun-soft text-sun-deep", !desktop && "mx-auto")}>
          <ImageIcon className="size-6" aria-hidden="true" />
        </span>
        <h3 className={cn("mt-3 font-display font-bold text-ink", desktop ? "text-[26px]" : "text-[19px]")}>
          {gallerySection.emptyTitle}
        </h3>
        <p className={cn("mt-2 leading-relaxed text-ink-soft", desktop ? "text-[16px]" : "text-[14.5px]")}>{gallerySection.emptyText}</p>
      </div>
      <Star className="absolute right-6 top-6 size-6" color="#FFC857" />
      <Sparkle className="absolute bottom-6 right-10 size-4" color="#A9A2EF" />
      {desktop && <Flower className="absolute -bottom-4 left-[46%] size-12" color="#FF9478" />}
    </div>
  );
}
