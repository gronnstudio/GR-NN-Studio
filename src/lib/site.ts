// Wie GRØNN Studio is, op één plek: naam, adres, KVK, contact. Gebruikt door
// de voet, Kennismaken, de juridische pagina's en de structured data.
// Bron: gronn.studio (GRONN26, src/lib/business.ts), nov 2026.

export const SITE = {
  naam: "GRØNN Studio",
  url: "https://gronn.studio",
  eigenaar: "Nick Peters",
  positionering:
    "Ik maak en onderhoud vijvers en natuurlijke tuinen voor huiseigenaren in Stein en omgeving, met een vaste prijs vooraf.",
  adres: { straat: "Kelderstraat 32", postcode: "6171 GB", plaats: "Stein", provincie: "Limburg" },
  werkgebied: "Stein en omgeving, tot ongeveer 30 km (Maastricht, Heerlen, Kerkrade)",
  email: "hello@gronn.studio",
  telefoon: "+31 6 181 180 14",
  telefoonHref: "tel:+31618118014",
  whatsapp: "https://wa.me/31618118014",
  instagram: "https://instagram.com/gronn.studio",
  linkedin: "https://www.linkedin.com/in/nick-peters-58678a431",
  kvk: "42072154",
  btw: "NL005473265B04",
  rechtsvorm: "eenmanszaak",
} as const

/** WhatsApp met een voorbereid bericht. */
export const whatsappMet = (tekst: string) => `${SITE.whatsapp}?text=${encodeURIComponent(tekst)}`
