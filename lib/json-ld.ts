import { SITE } from "./site";

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "SportsActivityLocation"],
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  telephone: SITE.contact.phone,
  email: SITE.contact.email,
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
  sport: ["Eventing", "Dressage", "Show Jumping"],
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Reithalle 20×40 m" },
    { "@type": "LocationFeatureSpecification", name: "Ebbe-Flut-Platz 90×60 m" },
    { "@type": "LocationFeatureSpecification", name: "Dressurplatz 20×60 m" },
    { "@type": "LocationFeatureSpecification", name: "Führanlage" },
    { "@type": "LocationFeatureSpecification", name: "Longierzirkel" },
    { "@type": "LocationFeatureSpecification", name: "Longierhalle" },
    { "@type": "LocationFeatureSpecification", name: "Pferdesolarium" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      description: "Besichtigung nach Vereinbarung",
    },
  ],
} as const;
