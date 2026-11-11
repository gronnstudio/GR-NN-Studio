import type { Metadata } from "next"
import { PaginaKop } from "@/components/poort"
import { VAKKEN } from "@/inhoud/vakken"
import { SITE } from "@/lib/site"
import { Gesprek } from "./gesprek"

export const metadata: Metadata = {
  title: "Kennismaken",
  description: "Vertel waar je aan denkt. Nick komt kijken; het eerste gesprek is gratis. Via WhatsApp, mail of telefoon.",
}

export default function Kennismaken() {
  return (
    <div className="pg toon-ochtend">
      <PaginaKop waar="Kennismaken · gratis gesprek" titel="Vertel waar je aan denkt." intro="Ik kom kijken, luister en zeg eerlijk wat ik zou doen. Het eerste gesprek kost niets. Stel hieronder je bericht samen; het gaat pas weg als jij op versturen drukt." />
      <div className="pg-sectie pg-kennis">
        <Gesprek vakken={VAKKEN.map((v) => ({ slug: v.slug, naam: v.naam }))} whatsapp={SITE.whatsapp} email={SITE.email} />
        <aside className="pg-kennis-direct" aria-label="Liever direct">
          <p className="dag-mono dag-zacht">Liever direct?</p>
          <ul>
            <li><a href={SITE.whatsapp}>WhatsApp</a></li>
            <li><a href={SITE.telefoonHref}>{SITE.telefoon}</a></li>
            <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
          </ul>
          <p className="dag-mono dag-zacht">Studio</p>
          <p>{SITE.adres.straat}<br />{SITE.adres.postcode} {SITE.adres.plaats}</p>
          <p className="dag-mono dag-zacht">Werkgebied</p>
          <p>{SITE.werkgebied}</p>
          <p className="dag-mono dag-zacht">Antwoord</p>
          <p>Ik reageer meestal binnen twee werkdagen.</p>
        </aside>
      </div>
    </div>
  )
}
