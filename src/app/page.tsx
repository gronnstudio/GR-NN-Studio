import type { CSSProperties } from "react"
import { Foto } from "@/components/foto"
import { DAGDELEN, NU_SCRIPT, type DagdeelId } from "@/lib/dag"
import { FOTO } from "@/lib/fotos"
import { SITE, whatsappMet } from "@/lib/site"
import { Klok, NaarNu, Naald } from "./nu"
import "./dag.css"

// Voorpagina · Een tuin voor de hele dag. De pagina volgt één dag in de
// tuin; elk dagdeel draagt de vakken die bij dat moment horen. Bovenaan
// staat de dag als strook, waarin het dagdeel van nu het breedst is.

const GESPREK = whatsappMet("Hoi Nick, ik wil graag een gratis kennismakingsgesprek over mijn tuin.")
const deel = (id: DagdeelId) => DAGDELEN.find((d) => d.id === id)!

// De zeven vakken, elk bij het dagdeel waar het thuishoort.
const VAKKEN: { naam: string; deel: DagdeelId | "poort" }[] = [
  { naam: "Tuinontwerp en ruimtelijke indeling", deel: "ochtend" },
  { naam: "Aanleg en bestrating", deel: "ochtend" },
  { naam: "Materiaal en detaillering", deel: "ochtend" },
  { naam: "Beplantingsplannen en borders", deel: "middag" },
  { naam: "Water en vijvers", deel: "avond" },
  { naam: "Renovaties", deel: "avond" },
  { naam: "Advies en kennismaking", deel: "poort" },
]

function Vakken({ id }: { id: DagdeelId }) {
  const v = deel(id).vakken
  if (!v.length) return null
  return (
    <ul className="dag-vakken">
      {v.map((x) => <li key={x.naam}><span>{x.naam}</span><span className="dag-mono">{x.prijs}</span></li>)}
    </ul>
  )
}

function Kop({ id }: { id: DagdeelId }) {
  const d = deel(id)
  return (
    <>
      <p className="dag-tijd" aria-hidden="true">{d.tijd}</p>
      <p className="dag-mono dag-zacht">{d.moment}</p>
      <h2 id={`h-${id}`} className="dag-h2">{d.kop}</h2>
      <p className="dag-zin">{d.zin}</p>
    </>
  )
}

export default function DeDag() {
  return (
    <div className="dag">
      <script dangerouslySetInnerHTML={{ __html: NU_SCRIPT }} />
      <a href="#inhoud" className="overslaan">Naar de inhoud</a>

      <header className="dag-kop">
        <a href="#" className="dag-merk" aria-label="GRØNN Studio, naar boven">
          {/* eslint-disable-next-line @next/next/no-img-element -- svg-woordmerk */}
          <img src="/merk/woordmerk-antraciet.svg" alt="" width={112} height={24} />
        </a>
        <Klok className="dag-mono dag-zacht dag-klok" />
        <nav aria-label="Hoofdmenu" className="dag-nav">
          <ul>
            <li><NaarNu>De dag</NaarNu></li>
            <li><a href="#vakken">Vakken</a></li>
            <li><a href="#nick">Nick</a></li>
          </ul>
        </nav>
        <a href="#poort" className="dag-knop dag-kop-knop">Kennismaken</a>
      </header>

      <main id="inhoud">
        {/* Opening: de dag als strook */}
        <section className="dag-opening" aria-labelledby="h1">
          <h1 id="h1" className="dag-h1">Een tuin voor de hele dag.</h1>
          <div className="dag-opening-onder">
            <p className="dag-lead">Waar drink je ’s ochtends je koffie? Waar spelen de kinderen? En waar kom je na een drukke dag tot rust? Juist die dagelijkse dingen geven richting aan wat ik maak.</p>
            <p className="dag-mono dag-zacht dag-wie">Tuinontwerp, beplanting, aanleg en water<br />Stein en omgeving · {SITE.naam}</p>
          </div>
          <ol className="dag-strook" aria-label="De dag in vier delen">
            {DAGDELEN.map((d, i) => (
              <li key={d.id} className={`dag-uur dag-uur-${d.id}`} style={{ "--i": i } as CSSProperties}>
                <a href={`#${d.id}`}>
                  <Foto beeld={d.strookFoto} sizes="(min-width: 900px) 50vw, 100vw" prioriteit={i === 0} className="dag-uur-foto" />
                  <Naald />
                  <span className="dag-uur-tekst">
                    <span className="dag-mono">{String(d.van).padStart(2, "0")}:00 – {String(d.tot).padStart(2, "0")}:00</span>
                    <span className="dag-uur-naam">{d.strook}</span>
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </section>

        {/* Ochtend */}
        <section id="ochtend" className="dag-deel dag-ochtend" aria-labelledby="h-ochtend">
          <div className="dag-tekst dag-zie"><Kop id="ochtend" /><Vakken id="ochtend" /></div>
          <figure className="dag-f1 dag-zie">
            <Foto beeld={FOTO.terrasNick} verhouding="4 / 5" positie="50% 35%" sizes="(min-width: 900px) 40vw, 100vw" />
            <figcaption className="dag-mono dag-zacht">Geulle · 24 m² terras, gelegd in twee dagen</figcaption>
          </figure>
          <figure className="dag-f2 dag-zie"><Foto beeld={FOTO.terrasPad} verhouding="3 / 4" sizes="(min-width: 900px) 18vw, 60vw" /></figure>
          <figure className="dag-f3 dag-zie">
            <Foto beeld={FOTO.klinkers} verhouding="1 / 1" sizes="(min-width: 900px) 18vw, 40vw" />
            <figcaption className="dag-mono dag-zacht">Klinkers in visgraat</figcaption>
          </figure>
        </section>

        {/* Middag */}
        <section id="middag" className="dag-deel dag-middag" aria-labelledby="h-middag">
          <figure className="dag-f1 dag-zie"><Foto beeld={FOTO.handen} verhouding="3 / 4" sizes="(min-width: 900px) 30vw, 100vw" /></figure>
          <div className="dag-tekst dag-zie"><Kop id="middag" /><Vakken id="middag" /></div>
          <figure className="dag-f2 dag-zie">
            <Foto beeld={FOTO.plukborder} verhouding="16 / 10" sizes="(min-width: 900px) 58vw, 100vw" />
            <figcaption className="dag-mono dag-zacht">Plukborder</figcaption>
          </figure>
          <figure className="dag-f3 dag-zie">
            <Foto beeld={FOTO.eetbaar} verhouding="4 / 5" positie="40% 50%" sizes="(min-width: 900px) 28vw, 60vw" />
            <figcaption className="dag-mono dag-zacht">Eetbare border</figcaption>
          </figure>
        </section>

        {/* Avond */}
        <section id="avond" className="dag-deel dag-avond" aria-labelledby="h-avond">
          <figure className="dag-f1 dag-zie"><Foto beeld={FOTO.vijver} verhouding="21 / 9" positie="50% 60%" sizes="100vw" /></figure>
          <div className="dag-tekst dag-zie"><Kop id="avond" /><Vakken id="avond" /></div>
          <figure className="dag-f2 dag-zie">
            <Foto beeld={FOTO.witteBorder} verhouding="3 / 4" sizes="(min-width: 900px) 18vw, 50vw" />
            <figcaption className="dag-mono dag-zacht">’s Avonds licht het op</figcaption>
          </figure>
          <figure className="dag-f3 dag-zie"><Foto beeld={FOTO.lamp} verhouding="3 / 4" positie="40% 50%" sizes="(min-width: 900px) 18vw, 50vw" /></figure>
        </section>

        {/* Nacht */}
        <section id="nacht" className="dag-deel dag-nacht" aria-labelledby="h-nacht">
          <figure className="dag-f1 dag-zie">
            <Foto beeld={FOTO.honingzwam} verhouding="4 / 5" sizes="(min-width: 900px) 40vw, 100vw" />
            <figcaption className="dag-mono dag-zacht">Honingzwam op een oude stronk</figcaption>
          </figure>
          <div className="dag-tekst dag-zie"><Kop id="nacht" /></div>
          <figure className="dag-f2 dag-zie"><Foto beeld={FOTO.zwammen} verhouding="3 / 4" sizes="(min-width: 900px) 22vw, 60vw" /></figure>
        </section>

        {/* De zeven vakken op een rij */}
        <section id="vakken" className="dag-rij" aria-labelledby="h-vakken">
          <p className="dag-mono dag-zacht">Op een rij</p>
          <h2 id="h-vakken" className="dag-h2">Wat ik doe, van ochtend tot nacht.</h2>
          <ol className="dag-index">
            {VAKKEN.map((v, i) => (
              <li key={v.naam}>
                <a href={`#${v.deel}`}>
                  <span className="dag-mono dag-zacht">{String(i + 1).padStart(2, "0")}</span>
                  <span className="dag-index-naam">{v.naam}</span>
                  <span className="dag-mono dag-zacht">{v.deel === "poort" ? "altijd" : v.deel}</span>
                </a>
              </li>
            ))}
          </ol>
        </section>

        {/* Nick */}
        <section id="nick" className="dag-nick" aria-labelledby="h-nick">
          <figure className="dag-zie"><Foto beeld={FOTO.nick} verhouding="3 / 4" positie="50% 30%" sizes="(min-width: 900px) 32vw, 100vw" /></figure>
          <div className="dag-zie">
            <p className="dag-mono dag-zacht">De hele dag · één persoon</p>
            <h2 id="h-nick" className="dag-h2">Van het eerste gesprek tot de laatste plant.</h2>
            <p>Ik ben Nick Peters. Vader van twee kinderen, hovenier, ecologisch ontwerper en de persoon achter GRØNN Studio.</p>
            <p>Ik denk in beelden, patronen en verbanden. Als ik naar een tuin kijk, zie ik hoe licht, water, materialen en beplanting elkaar beïnvloeden. Maar ik ben ook benieuwd naar wie er leeft.</p>
          </div>
        </section>

        {/* De poort */}
        <section id="poort" className="dag-poort" aria-labelledby="h-poort">
          <p className="dag-mono dag-zacht">Bij de poort · gratis gesprek</p>
          <h2 id="h-poort" className="dag-poort-kop">Vertel waar je aan denkt. Ik kom kijken.</h2>
          <div className="dag-knoppen">
            <a href={GESPREK} className="dag-knop">Plan een gratis gesprek</a>
            <a href={`mailto:${SITE.email}`} className="dag-knop dag-knop-lijn">{SITE.email}</a>
            <a href={SITE.telefoonHref} className="dag-knop dag-knop-lijn">{SITE.telefoon}</a>
          </div>
          <p className="dag-mono dag-zacht">Werkgebied: {SITE.werkgebied}</p>
        </section>
      </main>

      <footer className="dag-voet dag-mono dag-zacht">
        <span>{SITE.adres.straat} · {SITE.adres.postcode} {SITE.adres.plaats}</span>
        <span>KVK {SITE.kvk} · Btw {SITE.btw}</span>
        <a href={SITE.instagram}>Instagram</a>
      </footer>

      <div className="dag-duim">
        <NaarNu className="dag-knop dag-knop-lijn">De dag</NaarNu>
        <a href="#poort" className="dag-knop">Kennismaken</a>
      </div>
    </div>
  )
}
