import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background image — placeholder; finale Foto später nach /public/images/hero/ */}
      <div
        className="absolute inset-0 bg-ink"
        style={{
          backgroundImage:
            "url(/images/hero/anlage.jpg), linear-gradient(135deg, var(--forest-deep), var(--ink))",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      {/* Gradient overlay */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/40 to-ink/80"
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1440px] flex-col justify-end px-6 pb-24 pt-40 lg:px-14 lg:pb-32 lg:pt-48">
        <div className="mb-7 inline-flex items-center gap-3 self-start text-xs uppercase tracking-[0.22em] text-cream/85">
          <span className="h-px w-7 bg-cream/60" />
          {SITE.region}
          <span className="h-px w-7 bg-cream/60" />
        </div>

        <h1 className="font-serif text-[clamp(48px,8vw,120px)] font-light leading-[0.95] tracking-[-0.03em] text-cream">
          Pensionsstall für
          <br />
          <em className="italic text-hay">Vielseitigkeitsreiter</em>
          <br />
          vor den Toren Hannovers.
        </h1>

        <p className="mt-9 max-w-2xl text-lg leading-relaxed text-cream/85 md:text-xl">
          Reithalle, Ebbe-Flut-Platz, Dressurplatz, Führanlage, Longierzirkel,
          Longierhalle und Pferdesolarium — auf einem Hof, mit direktem Wald­anschluss
          und Beheimatung des VfV e.V.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={`tel:${SITE.contact.phoneTel}`}
            className="inline-flex items-center gap-2 rounded-full bg-cream px-7 py-4 text-sm font-medium tracking-wider text-ink transition-all hover:-translate-y-0.5 hover:bg-hay"
          >
            {SITE.contact.phone} <span aria-hidden>→</span>
          </a>
          <a
            href={`mailto:${SITE.contact.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-7 py-4 text-sm font-medium tracking-wider text-cream transition-all hover:-translate-y-0.5 hover:bg-cream/10"
          >
            E-Mail schreiben
          </a>
        </div>

        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.16em] text-cream/70">
          <span>7 Anlagen</span>
          <span aria-hidden className="opacity-50">·</span>
          <span>Direkter Wald­anschluss</span>
          <span aria-hidden className="opacity-50">·</span>
          <span>Beheimatung VfV e.V.</span>
          <span aria-hidden className="opacity-50">·</span>
          <span>{SITE.address.street}, {SITE.address.city}</span>
        </div>
      </div>
    </section>
  );
}
