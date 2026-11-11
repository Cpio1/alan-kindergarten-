import { gallerySection } from "@/data/kindergarten";
import type { SiteImage } from "@/lib/images";
import { Float, Star } from "../shared/Decor";
import { Gallery } from "../shared/Gallery";
import { Reveal } from "../shared/Reveal";
import { SectionTitle } from "../shared/ui";

export function MobileGallery({ images }: { images: SiteImage[] }) {
  return (
    <div className="relative overflow-hidden bg-cream py-10">
      <Float className="right-5 top-4 w-7" twinkle>
        <Star color="#FF9478" />
      </Float>
      <div className="container-site">
        <Reveal y={12}>
          <SectionTitle eyebrow="Галерея" color="lav" title={gallerySection.title} subtitle={gallerySection.subtitle} />
        </Reveal>
        <div className="mt-7">
          <Gallery images={images} variant="mobile" />
        </div>
      </div>
    </div>
  );
}
