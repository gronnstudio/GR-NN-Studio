import type { DagdeelId } from "@/lib/dag"
import { FOTO, type Beeld } from "@/lib/fotos"

// De zeven vakken, elk bij het dagdeel waar het thuishoort. De teksten en
// prijzen komen uit Nicks bestaande teksten; alle bedragen zijn incl. btw.

const b = (naam: string, breed: number, hoog: number, alt: string): Beeld => ({ src: `/foto/${naam}.jpg`, breed, hoog, alt })

export type Prijs = { wat: string; bedrag: string; noot?: string }
export type Vak = {
  slug: string
  naam: string
  /** Waar het vak in de dag staat; advies staat bij de poort, dus altijd. */
  deel: DagdeelId | "poort"
  kop: string
  intro: string
  wel: string[]
  niet?: string[]
  prijzen: Prijs[]
  prijsNoot?: string
  beeld: Beeld
  beelden: Beeld[]
  extra?: "borders" | "materialen" | "onderhoud" | "werkwijze"
  project?: "vijverrenovatie" | "terras-geulle"
  thema: "Vijver" | "Tuin" | "Seizoen"
}

export const VAKKEN: Vak[] = [
  {
    slug: "tuinontwerp", naam: "Tuinontwerp en indeling", deel: "ochtend",
    kop: "De hele tuin, doordacht.",
    intro: "Een ontwerp voor je hele tuin. Ik kijk naar de bodem, het water, het licht en naar hoe jij de tuin gebruikt, en maak daar één plan van dat met de jaren mee kan groeien.",
    wel: ["Kijken hoe je tuin nu werkt", "Een eerste schets", "Waar wat komt", "Welke planten, en waarom", "Materialen die bij de plek passen", "Waar het regenwater heen gaat", "Plek voor vogels, insecten en ander leven", "Een plan in stappen, zodat niet alles tegelijk hoeft"],
    niet: [
      "Onbeperkt blijven bijschaven. Eén schetsronde en één revisieronde zitten erbij; daarna werk ik op uurbasis, en dat zeg ik vooraf.",
      "Een fotorealistische render. Die kost tien extra uur en verkoopt niet beter dan een goede handschets met een helder plantplan. Je koopt het denkwerk, niet de tekenvaardigheid.",
      "Een ontwerp zonder budget. Zonder budget teken ik iets wat waarschijnlijk nooit gebouwd wordt.",
    ],
    prijzen: [{ wat: "Ontwerp voor een kleine tuin", bedrag: "vanaf € 450" }],
    prijsNoot: "Elk ontwerp krijgt een eigen offerte: je betaalt voor het denkwerk.",
    beeld: b("vijverrenovatie-F01", 2000, 1500, "Overzicht van een tuin met klinkerpad, treurwilg, keien en vijver"),
    beelden: [FOTO.terrasTafel, FOTO.witteBorder],
    extra: "werkwijze", thema: "Tuin",
  },
  {
    slug: "aanleg", naam: "Aanleg en bestrating", deel: "ochtend",
    kop: "Aangelegd zoals getekend.",
    intro: "Ik leg aan wat we samen bedacht hebben, met dezelfde aandacht als in het ontwerp. Van de grond tot de laatste plant, en een terras dat na een jaar nog strak ligt.",
    wel: ["Een planning die je vooraf kent", "De grond klaarmaken", "Terras en paden, met afschot de goede kant op", "Vijvers en water aanleggen", "Planten", "Plekken voor dieren", "Materialen plaatsen", "Na de oplevering samen terugkijken"],
    prijzen: [{ wat: "Een kleine tuin of terras aanleggen", bedrag: "vanaf € 3.000" }],
    prijsNoot: "Een vaste prijs na offerte, op basis van wat er werkelijk ligt.",
    beeld: b("terras-geulle-T01", 1000, 1333, "Het nieuwe terras van lichte betontegels onder de overkapping"),
    beelden: [FOTO.terrasPad, FOTO.klinkers],
    project: "terras-geulle", thema: "Tuin",
  },
  {
    slug: "materiaal", naam: "Materiaal en detaillering", deel: "ochtend",
    kop: "Materiaal dat bij de plek past.",
    intro: "Klinkers, tegels, grind, muren en licht. Ik kies materiaal op wat de plek vraagt: waar water heen moet, wat met de jaren mooier wordt, en wat ruimte laat voor ander leven.",
    wel: ["Advies over steen, tegel en grind", "Waterdoorlatend waar het kan", "Randen, treden en hoogteverschil", "Licht voor de avond", "Hergebruik van wat er al ligt"],
    prijzen: [{ wat: "Onderdeel van elk ontwerp en elke aanleg", bedrag: "inbegrepen" }, { wat: "Los advies op locatie", bedrag: "€ 195" }],
    beeld: b("materialen-klinkers", 1600, 900, "Rode klinkers in visgraatverband"),
    beelden: [],
    extra: "materialen", thema: "Tuin",
  },
  {
    slug: "beplanting", naam: "Beplanting en borders", deel: "middag",
    kop: "Beplanting die iets voedt.",
    intro: "Planten in lagen, van bodembedekker tot boom. Planten die passen bij de plek en voedsel en beschutting geven aan bijen, vogels en ander leven. Of een complete border met plantlijst en plan.",
    wel: ["Een beplantingsplan per plek", "Inheemse planten, en planten die droogte en hitte aankunnen", "Bloei voor bijen en vlinders", "Plek voor vogels, kikkers en padden", "Planten in lagen", "Iets te zien in elk seizoen", "Planten die ook iets opleveren, zoals fruit en kruiden"],
    prijzen: [{ wat: "Per m² border, planten inbegrepen, aangeplant", bedrag: "€ 75 per m²" }, { wat: "Borderpakketten", bedrag: "5, 10 of 15 m²" }],
    beeld: FOTO.plukborder,
    beelden: [],
    extra: "borders", thema: "Tuin",
  },
  {
    slug: "water", naam: "Water en vijvers", deel: "avond",
    kop: "Water dat zijn weg vindt.",
    intro: "Vijvers, beken, watervallen en natte zones. Ik kijk hoe het water door je tuin loopt, hoe het schoon blijft en hoe het regenwater een plek krijgt. En daarna: het onderhoud door het jaar.",
    wel: ["Een bestaande vijver opnieuw ontwerpen", "Water dat met planten en bodem schoon blijft", "Biologische filters", "Hoe het water rondgaat", "Beken en watervallen", "Planten voor de natte randen", "Een veilige rand voor dieren die komen drinken", "Uitzoeken waarom een vijver niet goed loopt"],
    niet: [
      "Teststrips. Te onnauwkeurig om een plan op te baseren, en het blijft gokken aan je vijverrand. Ik gebruik druppeltests.",
      "Een fles algenmiddel. Alg is niet de ziekte, het is het symptoom van te veel voeding.",
    ],
    prijzen: [
      { wat: "Vijverdoorlichting: gemeten, niet geraden, met verslag", bedrag: "€ 195" },
      { wat: "Renovatie of aanleg", bedrag: "offerte na kennismaking" },
    ],
    beeld: FOTO.vijver,
    beelden: [],
    extra: "onderhoud", project: "vijverrenovatie", thema: "Vijver",
  },
  {
    slug: "renovatie", naam: "Renovatie en omvormen", deel: "avond",
    kop: "Van gazon en tegels naar een tuin die leeft.",
    intro: "Je hebt al een tuin, maar er gebeurt weinig in. Of een vijver die niet meer bij de tuin past. Ik kijk wat kan blijven, wat weg mag en hoe de tuin stap voor stap meer leven krijgt.",
    wel: ["Samen door je huidige tuin lopen", "Tegels eruit waar ze niets doen", "De bodem weer gezond maken", "Regenwater vasthouden in plaats van afvoeren", "Meer soorten planten en dieren", "Wat er al ligt opnieuw gebruiken", "Omvormen in stappen, in jouw tempo"],
    prijzen: [{ wat: "Een deel van de tuin omvormen", bedrag: "vanaf € 5.000" }],
    beeld: b("vijverrenovatie-F03-1", 1000, 1333, "Een lange baan vijverfolie over het gras tijdens de renovatie"),
    beelden: [FOTO.vijver],
    project: "vijverrenovatie", thema: "Tuin",
  },
  {
    slug: "advies", naam: "Advies op locatie", deel: "poort",
    kop: "Een tweede paar ogen.",
    intro: "Soms heb je geen ontwerp nodig, maar iemand die meekijkt. Ik kom langs, luister naar wat je wilt en zeg eerlijk wat ik zou doen. Je krijgt een advies dat je zelf kunt uitvoeren, in stappen als dat beter past.",
    wel: ["Een bezoek aan je tuin", "Uitzoeken waar het probleem zit", "Advies over vijver en water", "Advies over beplanting en materialen", "Welk onderhoud bij jou past", "Wat eerst, en wat later"],
    prijzen: [
      { wat: "Bezoek met schriftelijk advies", bedrag: "€ 195" },
      { wat: "Tuinscan", bedrag: "€ 175" },
      { wat: "Vijverdoorlichting en tuinscan samen", bedrag: "€ 295" },
    ],
    beeld: FOTO.nick,
    beelden: [],
    thema: "Seizoen",
  },
]

/** Vijveronderhoud door het jaar, met vaste prijzen. */
export const ONDERHOUD: { naam: string; zin: string; prijzen: Prijs[]; niet?: string }[] = [
  {
    naam: "Bladnet plaatsen", zin: "Een net over de vijver vóór de bladval, en er in december weer af. De enige vijverklus met een absolute deadline.",
    prijzen: [{ wat: "Tot 15 m²", bedrag: "€ 125" }, { wat: "15 tot 35 m²", bedrag: "€ 175" }, { wat: "Meer dan 35 m²", bedrag: "€ 250" }],
    niet: "Een net dat strak op het water ligt. Hangt het in de vijver, dan vangt het niets en verdrinkt wat erin zwemt.",
  },
  {
    naam: "Najaarsbeurt", zin: "Slib afgezogen, afgestorven groei teruggeknipt, filter gereinigd, water gemeten vóór en na. De volledige reset voor de winter.",
    prijzen: [{ wat: "Klein, licht onderhouden", bedrag: "€ 250" }, { wat: "Gemiddeld", bedrag: "€ 350" }, { wat: "Verwaarloosd", bedrag: "€ 450" }],
    niet: "Een steriele vijver. Zuig je alles weg, dan gooi je de biologie weg. Ik haal bewust 60 tot 70% van het slib weg.",
  },
  {
    naam: "Winterklaar maken", zin: "Techniek eruit, ijsvrijhouder erin, de vijver zo ingericht dat hij de kou doorkomt zonder pomp die ertegenin werkt.",
    prijzen: [{ wat: "Basis", bedrag: "€ 95" }, { wat: "Met bladnet ophalen", bedrag: "€ 135" }, { wat: "Met ijsvrijhouder", bedrag: "€ 150" }, { wat: "Alles", bedrag: "€ 185" }],
    niet: "Een gat in het ijs hakken. De schokgolf is wat de vissen schaadt.",
  },
  {
    naam: "Onderhoudsabonnement", zin: "Een vijver is geen apparaat dat je installeert en vergeet. Ingeplande bezoeken door het jaar, water gemeten bij elk bezoek, en een seizoensverslag.",
    prijzen: [{ wat: "Basis", bedrag: "€ 45 per maand" }, { wat: "Standaard", bedrag: "€ 85 per maand" }, { wat: "Compleet", bedrag: "€ 165 per maand" }],
  },
]

/** Zo werk ik, in zes stappen (uit Nicks eigen tekst). */
export const WERKWIJZE: [string, string][] = [
  ["Eerst kijken", "Ik kom langs en kijk hoe je tuin nu leeft: waar het licht valt, waar water blijft staan, wat er al groeit. En ik vraag hoe jij de tuin gebruikt."],
  ["Uitzoeken hoe het werkt", "Ik breng in kaart wat de plek meebrengt: de bodem, het water, de schaduw. Wat kan hier, en wat niet?"],
  ["Verbanden leggen", "Bodem, water, planten, dieren en jij. Ik kijk hoe die elkaar kunnen helpen in plaats van tegenwerken."],
  ["Ontwerpen", "Daar maak ik één helder plan van. Een plan dat je kunt lezen en begrijpen, ook als je geen tuinman bent."],
  ["Aanleggen", "Ik leg de tuin aan, plant in en blijf meekijken terwijl hij zijn eerste seizoenen doormaakt."],
  ["Laten groeien", "Daarna krijgt de tuin tijd. Hij verandert met de seizoenen, en het onderhoud stemmen we af op wat bij jou past."],
]

export const vakVan = (slug: string) => VAKKEN.find((v) => v.slug === slug)
