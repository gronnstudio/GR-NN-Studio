import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Foto } from "@/components/foto"
import { PaginaKop, Poort } from "@/components/poort"
import { BODEM, BORDER_MATEN, BORDER_PRIJS, BORDERS, MATERIALEN } from "@/inhoud/borders"
import { STUKKEN } from "@/inhoud/journaal"
import { PROJECTEN } from "@/inhoud/projecten"
import { ONDERHOUD, VAKKEN, vakVan, WERKWIJZE, type Prijs } from "@/inhoud/vakken"
import { DEEL_LABEL, toonVan } from "@/lib/toon"

export const dynamicParams = false
export const generateStaticParams = () => VAKKEN.map((v) => ({ slug: v.slug }))

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const v = vakVan((await params).slug)
  return v ? { title: v.naam, description: v.intro } : {}
}

function Prijzen({ prijzen, noot }: { prijzen: Prijs[]; noot?: string }) {
  return (
    <div className="pg-prijzen">
      <dl>
        {prijzen.map((p) => <div key={p.wat}><dt>{p.wat}</dt><dd>{p.bedrag}</dd></div>)}
      </dl>
      <p className="dag-mono dag-zacht">{noot ? `${noot} · ` : ""}Bedragen incl. btw</p>
    </div>
  )
}

export default async function VakPagina({ params }: { params: Promise<{ slug: string }> }) {
  const v = vakVan((await params).slug)
  if (!v) notFound()
  const i = VAKKEN.indexOf(v)
  const volgende = VAKKEN[(i + 1) % VAKKEN.length]
  const deel = DEEL_LABEL[v.deel]
  const project = PROJECTEN.find((p) => p.slug === v.project)
  const stukken = STUKKEN.filter((s) => s.thema === v.thema).slice(0, 3)

  return (
    <div className={`pg ${toonVan(v.deel)}`}>
      <PaginaKop tijd={deel.tijd || undefined} waar={<><Link href="/vakken">Vakken</Link> · {String(i + 1).padStart(2, "0")} / 07 · {deel.naam}</>} titel={v.kop} intro={v.intro}>
        <p className="pg-vaknaam dag-mono">{v.naam} · {v.prijzen[0].bedrag}</p>
      </PaginaKop>

      <figure className="pg-held"><Foto beeld={v.beeld} verhouding="16 / 9" prioriteit sizes="100vw" /></figure>

      <section className="pg-sectie pg-twee" aria-labelledby="h-wel">
        <div>
          <h2 id="h-wel" className="pg-h2">Wat je krijgt</h2>
          <ol className="pg-wel">
            {v.wel.map((w, n) => <li key={w}><span className="dag-mono dag-zacht">{String(n + 1).padStart(2, "0")}</span>{w}</li>)}
          </ol>
        </div>
        <div>
          {v.niet && (
            <>
              <h2 className="pg-h2">Wat je niet krijgt</h2>
              <ul className="pg-niet">{v.niet.map((n) => <li key={n}>{n}</li>)}</ul>
            </>
          )}
          <h2 className="pg-h2 pg-prijs-kop">Wat het kost</h2>
          <Prijzen prijzen={v.prijzen} noot={v.prijsNoot} />
        </div>
      </section>

      {v.extra === "werkwijze" && (
        <section className="pg-sectie" aria-labelledby="h-werkwijze">
          <h2 id="h-werkwijze" className="pg-h2">Zo werk ik, in zes stappen</h2>
          <ol className="pg-stappen">
            {WERKWIJZE.map(([kop, tekst], n) => (
              <li key={kop}><span className="dag-mono dag-zacht">{String(n + 1).padStart(2, "0")}</span><h3 className="pg-h3">{kop}</h3><p>{tekst}</p></li>
            ))}
          </ol>
        </section>
      )}

      {v.extra === "borders" && (
        <section id="borders" className="pg-sectie" aria-labelledby="h-borders">
          <div className="pg-sectie-kop">
            <h2 id="h-borders" className="pg-h2">Acht borderpakketten</h2>
            <p>Een complete border met plantlijst en plan, in {BORDER_MATEN.join(", ").replace(/, (\d+)$/, " of $1")} m². € {BORDER_PRIJS} per m², planten en aanplanten inbegrepen. Of een border op maat.</p>
          </div>
          <ul className="pg-borders">
            {BORDERS.map((b) => (
              <li key={b.slug} id={b.slug}>
                <Foto beeld={b.beeld} verhouding="4 / 3" sizes="(min-width: 900px) 30vw, 100vw" />
                <h3 className="pg-h3">{b.naam}</h3>
                <p className="dag-mono dag-zacht">{b.kenmerken.join(" · ")}</p>
                <p>{b.zin}</p>
                <p className="pg-planten"><span className="dag-mono dag-zacht">Planten</span> {b.planten.join(", ")}</p>
              </li>
            ))}
          </ul>
          <h3 className="pg-h3 pg-bodem-kop">De bodem eronder</h3>
          <ul className="pg-bodem">
            {BODEM.map((b) => (
              <li key={b.naam}><Foto beeld={b.beeld} verhouding="1 / 1" sizes="(min-width: 900px) 12vw, 30vw" /><div><p className="pg-vet">{b.naam}</p><p>{b.zin}</p></div></li>
            ))}
          </ul>
        </section>
      )}

      {v.extra === "materialen" && (
        <section className="pg-sectie" aria-labelledby="h-materialen">
          <h2 id="h-materialen" className="pg-h2">Waar ik mee werk</h2>
          <div className="pg-materialen">
            {MATERIALEN.map((g) => (
              <section key={g.id} className="pg-materiaal" aria-labelledby={`m-${g.id}`}>
                <Foto beeld={g.beeld} verhouding="16 / 9" sizes="(min-width: 900px) 40vw, 100vw" />
                <h3 id={`m-${g.id}`} className="pg-h3">{g.kop}</h3>
                <dl>{g.materialen.map((m) => <div key={m.naam}><dt>{m.naam}</dt><dd>{m.zin}</dd></div>)}</dl>
              </section>
            ))}
          </div>
        </section>
      )}

      {v.extra === "onderhoud" && (
        <section className="pg-sectie" aria-labelledby="h-onderhoud">
          <div className="pg-sectie-kop">
            <h2 id="h-onderhoud" className="pg-h2">Onderhoud door het jaar</h2>
            <p>Een vijver verandert elk jaar. Dit zijn de vaste klussen, met een vaste prijs.</p>
          </div>
          <div className="pg-onderhoud">
            {ONDERHOUD.map((o) => (
              <section key={o.naam} aria-label={o.naam}>
                <h3 className="pg-h3">{o.naam}</h3>
                <p>{o.zin}</p>
                <Prijzen prijzen={o.prijzen} />
                {o.niet && <p className="pg-niet-los"><span className="dag-mono dag-zacht">Wat je niet krijgt</span> {o.niet}</p>}
              </section>
            ))}
          </div>
        </section>
      )}

      {v.beelden.length > 0 && (
        <div className="pg-beelden">
          {v.beelden.map((b) => <figure key={b.src}><Foto beeld={b} verhouding="4 / 3" sizes="(min-width: 900px) 45vw, 100vw" /></figure>)}
        </div>
      )}

      {project && (
        <section className="pg-sectie" aria-labelledby="h-project">
          <p className="dag-mono dag-zacht">Uit het werk</p>
          <Link href={`/werk/${project.slug}`} className="pg-project">
            <Foto beeld={project.slug === "terras-geulle" ? project.hoofdbeeld : project.slot.beeld} verhouding="3 / 2" sizes="(min-width: 900px) 50vw, 100vw" />
            <span>
              <span className="dag-mono dag-zacht">{project.soort} · {project.plaats}</span>
              <span id="h-project" className="pg-h2">{project.titel}</span>
              <span className="dag-lees">Lees het verhaal →</span>
            </span>
          </Link>
        </section>
      )}

      {stukken.length > 0 && (
        <section className="pg-sectie" aria-labelledby="h-lees">
          <h2 id="h-lees" className="pg-h2">Uit het journaal</h2>
          <ul className="pg-stukjes">
            {stukken.map((s) => (
              <li key={s.slug}><Link href={`/journaal/${s.slug}`}><span className="dag-mono dag-zacht">{s.thema} · {s.leestijd} min</span><span className="pg-vet">{s.titel}</span></Link></li>
            ))}
          </ul>
        </section>
      )}

      <nav className="pg-volgende" aria-label="Volgend vak">
        <Link href={`/vakken/${volgende.slug}`}>
          <span className="dag-mono dag-zacht">Verder in de dag · {DEEL_LABEL[volgende.deel].naam}</span>
          <span className="pg-volgende-naam">{volgende.naam} →</span>
        </Link>
      </nav>

      <Poort bericht={`Hoi Nick, ik heb een vraag over ${v.naam.toLowerCase()}.`} />
    </div>
  )
}
