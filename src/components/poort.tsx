import Link from "next/link"
import { SITE, whatsappMet } from "@/lib/site"

// De poort: waar elke pagina eindigt. Een gesprek bij de tuin is gratis.

export function Poort({ zin = "Vertel waar je aan denkt. Ik kom kijken.", bericht = "Hoi Nick, ik wil graag een gratis kennismakingsgesprek over mijn tuin." }: { zin?: string; bericht?: string }) {
  return (
    <section id="poort" className="dag-poort" aria-labelledby="h-poort">
      <p className="dag-mono dag-zacht">Bij de poort · gratis gesprek</p>
      <h2 id="h-poort" className="dag-poort-kop">{zin}</h2>
      <div className="dag-knoppen">
        <a href={whatsappMet(bericht)} className="dag-knop">Plan een gratis gesprek</a>
        <Link href="/kennismaken" className="dag-knop dag-knop-lijn">Vertel eerst wat er speelt</Link>
        <a href={SITE.telefoonHref} className="dag-knop dag-knop-lijn">{SITE.telefoon}</a>
      </div>
      <p className="dag-mono dag-zacht">Ik reageer meestal binnen twee werkdagen · {SITE.werkgebied}</p>
    </section>
  )
}

/** De kop van een pagina: tijd als schaduw, waar je bent, de titel en een inleiding. */
export function PaginaKop({ tijd, waar, titel, intro, children }: { tijd?: string; waar: React.ReactNode; titel: string; intro?: string; children?: React.ReactNode }) {
  return (
    <header className="pg-kop">
      {tijd && <p className="dag-tijd" aria-hidden="true">{tijd}</p>}
      <p className="dag-mono dag-zacht">{waar}</p>
      <h1 className="pg-h1">{titel}</h1>
      {intro && <p className="pg-intro">{intro}</p>}
      {children}
    </header>
  )
}
