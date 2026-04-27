export type SiteHourBlock = {
  readonly dayLabel: string;
  readonly note: string;
};

export const SITE = {
  name: "Reitanlage Münkel",
  tagline: "Pensionsstall & Vielseitigkeit · Langenhagen",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "https://reitanlage-muenkel.vercel.app"),
  description:
    "Reitanlage Münkel in Langenhagen bei Hannover — Pensionsstall mit Reithalle, Ebbe-Flut-Platz, Dressurplatz, Führanlage und Solarium. Direkter Waldanschluss. Beheimatung des Vereins für Vielseitigkeitsreiterei e.V.",
  owner: "Marc Münkel",
  region: "Region Hannover",

  contact: {
    phone: "+49 172 4002687",
    phoneTel: "+491724002687",
    email: "marc.muenkel@web.de",
  },

  address: {
    street: "Twenge 1",
    postalCode: "30855",
    city: "Langenhagen",
    region: "Region Hannover",
    googleMapsQuery: "Twenge+1,+30855+Langenhagen",
    geo: { lat: 52.4485, lng: 9.7406 }, // Langenhagen approx
  },

  visitNote: [
    { dayLabel: "Besichtigung", note: "Nach Vereinbarung" },
    { dayLabel: "Anlieferung / Abholung", note: "Nach Absprache" },
  ] satisfies readonly SiteHourBlock[],

  nav: [
    { href: "#ueber-uns", label: "Über uns" },
    { href: "#anlagen", label: "Anlagen" },
    { href: "#pension", label: "Pension" },
    { href: "#vielseitigkeit", label: "Vielseitigkeit" },
    { href: "#galerie", label: "Galerie" },
    { href: "#kontakt", label: "Kontakt" },
  ] as const,
} as const;
