import { gallerySection } from "@/data/kindergarten";
import type { SiteImage } from "@/lib/images";
import { Float, Ring, Star } from "../shared/Decor";
import { Gallery } from "../shared/Gallery";
import { Reveal } from "../shared/Reveal";
import { SectionTitle } from "../shared/ui";

export function DesktopGallery({ images }: { images: SiteImage[] }) {
  return (
    <div className="relative overflow-hidden bg-cream py-16 xl:py-20">
      <Float className="left-[5%] top-20 w-12" slow>
        <Ring color="#A9A2EF" />
      </Float>
      <Float className="right-[6%] top-14 w-10" twinkle>
        <Star color="#FF9478" />
      </Float>
      <div className="container-site">
        <Reveal y={18}>
          <SectionTitle eyebrow="Галерея" color="lav" title={gallerySection.title} subtitle={gallerySection.subtitle} />
        </Reveal>
        <div className="mt-12">
          <Gallery images={images} variant="desktop" />
        </div>
      </div>
    </div>
  );
}
