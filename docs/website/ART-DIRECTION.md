# Art direction: Doorsnede

Stand 9 nov 2026 · Checkpoint 1 · nog niet gebouwd.

Fase 4 van de Website Master Brief. Deze richting staat los van de twee eerdere pogingen (de Klassiek-voorpagina van GRONN26 en "Veldboek"): geen hoekhaken op foto's, geen observatiesectie, geen kop "Eerst water, bodem en licht", geen mono-notitieboek.

## 1. Referentieonderzoek

Bekeken op 9 nov 2026, live, in de browser en via de paginabron. Het visuele deel liep via een browserpaneel dat halverwege wegviel; wat hieronder staat is wat ik daadwerkelijk zag of las, niets meer.

| Referentie | Wat ik zag | Principe dat we lenen | Wat we níet lenen |
| --- | --- | --- | --- |
| **Piet Oudolf** (oudolf.com) | Kleine naam bovenaan, een projectnaam ("High Line") in enorme letters waar de foto dóór de letters schijnt, een verticaal label ("Gardens") langs de rand. Navigatie: Projects, Information, Private Garden; elk project op naam en plaats. | Typografie als venster op het beeld: het woord ís het beeld. Projecten heten naar hun plek. | De grijze, bijna anonieme uitstraling. |
| **Dan Pearson Studio** (danpearsonstudio.com) | Een leeg, licht vlak met de naam in kleine, ver uit elkaar gezette letters, en één getekende golvende lijn over de volle breedte, als een horizon of een hoogtelijn. Video daarna; projecten als tekstlijst. | Eén getekende lijn als drager van de hele compositie. Rust en leegte als bewuste keuze. | De afwezigheid van een duidelijke actie. |
| **Field Operations** (fieldoperations.net) | Drie korte gebiedende woorden boven één stellige zin als opening; projecten beeld-eerst met één regel tekst; nieuws met datums als JJJJ.MM.DD. | Een opening die in drie woorden zegt wat het bureau dóet. Datum en code als typografisch detail. | De schaal (wereldprojecten) en de nieuwsmachine. |
| **West 8** (west8.com) | Navigatie op thema ("Approach": verbinden, transformeren, ecologie, bouwen met natuur) naast projecten; grote projectbeelden met categorielabel. | Werk ordenen op *wat het systeem doet*, niet alleen op type. | De diepe menustructuur; voor één persoon te zwaar. |
| **Tom Stuart-Smith** (tomstuartsmith.co.uk) | Vier menu-items, waarvan twee eigen plekken (The Barn Garden, Serge Hill). | De eigen tuin als hoofdstuk: bewijs zonder testimonial. | — |

Wat de beste landschapssites gemeen hebben: **weinig navigatie, veel ruimte, één sterk beeldprincipe, en projecten die heten naar een plek.** Wat ze missen voor GRØNN: een duidelijke weg naar contact en een prijs, en iets wat alleen over water gaat.

Niet onderzocht (paneel viel weg): Awwwards-, Godly- en Siteinspire-galerijen visueel, mode- en cultuursites. Awwwards-pagina's van landschapsbureaus (Studio D, OH Architecture) gaven alleen scores, geen beeld.

## 2. De richting

**Doorsnede.** Een landschapsarchitect tekent een tuin niet alleen van boven, maar ook *in doorsnede*: een snee door de grond die laat zien wat boven en onder de waterlijn gebeurt. GRØNN werkt precies op die lijn: vijvers, oevers, bodem, water dat zijn weg vindt.

De site is één doorsnede. **Eén horizontale lijn, de waterlijn,** loopt door elke pagina. Boven de lijn: licht, lucht, planten, wat de klant ziet (crème). Onder de lijn: water, bodem, techniek, wat Nick ziet en de klant niet (antraciet). Scrollen is dieper gaan: van wat je ziet naar wat het laat werken.

## 3. Ontwerpprincipes

1. **Boven en onder.** Twee ondergronden: crème (boven water) en antraciet (onder water). De overgang is altijd de waterlijn, nooit een harde blokrand.
2. **De waterlijn is het merkteken.** Een dunne, licht golvende lijn (1,5 px, oranje op het moment dat hij een actie markeert, anders inkt). Hij scheidt, kopt af, onderstreept, en staat in het logo-gebied. Hij beweegt alleen mee met scrollen, nooit uit zichzelf.
3. **Letters die het water in gaan.** Grote Syne-koppen staan óp de lijn: het deel boven de lijn in inkt op crème, het deel eronder in crème op antraciet. Eén woord, twee werelden. Dit is de typografische signatuur (geleend principe: Oudolf's woord-als-venster).
4. **Peil in plaats van paginanummer.** Secties krijgen een diepte in Geist Mono (`+0,40 m`, `±0,00`, `−0,60 m`, `−1,20 m`), zoals peilmaten op een tekening. Geen genummerde lijstjes 01–05.
5. **Beeld uitgesneden op de lijn.** Foto's lopen tot aan de waterlijn en worden daar afgesneden of gaan erdoorheen; nooit zwevende kaarten.
6. **Groen alleen uit foto's. Oranje alleen voor de actie.**

## 4. Wat het onderscheidt

- Geen hovenierssite heeft een structurerend idee dat letterlijk over hun vak gaat (water). Deze wel.
- De compositie is horizontaal gelaagd (doorsnede) in plaats van kolommen met kaarten.
- Diepte, niet volgorde: je weet altijd hoe "diep" je bent.

## 5. Conventies die we bewust vermijden

Hero met tekst links en een ronde foto rechts; tekst over een foto met een waas; drie dienstkaarten; chips; groene vlakken; glas en verloop (ook de huidige glazen pil); genummerde 01–05-secties; hoekhaken (vorige poging); verzonnen cijfers en reviews; animaties die niet aan scroll of aanraking hangen.

## 6. Verbinding met GRØNN

"Designing Living Ecosystems": een ecosysteem is gelaagd en de mooiste vijvers zijn de vijvers waarvan je de techniek niet ziet. De doorsnede maakt dat zichtbaar: boven de lijn het resultaat, onder de lijn het vakmanschap (5.000 liter, 50 mm druk-pvc, drie filterkamers). Precies het verschil tussen GRØNN en een stratenmaker.

## 7. Systeem (voorstel, wordt vastgezet na akkoord)

**Kleur**

| Token | Waarde | Rol |
| --- | --- | --- |
| `--boven` | `#efeae0` | crème, boven water |
| `--onder` | `#16181a` | antraciet met een zweem blauwgrijs, onder water |
| `--inkt` / `--inkt-onder` | `#1b1b1a` / `#e9e4d9` | tekst |
| `--peil` | `#7c8a8f` | peilmaten, haarlijnen onder water |
| `--oranje` | `#ff5b04` | actie, en de waterlijn als die naar een actie wijst |

**Typografie** (Syne, Montserrat, Geist Mono; uit de brandguide)

| Niveau | Maat | Regel | Spatie | Gebruik |
| --- | --- | --- | --- | --- |
| Doorsnede-kop | `clamp(4rem, 1rem + 13vw, 15rem)` | 0.82 | -0.05em | één woord per pagina, op de waterlijn |
| H1 | `clamp(2.6rem, 1rem + 6vw, 7rem)` | 0.92 | -0.04em | |
| H2 | `clamp(2rem, 1rem + 3.4vw, 4.25rem)` | 0.96 | -0.03em | max 16ch |
| H3 | `clamp(1.35rem, 1rem + 1.2vw, 2rem)` | 1.1 | -0.02em | |
| Lead | `clamp(1.125rem, 1rem + .5vw, 1.4rem)` | 1.5 | 0 | max 36ch |
| Tekst | 1rem | 1.7 | 0 | max 62ch |
| Peil / meta | Geist Mono 500, .75rem, kapitalen | 1.4 | .1em | dieptes, codes, data |

**Ruimte:** goot `clamp(20px, 4vw, 56px)`; sectie `clamp(96px, 14vw, 224px)`; 4 kolommen mobiel, 12 vanaf 768 px. De waterlijn ligt altijd op een vaste rasterhoogte binnen een sectie (62 % van de schermhoogte in de opening), zodat het ritme herkenbaar wordt.

**Beweging**

| Interactie | Trigger | Duur / easing | Doel | Mobiel | Minder beweging |
| --- | --- | --- | --- | --- | --- |
| Waterlijn tekent zich | laden | 1200 ms, `cubic-bezier(.65,0,.35,1)` | De doorsnede ontstaat | gelijk | staat er meteen |
| Kop zakt het water in | laden, na de lijn | 900 ms | Het deel onder de lijn verschijnt | gelijk | direct |
| Peilmaat telt mee | scroll | gekoppeld | Je weet hoe diep je bent | vast onderaan | statisch per sectie |
| Overgang boven → onder | scroll door de lijn | gekoppeld aan scroll | Kleur kantelt bij de lijn, niet bij een blokrand | gelijk | harde wissel |
| Projectbeeld | aanwijzen | 600 ms | Beeld schuift onder de lijn uit | tik | geen |
