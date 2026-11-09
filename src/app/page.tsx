import type { CSSProperties } from "react"
import Link from "next/link"
import { Foto, type Haak } from "@/components/beeld"
import { Sectiekop } from "@/components/sectiekop"
import { BEELD } from "@/lib/beelden"
import { DIENSTEN } from "@/lib/diensten"
import { PROJECTEN } from "@/lib/projecten"
import { SITE } from "@/lib/site"
import "./home.css"

// De voorpagina. Zes delen, elk met een eigen compositie: opening, wat ik
// doe, wat ik zie (plaat), uitgevoerd werk, hoe het gaat, wie ik ben.

const KOP = ["Eerst water,", "bodem en licht.", "Dan pas de planten."]

const AANPLANT: Haak[] = [
  { x: 37, y: 41, b: 17, h: 11, label: "Jonge vijverplant", kern: true },
  { x: 70, y: 70, b: 27, h: 24, label: "Grind in de mand", onder: true },
]

// Wat Nick ziet bij de waterval: alleen wat op de foto staat.
const OBSERVATIE: (Haak & { uitleg: string })[] = [
  { x: 35, y: 24, b: 12, h: 16, nr: "01", label: "Instroom", uitleg: "Vallend water neemt zuurstof mee de vijver in.", kern: true },
  { x: 62, y: 50, b: 17, h: 14, nr: "02", label: "Mos op steen", uitleg: "Vocht en schaduw: deze plek is al stabiel." },
  { x: 4, y: 3, b: 15, h: 9, nr: "03", label: "Oeverplant", uitleg: "Wortels nemen voeding uit het water.", onder: true },
  { x: 80, y: 27, b: 17, h: 15, nr: "04", label: "Kogelkraan", uitleg: "De stroming blijft regelbaar.", onder: true },
  { x: 3, y: 78, b: 34, h: 19, nr: "05", label: "Ondiepe zone", uitleg: "Warmt snel op en wordt het eerst bewoond." },
]

const STAPPEN = [
  { kop: "Je vertelt wat je ziet", tekst: "Via het formulier, WhatsApp of mail. Een paar foto’s helpen." },
  { kop: "Ik kom kijken", tekst: "Op locatie: water, bodem, licht, wat er al groeit en wat je wilt." },
  { kop: "Een vaste prijs vooraf", tekst: "Waar het kan. Wat niet blind te prijzen is, zeg ik eerlijk." },
  { kop: "Ik doe het zelf", tekst: "Van het eerste gesprek tot de laatste plant: één persoon." },
]

export default function Voorpagina() {
  return (
    <>
      {/* 00 Opening */}
      <section className="opening rand" aria-labelledby="kop">
        <p className="opening-regel t-mono t-zacht vervaag">
          <span>Vijvers en natuurlijke tuinen</span>
          <span>Stein · 50,97° N 5,77° O</span>
        </p>
        <h1 id="kop" className="t-display opening-kop">
          {KOP.map((r, i) => (
            <span key={r} className="masker"><span style={{ "--i": i } as CSSProperties}>{r}</span></span>
          ))}
        </h1>
        <div className="opening-onder">
          <figure className="opening-beeld">
            <Foto beeld={BEELD.aanplant} verhouding="4 / 5" prioriteit sizes="(min-width: 768px) 36vw, 100vw" haken={AANPLANT} />
            <figcaption className="bijschrift t-mono"><span>GR / 001</span><span>Aanplant, vijverrenovatie</span></figcaption>
          </figure>
          <div className="opening-tekst">
            <p className="t-lead">
              Ik ben Nick. Ik ontwerp, maak en onderhoud vijvers en natuurlijke tuinen voor huiseigenaren in Stein en omgeving, met een vaste prijs vooraf.
            </p>
            <div className="knoppen">
              <Link href="/kennismaken" className="knop knop-vol">Kennismaken</Link>
              <a href={SITE.whatsapp} className="knop knop-lijn">WhatsApp</a>
            </div>
            <dl className="feiten">
              <div><dt className="t-mono">Werkgebied</dt><dd>Stein + ± 30 km</dd></div>
              <div><dt className="t-mono">Prijs</dt><dd>Vast, vooraf</dd></div>
              <div><dt className="t-mono">Wie</dt><dd>Eén persoon, begin tot eind</dd></div>
            </dl>
          </div>
        </div>
      </section>

      {/* 01 Wat ik doe */}
      <section className="sectie rand zie" aria-labelledby="h-doe">
        <Sectiekop nr="01" id="h-doe">Wat ik doe</Sectiekop>
        <ol className="index">
          {DIENSTEN.map((d, i) => (
            <li key={d.slug}>
              <Link href={`/${d.slug}`} className="index-regel">
                <span className="t-mono t-zacht index-nr">{String(i + 1).padStart(2, "0")}</span>
                <span className="index-naam">{d.naam}</span>
                <span className="index-delen t-mono t-zacht">{d.onderdelen.map((o) => o.naam).join(" · ")}</span>
                <span className="index-zin">{d.kop.join(" ")}</span>
                <span className="index-pijl" aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      {/* 02 Wat ik zie */}
      <section className="plaat observatie" aria-labelledby="h-zie">
        <div className="rand observatie-binnen">
          <div className="observatie-tekst zie">
            <Sectiekop nr="02" id="h-zie">Wat ik zie als ik naar een vijver kijk.</Sectiekop>
            <p className="t-zacht t-tekst">
              Voordat ik iets ontwerp, kijk ik waar het water vandaan komt, waar het warm wordt en wat er al groeit. Vijf dingen op één foto van de waterval in GR / 001.
            </p>
            <ol className="observatie-lijst">
              {OBSERVATIE.map((o) => (
                <li key={o.label}>
                  <span className="t-mono t-accent">{o.nr}</span>
                  <span><strong>{o.label}</strong> {o.uitleg}</span>
                </li>
              ))}
            </ol>
          </div>
          <figure className="observatie-beeld">
            <Foto beeld={BEELD.waterval} sizes="(min-width: 1024px) 58vw, 100vw" haken={OBSERVATIE} />
            <figcaption className="bijschrift t-mono"><span>Observatie 001</span><span>Waterval, GR / 001</span></figcaption>
          </figure>
        </div>
      </section>

      {/* 03 Uitgevoerd werk */}
      <section className="sectie rand" aria-labelledby="h-werk">
        <div className="zie"><Sectiekop nr="03" id="h-werk">Uitgevoerd werk</Sectiekop></div>
        <ul className="dossiers">
          {PROJECTEN.map((p) => (
            <li key={p.slug} className="dossier zie">
              <Link href={`/werk/${p.slug}`} className="dossier-link">
                <Foto beeld={p.kaartbeeld} verhouding={p.slug === "vijverrenovatie" ? "4 / 3" : "4 / 5"} sizes="(min-width: 768px) 50vw, 100vw" className="dossier-beeld" />
                <p className="bijschrift t-mono"><span>{p.code}</span><span>{p.jaar}</span><span>{p.status}</span></p>
                <h3 className="t-h3 dossier-titel">{p.titel}</h3>
                <p className="t-klein t-zacht">{p.type}{p.plaats ? ` · ${p.plaats}` : ""}</p>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/werk" className="link">Alle dossiers <span className="pijl" aria-hidden="true">→</span></Link>
      </section>

      {/* 04 Hoe het gaat */}
      <section className="sectie rand zie" aria-labelledby="h-gang">
        <Sectiekop nr="04" id="h-gang">Hoe het gaat</Sectiekop>
        <ol className="stappen">
          {STAPPEN.map((s, i) => (
            <li key={s.kop}>
              <span className="t-mono t-accent">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="stap-kop">{s.kop}</h3>
              <p className="t-zacht">{s.tekst}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* 05 Wie */}
      <section className="sectie rand wie" aria-labelledby="h-wie">
        <figure className="wie-beeld zie">
          <Foto beeld={BEELD.nickPlanten} verhouding="4 / 5" sizes="(min-width: 768px) 34vw, 90vw" />
          <figcaption className="bijschrift t-mono"><span>Nick Peters</span><span>Tussen de oeverplanten, GR / 001</span></figcaption>
        </figure>
        <div className="wie-tekst zie">
          <Sectiekop nr="05" id="h-wie">Eén persoon, van gesprek tot laatste plant.</Sectiekop>
          <p className="t-lead t-zacht">
            GRØNN Studio is Nick Peters. Ik ontwerp, leg aan en onderhoud zelf, in Stein en ongeveer 30 km daaromheen: tot Maastricht, Heerlen en Kerkrade.
          </p>
          <Link href="/studio" className="link">Over de studio <span className="pijl" aria-hidden="true">→</span></Link>
        </div>
      </section>
    </>
  )
}
