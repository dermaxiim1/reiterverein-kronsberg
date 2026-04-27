import { About } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact-section";
import { EventsSection } from "@/components/sections/events-section";
import { FacilitiesSection } from "@/components/sections/facilities-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { Hero } from "@/components/sections/hero";
import { HorsesSection } from "@/components/sections/horses-section";
import { PensionSection } from "@/components/sections/pension-section";
import { ReviewsSection } from "@/components/sections/reviews-section";
import { TeamSection } from "@/components/sections/team-section";
import { VielseitigkeitSection } from "@/components/sections/vielseitigkeit-section";
import { localBusinessJsonLd } from "@/lib/json-ld";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <FacilitiesSection />
      <PensionSection />
      <TeamSection />
      <HorsesSection />
      <VielseitigkeitSection />
      <EventsSection />
      <ReviewsSection />
      <GallerySection />
      <ContactSection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
    </main>
  );
}
