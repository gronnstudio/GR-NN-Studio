# Blueprint · GRØNN Studio · "Een tuin voor de hele dag"

Status: checkpoint 2. De hele site is gebouwd en wacht op Nicks controle.
Achtergrond en referenties staan in [ART-DIRECTION.md](./ART-DIRECTION.md).

## Uitgangspunt
- Alleen de foto's en de teksten van de oude site zijn overgenomen. Opbouw, navigatie en code zijn nieuw.
- De site volgt één dag in de tuin. Elk dagdeel bundelt de vakken die bij dat moment horen.
- Eén persoon (Nick), zeven vakken, werkgebied Stein en ongeveer 30 km.

## Voorpagina (gebouwd)
1. **Kop**: woordmerk, live klok "Stein · dag · tijd · dagdeel", De dag · Vakken · Nick, knop Kennismaken.
2. **Opening**: "Een tuin voor de hele dag." met Nicks eigen vragen. Daaronder de dag als strook van vier foto's. Het dagdeel van nu (Europe/Amsterdam) is het breedst en draagt "nu · hh:mm". Een klein inline script zet `html[data-nu]` vóór de eerste weergave, zodat er niets verspringt.
3. **Ochtend** (crème): koffie in de zon. Ontwerp, aanleg en bestrating, materiaal. Terras Geulle.
4. **Middag** (papier): wat er groeit. Beplantingsplan en borderpakketten.
5. **Avond** (steen): water dat zijn weg vindt. Water en vijvers, renovatie.
6. **Nacht** (antraciet): herfstblad is geen afval. Ecologie en de egel.
7. **Op een rij**: de zeven vakken als typografische index, elk met link naar zijn dagdeel.
8. **Nick**: portret en eigen tekst.
9. **De poort**: "Vertel waar je aan denkt. Ik kom kijken." WhatsApp met voorbereid bericht, mail en telefoon.
10. **Voet**: adres, KVK, btw, Instagram.

Op de telefoon staat onderaan een duimbalk: **Menu** (met de pagina's en de vier dagdelen) en **Kennismaken**.

## Pagina's (gebouwd)
Elke pagina krijgt de toon van zijn dagdeel. De gedeelde schil bestaat uit:
- een kop met live klok;
- een donkere voet;
- op de telefoon een duimbalk met Menu en Kennismaken.

| Pad | Inhoud |
|---|---|
| `/vakken` | De zeven vakken, gegroepeerd per dagdeel |
| `/vakken/[slug]` | Per vak: wat je krijgt, wat je niet krijgt, wat het kost, en verder een van de vier extra's hieronder, een project, journaalstukken en het volgende vak in de dag |
| `/werk` | Twee projecten |
| `/werk/vijverrenovatie` | 12 hoofdstukken, reeks van begin tot eind, twee video's, cijfers, klantcitaat |
| `/werk/terras-geulle` | Inleiding, stappen, cijfers, foto's |
| `/journaal` | 24 stukken: nieuwste voorop, dan per thema |
| `/journaal/[slug]` | Het stuk zelf, met bronnen en verwante stukken |
| `/nick` | Het hele verhaal en de zes stappen |
| `/kennismaken` | Stelt een bericht samen en opent WhatsApp of mail. Er gaat niets naar een server |
| `/privacy`, `/voorwaarden`, `/herroeping` | Juridische teksten |

De extra's per vak:
- **Borderpakketten**: 8 pakketten en 2 bodempakketten.
- **Materialen**: 5 groepen.
- **Vijveronderhoud**: 4 diensten met vaste prijzen.
- **Werkwijze**: in 6 stappen.

**Bronnen.** Teksten en foto's komen uit de bestaande site. Ze zijn omgezet naar een eigen inhoudsmodel in `src/inhoud/`.

**Privacyverklaring.** Die is aangepast aan deze site: geen formulier, geen statistieken en geen cookies. **Nick: controleer die tekst voor de lancering**, net als de prijzen.

## Techniek
- Next.js 16, React 19, TypeScript, eigen CSS per pagina (geen standaard Tailwind-look).
- Lettertypes: Syne 700 (koppen), Montserrat (tekst), Geist Mono (annotaties).
- Beweging alleen met `prefers-reduced-motion: no-preference`: de strook schuift binnen en secties verschijnen via scroll-driven animaties.
- Toegankelijk: één h1, overslaan-link, focusring, raakvlakken van 48 px, alt-teksten die beschrijven wat er echt te zien is.
- `robots: noindex` tot de lancering.

## Controle
`npx tsc --noEmit` · `npx eslint src tests` · `npx next build` · `npx playwright test`. De tests dekken:
- alle pagina's (crawl): status 200, één h1, geen overloop op 320 en 1440 px;
- het dagdeel op vaste tijden;
- het menu op de telefoon;
- de berichtenbouwer;
- de vakkenindex;
- de poort.
