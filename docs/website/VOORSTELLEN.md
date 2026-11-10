# Drie voorstellen voor de voorpagina

Stand 10 nov 2026 · checkpoint 1 · Nick kiest er één; daarna worden de andere pagina's in die richting gebouwd.

Alle drie gebruiken alleen echte foto's, Nicks eigen tekst, echte projecten en de prijzen van de live site. Merk: Syne, Montserrat, Geist Mono; crème en antraciet; oranje alleen voor de actie. Alle drie zijn mobiel eerst gebouwd, met onderaan op de telefoon twee acties binnen duimbereik. Lokaal te bekijken op `/almanak`, `/tuinkamers` en `/materiaal`; `/` is een keuzepagina.

Bewust niet meer gebruikt (eerdere pogingen): hoekhaken op foto's, de observatiesectie, "Eerst water, bodem en licht", de waterlijn en peilmaten, en een site die alleen over vijvers gaat. De brief beschrijft een studio voor tuinontwerp met zeven vakgebieden; alle drie tonen tuinontwerp, beplanting, aanleg, water en onderhoud.

## A · Almanak

**Idee.** De site is een maandblad over de tuin. De voorpagina is het omslag van deze maand: de maandnaam vult de hele breedte en wisselt elke maand vanzelf, met wat er nú in de tuin speelt.

**Opbouw.** Kopregel met nummer en maand · omslag (maand, "deze maand in de tuin", omslagfoto, "in dit nummer") · rubriek: vakken als prijslijst met stippellijnen · reportage GR / 001 met initiaal, feitenkader en genummerde figuren · kort: GR / 002 · column: Nicks eigen woorden · achterkant (antraciet): "Volgend nummer" en colofon met KVK en btw.

**Navigatie.** "Inhoud" opent de inhoudsopgave als blad, zoals je een tijdschrift openslaat.

**Sterk:** levend (elke maand anders), redactioneel, toon past bij GRØNN. **Risico:** vraagt dat de maandteksten bijgehouden worden (nu een vaste lijst per maand in `src/lib/seizoen.ts`).

## B · Tuinkamers

**Idee.** Een tuinontwerp is een reeks kamers met drempels. De site is antraciet (de muur); elke sectie is een crème opening (de doorkijk) met een eigen vorm: doorgang, horizon, binnenplaats, smalle doorgang, volle opening, twee deuren, een raam. Aan het eind stap je naar buiten, het licht in.

**Opbouw.** Entree · Ontwerp ("Waar drink je ’s ochtends je koffie?") · Beplanting (lichte binnenplaats) · Aanleg (smalle doorgang met het tegelpad) · Water (opening groeit tot het hele scherm) · Werk (twee deuren) · Studio (klein raam) · Naar buiten (crème, start een project).

**Navigatie.** "Kamers" toont elke kamer met de vorm van zijn opening.

**Sterk:** architectonisch, het meest "premium" en donker, beweging met een doel (binnenlopen). **Risico:** donker vraagt sterke foto's; zwakke foto's vallen harder op.

## C · Materiaal

**Idee.** Elke tuin begint bij wat er ligt en wat erin komt. De site is een stalenboek: kei, grind, beton, folie, water en plant als uitsneden van echte projectfoto's, elk met de echte specificatie.

**Opbouw.** Stalen (woorden links; een woord aanwijzen licht zijn staal op) · specificatie: vakken met wat, materiaal en prijs · bestek GR / 001 met materiaalfoto's M01–M06 · GR / 002 als plaat beton · maker · "Wat ligt er nu in je tuin?": aanvinken, en het WhatsApp-bericht staat klaar.

**Navigatie.** "Menu" opent een staalkaart.

**Sterk:** tastbaar, laat vakmanschap zien, de intake begint al op de site. **Risico:** de uitsneden zijn klein uit telefoonfoto's gesneden; met scherpere detailfoto's wordt dit veel sterker.

## Techniek

- Geen nieuwe npm-pakketten. Beweging alleen met CSS (scroll-gekoppeld waar de browser het kan), en uit bij `prefers-reduced-motion`.
- Beelden alleen als WebP: AVIF maakte het eerste verzoek per maat te traag.
- Tests (`tests/voorstellen.spec.ts`): alle pagina's op 320, 390, 820 en 1440 px zonder overloop, één h1, alt-teksten, menu's met Escape en focus, de maand past op het omslag, de materiaalkeuze komt in het bericht.
- `robots: noindex` zolang het voorstellen zijn.
