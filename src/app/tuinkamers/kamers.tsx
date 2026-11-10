"use client"

import { useEffect, useRef, useState } from "react"
import { KAMERS } from "./kamers-lijst"

// Het menu van voorstel B: alle kamers onder elkaar, elk met de vorm van
// zijn opening. Escape sluit; focus blijft binnen en gaat daarna terug.

export function Kamers() {
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
      <button ref={knop} type="button" className="tk-knop tk-knop-lijn" aria-expanded={open} aria-controls="tk-kamers" onClick={() => setOpen(true)}>
        Kamers
      </button>
      <div id="tk-kamers" ref={blad} className={`tk-blad${open ? " tk-blad-open" : ""}`} role="dialog" aria-modal="true" aria-label="Kamers" hidden={!open}>
        <div className="tk-blad-kop">
          <span className="tk-mono tk-zacht">Kamers</span>
          <button type="button" className="tk-knop tk-knop-lijn" onClick={() => setOpen(false)}>Sluiten</button>
        </div>
        <ol className="tk-blad-lijst">
          {KAMERS.map((k) => (
            <li key={k.id}>
              <a href={`#${k.id}`} onClick={() => setOpen(false)}>
                <span className="tk-blad-vorm" aria-hidden="true"><span style={{ aspectRatio: k.vorm, width: `min(48px, ${Math.round(40 * k.vorm)}px)` }} /></span>
                <span className="tk-mono tk-zacht">{k.nr}</span>
                <span className="tk-blad-naam">{k.naam}</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </>
  )
}
