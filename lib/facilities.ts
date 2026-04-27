export type Facility = {
  id:
    | "reithalle"
    | "ebbe-flut-platz"
    | "dressurplatz"
    | "fuehranlage"
    | "longierzirkel"
    | "longierhalle"
    | "solarium";
  name: string;
  dimensions?: string;
  capacity?: string;
  blurb: string;
  icon: string;
};

export const FACILITIES: Facility[] = [
  {
    id: "reithalle",
    name: "Reithalle",
    dimensions: "20 × 40 m",
    blurb:
      "Beheizte Reithalle mit gepflegtem Boden — wetterunabhängig trainieren, das ganze Jahr.",
    icon: "Home",
  },
  {
    id: "ebbe-flut-platz",
    name: "Ebbe-Flut-Platz",
    dimensions: "90 × 60 m",
    blurb:
      "Großzügiger All-Wetter-Platz mit hydraulischer Drainage. Springen, Dressur, Galopp — auch nach Regen sofort bereit.",
    icon: "LandPlot",
  },
  {
    id: "dressurplatz",
    name: "Dressurplatz",
    dimensions: "20 × 60 m",
    blurb:
      "Outdoor-Dressurviereck in Turniermaßen. Optimaler Boden für Lektionsarbeit und Vorbereitung.",
    icon: "Square",
  },
  {
    id: "fuehranlage",
    name: "Führanlage",
    capacity: "8 Plätze",
    blurb:
      "Pferdegerechtes Aufwärmen und Lockern. Schonend für die Sehnen — täglich nutzbar.",
    icon: "RotateCw",
  },
  {
    id: "longierzirkel",
    name: "Longierzirkel",
    blurb:
      "Geschützter Außenzirkel für gleichmäßiges Longieren und Bodenarbeit.",
    icon: "Circle",
  },
  {
    id: "longierhalle",
    name: "Longierhalle",
    blurb:
      "Überdacht longieren — auch bei Regen, Schnee und Hitze. Ideal für junge Pferde.",
    icon: "CircleDot",
  },
  {
    id: "solarium",
    name: "Pferdesolarium",
    blurb:
      "Wärme nach dem Training oder im Winter. Unterstützt Muskulatur und Wohlbefinden.",
    icon: "Sun",
  },
];
