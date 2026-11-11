import type { Metadata } from "next"
import { Document } from "@/components/document"
import { JURIDISCH } from "@/inhoud/juridisch"

export const metadata: Metadata = { title: "Herroeping", description: JURIDISCH["herroeping"].titel }

export default function Pagina() {
  return <Document doc={JURIDISCH["herroeping"]} />
}
