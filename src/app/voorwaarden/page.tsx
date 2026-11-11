import type { Metadata } from "next"
import { Document } from "@/components/document"
import { JURIDISCH } from "@/inhoud/juridisch"

export const metadata: Metadata = { title: "Voorwaarden", description: JURIDISCH["voorwaarden"].titel }

export default function Pagina() {
  return <Document doc={JURIDISCH["voorwaarden"]} />
}
