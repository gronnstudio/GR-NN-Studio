"use client"

import { useEffect, useRef, useState } from "react"

// Het menu van voorstel C, als staalkaart: de delen van de pagina met een
// kleurstaal ervoor. Escape sluit; focus blijft binnen en gaat terug.

const DELEN = [
  { href: "#stalen", naam: "Stalen", kleur: "#8a8478" },
  { href: "#vakken", naam: "Vakken", kleur: "#c9bfad" },
  { href: "#bestek", naam: "Bestek", kleur: "#5f6b55" },
  { href: "#maker", naam: "Maker", kleur: "#a5937a" },
  { href: "#start", naam: "Start een project", kleur: "#ff5b04" },
]

export function Staalkaart() {
  const [open, setOpen] = useState(false)
  const knop = useRef<HTMLButtonElement>(null)
  const blad = useRef<HTMLDivElement>(null)

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
      <button ref={knop} type="button" className="mt-knop mt-knop-lijn-licht" aria-expanded={open} aria-controls="mt-staalkaart" onClick={() => setOpen(true)}>
        Menu
      </button>
      <div id="mt-staalkaart" ref={blad} className={`mt-blad${open ? " mt-blad-open" : ""}`} role="dialog" aria-modal="true" aria-label="Menu" hidden={!open}>
        <div className="mt-blad-kop">
          <span className="mt-mono">Staalkaart</span>
          <button type="button" className="mt-knop mt-knop-lijn" onClick={() => setOpen(false)}>Sluiten</button>
        </div>
        <ol className="mt-blad-lijst">
          {DELEN.map((d) => (
            <li key={d.href}>
              <a href={d.href} onClick={() => setOpen(false)}>
                <span className="mt-blad-staal" style={{ background: d.kleur }} aria-hidden="true" />
                <span>{d.naam}</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </>
  )
}
