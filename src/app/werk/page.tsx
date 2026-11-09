import type { Metadata } from "next"
import Link from "next/link"
import { Foto } from "@/components/beeld"
import { Paginakop } from "@/components/pagina"
import { PROJECTEN } from "@/lib/projecten"

export const metadata: Metadata = {
  title: "Uitgevoerd werk",
  description: "Dossiers van uitgevoerd werk door GRØNN Studio: alleen echte projecten, met toestemming van de klant.",
}

export default function Werk() {
  return (
    <>
      <Paginakop label={<><span>Werk</span><span>{PROJECTEN.length} dossiers</span></>} regels={["Uitgevoerd", "werk."]}>
        <p className="t-lead">Alleen echt werk, met toestemming van de klant. Per project: wat er lag, hoe ik het aanpakte en waar het nu staat.</p>
      </Paginakop>

      <ol className="rand sectie dossierlijst">
        {PROJECTEN.map((p, i) => (
          <li key={p.slug} className="zie">
            <Link href={`/werk/${p.slug}`} className="dossierregel">
              <Foto beeld={p.kaartbeeld} verhouding={i % 2 ? "4 / 5" : "4 / 3"} prioriteit={i === 0} sizes="(min-width: 768px) 50vw, 100vw" className="dossierregel-beeld" />
              <div className="dossierregel-tekst">
                <p className="bijschrift t-mono"><span>{p.code}</span><span>{p.jaar}</span><span>{p.status}</span></p>
                <h2 className="t-h2">{p.titel}</h2>
                <p className="t-zacht t-tekst">{p.samenvatting}</p>
                <dl className="feiten">
                  {p.feiten.slice(0, 3).map(([k, v]) => <div key={k}><dt className="t-mono">{k}</dt><dd>{v}</dd></div>)}
                </dl>
                <span className="link">Open het dossier <span className="pijl" aria-hidden="true">→</span></span>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </>
  )
}
