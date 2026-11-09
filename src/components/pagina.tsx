import type { CSSProperties, ReactNode } from "react"
import Link from "next/link"
import { SITE, whatsappMet } from "@/lib/site"

// Bouwstenen die op elke binnenpagina terugkomen: de kop van de pagina en
// de uitnodiging onderaan.

export function Paginakop({ label, regels, children, klein = false }: { label: ReactNode; regels: string[]; children?: ReactNode; klein?: boolean }) {
  return (
    <header className="paginakop rand">
      <p className="paginakop-label t-mono t-zacht vervaag">{label}</p>
      <h1 className={`${klein ? "t-h2" : "t-h1"} paginakop-titel`}>
        {regels.map((r, i) => (
          <span key={r} className="masker"><span style={{ "--i": i } as CSSProperties}>{r}</span></span>
        ))}
      </h1>
      {children ? <div className="paginakop-intro vervaag">{children}</div> : null}
    </header>
  )
}

/** Onderaan een dienst of dossier: de volgende stap, met een voorbereid WhatsApp-bericht. */
export function Uitnodiging({ zin, onderwerp, bericht }: { zin: string; onderwerp: string; bericht: string }) {
  return (
    <section className="uitnodiging rand sectie" aria-labelledby="h-uitnodiging">
      <div className="uitnodiging-binnen">
        <p className="t-mono t-accent">Volgende stap</p>
        <h2 id="h-uitnodiging" className="t-h2">{zin}</h2>
        <div className="knoppen">
          <Link href={`/kennismaken?onderwerp=${encodeURIComponent(onderwerp)}`} className="knop knop-vol">Kennismaken</Link>
          <a href={whatsappMet(bericht)} className="knop knop-lijn">WhatsApp</a>
          <a href={`mailto:${SITE.email}`} className="knop knop-lijn">Mail</a>
        </div>
      </div>
    </section>
  )
}
