import type { CSSProperties } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { Foto } from "@/components/foto"
import { BEELD } from "@/lib/beelden"
import { PROJECTEN } from "@/lib/projecten"
import { dezeMaand, volgendeMaand } from "@/lib/seizoen"
import { SITE, whatsappMet } from "@/lib/site"
import { VAKKEN } from "@/lib/vakken"
import { Inhoud } from "./inhoud"
import "./almanak.css"

// Voorstel A · Almanak. De site verschijnt als een maandblad over de tuin:
// de voorpagina is het omslag van deze maand en wisselt elke maand vanzelf.
// Daarbinnen: inhoudsopgave, rubriek (vakken en prijzen), reportage (GR 001),
// kort (GR 002), column (Nick) en de achterkant (contact en colofon).

export const metadata: Metadata = { title: "Voorstel A · Almanak" }
export const revalidate = 3600

const GR001 = PROJECTEN[0]
const GR002 = PROJECTEN[1]

const groot = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

export default function Almanak() {
  const m = dezeMaand()
  const nr = String(m.nr).padStart(2, "0")
  const start = whatsappMet(`Hoi Nick, ik las de almanak van ${m.naam} en wil graag een project starten.`)

  const RUBRIEKEN = [
    { id: "rubriek", titel: "Rubriek · Wat ik doe", blz: "02" },
    { id: "reportage", titel: `Reportage · ${GR001.code}`, blz: "04" },
    { id: "kort", titel: `Kort · ${GR002.plaats}`, blz: "08" },
    { id: "column", titel: "Column · Nick Peters", blz: "10" },
    { id: "achterkant", titel: "Achterkant · Contact", blz: "12" },
  ]

  return (
    <div className="alm">
      <a href="#omslag" className="overslaan">Naar de inhoud</a>

      {/* Kopregel van het blad */}
      <header className="alm-kop">
        <div className="alm-kop-rij">
          <Link href="/almanak" className="alm-merk">GRØNN Studio</Link>
          <span className="alm-mono alm-kop-midden">Almanak voor de tuin</span>
          <span className="alm-mono">Nr. {nr} · {groot(m.naam)} {m.jaar}</span>
          <div className="alm-kop-acties">
            <Inhoud rubrieken={RUBRIEKEN} maand={m.naam} nr={nr} jaar={m.jaar} start={start} />
            <a href={start} className="alm-knop alm-knop-vol">Start een project</a>
          </div>
        </div>
      </header>

      <main>
        {/* Omslag */}
        <section id="omslag" className="alm-omslag" aria-labelledby="alm-maand">
          <h1 id="alm-maand" className="alm-maand" style={{ "--b": m.breedte } as CSSProperties}>
            <span className="sr-only">GRØNN Studio, almanak van </span>
            <span className="alm-maand-woord" aria-hidden="true">
              {[...groot(m.naam)].map((l, i) => <span key={i} style={{ "--i": i } as CSSProperties}>{l}</span>)}
            </span>
            <span className="sr-only">{m.naam} {m.jaar}</span>
          </h1>

          <div className="alm-omslag-raster">
            <div className="alm-deze-maand">
              <p className="alm-mono alm-label">Deze maand in de tuin</p>
              <ul>
                {m.werk.map((w) => <li key={w}>{w}</li>)}
              </ul>
              <p className="alm-omslag-zin">
                Ik ben Nick. Ik ontwerp, plant en leg tuinen en vijvers aan in Stein en omgeving.
              </p>
            </div>

            <figure className="alm-omslag-foto">
              <Foto beeld={BEELD.aanplant} verhouding="3 / 4" prioriteit sizes="(min-width: 900px) 30vw, 100vw" />
              <figcaption className="alm-mono">Omslag · Aanplant, {GR001.code}</figcaption>
            </figure>

            <nav className="alm-in-dit-nummer" aria-label="In dit nummer">
              <p className="alm-mono alm-label">In dit nummer</p>
              <ol>
                {RUBRIEKEN.map((r) => (
                  <li key={r.id}><a href={`#${r.id}`}><span>{r.titel}</span><span className="alm-mono">{r.blz}</span></a></li>
                ))}
              </ol>
              <p className="alm-prijs"><span className="alm-mono">Prijs</span> Vast, vooraf.</p>
            </nav>
          </div>
        </section>

        {/* Rubriek: vakken en prijzen */}
        <section id="rubriek" className="alm-sectie alm-rubriek alm-zie" aria-labelledby="alm-h-rubriek">
          <header className="alm-sectiekop">
            <p className="alm-mono">Blz. 02 · Rubriek</p>
            <h2 id="alm-h-rubriek">Wat ik doe, en wat het kost.</h2>
          </header>
          <ol className="alm-prijslijst">
            {VAKKEN.map((v) => (
              <li key={v.slug}>
                <Link href={`/${v.slug}`} className="alm-prijsregel">
                  <span className="alm-vak">{v.naam}</span>
                  <span className="alm-stippel" aria-hidden="true" />
                  <span className="alm-mono alm-bedrag">{v.prijs}</span>
                  <span className="alm-vak-zin">{v.zin}{v.prijsUitleg ? <em> {v.prijsUitleg}</em> : null}</span>
                </Link>
              </li>
            ))}
          </ol>
          <p className="alm-mono alm-voetnoot">Alle bedragen incl. btw. Wat niet blind te prijzen is, bekijk ik eerst ter plaatse.</p>
        </section>

        {/* Reportage: GR 001 */}
        <article id="reportage" className="alm-sectie alm-reportage" aria-labelledby="alm-h-rep">
          <header className="alm-rep-kop alm-zie">
            <p className="alm-mono">Blz. 04 · Reportage · {GR001.code} · {GR001.type} · {GR001.status}</p>
            <h2 id="alm-h-rep">{GR001.titel}</h2>
          </header>
          <div className="alm-rep-raster">
            <div className="alm-rep-tekst alm-zie">
              <p className="alm-initiaal">{GR001.samenvatting}</p>
              <p>{GR001.hoofdstukken[1].tekst[0]}</p>
              <aside className="alm-feiten" aria-label="Feiten">
                <p className="alm-mono alm-label">Feiten</p>
                <dl>
                  {GR001.feiten.slice(0, 6).map(([k, v]) => <div key={k}><dt className="alm-mono">{k}</dt><dd>{v}</dd></div>)}
                </dl>
              </aside>
              <Link href={`/werk/${GR001.slug}`} className="alm-verder">Lees de hele reportage →</Link>
            </div>
            <figure className="alm-rep-hoofd alm-zie">
              <Foto beeld={BEELD.waterval} verhouding="4 / 5" positie="38% 50%" sizes="(min-width: 900px) 50vw, 100vw" />
              <figcaption className="alm-mono">Fig. 1 · De waterval loopt via de beekloop terug naar vijver B.</figcaption>
            </figure>
          </div>
          <div className="alm-rep-reeks">
            {[
              { b: BEELD.sleuf, t: "Fig. 2 · De sleuf langs de haag, met twee leidingen.", v: "3 / 4" },
              { b: BEELD.kranen, t: "Fig. 3 · Kogelkranen: de verdeling blijft regelbaar.", v: "1 / 1" },
              { b: BEELD.nickRand, t: "Fig. 4 · Aan de vijverrand, tussen de keien.", v: "3 / 4" },
            ].map(({ b, t, v }) => (
              <figure key={b.src} className="alm-zie">
                <Foto beeld={b} verhouding={v} sizes="(min-width: 900px) 30vw, 100vw" />
                <figcaption className="alm-mono">{t}</figcaption>
              </figure>
            ))}
          </div>
        </article>

        {/* Kort: GR 002 */}
        <section id="kort" className="alm-sectie alm-kort alm-zie" aria-labelledby="alm-h-kort">
          <figure>
            <Foto beeld={BEELD.tegelpad} verhouding="3 / 4" sizes="(min-width: 900px) 28vw, 100vw" />
          </figure>
          <div>
            <p className="alm-mono">Blz. 08 · Kort · {GR002.code} · {GR002.plaats}, augustus {GR002.jaar}</p>
            <h2 id="alm-h-kort">{GR002.titel}</h2>
            <p>{GR002.samenvatting}</p>
            <Link href={`/werk/${GR002.slug}`} className="alm-verder">Het hele verhaal →</Link>
          </div>
        </section>

        {/* Column */}
        <section id="column" className="alm-sectie alm-column alm-zie" aria-labelledby="alm-h-col">
          <p className="alm-mono">Blz. 10 · Column</p>
          <h2 id="alm-h-col" className="sr-only">Column van Nick Peters</h2>
          <blockquote>
            <p>Ik denk in beelden, patronen en verbanden. Als ik naar een tuin kijk, zie ik hoe licht, water, materialen en beplanting elkaar beïnvloeden. Maar ik ben ook benieuwd naar wie er leeft. Waar drink je ’s ochtends je koffie? Waar spelen de kinderen? Juist die dagelijkse dingen geven richting aan wat ik maak.</p>
          </blockquote>
          <div className="alm-auteur">
            <Foto beeld={BEELD.portret} verhouding="1 / 1" positie="50% 30%" sizes="96px" className="alm-auteur-foto" />
            <p><strong>Nick Peters</strong><br /><span className="alm-mono">Hovenier en ecologisch ontwerper</span></p>
          </div>
          <Link href="/studio" className="alm-verder">Over de studio →</Link>
        </section>
      </main>

      {/* Achterkant */}
      <footer id="achterkant" className="alm-achterkant">
        <div className="alm-achter-boven">
          <p className="alm-mono">Blz. 12 · Achterkant</p>
          <p className="alm-volgend">Volgend nummer: {volgendeMaand()}.</p>
          <p className="alm-achter-zin">Tot dan, of eerder. Vertel wat er in jouw tuin speelt; ik kom kijken en je krijgt een vaste prijs vooraf.</p>
          <div className="alm-achter-acties">
            <a href={start} className="alm-knop alm-knop-vol">Start een project via WhatsApp</a>
            <a href={`mailto:${SITE.email}`} className="alm-knop alm-knop-lijn">{SITE.email}</a>
          </div>
        </div>
        <dl className="alm-colofon">
          <div><dt className="alm-mono">Uitgave</dt><dd>{SITE.naam}, {SITE.adres.straat}, {SITE.adres.postcode} {SITE.adres.plaats}</dd></div>
          <div><dt className="alm-mono">Redactie, ontwerp, aanleg</dt><dd>{SITE.eigenaar}</dd></div>
          <div><dt className="alm-mono">Verspreiding</dt><dd>Stein en ± 30 km</dd></div>
          <div><dt className="alm-mono">KVK · Btw</dt><dd>{SITE.kvk} · {SITE.btw}</dd></div>
          <div><dt className="alm-mono">Elders</dt><dd><a href={SITE.instagram}>Instagram</a> · <Link href="/privacy">Privacy</Link> · <Link href="/voorwaarden">Voorwaarden</Link></dd></div>
        </dl>
      </footer>

      {/* Telefoon: twee acties binnen duimbereik */}
      <div className="alm-duim">
        <Inhoud rubrieken={RUBRIEKEN} maand={m.naam} nr={nr} jaar={m.jaar} start={start} duim />
        <a href={start} className="alm-knop alm-knop-vol">Start een project</a>
      </div>
    </div>
  )
}
