import type { Beeld } from "@/lib/fotos"
import bron from "./borders-bron.json"

// Acht borderpakketten, twee bodempakketten en de materialen.

export type Border = { slug: string; naam: string; kenmerken: string[]; zin: string; planten: string[]; beeld: Beeld }
export type Bodem = { naam: string; zin: string; beeld: Beeld }
export type Materiaalgroep = { id: string; kop: string; beeld: Beeld; materialen: { naam: string; zin: string }[] }

export const BORDERS = bron.borders as Border[]
export const BODEM = bron.bodem as Bodem[]
export const BORDER_MATEN = bron.maten as number[]
export const BORDER_PRIJS = bron.prijs.aangeplant as number
export const MATERIALEN = bron.materialen as Materiaalgroep[]
