import { SectionLabel } from "@/components/ui/section-label";
import { EVENTS } from "@/lib/events";

export function EventsSection() {
  return (
    <section
      id="veranstaltungen"
      className="bg-paper px-6 py-24 lg:px-14 lg:py-32"
    >
      <div className="mx-auto max-w-[1280px]">
        <SectionLabel>Veranstaltungen</SectionLabel>
        <h2 className="font-serif text-[clamp(40px,5.5vw,80px)] font-light leading-none tracking-[-0.03em]">
          Im Kalender
          <br />
          <em className="italic text-forest">eines Jahres</em>.
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft">
          Lehrgänge, Vereinstage und Stallfeste — offen für Mitglieder,
          Einsteller und Gäste. Termine erfragen Sie bitte direkt.
        </p>

        <ol className="mt-14 space-y-6">
          {EVENTS.map((e, i) => (
            <li
              key={e.id}
              className="grid grid-cols-[auto_1fr] items-start gap-6 border-t border-ink/10 pt-6 lg:grid-cols-[120px_180px_1fr_auto] lg:gap-10"
            >
              <span className="font-serif text-3xl italic text-saddle/70 lg:text-4xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="col-start-1 row-start-2 font-serif text-base italic text-forest lg:col-auto lg:row-auto lg:pt-2">
                {e.cadence}
              </span>
              <div className="col-start-2 row-span-2 lg:row-span-1">
                <h3 className="font-serif text-2xl font-normal leading-tight md:text-3xl">
                  {e.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
                  {e.desc}
                </p>
              </div>
              {e.badge && (
                <span className="hidden self-start rounded-full border border-forest/30 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-forest lg:inline-block">
                  {e.badge}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
