"use client";

import { Phone } from "lucide-react";
import type { MouseEvent } from "react";
import { contacts, nav } from "@/data/kindergarten";
import type { SiteImage } from "@/lib/images";
import { cn } from "../shared/Decor";
import { Logo } from "../shared/ui";
import { scrollToSection, useActiveSection, useScrolled } from "../shared/useSectionNav";

export function DesktopHeader({ logo }: { logo: SiteImage | null }) {
  const active = useActiveSection();
  const scrolled = useScrolled();

  const go = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <div
      className={cn(
        "hidden h-[var(--header-h)] transition-[background-color,box-shadow] duration-300 lg:block",
        scrolled ? "bg-white/90 shadow-[0_8px_30px_-18px_rgb(38_54_64/0.35)] backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="container-site flex h-full items-center justify-between gap-4">
        <a href="#home" onClick={(e) => go(e, "home")} className="shrink-0 rounded-2xl" aria-label="«Алан» бөбекжай-балабақшасы — басты бет">
          <Logo image={logo} />
        </a>

        <nav aria-label="Негізгі мәзір" className="min-w-0">
          <ul className="flex items-center gap-0.5 xl:gap-1">
            {nav.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => go(e, item.id)}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "relative block whitespace-nowrap rounded-full px-2 py-2 text-[13.5px] font-bold transition-colors duration-200 xl:px-3 xl:text-[15px]",
                      isActive ? "bg-teal-soft text-teal-deep" : "text-ink/80 hover:bg-white hover:text-ink"
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <a
          href={contacts.phoneHref}
          className="inline-flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center gap-2 rounded-full bg-sun px-3 font-display text-[14px] font-semibold text-ink shadow-soft transition-transform duration-300 hover:-translate-y-0.5 2xl:px-5"
          aria-label={`Қоңырау шалу: ${contacts.phoneDisplay}`}
        >
          <Phone className="size-[18px]" aria-hidden="true" />
          <span className="hidden 2xl:inline">{contacts.phoneDisplay}</span>
        </a>
      </div>
    </div>
  );
}
