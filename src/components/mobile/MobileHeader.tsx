"use client";

import { AnimatePresence, motion } from "motion/react";
import { Menu, Phone, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type MouseEvent } from "react";
import { contacts, nav } from "@/data/kindergarten";
import type { SiteImage } from "@/lib/images";
import { cn } from "../shared/Decor";
import { WhatsAppIcon } from "../shared/Icons";
import { Logo } from "../shared/ui";
import { scrollToSection, useActiveSection, useScrolled } from "../shared/useSectionNav";

const dots = ["bg-teal", "bg-sun", "bg-coral", "bg-lav", "bg-teal", "bg-sun", "bg-coral"];

export function MobileHeader({ logo }: { logo: SiteImage | null }) {
  const [open, setOpen] = useState(false);
  const active = useActiveSection();
  const scrolled = useScrolled(6);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const close = useCallback((restoreFocus = true) => {
    setOpen(false);
    if (restoreFocus) toggleRef.current?.focus();
  }, []);

  // Мәзір ашық кезде фондағы бетті айналдыруды бұғаттаймыз.
  useEffect(() => {
    const root = document.documentElement;
    if (open) {
      root.style.overflow = "hidden";
      requestAnimationFrame(() => panelRef.current?.querySelector<HTMLElement>("a")?.focus());
    } else {
      root.style.overflow = "";
    }
    return () => {
      root.style.overflow = "";
    };
  }, [open]);

  // Desktop-қа өткенде мәзірді жабамыз.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const on = () => mq.matches && setOpen(false);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  const go = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setOpen(false);
    document.documentElement.style.overflow = "";
    // Мәзір жабылғаннан кейін айналдырамыз — қақтығыс болмауы үшін.
    requestAnimationFrame(() => requestAnimationFrame(() => scrollToSection(id)));
  };

  // Фокусты мәзір ішінде ұстау және Escape арқылы жабу.
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!open) return;
    if (e.key === "Escape") {
      e.stopPropagation();
      close();
      return;
    }
    if (e.key !== "Tab") return;
    const focusables = [
      toggleRef.current,
      ...Array.from(panelRef.current?.querySelectorAll<HTMLElement>("a[href]") ?? []),
    ].filter(Boolean) as HTMLElement[];
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  return (
    <div className="lg:hidden" onKeyDown={onKeyDown}>
      <div
        className={cn(
          "relative z-10 h-[var(--header-h)] transition-[background-color,box-shadow] duration-300",
          scrolled || open ? "bg-white/95 shadow-[0_6px_24px_-16px_rgb(38_54_64/0.4)] backdrop-blur-md" : "bg-cream/70 backdrop-blur-sm"
        )}
      >
        <div className="container-site flex h-full items-center justify-between gap-3">
          <a
            href="#home"
            onClick={(e) => go(e, "home")}
            className="min-w-0 rounded-2xl"
            aria-label="«Алан» бөбекжай-балабақшасы — басты бет"
          >
            <Logo image={logo} compact />
          </a>
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={contacts.phoneHref}
              className="grid size-11 place-items-center rounded-full bg-sun text-ink"
              aria-label={`Қоңырау шалу: ${contacts.phoneDisplay}`}
            >
              <Phone className="size-[19px]" aria-hidden="true" />
            </a>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Мәзірді жабу" : "Мәзірді ашу"}
              className={cn(
                "grid size-11 place-items-center rounded-full transition-colors duration-200",
                open ? "bg-ink text-white" : "bg-teal-deep text-white"
              )}
            >
              <AnimatePresence initial={false} mode="wait">
                <motion.span
                  key={open ? "x" : "menu"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="grid place-items-center"
                >
                  {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              tabIndex={-1}
              aria-hidden="true"
              className="fixed inset-0 top-[var(--header-h)] z-0 bg-ink/30 backdrop-blur-[2px]"
              onClick={() => close(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.div
              id="mobile-menu"
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-label="Сайт мәзірі"
              className="absolute inset-x-0 top-full z-10 max-h-[calc(100dvh-var(--header-h))] overflow-y-auto overscroll-contain rounded-b-[32px] bg-white px-4 pb-6 pt-3 shadow-card"
              initial={{ opacity: 0, y: -16, clipPath: "inset(0 0 100% 0 round 0 0 32px 32px)" }}
              animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0 round 0 0 32px 32px)" }}
              exit={{ opacity: 0, y: -10, clipPath: "inset(0 0 100% 0 round 0 0 32px 32px)" }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            >
              <nav aria-label="Мобильді мәзір">
                <ul className="mx-auto grid max-w-md gap-1">
                  {nav.map((item, i) => (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.035, duration: 0.3 }}
                    >
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => go(e, item.id)}
                        aria-current={active === item.id ? "true" : undefined}
                        className={cn(
                          "flex min-h-[50px] items-center gap-3 rounded-2xl px-4 font-display text-[17px] font-semibold transition-colors",
                          active === item.id ? "bg-teal-soft text-teal-deep" : "text-ink active:bg-cream"
                        )}
                      >
                        <span className={cn("size-2.5 shrink-0 rounded-full", dots[i])} aria-hidden="true" />
                        {item.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>
              <div className="mx-auto mt-4 grid max-w-md grid-cols-2 gap-2.5">
                <a
                  href={contacts.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[50px] items-center justify-center gap-2 rounded-2xl bg-teal-deep px-3 font-display text-[15px] font-semibold text-white"
                >
                  <WhatsAppIcon className="size-5" />
                  WhatsApp
                </a>
                <a
                  href={contacts.phoneHref}
                  className="flex min-h-[50px] items-center justify-center gap-2 rounded-2xl bg-sun px-3 font-display text-[15px] font-semibold text-ink"
                >
                  <Phone className="size-[18px]" aria-hidden="true" />
                  Қоңырау
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
