# Blueprint

Stand 9 nov 2026 · Checkpoint 1 · nog niet gebouwd. Fase 1 van de Website Master Brief. Hoort bij [ART-DIRECTION.md](ART-DIRECTION.md).

## 1. Audit (wat er is)

- **gronn.studio** draait op GRONN26: foto-opening met tekst over het beeld ("Een vijver en tuin die gezond blijven."), glazen navigatiepil, dienstkaarten, uitgelicht project, voet. Plus shop (borderpakketten, cadeaubon, Mollie), journaal, FAQ, techniek, en het CRM achter `/dashboard`.
- **Deze repo** (`GR-NN-Studio`) is leeg op `main`. De publieke site wordt hier opnieuw opgezet; het CRM en de shop blijven voorlopig op GRONN26.
- **Afwijking van de brief:** de brief gaat uit van Supabase en het bestaande dashboard in dezelfde codebase. In deze nieuwe repo zit geen van beide; er wordt dus niets aan gebroken, en een koppeling (aanvragen naar het CRM) is een aparte stap.
- **Beschikbaar materiaal:** twee echte projecten (vijverrenovatie GR 001, terras Geulle GR 002) met ± 20 foto's, Nicks eigen verhaal, prijzen, positionering, merkletters en logo.

## 2. Positionering

> Ik maak en onderhoud vijvers en natuurlijke tuinen voor huiseigenaren in Stein en omgeving, met een vaste prijs vooraf.

Wat de site laat zien: **het werk onder de waterlijn**. Iedereen kan een mooie foto van een vijver laten zien; GRØNN laat ook zien waarom hij werkt.

## 3. Doelgroepen en doelen

| Wie | Komt voor | Moet binnen 10 s zien | Conversie |
| --- | --- | --- | --- |
| Huiseigenaar met een vijver die troebel, lek of verwaarloosd is | hulp en vakkennis | dat Nick vijvers snapt, en dat er een vaste prijs is | WhatsApp met foto's, of het formulier |
| Huiseigenaar die een natuurlijke tuin of border wil | ontwerp + aanleg | echt werk en een aanpak | formulier |
| Iemand die snel iets wil (najaarsbeurt, bladnet) | een prijs | de prijs, direct | WhatsApp |

**Primair doel:** een gekwalificeerde aanvraag (wat, waar, foto's). **Secundair:** WhatsApp-gesprek.

## 4. Informatiearchitectuur en sitemap

```
/                         Voorpagina (doorsnede)
/vijvers                  Vijvers: diagnose, renovatie, aanleg, onderhoud + prijzen
/tuinen                   Tuinen: advies, ontwerp, beplanting, aanleg + prijzen
/werk                     Projecten, op plek en jaar
/werk/[plek]              Projectdossier (sjabloon, zie §7)
/studio                   Nick, de werkwijze, de eigen tuin
/start                    Start een project (formulier, WhatsApp, mail)
/privacy · /voorwaarden
```

Vijf bestemmingen in de navigatie: **Vijvers, Tuinen, Werk, Studio, Start een project**. Oude adressen (`/over`, `/kennismaken`, `/contact`, `/projects/…`) sturen door.

**Wat generieke hoveniersites missen en GRØNN wel heeft** (brief, fase 1):
1. **"Onder de waterlijn"**: per project een doorsnede-strook met de techniek (leidingen, filter, peil) naast de foto's erboven.
2. **De prijs vóór het gesprek**: vanaf-prijzen op de dienstpagina's, niet weggestopt.
3. **Seizoensregel**: één regel in de kop van de voorpagina die zegt wat er nú in de tuin gebeurt (november: blad, najaarsbeurt) en naar die dienst linkt. Statisch per maand, geen teller.

## 5. Voorpagina

### Boven de vouw (desktop 1440 × 900, mobiel 390 × 844)

- Bovenaan: woordmerk links, navigatie rechts, dun.
- **De waterlijn** loopt op ± 62 % van de schermhoogte over de volle breedte.
- Daarop staat één woord in de doorsnede-maat: **GRØNN**. De bovenste helft in inkt op crème, de onderste helft (onder de lijn) in crème op antraciet, met daaronder een foto van water die door de letters heen zichtbaar is.
- Boven de lijn, links: één zin: *Vijvers en natuurlijke tuinen in Stein en omgeving. Met een vaste prijs vooraf.* Rechts: de seizoensregel.
- Onder de lijn: peilmaat `±0,00` en de actie **Start een project**.
- Mobiel: dezelfde lijn op 58 %; het woord vult de breedte; zin en actie onder de lijn.

### Secties, van boven naar onder (dieper)

| Peil | Sectie | Ondergrond | Compositie |
| --- | --- | --- | --- |
| `+0,40 m` | **Opening** | crème/antraciet | zie hierboven |
| `±0,00` | **Twee kanten** | crème | Vijvers en Tuinen als twee helften van één doorsnede: links water, rechts plant. Elk: naam, één zin, vanaf-prijs, link. Geen kaarten. |
| `−0,30 m` | **Project in doorsnede** | antraciet | GR 001: grote foto boven de lijn (resultaat), daaronder de techniek-strook in mono (5.000 l, 50 mm, 3 kamers, 11 manden) met de werkfoto's. |
| `−0,60 m` | **Ander werk** | crème | GR 002 en een plek voor volgende projecten; plek als kop (Geulle), beeld uitgesneden op de lijn. |
| `−0,90 m` | **Werkwijze** | crème | Vier stappen langs één verticale lijn (de peilschaal), van kijken tot onderhoud. |
| `−1,20 m` | **Nick** | antraciet | Portret, twee zinnen, link naar Studio. |
| `−1,50 m` | **Start** | antraciet | Grote kop, formulier-ingang, WhatsApp. Loopt over in de voet. |

## 6. Andere pagina's

- **Vijvers / Tuinen:** kop op de waterlijn ("Vijvers" boven, de onderdelen eronder) → wat ik doe (vier onderdelen) → prijzen (tabel) → bijbehorend project → start.
- **Werk:** projecten op plek en jaar, groot beeld per project, geen raster van kleine tegels.
- **Studio:** Nicks eigen tekst, de foto's, en zijn eigen tuin als hoofdstuk (als er foto's zijn).
- **Start een project:** keuze vijver/tuin/anders → plaats → wat je ziet → foto's via WhatsApp of mail. Zonder server, tenzij de koppeling met het CRM gewenst is.

## 7. Projectdossier (herbruikbaar sjabloon)

Titel (plek) → type, jaar, status → beschrijving → **boven de lijn**: uitgangssituatie, ontwerp, resultaat (beeld) → **onder de lijn**: techniek, materialen, beplanting (mono, maten) → realisatie (beeldreeks, wisselende verhoudingen) → volgende project. Elk project kiest welke hoofdstukken het heeft; ontbrekende inhoud wordt een zichtbare contentbehoefte in de data, nooit verzonnen.

## 8. Navigatie

**Desktop:** één dunne balk: woordmerk · Vijvers · Tuinen · Werk · Studio · **Start een project**. De actieve pagina krijgt de waterlijn eronder.

**Mobiel**: de ideeën uit de brief afgewogen:

| Idee | Vindbaar | Toegankelijk | Eén hand | Oordeel |
| --- | --- | --- | --- | --- |
| Pil onderaan (huidige site) | goed | goed | goed | werkt, maar glas en iconen zijn generiek |
| Wiel / radiaal menu | slecht (verborgen gebaar) | moeilijk (schermlezer, toetsenbord) | redelijk | **afgewezen** |
| Vijf vaste bestemmingen onderaan | goed | goed | goed, maar krap op 320 px | te vol met tekst |
| Twee acties na scrollen | goed | goed | goed | **gekozen, in combinatie** |

**Voorstel:** onderaan een smalle balk op de waterlijn met **Menu** en **Start een project**. Menu opent een doorsnede-blad: de vijf bestemmingen groot, elk met zijn peil. Bovenaan alleen het woordmerk. Geen glas, geen iconen.

## 9. Voet

Antraciet, onder de laatste waterlijn: contact (WhatsApp, mail, telefoon), pagina's, adres, KVK, btw, privacy, voorwaarden, Instagram. Geen tweede grote uitnodiging als de pagina er al één heeft.

## 10. Conversiepunten

Navigatie (Start een project), opening (onder de lijn), elke dienstpagina (prijs → start), elk dossier (vergelijkbaar project? → start, met het projecttype al ingevuld), voet. WhatsApp-berichten worden voorbereid met de context van de pagina.

## 11. Vragen voor Nick (max. 5)

1. **Shop:** borderpakketten en cadeaubon (Mollie) in deze nieuwe site, of blijven die voorlopig op de huidige site?
2. **Prijzen:** de live site en `besluiten.md` noemen andere vanaf-bedragen (bv. tuinontwerp € 450 tegenover € 795, aanleg € 3.000 tegenover € 2.500). Welke gelden?
3. **Aanvragen:** mogen ze in het CRM van GRONN26 binnenkomen (koppeling), of is WhatsApp/mail genoeg?
4. **Eigen tuin:** zijn er foto's van je eigen tuin of moestuin die als hoofdstuk op Studio mogen?
5. **Woord in de opening:** "GRØNN" op de waterlijn, of liever een werkwoord ("Graven", "Kijken")?
