import type { Metadata } from "next"
import Link from "next/link"
import { Foto } from "@/components/foto"
import { PaginaKop, Poort } from "@/components/poort"
import { TERRAS, VIJVER } from "@/inhoud/projecten"

export const metadata: Metadata = {
  title: "Werk",
  description: "Een vijverrenovatie met twee vijvers in één watersysteem, en een terras van 24 m² in Geulle, gelegd in twee dagen.",
}

const WERK = [
  { p: VIJVER, beeld: VIJVER.slot.beeld, tijd: "19:00", deel: "Avond", zin: VIJVER.hoofdstukken[0].alineas[0] },
  { p: TERRAS, beeld: TERRAS.hoofdbeeld, tijd: "07:00", deel: "Ochtend", zin: TERRAS.ondertitel },
]

export default function Werk() {
  return (
    <div className="pg toon-ochtend">
      <PaginaKop waar="Werk · 2 projecten" titel="Tuinen die er al staan." intro="Twee projecten, van eerste vraag tot oplevering. Met wat er goed ging, wat lastig was en wat ik ervan leerde." />
      <ul className="pg-werk">
        {WERK.map(({ p, beeld, tijd, deel, zin }) => (
          <li key={p.slug}>
            <Link href={`/werk/${p.slug}`} className="pg-werk-item">
              <Foto beeld={beeld} verhouding="4 / 3" sizes="(min-width: 900px) 55vw, 100vw" />
              <span className="pg-werk-tekst">
                <span className="dag-mono dag-zacht">{tijd} · {deel} · {p.soort} · {p.plaats}</span>
                <span className="pg-h2">{p.titel}</span>
                <span>{zin}</span>
                <span className="dag-lees">Lees het verhaal →</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <Poort zin="Jouw tuin als volgende?" />
    </div>
  )
}
