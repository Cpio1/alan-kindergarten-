import { Clock, MapPin, Phone } from "lucide-react";
import { contacts, site } from "@/data/kindergarten";
import { cn } from "./Decor";
import { InstagramIcon } from "./Icons";

const rows = [
  { icon: MapPin, label: "Мекенжай", value: contacts.address, tone: "bg-coral-soft text-coral-deep" },
  { icon: Phone, label: "Телефон", value: contacts.phoneDisplay, href: contacts.phoneHref, tone: "bg-teal-soft text-teal-deep" },
  { icon: Clock, label: "Жұмыс уақыты", value: contacts.hours, tone: "bg-sun-soft text-sun-deep" },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: contacts.instagramHandle,
    href: contacts.instagram,
    external: true,
    tone: "bg-lav-soft text-lav-deep",
  },
];

export function ContactList({ compact }: { compact?: boolean }) {
  return (
    <div>
      <p className={cn("font-display font-extrabold text-ink", compact ? "text-[19px]" : "text-[22px]")}>{site.name}</p>
      <ul className={cn("grid", compact ? "mt-4 gap-2.5" : "mt-5 gap-3")}>
        {rows.map((r) => {
          const Icon = r.icon;
          const content = (
            <>
              <span className={cn("grid shrink-0 place-items-center rounded-2xl", r.tone, compact ? "size-11" : "size-12")}>
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-[12.5px] font-bold uppercase tracking-wide text-ink-soft">{r.label}</span>
                <span className={cn("block break-words font-display font-bold text-ink", compact ? "text-[16px]" : "text-[18px]")}>{r.value}</span>
              </span>
            </>
          );
          const cls = cn(
            "flex items-center gap-3.5 rounded-[20px] bg-white ring-1 ring-ink/5",
            compact ? "p-3" : "p-3.5",
            r.href && "transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-soft"
          );
          return (
            <li key={r.label}>
              {r.href ? (
                <a href={r.href} className={cls} {...(r.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                  {content}
                </a>
              ) : (
                <div className={cls}>{content}</div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
