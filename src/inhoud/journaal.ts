// Het journaal: Nicks stukken over seizoen, water en tuin.
// Gegenereerd uit de bestaande teksten (alleen tekst en foto's); niet met de hand bewerken
// zonder ook de bron te controleren.

import type { Beeld } from "@/lib/fotos"

export type Blok =
  | { soort: "alinea"; tekst: string }
  | { soort: "kop"; tekst: string }
  | { soort: "lijst"; regels: string[] }
  | { soort: "foto"; beeld: Beeld & { bijschrift?: string } }

export type Stuk = {
  slug: string
  titel: string
  beschrijving: string
  datum: string
  leestijd: number
  thema: "Vijver" | "Tuin" | "Seizoen"
  beeld?: Beeld & { bijschrift?: string }
  blokken: Blok[]
  bronnen?: string[]
}

export const STUKKEN: Stuk[] = [
 {
  "slug": "paddenstoelen-in-de-tuin",
  "titel": "Paddenstoelen in je tuin: goed teken of reden tot zorg?",
  "beschrijving": "Na een natte herfst schieten overal paddenstoelen op. Meestal betekent dat een gezonde bodem. Soms vertelt een paddenstoel je dat een boom ziek is.",
  "datum": "2026-11-03",
  "leestijd": 3,
  "thema": "Seizoen",
  "beeld": {
   "src": "/foto/paddenstoelen-op-mos.jpg",
   "breed": 1200,
   "hoog": 1600,
   "alt": "Twee bruine paddenstoelen op een bemoste stam, met herfstblad op de voorgrond",
   "bijschrift": "Paddenstoelen op mos in Kasteelpark Elsloo."
  },
  "blokken": [
   {
    "soort": "alinea",
    "tekst": "November is de maand van de paddenstoelen. Na een paar natte weken staan ze ineens overal: tussen het mos, in de border, op een oude stronk. Veel mensen schrikken ervan en willen ze zo snel mogelijk weg. Meestal is dat niet nodig. Een paddenstoel is het zichtbare stukje van een schimmel die al jaren onder de grond aan het werk is."
   },
   {
    "soort": "kop",
    "tekst": "Wat een paddenstoel eigenlijk is"
   },
   {
    "soort": "alinea",
    "tekst": "De paddenstoel zelf is alleen de vrucht. De echte schimmel is een netwerk van dunne draden in de grond, in blad of in hout. Die draden breken dood materiaal af en maken er weer voeding van voor je planten. Veel schimmels werken ook samen met de wortels van bomen en struiken: ze brengen water en voeding aan, en krijgen daar suiker voor terug."
   },
   {
    "soort": "alinea",
    "tekst": "Zie je paddenstoelen in je border of gazon, dan zegt dat vooral: hier leeft de bodem."
   },
   {
    "soort": "foto",
    "beeld": {
     "src": "/foto/kleine-paddenstoelen-in-border.jpg",
     "breed": 1200,
     "hoog": 1600,
     "alt": "Twee kleine bruine paddenstoelen tussen kluiten aarde, van onderen gefotografeerd",
     "bijschrift": "Kleine paddenstoelen in kale aarde: de bodem leeft."
    }
   },
   {
    "soort": "kop",
    "tekst": "Laat ze gewoon staan"
   },
   {
    "soort": "alinea",
    "tekst": "Paddenstoelen in gras en borders doen je planten geen kwaad. Na een paar dagen tot een week zijn ze vanzelf weer weg. Wegmaaien of uittrekken helpt niet, want de schimmel zit in de grond en komt volgend jaar gewoon terug. Wil je ze toch weg, harken dan alleen de paddenstoelen zelf. Laat de grond met rust."
   },
   {
    "soort": "alinea",
    "tekst": "Een paar dingen om op te letten:"
   },
   {
    "soort": "lijst",
    "regels": [
     "Eet nooit een paddenstoel uit je tuin. Veel soorten lijken op elkaar en sommige zijn erg giftig.",
     "Heb je kleine kinderen of een hond die alles in de bek neemt, haal ze dan weg zodra je ze ziet.",
     "Gooi ze bij het gft-afval, niet op de composthoop als je twijfelt wat het is."
    ]
   },
   {
    "soort": "kop",
    "tekst": "Wanneer een paddenstoel wél iets zegt"
   },
   {
    "soort": "alinea",
    "tekst": "Er is één plek waar je beter even goed kijkt: aan of rond de voet van een levende boom. Sommige schimmels leven niet van dood hout, maar van een boom die nog leeft."
   },
   {
    "soort": "foto",
    "beeld": {
     "src": "/foto/zwavelzwam-aan-stamvoet.jpg",
     "breed": 1200,
     "hoog": 1600,
     "alt": "Een grote oranje-gele zwavelzwam aan de voet van een boom, tussen struiken",
     "bijschrift": "Zwavelzwam aan de voet van een boom in Kasteelpark Elsloo."
    }
   },
   {
    "soort": "alinea",
    "tekst": "Grote oranje of gele plaatzwammen aan een stam, zoals op deze foto, zijn vaak een teken van rot in het hout. Je ziet het van buiten pas laat. Staat zo'n boom dicht bij je huis, een pad of een speelplek, laat dan een boomverzorger kijken of hij nog stevig staat."
   },
   {
    "soort": "foto",
    "beeld": {
     "src": "/foto/honingzwam-op-stronk.jpg",
     "breed": 1200,
     "hoog": 1600,
     "alt": "Honderden honingkleurige paddenstoelen in trossen op een omgevallen stronk in het bos",
     "bijschrift": "Honingzwam op een stronk in Kasteelpark Elsloo."
    }
   },
   {
    "soort": "alinea",
    "tekst": "De honingzwam is de bekendste boosdoener. Hij komt in de herfst in grote trossen op stronken en rond de voet van bomen en struiken. Onder de grond verspreidt hij zich met zwarte draden die op schoenveters lijken, en zo kan hij van een oude stronk naar een gezonde haag of boom kruipen. Zie je trossen honingkleurige paddenstoelen, witte schimmel onder de schors of die zwarte veters in de grond, dan is het verstandig om de stronk en de grote wortels weg te halen."
   },
   {
    "soort": "kop",
    "tekst": "Dood hout is ook goed"
   },
   {
    "soort": "alinea",
    "tekst": "Een oude stronk of een stapel takken in een hoek van de tuin is een feest voor schimmels, kevers en egels. Ligt hij niet tegen een gezonde haag of boom aan, laat hem dan liggen. Het is een van de makkelijkste manieren om je tuin levendiger te maken."
   },
   {
    "soort": "foto",
    "beeld": {
     "src": "/foto/oesterzwam-op-stam.jpg",
     "breed": 1200,
     "hoog": 1600,
     "alt": "Een grote lichte oesterzwam aan de stam van een boom, met klimop ernaast",
     "bijschrift": "Oesterzwam op een stam in Kasteelpark Elsloo."
    }
   },
   {
    "soort": "kop",
    "tekst": "Kort samengevat"
   },
   {
    "soort": "lijst",
    "regels": [
     "Paddenstoelen in gras en border: laten staan, ze zijn een teken van een gezonde bodem.",
     "Niet eten, en weghalen als kinderen of huisdieren erbij kunnen.",
     "Grote zwammen aan een levende boom: laat een boomverzorger kijken.",
     "Trossen paddenstoelen op een stronk naast je haag: stronk en wortels eruit."
    ]
   },
   {
    "soort": "alinea",
    "tekst": "Twijfel je over een boom of een stronk in je tuin? Stuur me een foto via WhatsApp, dan kijk ik even mee. Moet er iets gebeuren, dan krijg je vooraf een vaste prijs."
   }
  ],
  "bronnen": [
   "BNNVARA Vroege Vogels. (z.d.). Tip: paddestoelen in je tuin. https://www.bnnvara.nl/vroegevogels/artikelen/tip-paddestoelen-in-je-tuin",
   "Royal Horticultural Society. (z.d.). Honey fungus. https://www.rhs.org.uk/disease/honey-fungus"
  ]
 },
 {
  "slug": "egelvriendelijke-tuin",
  "titel": "Een egelvriendelijke tuin: zo help je de egel de winter door",
  "beschrijving": "Egels gaan in november in winterslaap en hebben het moeilijk. Een gat in de schutting, een bladhoop en een veilige vijverrand helpen ze de winter door.",
  "datum": "2026-11-02",
  "leestijd": 3,
  "thema": "Tuin",
  "beeld": {
   "src": "/foto/egel-close.jpg",
   "breed": 1600,
   "hoog": 1200,
   "alt": "Een egel van dichtbij op een betonnen rand, 's avonds, met een hand op de achtergrond",
   "bijschrift": "Een egel op zijn avondronde."
  },
  "blokken": [
   {
    "soort": "alinea",
    "tekst": "In november wordt het stil in de tuin. Ook de egel trekt zich terug: als het kouder wordt, zoekt hij een plek voor zijn winterslaap, die meestal tot in maart of april duurt. Dat lukt alleen als hij genoeg reserves heeft en een veilige plek vindt. Precies daar kan je tuin het verschil maken."
   },
   {
    "soort": "kop",
    "tekst": "De egel heeft het moeilijk"
   },
   {
    "soort": "alinea",
    "tekst": "De egel gaat hard achteruit. In oktober 2024 zette de IUCN, de internationale organisatie achter de Rode Lijst, de Europese egel op de lijst als gevoelig (Near Threatened) (Mammal Society, 2024). De grootste oorzaken liggen dichtbij huis: tuinen die zijn dichtgezet met schuttingen, verharding, verkeer en minder insecten om te eten."
   },
   {
    "soort": "alinea",
    "tekst": "Het goede nieuws: een egel heeft een groot gebied nodig, en dat bestaat voor een groot deel uit tuinen. Wat jij in je tuin doet, telt dus echt mee."
   },
   {
    "soort": "kop",
    "tekst": "1. Maak een doorgang"
   },
   {
    "soort": "alinea",
    "tekst": "Een egel loopt in één nacht door heel wat tuinen op zoek naar eten. Een dichte schutting of muur is voor hem het einde van de wereld. Maak onderaan een opening van ongeveer 13 bij 13 centimeter (Hedgehog Street, z.d.). Groot genoeg voor een egel, te klein voor de meeste katten en honden. Vraag je buren om hetzelfde te doen; zo ontstaat er een egelroute door de straat."
   },
   {
    "soort": "foto",
    "beeld": {
     "src": "/foto/egel-op-de-stoeprand.jpg",
     "breed": 1600,
     "hoog": 1200,
     "alt": "Een egel op een betonnen rand langs een pad, 's avonds, met struiken en een lantaarn op de achtergrond",
     "bijschrift": "Egels lopen elke nacht een flink stuk, langs paden en door tuinen."
    }
   },
   {
    "soort": "kop",
    "tekst": "2. Laat een rommelhoek liggen"
   },
   {
    "soort": "alinea",
    "tekst": "Een egel slaapt het liefst onder een hoop blad, takken of snoeiafval, onder een struik of tegen de heg. Laat zo'n hoop deze winter liggen en ruim hem pas op als het in april warm is. Kijk altijd eerst voorzichtig voordat je met een riek of schop in een hoop prikt."
   },
   {
    "soort": "alinea",
    "tekst": "Blad laten liggen in de borders helpt ook: daar leven de kevers, regenwormen en rupsen waar de egel van eet."
   },
   {
    "soort": "kop",
    "tekst": "3. Een vijver met een uitstapje"
   },
   {
    "soort": "alinea",
    "tekst": "Egels kunnen zwemmen, maar uit een vijver met steile randen komen ze niet meer. Zorg dat er aan minstens één kant een flauwe oever is, of leg een plank of een paar stenen als trapje. Dat helpt ook andere dieren die komen drinken. Ligt er een bladnet over de vijver? Laat een opening bij de oever, zodat een egel er niet onder vast komt te zitten."
   },
   {
    "soort": "kop",
    "tekst": "4. Pas op met machines"
   },
   {
    "soort": "lijst",
    "regels": [
     "Robotmaaiers zijn voor egels gevaarlijk, vooral als ze 's avonds of 's nachts maaien. Laat de maaier alleen overdag rijden.",
     "Bladblazers en bosmaaiers raken egels die in een hoop blad of lang gras slapen. Kijk eerst, of gebruik een hark.",
     "Gaten en putten: dek kelderputten en afvoerkolken af, en laat geen netten slap op de grond liggen."
    ]
   },
   {
    "soort": "kop",
    "tekst": "5. Geen gif"
   },
   {
    "soort": "alinea",
    "tekst": "Slakkenkorrels en insectengif doden niet alleen slakken en luizen, maar ook het eten van de egel, en soms de egel zelf. Een tuin met egels heeft minder slakken; laat het werk aan hem over."
   },
   {
    "soort": "kop",
    "tekst": "Bijvoeren: wel water, geen melk"
   },
   {
    "soort": "alinea",
    "tekst": "Een schaaltje water helpt, zeker in een droge periode. Geef nooit melk: egels kunnen er niet tegen. Wil je in de herfst bijvoeren, gebruik dan kattenvoer of speciaal egelvoer, geen brood."
   },
   {
    "soort": "kop",
    "tekst": "Een egel overdag?"
   },
   {
    "soort": "alinea",
    "tekst": "Een egel die je overdag ziet rondlopen, of een heel kleine egel laat in de herfst, heeft vaak hulp nodig. Pak hem met handschoenen op, zet hem in een doos met een handdoek en bel een egelopvang."
   },
   {
    "soort": "kop",
    "tekst": "Hulp bij een egelvriendelijke tuin"
   },
   {
    "soort": "alinea",
    "tekst": "Ik maak tuinen in Stein en omgeving die goed zijn voor mens en dier: met doorgangen in de schutting, een vijver met een flauwe rand, een rommelhoek die er mooi uitziet en planten die insecten aantrekken. Met een vaste prijs vooraf. Stuur een foto van je tuin via WhatsApp naar 06 181 180 14, dan kijk ik mee."
   }
  ],
  "bronnen": [
   "Hedgehog Street. (z.d.). Link your garden. https://www.hedgehogstreet.org/help-hedgehogs/link-your-garden/",
   "Mammal Society. (2024). Breaking: European hedgehog listed as Near Threatened on IUCN Red List. https://mammal.org.uk/press-hub/breaking-european-hedgehog-listed-as-near-threatened-on-iucn-red-listnbsp"
  ]
 },
 {
  "slug": "levende-tuin",
  "titel": "Werken mét de natuur: wat een levende tuin is",
  "beschrijving": "Een tuin die leeft, kost minder werk. Wat een levende tuin is, waarom bodem, water en planten samen horen, en hoe je begint.",
  "datum": "2026-10-22",
  "leestijd": 5,
  "thema": "Tuin",
  "beeld": {
   "src": "/foto/vijverrenovatie-F09-2.jpg",
   "breed": 1000,
   "hoog": 1333,
   "alt": "Nick Peters lachend tussen de oeverplanten, aan het werk in de vijver",
   "bijschrift": "Aan het werk tussen de oeverplanten."
  },
  "blokken": [
   {
    "soort": "alinea",
    "tekst": "Veel tuinen worden aangelegd alsof ze een kamer zijn. Strak, af, en dan zo houden. Elk blad dat valt is rommel, elk onkruid een fout, elke regenbui een plas op het terras. Het resultaat is een tuin die je het hele jaar door moet bijhouden, want hij werkt tegen je in."
   },
   {
    "soort": "alinea",
    "tekst": "Ik werk liever andersom: met de natuur mee."
   },
   {
    "soort": "kop",
    "tekst": "Wat is een levende tuin?"
   },
   {
    "soort": "alinea",
    "tekst": "Branchevereniging VHG, de vereniging van hoveniers en groenbedrijven, gebruikt er een mooi woord voor: de levende tuin. Een tuin die “aan alle kanten en overal leeft”, waar je van kunt genieten en zelfs van kunt eten, en waar vlinders en egels ook hun voedsel vinden (VHG, z.d.). Zo'n tuin is nooit helemaal af. Hij groeit mee."
   },
   {
    "soort": "alinea",
    "tekst": "Dat klinkt groot, maar het is vooral een manier van kijken. In een levende tuin doet elk onderdeel meer dan één ding."
   },
   {
    "soort": "kop",
    "tekst": "Bodem, water en planten als één geheel"
   },
   {
    "soort": "lijst",
    "regels": [
     "De bodem is geen ondergrond, maar het begin van alles. Een levende bodem met wormen, schimmels en humus houdt water vast in droge zomers en laat het weglopen bij een bui. Daarom laat ik blad liggen in de borders en gebruik ik compost in plaats van kunstmest.",
     "Water hoort in de tuin te blijven. Regenwater van het dak kan een vijver of een wadi voeden, in plaats van het riool in te gaan (VHG, z.d.). Een vijver met een natuurlijke rand trekt kikkers, libellen en vogels aan, en die eten weer de muggen en slakken.",
     "Planten kies je op de plek, niet andersom. Een plant die past bij de grond en de zon hoeft niet elke week water. Inheemse planten en bloeiers door het hele seizoen geven voedsel aan bijen en vlinders."
    ]
   },
   {
    "soort": "alinea",
    "tekst": "Als die drie kloppen, regelt de tuin veel zelf. Minder gieten, minder spuiten, minder wieden."
   },
   {
    "soort": "kop",
    "tekst": "Wat het jou oplevert"
   },
   {
    "soort": "alinea",
    "tekst": "Een levende tuin is niet alleen goed voor de natuur. Hij is koeler op een hete dag, omdat planten en bodem water verdampen waar tegels warmte vasthouden. Hij voert regenwater af zonder dat je kelder onderloopt. En hij is mooier in elk seizoen, ook in de winter, met zaadhoofden en grassen die blijven staan."
   },
   {
    "soort": "alinea",
    "tekst": "Alle tuinen van Nederland samen zijn volgens VHG tien keer zo groot als Nationaal Park De Hoge Veluwe (VHG, z.d.). Wat je in je eigen tuin doet, telt dus echt mee."
   },
   {
    "soort": "kop",
    "tekst": "Hoe begin je?"
   },
   {
    "soort": "alinea",
    "tekst": "Je hoeft niet alles om te gooien. Drie stappen die in elke tuin passen:"
   },
   {
    "soort": "lijst",
    "regels": [
     "Laat één hoek met rust. Blad, takken, een stapel stenen. Een schuilplek voor egels en kevers.",
     "Haal een paar tegels weg. Elke vierkante meter grond in plaats van steen vangt regen op en geeft ruimte aan planten.",
     "Plant voor het hele jaar. Iets dat in het voorjaar bloeit, iets in de zomer en iets in de herfst. Dan is er altijd eten voor insecten."
    ]
   },
   {
    "soort": "kop",
    "tekst": "Zo werk ik"
   },
   {
    "soort": "alinea",
    "tekst": "Bij elke tuin of vijver die ik aanleg in Stein en omgeving kijk ik eerst naar de bodem, het water en de plek, en pas daarna naar de planten. Zo maak ik een tuin die gezond blijft met weinig ingrijpen, met een vaste prijs vooraf. Wil je weten wat dat voor jouw tuin betekent? Plan een kennismaking of stuur een foto via WhatsApp naar 06 181 180 14."
   }
  ],
  "bronnen": [
   "VHG. (z.d.). Handleiding De Levende Tuin [Handboek]. Branchevereniging VHG. https://maken.wikiwijs.nl/bestanden/744938/VHG%20Handleiding%20'De%20levende%20tuin'.pdf"
  ]
 },
 {
  "slug": "vijver-winterklaar-maken",
  "titel": "Je vijver winterklaar maken in Zuid-Limburg",
  "beschrijving": "Stoppen met voeren, pomp hoger, bladnet erop, wak openhouden. Zo komt je vijver gezond de winter door. Vijveronderhoud in Stein en omgeving.",
  "datum": "2026-10-21",
  "leestijd": 4,
  "thema": "Vijver",
  "beeld": {
   "src": "/foto/waterval-na-herfstbeurt.jpg",
   "breed": 1600,
   "hoog": 1200,
   "alt": "Een kleine waterval van natuursteen met mos, helder water, en ernaast een canna met rode bloemen",
   "bijschrift": "Na de herfstbeurt: filter schoon, waterval weer helder."
  },
  "blokken": [
   {
    "soort": "alinea",
    "tekst": "In Zuid-Limburg vriest het meestal later en korter dan in de rest van het land. Dat maakt het verleidelijk om de vijver nog even te laten. Maar het werk dat telt, gebeurt nu: vóór de bladval en vóór de eerste nachtvorst. Wat je in oktober en november goed doet, scheelt je in april een groene soep."
   },
   {
    "soort": "alinea",
    "tekst": "Dit zijn de vijf dingen die ik bij elke vijver in Stein en omgeving nakijk."
   },
   {
    "soort": "kop",
    "tekst": "1. Stop met voeren onder de 10 °C"
   },
   {
    "soort": "alinea",
    "tekst": "Vissen worden trager als het water afkoelt. Onder de 10 °C verteren ze bijna niets meer. Voer blijft in hun darmen zitten of zakt naar de bodem, rot daar en voedt in het voorjaar de algen."
   },
   {
    "soort": "alinea",
    "tekst": "Meet de temperatuur op zo'n 50 cm diepte, niet aan het oppervlak. Tussen 15 en 10 °C geef je weinig en licht verteerbaar voer. Onder 10 °C stop je, ook als de zon op een mooie novemberdag nog schijnt."
   },
   {
    "soort": "kop",
    "tekst": "2. Het bladnet erop, vóór het blad valt"
   },
   {
    "soort": "alinea",
    "tekst": "Blad dat in het water valt, zinkt, rot en wordt slib. Dat slib is voeding voor algen en kost in de winter zuurstof. Een bladnet vangt het op voordat het in het water komt."
   },
   {
    "soort": "foto",
    "beeld": {
     "src": "/foto/vijver-onder-bladnet.jpg",
     "breed": 675,
     "hoog": 1200,
     "alt": "Een vijver met goudvissen onder een bladnet, vastgezet met houten paaltjes langs de natuurstenen rand",
     "bijschrift": "Het net staat er al, vóór de bladval."
    }
   },
   {
    "soort": "alinea",
    "tekst": "Span het net een eindje boven het water, zodat het niet doorzakt, en zet de randen om de 60 tot 80 cm vast. Haal het blad er om de week af. In december, als de bomen kaal zijn, gaat het net er weer af: dan heeft het zijn werk gedaan en wil je dat vogels en egels weer bij het water kunnen."
   },
   {
    "soort": "kop",
    "tekst": "3. Filter schoon, pomp hoger, UV-lamp uit"
   },
   {
    "soort": "alinea",
    "tekst": "Maak het filter nog één keer goed schoon zolang het water niet te koud is, en laat het daarna met rust. Het bodemleven in het filter heeft de winter nodig om op gang te blijven."
   },
   {
    "soort": "alinea",
    "tekst": "Zitten er vissen in de vijver, laat de pomp dan draaien, maar hang hem hoger: zo'n 30 cm onder het wateroppervlak. Onderin blijft dan een laag warmer water staan, en daar overwinteren je vissen. Zonder vissen mag de pomp uit en droog in de schuur."
   },
   {
    "soort": "alinea",
    "tekst": "De UV-lamp doet in de winter niets. Zet hem uit en berg hem droog op; dan gaat de lamp ook langer mee."
   },
   {
    "soort": "kop",
    "tekst": "4. Knip slim, niet alles"
   },
   {
    "soort": "alinea",
    "tekst": "Je oeverplanten worden bruin, maar niet alles hoeft weg."
   },
   {
    "soort": "lijst",
    "regels": [
     "Laten staan: riet, lisdodde en biezen. Hun holle stengels brengen zuurstof naar de bodem en houden een opening in het ijs, zodat gassen uit het water kunnen. Die knip je pas in het voorjaar.",
     "Wel knippen: zacht blad dat in het water hangt, zoals van waterlelies en moerasplanten. Dat rot snel. Knip het een handbreedte boven het water af."
    ]
   },
   {
    "soort": "alinea",
    "tekst": "Wat boven de rand blijft staan, is in de winter een schuilplek voor insecten en kikkers. Een beetje rommel aan de rand is goed voor het leven in en om je vijver."
   },
   {
    "soort": "kop",
    "tekst": "5. Houd een wak open als het vriest"
   },
   {
    "soort": "alinea",
    "tekst": "Als de vijver helemaal dichtvriest, kunnen de gassen uit het water niet meer weg. Dat is gevaarlijker voor je vissen dan de kou zelf. Een ijsvrijhouder (een drijver van piepschuim of een kleine luchtpomp met uitstroomsteen) houdt een gat open."
   },
   {
    "soort": "alinea",
    "tekst": "Hak het ijs nooit open. De klappen geven drukgolven onder water die je vissen in hun winterrust stressen. Is het toch dichtgevroren, zet dan een pan heet water op het ijs en laat dat er langzaam een gat in smelten."
   },
   {
    "soort": "foto",
    "beeld": {
     "src": "/foto/waterval-na-herfstbeurt.jpg",
     "breed": 1600,
     "hoog": 1200,
     "alt": "Een kleine waterval van natuursteen met mos, helder water, en ernaast een canna met rode bloemen",
     "bijschrift": "Na de herfstbeurt: filter schoon, waterval weer helder."
    }
   },
   {
    "soort": "kop",
    "tekst": "Waarom het in Zuid-Limburg net anders is"
   },
   {
    "soort": "alinea",
    "tekst": "Hier vriest het vaak pas laat, en dan kort. Dat klinkt gunstig, maar het betekent ook dat veel vijvers in november nog warm genoeg zijn voor algen, terwijl het blad er al in ligt. Daarom is het net en het slib ruimen hier belangrijker dan het ijs. En omdat het weer snel omslaat, kun je beter vóór half november klaar zijn dan wachten op het weerbericht."
   },
   {
    "soort": "kop",
    "tekst": "Liever niet zelf?"
   },
   {
    "soort": "alinea",
    "tekst": "Ik maak vijvers winterklaar in Stein en omgeving, met een vaste prijs vooraf, inclusief btw:"
   },
   {
    "soort": "lijst",
    "regels": [
     "Basis: € 95",
     "Met bladnet ophalen: € 135",
     "Met ijsvrijhouder: € 150",
     "Alles: € 185"
    ]
   },
   {
    "soort": "alinea",
    "tekst": "Stuur een foto van je vijver via WhatsApp naar 06 181 180 14, dan zeg ik wat je vijver nodig heeft."
   }
  ]
 },
 {
  "slug": "blad-laten-liggen",
  "titel": "Blad laten liggen: waarom je tuin het nodig heeft",
  "beschrijving": "Herfstblad is geen afval. Het voedt je bodem en beschermt insecten en egels. Waar je het laat liggen, en waar beter niet.",
  "datum": "2026-10-08",
  "leestijd": 2,
  "thema": "Seizoen",
  "blokken": [
   {
    "soort": "alinea",
    "tekst": "Elk jaar in de herfst hoor je de bladblazers weer. Gazon schoon, borders kaal, zakken vol naar de container. Het ziet er netjes uit. Maar je gooit precies weg wat je tuin de rest van het jaar mist."
   },
   {
    "soort": "kop",
    "tekst": "Blad is voedsel voor je bodem"
   },
   {
    "soort": "alinea",
    "tekst": "Een blad dat op de grond valt, wordt binnen een paar maanden opgegeten. Regenwormen trekken het de grond in, pissebedden en schimmels breken het verder af. Wat overblijft is humus: donkere, kruimelige grond die water vasthoudt en planten voedt."
   },
   {
    "soort": "alinea",
    "tekst": "In een bos gaat dat al eeuwen zo, zonder kunstmest. In je tuin kan het ook. Blad dat je weghaalt, moet je in het voorjaar terugkopen als compost of potgrond."
   },
   {
    "soort": "kop",
    "tekst": "Blad is een winterjas voor dieren"
   },
   {
    "soort": "alinea",
    "tekst": "Onder een laag blad is het in de winter een paar graden warmer en vochtiger dan erboven. Daar overwinteren pissebedden, duizendpoten, kevers en soms lieveheersbeestjes (Vlinderstichting, z.d.). Egels zoeken zo'n hoop op om in te slapen. Merels en roodborstjes scharrelen er de hele winter hun eten bij elkaar."
   },
   {
    "soort": "alinea",
    "tekst": "Dezelfde regel geldt voor uitgebloeide planten. Laat stengels en zaadhoofden staan tot het voorjaar. Er zitten eitjes, poppen en larven in, en vogels eten de zaden."
   },
   {
    "soort": "kop",
    "tekst": "Waar laat je het liggen?"
   },
   {
    "soort": "alinea",
    "tekst": "Niet overal. Dit is wat ik in de tuinen in Stein en omgeving aanhoud:"
   },
   {
    "soort": "lijst",
    "regels": [
     "In borders en onder struiken: laten liggen. Een laag van een paar centimeter is genoeg. Te veel? Verdeel het over de andere borders.",
     "Onder de heg: laten liggen. Daar valt het toch, en het houdt de grond vochtig.",
     "Op het gazon: wegharken. Een dikke laag blad sluit het licht af en het gras gaat eronder dood. Hark het de border in, dan blijft het in je tuin.",
     "Op paden en terras: wegvegen. Nat blad is glad.",
     "In de vijver: zo min mogelijk. Blad dat in het water zinkt, rot en wordt slib. Een bladnet vangt het op."
    ]
   },
   {
    "soort": "kop",
    "tekst": "En de bladblazer?"
   },
   {
    "soort": "alinea",
    "tekst": "Die mag in de schuur blijven. Een bladblazer blaast niet alleen blad weg, maar ook de insecten die erin zitten, en hij maakt veel lawaai. Een hark doet hetzelfde werk in een gewone tuin, en je hoort de vogels nog."
   },
   {
    "soort": "kop",
    "tekst": "Een rommelhoek is genoeg"
   },
   {
    "soort": "alinea",
    "tekst": "Vind je een tuin vol blad te slordig? Begin dan met één hoek. Een hoop blad en takken achter in de tuin, onder een struik, is al een winterkwartier voor egels en kevers. Niemand ziet het, en de tuin doet er een jaar lang zijn voordeel mee."
   },
   {
    "soort": "kop",
    "tekst": "Hulp nodig?"
   },
   {
    "soort": "alinea",
    "tekst": "Ik doe in Stein en omgeving een najaarsbeurt voor tuin en vijver: blad van gazon en paden de borders in, uitgebloeide planten laten staan waar het kan, en het bladnet over de vijver. Met een vaste prijs vooraf. Stuur een foto van je tuin via WhatsApp naar 06 181 180 14."
   }
  ],
  "bronnen": [
   "Vlinderstichting. (z.d.). Tuinieren voor vlinders: tips voor de herfst en winter [Brochure]. https://nieuw.vlinderstichting.nl/app/uploads/docs/29d63789-a3a7-4b0e-97f4-862568cabcd7.pdf",
   "IVN Natuureducatie. (2023). Nieuwsbrief oktober 2023 [Nieuwsbrief]. https://www.ivn.nl/app/uploads/sites/15/2023/09/okt2023.pdf"
  ]
 },
 {
  "slug": "bladnet-vijver",
  "titel": "Een bladnet op je vijver: wanneer erop, wanneer eraf",
  "beschrijving": "Een bladnet houdt je vijver schoon in de herfst. Wanneer het erop moet, hoe je het spant, en wanneer het er weer af gaat.",
  "datum": "2026-10-01",
  "leestijd": 2,
  "thema": "Vijver",
  "beeld": {
   "src": "/foto/vijverrenovatie-F02-1.jpg",
   "breed": 1000,
   "hoog": 1778,
   "alt": "Een vijver afgedekt met een net, met een rand van natuursteen langs het klinkerpad.",
   "bijschrift": "Een vijver onder het net."
  },
  "blokken": [
   {
    "soort": "alinea",
    "tekst": "Er is één vijverklus met een deadline: het net moet erop vóór het blad valt. Een week te laat en de eerste lading ligt al op de bodem."
   },
   {
    "soort": "kop",
    "tekst": "Waarom een net?"
   },
   {
    "soort": "alinea",
    "tekst": "Blad dat in het water valt, drijft een paar dagen en zinkt dan. Op de bodem rot het. Daarbij verbruikt het zuurstof en komen er voedingsstoffen vrij. Die voedingsstoffen zijn in het voorjaar het eten van algen. Wie in april groen water heeft, heeft het in november vaak al binnengekregen."
   },
   {
    "soort": "alinea",
    "tekst": "Een net vangt het blad op voordat het in het water komt. Het is de goedkoopste manier om je vijver gezond te houden."
   },
   {
    "soort": "kop",
    "tekst": "Wanneer erop?"
   },
   {
    "soort": "alinea",
    "tekst": "Zodra de bomen in de buurt beginnen te kleuren. In Zuid-Limburg is dat meestal half oktober. Staan er eiken in de buurt, die houden hun blad langer vast, dan kan het net er tot in december op moeten."
   },
   {
    "soort": "kop",
    "tekst": "Hoe span je het goed?"
   },
   {
    "soort": "lijst",
    "regels": [
     "Fijne maas: zo'n 1 tot 2 cm. Grover laat kleine blaadjes door, fijner raakt snel verstopt.",
     "Boven het water, niet erin: span het net over een paar paaltjes of een lat in het midden, zodat het een dakje vormt. Een net dat in het water hangt, wordt een zak vol rottend blad.",
     "Randen vast: om de 60 tot 80 cm een pen of een steen. Zo waait het niet weg en kunnen reigers er niet onder.",
     "Ruimte voor dieren: laat aan één kant een kleine opening bij de oever, of leg een plank als uitstapje. Kikkers en egels moeten eruit kunnen."
    ]
   },
   {
    "soort": "kop",
    "tekst": "Bijhouden"
   },
   {
    "soort": "alinea",
    "tekst": "Haal het blad er om de week af. Een vol net zakt door, en dan ligt het blad toch in het water. Een bladhark of een bezem werkt het best; het blad mag zo de border of de composthoop in."
   },
   {
    "soort": "kop",
    "tekst": "Wanneer eraf?"
   },
   {
    "soort": "alinea",
    "tekst": "Als de bomen kaal zijn, meestal in december. Laat het net niet de hele winter liggen: het verzamelt sneeuw, het scheurt bij vorst, en vogels kunnen niet bij het water. Spoel het af, laat het drogen en berg het op voor volgend jaar."
   },
   {
    "soort": "kop",
    "tekst": "Liever niet zelf?"
   },
   {
    "soort": "alinea",
    "tekst": "Ik leg bladnetten in Stein en omgeving, op maat gesneden en met een vaste prijs vooraf, inclusief btw:"
   },
   {
    "soort": "lijst",
    "regels": [
     "Tot 15 m²: € 125",
     "15 tot 35 m²: € 175",
     "Meer dan 35 m²: € 250"
    ]
   },
   {
    "soort": "alinea",
    "tekst": "Stuur een foto van je vijver via WhatsApp naar 06 181 180 14."
   }
  ]
 },
 {
  "slug": "planten-in-de-herfst",
  "titel": "Planten in de herfst: waarom september en oktober de beste maanden zijn",
  "beschrijving": "De grond is nog warm en het regent vaker. Wat je in de herfst plant, heeft in het voorjaar een voorsprong. Vaste planten, bollen en struiken.",
  "datum": "2026-09-17",
  "leestijd": 2,
  "thema": "Seizoen",
  "blokken": [
   {
    "soort": "alinea",
    "tekst": "De meeste mensen kopen hun planten in het voorjaar, als de tuincentra vol staan. Maar de beste tijd om te planten is nu, in september en oktober."
   },
   {
    "soort": "kop",
    "tekst": "Waarom de herfst"
   },
   {
    "soort": "lijst",
    "regels": [
     "De grond is nog warm van de zomer. Wortels groeien gewoon door, ook als de plant boven de grond al stilstaat.",
     "Het regent vaker en het verdampt minder. Je hoeft bijna geen water te geven.",
     "De plant heeft de hele winter om wortels te maken. In het voorjaar kan hij meteen groeien, en de eerste droge zomer kan hij beter aan."
    ]
   },
   {
    "soort": "alinea",
    "tekst": "Een plant die in mei de grond in gaat, moet in juni al tegen de droogte op. Een plant die in oktober is geplant, heeft dan al een half jaar wortels gemaakt."
   },
   {
    "soort": "kop",
    "tekst": "Wat plant je nu?"
   },
   {
    "soort": "lijst",
    "regels": [
     "Vaste planten: tot half oktober, dan wortelen ze nog voor de vorst. Laat late soorten als asters en grassen liever tot het voorjaar wachten.",
     "Bloembollen: krokus, sneeuwklokje, narcis en tulp in oktober en november. Plant ze twee à drie keer zo diep als de bol hoog is.",
     "Struiken en bomen in pot: de hele herfst, zolang het niet vriest.",
     "Hagen en bomen als wortelgoed: vanaf november, als de planten in rust zijn."
    ]
   },
   {
    "soort": "kop",
    "tekst": "Zo plant je goed"
   },
   {
    "soort": "lijst",
    "regels": [
     "Maak het plantgat twee keer zo breed als de kluit, en maak de bodem los.",
     "Zet de plant even diep als hij in de pot stond.",
     "Meng wat compost door de grond, geen kunstmest. De plant moet nu wortels maken, geen blad.",
     "Druk aan en geef één keer flink water, ook als het regent. Zo sluit de grond om de wortels.",
     "Leg een laag blad of mulch over de grond. Dat houdt hem warm en vochtig."
    ]
   },
   {
    "soort": "kop",
    "tekst": "Delen en verplaatsen"
   },
   {
    "soort": "alinea",
    "tekst": "De herfst is ook de tijd om vaste planten te delen die te groot zijn geworden of in het midden kaal worden. Steek de pol uit, verdeel hem met een spade in stukken en plant de beste delen terug. De rest geef je weg aan de buren."
   },
   {
    "soort": "alinea",
    "tekst": "Wil je een border die volgend jaar meteen goed staat? Kijk naar de borderpakketten of stuur een foto via WhatsApp naar 06 181 180 14, dan kijk ik mee. Met een vaste prijs vooraf."
   }
  ]
 },
 {
  "slug": "terras-leggen-voorbereiding",
  "titel": "Een terras leggen: de voorbereiding bepaalt het resultaat",
  "beschrijving": "Een terras dat na een jaar nog strak ligt, begint onder de tegels. De stappen van ontgraven tot afschot, aan de hand van een terras in Geulle.",
  "datum": "2026-09-03",
  "leestijd": 2,
  "thema": "Tuin",
  "beeld": {
   "src": "/foto/terras-geulle-T01.jpg",
   "breed": 1000,
   "hoog": 1333,
   "alt": "Het nieuwe terras van lichte betontegels onder de overkapping, met de opsluitband langs de rand van het zandbed.",
   "bijschrift": "Het terras in Geulle, augustus 2026."
  },
  "blokken": [
   {
    "soort": "alinea",
    "tekst": "In augustus legde ik in Geulle een terras van 24 m² betontegels van 60 × 60 × 4 cm. Het leggen zelf kostte ongeveer acht uur. Met het grondwerk erbij waren het twee dagen. Die verhouding zegt genoeg: het meeste werk zit onder de tegels."
   },
   {
    "soort": "kop",
    "tekst": "1. Ontgraven"
   },
   {
    "soort": "alinea",
    "tekst": "Haal de bovengrond weg tot je op vaste grond zit. Teelaarde, wortels en los zand zakken in, en dan zakken de tegels mee. Hoe diep je gaat, hangt af van de grond en van wat er op het terras komt te staan."
   },
   {
    "soort": "kop",
    "tekst": "2. Ophogen en verdichten"
   },
   {
    "soort": "alinea",
    "tekst": "Breng de fundering aan in lagen en tril elke laag goed aan. Een goed verdichte ondergrond is het verschil tussen een terras dat jaren vlak ligt en een terras met kuilen na de eerste winter."
   },
   {
    "soort": "kop",
    "tekst": "3. Het zandbed"
   },
   {
    "soort": "alinea",
    "tekst": "Op de fundering komt een zandbed van een paar centimeter. Rij het af met een rei over twee geleiders, zodat het overal even dik is. Dit is het moment om het afschot te maken: niet in de tegels, maar al in het zand."
   },
   {
    "soort": "kop",
    "tekst": "4. Banden stellen"
   },
   {
    "soort": "alinea",
    "tekst": "Opsluitbanden langs de rand houden alles op zijn plek. Zet ze strak in een lijn en vast in de grond, op de goede hoogte. Ze zijn ook de maat voor de rest van het terras."
   },
   {
    "soort": "kop",
    "tekst": "5. Aantrillen en controleren"
   },
   {
    "soort": "alinea",
    "tekst": "Tril het zandbed aan en meet opnieuw. Kloppen de hoogte en het afschot nog? Dit is de laatste kans om het goed te krijgen zonder tegels op te pakken."
   },
   {
    "soort": "kop",
    "tekst": "6. Leggen"
   },
   {
    "soort": "alinea",
    "tekst": "Leg de tegels vanaf een rechte lijn, met gelijke voegen. Grote tegels van 60 × 60 cm zijn zwaar en vragen een vlak bed: een kleine oneffenheid zie je meteen aan een wiebelende tegel."
   },
   {
    "soort": "kop",
    "tekst": "7. Afschot"
   },
   {
    "soort": "alinea",
    "tekst": "Laat het terras licht aflopen, van het huis af. In Geulle loopt alles richting het gras, zodat de regen daar de grond in kan. Water dat naar de gevel loopt, of op het terras blijft staan, wil je niet."
   },
   {
    "soort": "kop",
    "tekst": "8. Afwerken"
   },
   {
    "soort": "alinea",
    "tekst": "Veeg de voegen in en loop alles na. Een terras is pas klaar als je er met een waterpas overheen kunt en niets wiebelt."
   },
   {
    "soort": "kop",
    "tekst": "Minder steen, meer tuin"
   },
   {
    "soort": "alinea",
    "tekst": "Een terras is fijn, maar hoeft niet groot te zijn. Leg alleen wat je echt gebruikt, en laat de rest groen. Dan kan het regenwater ergens heen."
   },
   {
    "soort": "alinea",
    "tekst": "De hele klus zie je terug bij het terras in Geulle op de werkpagina. Wil je zelf een terras? Stuur een foto via WhatsApp naar 06 181 180 14, dan kijk ik mee. Met een vaste prijs vooraf."
   }
  ]
 },
 {
  "slug": "regenwater-opvangen",
  "titel": "Regenwater opvangen: regenton, wadi of vijver",
  "beschrijving": "Een flinke bui op je dak is honderden liters water. Hoe je dat in je tuin houdt in plaats van in het riool, van regenton tot regentuin.",
  "datum": "2026-08-20",
  "leestijd": 2,
  "thema": "Tuin",
  "blokken": [
   {
    "soort": "alinea",
    "tekst": "Tussen de droge weken door valt er in augustus vaak in één keer heel veel regen. Waar gaat dat water naartoe? In de meeste tuinen via de regenpijp het riool in. Zonde, want je tuin had het een week later goed kunnen gebruiken."
   },
   {
    "soort": "kop",
    "tekst": "Hoeveel water is het?"
   },
   {
    "soort": "alinea",
    "tekst": "Een rekensom: elke millimeter regen is een liter water per vierkante meter. Een dak van 50 m² vangt bij een bui van 10 mm dus 500 liter op. Een gewone regenton van 200 liter is dan al na een paar millimeter vol."
   },
   {
    "soort": "kop",
    "tekst": "Regenton"
   },
   {
    "soort": "alinea",
    "tekst": "De eenvoudigste stap. Zet een ton bij de regenpijp met een vulautomaat: die vult de ton en stuurt de rest weer naar de afvoer als hij vol is. Regenwater is zacht en zonder chloor, en planten hebben het liever dan kraanwater. Leeg de ton voor de vorst, anders kan hij kapot vriezen."
   },
   {
    "soort": "kop",
    "tekst": "Afkoppelen"
   },
   {
    "soort": "alinea",
    "tekst": "Wil je verder gaan, dan koppel je de regenpijp los van het riool en laat je het water in je tuin wegzakken. Vraag eerst bij je gemeente wat er mag en of er een regeling voor is."
   },
   {
    "soort": "alinea",
    "tekst": "Laat het water nooit tegen de gevel of naar de buren lopen. Leid het een paar meter van het huis af, naar een plek waar het weg kan."
   },
   {
    "soort": "kop",
    "tekst": "Wadi of regentuin"
   },
   {
    "soort": "alinea",
    "tekst": "Een wadi is een ondiepe laagte in de tuin, met planten die tegen zowel nat als droog kunnen. Na een bui staat er even water in, en binnen een dag is het weggezakt. Het ziet eruit als een gewone border die iets lager ligt."
   },
   {
    "soort": "kop",
    "tekst": "Vijver met overloop"
   },
   {
    "soort": "alinea",
    "tekst": "Een vijver kan ook regenwater opvangen. Laat de regenpijp er via een strook grind of een beekje in uitkomen, en maak een overloop naar een wadi of grindkoffer voor als hij vol is. Let op: het eerste water van een bui spoelt vuil en stof van het dak mee. Een bladvanger in de regenpijp houdt het grootste deel tegen."
   },
   {
    "soort": "kop",
    "tekst": "Minder verharding"
   },
   {
    "soort": "alinea",
    "tekst": "Het meeste water dat je tuin uit stroomt, komt van tegels, niet van het dak. Elke tegel die eruit gaat, is een stukje grond waar regen in kan zakken."
   },
   {
    "soort": "alinea",
    "tekst": "Wil je weten wat er in jouw tuin kan? Stuur een foto via WhatsApp naar 06 181 180 14, dan kijk ik mee. Met een vaste prijs vooraf."
   }
  ]
 },
 {
  "slug": "vijver-in-een-hittegolf",
  "titel": "Je vijver in een hittegolf: zuurstof, schaduw en water bijvullen",
  "beschrijving": "Warm water houdt minder zuurstof vast. Hoe je ziet dat je vissen het moeilijk hebben, en wat je doet met de pomp, het voer en het bijvullen.",
  "datum": "2026-08-06",
  "leestijd": 2,
  "thema": "Vijver",
  "beeld": {
   "src": "/foto/vijverrenovatie-F01.jpg",
   "breed": 2000,
   "hoog": 1500,
   "alt": "Overzicht van de tuin tijdens de afronding: een klinkerpad, een treurwilg, ronde stapstenen in de vijver en borders met keien en jonge beplanting.",
   "bijschrift": "Vijver met stapstenen en een treurwilg."
  },
  "blokken": [
   {
    "soort": "alinea",
    "tekst": "Een week boven de dertig graden is voor een vijver zwaar. Het water warmt op, er verdampt veel, en algen groeien als nooit tevoren. Het grootste gevaar zie je niet: zuurstof."
   },
   {
    "soort": "kop",
    "tekst": "Waarom zuurstof het probleem is"
   },
   {
    "soort": "alinea",
    "tekst": "Hoe warmer het water, hoe minder zuurstof erin past. Tegelijk hebben vissen bij warmte juist meer zuurstof nodig, en verbruiken rottend materiaal en algen 's nachts ook zuurstof. Vroeg in de ochtend is het zuurstofgehalte daardoor het laagst."
   },
   {
    "soort": "alinea",
    "tekst": "Zie je vissen 's ochtends aan het oppervlak happen, of hangen ze bij de waterval? Dan is er te weinig zuurstof. Dat is een signaal om meteen iets te doen."
   },
   {
    "soort": "kop",
    "tekst": "Wat je doet"
   },
   {
    "soort": "lijst",
    "regels": [
     "Laat de pomp en de waterval dag en nacht draaien. Bewegend water neemt zuurstof op.",
     "Zet er een luchtpomp met een uitstroomsteen bij. Die is niet duur en helpt veel.",
     "Voer minder, of helemaal niet. Vissen eten bij hitte slecht, en voer dat blijft liggen, rot.",
     "Haal dode algen en rottend blad uit het water."
    ]
   },
   {
    "soort": "kop",
    "tekst": "Schaduw"
   },
   {
    "soort": "alinea",
    "tekst": "Waterlelies, drijvende planten en een boom of schaduwdoek aan de zuidkant houden het water koeler. Een derde tot de helft van het wateroppervlak in de schaduw is een goed doel."
   },
   {
    "soort": "kop",
    "tekst": "Water bijvullen"
   },
   {
    "soort": "alinea",
    "tekst": "Op een hete dag verdampt er al gauw een centimeter. Vul liefst bij met regenwater uit de ton. Gebruik je kraanwater, vul dan in kleine beetjes bij, liefst een paar keer per week een paar centimeter, en niet in één keer een flinke laag. Zo schrikt het leven in je vijver niet van de temperatuur of het chloor."
   },
   {
    "soort": "kop",
    "tekst": "Na de hitte"
   },
   {
    "soort": "alinea",
    "tekst": "Na een hittegolf komt vaak een bui. Die koelt het water snel af, en dode algen zakken naar de bodem. Houd de vissen daarna nog een paar dagen in de gaten, en maak het filter schoon in vijverwater als het dichtgeslibd is."
   },
   {
    "soort": "kop",
    "tekst": "Ondiepe vijvers"
   },
   {
    "soort": "alinea",
    "tekst": "Een vijver die nergens dieper is dan een halve meter warmt het snelst op. Overweeg bij een renovatie om een deel dieper te maken. Daar blijft het water in de zomer koeler en in de winter vorstvrij."
   },
   {
    "soort": "alinea",
    "tekst": "Hebben je vissen het moeilijk? Stuur een foto via WhatsApp naar 06 181 180 14, dan kijk ik mee. Met een vaste prijs vooraf."
   }
  ]
 },
 {
  "slug": "tuin-voor-bijen-en-vlinders",
  "titel": "Een tuin voor bijen en vlinders: zo maak je dat",
  "beschrijving": "Bijen en vlinders hebben het hele seizoen nectar nodig, en vlinders ook planten voor hun rupsen. Welke planten helpen, en waarom een rommelhoek telt.",
  "datum": "2026-07-16",
  "leestijd": 2,
  "thema": "Tuin",
  "blokken": [
   {
    "soort": "alinea",
    "tekst": "Het is juli, en in een goede tuin zoemt het. Maar in veel tuinen is het stil. Niet omdat er geen bloemen staan, maar omdat het de verkeerde bloemen zijn, of omdat ze allemaal tegelijk bloeien."
   },
   {
    "soort": "kop",
    "tekst": "Bloei van maart tot oktober"
   },
   {
    "soort": "alinea",
    "tekst": "Bijen en vlinders hebben het hele seizoen eten nodig. Een border die in juni prachtig bloeit en de rest van het jaar groen is, helpt ze maar een paar weken."
   },
   {
    "soort": "lijst",
    "regels": [
     "Vroeg in het voorjaar: krokus, sneeuwklokje, wilg en sleedoorn. Hommelkoninginnen die uit hun winterslaap komen, hebben die meteen nodig.",
     "Voorjaar: fruitbomen, meidoorn, vergeet-mij-niet en look.",
     "Zomer: marjolein, kattenkruid, grote kattenstaart, koninginnenkruid en lavendel.",
     "Nazomer en herfst: hemelsleutel, asters en klimop. Klimop bloeit in september en oktober, als er bijna niets anders meer is."
    ]
   },
   {
    "soort": "kop",
    "tekst": "Enkelvoudige bloemen"
   },
   {
    "soort": "alinea",
    "tekst": "Kies bloemen met een hart dat je kunt zien. Gevulde bloemen, zoals veel rozen en dahlia's uit de winkel, zien er vol uit, maar een bij komt niet bij de nectar."
   },
   {
    "soort": "kop",
    "tekst": "Vlinders hebben ook rupsen"
   },
   {
    "soort": "alinea",
    "tekst": "Een vlinder legt haar eitjes op een waardplant: de plant waar de rups van eet. Zonder waardplant geen nieuwe vlinders. Dagpauwoog, kleine vos en atalanta leggen hun eitjes op brandnetels. Een hoek met brandnetels in de zon is voor vlinders meer waard dan nog een vlinderstruik."
   },
   {
    "soort": "kop",
    "tekst": "Een nest voor bijen"
   },
   {
    "soort": "alinea",
    "tekst": "De meeste wilde bijen wonen niet in een bijenhotel, maar in de grond. Ze graven gangetjes in kale, zonnige plekken met zand of leem. Laat dus een stukje grond onbedekt, of een zandig randje langs het pad. Een bijenhotel helpt een paar soorten, zolang het in de zon hangt en de gaatjes glad zijn."
   },
   {
    "soort": "kop",
    "tekst": "Geen gif"
   },
   {
    "soort": "alinea",
    "tekst": "Een insect dat je doodspuit, kan geen bloem meer bestuiven. Gebruik geen bestrijdingsmiddelen in de tuin. Bladluizen zijn eten voor lieveheersbeestjes, zweefvliegen en mezen, en die komen vanzelf als je ze de tijd geeft."
   },
   {
    "soort": "kop",
    "tekst": "Water"
   },
   {
    "soort": "alinea",
    "tekst": "Een ondiep schaaltje water met een paar stenen erin, of een vijver met een flauwe rand, is een drinkplek voor bijen, vlinders en vogels."
   },
   {
    "soort": "alinea",
    "tekst": "Wil je een border die het hele jaar bloeit? Kijk dan naar de vlinderborder bij de borderpakketten. Stuur een foto via WhatsApp naar 06 181 180 14, dan kijk ik mee. Met een vaste prijs vooraf."
   }
  ]
 },
 {
  "slug": "beekloop-of-waterval",
  "titel": "Een beekloop of waterval bij je vijver: wat komt erbij kijken",
  "beschrijving": "Stromend water geeft geluid, zuurstof en beweging. Waar je op let bij de pomp, de folie, de leidingen en de stenen van een beekloop of waterval.",
  "datum": "2026-07-02",
  "leestijd": 2,
  "thema": "Vijver",
  "beeld": {
   "src": "/foto/vijverrenovatie-F11.jpg",
   "breed": 1000,
   "hoog": 1333,
   "alt": "Nick zit op de keien bij de beekloop in aanbouw, met vijverfolie, grind en een zwarte slang om hem heen.",
   "bijschrift": "De beekloop in aanbouw."
  },
  "blokken": [
   {
    "soort": "alinea",
    "tekst": "Een waterval of een beekloop maakt van een vijver iets dat je hoort. Het water krijgt beweging en zuurstof, en vogels komen erop af. Het is ook het deel van een vijver waar het vaakst iets misgaat. Dit zijn de dingen waar ik op let, ook bij de vijverrenovatie met twee vijvers, een waterval en een beekloop die je op de werkpagina ziet."
   },
   {
    "soort": "kop",
    "tekst": "De pomp"
   },
   {
    "soort": "alinea",
    "tekst": "De pomp bepaalt hoeveel water er stroomt. Een bredere waterval en een grotere hoogte vragen een sterkere pomp. Kies er een die iets meer kan dan je denkt nodig te hebben, en regel de hoeveelheid met een kraan. Liever een pomp die rustig draait dan een die op zijn tenen loopt; hij gaat dag en nacht mee."
   },
   {
    "soort": "kop",
    "tekst": "Het filter bovenaan"
   },
   {
    "soort": "alinea",
    "tekst": "Laat het water uit de vijver eerst door het filter gaan en pas daarna de beekloop af. Dan stroomt er schoon water naar beneden, en werkt de beekloop zelf als extra filter: op de stenen groeien bacteriën die het water verder zuiveren."
   },
   {
    "soort": "kop",
    "tekst": "Leidingen en kranen"
   },
   {
    "soort": "alinea",
    "tekst": "Gebruik drukvaste leidingen en zet er kogelkranen in. Daarmee regel je de stroming, en kun je een deel afsluiten als je het filter schoonmaakt. Leg de leidingen in een sleuf, zodat je er later nog bij kunt en ze niet in het zicht liggen."
   },
   {
    "soort": "kop",
    "tekst": "Folie onder alles"
   },
   {
    "soort": "alinea",
    "tekst": "De beekloop krijgt dezelfde folie als de vijver, met beschermvlies eronder. De folie loopt door tot in de vijver, met een ruime overlap op de goede volgorde: de bovenste baan ligt over de onderste, net als dakpannen. Zet de randen van de beek hoger dan het water ooit komt. Het meeste water verdwijnt niet door een gat, maar over een rand die net te laag ligt."
   },
   {
    "soort": "kop",
    "tekst": "Stenen"
   },
   {
    "soort": "alinea",
    "tekst": "Leg eerst grote, platte stenen voor de val zelf. Daar bepaal je hoe het water valt: één brede sluier, of een paar kleinere stroompjes. Werk de rest af met keien en grind, en laat ruimte voor planten langs de oever. Klop stenen nooit met een harde hamer op de folie vast."
   },
   {
    "soort": "kop",
    "tekst": "Als de pomp stopt"
   },
   {
    "soort": "alinea",
    "tekst": "Zet je de pomp uit, dan loopt het water uit de beek terug de vijver in. De vijver moet dat water kunnen opvangen zonder over te lopen. Houd daarom een paar centimeter ruimte onder de rand."
   },
   {
    "soort": "kop",
    "tekst": "Stroom"
   },
   {
    "soort": "alinea",
    "tekst": "Een pomp hoort op een buitenstopcontact met een aardlekschakelaar. Leg de kabel in een mantelbuis en niet los door het gras."
   },
   {
    "soort": "alinea",
    "tekst": "Droom je van stromend water in je tuin? Stuur een foto via WhatsApp naar 06 181 180 14, dan kijk ik mee. Met een vaste prijs vooraf."
   }
  ]
 },
 {
  "slug": "water-geven-in-de-zomer",
  "titel": "Water geven in de zomer: minder vaak, maar goed",
  "beschrijving": "Elke avond een beetje sproeien helpt je planten minder dan je denkt. Wanneer, hoeveel en waar je water geeft, en wat je kunt laten.",
  "datum": "2026-06-18",
  "leestijd": 2,
  "thema": "Seizoen",
  "blokken": [
   {
    "soort": "alinea",
    "tekst": "Het is warm, de grond is droog, en elke avond sta je met de slang in de tuin. Toch hangen de planten de volgende middag weer slap. Dat ligt niet aan de hoeveelheid water, maar aan de manier."
   },
   {
    "soort": "kop",
    "tekst": "Minder vaak, maar flink"
   },
   {
    "soort": "alinea",
    "tekst": "Elke dag een beetje water maakt de bovenste centimeters nat. De wortels blijven daardoor ondiep, en die laag droogt het eerst uit. Geef liever één of twee keer per week flink water: zo'n tien liter per vierkante meter. Dat zakt diep in de grond, en de wortels groeien erachteraan. Een plant met diepe wortels kan een droge week veel beter aan."
   },
   {
    "soort": "kop",
    "tekst": "'s Ochtends, aan de voet"
   },
   {
    "soort": "alinea",
    "tekst": "Geef water vroeg in de ochtend. Dan verdampt er weinig, en de planten hebben het als de warmte komt. 's Avonds kan ook, maar natte bladeren 's nachts geven schimmels meer kans."
   },
   {
    "soort": "alinea",
    "tekst": "Geef water aan de voet van de plant, niet over het blad. Een gieter zonder broes of een slang op een zacht straaltje werkt het best."
   },
   {
    "soort": "kop",
    "tekst": "Wie heeft het nodig?"
   },
   {
    "soort": "lijst",
    "regels": [
     "Nieuwe aanplant: het hele eerste jaar, en zeker in de eerste zomer. De wortels zitten nog in de kluit.",
     "Potten en bakken: elke dag bij warm weer. Er zit weinig grond in, en die droogt snel uit.",
     "Groenten: regelmatig, anders schieten ze door of barsten de vruchten.",
     "Gevestigde borders en struiken: meestal niet, of alleen bij een lange droge periode. Ze hebben diepe wortels.",
     "Het gazon: niet. Gras wordt bruin in een droge zomer, maar het herstelt zodra het weer regent."
    ]
   },
   {
    "soort": "kop",
    "tekst": "Houd het water vast"
   },
   {
    "soort": "lijst",
    "regels": [
     "Mulch. Een laag compost, houtsnippers of blad op de grond houdt het vocht vast en de grond koel.",
     "Dicht planten. Waar de grond bedekt is met planten, verdampt minder.",
     "Regenwater. Een regenton bij de regenpijp geeft gratis water, en planten hebben het liever dan kraanwater."
    ]
   },
   {
    "soort": "kop",
    "tekst": "De juiste plant op de juiste plek"
   },
   {
    "soort": "alinea",
    "tekst": "Wie elke zomer moet sproeien om een plant in leven te houden, heeft vaak de verkeerde plant op die plek. Lavendel, tijm, salie en siergrassen kunnen goed tegen droogte. Zet dorstige planten bij elkaar op de natste plek, dan hoef je maar op één plek te gieten."
   },
   {
    "soort": "alinea",
    "tekst": "Wil je een border die minder water vraagt? Stuur een foto via WhatsApp naar 06 181 180 14, dan kijk ik mee. Met een vaste prijs vooraf."
   }
  ]
 },
 {
  "slug": "vijver-aanleggen-waar-begin-je",
  "titel": "Een vijver aanleggen: waar begin je?",
  "beschrijving": "De plek, de diepte, de folie en de rand: vier keuzes die bepalen of je vijver helder en levendig wordt. Waar je op let voordat de schop de grond in gaat.",
  "datum": "2026-06-04",
  "leestijd": 2,
  "thema": "Vijver",
  "beeld": {
   "src": "/foto/vijverrenovatie-F03-1.jpg",
   "breed": 1000,
   "hoog": 1333,
   "alt": "Een lange baan vijverfolie uitgerold over het gazon om hem op maat te meten.",
   "bijschrift": "Folie op maat meten, vóór het graven."
  },
  "blokken": [
   {
    "soort": "alinea",
    "tekst": "Een vijver is het mooiste wat je in een tuin kunt maken. Er komt binnen een paar weken leven op af: libellen, kikkers, vogels die komen drinken. Maar de keuzes vooraf bepalen of het een heldere vijver wordt, of een groene bak waar je elk jaar mee bezig bent."
   },
   {
    "soort": "kop",
    "tekst": "1. De plek"
   },
   {
    "soort": "lijst",
    "regels": [
     "Zon, maar niet de hele dag. Zo'n vijf à zes uur zon is ideaal. Meer geeft snel algen, minder laat planten slecht groeien.",
     "Niet onder bomen. Blad dat in het water valt, wordt slib. Een boom in de buurt kan, maar niet erboven.",
     "Zichtbaar vanuit huis. Je wilt hem zien, ook in de winter.",
     "De laagste plek is niet altijd de beste. Daar loopt bij een bui al het water van de tuin naartoe, met grond en mest erin."
    ]
   },
   {
    "soort": "kop",
    "tekst": "2. De diepte"
   },
   {
    "soort": "alinea",
    "tekst": "Wil je vissen, dan moet een deel van de vijver minstens 80 cm tot een meter diep zijn. Daar bevriest het niet en overwinteren ze. Een natuurvijver zonder vissen mag ondieper, met veel ondiepe randen. Daar komen juist kikkers en libellen op af, want hun larven worden niet opgegeten."
   },
   {
    "soort": "kop",
    "tekst": "3. De folie"
   },
   {
    "soort": "alinea",
    "tekst": "Er zijn twee soorten: PVC en EPDM. EPDM is soepeler, gaat langer mee en kan beter tegen vorst en zon. Leg er altijd een beschermvlies onder, zodat stenen en wortels de folie niet doorprikken."
   },
   {
    "soort": "alinea",
    "tekst": "Hoeveel folie heb je nodig? Een vuistregel per richting: de lengte, plus twee keer de diepte, plus een halve meter rand aan elke kant. Meet de folie uit voordat je bestelt; een flauwe oever kost meer folie dan een steile wand."
   },
   {
    "soort": "kop",
    "tekst": "4. De rand"
   },
   {
    "soort": "alinea",
    "tekst": "De rand maakt de vijver. Een flauwe oever met keien, grind en planten laat dieren in en uit het water, en verbergt de folie. Laat de folie aan de rand iets omhoog lopen en werk hem weg achter stenen of in de grond. Dan zuigt de tuin het water niet weg."
   },
   {
    "soort": "kop",
    "tekst": "Voor je gaat graven"
   },
   {
    "soort": "lijst",
    "regels": [
     "Leidingen. Graaf je dieper dan een schop, doe dan een KLIC-melding. Die doe ik vooraf bij elke klus.",
     "Stroom. Een pomp en filter hebben stroom nodig. Een buitenstopcontact met een aardlekschakelaar hoort erbij.",
     "Grond. Een vijver van een paar kuub geeft een paar kuub grond. Bedenk vooraf waar die heen gaat, bijvoorbeeld in een verhoogde border.",
     "Kleine kinderen. Een vijver en peuters gaan slecht samen. Denk aan een rooster net onder het wateroppervlak, of wacht nog een paar jaar."
    ]
   },
   {
    "soort": "kop",
    "tekst": "Filter of niet?"
   },
   {
    "soort": "alinea",
    "tekst": "Een vijver met vissen heeft een filter nodig. Vissen poepen, en dat is voeding voor algen. Een natuurvijver zonder vissen en met genoeg planten kan zonder filter helder blijven, als hij groot genoeg is."
   },
   {
    "soort": "alinea",
    "tekst": "Zelf beginnen of liever samen? Kijk hoe de vijverrenovatie in deze tuin verliep op de werkpagina. Stuur een foto via WhatsApp naar 06 181 180 14, dan kijk ik mee. Met een vaste prijs vooraf."
   }
  ]
 },
 {
  "slug": "permacultuur-in-een-gewone-tuin",
  "titel": "Permacultuur in een gewone tuin: eerst kijken, dan pas graven",
  "beschrijving": "Permacultuur is geen lijst trucjes maar een manier van ontwerpen: kijk eerst hoe je tuin werkt en laat de onderdelen elkaar helpen.",
  "datum": "2026-05-21",
  "leestijd": 3,
  "thema": "Tuin",
  "blokken": [
   {
    "soort": "alinea",
    "tekst": "Het woord permacultuur klinkt groot. Alsof je eerst een moestuin, kippen en een regenton nodig hebt voordat je mee mag doen. Dat valt mee. Permacultuur is in de kern een manier van kijken en ontwerpen, en die werkt ook in een gewone achtertuin in Stein of Geleen."
   },
   {
    "soort": "kop",
    "tekst": "Waar het vandaan komt"
   },
   {
    "soort": "alinea",
    "tekst": "Het woord is een samentrekking van permanente agricultuur en permanente cultuur. Twee Australische biologen, Bill Mollison en David Holmgren, bedachten het in de jaren zeventig. Ze keken hoe een bos zichzelf in stand houdt en maakten daar een methode van om zelf zulke systemen te ontwerpen. Eronder liggen drie uitgangspunten: zorg voor de aarde, zorg voor de mens, en deel wat er over is."
   },
   {
    "soort": "alinea",
    "tekst": "Wat ik er goed aan vind: het is geen stijl. Een permacultuurtuin ziet er niet op één manier uit. Elke plek heeft een andere bodem, ander licht en ander water, en het ontwerp volgt de plek."
   },
   {
    "soort": "kop",
    "tekst": "Begin met een seizoen kijken"
   },
   {
    "soort": "alinea",
    "tekst": "Het eerste principe van Holmgren is observeren. De meeste tuinen worden andersom gemaakt: eerst een plan, dan de plek erbij zoeken. Loop een seizoen lang met andere ogen door je tuin. Waar staat de zon om tien uur, en waar om vier? Waar blijft water staan na een flinke bui, en waar is het altijd als eerste droog? Uit welke hoek waait het?"
   },
   {
    "soort": "alinea",
    "tekst": "Kijk ook onder je voeten. Leefmilieu Brussel geeft een eenvoudige test: steek een kluit van dertig bij dertig centimeter en vijftien diep, en tel de regenwormen. Meer dan tien betekent een rijke grond. Vind je er één, dan zit er te weinig organische stof in."
   },
   {
    "soort": "alinea",
    "tekst": "Bij een tuinontwerp doe ik hetzelfde. Ik kijk eerst naar de bodem, het water en het licht, en naar hoe jij de tuin gebruikt. Pas daarna teken ik."
   },
   {
    "soort": "kop",
    "tekst": "Zet dingen waar je ze nodig hebt"
   },
   {
    "soort": "alinea",
    "tekst": "Permacultuur deelt een terrein in zones. Zone één is wat je elke dag gebruikt: kruiden, wat pluksla. Hoe verder van huis, hoe minder aandacht iets nodig heeft. Een kruidenbak achter in de tuin gebruik je niet. En een hoek waar je nooit komt, hoef je ook niet bij te houden: die mag wild worden."
   },
   {
    "soort": "kop",
    "tekst": "Laat elk onderdeel meer dan één ding doen"
   },
   {
    "soort": "alinea",
    "tekst": "Mollison gebruikte zelf de vijver als voorbeeld: hij vangt en bewaart water, er groeien planten en leven dieren, hij slaat warmte op en weerkaatst licht. Een vijver is dus nooit alleen een mooi plaatje."
   },
   {
    "soort": "alinea",
    "tekst": "Hetzelfde geldt voor de rand eromheen. Waar twee milieus elkaar raken, zoals water en land, is het extra rijk. Een vijver met een flauwe, begroeide oever heeft meer leven dan een bak met steile wanden."
   },
   {
    "soort": "kop",
    "tekst": "Sluit de kringloop in je eigen tuin"
   },
   {
    "soort": "alinea",
    "tekst": "Wat de tuin maakt, blijft in de tuin. Het blad mag in de border blijven liggen. Het slib dat ik uit een vijver haal, gaat de border in en niet in een container. Je hoeft er niets voor te kopen; je moet het alleen niet weggooien."
   },
   {
    "soort": "kop",
    "tekst": "Klein en langzaam"
   },
   {
    "soort": "alinea",
    "tekst": "Holmgren raadt kleine, langzame oplossingen aan. Begin met één plek: een stuk gras dat border wordt, een tegelpad dat smaller kan, een regenton bij de schuur. Kijk wat er gebeurt en zet daarna de volgende stap."
   },
   {
    "soort": "alinea",
    "tekst": "Wil je weten wat dit voor jouw tuin betekent? Stuur een foto via WhatsApp naar 06 181 180 14, dan kijk ik mee. Met een vaste prijs vooraf."
   }
  ],
  "bronnen": [
   "Holmgren, D. (z.d.). Permaculture principles. https://permacultureprinciples.com/",
   "Leefmilieu Brussel. (2018). Mijn tuin in permacultuur. https://document.environnement.brussels/opac_css/elecfile/IF_Potager_Permaculture_Permacultuurmoestuin_NL",
   "Permacultuur Nederland. (z.d.). Permacultuur, ontwerpen met de natuur. https://www.permacultuurnederland.org/wp/permacultuur-ontwerpen-met-de-natuur/"
  ]
 },
 {
  "slug": "inheemse-waterplanten",
  "titel": "Inheemse waterplanten voor een gezonde vijver",
  "beschrijving": "Waterplanten houden je vijver helder. Welke inheemse planten je kiest voor de oever, het ondiepe en het diepe water, en welke exoten je beter niet plant.",
  "datum": "2026-05-07",
  "leestijd": 2,
  "thema": "Vijver",
  "beeld": {
   "src": "/foto/vijverrenovatie-F09-1.jpg",
   "breed": 1000,
   "hoog": 1333,
   "alt": "Een hand zet een jong vijverplantje in een plantmand met grind, met het plantlabel ernaast.",
   "bijschrift": "Een waterplant in een mand met grind."
  },
  "blokken": [
   {
    "soort": "alinea",
    "tekst": "Een vijver zonder planten is een bak water. Planten nemen voedingsstoffen op, geven zuurstof en schaduw, en bieden kikkers, libellen en vissen een plek. Mei is een goede maand om ze te zetten: het water is warm genoeg en de planten groeien meteen door."
   },
   {
    "soort": "kop",
    "tekst": "Plant per zone"
   },
   {
    "soort": "alinea",
    "tekst": "Een vijver heeft verschillende dieptes, en elke diepte heeft zijn eigen planten."
   },
   {
    "soort": "lijst",
    "regels": [
     "De moerasrand, van nat tot een paar centimeter water: dotterbloem, watermunt, kattenstaart en moerasvergeet-mij-nietje.",
     "Ondiep water, tot zo'n 30 cm: gele lis, zwanenbloem, grote boterbloem en mattenbies.",
     "Diep water: de witte waterlelie en de gele plomp. Die wortelen op de bodem en hun bladeren drijven. Let op: de witte waterlelie wordt groot en past alleen in een flinke vijver.",
     "Drijvend: kikkerbeet en krabbenscheer, die vrij in het water liggen.",
     "Onder water: zuurstofplanten als hoornblad en waterviolier. Die zie je nauwelijks, maar ze doen het meeste werk."
    ]
   },
   {
    "soort": "kop",
    "tekst": "Waarom inheems?"
   },
   {
    "soort": "alinea",
    "tekst": "Inheemse planten horen bij de dieren die hier leven. Libellenlarven klimmen langs stengels van lis en mattenbies omhoog. Bijen en zweefvliegen komen op de dotterbloem en de watermunt af. En inheemse planten zijn gewend aan ons klimaat: ze komen elk jaar terug."
   },
   {
    "soort": "kop",
    "tekst": "Deze exoten niet"
   },
   {
    "soort": "alinea",
    "tekst": "Sommige vijverplanten uit andere werelddelen woekeren zo hard dat ze sloten en beken dichtgroeien. Grote waternavel, waterteunisbloem en parelvederkruid staan op de Europese lijst van invasieve soorten: je mag ze niet meer kopen, verkopen of planten. Ook watercrassula is berucht. Twijfel je over een plant, kies dan een inheemse."
   },
   {
    "soort": "kop",
    "tekst": "Zo plant je"
   },
   {
    "soort": "alinea",
    "tekst": "Zet waterplanten in een plantmand met schrale grond of grind, geen potgrond. Potgrond zit vol voeding, en die komt in het water terecht. Leg er een laag grind op, zodat de grond niet wegspoelt en vissen er niet in wroeten. Zet de mand op de goede diepte, zo nodig op een paar stenen."
   },
   {
    "soort": "kop",
    "tekst": "Hoeveel?"
   },
   {
    "soort": "alinea",
    "tekst": "Een gezonde vijver is voor een derde tot de helft begroeid of beschaduwd. Begin niet met te veel; planten breiden zich vanzelf uit. Haal elk jaar in de herfst een deel weg, dan blijft er ruimte voor open water."
   },
   {
    "soort": "alinea",
    "tekst": "Wil je een vijverrand die vanzelf mooi blijft? Stuur een foto via WhatsApp naar 06 181 180 14, dan kijk ik mee. Met een vaste prijs vooraf."
   }
  ]
 },
 {
  "slug": "regeneratief-tuinieren",
  "titel": "Regeneratief tuinieren: begin bij de bodem",
  "beschrijving": "Regeneratief tuinieren betekent je bodem beter maken in plaats van alleen bijhouden: minder spitten, de grond bedekt houden en wortels in de grond laten.",
  "datum": "2026-04-16",
  "leestijd": 3,
  "thema": "Tuin",
  "blokken": [
   {
    "soort": "alinea",
    "tekst": "Regeneratief is een woord uit de landbouw. Het betekent dat je de bodem niet alleen in stand houdt, maar beter maakt. Boeren doen het omdat hun grond het anders niet meer volhoudt. In een tuin werkt het net zo, en het scheelt je ook nog werk."
   },
   {
    "soort": "alinea",
    "tekst": "De Vlaamse kennisorganisatie B3W vat het samen in vijf principes. Ik loop ze langs, vertaald naar de tuin."
   },
   {
    "soort": "kop",
    "tekst": "1. Verstoor de bodem zo weinig mogelijk"
   },
   {
    "soort": "alinea",
    "tekst": "De Engelse Royal Horticultural Society is er duidelijk over: spitten beschadigt de bodem. Je vernielt de gangen die wormen hebben gemaakt, je breekt schimmelnetwerken, en er komt koolstof vrij die in de grond zat."
   },
   {
    "soort": "alinea",
    "tekst": "Een nieuw bed maak je dan zo. Leg een dubbele laag karton op het gras of onkruid (geen glanzend bedrukt karton, en haal nietjes en plakband eraf) en schep er tien tot vijftien centimeter goed verteerd organisch materiaal op, zoals compost. Maak bedden van zo'n 1,2 meter breed, dan kun je er van twee kanten bij zonder erop te staan."
   },
   {
    "soort": "kop",
    "tekst": "2. Houd de grond bedekt"
   },
   {
    "soort": "alinea",
    "tekst": "Kale grond droogt uit, en zonlicht tast het bodemleven aan. Een bedekte bodem blijft koel, vochtig en levend, en onkruid krijgt minder kans. In een tuin betekent het: elk jaar zo'n vijf centimeter mulch, en zo min mogelijk kale plekken tussen de planten."
   },
   {
    "soort": "alinea",
    "tekst": "De makkelijkste mulch heb je al. Laat het blad in de border liggen: het beschermt de bodem tegen de vorst en is voer en schuilplek voor wat er in je tuin leeft."
   },
   {
    "soort": "kop",
    "tekst": "3. Zorg voor variatie"
   },
   {
    "soort": "alinea",
    "tekst": "Hoe meer verschillende planten, boven en onder de grond, hoe sterker het geheel. Verschillende wortels voeden verschillend bodemleven, en ziektes en plagen krijgen minder vat."
   },
   {
    "soort": "kop",
    "tekst": "4. Laat er wortels in de grond"
   },
   {
    "soort": "alinea",
    "tekst": "Levende wortels zijn de brandstof van de bodem. Planten geven via hun wortels suikers af aan het bodemleven, en dat bodemleven maakt weer voedingsstoffen vrij voor de plant. Vaste planten, struiken en bodembedekkers houden het hele jaar wortels in de grond; een bed dat de hele winter kaal ligt niet."
   },
   {
    "soort": "kop",
    "tekst": "5. Laat het leven toe"
   },
   {
    "soort": "alinea",
    "tekst": "Voor boeren gaat het vijfde principe over vee op het land. In een tuin komt het neer op ruimte laten voor wat vanzelf komt: wormen, kevers, vogels. Blad dat blijft liggen en een hoek die niet elke week wordt opgeruimd, helpen al."
   },
   {
    "soort": "kop",
    "tekst": "Waarom het hier extra telt"
   },
   {
    "soort": "alinea",
    "tekst": "Löss komt in Nederland alleen in Zuid-Limburg voor. Het is een vruchtbare grond die water goed vasthoudt, maar zonder begroeiing spoelt hij weg, zeker op een helling, en hij verdicht makkelijk. Waterschap Limburg waarschuwt dat regenwater dat over Zuid-Limburgse hellingen afstroomt, erosie en modderoverlast kan veroorzaken. Een bedekte grond met wortels erin houdt water en aarde vast."
   },
   {
    "soort": "kop",
    "tekst": "Begin klein"
   },
   {
    "soort": "alinea",
    "tekst": "Je hoeft niet alles tegelijk. Stop met spitten, laat het blad in de border liggen en tel de wormen in een kluit van dertig bij dertig centimeter en vijftien diep. Meer dan tien betekent een rijke grond."
   },
   {
    "soort": "alinea",
    "tekst": "Wil je hulp bij een nieuwe border? Stuur een foto via WhatsApp naar 06 181 180 14, dan kijk ik mee. Met een vaste prijs vooraf."
   }
  ],
  "bronnen": [
   "B3W. (2024). Regeneratieve landbouw in de praktijk [Brochure]. https://www.b3w.vlaanderen.be/files/Kennispunt/Regeneratieve-en-Biologische-Landbouw/Regeneratieve-landbouw-in-de-praktijk-B3W-brochure.pdf",
   "Royal Horticultural Society. (z.d.). No-dig gardening. https://www.rhs.org.uk/soil-composts-mulches/no-dig-gardening",
   "Stal en Akker. (2021). Löss, grondsoort van het jaar 2021. https://www.stal-en-akker.nl/artikel/377371-loss-grondsoort-van-het-jaar-2021",
   "Waterschap Limburg. (z.d.). Erosie en niet-kerende grondbewerking. https://www.waterschaplimburg.nl/voor-agrariers/erosie-en-niet-kerende-grondbewerking/",
   "Leefmilieu Brussel. (2018). Mijn tuin in permacultuur. https://document.environnement.brussels/opac_css/elecfile/IF_Potager_Permaculture_Permacultuurmoestuin_NL"
  ]
 },
 {
  "slug": "vijver-voorjaarsklaar",
  "titel": "Je vijver voorjaarsklaar maken: pomp, filter en planten",
  "beschrijving": "Als het water boven de 10 °C komt, wordt je vijver wakker. Wat je dan doet met de pomp, het filter, het slib en de planten, in de goede volgorde.",
  "datum": "2026-04-02",
  "leestijd": 2,
  "thema": "Vijver",
  "beeld": {
   "src": "/foto/vijverrenovatie-F05.jpg",
   "breed": 1200,
   "hoog": 1600,
   "alt": "Een zwarte filterbak met drie kamers, rechtop gezet naast de haag tijdens de werkzaamheden.",
   "bijschrift": "Een filter met drie kamers."
  },
  "blokken": [
   {
    "soort": "alinea",
    "tekst": "In de winter heb je je vijver met rust gelaten. Nu het water warmer wordt, komt alles weer op gang: de vissen, de planten, de algen en het filter. Met een goede voorjaarsbeurt geef je de goede kant een voorsprong."
   },
   {
    "soort": "kop",
    "tekst": "Wanneer?"
   },
   {
    "soort": "alinea",
    "tekst": "Wacht tot het water een paar dagen boven de 10 °C blijft. Meet op zo'n 50 cm diepte. In Zuid-Limburg is dat meestal eind maart of begin april. Begin je eerder, dan stoor je vissen die nog in winterrust zijn."
   },
   {
    "soort": "kop",
    "tekst": "1. Kijk eerst wat er leeft"
   },
   {
    "soort": "alinea",
    "tekst": "In maart en april zetten kikkers en padden hun eitjes af. Kijk goed voor je gaat scheppen, en laat dril en snoeren in het water."
   },
   {
    "soort": "kop",
    "tekst": "2. Oude plantresten eruit"
   },
   {
    "soort": "alinea",
    "tekst": "Knip riet, lisdodde en biezen nu terug tot net boven het water. Haal dood blad en afgestorven stengels uit het water, voordat ze verder rotten."
   },
   {
    "soort": "kop",
    "tekst": "3. Slib: een deel, niet alles"
   },
   {
    "soort": "alinea",
    "tekst": "Haal met een schepnet een deel van het slib van de bodem. Laat een dun laagje liggen: daar leven bacteriën en larven die bij een gezonde vijver horen. Het slib mag de border in."
   },
   {
    "soort": "kop",
    "tekst": "4. Het filter"
   },
   {
    "soort": "alinea",
    "tekst": "Zet het filter weer volledig aan als het in de winter uit stond. Spoel het filtermateriaal uit in een emmer vijverwater, nooit onder de kraan: het chloor doodt de bacteriën die het water schoon houden. Maak niet alles tegelijk schoon, maar om en om, dan blijft er altijd genoeg leven in."
   },
   {
    "soort": "kop",
    "tekst": "5. De UV-lamp"
   },
   {
    "soort": "alinea",
    "tekst": "Vervang de lamp van de UV-C ieder voorjaar. Na een seizoen brandt hij nog wel, maar geeft hij veel minder UV. Zet hem aan zodra het filter draait; zo houd je zweefalgen in het voorjaar de baas."
   },
   {
    "soort": "kop",
    "tekst": "6. De pomp terug op zijn plek"
   },
   {
    "soort": "alinea",
    "tekst": "Heb je de pomp in de winter hoger gehangen? Zet hem nu terug op zijn gewone plek. Kijk of de aanzuiging vrij is en of de leidingen niet lekken."
   },
   {
    "soort": "kop",
    "tekst": "7. Planten erbij"
   },
   {
    "soort": "alinea",
    "tekst": "April en mei zijn goede maanden om nieuwe waterplanten te zetten. Begin met zuurstofplanten en een paar oeverplanten. Die nemen voedingsstoffen op, en dat is precies wat de algen anders krijgen."
   },
   {
    "soort": "kop",
    "tekst": "8. Voeren: rustig aan"
   },
   {
    "soort": "alinea",
    "tekst": "Geef vissen boven de 10 °C weinig en licht verteerbaar voer, en alleen wat ze in een paar minuten opeten. Te veel voer zakt naar de bodem en is voeding voor algen."
   },
   {
    "soort": "kop",
    "tekst": "En de folie?"
   },
   {
    "soort": "alinea",
    "tekst": "Loop de rand een keer rond. Staat het water lager dan in de herfst, zonder dat het warm is geweest? Dan kan er een lek zitten, vaak in de rand of bij een waterval."
   },
   {
    "soort": "alinea",
    "tekst": "Liever een voorjaarsbeurt door een vakman? Stuur een foto via WhatsApp naar 06 181 180 14, dan kijk ik mee. Met een vaste prijs vooraf."
   }
  ]
 },
 {
  "slug": "tegels-eruit",
  "titel": "Tegels eruit, groen erin: zo pak je het aan",
  "beschrijving": "Minder tegels betekent minder wateroverlast, een koelere tuin en meer leven. Hoeveel je eruit haalt, wat je ervoor in de plaats zet en waar je op let.",
  "datum": "2026-03-19",
  "leestijd": 2,
  "thema": "Tuin",
  "blokken": [
   {
    "soort": "alinea",
    "tekst": "In veel tuinen in Zuid-Limburg ligt meer steen dan groen. Het is makkelijk, denken we. Tot de eerste zware bui, of de eerste hete week."
   },
   {
    "soort": "kop",
    "tekst": "Waarom minder tegels?"
   },
   {
    "soort": "lijst",
    "regels": [
     "Regen kan weg. Op tegels loopt regen naar het riool, en dat is niet gebouwd op al dat extra water. Straten en kelders lopen dan onder. In de grond zakt het weg en vult het het grondwater aan (Steenbreek, z.d.).",
     "Een koelere tuin. Steen houdt warmte vast tot diep in de avond. Planten en open grond verdampen water en koelen de lucht af.",
     "Meer leven. Onder een tegel woont niets. In open grond wel: wormen, kevers, en de vogels die ze eten.",
     "Minder werk dan je denkt. Een goed gekozen border met bodembedekkers houdt onkruid zelf tegen. Voegen schoonkrabben hoeft dan niet meer."
    ]
   },
   {
    "soort": "kop",
    "tekst": "Hoeveel haal je eruit?"
   },
   {
    "soort": "alinea",
    "tekst": "Een vuistregel: niet meer dan een derde van je tuin verhard (Steenbreek, z.d.). Houd wat je echt gebruikt: een terras voor de tafel, een pad naar de schuur, een plek voor de kliko. De rest mag groen."
   },
   {
    "soort": "alinea",
    "tekst": "Twijfel je? Begin met de randen. Een strook van een halve meter langs de schutting is snel gedaan en maakt al verschil."
   },
   {
    "soort": "kop",
    "tekst": "Wat zet je ervoor in de plaats?"
   },
   {
    "soort": "lijst",
    "regels": [
     "Een border met vaste planten die bij je grond passen. Plant ze dicht op elkaar, dan blijft er geen ruimte voor onkruid.",
     "Grind of schors op het pad, in plaats van tegels. Regen zakt erdoorheen.",
     "Een wadi of regentuin: een laag stuk waar het regenwater van het dak naartoe loopt en langzaam wegzakt.",
     "Een boom, als er plek is. Niets koelt een tuin zo goed als schaduw."
    ]
   },
   {
    "soort": "kop",
    "tekst": "Waar je op let"
   },
   {
    "soort": "lijst",
    "regels": [
     "De grond onder de tegels is vaak zand en puin, platgedrukt en zonder leven. Spit het los en meng er compost door voor je plant.",
     "Kabels en leidingen. Graaf je dieper dan een schop, dan doe ik vooraf een KLIC-melding. Bij zelf graven: let op waar de leidingen het huis in gaan.",
     "De tegels zelf. Gooi ze niet weg. Veel gemeenten halen ze op of ruilen ze voor planten, en via Marktplaats ben je ze zo kwijt."
    ]
   },
   {
    "soort": "kop",
    "tekst": "Tegelwippen"
   },
   {
    "soort": "alinea",
    "tekst": "Elk jaar loopt het NK Tegelwippen, van het voorjaar tot in het najaar. Gemeenten doen mee en tellen hoeveel tegels hun inwoners eruit halen (Steenbreek, z.d.). Vraag bij je gemeente of er dit jaar een tegelruilactie is."
   },
   {
    "soort": "kop",
    "tekst": "Hulp nodig?"
   },
   {
    "soort": "alinea",
    "tekst": "Ik maak van betegelde tuinen in Stein en omgeving groene tuinen: tegels eruit, bodem verbeteren, planten erin. Met een vaste prijs vooraf. Stuur een foto van je tuin via WhatsApp naar 06 181 180 14, of kijk naar de borderpakketten als je zelf aan de slag wilt."
   }
  ],
  "bronnen": [
   "Steenbreek. (z.d.). Plan van aanpak: Tegel eruit, plant erin. https://steenbreek.nl/plan-van-aanpak-tegelruilactie"
  ]
 },
 {
  "slug": "groen-water-in-het-voorjaar",
  "titel": "Groen water in het voorjaar: oorzaak en oplossing",
  "beschrijving": "In maart en april kleurt veel vijverwater groen. Waarom dat gebeurt, waarom het vaak vanzelf overgaat en wat je wel en niet moet doen.",
  "datum": "2026-03-05",
  "leestijd": 2,
  "thema": "Vijver",
  "beeld": {
   "src": "/foto/vijverrenovatie-F07-2.jpg",
   "breed": 1000,
   "hoog": 1333,
   "alt": "Een hand vol slib uit de filterbak, boven het troebele water in de kamer.",
   "bijschrift": "Slib uit het filter: voeding voor algen."
  },
  "blokken": [
   {
    "soort": "alinea",
    "tekst": "Het eerste zonnetje, en een week later is je vijver groen als erwtensoep. Dat gebeurt in bijna elke vijver in het voorjaar. Schrik er niet van, maar kijk wel waar het vandaan komt."
   },
   {
    "soort": "kop",
    "tekst": "Waarom het water groen wordt"
   },
   {
    "soort": "alinea",
    "tekst": "Groen water bestaat uit zweefalgen: piepkleine algen die in het water zweven. Ze hebben drie dingen nodig: licht, warmte en voedingsstoffen. In het voorjaar krijgen ze alle drie tegelijk."
   },
   {
    "soort": "lijst",
    "regels": [
     "De zon schijnt weer, en het ondiepe water warmt snel op.",
     "In de winter is blad en slib op de bodem gaan rotten. Daarbij zijn voedingsstoffen vrijgekomen.",
     "De waterplanten slapen nog. Die zouden de voedingsstoffen opnemen, maar groeien pas later.",
     "Het filter komt traag op gang. De bacteriën erin werken pas goed als het water warmer is dan zo'n 12 °C."
    ]
   },
   {
    "soort": "alinea",
    "tekst": "Algen zijn dus sneller dan de rest van je vijver. Vaak klaart het water vanzelf op zodra de planten gaan groeien."
   },
   {
    "soort": "kop",
    "tekst": "Wat helpt"
   },
   {
    "soort": "lijst",
    "regels": [
     "De UV-lamp aan, met een nieuwe lamp. Een UV-lamp laat zweefalgen samenklonteren, zodat het filter ze opvangt. Na een seizoen geeft de lamp veel minder UV, ook al brandt hij nog.",
     "Slib weghalen. Haal een deel van het slib van de bodem, niet alles. Wat je eruit haalt, mag zo de border in.",
     "Niet te vroeg voeren. Voer dat de vissen niet eten, is voeding voor algen. Begin pas als het water boven de 10 °C is, en dan weinig.",
     "Planten erbij. Zuurstofplanten onder water en drijvende planten als waterlelies nemen voedingsstoffen op en geven schaduw. Een derde tot de helft van het wateroppervlak in de schaduw is een goed doel."
    ]
   },
   {
    "soort": "kop",
    "tekst": "Wat niet helpt"
   },
   {
    "soort": "lijst",
    "regels": [
     "Al het water verversen. Kraanwater bevat zelf voedingsstoffen, en je haalt het evenwicht dat er was ook weg. Binnen een paar weken is het weer groen.",
     "Middeltjes tegen algen. Ze werken even, maar de oorzaak blijft. De dode algen zakken naar de bodem en worden de voeding voor de volgende bloei.",
     "Het filter met kraanwater schoonspoelen. Het chloor doodt de bacteriën die je juist nodig hebt. Spoel filtermateriaal uit in een emmer vijverwater."
    ]
   },
   {
    "soort": "kop",
    "tekst": "Draadalg is iets anders"
   },
   {
    "soort": "alinea",
    "tekst": "Lange groene slierten aan stenen en planten zijn draadalgen, geen zweefalgen. Een UV-lamp helpt daar niet tegen. Haal ze met de hand of een stok uit het water, en kijk ook hier naar de oorzaak: te veel voeding en te weinig planten."
   },
   {
    "soort": "alinea",
    "tekst": "Blijft je vijver groen, ook in de zomer? Stuur een foto via WhatsApp naar 06 181 180 14, dan kijk ik mee. Met een vaste prijs vooraf."
   }
  ]
 },
 {
  "slug": "snoeien-in-de-winter",
  "titel": "Snoeien in de winter: wat wel, en wat beter niet",
  "beschrijving": "Niet alles mag in de winter onder de schaar. Welke bomen en struiken je nu snoeit, welke je laat staan, en waarom je uitgebloeide planten laat staan.",
  "datum": "2026-02-19",
  "leestijd": 2,
  "thema": "Seizoen",
  "blokken": [
   {
    "soort": "alinea",
    "tekst": "Februari kriebelt. De tuin ligt stil, en het is verleidelijk om alles kort te knippen. Maar niet elke plant wil nu gesnoeid worden. Dit is wat ik aanhoud."
   },
   {
    "soort": "kop",
    "tekst": "Wel nu"
   },
   {
    "soort": "lijst",
    "regels": [
     "Appel en peer. In de winter staat de boom in rust en zie je de vorm goed. Haal dood hout, kruisende takken en waterloten weg. Snoei niet op dagen dat het vriest.",
     "Zomerbloeiers als vlinderstruik en struikrozen. Die bloeien op hout van dit jaar. Snoei ze eind februari of begin maart, als het ergste vriesweer voorbij is.",
     "Wilgen en hazelaar. Knotten en terugzetten kan nu goed, zolang er nog geen vogels nesten."
    ]
   },
   {
    "soort": "kop",
    "tekst": "Beter niet nu"
   },
   {
    "soort": "lijst",
    "regels": [
     "Kers, pruim en andere steenvruchten. Die snoei je in de zomer, na de oogst. In de winter dringt de schimmel die loodglans veroorzaakt makkelijker in de wonden.",
     "Voorjaarsbloeiers als forsythia, sering en ribes. Die hebben hun knoppen al. Wie ze nu snoeit, knipt de bloei van dit jaar weg. Snoei ze direct na de bloei.",
     "Hortensia's met bolle bloemen. Laat de oude bloemen staan tot april; ze beschermen de nieuwe knoppen tegen vorst."
    ]
   },
   {
    "soort": "kop",
    "tekst": "Laat staan wat uitgebloeid is"
   },
   {
    "soort": "alinea",
    "tekst": "Uitgebloeide vaste planten en grassen knip je pas in maart. In de holle stengels overwinteren bijen en andere insecten, en vogels eten de zaden. Een border met zaadhoofden en grassen in de rijp is in de winter ook gewoon mooi."
   },
   {
    "soort": "kop",
    "tekst": "Let op de vogels"
   },
   {
    "soort": "alinea",
    "tekst": "Vanaf half maart beginnen veel vogels te broeden, vaak in hagen en struiken. Een nest dat in gebruik is, mag je niet verstoren. Doe het grote snoeiwerk aan hagen dus vóór die tijd, en kijk altijd eerst even goed."
   },
   {
    "soort": "kop",
    "tekst": "Goed gereedschap"
   },
   {
    "soort": "alinea",
    "tekst": "Snoei met een scherpe, schone schaar. Een rafelige wond geneest slecht en laat ziektes binnen. Maak de schaar schoon tussen twee bomen, zeker als een van de twee ziek is. Wondafdekmiddel is niet nodig: een goede, schuine snede vlak boven een knop of zijtak geneest vanzelf."
   },
   {
    "soort": "alinea",
    "tekst": "Liever dat iemand anders de schaar pakt? Stuur een foto via WhatsApp naar 06 181 180 14, dan kijk ik mee. Met een vaste prijs vooraf."
   }
  ]
 },
 {
  "slug": "voedselbos-in-je-tuin",
  "titel": "Een voedselbos in je tuin? Wat er wel en niet kan",
  "beschrijving": "Een echt voedselbos is minstens een halve hectare, maar de ideeën erachter passen ook in een gewone tuin: plant in lagen en geef het tijd.",
  "datum": "2026-02-05",
  "leestijd": 3,
  "thema": "Tuin",
  "blokken": [
   {
    "soort": "alinea",
    "tekst": "Voedselbossen zijn populair. Je leest erover in de krant en gemeenten planten ze aan. Past er ook een in je achtertuin? Het eerlijke antwoord: een voedselbos niet, maar wel bijna alles wat een voedselbos goed maakt."
   },
   {
    "soort": "kop",
    "tekst": "Wat een voedselbos is"
   },
   {
    "soort": "alinea",
    "tekst": "In november 2017 tekenden zo'n twintig partijen in Lelystad de Green Deal Voedselbossen, waaronder drie ministeries en de Provincie Limburg. Daarin staat wat een voedselbos is: een door mensen ontworpen, productief ecosysteem naar het voorbeeld van een natuurlijk bos, met veel meerjarige en houtige soorten waarvan je delen kunt eten. Het heeft een kruinlaag van hoge bomen, minstens drie andere lagen daaronder, een rijk bodemleven, en het is minimaal een halve hectare groot."
   },
   {
    "soort": "alinea",
    "tekst": "Die laatste eis is de reden dat een achtertuin officieel geen voedselbos is. Wouter van Eck, die het oudste voedselbos van Nederland begon, zegt zelf dat de term aan inflatie onderhevig is: een bosje zonder één echte boom erin is geen voedselbos. Ik noem het in een tuin daarom liever anders: een tuin in lagen, of een eetbare rand."
   },
   {
    "soort": "kop",
    "tekst": "Wat je ervan kunt leren"
   },
   {
    "soort": "alinea",
    "tekst": "Van Eck begon in 2009 bij Groesbeek, op een uitgeputte maïsakker van zo'n 2,4 hectare. Voedselbos Ketelbroek telt inmiddels honderden eetbare soorten. Een paar dingen uit zijn ervaring zijn ook in een tuin bruikbaar."
   },
   {
    "soort": "lijst",
    "regels": [
     "Plant in lagen. Een bos heeft hoge bomen, lagere bomen, struiken, kruiden, bodembedekkers en klimplanten. In een tuin doe je dat op kleine schaal na: één boom, struiken eronder, vaste planten en een bodembedekker. Een walnoot wordt groot; in een kleine tuin is een lagere fruitboom de kruin.",
     "Zet elke plant waar hij van nature thuishoort. Aardbei groeit van nature op schaduwrijke bosbodems en werkt daarom als bodembedekker. Een zonnige plek is voor duindoorn en abrikoos, een schaduwrijke voor daslook.",
     "Ken je grond en je water. Bomen met een penwortel, zoals tamme kastanje en walnoot, willen hun wortels niet in het grondwater.",
     "Denk aan insecten. \"Een insectenhotel is prima, maar veel belangrijker is een insectenrestaurant,\" zegt Van Eck. Vroeg in het jaar is er weinig te eten; gele kornoelje en amandel bloeien vroeg."
    ]
   },
   {
    "soort": "kop",
    "tekst": "Wat het oplevert"
   },
   {
    "soort": "alinea",
    "tekst": "In voedselbos Haarzuilens telden onderzoekers van Naturalis en de Universiteit Leiden 18.572 insecten, tegen 3.379 in het kruidenrijke grasland ernaast: 5,5 keer zoveel. In Ketelbroek steeg het gehalte organische stof in de bodem in tien jaar van 2 naar 7 à 9 procent, omdat het blad van alle lagen de bodem voedt."
   },
   {
    "soort": "alinea",
    "tekst": "Tegelijk zegt Wageningen University & Research dat er nog weinig wetenschappelijk onderzoek naar voedselbossen is gedaan, en dat het zo'n tien jaar duurt voordat een voedselbos optimaal produceert. Wie begint, begint voor de lange termijn."
   },
   {
    "soort": "kop",
    "tekst": "Geduld, en een beetje rommel"
   },
   {
    "soort": "alinea",
    "tekst": "Een tuin in lagen ziet er anders uit dan een gazon met een strak perk. Zeker in de winter oogt het rommelig. Dat hoort erbij: blad dat blijft liggen, wordt voeding. Van Eck zegt het kort: de schoffel en de bladblazer horen er niet thuis."
   },
   {
    "soort": "alinea",
    "tekst": "Planten doe je het best aan het begin van de winter, als je niet hoeft te sproeien. Komt er daarna een droge zomer, geef dan om de paar weken flink water in plaats van steeds een beetje."
   },
   {
    "soort": "kop",
    "tekst": "Hoe ik daarbij help"
   },
   {
    "soort": "alinea",
    "tekst": "Beplanting in lagen, van bodembedekker tot boom, is een van de dingen die ik doe. Ik kijk naar wat er al staat, naar de grond en het licht, en kies planten die bij de plek passen. Stuur een foto via WhatsApp naar 06 181 180 14, dan kijk ik mee. Met een vaste prijs vooraf."
   }
  ],
  "bronnen": [
   "Stichting Voedselbosbouw Nederland. (z.d.). Wat is een voedselbos? https://www.voedselbosbouw.org/wat-is-een-voedselbos/",
   "Green Deal Voedselbossen (C-219). (2017). https://edepot.wur.nl/429283",
   "IPLO. (z.d.). Voedselbossen [Factsheet]. https://iplo.nl/publish/pages/153742/c1-voedselbossen.pdf",
   "Stad + Groen. (2025). Interview met Wouter van Eck. Stad + Groen, 2025(1). https://www.stad-en-groen.nl/upload/artikelen/sg251_voedselbossen.pdf",
   "Stichting Voedselbosbouw Nederland. (2025). In voedselbos 5,5 keer meer insecten dan in aangrenzend kruidenrijk grasland. https://voedselbosbouw.org/in-voedselbos-55-keer-meer-insecten-dan-in-aangrenzend-kruidenrijk-grasland/",
   "Wageningen University & Research. (2021). Voedselbossen zijn hip. https://edepot.wur.nl/563870"
  ]
 },
 {
  "slug": "haag-planten-in-de-winter",
  "titel": "Een haag planten in de winter: zo doe je dat met wortelgoed",
  "beschrijving": "De winter is de beste tijd om een haag te planten. Wat wortelgoed is, hoeveel planten je per meter zet en hoe je ze goed laat aanslaan.",
  "datum": "2026-01-22",
  "leestijd": 2,
  "thema": "Tuin",
  "blokken": [
   {
    "soort": "alinea",
    "tekst": "Een haag plant je niet in mei, maar nu. Zolang de grond niet bevroren is, kun je van november tot in maart planten. De plant staat in rust, de grond is vochtig, en in het voorjaar groeien de wortels meteen door."
   },
   {
    "soort": "kop",
    "tekst": "Wat is wortelgoed?"
   },
   {
    "soort": "alinea",
    "tekst": "Wortelgoed zijn planten zonder pot of kluit: de wortels zijn kaal. Ze worden alleen in de winter verkocht, als de planten in rust zijn. Wortelgoed is veel goedkoper dan planten in een pot, en het slaat vaak beter aan, omdat de wortels meteen in je eigen grond groeien."
   },
   {
    "soort": "alinea",
    "tekst": "Het enige nadeel: de wortels mogen niet uitdrogen. Plant ze dezelfde dag, of sla ze in een hoopje vochtige grond in tot je tijd hebt."
   },
   {
    "soort": "kop",
    "tekst": "Welke haag?"
   },
   {
    "soort": "alinea",
    "tekst": "Kies een haag die bij je tuin en de grond past, en het liefst een inheemse soort. Die geven vogels en insecten beschutting en eten."
   },
   {
    "soort": "lijst",
    "regels": [
     "Haagbeuk: groeit op bijna elke grond, ook in de schaduw, en houdt in de winter een deel van zijn bruine blad vast.",
     "Beuk: lijkt op haagbeuk, maar wil een luchtige grond en kan niet tegen natte voeten.",
     "Veldesdoorn: sterk en snel, met mooie herfstkleuren.",
     "Meidoorn: bloeit in mei en heeft bessen voor vogels. Let op de doorns.",
     "Een gemengde haag: haagbeuk, veldesdoorn, meidoorn en hazelaar door elkaar. Rommeliger, maar het rijkst aan leven."
    ]
   },
   {
    "soort": "kop",
    "tekst": "Hoeveel per meter?"
   },
   {
    "soort": "alinea",
    "tekst": "Voor haagbeuk en beuk zet je meestal vier tot vijf planten per meter in één rij. Wil je snel een dichte haag, plant dan in twee rijen, verspringend. Vraag bij aankoop wat er voor jouw soort en maat gebruikelijk is."
   },
   {
    "soort": "kop",
    "tekst": "Zo plant je"
   },
   {
    "soort": "lijst",
    "regels": [
     "Zet de wortels een paar uur in een emmer water voor je plant.",
     "Graaf een sleuf van een spade diep en ruim breed genoeg voor de wortels.",
     "Maak de bodem van de sleuf los en meng er wat compost door.",
     "Zet de planten op dezelfde diepte als ze in de kwekerij stonden. Dat zie je aan de kleur van de stam.",
     "Vul aan, druk de grond aan met je voet en geef water, ook in de winter."
    ]
   },
   {
    "soort": "alinea",
    "tekst": "Knip haagbeuk na het planten een derde terug. Dan vertakt hij van onderaf en wordt de haag dicht."
   },
   {
    "soort": "kop",
    "tekst": "Het eerste jaar"
   },
   {
    "soort": "alinea",
    "tekst": "Het belangrijkste werk komt in het voorjaar. Valt er in april en mei weinig regen, geef dan elke week flink water. Een laag blad of houtsnippers onder de haag houdt de grond vochtig en onkruid weg."
   },
   {
    "soort": "alinea",
    "tekst": "Wil je een haag laten planten in Stein en omgeving? Stuur een foto via WhatsApp naar 06 181 180 14, dan kijk ik mee. Met een vaste prijs vooraf."
   }
  ]
 },
 {
  "slug": "vijver-bevroren",
  "titel": "Je vijver is bevroren: wat je wel en niet doet",
  "beschrijving": "IJs op de vijver is niet erg, een vijver die helemaal dichtzit wel. Hoe je een wak openhoudt en waarom je het ijs nooit openhakt.",
  "datum": "2026-01-08",
  "leestijd": 2,
  "thema": "Vijver",
  "blokken": [
   {
    "soort": "alinea",
    "tekst": "Een paar nachten vorst en je vijver ligt dicht. Dat ziet er mooi uit, en voor de vijver zelf is het geen probleem. Waar het om gaat, is wat er onder het ijs gebeurt."
   },
   {
    "soort": "kop",
    "tekst": "Waarom een dichte vijver een risico is"
   },
   {
    "soort": "alinea",
    "tekst": "Op de bodem van elke vijver liggen blad en slib. Dat rot langzaam, ook in de winter, en daarbij komen gassen vrij. Normaal ontsnappen die aan het oppervlak. Ligt er een dichte laag ijs op, dan blijven ze in het water hangen. Voor vissen is dat gevaarlijker dan de kou zelf."
   },
   {
    "soort": "kop",
    "tekst": "Houd één plek open"
   },
   {
    "soort": "alinea",
    "tekst": "Een wak van een paar handbreedtes is genoeg. Dat kan op twee manieren:"
   },
   {
    "soort": "lijst",
    "regels": [
     "Een ijsvrijhouder: een drijver van piepschuim die je in het najaar al in het water legt. Onder de drijver vriest het minder snel dicht.",
     "Een kleine luchtpomp met een uitstroomsteen vlak onder het oppervlak. De bubbels houden het water in beweging, zodat het daar niet bevriest."
    ]
   },
   {
    "soort": "alinea",
    "tekst": "Riet, lisdodde en biezen helpen ook. Hun holle stengels steken door het ijs en laten gassen ontsnappen. Daarom knip je ze pas in het voorjaar."
   },
   {
    "soort": "kop",
    "tekst": "Hak het ijs nooit open"
   },
   {
    "soort": "alinea",
    "tekst": "Een klap op het ijs geeft een drukgolf onder water. Vissen liggen in de winter stil op de bodem, in hun winterrust, en schrikken daar flink van. Ligt de vijver toch helemaal dicht, zet dan een pan met heet water op het ijs en laat er langzaam een gat in smelten. Herhaal dat als het nodig is."
   },
   {
    "soort": "kop",
    "tekst": "Pomp hoog, voer weg"
   },
   {
    "soort": "alinea",
    "tekst": "Laat de pomp niet onderin het water rondpompen. Onderin is het water het warmst, rond de 4 °C, en daar overwinteren je vissen. Hang de pomp hoger, zo'n 30 cm onder het oppervlak, of zet hem uit als er geen vissen zijn. Voeren doe je niet: onder de 10 °C verteren vissen bijna niets."
   },
   {
    "soort": "kop",
    "tekst": "Sneeuw op het ijs"
   },
   {
    "soort": "alinea",
    "tekst": "Een dikke laag sneeuw houdt het licht tegen. Waterplanten maken dan geen zuurstof meer. Veeg bij een lange vorstperiode een deel van het ijs sneeuwvrij, voorzichtig en zonder op het ijs te gaan staan."
   },
   {
    "soort": "kop",
    "tekst": "En daarna"
   },
   {
    "soort": "alinea",
    "tekst": "Als het dooit, kijk je of er dode vissen of veel rottend materiaal in het water liggen. Haal dat weg. De rest wacht tot het voorjaar, als het water boven de 10 °C komt."
   },
   {
    "soort": "alinea",
    "tekst": "Twijfel je of je vijver de winter goed doorkomt? Stuur een foto via WhatsApp naar 06 181 180 14, dan kijk ik mee. Met een vaste prijs vooraf."
   }
  ]
 }
]

