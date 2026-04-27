export type EquineEvent = {
  id: string;
  title: string;
  cadence: string;
  desc: string;
  badge?: string;
};

// Typische Veranstaltungen — Marc liefert echte Termine, dann nach Jahr/Monat sortieren.
export const EVENTS: EquineEvent[] = [
  {
    id: "vfv-dressurlehrgang",
    title: "VfV Dressurlehrgang",
    cadence: "Frühjahr & Herbst",
    desc: "Zweitägiger Lehrgang mit erfahrenem Trainer, offen für Mitglieder und Gastreiter. Anfänger bis M-Niveau, kleine Gruppen.",
    badge: "Lehrgang",
  },
  {
    id: "gelaende-tag",
    title: "Gelände- und Cross-Tag",
    cadence: "Mai & September",
    desc: "Ausritte mit Geländesprüngen im angrenzenden Wald. Vorbereitung für die Vielseitigkeitsturniere des VfV e.V.",
    badge: "Vereinstag",
  },
  {
    id: "spring-clinic",
    title: "Spring-Clinic",
    cadence: "Sommer",
    desc: "Drei-Tages-Clinic auf dem Ebbe-Flut-Platz. Stangen, Reihen, Linienführung — bis hinauf zu M-Parcours.",
    badge: "Lehrgang",
  },
  {
    id: "stallfest",
    title: "Stallfest",
    cadence: "Spätsommer",
    desc: "Jahres-Highlight für Einsteller, Familie und Freunde. Hofführung, kleines Buffet, am Abend Lagerfeuer.",
    badge: "Fest",
  },
  {
    id: "winter-treffen",
    title: "Winter-Stammtisch",
    cadence: "Jeden zweiten Freitag",
    desc: "Locker zusammenkommen, planen, fachsimpeln. Von November bis März im warmen Aufenthaltsraum.",
    badge: "Stammtisch",
  },
];
