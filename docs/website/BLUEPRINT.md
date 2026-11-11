# Blueprint · GRØNN Studio · "Een tuin voor de hele dag"

Status: checkpoint 2. De voorpagina is gebouwd. De andere pagina's volgen.
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

Op de telefoon staat onderaan een duimbalk: **De dag** (springt naar het dagdeel van nu) en **Kennismaken**.

## Volgende pagina's (nog te bouwen)
| Pad | Inhoud |
|---|---|
| `/vakken/[slug]` | De zeven vakken, elk met dagdeel, aanpak, prijs-indicatie en foto's |
| `/werk/terras-geulle`, `/werk/vijverrenovatie` | De twee projecten als verhaal |
| `/journaal` | Nicks stukken over seizoen en ecologie |
| `/nick` | Het hele verhaal |
| `/kennismaken` | Formulier en contact |
| `/privacy`, `/voorwaarden` | Juridisch |

## Techniek
- Next.js 16, React 19, TypeScript, eigen CSS per pagina (geen standaard Tailwind-look).
- Lettertypes: Syne 700 (koppen), Montserrat (tekst), Geist Mono (annotaties).
- Beweging alleen met `prefers-reduced-motion: no-preference`: de strook schuift binnen en secties verschijnen via scroll-driven animaties.
- Toegankelijk: één h1, overslaan-link, focusring, raakvlakken van 48 px, alt-teksten die beschrijven wat er echt te zien is.
- `robots: noindex` tot de lancering.

## Controle
`npx tsc --noEmit` · `npx eslint src tests` · `npx next build` · `npx playwright test`. De tests dekken:
- opbouw en overloop op 320, 390, 820 en 1440 px;
- het dagdeel op vaste tijden (avond, en nacht na middernacht);
- de vakkenindex;
- de contactlinks.
