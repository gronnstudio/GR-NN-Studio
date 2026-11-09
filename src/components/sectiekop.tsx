import type { ReactNode } from "react"

/** Nummer in mono boven een kop. Elke sectie op de site begint zo. */
export function Sectiekop({ nr, id, children, groot = false }: { nr: string; id?: string; children: ReactNode; groot?: boolean }) {
  return (
    <div className="sectiekop">
      <p className="t-mono">{nr}</p>
      <h2 id={id} className={groot ? "t-h1" : "t-h2"}>{children}</h2>
    </div>
  )
}
