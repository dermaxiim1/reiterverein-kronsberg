import { SectionHeading } from "@/components/ui/section-heading";
import { SectionLabel } from "@/components/ui/section-label";
import { SITE } from "@/lib/site";

export function ContactSection() {
  return (
    <section id="anfahrt" className="bg-paper-dark px-6 py-24 lg:px-14 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        <SectionLabel>Anfahrt & Kontakt</SectionLabel>
        <SectionHeading>
          So finden
          <br />
          <em className="italic text-forest">Sie zu uns</em>.
        </SectionHeading>

        <div className="mt-14 grid gap-10 lg:grid-cols-3 lg:gap-12">
          {/* Adresse + Anfahrt */}
          <article className="rounded-sm border border-ink/10 bg-cream p-8 lg:col-span-2">
            <h3 className="text-xs uppercase tracking-[0.16em] text-forest">
              Adresse
            </h3>
            <p className="mt-4 font-serif text-3xl italic">{SITE.address.street}</p>
            <p className="mt-2 text-base leading-relaxed text-ink-soft">
              {SITE.address.postalCode} {SITE.address.city}
              <br />
              {SITE.address.region}
            </p>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <h4 className="text-xs uppercase tracking-[0.14em] text-forest">
                  Mit dem Auto
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  Aus Hannover kommend auf der Hildesheimer Straße in Richtung
                  Laatzen. Nach der Wilkenburger Straße sind es noch ca. 200 m. Die
                  Einfahrt zum RVK befindet sich direkt hinter der Tankstelle
                  rechts.
                </p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-[0.14em] text-forest">
                  Mit der Stadtbahn
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  Linie 1 oder 2 bis zur Haltestelle „Am Brabrinke". Von dort etwa
                  100 Meter stadtauswärts gehen — direkt hinter der Tankstelle
                  rechts ist der Zugang.
                </p>
              </div>
            </div>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${SITE.address.googleMapsQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block text-sm text-forest underline decoration-1 underline-offset-4 hover:text-forest-deep"
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
              <span className="mt-1 block text-xs text-ink-soft/80">
                {SITE.contact.phoneLabel}
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
            <p className="mt-6 text-xs uppercase tracking-[0.14em] text-ink-soft/85">
              {SITE.owner}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
