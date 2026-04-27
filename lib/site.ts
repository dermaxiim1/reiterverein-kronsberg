export type SiteHourBlock = {
  readonly dayLabel: string;
  readonly note: string;
};

export const SITE = {
  name: "Reiterverein Kronsberg e.V.",
  shortName: "RVK",
  tagline: "Reiterverein seit über 70 Jahren · Hannover-Laatzen",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "https://reiterverein-kronsberg.vercel.app"),
  description:
    "Reiterverein Kronsberg e.V. — seit über 70 Jahren in Hannover-Laatzen, direkt an der Leinemasch. Reitunterricht auf vereinseigenen Schulpferden, Voltigieren ab 6 Jahren, 23 Innen- und Außenboxen für Einsteller.",
  owner: "Stephanie Nevado Navarro · 1. Vorsitzende",
  region: "Hannover-Laatzen · Leinemasch",
  founded: "1953",

  contact: {
    phone: "0179 6697138",
    phoneTel: "+491796697138",
    phoneLabel: "Boxen-Anfragen · Frau Nevado-Navarro",
    email: "info@reiterverein-kronsberg.de",
    contactForm: "/kontakt",
  },

  address: {
    street: "Hildesheimer Straße 2a",
    postalCode: "30880",
    city: "Laatzen",
    region: "Region Hannover",
    googleMapsQuery: "Hildesheimer+Stra%C3%9Fe+2a,+30880+Laatzen",
    geo: { lat: 52.3145, lng: 9.7935 },
    transit: "Stadtbahn 1/2 — Haltestelle Am Brabrinke",
  },

  visitNote: [
    { dayLabel: "Schnupperstunden", note: "Nach Vereinbarung" },
    { dayLabel: "Boxen-Besichtigung", note: "Telefonisch absprechen" },
  ] satisfies readonly SiteHourBlock[],

  nav: [
    { href: "#verein", label: "Der Verein" },
    { href: "#reitanlage", label: "Reitanlage" },
    { href: "#schulpferde", label: "Schulpferde" },
    { href: "#unterricht", label: "Unterricht" },
    { href: "#mitgliedschaft", label: "Mitgliedschaft" },
    { href: "#anfahrt", label: "Anfahrt" },
  ] as const,
} as const;
