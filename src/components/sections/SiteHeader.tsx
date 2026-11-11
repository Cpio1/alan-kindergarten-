import type { SiteImage } from "@/lib/images";
import { DesktopHeader } from "../desktop/DesktopHeader";
import { MobileHeader } from "../mobile/MobileHeader";

export function SiteHeader({ logo }: { logo: SiteImage | null }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-white"
      >
        Негізгі мазмұнға өту
      </a>
      <MobileHeader logo={logo} />
      <DesktopHeader logo={logo} />
    </header>
  );
}
