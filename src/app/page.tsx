import type { ReactNode } from "react";
import { DesktopAboutGroups } from "@/components/desktop/DesktopAboutGroups";
import { DesktopActivities } from "@/components/desktop/DesktopActivities";
import { DesktopContacts } from "@/components/desktop/DesktopContacts";
import { DesktopGallery } from "@/components/desktop/DesktopGallery";
import { DesktopHero } from "@/components/desktop/DesktopHero";
import { DesktopNutrition } from "@/components/desktop/DesktopNutrition";
import { MobileAboutGroups } from "@/components/mobile/MobileAboutGroups";
import { MobileActivities } from "@/components/mobile/MobileActivities";
import { MobileContacts } from "@/components/mobile/MobileContacts";
import { MobileGallery } from "@/components/mobile/MobileGallery";
import { MobileHero } from "@/components/mobile/MobileHero";
import { MobileNutrition } from "@/components/mobile/MobileNutrition";
import { Documents } from "@/components/sections/Documents";
import { Footer } from "@/components/sections/Footer";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { WhatsAppFab } from "@/components/shared/WhatsAppFab";
import { nav, type SectionId } from "@/data/kindergarten";
import { getSiteImages } from "@/lib/images";

const labels = Object.fromEntries(nav.map((n) => [n.id, n.label])) as Record<SectionId, string>;

/**
 * Әр бөлім бір ғана id-ге ие (якорь қайталанбайды).
 * Ішінде Mobile (< 1024px) және Desktop (≥ 1024px) композициялары бөлек көрсетіледі.
 */
function Section({ id, mobile, desktop }: { id: SectionId; mobile: ReactNode; desktop: ReactNode }) {
  return (
    <section id={id} data-section aria-label={labels[id]} tabIndex={-1} className="outline-none">
      <div className="lg:hidden">{mobile}</div>
      <div className="hidden lg:block">{desktop}</div>
    </section>
  );
}

export default function Home() {
  const images = getSiteImages();

  return (
    <>
      <SiteHeader logo={images.logo} />
      <main>
        <Section id="home" mobile={<MobileHero image={images.hero} />} desktop={<DesktopHero image={images.hero} />} />
        <Section
          id="about"
          mobile={<MobileAboutGroups image={images.about} />}
          desktop={<DesktopAboutGroups image={images.about} />}
        />
        <Section id="activities" mobile={<MobileActivities />} desktop={<DesktopActivities />} />
        <Section id="nutrition" mobile={<MobileNutrition />} desktop={<DesktopNutrition />} />
        <Section
          id="gallery"
          mobile={<MobileGallery images={images.gallery} />}
          desktop={<DesktopGallery images={images.gallery} />}
        />
        <section id="documents" data-section aria-label={labels.documents} tabIndex={-1} className="outline-none">
          <Documents />
        </section>
        <Section id="contacts" mobile={<MobileContacts />} desktop={<DesktopContacts />} />
      </main>
      <Footer logo={images.logo} />
      <WhatsAppFab />
    </>
  );
}
