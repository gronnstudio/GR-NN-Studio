import type { Metadata } from "next"
import { Foto } from "@/components/beeld"
import { Paginakop, Uitnodiging } from "@/components/pagina"
import { Sectiekop } from "@/components/sectiekop"
import { BEELD, type Beeld } from "@/lib/beelden"
import { SITE } from "@/lib/site"

export const metadata: Metadata = {
  title: "Studio: Nick Peters",
  description: "GRØNN Studio is Nick Peters: hovenier en ecologisch ontwerper in Stein. Ik ontwerp, leg aan en onderhoud zelf.",
}

// Nicks eigen tekst, letterlijk (gronn.studio/over, okt 2026). Na elke
// alinea een echte foto die past bij wat er staat.
const VERHAAL: { tekst: string; beeld?: Beeld; bijschrift?: string }[] = [
  { tekst: "Ik denk in beelden, patronen en verbanden. Als ik naar een tuin kijk, zie ik hoe licht, water, materialen en beplanting elkaar beïnvloeden. Maar ik ben ook benieuwd naar wie er leeft. Waar drink je ’s ochtends je koffie? Waar spelen de kinderen? En waar kom je na een drukke dag tot rust? Juist die dagelijkse dingen geven richting aan wat ik maak.", beeld: BEELD.overzicht, bijschrift: "Kijken naar licht, water en beplanting" },
  { tekst: "Mijn liefde voor bouwen en zorgen kreeg ik van huis uit mee. Ik groeide op in een warm, praktisch gezin, waar aandacht en respect vanzelfsprekend waren. Mijn moeder liet me zien hoeveel het betekent om aanwezig te zijn. Met mijn vader verbouwde ik huizen. Daar leerde ik werken met mijn handen, oplossingen zoeken en doorzetten wanneer iets anders loopt dan bedacht.", beeld: BEELD.beekloop, bijschrift: "De beekloop in aanbouw" },
  { tekst: "Mijn eigen weg verliep minder vanzelfsprekend. Binnen school en vaste systemen voelde ik me vaak niet op mijn plek. Later gaf de diagnose autisme woorden aan dingen die ik al langer ervoer. Buiten vond ik rust: in tuinieren, dieren, observeren en bezig zijn. De natuur is altijd een plek geweest waar ik me thuis voel.", beeld: BEELD.moestuin, bijschrift: "In de moestuin" },
  { tekst: "Het vaderschap maakte voor mij nog duidelijker wat belangrijk is: aandacht geven, verantwoordelijkheid nemen en een omgeving creëren waarin iemand zich veilig voelt. Dat neem ik mee in mijn werk. Ik luister, kijk zorgvuldig en wil begrijpen wat een plek voor iemand moet betekenen.", beeld: BEELD.aanplant, bijschrift: "Zorgvuldig werken" },
  { tekst: "In GRØNN Studio komen mijn manier van kijken en mijn plezier in maken samen. Ik wil tuinen ontwerpen en aanleggen waarin mensen zich thuis voelen en waarin ook ruimte is voor ander leven. Dat begint bij de bodem, bij hoe water zijn weg vindt en bij planten die passen bij de plek. Ik kijk daarbij ook vooruit: hoe groeit een tuin verder, hoe verandert hij met de seizoenen en welk onderhoud past bij de eigenaar?", beeld: BEELD.waterval, bijschrift: "Water dat zijn weg vindt" },
  { tekst: "Thuis en in mijn werk zijn er altijd planten, ideeën en projecten. Vaak ook modder. Ik blijf nieuwsgierig naar hoe dingen groeien en hoe ik ze beter kan maken." },
]

export default function Studio() {
  return (
    <>
      <Paginakop label={<><span>Studio</span><span>Hovenier en ecologisch ontwerper</span></>} regels={["Ik ben", "Nick Peters."]}>
        <p className="t-lead">Vader van twee kinderen, hovenier, ecologisch ontwerper en de persoon achter GRØNN Studio.</p>
      </Paginakop>

      <div className="rand studio-portret">
        <figure>
          <Foto beeld={BEELD.portret} verhouding="4 / 5" prioriteit sizes="(min-width: 768px) 40vw, 100vw" />
          <figcaption className="bijschrift t-mono"><span>Nick Peters</span><span>GRØNN Studio, Stein</span></figcaption>
        </figure>
      </div>

      <section className="rand sectie" aria-labelledby="h-verhaal">
        <h2 id="h-verhaal" className="sr-only">Het verhaal</h2>
        <ol className="verhaal">
          {VERHAAL.map((v, i) => (
            <li key={i} className={`verhaal-deel zie${i % 2 ? " verhaal-om" : ""}`}>
              <div className="verhaal-tekst">
                <span className="t-mono t-zacht">{String(i + 1).padStart(2, "0")} / {String(VERHAAL.length).padStart(2, "0")}</span>
                <p>{v.tekst}</p>
              </div>
              {v.beeld ? (
                <figure className="verhaal-beeld">
                  <Foto beeld={v.beeld} verhouding="4 / 5" sizes="(min-width: 768px) 34vw, 100vw" />
                  <figcaption className="bijschrift t-mono"><span>{v.bijschrift}</span></figcaption>
                </figure>
              ) : null}
            </li>
          ))}
        </ol>
        <p className="t-h2 verhaal-slot zie">Met die aandacht werk ik ook aan jouw tuin.</p>
      </section>

      <section className="rand sectie zie" aria-labelledby="h-gegevens">
        <div className="gegevens">
          <Sectiekop nr="Gegevens" id="h-gegevens">De studio</Sectiekop>
          <dl className="feiten">
            <div><dt className="t-mono">Naam</dt><dd>{SITE.naam}</dd></div>
            <div><dt className="t-mono">Eigenaar</dt><dd>{SITE.eigenaar}</dd></div>
            <div><dt className="t-mono">Adres</dt><dd>{SITE.adres.straat}, {SITE.adres.postcode} {SITE.adres.plaats}</dd></div>
            <div><dt className="t-mono">Werkgebied</dt><dd>{SITE.werkgebied}</dd></div>
            <div><dt className="t-mono">KVK</dt><dd>{SITE.kvk}</dd></div>
            <div><dt className="t-mono">Btw</dt><dd>{SITE.btw}</dd></div>
          </dl>
        </div>
      </section>

      <Uitnodiging zin="Zullen we kennismaken?" onderwerp="Kennismaken" bericht="Hoi Nick, ik wil graag kennismaken." />
    </>
  )
}
