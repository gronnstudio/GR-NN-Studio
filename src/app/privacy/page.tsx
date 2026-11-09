import type { Metadata } from "next"
import { Juridisch } from "@/components/juridisch"
import { PRIVACY } from "@/lib/juridisch/privacy"

export const metadata: Metadata = { title: "Privacyverklaring", description: "Wat GRØNN Studio met persoonsgegevens doet: geen cookies, geen analytics, en contact alleen als jij het verstuurt." }

export default function Privacy() {
  return <Juridisch doc={PRIVACY} />
}
