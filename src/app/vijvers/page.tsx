import type { Metadata } from "next"
import { DienstPagina } from "@/components/dienst-pagina"
import { dienstVoor } from "@/lib/diensten"

export const metadata: Metadata = {
  title: "Vijvers: diagnose, renovatie, aanleg en onderhoud",
  description: "Vijvers renoveren, aanleggen en onderhouden in Stein en omgeving. Eerst kijken waar het misgaat, dan een vaste prijs vooraf.",
}

export default function Vijvers() {
  return <DienstPagina dienst={dienstVoor("vijvers")} nr="01" projectSlug="vijverrenovatie" />
}
