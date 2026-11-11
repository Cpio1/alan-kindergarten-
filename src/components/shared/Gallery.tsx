"use client";

import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Expand, ImageIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { gallerySection } from "@/data/kindergarten";
import type { SiteImage } from "@/lib/images";
import { cn, Flower, Sparkle, Star } from "./Decor";
import { Lightbox } from "./Lightbox";
import { PhotoPlaceholder } from "./ui";

/** Desktop асимметриялы торы: әр 6 сурет 4 бағанды 3 жолды толық толтырады. */
const desktopSpans = [
  "col-span-2 row-span-2 rounded-[40px_40px_40px_12px]",
  "rounded-[28px]",
  "row-span-2 rounded-[999px_999px_28px_28px]",
  "rounded-[28px_8px_28px_28px]",
  "col-span-2 rounded-[28px_28px_28px_8px]",
  "col-span-2 rounded-[8px_28px_28px_28px]",
];

const mobileRadius = ["rounded-[22px]", "rounded-[22px_22px_22px_6px]", "rounded-[22px_22px_6px_22px]", "rounded-[22px_6px_22px_22px]"];

export function Gallery({ images, variant }: { images: SiteImage[]; variant: "desktop" | "mobile" }) {
  const [expanded, setExpanded] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const initial = gallerySection.initialCount;
  const visible = expanded ? images : images.slice(0, initial);
  const hasMore = images.length > initial;
  const isDesktop = variant === "desktop";

  if (!images.length) return <GalleryEmpty desktop={isDesktop} />;

  return (
    <>
      {isDesktop ? (
        <ul className="grid auto-rows-[190px] grid-flow-dense grid-cols-4 gap-4 xl:auto-rows-[210px] xl:gap-5">
          <AnimatePresence initial={false}>
            {visible.map((img, i) => (
              <motion.li
                key={img.src}
                layout
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                viewport={{ once: true, margin: "0px 0px -5% 0px" }}
                transition={{ duration: 0.55, delay: (i % initial) * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className={cn("relative overflow-hidden shadow-soft", desktopSpans[i % desktopSpans.length])}
              >
                <Thumb img={img} index={i} onOpen={setLightbox} sizes="(min-width: 1280px) 600px, 50vw" />
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      ) : (
        /* Мобильде суреттер өз пропорциясын сақтайды — маңызды бөліктер кесілмейді. */
        <ul className="columns-2 gap-2.5 md:columns-3">
          <AnimatePresence initial={false}>
            {visible.map((img, i) => (
              <motion.li
                key={img.src}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className={cn("relative mb-2.5 break-inside-avoid overflow-hidden shadow-soft", mobileRadius[i % mobileRadius.length])}
                style={{ aspectRatio: `${img.width} / ${img.height}` }}
              >
                <Thumb img={img} index={i} onOpen={setLightbox} sizes="(min-width: 768px) 33vw, 50vw" />
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      )}

      {hasMore && (
        <div className={cn("flex justify-center", isDesktop ? "mt-10" : "mt-6")}>
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className={cn(
              "group inline-flex min-h-[48px] items-center gap-2 rounded-full bg-white px-7 font-display text-[15px] font-semibold text-ink shadow-soft ring-2 ring-teal/40 transition-all duration-300 hover:ring-teal-deep motion-safe:hover:-translate-y-0.5",
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
        className="object-cover transition-transform duration-700 ease-out group-hover/thumb:scale-105"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/thumb:opacity-100" />
      <span className="absolute bottom-3 right-3 grid size-10 scale-75 place-items-center rounded-full bg-white/95 text-ink opacity-0 shadow-soft transition-all duration-300 group-hover/thumb:scale-100 group-hover/thumb:opacity-100">
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
