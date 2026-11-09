import type { Metadata } from "next"
import { DienstPagina } from "@/components/dienst-pagina"
import { dienstVoor } from "@/lib/diensten"

export const metadata: Metadata = {
  title: "Tuinen: advies, ontwerp, beplanting en aanleg",
  description: "Natuurlijke tuinen ontwerpen, aanplanten en aanleggen in Stein en omgeving, met een vaste prijs vooraf.",
}

export default function Tuinen() {
  return <DienstPagina dienst={dienstVoor("tuinen")} nr="02" projectSlug="terras-geulle" />
}
