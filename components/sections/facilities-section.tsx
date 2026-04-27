import {
  Circle,
  CircleDot,
  Home,
  LandPlot,
  RotateCw,
  Square,
  Sun,
} from "lucide-react";

import { SectionLabel } from "@/components/ui/section-label";
import { FACILITIES } from "@/lib/facilities";

const ICONS = { Home, LandPlot, Square, RotateCw, Circle, CircleDot, Sun };

export function FacilitiesSection() {
  return (
    <section id="anlagen" className="bg-paper px-6 py-24 lg:px-14 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <SectionLabel>Unsere Anlagen</SectionLabel>
            <h2 className="font-serif text-[clamp(40px,5.5vw,80px)] font-light leading-none tracking-[-0.03em]">
              Top Bedingungen.
              <br />
              Viel <em className="italic text-forest">Raum</em>.
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-ink-soft">
            Sieben spezialisierte Bereiche auf einem Hof — wetterunabhängig
            trainieren, schonend aufwärmen und nach dem Ritt entspannen.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {FACILITIES.map((f) => {
            const Icon = ICONS[f.icon as keyof typeof ICONS] ?? Home;
            return (
              <article
                key={f.id}
                className="rounded-sm border border-ink/10 bg-cream p-7 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-forest/10 p-3 text-forest">
                    <Icon className="size-5" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-normal leading-tight">
                      {f.name}
                    </h3>
                    {(f.dimensions || f.capacity) && (
                      <p className="mt-1 font-serif text-base italic text-saddle">
                        {f.dimensions ?? f.capacity}
                      </p>
                    )}
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-ink-soft">
                  {f.blurb}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
