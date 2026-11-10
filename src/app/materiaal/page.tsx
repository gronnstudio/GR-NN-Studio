import type { CSSProperties } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { Foto } from "@/components/foto"
import { BEELD, STAAL, type Beeld } from "@/lib/beelden"
import { PROJECTEN } from "@/lib/projecten"
import { SITE, whatsappMet } from "@/lib/site"
import { VAKKEN } from "@/lib/vakken"
import { Staalkaart } from "./staalkaart"
import { Wat } from "./wat"
import "./materiaal.css"

// Voorstel C · Materiaal. Elke tuin begint bij wat er ligt en wat erin komt.
// De site is een stalenboek: materialen als uitsneden van echte foto's, met
// de echte specificatie erbij. Vakken als specificatie, projecten als bestek.

export const metadata: Metadata = { title: "Voorstel C · Materiaal" }

type Staal = { id: keyof typeof STAAL; woord: string; spec: string }

// Uitsneden van echte projectfoto's; de specificaties staan in de dossiers.
const STALEN: Staal[] = [
  { id: "kei", woord: "Kei.", spec: "Kei op vijverfolie · GR / 001" },
  { id: "grind", woord: "Grind.", spec: "Grind in plantmand · GR / 001" },
  { id: "beton", woord: "Beton.", spec: "Tegel 60 × 60 × 4 cm · GR / 002" },
  { id: "folie", woord: "Folie.", spec: "Vijverfolie, op maat · GR / 001" },
  { id: "water", woord: "Water.", spec: "Ca. 5.000 liter · GR / 001" },
  { id: "plant", woord: "Plant.", spec: "Canna bij de waterval · GR / 001" },
]

// Wat er per vak in het werk gaat; afgeleid van wat in de dossiers staat.
const MATERIAAL: Record<string, string> = {
  tuinontwerp: "Plan op papier, materialenlijst, beplantingsplan",
  beplanting: "Planten passend bij grond en licht, inbegrepen",
  aanleg: "Zandbed, opsluitbanden, tegels of klinkers",
  vijvers: "Vijverfolie, 50 mm druk-pvc, filter, kei",
  onderhoud: "Bladnet, filterreiniging, slib eruit",
}

const BESTEK_001: { beeld: Beeld; code: string; naam: string }[] = [
  { beeld: BEELD.folie, code: "M01", naam: "Vijverfolie, op maat gemeten" },
  { beeld: BEELD.sleuf, code: "M02", naam: "Twee leidingen in de sleuf" },
  { beeld: BEELD.kranen, code: "M03", naam: "Druk-pvc 50 mm, kogelkranen" },
  { beeld: BEELD.filter, code: "M04", naam: "Filterbak, drie kamers" },
  { beeld: BEELD.slib, code: "M05", naam: "Slib uit het filter" },
  { beeld: BEELD.aanplant, code: "M06", naam: "Plantmand met grind" },
]

const START = whatsappMet("Hoi Nick, ik wil graag een project starten in mijn tuin.")

export default function Materiaal() {
  const [gr1, gr2] = PROJECTEN
  return (
    <div className="mt">
      <a href="#stalen" className="overslaan">Naar de inhoud</a>

      <header className="mt-kop">
        <Link href="/materiaal" className="mt-merk" aria-label="GRØNN Studio">
          {/* eslint-disable-next-line @next/next/no-img-element -- svg-woordmerk */}
          <img src="/merk/woordmerk-antraciet.svg" alt="" width={112} height={24} />
        </Link>
        <nav aria-label="Hoofdmenu" className="mt-nav">
          <ul>
            <li><a href="#vakken">Vakken</a></li>
            <li><a href="#bestek">Bestek</a></li>
            <li><a href="#maker">Maker</a></li>
          </ul>
        </nav>
        <a href={START} className="mt-knop mt-knop-vol mt-kop-start">Start een project</a>
      </header>

      <main>
        {/* Stalen */}
        <section id="stalen" className="mt-stalen" aria-labelledby="mt-h1">
          <h1 id="mt-h1" className="mt-woorden">
            <span className="sr-only">GRØNN Studio: tuinontwerp, beplanting en aanleg vanaf het materiaal. </span>
            {STALEN.map((s, i) => (
              <a key={s.id} href={`#staal-${s.id}`} className="mt-woord" data-m={s.id} style={{ "--i": i } as CSSProperties}>
                <span>{s.woord}</span>
              </a>
            ))}
          </h1>
          <ul className="mt-staalkaart" aria-label="Stalen">
            {STALEN.map((s) => (
              <li key={s.id} id={`staal-${s.id}`} className="mt-staal" data-m={s.id}>
                <Foto beeld={STAAL[s.id]} verhouding="1 / 1" sizes="(min-width: 900px) 34vw, 100vw" prioriteit={s.id === "kei"} />
                <p className="mt-mono mt-staal-label">{s.spec}</p>
              </li>
            ))}
          </ul>
          <div className="mt-stalen-onder">
            <p className="mt-lead">Elke tuin begint bij wat er al ligt en wat erin komt. Ik ontwerp, plant en leg aan in Stein en omgeving, met een vaste prijs vooraf.</p>
            <div className="mt-knoppen">
              <a href={START} className="mt-knop mt-knop-vol">Start een project</a>
              <a href="#vakken" className="mt-knop mt-knop-lijn">Bekijk de vakken</a>
            </div>
          </div>
        </section>

        {/* Vakken als specificatie */}
        <section id="vakken" className="mt-sectie mt-zie" aria-labelledby="mt-h-vakken">
          <div className="mt-sectiekop">
            <p className="mt-mono mt-zacht">Specificatie</p>
            <h2 id="mt-h-vakken" className="mt-h2">Wat ik doe, waarmee, en wat het kost.</h2>
          </div>
          <div className="mt-spec" role="table" aria-label="Vakken">
            <div className="mt-spec-kop mt-mono" role="row">
              <span role="columnheader">Vak</span><span role="columnheader">Wat</span><span role="columnheader">Materiaal</span><span role="columnheader">Prijs</span>
            </div>
            {VAKKEN.map((v, i) => (
              <Link key={v.slug} href={`/${v.slug}`} className="mt-spec-rij" role="row">
                <span role="cell" className="mt-spec-vak"><span className="mt-mono mt-zacht">{String(i + 1).padStart(2, "0")}</span>{v.naam}</span>
                <span role="cell" className="mt-spec-wat">{v.zin}</span>
                <span role="cell" className="mt-spec-mat mt-mono">{MATERIAAL[v.slug]}</span>
                <span role="cell" className="mt-spec-prijs">{v.prijs}</span>
              </Link>
            ))}
          </div>
          <p className="mt-mono mt-zacht mt-voetnoot">Bedragen incl. btw · wat niet blind te prijzen is, bekijk ik eerst ter plaatse</p>
        </section>

        {/* Bestek GR 001 */}
        <section id="bestek" className="mt-sectie mt-bestek" aria-labelledby="mt-h-bestek">
          <div className="mt-bestek-tekst mt-zie">
            <p className="mt-mono mt-zacht">Bestek · {gr1.code} · {gr1.type} · {gr1.status}</p>
            <h2 id="mt-h-bestek" className="mt-h2">{gr1.titel}</h2>
            <p>{gr1.samenvatting}</p>
            <dl className="mt-feiten">
              {gr1.feiten.slice(0, 7).map(([k, v]) => <div key={k}><dt className="mt-mono">{k}</dt><dd>{v}</dd></div>)}
            </dl>
            <Link href={`/werk/${gr1.slug}`} className="mt-link">Het hele bestek →</Link>
          </div>
          <ol className="mt-bestek-stalen" aria-label="Materialen in GR / 001">
            {BESTEK_001.map((m) => (
              <li key={m.code} className="mt-zie">
                <Foto beeld={m.beeld} verhouding="4 / 5" sizes="(min-width: 900px) 18vw, 60vw" />
                <p className="mt-mono"><span className="mt-zacht">{m.code}</span> {m.naam}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* GR 002: een plaat beton */}
        <section className="mt-plaat mt-zie" aria-labelledby="mt-h-002">
          <Foto beeld={BEELD.terras} verhouding="4 / 5" sizes="(min-width: 900px) 34vw, 100vw" className="mt-plaat-foto" />
          <div className="mt-plaat-tekst">
            <p className="mt-mono mt-zacht-licht">Bestek · {gr2.code} · {gr2.type} · {gr2.plaats}</p>
            <h2 id="mt-h-002" className="mt-h2">{gr2.titel}</h2>
            <dl className="mt-feiten mt-feiten-licht">
              {gr2.feiten.slice(0, 5).map(([k, v]) => <div key={k}><dt className="mt-mono">{k}</dt><dd>{v}</dd></div>)}
            </dl>
            <Link href={`/werk/${gr2.slug}`} className="mt-link">Het hele bestek →</Link>
          </div>
        </section>

        {/* Maker */}
        <section id="maker" className="mt-sectie mt-maker mt-zie" aria-labelledby="mt-h-maker">
          <Foto beeld={BEELD.nickRand} verhouding="4 / 5" sizes="(min-width: 900px) 30vw, 100vw" className="mt-maker-foto" />
          <div className="mt-maker-tekst">
            <p className="mt-mono mt-zacht">Maker</p>
            <h2 id="mt-h-maker" className="mt-h2">Met mijn handen in het materiaal.</h2>
            <p>Ik ben Nick Peters, hovenier en ecologisch ontwerper uit Stein. Met mijn vader verbouwde ik huizen; daar leerde ik werken met mijn handen, oplossingen zoeken en doorzetten wanneer iets anders loopt dan bedacht.</p>
            <Link href="/studio" className="mt-link">Over de studio →</Link>
          </div>
        </section>

        {/* Start vanuit het materiaal */}
        <section id="start" className="mt-sectie mt-start" aria-labelledby="mt-h-start">
          <h2 id="mt-h-start" className="mt-h2 mt-start-kop">Wat ligt er nu in je tuin?</h2>
          <Wat />
        </section>
      </main>

      <footer className="mt-voet">
        <dl className="mt-feiten mt-feiten-licht">
          <div><dt className="mt-mono">Studio</dt><dd>{SITE.naam}, {SITE.adres.straat}, {SITE.adres.postcode} {SITE.adres.plaats}</dd></div>
          <div><dt className="mt-mono">Contact</dt><dd><a href={SITE.whatsapp}>WhatsApp</a> · <a href={`mailto:${SITE.email}`}>{SITE.email}</a></dd></div>
          <div><dt className="mt-mono">Werkgebied</dt><dd>Stein en ± 30 km</dd></div>
          <div><dt className="mt-mono">KVK · Btw</dt><dd>{SITE.kvk} · {SITE.btw}</dd></div>
          <div><dt className="mt-mono">Elders</dt><dd><a href={SITE.instagram}>Instagram</a> · <Link href="/privacy">Privacy</Link> · <Link href="/voorwaarden">Voorwaarden</Link></dd></div>
        </dl>
      </footer>

      <div className="mt-duim">
        <Staalkaart />
        <a href={START} className="mt-knop mt-knop-vol">Start een project</a>
      </div>
    </div>
  )
}
