import { SectionHeading } from "@/components/ui/section-heading";
import { SectionLabel } from "@/components/ui/section-label";
import { GALLERY } from "@/lib/gallery";

import { GalleryGrid } from "./gallery-grid";

export function GallerySection() {
  return (
    <section id="galerie" className="bg-paper px-6 py-24 lg:px-14 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        <SectionLabel>Eindrücke</SectionLabel>
        <SectionHeading>
          Vom Hof in den
          <br />
          <em className="italic text-forest">Wald</em>.
        </SectionHeading>
        <div className="mt-12">
          <GalleryGrid images={GALLERY} />
        </div>
      </div>
    </section>
  );
}
