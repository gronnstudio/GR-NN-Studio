import { PaginaKop } from "@/components/poort"
import type { Document as Doc } from "@/inhoud/juridisch"
import { datumTekst } from "@/lib/toon"

/** Een juridisch document: koppen, alinea's en opsommingen, met een inhoudsopgave. */
export function Document({ doc }: { doc: Doc }) {
  const regel = (t: string) => t.replace(/\*\*/g, "")
  return (
    <div className="pg toon-ochtend">
      <PaginaKop waar={`Bijgewerkt ${datumTekst(doc.bijgewerkt)}`} titel={doc.titel} intro={doc.intro ? regel(doc.intro) : undefined} />
      <div className="pg-sectie pg-document">
        <nav aria-label="Inhoud" className="pg-document-inhoud">
          <ol>{doc.secties.map((s, i) => <li key={s.kop}><a href={`#a${i + 1}`}>{s.kop}</a></li>)}</ol>
        </nav>
        <div className="pg-lopend">
          {doc.secties.map((s, i) => (
            <section key={s.kop} id={`a${i + 1}`} aria-labelledby={`k${i + 1}`}>
              <h2 id={`k${i + 1}`} className="pg-h3">{i + 1}. {s.kop}</h2>
              {s.tekst.map((t, j) => t.startsWith("·") ? <p key={j} className="pg-punt">{regel(t.slice(1).trim())}</p> : <p key={j}>{regel(t)}</p>)}
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
