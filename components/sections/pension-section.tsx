import { Check } from "lucide-react";

import { SectionLabel } from "@/components/ui/section-label";
import { PENSION_INCLUDES } from "@/lib/pension";
import { SITE } from "@/lib/site";

export function PensionSection() {
  return (
    <section id="pension" className="bg-paper-dark px-6 py-24 lg:px-14 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        <SectionLabel>Pension & Service</SectionLabel>
        <h2 className="font-serif text-[clamp(40px,5.5vw,80px)] font-light leading-none tracking-[-0.03em]">
          Was im Einstellplatz
          <br />
          <em className="italic text-forest">enthalten</em> ist.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-x-16 gap-y-8 md:grid-cols-2">
          {PENSION_INCLUDES.map((item) => (
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
          Genaue Konditionen und freie Plätze besprechen wir gerne persönlich. Rufen
          Sie uns an unter{" "}
          <a
            href={`tel:${SITE.contact.phoneTel}`}
            className="text-forest underline decoration-1 underline-offset-4"
          >
            {SITE.contact.phone}
          </a>{" "}
          oder schreiben Sie uns eine Nachricht.
        </p>
      </div>
    </section>
  );
}
