// Alle foto's van de site. Alleen echt werk en Nick zelf, met toestemming;
// geen AI-visualisaties en geen stockbeelden. Alt-teksten beschrijven wat
// er werkelijk op de foto staat.

export type Beeld = {
  src: string
  breed: number
  hoog: number
  alt: string
}

const b = (naam: string, breed: number, hoog: number, alt: string): Beeld => ({ src: `/beeld/${naam}.jpg`, breed, hoog, alt })

export const BEELD = {
  overzicht: b("F01", 2000, 1500, "Overzicht van de tuin tijdens de afronding: een klinkerpad, een treurwilg, ronde stapstenen in de vijver en borders met keien en jonge beplanting."),
  oudNet: b("F02-1", 1000, 1778, "De bestaande vijver vóór de renovatie, afgedekt met een net, met een rand van natuursteen langs het klinkerpad."),
  oudMuur: b("F02-2", 1000, 1778, "De oude situatie: een vijver tegen een gemetselde muur onder een boom, met keien en beplanting langs het klinkerpad."),
  folie: b("F03-1", 1000, 1333, "Een lange baan vijverfolie uitgerold over het gazon om hem op maat te meten."),
  sleuf: b("F04-1", 1000, 1333, "Een gegraven sleuf langs de haag met twee grijze pvc-leidingen, op weg naar het filter naast de vijver."),
  kranen: b("F04-2", 1000, 1333, "Grijze drukvaste pvc-leidingen met twee blauwe kogelkranen tussen de keien bij de waterval."),
  filter: b("F05", 1200, 1600, "Een zwarte filterbak met drie kamers, rechtop gezet naast de haag tijdens de werkzaamheden."),
  reparatie: b("F07-1", 1400, 1050, "De beschadigde filterbak van dichtbij, met een lijmpistool voor de reparatie en losse pvc-buizen eromheen."),
  slib: b("F07-2", 1000, 1333, "Een hand vol slib uit de filterbak, boven het troebele water in de kamer."),
  rand: b("F08-1", 1000, 1333, "Keien en natuursteen op de vijverfolie aan de rand bij het terras, waar het water overgaat in de tuin."),
  nickRand: b("F08-2", 1000, 1333, "Nick gehurkt tussen de keien aan de vijverrand, lachend, met een zwart onderdeel in de hand en een geopende doos naast zich."),
  aanplant: b("F09-1", 1000, 1333, "Een hand zet een jong vijverplantje in een plantmand met grind, met het plantlabel ernaast."),
  nickPlanten: b("F09-2", 1000, 1333, "Nick Peters lachend tussen de oeverplanten, aan het werk in de vijver."),
  waterval: b("F10", 2000, 1500, "De waterval stroomt over natuursteen de vijver in, met een rood bloeiende canna ervoor en de leidingen met een kogelkraan erachter."),
  beekloop: b("F11", 1000, 1333, "Nick zit op de keien bij de beekloop in aanbouw, met vijverfolie, grind en een zwarte slang om hem heen."),
  terras: b("T01", 1000, 1333, "Het nieuwe terras van lichte betontegels onder de overkapping, met de opsluitband langs de rand van het zandbed."),
  tegelpad: b("T02", 1000, 1333, "Het smalle pad van betontegels langs de gevel en de schutting, strak uitgelijnd tot achter in de tuin."),
  nickTerras: b("T03", 1000, 1333, "Nick staat op het nieuwe tegelpad, handen in de zij, met een schop en een waterpas bij de hand."),
  tegelpadTerug: b("T04", 1000, 1333, "Het tegelpad vanaf de andere kant, doorlopend tot aan de achterdeur onder de overkapping."),
  moestuin: b("M01", 600, 800, "Nick gehurkt in de moestuin, lachend, met een handvol pas gerooide aardappels."),
  portret: b("portret", 1400, 1866, "Portret van Nick Peters met een kopje espresso, in een straat met bakstenen gevels."),
} as const

// Stalen: vierkante uitsneden van de projectfoto's hierboven (voorstel C).
const st = (naam: string, alt: string): Beeld => ({ src: `/staal/${naam}.jpg`, breed: 800, hoog: 800, alt })
export const STAAL = {
  kei: st("kei", "Close-up van keien op zwarte vijverfolie aan de vijverrand."),
  grind: st("grind", "Close-up van licht grind in een zwarte plantmand."),
  beton: st("beton", "Close-up van grijze betontegels met rechte voegen."),
  folie: st("folie", "Close-up van zwarte vijverfolie, uitgerold op het gras."),
  water: st("water", "Close-up van helder vijverwater met zonlicht op de bodem."),
  plant: st("plant", "Close-up van de grote groene bladeren van een canna bij de waterval."),
} as const
