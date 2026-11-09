# GRØNN Studio — website

De publieke website van GRØNN Studio (Nick Peters, Stein): vijvers en natuurlijke tuinen. Van nul opgebouwd in november 2026 volgens de *GRØNN Studio Website Master Brief*.

## Wat er staat

| Pad | Pagina |
| --- | --- |
| `/` | Voorpagina: opening, wat ik doe, wat ik zie (observatie), uitgevoerd werk, hoe het gaat, wie ik ben |
| `/vijvers`, `/tuinen` | De twee diensten, met prijzen en een voorbeeldproject |
| `/werk`, `/werk/[slug]` | Dossiers van echt werk (GR / 001, GR / 002) |
| `/studio` | Nick en zijn verhaal |
| `/kennismaken` | Formulier dat je bericht klaarzet in WhatsApp of mail |
| `/privacy`, `/voorwaarden` | Juridisch |

Oude adressen (`/over`, `/contact`, `/projects/…`) sturen door; zie `next.config.ts`.

## Hoe het werkt

- Next.js 16 (App Router), React 19, TypeScript, Tailwind 4. Geen database, geen CMS, geen andere afhankelijkheden.
- Alle inhoud is getypte data in `src/lib/`: `site.ts` (bedrijfsgegevens), `diensten.ts` (diensten en prijzen), `projecten.ts` (dossiers), `beelden.ts` (foto's met alt-tekst), `juridisch/`.
- Het designsysteem staat in `src/app/globals.css` en is uitgelegd in [docs/ART-DIRECTION.md](docs/ART-DIRECTION.md). De opbouw en open besluiten: [docs/BLUEPRINT.md](docs/BLUEPRINT.md).
- Kennismaken heeft geen server: het formulier opent WhatsApp of het mailprogramma met het bericht erin. De site bewaart niets, plaatst geen cookies en heeft geen analytics.

## Werken aan de site

```bash
npm ci
npm run dev        # http://localhost:3000
npm run check      # tsc + eslint + build + Playwright, zoals CI
```

Een prijs, project of tekst aanpassen: alleen in `src/lib/`. Een nieuw project: een item in `PROJECTEN` met foto's in `public/beeld/`; de pagina, het overzicht, de sitemap en "volgend dossier" volgen vanzelf.

## Regels

- Alleen echt werk en echte cijfers; geen verzonnen reviews, logo's of resultaten. Geen kinderen in beeld.
- Geen nieuwe npm-pakketten zonder dat Nick het goedkeurt.
- Werk op een eigen branch, nooit direct op `main`; Nick beslist over mergen en live zetten.
