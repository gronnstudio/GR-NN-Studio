# Blueprint

Stand 9 nov 2026.

## Positionering

> Ik maak en onderhoud vijvers en natuurlijke tuinen voor huiseigenaren in Stein en omgeving, met een vaste prijs vooraf.

Wat de site laat zien in plaats van zegt: **kijken voor maken** (hoekhaken, observatie), **één persoon** (Nick, van gesprek tot laatste plant), **vaste prijs vooraf** (prijzen op de dienstpagina's) en **lokaal** (Stein + ± 30 km).

## Doelgroepen en conversie

| Wie | Zoekt | Vindt | Volgende stap |
| --- | --- | --- | --- |
| Huiseigenaar met een vijver die niet goed werkt | iemand die snapt wat er misgaat | Observatie 001, /vijvers, GR / 001 | Kennismaken of WhatsApp |
| Huiseigenaar die een natuurlijke tuin of terras wil | een aanpak en een prijs | /tuinen, GR / 002 | Kennismaken |

Eén volgende stap per pagina: de voorpagina, /werk en de juridische pagina's eindigen met de uitnodiging in de voet; diensten, dossiers en Studio hebben een eigen uitnodiging met een voorbereid WhatsApp-bericht.

## Sitemap

```
/                       Voorpagina
/vijvers                Dienst 01
/tuinen                 Dienst 02
/werk                   Dossiers
/werk/vijverrenovatie   GR / 001
/werk/terras-geulle     GR / 002
/studio                 Nick
/kennismaken            Start een project
/privacy · /voorwaarden
```

## Voorpagina

| # | Sectie | Opbouw |
| --- | --- | --- |
| 00 | Opening | Mono-regel; trapkop *Eerst water, / bodem en licht. / Dan pas de planten.*; foto van de aanplant met twee hoekhaken; één zin; Kennismaken + WhatsApp; drie feiten |
| 01 | Wat ik doe | Index: groot nummer en naam, onderdelen in mono, één zin, pijl |
| 02 | Wat ik zie (plaat) | De waterval met vijf genummerde hoekhaken, legenda ernaast |
| 03 | Uitgevoerd werk | Twee dossiers asymmetrisch, verschillende verhoudingen |
| 04 | Hoe het gaat | Vier stappen in kolommen |
| 05 | Wie | Portret + één alinea + naar Studio |

## Dossier (sjabloon)

Kop (code, type, plaats, status) → samenvatting → hoofdbeeld → feiten (vast in de kantlijn op desktop) → hoofdstukken: uitgangssituatie, aanpak, techniek, materialen en beplanting, stand van zaken/resultaat. Elk hoofdstuk kiest zijn beeldopstelling: `breed`, `paar` (verspringend) of `staand`. Een nieuw project is één item in `src/lib/projecten.ts`.

## Open besluiten voor Nick

1. **Shop, borderpakketten en cadeaubon** (Mollie) staan niet in deze site. Mee overnemen, of eerst zonder winkel live?
2. **Prijzen**: overgenomen uit de live site (`pricing.ts`). `docs/besluiten.md` in GRONN26 noemt andere vanaf-bedragen (bv. tuinontwerp € 795, aanleg € 2.500). Welke gelden?
3. **Privacyverklaring** is nieuw geschreven voor wat deze site doet (geen opslag, geen cookies). Graag nalezen.
4. **Verhaal op /studio** is je eigen tekst van de huidige site, letterlijk, inclusief de alinea over autisme. Zo houden?
5. **Kennismaken** zonder server (WhatsApp of mail). Wil je aanvragen ook in het dashboard van GRONN26, dan is een koppeling met `/api/aanvraag` de volgende stap.
6. **Livegang**: deze repo heeft nog geen Vercel-project en geen domein.

## Contentbehoeften

- Meer projecten met toestemming (de reeks draagt er nu twee).
- Eindfoto's GR / 001 na de aanplant in het voorjaar van 2027.
- Een observatie van een tuin (niet alleen een vijver).
