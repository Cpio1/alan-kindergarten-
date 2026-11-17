import { gallerySection } from "@/data/kindergarten";
import type { SiteImage } from "@/lib/images";
import { Cloud, Float, Flower, Ring, Sparkle, Star } from "../shared/Decor";
import { Gallery } from "../shared/Gallery";
import { Reveal } from "../shared/Reveal";
import { SectionTitle } from "../shared/ui";

export function DesktopGallery({ images }: { images: SiteImage[] }) {
  return (
    <div className="relative overflow-hidden bg-cream py-12 xl:py-16">
      {/* Жұмсақ органикалық фон пішіндері */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-1/3 size-[260px] blob bg-lav-soft/70" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 bottom-16 size-[220px] rounded-full bg-sun-soft/80" />

      <Float className="left-[5%] top-16 w-12" slow>
        <Ring color="#A9A2EF" />
      </Float>
      <Float className="left-[14%] top-10 w-20" delay={0.6} slow>
        <Cloud />
      </Float>
      <Float className="right-[6%] top-12 w-10" twinkle>
        <Star color="#FF9478" />
      </Float>
      <Float className="right-[12%] top-28 w-6" twinkle delay={1.2}>
        <Sparkle color="#5CCBBC" />
      </Float>
      <Float className="bottom-10 left-[4%] w-12" delay={1}>
        <Flower color="#5CCBBC" />
      </Float>

      <div className="container-site relative">
        <Reveal y={18}>
          <SectionTitle eyebrow="Галерея" color="lav" title={gallerySection.title} subtitle={gallerySection.subtitle} />
        </Reveal>
        <div className="mt-8">
          <Gallery images={images} variant="desktop" />
        </div>
      </div>
    </div>
  );
}
