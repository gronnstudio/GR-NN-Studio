import type { Metadata } from "next"
import Link from "next/link"
import { Foto } from "@/components/foto"
import { PaginaKop, Poort } from "@/components/poort"
import { VAKKEN } from "@/inhoud/vakken"
import { DAGDELEN } from "@/lib/dag"
import { DEEL_LABEL } from "@/lib/toon"

export const metadata: Metadata = {
  title: "Vakken",
  description: "Tuinontwerp, aanleg, materiaal, beplanting, water, renovatie en advies: zeven vakken, elk bij het moment van de dag waar het thuishoort.",
}

const GROEPEN = [...DAGDELEN.map((d) => ({ id: d.id, label: `${d.tijd} · ${DEEL_LABEL[d.id].naam}`, moment: d.strook })), { id: "poort" as const, label: "Altijd", moment: "Bij de poort" }]

export default function Vakken() {
  return (
    <div className="pg toon-ochtend">
      <PaginaKop waar="Vakken · 7" titel="Zeven vakken, één dag." intro="Elk vak hoort bij een moment van de dag: waar je ’s ochtends zit, wat er ’s middags groeit, waar je ’s avonds tot rust komt. Kies het moment, of kies het vak." />
      <div className="pg-vakken">
        {GROEPEN.map((g) => {
          const vakken = VAKKEN.filter((v) => v.deel === g.id)
          if (!vakken.length) return null
          return (
            <section key={g.id} className={`pg-vakgroep toon-${g.id === "poort" ? "ochtend" : g.id}`} aria-labelledby={`g-${g.id}`}>
              <div className="pg-vakgroep-kop">
                <p className="dag-mono dag-zacht">{g.label}</p>
                <h2 id={`g-${g.id}`} className="pg-h3">{g.moment}</h2>
              </div>
              <ul className="pg-vaklijst">
                {vakken.map((v) => (
                  <li key={v.slug}>
                    <Link href={`/vakken/${v.slug}`} className="pg-vak">
                      <Foto beeld={v.beeld} verhouding="4 / 3" sizes="(min-width: 900px) 22vw, 40vw" className="pg-vak-foto" />
                      <span className="pg-vak-tekst">
                        <span className="pg-vak-naam">{v.naam}</span>
                        <span className="pg-vak-kop">{v.kop}</span>
                        <span className="dag-mono">{v.prijzen[0].bedrag}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )
        })}
      </div>
      <Poort />
    </div>
  )
}
