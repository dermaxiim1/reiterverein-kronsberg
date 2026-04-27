import { Check } from "lucide-react";

import { SectionHeading } from "@/components/ui/section-heading";
import { SectionLabel } from "@/components/ui/section-label";
import { SITE } from "@/lib/site";

const STALL_FEATURES = [
  {
    title: "23 Innen- und Außenboxen",
    desc: "8–16 m² groß, luftig und geräumig. Innenboxen mit Oberlicht, direkter Übergang zur Halle. Außenboxen für Pferde mit Frischluft-Bedarf.",
  },
  {
    title: "Fütterung dreimal täglich",
    desc: "Hafer oder Pellets dreimal täglich, Heu morgens und abends. Dritte Heuportion mittags gegen Aufpreis möglich, auf Wunsch auch nasses Heu.",
  },
  {
    title: "Mistarbeit Mo–Fr",
    desc: "Tägliches Misten und Einstreuen mit Stroh. Boxen mit Leinenstroh ebenfalls möglich.",
  },
  {
    title: "Sommerweiden",
    desc: "Werktags morgens raus, mittags rein. Harmonische Gruppen, fester Weideplatz von Frühjahr bis Herbst möglich.",
  },
  {
    title: "Winterweiden & Paddocks",
    desc: "Werktags Paddock, je nach Wetterlage zusätzlich Winterweide. Tägliche Bewegung das ganze Jahr.",
  },
  {
    title: "Aufmerksames Stallpersonal",
    desc: "Drei feste Hände, sehr um das Wohl der Pferde besorgt. Kurze Wege zwischen Stall, Halle und Vorstand.",
  },
];

export function PensionSection() {
  return (
    <section id="stallungen" className="bg-paper-dark px-6 py-24 lg:px-14 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        <SectionLabel>Stallungen & Weiden</SectionLabel>
        <SectionHeading>
          Was eine
          <br />
          <em className="italic text-forest">Box bei uns</em> enthält.
        </SectionHeading>

        <div className="mt-12 grid grid-cols-1 gap-x-16 gap-y-8 md:grid-cols-2">
          {STALL_FEATURES.map((item) => (
            <div key={item.title} className="flex gap-4">
              <div className="mt-1 shrink-0 rounded-full bg-forest/10 p-1.5 text-forest">
                <Check className="size-4" aria-hidden />
              </div>
              <div>
                <h3 className="font-serif text-xl font-medium">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-14 max-w-2xl border-l-2 border-forest/40 pl-6 text-base italic leading-relaxed text-ink-soft">
          Sie interessieren sich für eine Box? Frau Nevado-Navarro erreichen Sie
          unter{" "}
          <a
            href={`tel:${SITE.contact.phoneTel}`}
            className="text-forest underline decoration-1 underline-offset-4"
          >
            {SITE.contact.phone}
          </a>
          {" "}— oder per E-Mail an{" "}
          <a
            href={`mailto:${SITE.contact.email}`}
            className="text-forest underline decoration-1 underline-offset-4"
          >
            {SITE.contact.email}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
