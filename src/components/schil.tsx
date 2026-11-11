import Link from "next/link"
import { SITE, whatsappMet } from "@/lib/site"
import { Klok, NaarNu } from "@/app/nu"
import { Menu } from "./menu"
import { PAGINAS } from "./schil-lijst"

// De schil van elke pagina: kop, voet en de duimbalk op de telefoon.


export function Kop() {
  return (
    <header className="dag-kop">
      <Link href="/" className="dag-merk" aria-label="GRØNN Studio, naar de voorpagina">
        {/* eslint-disable-next-line @next/next/no-img-element -- svg-woordmerk */}
        <img src="/merk/woordmerk-antraciet.svg" alt="" width={112} height={24} />
      </Link>
      <Klok className="dag-mono dag-zacht dag-klok" />
      <nav aria-label="Hoofdmenu" className="dag-nav">
        <ul>
          <li><NaarNu>De dag</NaarNu></li>
          {PAGINAS.map((p) => <li key={p.href}><Link href={p.href}>{p.naam}</Link></li>)}
        </ul>
      </nav>
      <Link href="/kennismaken" className="dag-knop dag-kop-knop">Kennismaken</Link>
    </header>
  )
}

export function Voet() {
  return (
    <footer className="dag-voet">
      <div className="dag-voet-rij">
        <p className="dag-voet-zin">Tuinontwerp, beplanting, aanleg en water in Stein en omgeving. Eén persoon, van het eerste gesprek tot de laatste plant.</p>
        <ul className="dag-voet-links">
          {PAGINAS.map((p) => <li key={p.href}><Link href={p.href}>{p.naam}</Link></li>)}
          <li><Link href="/kennismaken">Kennismaken</Link></li>
        </ul>
        <ul className="dag-voet-links">
          <li><a href={whatsappMet("Hoi Nick, ")}>WhatsApp</a></li>
          <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
          <li><a href={SITE.telefoonHref}>{SITE.telefoon}</a></li>
          <li><a href={SITE.instagram}>Instagram</a></li>
        </ul>
      </div>
      <p className="dag-mono dag-zacht dag-voet-onder">
        <span>{SITE.naam} · {SITE.adres.straat} · {SITE.adres.postcode} {SITE.adres.plaats}</span>
        <span>KVK {SITE.kvk} · Btw {SITE.btw}</span>
        <span><Link href="/privacy">Privacy</Link> · <Link href="/voorwaarden">Voorwaarden</Link> · <Link href="/herroeping">Herroeping</Link></span>
      </p>
    </footer>
  )
}

export function Duim() {
  return (
    <div className="dag-duim">
      <Menu />
      <Link href="/kennismaken" className="dag-knop">Kennismaken</Link>
    </div>
  )
}
