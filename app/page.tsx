import { About } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact-section";
import { FacilitiesSection } from "@/components/sections/facilities-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { Hero } from "@/components/sections/hero";
import { PensionSection } from "@/components/sections/pension-section";
import { VielseitigkeitSection } from "@/components/sections/vielseitigkeit-section";
import { localBusinessJsonLd } from "@/lib/json-ld";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <FacilitiesSection />
      <PensionSection />
      <VielseitigkeitSection />
      <GallerySection />
      <ContactSection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
    </main>
  );
}
