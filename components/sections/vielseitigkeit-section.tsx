import { SectionLabel } from "@/components/ui/section-label";
import { SITE } from "@/lib/site";

const ANGEBOTE = [
  {
    name: "Reiten",
    schedule: "Mo–Fr nachmittags & abends",
    desc: "Reitunterricht für Anfänger und Fortgeschrittene auf vereinseigenen Schulpferden. Dressur- und Springstunden für Privatreiter — individuelle Vereinbarungen jederzeit möglich.",
  },
  {
    name: "Voltigieren",
    schedule: "Freitags 17–18 Uhr",
    desc: "Spielerisch und ohne Zwang in den Reitsport — für Kinder ab sechs Jahren. Umgang mit dem Pferd, Gleichgewicht auf dem Pferderücken, Grundsitz und Stütz.",
  },
  {
    name: "Schnupperstunde",
    schedule: "Nach Vereinbarung",
    desc: "Zuschauen oder selbst ausprobieren — eine erste Reit- oder Voltistunde, ohne Verpflichtung. Schreiben Sie uns einfach eine kurze Nachricht.",
  },
];

export function VielseitigkeitSection() {
  return (
    <section
      id="unterricht"
      className="bg-forest px-6 py-24 text-cream lg:px-14 lg:py-32"
    >
      <div className="mx-auto max-w-[1280px]">
        <SectionLabel className="text-cream/85">Unterricht</SectionLabel>
        <h2 className="font-serif text-[clamp(40px,5.5vw,80px)] font-light leading-none tracking-[-0.03em] text-cream">
          Anfänger oder
          <br />
          <em className="italic text-hay">Routinier</em>.
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-cream/85">
          Dem RVK liegt die <strong className="font-medium">Basisausbildung</strong> besonders
          am Herzen. Erfahrene Trainer und Ausbilder, qualifizierter und individueller
          Unterricht — auf unseren vereinseigenen Schulpferden.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {ANGEBOTE.map((a) => (
            <article
              key={a.name}
              className="rounded-sm bg-cream/10 p-7 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
            >
              <h3 className="font-serif text-3xl font-normal italic text-hay">
                {a.name}
              </h3>
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-cream/85">
                {a.schedule}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-cream/90">
                {a.desc}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${SITE.contact.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-cream px-7 py-4 text-sm font-medium tracking-wider text-forest transition-all hover:-translate-y-0.5 hover:bg-hay"
          >
            Schnupperstunde anfragen <span aria-hidden>→</span>
          </a>
          <span className="text-xs uppercase tracking-[0.14em] text-cream/70">
            Hallenplan und genaue Zeiten auf Anfrage
          </span>
        </div>
      </div>
    </section>
  );
}
