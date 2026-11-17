import { gallerySection } from "@/data/kindergarten";
import type { SiteImage } from "@/lib/images";
import { Cloud, Float, Flower, Star } from "../shared/Decor";
import { Gallery } from "../shared/Gallery";
import { Reveal } from "../shared/Reveal";
import { SectionTitle } from "../shared/ui";

export function MobileGallery({ images }: { images: SiteImage[] }) {
  return (
    <div className="relative overflow-hidden bg-cream py-10">
      <div aria-hidden="true" className="pointer-events-none absolute -right-16 top-24 size-[140px] blob bg-lav-soft/70" />
      <Float className="left-3 top-3 w-10" slow>
        <Cloud />
      </Float>
      <Float className="right-5 top-4 w-6" twinkle>
        <Star color="#FF9478" />
      </Float>
      <Float className="bottom-3 left-4 w-7" delay={0.8}>
        <Flower color="#5CCBBC" />
      </Float>
      <div className="container-site relative">
        <Reveal y={12}>
          <SectionTitle eyebrow="Галерея" color="lav" title={gallerySection.title} subtitle={gallerySection.subtitle} />
        </Reveal>
        <div className="mt-6">
          <Gallery images={images} variant="mobile" />
        </div>
      </div>
    </div>
  );
}
