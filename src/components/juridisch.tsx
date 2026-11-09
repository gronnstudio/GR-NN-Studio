import { Paginakop } from "@/components/pagina"
import type { LegalDocument } from "@/lib/juridisch/types"

const datum = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" })

/** Een juridisch document: kop, inhoudsopgave, artikelen. Rustig en leesbaar. */
export function Juridisch({ doc }: { doc: LegalDocument }) {
  return (
    <>
      <Paginakop label={<><span>Juridisch</span><span>Versie {datum(doc.updated)}</span></>} regels={[doc.title]} klein>
        <p className="t-lead">{doc.intro}</p>
      </Paginakop>
      <div className="rand sectie juridisch">
        <nav aria-label="Inhoud" className="juridisch-inhoud">
          <p className="t-mono t-accent">Inhoud</p>
          <ol>
            {doc.sections.map((s, i) => (
              <li key={s.heading}><a href={`#art-${i + 1}`}><span className="t-mono t-zacht">{String(i + 1).padStart(2, "0")}</span> {s.heading}</a></li>
            ))}
          </ol>
        </nav>
        <div className="juridisch-tekst">
          {doc.sections.map((s, i) => (
            <section key={s.heading} id={`art-${i + 1}`} aria-labelledby={`art-${i + 1}-kop`}>
              <h2 id={`art-${i + 1}-kop`}><span className="t-mono t-accent">Artikel {i + 1}</span>{s.heading}</h2>
              {s.body.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
            </section>
          ))}
        </div>
      </div>
    </>
  )
}
