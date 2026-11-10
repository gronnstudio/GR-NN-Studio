"use client"

import { useState } from "react"
import { SITE, whatsappMet } from "@/lib/site"

// Start een project vanuit wat er nu ligt: tik aan wat je hebt, en het
// WhatsApp-bericht staat klaar. De site bewaart niets.

const NU = ["Gras", "Tegels of klinkers", "Grind", "Een vijver", "Borders", "Kale grond", "Een terras", "Weet ik niet"]

export function Wat() {
  const [gekozen, setGekozen] = useState<string[]>([])
  const wissel = (w: string) => setGekozen((g) => (g.includes(w) ? g.filter((x) => x !== w) : [...g, w]))
  const bericht = gekozen.length
    ? `Hoi Nick, in mijn tuin ligt nu: ${gekozen.join(", ").toLowerCase()}. Ik wil graag een project starten.`
    : "Hoi Nick, ik wil graag een project starten in mijn tuin."

  return (
    <div className="mt-wat">
      <fieldset className="mt-wat-keuzes">
        <legend className="mt-mono mt-zacht">Tik aan wat er ligt</legend>
        {NU.map((w) => (
          <label key={w} className="mt-keuze">
            <input type="checkbox" checked={gekozen.includes(w)} onChange={() => wissel(w)} />
            <span>{w}</span>
          </label>
        ))}
      </fieldset>
      <p className="mt-wat-bericht" aria-live="polite"><span className="mt-mono mt-zacht">Je bericht</span>{bericht}</p>
      <div className="mt-knoppen">
        <a href={whatsappMet(bericht)} className="mt-knop mt-knop-vol">Verstuur via WhatsApp</a>
        <a href={`mailto:${SITE.email}?subject=${encodeURIComponent("Start een project")}&body=${encodeURIComponent(bericht)}`} className="mt-knop mt-knop-lijn">Via mail</a>
      </div>
    </div>
  )
}
