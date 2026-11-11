"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { DAGDELEN } from "@/lib/dag"
import { Klok } from "@/app/nu"
import { PAGINAS } from "./schil-lijst"

// Het menu op de telefoon: de pagina's en de vier dagdelen. Escape sluit,
// de focus blijft binnen het blad en gaat daarna terug naar de knop.

export function Menu() {
  const [open, setOpen] = useState(false)
  const knop = useRef<HTMLButtonElement>(null)
  const blad = useRef<HTMLDivElement>(null)
  const pad = usePathname()
  const [vorig, setVorig] = useState(pad)
  if (pad !== vorig) { setVorig(pad); setOpen(false) }

  useEffect(() => {
    if (!open) return
    const terug = knop.current
    document.documentElement.style.overflow = "hidden"
    blad.current?.querySelector<HTMLElement>("a, button")?.focus()
    const toets = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
      if (e.key === "Tab" && blad.current) {
        const el = [...blad.current.querySelectorAll<HTMLElement>("a, button")]
        if (e.shiftKey && document.activeElement === el[0]) { e.preventDefault(); el[el.length - 1].focus() }
        else if (!e.shiftKey && document.activeElement === el[el.length - 1]) { e.preventDefault(); el[0].focus() }
      }
    }
    document.addEventListener("keydown", toets)
    return () => { document.documentElement.style.overflow = ""; document.removeEventListener("keydown", toets); terug?.focus() }
  }, [open])

  const sluit = () => setOpen(false)
  return (
    <>
      <button ref={knop} type="button" className="dag-knop dag-knop-lijn" aria-expanded={open} aria-controls="dag-menu" onClick={() => setOpen(true)}>Menu</button>
      <div id="dag-menu" ref={blad} className="dag-blad" role="dialog" aria-modal="true" aria-label="Menu" hidden={!open}>
        <div className="dag-blad-kop">
          <Klok className="dag-mono dag-zacht" />
          <button type="button" className="dag-knop dag-knop-lijn" onClick={sluit}>Sluiten</button>
        </div>
        <ul className="dag-blad-paginas">
          <li><Link href="/" onClick={sluit}>De dag</Link></li>
          {PAGINAS.map((p) => <li key={p.href}><Link href={p.href} onClick={sluit}>{p.naam}</Link></li>)}
          <li><Link href="/kennismaken" onClick={sluit}>Kennismaken</Link></li>
        </ul>
        <ol className="dag-blad-dag" aria-label="De dag">
          {DAGDELEN.map((d) => (
            <li key={d.id} className={`dag-blad-${d.id}`}>
              <Link href={`/#${d.id}`} onClick={sluit}>
                <span className="dag-mono dag-zacht">{String(d.van).padStart(2, "0")}:00</span>
                <span>{d.strook}</span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </>
  )
}
