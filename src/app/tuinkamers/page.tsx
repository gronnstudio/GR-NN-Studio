import type { Metadata } from "next"
import Link from "next/link"
import { Foto } from "@/components/foto"
import { BEELD } from "@/lib/beelden"
import { PROJECTEN } from "@/lib/projecten"
import { SITE, whatsappMet } from "@/lib/site"
import { VAKKEN } from "@/lib/vakken"
import { Kamers } from "./kamers"
import { KAMERS } from "./kamers-lijst"
import "./tuinkamers.css"

// Voorstel B · Tuinkamers. Een tuinontwerp is een reeks kamers met
// drempels. De site is antraciet; elke sectie is een crème opening met een
// eigen vorm (doorgang, horizon, binnenplaats, raam) die je binnenloopt.
// Aan het eind stap je naar buiten: het licht in, naar Start een project.

export const metadata: Metadata = { title: "Voorstel B · Tuinkamers" }

const vak = (slug: string) => VAKKEN.find((v) => v.slug === slug)!
const START = whatsappMet("Hoi Nick, ik wil graag een project starten in mijn tuin.")

function Drempel({ nr, naam }: { nr: string; naam: string }) {
  return (
    <div className="tk-drempel" aria-hidden="true">
      <span className="tk-mono">Kamer {nr}</span>
      <span className="tk-drempel-steen" />
      <span className="tk-mono">{naam}</span>
    </div>
  )
}

export default function Tuinkamers() {
  const [gr1, gr2] = PROJECTEN
  return (
    <div className="tk">
      <a href="#entree" className="overslaan">Naar de inhoud</a>

      <header className="tk-kop">
        <Link href="/tuinkamers" className="tk-merk" aria-label="GRØNN Studio">
          {/* eslint-disable-next-line @next/next/no-img-element -- svg-woordmerk */}
          <img src="/merk/woordmerk-primair.svg" alt="" width={112} height={24} />
        </Link>
        <nav aria-label="Kamers" className="tk-nav">
          <ul>
            {KAMERS.slice(1, 7).map((k) => <li key={k.id}><a href={`#${k.id}`}>{k.naam}</a></li>)}
          </ul>
        </nav>
        <a href={START} className="tk-knop tk-knop-vol tk-kop-start">Start een project</a>
      </header>

      <main>
        {/* 01 Entree */}
        <section id="entree" className="tk-entree" aria-labelledby="tk-h1">
          <div className="tk-entree-tekst">
            <p className="tk-mono tk-zacht">Kamer 01 · Entree</p>
            <h1 id="tk-h1" className="tk-h1">
              <span>Een tuin is</span> <span>een reeks</span> <span>kamers.</span>
            </h1>
            <p className="tk-lead">
              Ik ontwerp ze, kies wat erin groeit en leg ze zelf aan. Tuinontwerp, beplanting en aanleg in Stein en omgeving, met een vaste prijs vooraf.
            </p>
            <div className="tk-knoppen">
              <a href={START} className="tk-knop tk-knop-vol">Start een project</a>
              <a href="#ontwerp" className="tk-knop tk-knop-lijn">Loop verder</a>
            </div>
          </div>
          <figure className="tk-opening tk-opening-entree">
            <div className="tk-opening-beeld">
              <Foto beeld={BEELD.beekloop} verhouding="3 / 4" prioriteit sizes="(min-width: 900px) 38vw, 100vw" />
            </div>
            <figcaption className="tk-mono">Doorkijk · {gr1.code}, de beekloop in aanbouw</figcaption>
          </figure>
        </section>

        {/* 02 Ontwerp: horizon */}
        <Drempel nr="02" naam="Ontwerp" />
        <section id="ontwerp" className="tk-kamer tk-ontwerp" aria-labelledby="tk-h-ontwerp">
          <figure className="tk-opening tk-opening-horizon tk-zie">
            <div className="tk-opening-beeld">
              <Foto beeld={BEELD.overzicht} verhouding="21 / 9" positie="50% 62%" sizes="100vw" />
            </div>
          </figure>
          <div className="tk-kamer-tekst tk-twee">
            <h2 id="tk-h-ontwerp" className="tk-h2">Waar drink je ’s ochtends je koffie?</h2>
            <div>
              <p>Juist die dagelijkse dingen geven richting aan het ontwerp: waar de zon valt, waar de kinderen spelen, waar je na een drukke dag tot rust komt. {vak("tuinontwerp").zin}</p>
              <p className="tk-prijs"><span className="tk-mono">Tuinontwerp</span> {vak("tuinontwerp").prijs}</p>
            </div>
          </div>
        </section>

        {/* 03 Beplanting: binnenplaats (een lichte kamer) */}
        <Drempel nr="03" naam="Beplanting" />
        <section id="beplanting" className="tk-kamer" aria-labelledby="tk-h-beplanting">
          <div className="tk-binnenplaats tk-zie">
            <div className="tk-opening-beeld">
              <Foto beeld={BEELD.aanplant} verhouding="4 / 5" sizes="(min-width: 900px) 40vw, 100vw" />
            </div>
            <div className="tk-binnenplaats-tekst">
              <p className="tk-mono">Binnenplaats</p>
              <h2 id="tk-h-beplanting" className="tk-h2">Wat erin groeit, past bij de grond en het licht.</h2>
              <p>{vak("beplanting").zin}</p>
              <p className="tk-prijs"><span className="tk-mono">Beplanting</span> {vak("beplanting").prijs}</p>
            </div>
          </div>
        </section>

        {/* 04 Aanleg: doorgang */}
        <Drempel nr="04" naam="Aanleg" />
        <section id="aanleg" className="tk-kamer tk-aanleg" aria-labelledby="tk-h-aanleg">
          <div className="tk-kamer-tekst">
            <h2 id="tk-h-aanleg" className="tk-h2">De ondergrond bepaalt het resultaat.</h2>
            <p>{vak("aanleg").zin} Ontgraven, ophogen, verdichten, afrijen, banden stellen, opnieuw controleren. Pas dan de tegels.</p>
            <p className="tk-prijs"><span className="tk-mono">Aanleg</span> {vak("aanleg").prijs}</p>
          </div>
          <figure className="tk-opening tk-opening-doorgang tk-zie">
            <div className="tk-opening-beeld">
              <Foto beeld={BEELD.tegelpad} verhouding="2 / 5" positie="50% 60%" sizes="(min-width: 900px) 24vw, 60vw" />
            </div>
            <figcaption className="tk-mono">{gr2.code} · {gr2.plaats}: het pad langs de gevel</figcaption>
          </figure>
        </section>

        {/* 05 Water: een opening die het hele scherm vult */}
        <Drempel nr="05" naam="Water" />
        <section id="water" className="tk-kamer tk-water" aria-labelledby="tk-h-water">
          <figure className="tk-opening tk-opening-vol">
            <div className="tk-opening-beeld">
              <Foto beeld={BEELD.waterval} verhouding="16 / 9" positie="40% 50%" sizes="100vw" />
            </div>
          </figure>
          <div className="tk-kamer-tekst tk-twee">
            <h2 id="tk-h-water" className="tk-h2">Water dat zijn weg vindt.</h2>
            <div>
              <p>{vak("vijvers").zin} Daarna onderhoud: voorjaar opstarten, najaar afsluiten.</p>
              <dl className="tk-prijzen">
                <div><dt className="tk-mono">Vijverdoorlichting</dt><dd>€ 195</dd></div>
                <div><dt className="tk-mono">Renovatie of aanleg</dt><dd>{vak("vijvers").prijs}</dd></div>
                <div><dt className="tk-mono">Onderhoud</dt><dd>{vak("onderhoud").prijs}</dd></div>
              </dl>
            </div>
          </div>
        </section>

        {/* 06 Werk: twee deuren */}
        <Drempel nr="06" naam="Werk" />
        <section id="werk" className="tk-kamer" aria-labelledby="tk-h-werk">
          <h2 id="tk-h-werk" className="tk-h2 tk-werk-kop">Kamers die er al staan.</h2>
          <ul className="tk-deuren">
            {[gr1, gr2].map((p, i) => (
              <li key={p.slug} className="tk-zie">
                <Link href={`/werk/${p.slug}`} className="tk-deur">
                  <div className="tk-opening">
                    <div className="tk-opening-beeld">
                      <Foto beeld={i === 0 ? BEELD.waterval : BEELD.terras} verhouding="3 / 5" positie={i === 0 ? "35% 50%" : "50% 50%"} sizes="(min-width: 900px) 30vw, 100vw" />
                    </div>
                  </div>
                  <p className="tk-mono tk-zacht">{p.code} · {p.type}{p.plaats ? ` · ${p.plaats}` : ""} · {p.status}</p>
                  <h3 className="tk-h3">{p.titel}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* 07 Studio: een klein raam */}
        <Drempel nr="07" naam="Studio" />
        <section id="studio" className="tk-kamer tk-studio" aria-labelledby="tk-h-studio">
          <figure className="tk-opening tk-opening-raam tk-zie">
            <div className="tk-opening-beeld">
              <Foto beeld={BEELD.portret} verhouding="1 / 1" positie="50% 28%" sizes="(min-width: 900px) 22vw, 60vw" />
            </div>
          </figure>
          <div className="tk-kamer-tekst">
            <h2 id="tk-h-studio" className="tk-h2">Eén persoon, van eerste gesprek tot laatste plant.</h2>
            <p>GRØNN Studio is Nick Peters, hovenier en ecologisch ontwerper uit Stein. Ik denk in beelden, patronen en verbanden, en ik maak het zelf.</p>
            <Link href="/studio" className="tk-link">Over de studio →</Link>
          </div>
        </section>

        {/* Naar buiten */}
        <section id="buiten" className="tk-buiten" aria-labelledby="tk-h-buiten">
          <p className="tk-mono">Naar buiten</p>
          <h2 id="tk-h-buiten" className="tk-buiten-kop">Welke kamer mist er in jouw tuin?</h2>
          <p className="tk-buiten-zin">Vertel wat je ziet en wat je wilt. Ik kom kijken; waar het kan krijg je een vaste prijs vooraf.</p>
          <div className="tk-knoppen">
            <a href={START} className="tk-knop tk-knop-donker">Start een project via WhatsApp</a>
            <a href={`mailto:${SITE.email}`} className="tk-knop tk-knop-lijn-donker">{SITE.email}</a>
          </div>
        </section>
      </main>

      <footer className="tk-voet">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element -- svg-woordmerk */}
          <img src="/merk/woordmerk-primair.svg" alt="GRØNN Studio" width={112} height={24} />
          <p className="tk-zacht">{SITE.adres.straat}<br />{SITE.adres.postcode} {SITE.adres.plaats}</p>
        </div>
        <ul>
          <li><a href={SITE.whatsapp}>WhatsApp</a></li>
          <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
          <li><a href={SITE.instagram}>Instagram</a></li>
        </ul>
        <p className="tk-mono tk-zacht tk-voet-onder">
          <span>KVK {SITE.kvk}</span><span>Btw {SITE.btw}</span><Link href="/privacy">Privacy</Link><Link href="/voorwaarden">Voorwaarden</Link>
        </p>
      </footer>

      <div className="tk-duim">
        <Kamers />
        <a href={START} className="tk-knop tk-knop-vol">Start een project</a>
      </div>
    </div>
  )
}
