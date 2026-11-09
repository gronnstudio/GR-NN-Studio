import { SITE } from "@/lib/site"
import type { LegalDocument } from "./types"

// De privacyverklaring van DEZE site (nov 2026). Hij beschrijft wat de
// software doet, dus hij verandert mee met de software: geen formulier dat
// opslaat, geen cookies, geen analytics, letters zelf gehost via next/font.
// Komt er iets bij (een formulier met opslag, analytics, een nieuwsbrief),
// dan hoort hier een alinea bij, in dezelfde commit.

export const PRIVACY: LegalDocument = {
  id: "privacy",
  slug: "privacy",
  title: "Privacyverklaring",
  kind: "privacy",
  audience: "iedereen",
  updated: "2026-11-09",
  status: "concept",
  intro: `${SITE.naam} (${SITE.eigenaar}, ${SITE.adres.straat}, ${SITE.adres.postcode} ${SITE.adres.plaats}, KVK ${SITE.kvk}) is verantwoordelijk voor de persoonsgegevens die via deze website en via contact met mij binnenkomen. Hieronder staat wat ik verwerk, waarom, en wat jouw rechten zijn.`,
  sections: [
    {
      heading: "Wat deze website zelf bewaart",
      body: [
        "Niets. Het formulier op Kennismaken zet je bericht alleen klaar in WhatsApp of in je eigen mailprogramma; pas als jij daar op verzenden drukt, komt het bij mij binnen. De website slaat de ingevulde velden nergens op.",
        "Deze website plaatst geen cookies en gebruikt geen analyse- of advertentiediensten. De lettertypen staan op dezelfde server als de site, zodat je browser daarvoor geen andere partij benadert.",
      ],
    },
    {
      heading: "Hosting",
      body: [
        "De website draait bij Vercel Inc. Bij elk bezoek verwerkt de server technische gegevens, zoals je IP-adres, het tijdstip en de opgevraagde pagina, om de site te kunnen tonen en te beveiligen. Ik gebruik die logs niet voor andere doelen. Vercel kan gegevens verwerken buiten de Europese Economische Ruimte; daarvoor gelden de standaardcontractbepalingen van de Europese Commissie.",
      ],
    },
    {
      heading: "Als je contact opneemt",
      body: [
        "Stuur je een bericht via WhatsApp of mail, dan verwerk ik je naam, je telefoonnummer of e-mailadres, de inhoud van je bericht en eventuele foto’s. Ik gebruik die om je vraag te beantwoorden, een bezoek te plannen en een offerte te maken. De grondslag is het nemen van stappen op jouw verzoek vóór een overeenkomst (art. 6 lid 1 sub b AVG).",
        "WhatsApp (Meta) en mijn e-mailprovider verwerken die berichten als dienstverlener. Voor WhatsApp gelden ook de voorwaarden en het privacybeleid van WhatsApp zelf, waar jij mee instemde toen je de app ging gebruiken.",
        "Leidt je vraag niet tot een opdracht, dan verwijder ik je gegevens uiterlijk een jaar na ons laatste contact. Wordt het wel een opdracht, dan bewaar ik wat nodig is voor de administratie zeven jaar, omdat de fiscale bewaarplicht dat voorschrijft.",
      ],
    },
    {
      heading: "Foto’s van projecten",
      body: [
        "Foto’s van een tuin of vijver plaats ik alleen met toestemming van de eigenaar, zonder adres en zonder herkenbare personen tenzij die daar zelf mee instemmen. Kinderen komen nooit in beeld. Je kunt die toestemming altijd intrekken; dan haal ik de foto’s weg.",
      ],
    },
    {
      heading: "Je rechten",
      body: [
        `Je mag je gegevens inzien, laten verbeteren of laten verwijderen, en je kunt bezwaar maken tegen het gebruik ervan of vragen om overdracht. Stuur daarvoor een mail naar ${SITE.email}; ik reageer binnen een maand.`,
        "Ben je het niet eens met hoe ik met je gegevens omga, dan kun je een klacht indienen bij de Autoriteit Persoonsgegevens (autoriteitpersoonsgegevens.nl).",
      ],
    },
    {
      heading: "Wijzigingen",
      body: [
        "Verandert er iets aan wat deze website of ik met gegevens doe, dan pas ik deze verklaring aan. Bovenaan staat de datum van de laatste versie.",
      ],
    },
  ],
  open: [],
}
