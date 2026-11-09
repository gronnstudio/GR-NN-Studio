import Link from "next/link"
import { Foto } from "@/components/beeld"
import { Paginakop, Uitnodiging } from "@/components/pagina"
import { Sectiekop } from "@/components/sectiekop"
import type { Dienst } from "@/lib/diensten"
import { PROJECTEN } from "@/lib/projecten"

// Eén opbouw voor Vijvers en Tuinen: kop, beeld, wat ik doe, prijzen,
// bijbehorend werk en de uitnodiging.

export function DienstPagina({ dienst, nr, projectSlug }: { dienst: Dienst; nr: string; projectSlug: string }) {
  const project = PROJECTEN.find((p) => p.slug === projectSlug)
  return (
    <>
      <Paginakop label={<><span>Dienst {nr}</span><span>{dienst.naam}</span></>} regels={dienst.kop}>
        <p className="t-lead">{dienst.intro}</p>
      </Paginakop>

      <div className="rand dienst-beeld">
        <Foto beeld={dienst.beeld} verhouding="16 / 9" prioriteit sizes="100vw" className="dienst-foto" />
      </div>

      <section className="sectie rand zie" aria-labelledby="h-onderdelen">
        <Sectiekop nr="01" id="h-onderdelen">Wat ik doe</Sectiekop>
        <ol className="onderdelen">
          {dienst.onderdelen.map((o, i) => (
            <li key={o.naam}>
              <span className="t-mono t-accent">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="t-h3">{o.naam}</h3>
              <p className="t-zacht">{o.tekst}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="sectie rand zie" aria-labelledby="h-prijzen">
        <div className="prijzen-raster">
          <div>
            <Sectiekop nr="02" id="h-prijzen">Wat het kost</Sectiekop>
            <p className="t-zacht t-tekst">Alle bedragen zijn inclusief btw. Wat niet blind te prijzen is, bekijk ik eerst ter plaatse; daarna krijg je een vaste prijs vooraf.</p>
          </div>
          <dl className="prijzen">
            {dienst.prijzen.map((p) => (
              <div key={p.wat}>
                <dt>
                  <span className="prijzen-wat">{p.wat}</span>
                  {p.uitleg ? <span className="t-klein t-zacht">{p.uitleg}</span> : null}
                </dt>
                <dd className="prijzen-bedrag">{p.prijs}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {project ? (
        <section className="sectie rand zie" aria-labelledby="h-voorbeeld">
          <Sectiekop nr="03" id="h-voorbeeld">Zo ziet het eruit</Sectiekop>
          <Link href={`/werk/${project.slug}`} className="voorbeeld">
            <Foto beeld={project.kaartbeeld} verhouding="4 / 3" sizes="(min-width: 768px) 58vw, 100vw" className="voorbeeld-beeld" />
            <div className="voorbeeld-tekst">
              <p className="bijschrift t-mono"><span>{project.code}</span><span>{project.jaar}</span><span>{project.status}</span></p>
              <h3 className="t-h3">{project.titel}</h3>
              <p className="t-zacht">{project.samenvatting}</p>
              <span className="link">Lees het dossier <span className="pijl" aria-hidden="true">→</span></span>
            </div>
          </Link>
        </section>
      ) : null}

      <Uitnodiging
        zin={dienst.volgende}
        onderwerp={dienst.naam}
        bericht={`Hoi Nick, ik heb een vraag over ${dienst.naam.toLowerCase()}.`}
      />
    </>
  )
}
