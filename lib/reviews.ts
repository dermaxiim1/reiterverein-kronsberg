export type Review = {
  text: string;
  author: string;
  detail: string;
};

// Repräsentative Stimmen — durch echte O-Töne von Einstellern ersetzen, sobald Marc sie liefert.
export const REVIEWS: Review[] = [
  {
    text:
      "Wir sind seit elf Jahren hier. Wenn etwas mit unserem Pferd ist, weiß Marc es vor uns. Diese Aufmerksamkeit findet man nicht überall.",
    author: "Anke L.",
    detail: "Einstellerin · Pferd „Cara"",
  },
  {
    text:
      "Die Plätze sind das ganze Jahr nutzbar. Wir reiten im November genauso gut wie im Mai — der Ebbe-Flut-Platz ist Gold wert.",
    author: "Stephan R.",
    detail: "Einsteller · Vielseitigkeit",
  },
  {
    text:
      "Vom Hof in den Wald in zwei Minuten. Genau das, weshalb wir hier sind. Lange Ausritte, ohne Asphalt zu sehen.",
    author: "Birgit & Klaus M.",
    detail: "Stammgäste seit 2018",
  },
  {
    text:
      "Marc nimmt sich Zeit. Auch wenn ein Pferd neu kommt — er ist persönlich dabei, beim Eingewöhnen, beim Anweiden. Das ist selten geworden.",
    author: "Constanze T.",
    detail: "Einstellerin · Junges Pferd",
  },
];
