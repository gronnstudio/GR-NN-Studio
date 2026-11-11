import type { Metadata } from "next"
import Link from "next/link"
import { Foto } from "@/components/foto"
import { PaginaKop } from "@/components/poort"
import { STUKKEN } from "@/inhoud/journaal"
import { datumTekst } from "@/lib/toon"

export const metadata: Metadata = {
  title: "Journaal",
  description: "Praktische stukken bij het seizoen: over vijvers, tuinen, bodem en wat er leeft. Geschreven door Nick Peters.",
}

const THEMAS = ["Seizoen", "Tuin", "Vijver"] as const

export default function Journaal() {
  const [voorop, ...rest] = [...STUKKEN].sort((a, b) => b.datum.localeCompare(a.datum))
  return (
    <div className="pg toon-nacht">
      <PaginaKop tijd="23:00" waar={`Journaal · ${STUKKEN.length} stukken`} titel="Wat er leeft als jij slaapt." intro="Praktische stukken bij het seizoen. Over water, bodem, planten en de dieren die je tuin delen. Geschreven als ik iets zie dat het vertellen waard is." />

      <Link href={`/journaal/${voorop.slug}`} className="pg-sectie pg-voorop">
        {voorop.beeld && <Foto beeld={voorop.beeld} verhouding="4 / 3" prioriteit sizes="(min-width: 900px) 50vw, 100vw" />}
        <span className="pg-voorop-tekst">
          <span className="dag-mono dag-zacht">Nieuwste · {voorop.thema} · {datumTekst(voorop.datum)}</span>
          <span className="pg-h2">{voorop.titel}</span>
          <span>{voorop.beschrijving}</span>
          <span className="dag-lees">Lees · {voorop.leestijd} min →</span>
        </span>
      </Link>

      {THEMAS.map((t) => {
        const stukken = rest.filter((s) => s.thema === t)
        if (!stukken.length) return null
        return (
          <section key={t} className="pg-sectie pg-thema" aria-labelledby={`t-${t}`}>
            <h2 id={`t-${t}`} className="pg-h3">{t} <span className="dag-mono dag-zacht">{stukken.length}</span></h2>
            <ul className="pg-stukken">
              {stukken.map((s) => (
                <li key={s.slug}>
                  <Link href={`/journaal/${s.slug}`}>
                    <span className="dag-mono dag-zacht">{datumTekst(s.datum)} · {s.leestijd} min</span>
                    <span className="pg-stuk-titel">{s.titel}</span>
                    <span className="pg-stuk-zin">{s.beschrijving}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )
      })}
    </div>
  )
}
