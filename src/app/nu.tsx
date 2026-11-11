"use client"

import { useSyncExternalStore } from "react"
import { dagdeelVan } from "@/lib/dag"

// De tijd in Stein, per minuut. Op de server (en tijdens het bouwen) is er
// geen "nu"; dan tonen deze onderdelen een neutrale tekst.

const tz = "Europe/Amsterdam"
const abonneer = (opnieuw: () => void) => {
  const t = setInterval(opnieuw, 20_000)
  return () => clearInterval(t)
}
const momentopname = () => {
  const d = new Date()
  const uur = +new Intl.DateTimeFormat("nl-NL", { hour: "numeric", hourCycle: "h23", timeZone: tz }).format(d)
  const tijd = new Intl.DateTimeFormat("nl-NL", { hour: "2-digit", minute: "2-digit", hourCycle: "h23", timeZone: tz }).format(d)
  const dag = new Intl.DateTimeFormat("nl-NL", { weekday: "long", day: "numeric", month: "long", timeZone: tz }).format(d)
  return `${uur}|${tijd}|${dag}`
}

function useNu() {
  const s = useSyncExternalStore(abonneer, momentopname, () => "")
  if (!s) return null
  const [uur, tijd, dag] = s.split("|")
  return { uur: +uur, tijd, dag, deel: dagdeelVan(+uur) }
}

/** "Stein · woensdag 11 november · 11:10 · ochtend" */
export function Klok({ className }: { className?: string }) {
  const nu = useNu()
  return (
    <p className={className} aria-live="off">
      {nu ? <>Stein · {nu.dag} · <time>{nu.tijd}</time> · {nu.deel}</> : "Stein · een dag in de tuin"}
    </p>
  )
}

/** De naald in het dagdeel van nu, met de tijd erbij. */
export function Naald() {
  const nu = useNu()
  if (!nu) return null
  return <span className="dag-naald" aria-hidden="true"><span>nu · {nu.tijd}</span></span>
}

/** Springt naar het dagdeel van nu; zonder tijd naar het begin van de dag. */
export function NaarNu({ className, children }: { className?: string; children: React.ReactNode }) {
  const nu = useNu()
  return <a href={`#${nu?.deel ?? "ochtend"}`} className={className}>{children}</a>
}
