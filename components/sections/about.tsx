import { DividerFlourish } from "@/components/ui/divider-flourish";
import { PullQuote } from "@/components/ui/pull-quote";
import { SectionLabel } from "@/components/ui/section-label";

export function About() {
  return (
    <section
      id="ueber-uns"
      className="bg-paper-dark px-6 py-24 lg:px-14 lg:py-32"
    >
      <div className="mx-auto max-w-[1280px]">
        <SectionLabel>Über uns</SectionLabel>
        <h2 className="font-serif text-[clamp(40px,5.5vw,80px)] font-light leading-none tracking-[-0.03em]">
          Kompetenz, Raum
          <br />
          und ein <em className="italic text-forest">offenes Tor</em>.
        </h2>

        <div className="mt-10 grid gap-12 text-lg leading-relaxed text-ink-soft lg:grid-cols-2 lg:gap-20">
          <div className="space-y-5">
            <p className="first-letter:float-left first-letter:mr-2 first-letter:font-serif first-letter:text-6xl first-letter:font-light first-letter:leading-none first-letter:text-forest">
              Wir überzeugen durch Kompetenz in der Haltung von Pferden — und
              durch die Möglichkeiten, die unsere Anlage bietet. Reithalle,
              Ebbe-Flut-Platz, Dressurplatz, Führanlage, zwei Longier-Optionen
              und Solarium auf einem Hof.
            </p>
            <p>
              Trotz der Nähe zur Stadt Hannover befinden wir uns mitten in der
              Natur. Bei einem Ausritt im wunderschönen Gelände direkt am Hof
              können Reiter und Pferd die Seele baumeln lassen.
            </p>
          </div>
          <div className="space-y-5">
            <p>
              Durch die Beheimatung des Vereins für Vielseitigkeitsreiterei e.V.
              auf unserer Anlage bieten sich immer wieder interessante
              Trainings­möglich­keiten — Dressur, Springen, Geländearbeit Hand in
              Hand.
            </p>
            <p>
              Wir legen großen Wert auf die Beschaffenheit der Trainingsplätze
              und pflegen diese regelmäßig. Beste räumliche Voraussetzungen für
              Leidenschaft, Erfolg und Lebensfreude.
            </p>
          </div>
        </div>

        <DividerFlourish className="mt-16" />

        <PullQuote attribution="Marc Münkel, Inhaber">
          Bei uns kennt jedes Pferd seinen Namen, seinen Reiter, seine Box und
          sein Lieblingseck auf der Weide. Das ist kein Lippenbekenntnis — das
          ist die Bedingung dafür, dass wir gut arbeiten können.
        </PullQuote>
      </div>
    </section>
  );
}
