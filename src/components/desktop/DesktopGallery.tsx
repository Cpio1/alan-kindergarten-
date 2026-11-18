import { gallerySection } from "@/data/kindergarten";
import type { SiteImage } from "@/lib/images";
import { Cloud, Float, Flower, Ring, Sparkle, Star } from "../shared/Decor";
import { Gallery } from "../shared/Gallery";
import { Reveal } from "../shared/Reveal";
import { SectionTitle } from "../shared/ui";

export function DesktopGallery({ images }: { images: SiteImage[] }) {
  return (
    <div className="relative overflow-hidden bg-cream py-9 2xl:py-12">
      {/* Жұмсақ органикалық фон пішіндері */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-20 top-1/3 size-[200px] blob bg-lav-soft/70" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-16 bottom-12 size-[170px] rounded-full bg-sun-soft/80" />

      <Float className="left-[5%] top-12 w-9" slow>
        <Ring color="#A9A2EF" />
      </Float>
      <Float className="left-[14%] top-8 w-14" delay={0.6} slow>
        <Cloud />
      </Float>
      <Float className="right-[6%] top-10 w-7" twinkle>
        <Star color="#FF9478" />
      </Float>
      <Float className="right-[12%] top-20 w-5" twinkle delay={1.2}>
        <Sparkle color="#5CCBBC" />
      </Float>
      <Float className="bottom-8 left-[4%] w-9" delay={1}>
        <Flower color="#5CCBBC" />
      </Float>

      <div className="container-site relative">
        <Reveal y={18}>
          <SectionTitle eyebrow="Галерея" color="lav" title={gallerySection.title} subtitle={gallerySection.subtitle} />
        </Reveal>
        <div className="mt-6">
          <Gallery images={images} variant="desktop" />
        </div>
      </div>
    </div>
  );
}
