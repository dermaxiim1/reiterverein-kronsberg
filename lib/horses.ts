export type Horse = {
  id: string;
  name: string;
  breed: string;
  age: number;
  discipline: string;
  story: string;
  image: string;
};

// Repräsentative Stallbewohner — Daten austauschen sobald Marc echte Profile liefert.
export const HORSES: Horse[] = [
  {
    id: "lou",
    name: "Lou",
    breed: "Hannoveraner Wallach",
    age: 14,
    discipline: "Vielseitigkeit · M-Niveau",
    story:
      "Lou kennt jeden Stein im angrenzenden Wald. Mit ihm fängt jeder Geländetag früh an und endet auf der Weide hinter der Halle.",
    image: "/images/horses/lou.jpg",
  },
  {
    id: "cara",
    name: "Cara",
    breed: "Hannoveraner Stute",
    age: 11,
    discipline: "Dressur · Klasse L",
    story:
      "Cara liebt das Outdoor-Viereck im Frühjahr. Wer sie longieren will, braucht eine Tasse Kaffee — sie nimmt sich Zeit.",
    image: "/images/horses/cara.jpg",
  },
  {
    id: "wotan",
    name: "Wotan",
    breed: "Holsteiner Wallach",
    age: 9,
    discipline: "Springen · M*",
    story:
      "Wotan kam als Vierjähriger zu uns. Heute fliegt er Parcours bis 1,30 m — ohne mit der Wimper zu zucken.",
    image: "/images/horses/wotan.jpg",
  },
  {
    id: "diva",
    name: "Diva",
    breed: "Westfälische Stute",
    age: 8,
    discipline: "Dressur · Klasse A",
    story:
      "Diva ist die Sonne im Stall. Wenn die anderen unruhig sind, bleibt sie ruhig. Marcs Lieblings-Schülerinnen­pferd.",
    image: "/images/horses/diva.jpg",
  },
  {
    id: "falke",
    name: "Falke",
    breed: "Trakehner Wallach",
    age: 16,
    discipline: "Gelände · Lehrpferd",
    story:
      "Falke ist unser ältester Schatz. Er hat hier mehr Anfänger ins Sattel gesetzt als jeder andere — und immer mit Würde.",
    image: "/images/horses/falke.jpg",
  },
  {
    id: "lara",
    name: "Lara",
    breed: "Hannoveraner Stute",
    age: 7,
    discipline: "Dressur · A nach M",
    story:
      "Junge Stute mit großem Versprechen. Wer Lara nach dem Reiten in den Stall bringt, kommt nie ohne Möhre zurück.",
    image: "/images/horses/lara.jpg",
  },
];
