import { gallerySection } from "@/data/kindergarten";
import type { SiteImage } from "@/lib/images";
import { Cloud, Float, Flower, Star } from "../shared/Decor";
import { Gallery } from "../shared/Gallery";
import { Reveal } from "../shared/Reveal";
import { SectionTitle } from "../shared/ui";

export function MobileGallery({ images }: { images: SiteImage[] }) {
  return (
    <div className="relative overflow-hidden bg-cream py-7">
      <div aria-hidden="true" className="pointer-events-none absolute -right-12 top-20 size-[110px] blob bg-lav-soft/70" />
      <Float className="left-3 top-2 w-8" slow>
        <Cloud />
      </Float>
      <Float className="right-5 top-3 w-5" twinkle>
        <Star color="#FF9478" />
      </Float>
      <Float className="bottom-2 left-4 w-5" delay={0.8}>
        <Flower color="#5CCBBC" />
      </Float>
      <div className="container-site relative">
        <Reveal y={12}>
          <SectionTitle eyebrow="Галерея" color="lav" title={gallerySection.title} subtitle={gallerySection.subtitle} />
        </Reveal>
        <div className="mx-auto mt-5 max-w-[640px]">
          <Gallery images={images} variant="mobile" />
        </div>
      </div>
    </div>
  );
}
