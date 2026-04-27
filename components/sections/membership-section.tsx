import { SectionLabel } from "@/components/ui/section-label";
import { PRICE_GROUPS } from "@/lib/membership";
import { SITE } from "@/lib/site";

export function MembershipSection() {
  return (
    <section
      id="mitgliedschaft"
      className="bg-paper px-6 py-24 lg:px-14 lg:py-32"
    >
      <div className="mx-auto max-w-[1280px]">
        <SectionLabel>Mitgliedschaft & Preise</SectionLabel>
        <h2 className="font-serif text-[clamp(40px,5.5vw,80px)] font-light leading-none tracking-[-0.03em]">
          Klar geregelt,
          <br />
          <em className="italic text-forest">familiär gelebt</em>.
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft">
          Sie möchten dem RVK beitreten? Hier finden Sie unsere aktuellen
          Beiträge im Überblick. Die Aufnahmegebühr wird sofort, der Jahresbeitrag
          jährlich zum 1.1. im Voraus fällig.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {PRICE_GROUPS.map((group) => (
            <article
              key={group.title}
              className="rounded-sm border border-ink/10 bg-cream p-7"
            >
              <h3 className="font-serif text-xl font-medium leading-tight">
                {group.title}
              </h3>
              <ul className="mt-5 space-y-3 text-sm">
                {group.rows.map((row) => (
                  <li
                    key={row.label}
                    className="flex items-baseline justify-between gap-4 border-b border-ink/10 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-ink-soft">
                      {row.label}
                      {row.detail && (
                        <span className="mt-1 block text-xs leading-snug text-ink-soft/70">
                          {row.detail}
                        </span>
                      )}
                    </span>
                    <span className="whitespace-nowrap font-serif text-base font-medium tabular-nums text-ink">
                      {row.amount}
                    </span>
                  </li>
                ))}
              </ul>
              {group.note && (
                <p className="mt-5 text-xs leading-relaxed text-ink-soft/80">
                  {group.note}
                </p>
              )}
            </article>
          ))}
        </div>

        <p className="mt-12 max-w-2xl border-l-2 border-forest/40 pl-6 text-base italic leading-relaxed text-ink-soft">
          Den Aufnahmeantrag senden wir Ihnen gerne zu — kurzer Anruf bei{" "}
          <a
            href={`tel:${SITE.contact.phoneTel}`}
            className="text-forest underline decoration-1 underline-offset-4"
          >
            {SITE.contact.phone}
          </a>
          {" "}oder eine E-Mail an{" "}
          <a
            href={`mailto:${SITE.contact.email}`}
            className="text-forest underline decoration-1 underline-offset-4"
          >
            {SITE.contact.email}
          </a>
          {" "}genügt.
        </p>
      </div>
    </section>
  );
}
