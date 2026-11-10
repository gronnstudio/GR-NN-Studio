"use client"

import { useEffect, useId, useRef, useState } from "react"

// De inhoudsopgave als menu: een blad dat over de pagina schuift, zoals je
// een tijdschrift openslaat op de inhoud. Escape sluit; focus blijft binnen
// en gaat daarna terug naar de knop.

type Rubriek = { id: string; titel: string; blz: string }

export function Inhoud({ rubrieken, maand, nr, jaar, start, duim = false }: {
  rubrieken: Rubriek[]
  maand: string
  nr: string
  jaar: number
  start: string
  duim?: boolean
}) {
  const [open, setOpen] = useState(false)
  const knop = useRef<HTMLButtonElement>(null)
  const blad = useRef<HTMLDivElement>(null)
  const id = useId()

  useEffect(() => {
    if (!open) return
    const terug = knop.current
    document.documentElement.style.overflow = "hidden"
    blad.current?.querySelector<HTMLElement>("button, a")?.focus()
    const toets = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
      if (e.key === "Tab" && blad.current) {
        const el = [...blad.current.querySelectorAll<HTMLElement>("button, a")]
        if (e.shiftKey && document.activeElement === el[0]) { e.preventDefault(); el[el.length - 1].focus() }
        else if (!e.shiftKey && document.activeElement === el[el.length - 1]) { e.preventDefault(); el[0].focus() }
      }
    }
    document.addEventListener("keydown", toets)
    return () => {
      document.documentElement.style.overflow = ""
      document.removeEventListener("keydown", toets)
      terug?.focus()
    }
  }, [open])

  return (
    <>
      <button ref={knop} type="button" className={`alm-knop ${duim ? "alm-knop-lijn-licht" : "alm-knop-lijn"}`} aria-expanded={open} aria-controls={id} onClick={() => setOpen(true)}>
        Inhoud
      </button>
      <div id={id} ref={blad} className={`alm-blad${open ? " alm-blad-open" : ""}`} role="dialog" aria-modal="true" aria-label="Inhoud" hidden={!open}>
        <div className="alm-blad-kop">
          <span className="alm-mono">Nr. {nr} · {maand} {jaar}</span>
          <button type="button" className="alm-knop alm-knop-lijn" onClick={() => setOpen(false)}>Sluiten</button>
        </div>
        <p className="alm-blad-titel">Inhoud</p>
        <ol className="alm-blad-lijst">
          <li><a href="#omslag" onClick={() => setOpen(false)}><span>Omslag · {maand}</span><span className="alm-mono">01</span></a></li>
          {rubrieken.map((r) => (
            <li key={r.id}><a href={`#${r.id}`} onClick={() => setOpen(false)}><span>{r.titel}</span><span className="alm-mono">{r.blz}</span></a></li>
          ))}
        </ol>
        <a href={start} className="alm-knop alm-knop-vol alm-blad-start">Start een project</a>
      </div>
    </>
  )
}
