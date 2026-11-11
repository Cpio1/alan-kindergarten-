"use client";

import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import type { SiteImage } from "@/lib/images";

export function Lightbox({
  images,
  index,
  onClose,
  onChange,
}: {
  images: SiteImage[];
  index: number | null;
  onClose: () => void;
  onChange: (i: number) => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const open = index !== null;
  const count = images.length;
  // Тыңдаушы әрқашан ағымдағы мәндерді көруі үшін ref қолданамыз.
  const state = useRef({ index, count, onClose, onChange });
  state.current = { index, count, onClose, onChange };

  useEffect(() => {
    if (!open) return;
    const prevFocus = document.activeElement as HTMLElement | null;
    const root = document.documentElement;
    root.style.overflow = "hidden";
    requestAnimationFrame(() => closeRef.current?.focus());

    const onKey = (e: KeyboardEvent) => {
      const { index: i, count: n, onClose: close, onChange: change } = state.current;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight" && n > 1) change(((i ?? 0) + 1) % n);
      if (e.key === "ArrowLeft" && n > 1) change(((i ?? 0) - 1 + n) % n);
      if (e.key === "Tab" && dialogRef.current) {
        const f = Array.from(dialogRef.current.querySelectorAll<HTMLElement>("button"));
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      root.style.overflow = "";
      prevFocus?.focus?.({ preventScroll: true });
    };
  }, [open]);

  const img = index !== null ? images[index] : null;
  const prev = () => index !== null && onChange((index - 1 + count) % count);
  const next = () => index !== null && onChange((index + 1) % count);

  return (
    <AnimatePresence>
      {open && img && (
        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={`Фото ${index! + 1} / ${count}`}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/90 p-3 backdrop-blur-sm sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={img.src}
              className="relative h-[min(78dvh,880px)] w-full max-w-[1100px]"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              drag={count > 1 ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.25}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) next();
                else if (info.offset.x > 60) prev();
              }}
              onClick={(e) => e.target === e.currentTarget && onClose()}
            >
              <Image
                src={img.src}
                alt={`Балабақша өмірінен фото ${index! + 1}`}
                fill
                sizes="100vw"
                className="pointer-events-none select-none object-contain"
                draggable={false}
              />
            </motion.div>
          </AnimatePresence>

          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Жабу"
            className="absolute right-3 top-[calc(12px+env(safe-area-inset-top))] grid size-12 place-items-center rounded-full bg-white text-ink shadow-card transition-transform hover:scale-105 sm:right-6 sm:top-6"
          >
            <X className="size-6" aria-hidden="true" />
          </button>

          {count > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                aria-label="Алдыңғы фото"
                className="absolute bottom-[calc(16px+env(safe-area-inset-bottom))] left-1/2 grid size-12 -translate-x-[calc(100%+8px)] place-items-center rounded-full bg-white/95 text-ink shadow-card sm:bottom-auto sm:left-6 sm:top-1/2 sm:-translate-x-0 sm:-translate-y-1/2"
              >
                <ChevronLeft className="size-6" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Келесі фото"
                className="absolute bottom-[calc(16px+env(safe-area-inset-bottom))] left-1/2 grid size-12 translate-x-2 place-items-center rounded-full bg-white/95 text-ink shadow-card sm:bottom-auto sm:left-auto sm:right-6 sm:top-1/2 sm:translate-x-0 sm:-translate-y-1/2"
              >
                <ChevronRight className="size-6" aria-hidden="true" />
              </button>
              <span className="absolute left-4 top-[calc(24px+env(safe-area-inset-top))] rounded-full bg-white/15 px-3 py-1 font-display text-[14px] font-semibold text-white sm:left-6 sm:top-8">
                {index! + 1} / {count}
              </span>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
