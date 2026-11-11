import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Foto } from "@/components/foto"
import { PaginaKop, Poort } from "@/components/poort"
import { STUKKEN } from "@/inhoud/journaal"
import { datumTekst } from "@/lib/toon"

export const dynamicParams = false
export const generateStaticParams = () => STUKKEN.map((s) => ({ slug: s.slug }))
const stukVan = (slug: string) => STUKKEN.find((s) => s.slug === slug)

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const s = stukVan((await params).slug)
  return s ? { title: s.titel, description: s.beschrijving, openGraph: { type: "article", publishedTime: s.datum } } : {}
}

/** Zet **vet** om naar <strong>, verder alleen tekst. */
function Tekst({ tekst }: { tekst: string }) {
  return <>{tekst.split(/(\*\*[^*]+\*\*)/).map((d, i) => d.startsWith("**") ? <strong key={i}>{d.slice(2, -2)}</strong> : d)}</>
}

export default async function Stuk({ params }: { params: Promise<{ slug: string }> }) {
  const s = stukVan((await params).slug)
  if (!s) notFound()
  const verder = STUKKEN.filter((x) => x.thema === s.thema && x.slug !== s.slug).slice(0, 3)
  return (
    <div className="pg toon-middag">
      <article className="pg-stuk">
        <PaginaKop waar={<><Link href="/journaal">Journaal</Link> · {s.thema} · <time dateTime={s.datum}>{datumTekst(s.datum)}</time> · {s.leestijd} min lezen</>} titel={s.titel} intro={s.beschrijving} />
        {s.beeld && (
          <figure className="pg-stuk-beeld">
            <Foto beeld={s.beeld} prioriteit sizes="(min-width: 900px) 60vw, 100vw" />
            {s.beeld.bijschrift && <figcaption className="dag-mono dag-zacht">{s.beeld.bijschrift}</figcaption>}
          </figure>
        )}
        <div className="pg-stuk-tekst">
          {s.blokken.map((b, i) => {
            if (b.soort === "alinea") return <p key={i}><Tekst tekst={b.tekst} /></p>
            if (b.soort === "kop") return <h2 key={i} className="pg-h3">{b.tekst}</h2>
            if (b.soort === "lijst") return <ul key={i}>{b.regels.map((r) => <li key={r}><Tekst tekst={r} /></li>)}</ul>
            return (
              <figure key={i}>
                <Foto beeld={b.beeld} sizes="(min-width: 900px) 50vw, 100vw" />
                {b.beeld.bijschrift && <figcaption className="dag-mono dag-zacht">{b.beeld.bijschrift}</figcaption>}
              </figure>
            )
          })}
          <p className="dag-mono dag-zacht pg-auteur">Nick Peters · GRØNN Studio</p>
          {s.bronnen && (
            <section className="pg-bronnen" aria-label="Bronnen">
              <p className="dag-mono dag-zacht">Bronnen</p>
              <ul>{s.bronnen.map((b) => <li key={b}>{b}</li>)}</ul>
            </section>
          )}
        </div>
      </article>
      {verder.length > 0 && (
        <section className="pg-sectie" aria-labelledby="h-verder">
          <h2 id="h-verder" className="pg-h3">Meer over {s.thema.toLowerCase()}</h2>
          <ul className="pg-stukken">
            {verder.map((x) => (
              <li key={x.slug}><Link href={`/journaal/${x.slug}`}><span className="dag-mono dag-zacht">{datumTekst(x.datum)}</span><span className="pg-stuk-titel">{x.titel}</span></Link></li>
            ))}
          </ul>
        </section>
      )}
      <Poort zin="Zie je dit in je eigen tuin?" bericht={`Hoi Nick, ik las "${s.titel}" en heb een vraag over mijn tuin.`} />
    </div>
  )
}
