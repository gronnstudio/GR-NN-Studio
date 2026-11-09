# Art direction

Stand 9 nov 2026.

## De richting

**De site is het veldboek van een tuinarchitect.** Wat Nick ziet, meet en noteert, opgemaakt als een architectuurtijdschrift: grote koppen in Syne, rustige tekst in Montserrat, en alles wat gemeten of gezien is in Geist Mono. Het herkenbare teken is de **hoekhaak**: een kader op een echte foto dat aanwijst wat er te zien is (opening, Observatie 001).

## Principes

1. **Kijken is het product.** Hoekhaken alleen op echte foto's en alleen rond wat er werkelijk staat.
2. **Papier en plaat.** Twee ondergronden: warm crème en antraciet. Groen komt uit foto's, nooit uit vlakken.
3. **Eén accent.** Oranje #FF5B04 uit het logo: de hoofdactie en het ene kernpunt.
4. **Typografie als compositie.** Elke sectie heeft een eigen schaal; de opening is een trap van drie regels.
5. **Rechte hoeken** voor foto's (2 px). Geen kaarten met schaduw, geen glas, geen verloop. Ronde vormen alleen voor knoppen.
6. **Ritme door verschil.** Geen twee secties na elkaar met dezelfde opbouw.

Bewust vermeden: tekst over een foto met een waas, drie gelijke dienstkaarten, groene vlakken, glassmorphism, stockfoto's, verzonnen cijfers of reviews, beweging op elk element.

## Kleur

| Token | Waarde | Gebruik | Contrast |
| --- | --- | --- | --- |
| `--papier` | `#f3eee4` | ondergrond | |
| `--plaat` | `#1a1a18` | donkere secties, voet, duimbalk | |
| `--inkt` | `#1d1c19` | tekst op papier | 14,7:1 |
| `--inkt-zacht` | `#57524a` | tweede tekst | 6,7:1 |
| `--op-plaat` / `--op-plaat-zacht` | `#ede8dd` / `#aaa497` | tekst op plaat | 14,3:1 / 7,0:1 |
| `--oranje` | `#ff5b04` | knoppen, kernpunt | antraciet tekst erop, 5,6:1 |
| `--oranje-tekst` | `#b23e00` | oranje tekst op papier | 5,1:1 |

## Typografie

| Niveau | Letter | Maat | Regel | Spatie |
| --- | --- | --- | --- | --- |
| Display | Syne 700 | `clamp(3rem, 1.2rem + 7.6vw, 9rem)` | 0.9 | -0.045em |
| H1 | Syne 700 | `clamp(2.6rem, 1.2rem + 5.4vw, 6.5rem)` | 0.92 | -0.04em |
| H2 | Syne 700 | `clamp(2.1rem, 1.1rem + 3.6vw, 4.5rem)` | 0.96 | -0.035em, max 16ch |
| H3 | Syne 700 | `clamp(1.45rem, 1.05rem + 1.4vw, 2.25rem)` | 1.04 | -0.025em, max 22ch |
| Lead | Montserrat 400 | `clamp(1.125rem, 1rem + .5vw, 1.45rem)` | 1.45 | max 34ch |
| Tekst | Montserrat 400 | 1rem | 1.65 | max 60ch |
| Annotatie | Geist Mono 500 | .75rem, kapitalen | 1.4 | .08em |
| Knop / navigatie | Montserrat 600 | 13px, kapitalen | | .06em |

## Ruimte en raster

- Rand: goot `clamp(20px, 3.4vw, 48px)`, inhoud maximaal 1440 px.
- Sectieruimte `clamp(88px, 12vw, 192px)`, blokruimte `clamp(36px, 5.5vw, 88px)`.
- Raster: 4 kolommen onder 768 px, 12 daarboven.
- Tikvlak: minstens 44 px; knoppen 48 px.

## Navigatie

- **Desktop:** één balk bovenaan: woordmerk, Vijvers · Tuinen · Werk · Studio, Kennismaken. Huidige pagina met een oranje streep.
- **Telefoon:** bovenaan alleen het woordmerk; onderaan, binnen duimbereik, twee acties: **Menu** en **Kennismaken**. Menu opent een donker blad met de bestemmingen groot en genummerd. Escape sluit, de focus blijft in het blad en gaat daarna terug.

## Beweging

| Wat | Wanneer | Duur | Bij minder beweging |
| --- | --- | --- | --- |
| Kopregels komen omhoog | laden | 900 ms, 90 ms per regel | staan er meteen |
| Hoekhaken klikken vast | na de kop | 500 ms, 180 ms per haak | staan er meteen |
| Secties komen binnen | scroll (`animation-timeline: view()`) | gekoppeld aan scroll | uit |
| Indexregel, dossier | aanwijzen | 300–900 ms | direct |
| Menublad | openen | 380 ms | direct |

Alleen CSS, op het menu na (React-state). Easing overal `cubic-bezier(.2,.7,.1,1)`.
