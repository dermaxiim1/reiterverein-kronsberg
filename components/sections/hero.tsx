import Image from "next/image";

import { StampBadge } from "@/components/ui/stamp-badge";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-ink">
      <Image
        src="/images/hero/anlage.jpg"
        alt="Pferd galoppiert auf der Koppel im Abendlicht"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/45 to-ink/85"
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1440px] flex-col justify-end px-6 pb-24 pt-40 lg:px-14 lg:pb-32 lg:pt-48">
        <div className="mb-7 inline-flex items-center gap-3 self-start text-xs uppercase tracking-[0.22em] text-cream/85">
          <span className="h-px w-7 bg-cream/60" />
          {SITE.region}
          <span className="h-px w-7 bg-cream/60" />
        </div>

        <h1 className="font-serif text-[clamp(48px,8vw,120px)] font-light leading-[0.95] tracking-[-0.03em] text-cream">
          Reitunterricht,
          <br />
          <em className="italic text-hay">Voltigieren</em> und Boxen
          <br />
          seit über 70 Jahren.
        </h1>

        <p className="mt-9 max-w-2xl text-lg leading-relaxed text-cream/85 md:text-xl">
          Der Reiterverein Kronsberg e.V. — südlich von Hannover, direkt an der
          Leinemasch. Reitstunden auf vereinseigenen Schulpferden, Voltigieren ab
          sechs Jahren und 23 Boxen für Einsteller.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={`tel:${SITE.contact.phoneTel}`}
            className="inline-flex items-center gap-2 rounded-full bg-cream px-7 py-4 text-sm font-medium tracking-wider text-ink transition-all hover:-translate-y-0.5 hover:bg-hay focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
          >
            {SITE.contact.phone} <span aria-hidden>→</span>
          </a>
          <a
            href={`mailto:${SITE.contact.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-7 py-4 text-sm font-medium tracking-wider text-cream transition-all hover:-translate-y-0.5 hover:bg-cream/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
          >
            Schnupperstunde anfragen
          </a>
        </div>

        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.16em] text-cream/70">
          <span>~150 Mitglieder</span>
          <span aria-hidden className="opacity-50">·</span>
          <span>7 Schulpferde &amp; Ponys</span>
          <span aria-hidden className="opacity-50">·</span>
          <span>Halle 43 × 20 m</span>
          <span aria-hidden className="opacity-50">·</span>
          <span>Direkt an der Leinemasch</span>
        </div>
      </div>

      <StampBadge
        big="RVK"
        small={`Reiterverein · seit ${SITE.founded}`}
        className="absolute right-6 top-28 z-10 size-32 rotate-[8deg] md:right-14 md:top-32 md:size-36"
      />
    </section>
  );
}
