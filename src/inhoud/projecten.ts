import type { Beeld } from "@/lib/fotos"
import bron from "./projecten-bron.json"

// De twee projecten, met Nicks eigen teksten en foto's.

type BeeldB = Beeld & { bijschrift?: string }
type Uitgelicht = { waarde: string; eenheid: string; label: string }

export type Vijverproject = {
  slug: "vijverrenovatie"; titel: string; soort: string; plaats: string; dagdeel: "avond"
  cijfers: [string, string][]; cijfersNoot: string; uitgelicht: Uitgelicht[]
  hoofdstukken: { kop: string; kort: string; alineas: string[]; beeld?: BeeldB }[]
  citaat: { tekst: string; bron: string }; klant: { tekst: string; bron: string }
  slot: { kop: string; alineas: string[]; beeld: BeeldB }
  reeks: { beeld: BeeldB; fase: string; zin: string }[]
  videos: { src: string; poster: string; breed: number; hoog: number; beschrijving: string; bijschrift: string }[]
}
export type Terrasproject = {
  slug: "terras-geulle"; titel: string; soort: string; plaats: string; wanneer: string; status: string; dagdeel: "ochtend"
  ondertitel: string; intro: string[]; cijfers: [string, string][]; uitgelicht: Uitgelicht[]; stappen: string[]
  citaat: { tekst: string; bron: string }; slot: { kop: string; alineas: string[] }
  hoofdbeeld: BeeldB; reeks: BeeldB[]; slotbeeld: BeeldB
}

export const VIJVER = bron.vijver as unknown as Vijverproject
export const TERRAS = bron.terras as unknown as Terrasproject
export const PROJECTEN = [VIJVER, TERRAS] as const
