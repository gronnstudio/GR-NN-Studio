import { FOTO, type Beeld } from "./fotos"

// De dag in de tuin: het ordenende idee van de site. Elk dagdeel bundelt de
// vakken die bij dat moment horen. Teksten en prijzen komen uit Nicks
// bestaande teksten; de indeling is nieuw.

export type DagdeelId = "ochtend" | "middag" | "avond" | "nacht"

export type Dagdeel = {
  id: DagdeelId
  van: number
  tot: number
  tijd: string
  moment: string
  strook: string
  kop: string
  zin: string
  vakken: { naam: string; prijs: string }[]
  strookFoto: Beeld
}

export const DAGDELEN: Dagdeel[] = [
  {
    id: "ochtend", van: 7, tot: 12, tijd: "07:00",
    moment: "Ochtend · waar de zon valt",
    strook: "Koffie in de zon",
    kop: "Koffie in de zon.",
    zin: "Een terras dat na een jaar nog strak ligt, begint onder de tegels. In Geulle legde ik 24 m² in twee dagen.",
    vakken: [
      { naam: "Tuinontwerp en indeling", prijs: "vanaf € 450" },
      { naam: "Aanleg, terras en bestrating", prijs: "vaste prijs na offerte" },
      { naam: "Materiaal en detaillering", prijs: "in elk ontwerp" },
    ],
    strookFoto: FOTO.terrasTafel,
  },
  {
    id: "middag", van: 12, tot: 18, tijd: "13:00",
    moment: "Middag · spelen, plukken, oogsten",
    strook: "Spelen, plukken",
    kop: "Wat er groeit, past bij de grond.",
    zin: "Een complete border met plantlijst en plan, of een op maat. Voor zon of schaduw, voor vlinders of voor de keuken.",
    vakken: [
      { naam: "Beplantingsplan", prijs: "op maat" },
      { naam: "Borderpakketten · 5, 10 of 15 m²", prijs: "€ 75 per m², aangeplant" },
    ],
    strookFoto: FOTO.vlinder,
  },
  {
    id: "avond", van: 18, tot: 23, tijd: "19:00",
    moment: "Avond · tot rust komen",
    strook: "Tot rust komen",
    kop: "Water dat zijn weg vindt.",
    zin: "Twee vijvers, één samenhangend watersysteem. Doorlichting, renovatie, aanleg en de najaarsbeurt.",
    vakken: [
      { naam: "Water en vijvers", prijs: "vanaf € 175" },
      { naam: "Renovatie", prijs: "offerte na kennismaking" },
    ],
    strookFoto: FOTO.waterval,
  },
  {
    id: "nacht", van: 23, tot: 7, tijd: "23:00",
    moment: "Nacht · wat er leeft als jij slaapt",
    strook: "Wat er leeft",
    kop: "Herfstblad is geen afval.",
    zin: "Het voedt je bodem en beschermt insecten en egels. Een gat in de schutting, een bladhoop en een veilige vijverrand helpen de egel de winter door.",
    vakken: [],
    strookFoto: FOTO.egel,
  },
]

/** Het dagdeel van een uur (0–23). */
export function dagdeelVan(uur: number): DagdeelId {
  if (uur >= 7 && uur < 12) return "ochtend"
  if (uur >= 12 && uur < 18) return "middag"
  if (uur >= 18 && uur < 23) return "avond"
  return "nacht"
}

/**
 * Draait vóór de eerste weergave: zet het dagdeel van nu (in Stein) op
 * <html data-nu>, zodat de strook meteen goed staat zonder te verspringen.
 * Klein en zonder afhankelijkheden, want het wordt inline meegestuurd.
 */
export const NU_SCRIPT = `try{var u=+new Intl.DateTimeFormat("nl-NL",{hour:"numeric",hourCycle:"h23",timeZone:"Europe/Amsterdam"}).format(new Date());document.documentElement.dataset.nu=u>=7&&u<12?"ochtend":u>=12&&u<18?"middag":u>=18&&u<23?"avond":"nacht"}catch(e){}`
