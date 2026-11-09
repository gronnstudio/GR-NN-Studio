"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BESTEMMINGEN } from "@/lib/navigatie"
import { SITE } from "@/lib/site"

// Navigatie (nov 2026). Desktop: één rustige balk bovenaan met het woordmerk,
// vier bestemmingen en Kennismaken. Telefoon: bovenaan alleen het woordmerk,
// onderaan binnen duimbereik twee acties: Menu en Kennismaken. Menu opent een
// donker blad met de bestemmingen groot en genummerd, plus contact.


const actief = (pad: string, href: string) => pad === href || pad.startsWith(`${href}/`)

function Woordmerk({ licht = false }: { licht?: boolean }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- svg-woordmerk, geen optimalisatie nodig
    <img src={licht ? "/merk/woordmerk-primair.svg" : "/merk/woordmerk-antraciet.svg"} alt="GRØNN Studio" width={112} height={24} className="kop-merk" />
  )
}

export function Kop() {
  const pad = usePathname()
  const [open, setOpen] = useState(false)
  const [gescrold, setGescrold] = useState(false)
  const menuKnop = useRef<HTMLButtonElement>(null)
  const blad = useRef<HTMLDivElement>(null)

  // Een haarlijn onder de balk zodra er onder doorgescrold wordt.
  useEffect(() => {
    const kijk = () => setGescrold(window.scrollY > 8)
    kijk()
    window.addEventListener("scroll", kijk, { passive: true })
    return () => window.removeEventListener("scroll", kijk)
  }, [])

  // Menu: scrollen eronder uit, Escape sluit, focus in het blad en terug.
  useEffect(() => {
    if (!open) return
    const knop = menuKnop.current
    document.documentElement.style.overflow = "hidden"
    blad.current?.querySelector<HTMLElement>("a, button")?.focus()
    const toets = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
      if (e.key === "Tab" && blad.current) {
        const el = [...blad.current.querySelectorAll<HTMLElement>("a, button")]
        const eerste = el[0], laatste = el[el.length - 1]
        if (e.shiftKey && document.activeElement === eerste) { e.preventDefault(); laatste.focus() }
        else if (!e.shiftKey && document.activeElement === laatste) { e.preventDefault(); eerste.focus() }
      }
    }
    document.addEventListener("keydown", toets)
    return () => {
      document.documentElement.style.overflow = ""
      document.removeEventListener("keydown", toets)
      knop?.focus()
    }
  }, [open])

  // Na een klik naar een andere pagina gaat het menu dicht.
  const [vorigPad, setVorigPad] = useState(pad)
  if (pad !== vorigPad) {
    setVorigPad(pad)
    setOpen(false)
  }

  return (
    <>
      <header className={`kop${gescrold ? " kop-lijn" : ""}`}>
        <div className="kop-binnen rand">
          <Link href="/" className="kop-thuis" aria-label="GRØNN Studio, naar de voorpagina">
            <Woordmerk />
          </Link>
          <nav aria-label="Hoofdmenu" className="kop-nav">
            <ul>
              {BESTEMMINGEN.map((b) => (
                <li key={b.href}>
                  <Link href={b.href} className="kop-link" aria-current={actief(pad, b.href) ? "page" : undefined}>
                    {b.naam}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link href="/kennismaken" className="knop knop-vol kop-actie" aria-current={pad === "/kennismaken" ? "page" : undefined}>
            Kennismaken
          </Link>
        </div>
      </header>

      {/* Telefoon: twee acties binnen duimbereik */}
      <div className="duim" aria-hidden={open}>
        <button ref={menuKnop} type="button" className="knop duim-menu" aria-expanded={open} aria-controls="menublad" onClick={() => setOpen(true)}>
          <span className="duim-streep" aria-hidden="true" />
          Menu
        </button>
        <Link href="/kennismaken" className="knop knop-vol duim-actie">Kennismaken</Link>
      </div>

      <div id="menublad" ref={blad} className={`blad plaat${open ? " blad-open" : ""}`} role="dialog" aria-modal="true" aria-label="Menu" hidden={!open}>
        <div className="blad-kop rand">
          <Woordmerk licht />
          <button type="button" className="knop knop-lijn" onClick={() => setOpen(false)}>Sluiten</button>
        </div>
        <nav aria-label="Menu" className="blad-nav rand">
          <ol>
            {[{ href: "/", naam: "Home" }, ...BESTEMMINGEN, { href: "/kennismaken", naam: "Kennismaken" }].map((b, i) => (
              <li key={b.href}>
                <Link href={b.href} className="blad-link" aria-current={pad === b.href || (b.href !== "/" && actief(pad, b.href)) ? "page" : undefined}>
                  <span className="t-mono">{String(i).padStart(2, "0")}</span>
                  <span>{b.naam}</span>
                </Link>
              </li>
            ))}
          </ol>
        </nav>
        <div className="blad-voet rand">
          <a href={SITE.whatsapp} className="link">WhatsApp <span className="pijl" aria-hidden="true">→</span></a>
          <a href={`mailto:${SITE.email}`} className="link">{SITE.email}</a>
        </div>
      </div>
    </>
  )
}
