"use client";

import { useEffect, useState } from "react";
import { nav, type SectionId } from "@/data/kindergarten";

/** Якорь бойынша жұмсақ өту: Header биіктігі scroll-margin-top арқылы ескеріледі. */
export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  if (window.location.hash !== `#${id}`) {
    window.history.pushState(null, "", `#${id}`);
  }
  // Пернетақта қолданушылары үшін фокусты бөлімге ауыстырамыз.
  el.focus({ preventScroll: true });
}

/** Қазір экранда тұрған бөлімді анықтайды. */
export function useActiveSection(): SectionId {
  const [active, setActive] = useState<SectionId>("home");

  useEffect(() => {
    const ids = nav.map((n) => n.id);
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;

    const onScroll = () => {
      const line = window.innerHeight * 0.35;
      let current: SectionId = "home";
      for (const el of els) {
        if (el.getBoundingClientRect().top - line <= 0) current = el.id as SectionId;
      }
      // Беттің соңында соңғы бөлімді белсенді етеміз.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = els[els.length - 1].id as SectionId;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return active;
}

export function useScrolled(threshold = 12) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > threshold);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, [threshold]);
  return scrolled;
}
