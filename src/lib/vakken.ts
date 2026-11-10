import { BEELD, type Beeld } from "./beelden"

// De vakken van GRØNN Studio zoals de bezoeker ze zoekt. Teksten en prijzen
// komen uit diensten.ts (de live site, nov 2026); hier alleen anders
// gegroepeerd. Een prijs wijzigen: in diensten.ts én hier.

export type Vak = {
  slug: string
  naam: string
  zin: string
  prijs: string
  prijsUitleg?: string
  beeld: Beeld
}

export const VAKKEN: Vak[] = [
  {
    slug: "tuinontwerp",
    naam: "Tuinontwerp",
    zin: "Een plan voor de hele tuin of een deel ervan, met materialen en een beplantingsplan.",
    prijs: "vanaf € 450",
    prijsUitleg: "Leg ik het ook aan, dan verreken ik de helft.",
    beeld: BEELD.overzicht,
  },
  {
    slug: "beplanting",
    naam: "Beplanting",
    zin: "Borders die bij de grond en het licht passen, aangeplant en klaar om te groeien.",
    prijs: "€ 75 / m²",
    prijsUitleg: "Per m² border, planten inbegrepen.",
    beeld: BEELD.aanplant,
  },
  {
    slug: "aanleg",
    naam: "Aanleg",
    zin: "Terras, paden, randen en grondwerk. Zelf uitgevoerd, met de voorbereiding die het resultaat bepaalt.",
    prijs: "vanaf € 3.000",
    beeld: BEELD.terras,
  },
  {
    slug: "vijvers",
    naam: "Water en vijvers",
    zin: "Een vijver die troebel, lek of vermoeid is, opnieuw laten werken. Of een nieuwe vijver, waterval of beekloop.",
    prijs: "vanaf € 5.000",
    prijsUitleg: "Eerst een doorlichting van € 195, verrekend bij een opdracht boven € 750.",
    beeld: BEELD.waterval,
  },
  {
    slug: "onderhoud",
    naam: "Vijveronderhoud",
    zin: "Voorjaar opstarten, najaar afsluiten, blad eruit en het filter schoon. Los of met een vast abonnement.",
    prijs: "vanaf € 45 / mnd",
    prijsUitleg: "Najaarsbeurt los: € 250 – € 450.",
    beeld: BEELD.rand,
  },
]
