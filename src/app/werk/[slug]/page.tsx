import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Foto } from "@/components/beeld"
import { Paginakop, Uitnodiging } from "@/components/pagina"
import { PROJECTEN, projectVoor, type Hoofdstuk } from "@/lib/projecten"

// Een dossier: kop, hoofdbeeld, de feiten, en de hoofdstukken van het
// verhaal. Elk hoofdstuk kiest zijn eigen beeldopstelling, zodat geen twee
// projecten hetzelfde ritme hebben.

export function generateStaticParams() {
  return PROJECTEN.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = projectVoor((await params).slug)
  if (!p) return {}
  return {
    title: p.seo.titel,
    description: p.seo.omschrijving,
    openGraph: { images: [{ url: p.hoofdbeeld.src, alt: p.hoofdbeeld.alt }] },
  }
}

function Beelden({ h }: { h: Hoofdstuk }) {
  if (!h.beelden?.length) return null
  return (
    <div className={`hoofdstuk-beelden hoofdstuk-${h.opstelling ?? "breed"}`}>
      {h.beelden.map(({ beeld, bijschrift }) => (
        <figure key={beeld.src}>
          <Foto beeld={beeld} sizes={h.opstelling === "breed" ? "100vw" : "(min-width: 768px) 45vw, 100vw"} />
          <figcaption className="bijschrift t-mono"><span>{bijschrift}</span></figcaption>
        </figure>
      ))}
    </div>
  )
}

export default async function Dossier({ params }: { params: Promise<{ slug: string }> }) {
  const p = projectVoor((await params).slug)
  if (!p) notFound()
  const i = PROJECTEN.indexOf(p)
  const volgende = PROJECTEN[(i + 1) % PROJECTEN.length]

  return (
    <article>
      <Paginakop
        label={<><Link href="/werk">Werk</Link><span>{p.code}</span><span>{p.type}{p.plaats ? ` · ${p.plaats}` : ""}</span><span>{p.status}</span></>}
        regels={[p.titel]}
      >
        <p className="t-lead">{p.samenvatting}</p>
      </Paginakop>

      <div className="rand dossier-hoofd">
        <Foto beeld={p.hoofdbeeld} verhouding={p.hoofdbeeld.breed > p.hoofdbeeld.hoog ? "16 / 9" : "4 / 5"} prioriteit sizes="100vw" />
      </div>

      <div className="rand sectie dossier-lijf">
        <aside className="dossier-feiten" aria-label="Feiten">
          <p className="t-mono t-accent">Feiten</p>
          <dl className="feiten">
            {p.feiten.map(([k, v]) => <div key={k}><dt className="t-mono">{k}</dt><dd>{v}</dd></div>)}
          </dl>
        </aside>
        <div className="dossier-verhaal">
          {p.hoofdstukken.map((h, n) => (
            <section key={h.label} className="hoofdstuk zie" aria-labelledby={`h-${n}`}>
              <p className="t-mono t-accent">{String(n + 1).padStart(2, "0")} · {h.label}</p>
              <h2 id={`h-${n}`} className="t-h2">{h.kop}</h2>
              <div className="t-tekst">{h.tekst.map((t) => <p key={t.slice(0, 24)}>{t}</p>)}</div>
              <Beelden h={h} />
            </section>
          ))}
        </div>
      </div>

      <nav aria-label="Volgend dossier" className="rand sectie">
        <Link href={`/werk/${volgende.slug}`} className="volgende">
          <span className="t-mono t-zacht">Volgend dossier · {volgende.code}</span>
          <span className="t-h2">{volgende.titel} <span className="pijl" aria-hidden="true">→</span></span>
        </Link>
      </nav>

      <Uitnodiging
        zin="Een vergelijkbaar project in jouw tuin?"
        onderwerp={p.type}
        bericht={`Hoi Nick, ik zag ${p.code} (${p.type.toLowerCase()}) en heb zelf een vergelijkbaar idee.`}
      />
    </article>
  )
}
