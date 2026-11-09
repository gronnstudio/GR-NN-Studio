import type { Metadata } from "next"
import { Juridisch } from "@/components/juridisch"
import { VOORWAARDEN_CONSUMENT } from "@/lib/juridisch/voorwaarden-consument"

export const metadata: Metadata = { title: "Algemene voorwaarden", description: "De algemene voorwaarden van GRØNN Studio voor particuliere opdrachtgevers." }

export default function Voorwaarden() {
  return <Juridisch doc={VOORWAARDEN_CONSUMENT} />
}
