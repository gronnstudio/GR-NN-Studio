"use client"

import { useId, useState } from "react"

// Stelt een bericht samen uit een paar vragen. Er gaat niets naar een
// server: de knoppen openen WhatsApp of je mailprogramma met de tekst erin.

const DAG = [
  { id: "ochtend", naam: "’s Ochtends" },
  { id: "middag", naam: "’s Middags" },
  { id: "avond", naam: "’s Avonds" },
  { id: "weekend", naam: "Vooral in het weekend" },
]
const MAAT = ["Klein, tot 50 m²", "Gemiddeld, 50 tot 150 m²", "Groot, meer dan 150 m²", "Weet ik niet"]

export function Gesprek({ vakken, whatsapp, email }: { vakken: { slug: string; naam: string }[]; whatsapp: string; email: string }) {
  const id = useId()
  const [wat, setWat] = useState<string[]>([])
  const [wanneer, setWanneer] = useState<string[]>([])
  const [maat, setMaat] = useState("")
  const [plaats, setPlaats] = useState("")
  const [naam, setNaam] = useState("")
  const [bericht, setBericht] = useState("")

  const wissel = (lijst: string[], zet: (l: string[]) => void, w: string) => zet(lijst.includes(w) ? lijst.filter((x) => x !== w) : [...lijst, w])
  const regels = [
    "Hoi Nick,",
    "",
    bericht.trim() || "Ik wil graag kennismaken over mijn tuin.",
    "",
    wat.length ? `Het gaat over: ${wat.join(", ").toLowerCase()}.` : "",
    wanneer.length ? `In de tuin ben ik: ${wanneer.join(", ").toLowerCase()}.` : "",
    maat ? `Grootte: ${maat.toLowerCase()}.` : "",
    plaats.trim() ? `De tuin ligt in ${plaats.trim()}.` : "",
    "",
    naam.trim() ? `Groet, ${naam.trim()}` : "",
  ].filter((r, i, a) => r !== "" || (a[i - 1] !== "" && i > 0))
  const tekst = regels.join("\n").trim()
  const wa = `${whatsapp}?text=${encodeURIComponent(tekst)}`
  const mail = `mailto:${email}?subject=${encodeURIComponent("Kennismaken over mijn tuin")}&body=${encodeURIComponent(tekst)}`

  return (
    <form className="pg-gesprek" onSubmit={(e) => e.preventDefault()} aria-describedby={`${id}-uitleg`}>
      <p id={`${id}-uitleg`} className="sr-only">Je bericht wordt hieronder samengesteld. Het wordt pas verstuurd als je kiest voor WhatsApp of mail.</p>
      <fieldset>
        <legend className="pg-h3">Waar gaat het over?</legend>
        <div className="pg-keuzes">
          {vakken.map((v) => (
            <label key={v.slug} className="pg-keuze"><input type="checkbox" checked={wat.includes(v.naam)} onChange={() => wissel(wat, setWat, v.naam)} /><span>{v.naam}</span></label>
          ))}
          <label className="pg-keuze"><input type="checkbox" checked={wat.includes("Weet ik nog niet")} onChange={() => wissel(wat, setWat, "Weet ik nog niet")} /><span>Weet ik nog niet</span></label>
        </div>
      </fieldset>
      <fieldset>
        <legend className="pg-h3">Wanneer ben je in je tuin?</legend>
        <div className="pg-keuzes">
          {DAG.map((d) => (
            <label key={d.id} className="pg-keuze"><input type="checkbox" checked={wanneer.includes(d.naam)} onChange={() => wissel(wanneer, setWanneer, d.naam)} /><span>{d.naam}</span></label>
          ))}
        </div>
      </fieldset>
      <fieldset>
        <legend className="pg-h3">Hoe groot is de tuin ongeveer?</legend>
        <div className="pg-keuzes">
          {MAAT.map((m) => (
            <label key={m} className="pg-keuze"><input type="radio" name={`${id}-maat`} checked={maat === m} onChange={() => setMaat(m)} /><span>{m}</span></label>
          ))}
        </div>
      </fieldset>
      <div className="pg-velden">
        <label className="pg-veld"><span className="dag-mono">Waar ligt de tuin?</span><input value={plaats} onChange={(e) => setPlaats(e.target.value)} placeholder="Bijvoorbeeld Stein" autoComplete="address-level2" /></label>
        <label className="pg-veld"><span className="dag-mono">Je naam</span><input value={naam} onChange={(e) => setNaam(e.target.value)} autoComplete="name" /></label>
      </div>
      <label className="pg-veld"><span className="dag-mono">Wat zie je, en wat wil je?</span><textarea rows={5} value={bericht} onChange={(e) => setBericht(e.target.value)} placeholder="Bijvoorbeeld: de vijver is elk voorjaar groen, en we willen meer plek om te zitten." /></label>

      <div className="pg-voorbeeld" aria-live="polite">
        <p className="dag-mono dag-zacht">Je bericht</p>
        <pre>{tekst}</pre>
      </div>
      <div className="dag-knoppen">
        <a href={wa} className="dag-knop">Verstuur via WhatsApp</a>
        <a href={mail} className="dag-knop dag-knop-lijn">Verstuur per mail</a>
      </div>
    </form>
  )
}
