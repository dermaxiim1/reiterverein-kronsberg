import { SectionLabel } from "@/components/ui/section-label";
import { SITE } from "@/lib/site";

export function ContactSection() {
  return (
    <section id="kontakt" className="bg-paper-dark px-6 py-24 lg:px-14 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        <SectionLabel>Anfahrt & Kontakt</SectionLabel>
        <h2 className="font-serif text-[clamp(40px,5.5vw,80px)] font-light leading-none tracking-[-0.03em]">
          Schauen Sie
          <br />
          <em className="italic text-forest">vorbei</em>.
        </h2>

        <div className="mt-14 grid gap-10 lg:grid-cols-3 lg:gap-12">
          {/* Adresse */}
          <article className="rounded-sm border border-ink/10 bg-cream p-8">
            <h3 className="text-xs uppercase tracking-[0.16em] text-forest">
              Adresse
            </h3>
            <p className="mt-4 font-serif text-3xl italic">{SITE.address.street}</p>
            <p className="mt-2 text-base leading-relaxed text-ink-soft">
              {SITE.address.postalCode} {SITE.address.city}
              <br />
              {SITE.address.region}
            </p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${SITE.address.googleMapsQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-sm text-forest underline decoration-1 underline-offset-4 hover:text-forest-deep"
            >
              In Google Maps öffnen →
            </a>
          </article>

          {/* Kontakt */}
          <article className="rounded-sm border border-ink/10 bg-cream p-8">
            <h3 className="text-xs uppercase tracking-[0.16em] text-forest">
              Kontakt
            </h3>
            <a
              href={`tel:${SITE.contact.phoneTel}`}
              className="mt-4 block transition-opacity hover:opacity-80"
            >
              <span className="text-xs uppercase tracking-[0.14em] text-ink-soft">
                Telefon
              </span>
              <span className="mt-1 block font-serif text-2xl italic">
                {SITE.contact.phone}
              </span>
            </a>
            <a
              href={`mailto:${SITE.contact.email}`}
              className="mt-6 block transition-opacity hover:opacity-80"
            >
              <span className="text-xs uppercase tracking-[0.14em] text-ink-soft">
                E-Mail
              </span>
              <span className="mt-1 block font-serif text-xl italic">
                {SITE.contact.email}
              </span>
            </a>
            <a
              href={`tel:${SITE.contact.phoneTel}`}
              className="mt-8 inline-block rounded-full bg-forest px-6 py-3 text-sm font-medium text-cream transition-all hover:-translate-y-0.5 hover:bg-forest-deep"
            >
              Jetzt anrufen
            </a>
          </article>

          {/* Besuch */}
          <article className="rounded-sm border border-ink/10 bg-cream p-8">
            <h3 className="text-xs uppercase tracking-[0.16em] text-forest">
              Besichtigung
            </h3>
            <p className="mt-4 font-serif text-2xl italic">Nach Vereinbarung</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Wir nehmen uns gerne Zeit für eine Führung durch die Anlage —
              telefonisch oder per E-Mail kurz Bescheid geben, dann finden wir einen
              passenden Termin.
            </p>
            <p className="mt-5 text-xs uppercase tracking-[0.14em] text-ink-soft/85">
              Inhaber {SITE.owner}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
