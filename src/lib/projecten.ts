import { BEELD, type Beeld } from "./beelden"

// De dossiers: alleen echt werk, met toestemming van de klant. Elke tekst en
// elk getal komt uit Nicks eigen projectverslag op gronn.studio (GRONN26,
// src/lib/data/vijverrenovatie.ts en terras-geulle.ts). Niets erbij bedacht:
// geen plaats waar de klant er geen gaf, geen eindresultaat zolang het
// project "in afronding" is.

export type Hoofdstuk = {
  /** Kort label in mono, bv. "Uitgangssituatie". */
  label: string
  kop: string
  tekst: string[]
  beelden?: { beeld: Beeld; bijschrift: string }[]
  /** Hoe de beelden staan: één breed, of twee naast elkaar (verspringend). */
  opstelling?: "breed" | "paar" | "staand"
}

export type Project = {
  slug: string
  code: string
  titel: string
  type: string
  plaats: string | null
  jaar: string
  status: string
  samenvatting: string
  seo: { titel: string; omschrijving: string }
  hoofdbeeld: Beeld
  kaartbeeld: Beeld
  feiten: [string, string][]
  hoofdstukken: Hoofdstuk[]
}

export const PROJECTEN: Project[] = [
  {
    slug: "vijverrenovatie",
    code: "GR / 001",
    titel: "Twee vijvers. Eén samenhangend watersysteem.",
    type: "Vijverrenovatie",
    plaats: null,
    jaar: "2026",
    status: "In afronding",
    samenvatting:
      "Circa 5.000 liter water, twee vijvers, een waterval en een beekloop, verbonden tot één systeem waarin bijna elk onderdeel invloed heeft op de rest.",
    seo: {
      titel: "Vijverrenovatie met waterval en beekloop",
      omschrijving:
        "Twee vijvers, circa 5.000 liter water en 120 uur werk. De techniek, het denkwerk en de beplanting achter een vijverrenovatie van GRØNN Studio.",
    },
    hoofdbeeld: BEELD.waterval,
    kaartbeeld: BEELD.waterval,
    feiten: [
      ["Vijvers", "2, één watersysteem"],
      ["Open water", "Circa 5.000 liter"],
      ["Waterlijn", "Circa 12 meter"],
      ["Beekrand", "Circa 6 meter"],
      ["Leidingwerk", "50 mm druk-pvc"],
      ["Filter", "3 kamers, met bypass"],
      ["Beplantingsplan", "11 manden, 44 planten, 7 soorten"],
      ["Tijd", "Circa 120 uur, incl. denkwerk"],
      ["Status", "In afronding; verdere aanplant voorjaar 2027"],
    ],
    hoofdstukken: [
      {
        label: "Uitgangssituatie",
        kop: "Een bestaande vijver die opnieuw moest gaan werken.",
        tekst: [
          "De tuin had al een vijver tegen een gemetselde muur, onder een boom, met keien langs het klinkerpad. De opdracht: er twee vijvers van maken die samen één watersysteem vormen, met een waterval en een beekloop.",
        ],
        beelden: [
          { beeld: BEELD.oudMuur, bijschrift: "Vooraf: de vijver tegen de muur" },
          { beeld: BEELD.oudNet, bijschrift: "Vooraf: afgedekt met een net" },
        ],
        opstelling: "paar",
      },
      {
        label: "Aanpak",
        kop: "Eerst de route van het water, dan pas de stenen.",
        tekst: [
          "Een belangrijk deel van het werk gebeurt voordat er een leiding wordt aangesloten. Waar kan een leiding lopen? Welke bochten en koppelingen zijn nodig? Waar blijft een afsluiter bereikbaar? En wat betekent een wijziging op één plek voor de rest van het systeem?",
          "Vanuit vijver B gaat het water via de pomp naar het driekamerfilter. Daarna splitst het in twee takken: één naar vijver A, één naar de waterval. De waterval loopt via de beekloop terug naar vijver B; vijver A voert via de overloop terug. De verdeling is regelbaar.",
        ],
        beelden: [{ beeld: BEELD.folie, bijschrift: "Folie uitrollen en op maat meten" }],
        opstelling: "staand",
      },
      {
        label: "Techniek",
        kop: "Drukvast pvc, weinig haakse bochten, alles losneembaar.",
        tekst: [
          "Het vaste leidingwerk is 50 mm druk-pvc. Het aantal bochten van 90° is beperkt tot twee à maximaal vier; de rest gaat met bochten van 45°, zodat het water zo geleidelijk mogelijk stroomt.",
          "Koppelingen met schroefdraad maken het filter losneembaar voor onderhoud. Een bypass leidt het water langs het filter als daar aan gewerkt wordt, en een skimmer vangt drijvend blad aan het oppervlak.",
          "Het beschadigde filter van polypropyleen bleek een project binnen het project: eerst tweecomponentenlijm, daarna nog extra afdichting. Renovatiewerk brengt vragen die pas tijdens de uitvoering duidelijk worden.",
        ],
        beelden: [
          { beeld: BEELD.sleuf, bijschrift: "De sleuf langs de haag, met twee leidingen" },
          { beeld: BEELD.kranen, bijschrift: "Kogelkranen: de verdeling blijft regelbaar" },
        ],
        opstelling: "paar",
      },
      {
        label: "Materialen en beplanting",
        kop: "Elf manden, vier planten per mand, zeven soorten.",
        tekst: [
          "Rond circa twaalf meter waterlijn en zes meter beekrand ontmoeten water, steen en planten elkaar. De droge grind- en steenzone van ongeveer drie vierkante meter hoort bij die overgang.",
          "Het beplantingsplan telt elf manden met elk vier planten: 44 planten in zeven soorten, met klei en substraat, verdeeld over de waterlijn en de ondiepere beekrand. De aanwezige vissen beschadigden een deel van de planten; die worden vervangen.",
        ],
        beelden: [
          { beeld: BEELD.aanplant, bijschrift: "Een jonge vijverplant in een mand met grind" },
          { beeld: BEELD.rand, bijschrift: "De rand: waar het water de tuin in gaat" },
        ],
        opstelling: "paar",
      },
      {
        label: "Stand van zaken",
        kop: "In afronding. De beplanting laat het verder groeien.",
        tekst: [
          "Het project zit in de laatste fase: afvoeren wat over is, aanvullen met teelaarde en de beschadigde planten vervangen. De verdere aanplant volgt in het voorjaar van 2027.",
          "Bij de afronding hoort ook uitleg: welke kraan wat doet en hoe het filter eruit komt. Een systeem dat zorgvuldig is aangelegd, moet voor de eigenaar ook te begrijpen zijn.",
        ],
        beelden: [{ beeld: BEELD.overzicht, bijschrift: "De tuin tijdens de afronding" }],
        opstelling: "breed",
      },
    ],
  },
  {
    slug: "terras-geulle",
    code: "GR / 002",
    titel: "Een terras van 24 m², gelegd in twee dagen.",
    type: "Terrasaanleg",
    plaats: "Geulle",
    jaar: "2026",
    status: "Afgerond",
    samenvatting:
      "Stratenmakers waren te duur of pas volgend jaar beschikbaar. De materialen lagen er al; in twee dagen lag er een strak terras, met het water de goede kant op.",
    seo: {
      titel: "Terras van 24 m² betontegels in Geulle",
      omschrijving:
        "24 m² betontegels van 60 × 60 × 4 cm in Geulle, gelegd in twee dagen. Van ontgraven en verdichten tot afschot richting het gras.",
    },
    hoofdbeeld: BEELD.terras,
    kaartbeeld: BEELD.terras,
    feiten: [
      ["Oppervlak", "24 m²"],
      ["Tegels", "Beton, 60 × 60 × 4 cm"],
      ["Tijd", "Circa 8 uur leggen; twee dagen totaal"],
      ["Materialen", "Aangeleverd door de klant"],
      ["Afschot", "Richting het gras"],
      ["Plaats", "Geulle, augustus 2026"],
    ],
    hoofdstukken: [
      {
        label: "Uitgangssituatie",
        kop: "Een terras dat er maar niet kwam.",
        tekst: [
          "De vraag kwam op een kinderfeestje. Stratenmakers waren te duur, of pas de volgende zomer beschikbaar. De tegels lagen er al. Wat ontbrak, was iemand die het deed.",
        ],
      },
      {
        label: "Aanpak",
        kop: "De ondergrond bepaalt het resultaat.",
        tekst: [
          "Ontgraven, ophogen en verdichten. Een zandbed aanbrengen en afrijen. Banden stellen en uitlijnen, het zandbed aantrillen en opnieuw controleren. Pas dan 24 m² tegels leggen, alles op afschot richting het gras.",
        ],
        beelden: [
          { beeld: BEELD.tegelpad, bijschrift: "Het pad langs de gevel, strak uitgelijnd" },
          { beeld: BEELD.tegelpadTerug, bijschrift: "Doorlopend tot de achterdeur" },
        ],
        opstelling: "paar",
      },
      {
        label: "Resultaat",
        kop: "Klaar na twee dagen.",
        tekst: [
          "Het leggen zelf kostte ongeveer acht uur; met het grondwerk erbij waren het twee dagen. Alles ligt op afschot richting het gras, zodat het regenwater de goede kant op loopt.",
        ],
        beelden: [{ beeld: BEELD.nickTerras, bijschrift: "Klaar, na twee dagen" }],
        opstelling: "staand",
      },
    ],
  },
]

export const projectVoor = (slug: string) => PROJECTEN.find((p) => p.slug === slug)
