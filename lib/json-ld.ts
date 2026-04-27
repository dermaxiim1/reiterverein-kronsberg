import { SITE } from "./site";

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["SportsClub", "SportsActivityLocation", "LocalBusiness"],
  name: SITE.name,
  alternateName: SITE.shortName,
  description: SITE.description,
  url: SITE.url,
  telephone: SITE.contact.phone,
  email: SITE.contact.email,
  foundingDate: SITE.founded,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    postalCode: SITE.address.postalCode,
    addressLocality: SITE.address.city,
    addressRegion: "Niedersachsen",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.address.geo.lat,
    longitude: SITE.address.geo.lng,
  },
  sport: ["Equestrian", "Dressage", "Show Jumping", "Vaulting"],
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Reithalle 43 × 20 m" },
    { "@type": "LocationFeatureSpecification", name: "Außenreitplatz 60 × 30 m" },
    { "@type": "LocationFeatureSpecification", name: "Reiterstübchen / Aufenthaltsraum" },
    { "@type": "LocationFeatureSpecification", name: "23 Innen- und Außenboxen" },
    { "@type": "LocationFeatureSpecification", name: "Sommer- und Winterweiden + Paddocks" },
    { "@type": "LocationFeatureSpecification", name: "Direkter Zugang zur Leinemasch" },
  ],
  member: [
    { "@type": "Person", name: "Stephanie Nevado Navarro", jobTitle: "1. Vorsitzende" },
    { "@type": "Person", name: "Bettina Lachmann", jobTitle: "2. Vorsitzende" },
  ],
} as const;
