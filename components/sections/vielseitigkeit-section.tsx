import { SectionLabel } from "@/components/ui/section-label";

const DISCIPLINES = [
  {
    name: "Dressur",
    desc: "Lektionsarbeit auf dem Outdoor-Viereck oder in der Halle. Boden täglich gepflegt.",
  },
  {
    name: "Springen",
    desc: "Großzügiger Ebbe-Flut-Platz für Parcours, auch nach Regen sofort bereit.",
  },
  {
    name: "Gelände",
    desc: "Direkt am Hof in den Wald — Ausreitwege im wunderschönen Gelände.",
  },
];

export function VielseitigkeitSection() {
  return (
    <section
      id="vielseitigkeit"
      className="bg-forest px-6 py-24 text-cream lg:px-14 lg:py-32"
    >
      <div className="mx-auto max-w-[1280px]">
        <SectionLabel className="text-cream/85">Vielseitigkeit & VfV e.V.</SectionLabel>
        <h2 className="font-serif text-[clamp(40px,5.5vw,80px)] font-light leading-none tracking-[-0.03em] text-cream">
          Drei Disziplinen.
          <br />
          <em className="italic text-hay">Ein Hof.</em>
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-cream/85">
          Auf unserer Anlage ist der{" "}
          <strong className="font-medium">Verein für Vielseitigkeitsreiterei e.V.</strong>{" "}
          beheimatet. Daraus ergeben sich regelmäßig interessante
          Trainings­möglich­keiten — über die klassische Pension hinaus.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {DISCIPLINES.map((d) => (
            <article
              key={d.name}
              className="rounded-sm bg-cream/10 p-7 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
            >
              <h3 className="font-serif text-3xl font-normal italic text-hay">
                {d.name}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-cream/90">
                {d.desc}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-12 text-sm uppercase tracking-[0.16em] text-cream/70">
          Beheimatung VfV e.V. — Termine auf Anfrage
        </p>
      </div>
    </section>
  );
}
