import { DividerFlourish } from "@/components/ui/divider-flourish";
import { PullQuote } from "@/components/ui/pull-quote";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionLabel } from "@/components/ui/section-label";

export function About() {
  return (
    <section
      id="verein"
      className="bg-paper-dark px-6 py-24 lg:px-14 lg:py-32"
    >
      <div className="mx-auto max-w-[1280px]">
        <SectionLabel>Der Verein</SectionLabel>
        <SectionHeading>
          Seit über 70 Jahren
          <br />
          <em className="italic text-forest">für Pferd und Reiter</em>.
        </SectionHeading>

        <div className="mt-10 grid gap-12 text-lg leading-relaxed text-ink-soft lg:grid-cols-2 lg:gap-20">
          <div className="space-y-5">
            <p className="first-letter:float-left first-letter:mr-2 first-letter:font-serif first-letter:text-6xl first-letter:font-light first-letter:leading-none first-letter:text-forest">
              Der Reiterverein Kronsberg e. V. (RVK) ist seit 70 Jahren im südlichen
              Teil Hannovers beheimatet — direkt hinter der Stadtgrenze zwischen
              Hannover und Laatzen, unweit der Hildesheimer Straße, an der idyllischen
              Leinemasch.
            </p>
            <p>
              Zurzeit zählen wir rund 150 Mitglieder aller Altersgruppen und sind
              fester Bestandteil des Laatzener Vereinslebens. Unsere Mitglieder
              stammen aus Laatzen und Hannover, aber auch aus Sarstedt und der
              Region Hildesheim.
            </p>
          </div>
          <div className="space-y-5">
            <p>
              Bei uns fühlen sich Reiter aller Disziplinen wohl — Springen, Dressur,
              Freizeitreiten für Anfänger und Fortgeschrittene — sowie der
              voltigierende Nachwuchs ab sechs Jahren.
            </p>
            <p>
              Wir bieten Reit- und Voltigierunterricht auf insgesamt sieben
              vereinseigenen Schulpferden und Schulponys, sowie die Unterbringung
              Ihres eigenen Pferdes inklusive Weidedienst. Darüber hinaus bietet
              der RVK Abzeichenlehrgänge und Lehrgänge externer Trainer an.
            </p>
          </div>
        </div>

        <DividerFlourish className="mt-16" />

        <PullQuote attribution="Vorstand des RVK">
          Riskieren Sie einen kleinen Blick auf unsere Themen- und Bilderseiten
          — den Stall, den Unterricht, das bunte Vereinsleben. Sie können auch
          gerne einfach vorbeikommen und sich umschauen.
        </PullQuote>
      </div>
    </section>
  );
}
