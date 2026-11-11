import type { DagdeelId } from "./dag"

// Elk dagdeel heeft een toon: de achtergrond van de pagina's die erbij horen.
export const toonVan = (deel: DagdeelId | "poort") => `toon-${deel === "poort" ? "ochtend" : deel}`

export const DEEL_LABEL: Record<DagdeelId | "poort", { naam: string; tijd: string }> = {
  ochtend: { naam: "Ochtend", tijd: "07:00" },
  middag: { naam: "Middag", tijd: "13:00" },
  avond: { naam: "Avond", tijd: "19:00" },
  nacht: { naam: "Nacht", tijd: "23:00" },
  poort: { naam: "Altijd · bij de poort", tijd: "" },
}

/** "3 november 2026" */
export const datumTekst = (iso: string) =>
  new Intl.DateTimeFormat("nl-NL", { day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Amsterdam" }).format(new Date(iso))
