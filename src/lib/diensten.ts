import { BEELD, type Beeld } from "./beelden"

// De diensten en hun gepubliceerde prijzen (incl. btw). Bedragen komen uit
// de live site (GRONN26, src/lib/data/pricing.ts, nov 2026); "vanaf" waar
// het een ondergrens is. Een prijs wijzigen is een besluit van Nick, geen
// tekstkeuze: pas hem alleen hier aan.

export type Prijsregel = { wat: string; prijs: string; uitleg?: string }

export type Dienst = {
  slug: "vijvers" | "tuinen"
  naam: string
  kop: string[]
  intro: string
  beeld: Beeld
  /** Wat ik doe, als genummerde onderdelen. */
  onderdelen: { naam: string; tekst: string }[]
  prijzen: Prijsregel[]
  /** Wat de bezoeker doet als dit past. */
  volgende: string
}

export const DIENSTEN: Dienst[] = [
  {
    slug: "vijvers",
    naam: "Vijvers",
    kop: ["Water dat zijn", "weg vindt."],
    intro:
      "Een vijver is een systeem: water, techniek, planten en de dieren die er al wonen. Ik kijk eerst waar het misgaat, en pas dan wat er moet gebeuren. Renoveren, aanleggen of onderhouden.",
    beeld: BEELD.waterval,
    onderdelen: [
      { naam: "Diagnose", tekst: "Ik kom kijken naar het water, de techniek en de beplanting. Je hoort wat er speelt en wat er nodig is om het op te lossen." },
      { naam: "Renovatie", tekst: "Een vijver die troebel, lek of vermoeid is, opnieuw laten werken. Leidingwerk, filter, randen en beplanting als één geheel." },
      { naam: "Aanleg", tekst: "Een nieuwe vijver, waterval of beekloop die past bij de tuin en bij hoe je hem wilt onderhouden." },
      { naam: "Onderhoud", tekst: "Voorjaar opstarten, najaar afsluiten, blad eruit en het filter schoon. Los of met een vast abonnement." },
    ],
    prijzen: [
      { wat: "Vijverdoorlichting", prijs: "€ 195", uitleg: "Volledig verrekend bij een opdracht boven € 750." },
      { wat: "Najaarsbeurt", prijs: "€ 250 – € 450", uitleg: "Naar grootte en staat; een verwaarloosde vijver pas na een blik ter plaatse." },
      { wat: "Bladnet erop en eraf", prijs: "€ 125 – € 250", uitleg: "Naar oppervlak, ophalen in december inbegrepen." },
      { wat: "Onderhoudsabonnement", prijs: "vanaf € 45 / mnd", uitleg: "Twee, vier of zes bezoeken per jaar." },
      { wat: "Renovatie of aanleg", prijs: "vanaf € 5.000", uitleg: "Na een bezoek op locatie, met een vaste prijs vooraf." },
    ],
    volgende: "Vertel wat je ziet in je vijver.",
  },
  {
    slug: "tuinen",
    naam: "Tuinen",
    kop: ["Tuinen die met", "de seizoenen", "meegroeien."],
    intro:
      "Een natuurlijke tuin begint bij de plek: waar het water heen loopt, welke grond er ligt en waar de zon valt. Daarop kies ik de planten, de materialen en de vorm. Ik ontwerp, leg aan en onderhoud.",
    beeld: BEELD.terras,
    onderdelen: [
      { naam: "Advies op locatie", tekst: "Ik kom langs en kijk mee: wat er goed gaat, wat beter kan en waar je begint. Met een schriftelijk advies." },
      { naam: "Ontwerp", tekst: "Een plan voor de hele tuin of een deel ervan, met materialen en een beplantingsplan." },
      { naam: "Beplanting", tekst: "Borders die bij de grond en het licht passen, aangeplant en klaar om te groeien." },
      { naam: "Aanleg", tekst: "Terras, paden, randen en grondwerk. Zelf uitgevoerd, met de voorbereiding die het resultaat bepaalt." },
    ],
    prijzen: [
      { wat: "Advies op locatie", prijs: "vanaf € 195", uitleg: "Bezoek met schriftelijk advies." },
      { wat: "Tuinontwerp", prijs: "vanaf € 450", uitleg: "Leg ik het ook aan, dan verreken ik de helft met de eerste factuur." },
      { wat: "Beplanting", prijs: "€ 75 / m²", uitleg: "Per m² border, planten inbegrepen." },
      { wat: "Aanleg tuin of terras", prijs: "vanaf € 3.000" },
      { wat: "Tuin omvormen", prijs: "vanaf € 5.000", uitleg: "Een deel van de tuin opnieuw inrichten." },
    ],
    volgende: "Vertel wat je wilt met je tuin.",
  },
]

export const dienstVoor = (slug: Dienst["slug"]) => DIENSTEN.find((d) => d.slug === slug)!
