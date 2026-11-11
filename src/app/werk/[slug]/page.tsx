import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Foto } from "@/components/foto"
import { PaginaKop, Poort } from "@/components/poort"
import { PROJECTEN, TERRAS, VIJVER } from "@/inhoud/projecten"

export const dynamicParams = false
export const generateStaticParams = () => PROJECTEN.map((p) => ({ slug: p.slug }))

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  if (slug === VIJVER.slug) return { title: "Vijverrenovatie", description: VIJVER.hoofdstukken[0].alineas[0] }
  if (slug === TERRAS.slug) return { title: "Terras in Geulle", description: TERRAS.ondertitel }
  return {}
}

function Uitgelicht({ items }: { items: { waarde: string; eenheid: string; label: string }[] }) {
  return (
    <dl className="pg-uitgelicht">
      {items.map((u) => <div key={u.label}><dt>{u.label}</dt><dd>{u.waarde}<span>{u.eenheid}</span></dd></div>)}
    </dl>
  )
}

function Cijfers({ rijen, noot }: { rijen: [string, string][]; noot?: string }) {
  return (
    <section className="pg-sectie pg-twee" aria-labelledby="h-cijfers">
      <h2 id="h-cijfers" className="pg-h2">In cijfers</h2>
      <div>
        <dl className="pg-cijfers">{rijen.map(([k, w]) => <div key={k}><dt>{k}</dt><dd>{w}</dd></div>)}</dl>
        {noot && <p className="dag-mono dag-zacht pg-noot">{noot}</p>}
      </div>
    </section>
  )
}

function Citaat({ tekst, bron }: { tekst: string; bron: string }) {
  return (
    <figure className="pg-citaat">
      <blockquote>{tekst}</blockquote>
      <figcaption className="dag-mono dag-zacht">{bron}</figcaption>
    </figure>
  )
}

function Vijver() {
  const v = VIJVER
  return (
    <div className="pg toon-avond">
      <PaginaKop tijd="19:00" waar={<><Link href="/werk">Werk</Link> · {v.soort} · {v.plaats}</>} titel={v.titel} intro={v.hoofdstukken[0].alineas[0]} />
      <figure className="pg-held"><Foto beeld={v.slot.beeld} verhouding="16 / 9" prioriteit sizes="100vw" /></figure>
      <Uitgelicht items={v.uitgelicht} />

      <nav className="pg-sectie pg-hoofdstukken" aria-label="Hoofdstukken">
        <ol>{v.hoofdstukken.map((h, i) => <li key={h.kort}><a href={`#h${i + 1}`}><span className="dag-mono dag-zacht">{String(i + 1).padStart(2, "0")}</span>{h.kort}</a></li>)}</ol>
      </nav>

      {v.hoofdstukken.map((h, i) => (
        <section key={h.kop} id={`h${i + 1}`} className={`pg-sectie pg-hoofdstuk${i % 2 ? " pg-hoofdstuk-om" : ""}`} aria-labelledby={`k${i + 1}`}>
          <div className="pg-hoofdstuk-tekst">
            <p className="dag-mono dag-zacht">{String(i + 1).padStart(2, "0")} · {h.kort}</p>
            <h2 id={`k${i + 1}`} className="pg-h2">{h.kop}</h2>
            {h.alineas.map((a) => <p key={a.slice(0, 40)}>{a}</p>)}
          </div>
          {h.beeld && (
            <figure className="pg-hoofdstuk-beeld">
              <Foto beeld={h.beeld} sizes="(min-width: 900px) 40vw, 100vw" />
              {h.beeld.bijschrift && <figcaption className="dag-mono dag-zacht">{h.beeld.bijschrift}</figcaption>}
            </figure>
          )}
          {i === 4 && <Citaat {...v.citaat} />}
        </section>
      ))}

      <section className="pg-sectie" aria-labelledby="h-reeks">
        <h2 id="h-reeks" className="pg-h2">Van begin tot eind</h2>
        <ol className="pg-reeks">
          {v.reeks.map((r, i) => (
            <li key={r.beeld.src + i}>
              <Foto beeld={r.beeld} verhouding="3 / 4" sizes="(min-width: 900px) 22vw, 70vw" />
              <p className="dag-mono dag-zacht">{String(i + 1).padStart(2, "0")} · {r.fase}</p>
              <p>{r.zin}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="pg-sectie pg-videos" aria-label="Video's">
        {v.videos.map((m) => (
          <figure key={m.src}>
            <video controls preload="none" playsInline poster={m.poster} width={m.breed} height={m.hoog} aria-label={m.beschrijving}>
              <source src={m.src} type="video/mp4" />
            </video>
            <figcaption className="dag-mono dag-zacht">{m.bijschrift}</figcaption>
          </figure>
        ))}
      </section>

      <Cijfers rijen={v.cijfers} noot={v.cijfersNoot} />

      <section className="pg-sectie" aria-labelledby="h-slot">
        <h2 id="h-slot" className="pg-h2">{v.slot.kop}</h2>
        <div className="pg-lopend">{v.slot.alineas.map((a) => <p key={a.slice(0, 40)}>{a}</p>)}</div>
        <Citaat {...v.klant} />
      </section>

      <Poort zin="Een vijver die niet meer past?" bericht="Hoi Nick, ik heb een vijver die ik wil laten bekijken." />
    </div>
  )
}

function Terras() {
  const t = TERRAS
  return (
    <div className="pg toon-ochtend">
      <PaginaKop tijd="07:00" waar={<><Link href="/werk">Werk</Link> · {t.soort} · {t.plaats} · {t.wanneer}</>} titel={t.titel} intro={t.ondertitel} />
      <figure className="pg-held pg-held-staand"><Foto beeld={t.hoofdbeeld} verhouding="4 / 5" prioriteit sizes="(min-width: 900px) 50vw, 100vw" /></figure>
      <Uitgelicht items={t.uitgelicht} />
      <section className="pg-sectie pg-lopend">{t.intro.map((a) => <p key={a.slice(0, 40)}>{a}</p>)}</section>
      <section className="pg-sectie" aria-labelledby="h-stappen">
        <h2 id="h-stappen" className="pg-h2">Van ruwe grond tot strak terras</h2>
        <ol className="pg-wel pg-wel-groot">
          {t.stappen.map((s, n) => <li key={s}><span className="dag-mono dag-zacht">{String(n + 1).padStart(2, "0")}</span>{s}</li>)}
        </ol>
      </section>
      <div className="pg-beelden">
        {t.reeks.map((b) => <figure key={b.src}><Foto beeld={b} verhouding="3 / 4" sizes="(min-width: 900px) 45vw, 100vw" />{b.bijschrift && <figcaption className="dag-mono dag-zacht">{b.bijschrift}</figcaption>}</figure>)}
      </div>
      <Citaat {...t.citaat} />
      <Cijfers rijen={t.cijfers} />
      <section className="pg-sectie pg-twee" aria-labelledby="h-slot">
        <div>
          <h2 id="h-slot" className="pg-h2">{t.slot.kop}</h2>
          <div className="pg-lopend">{t.slot.alineas.map((a) => <p key={a.slice(0, 40)}>{a}</p>)}</div>
        </div>
        <figure><Foto beeld={t.slotbeeld} verhouding="3 / 4" sizes="(min-width: 900px) 40vw, 100vw" />{t.slotbeeld.bijschrift && <figcaption className="dag-mono dag-zacht">{t.slotbeeld.bijschrift}</figcaption>}</figure>
      </section>
      <Poort zin="Een terras dat na een jaar nog strak ligt?" bericht="Hoi Nick, ik wil graag een terras laten leggen." />
    </div>
  )
}

export default async function Project({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (slug === VIJVER.slug) return <Vijver />
  if (slug === TERRAS.slug) return <Terras />
  notFound()
}
