"use client"

import { useState, type FormEvent } from "react"
import { useSearchParams } from "next/navigation"
import { SITE, whatsappMet } from "@/lib/site"

// Kennismaken zonder server: het formulier zet je bericht klaar in WhatsApp
// of je mailprogramma, en jij verstuurt het. Deze site bewaart niets.

const ONDERWERPEN = ["Vijver", "Tuin", "Terras of aanleg", "Onderhoud", "Iets anders"]

type Fouten = Partial<Record<"naam" | "bericht", string>>

export function Formulier() {
  const zoek = useSearchParams()
  const gevraagd = zoek.get("onderwerp") ?? ""
  const start = ONDERWERPEN.find((o) => gevraagd.toLowerCase().startsWith(o.toLowerCase().slice(0, 4))) ?? (gevraagd.toLowerCase().startsWith("vijver") ? "Vijver" : "")
  const [onderwerp, setOnderwerp] = useState(start)
  const [fouten, setFouten] = useState<Fouten>({})

  const opstellen = (form: HTMLFormElement) => {
    const d = new FormData(form)
    const naam = String(d.get("naam") ?? "").trim()
    const plaats = String(d.get("plaats") ?? "").trim()
    const bericht = String(d.get("bericht") ?? "").trim()
    const f: Fouten = {}
    if (!naam) f.naam = "Vul je naam in."
    if (bericht.length < 10) f.bericht = "Vertel in een paar zinnen wat je ziet of wilt."
    setFouten(f)
    if (Object.keys(f).length) {
      form.querySelector<HTMLElement>(f.naam ? "#naam" : "#bericht")?.focus()
      return null
    }
    const regels = [
      `Hoi Nick, ik ben ${naam}${plaats ? ` uit ${plaats}` : ""}.`,
      onderwerp ? `Onderwerp: ${onderwerp}` : "",
      "",
      bericht,
    ].filter((r, i) => r || i === 2)
    return { naam, tekst: regels.join("\n") }
  }

  const viaWhatsapp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const klaar = opstellen(e.currentTarget)
    if (klaar) window.open(whatsappMet(klaar.tekst), "_blank", "noopener")
  }

  const viaMail = (form: HTMLFormElement | null) => {
    if (!form) return
    const klaar = opstellen(form)
    if (klaar) window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(`Kennismaken: ${onderwerp || "vraag"} (${klaar.naam})`)}&body=${encodeURIComponent(klaar.tekst)}`
  }

  return (
    <form className="formulier" onSubmit={viaWhatsapp} noValidate>
      <fieldset className="veld">
        <legend className="t-mono t-zacht">Waar gaat het over?</legend>
        <div className="keuzes">
          {ONDERWERPEN.map((o) => (
            <label key={o} className="keuze">
              <input type="radio" name="onderwerp" value={o} checked={onderwerp === o} onChange={() => setOnderwerp(o)} />
              <span>{o}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="veld-paar">
        <div className="veld">
          <label htmlFor="naam" className="t-mono t-zacht">Naam</label>
          <input id="naam" name="naam" autoComplete="name" aria-invalid={!!fouten.naam} aria-describedby={fouten.naam ? "fout-naam" : undefined} />
          {fouten.naam ? <p id="fout-naam" className="fout" role="alert">{fouten.naam}</p> : null}
        </div>
        <div className="veld">
          <label htmlFor="plaats" className="t-mono t-zacht">Plaats <span className="t-zacht">(niet verplicht)</span></label>
          <input id="plaats" name="plaats" autoComplete="address-level2" />
        </div>
      </div>

      <div className="veld">
        <label htmlFor="bericht" className="t-mono t-zacht">Wat zie je, en wat zou je willen zien?</label>
        <textarea id="bericht" name="bericht" rows={6} aria-invalid={!!fouten.bericht} aria-describedby={fouten.bericht ? "fout-bericht" : "hulp-bericht"} />
        {fouten.bericht
          ? <p id="fout-bericht" className="fout" role="alert">{fouten.bericht}</p>
          : <p id="hulp-bericht" className="t-klein t-zacht">Bijvoorbeeld: hoe groot, wat er nu ligt, wat er misgaat. Foto’s kun je straks in WhatsApp of de mail meesturen.</p>}
      </div>

      <div className="knoppen">
        <button type="submit" className="knop knop-vol">Verstuur via WhatsApp</button>
        <button type="button" className="knop knop-lijn" onClick={(e) => viaMail(e.currentTarget.form)}>Verstuur via mail</button>
      </div>
      <p className="t-klein t-zacht">Je bericht gaat niet via deze site: hij zet het alleen klaar in WhatsApp of je mail, en jij verstuurt het zelf.</p>
    </form>
  )
}
