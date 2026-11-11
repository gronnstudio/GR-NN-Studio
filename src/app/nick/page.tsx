import type { Metadata } from "next"
import Link from "next/link"
import { Foto } from "@/components/foto"
import { PaginaKop, Poort } from "@/components/poort"
import { WERKWIJZE } from "@/inhoud/vakken"
import { FOTO, type Beeld } from "@/lib/fotos"

export const metadata: Metadata = {
  title: "Nick",
  description: "Nick Peters: vader van twee kinderen, hovenier, ecologisch ontwerper en de persoon achter GRØNN Studio in Stein.",
}

const beekloop: Beeld = { src: "/foto/vijverrenovatie-F11.jpg", breed: 1000, hoog: 1333, alt: "Nick zit op de keien bij de beekloop in aanbouw, met vijverfolie en grind" }
const aanHetWerk: Beeld = { src: "/foto/vijverrenovatie-F09-2.jpg", breed: 1000, hoog: 1333, alt: "Nick lachend tussen de planten bij de vijverrand" }

export default function Nick() {
  return (
    <div className="pg toon-middag">
      <PaginaKop waar="Nick Peters · hovenier en ecologisch ontwerper" titel="Eén persoon, de hele dag." intro="Ik ben Nick Peters. Vader van twee kinderen, hovenier, ecologisch ontwerper en de persoon achter GRØNN Studio." />

      <section className="pg-sectie pg-verhaal">
        <figure className="pg-verhaal-portret"><Foto beeld={FOTO.nick} verhouding="3 / 4" prioriteit sizes="(min-width: 900px) 34vw, 100vw" /></figure>
        <div className="pg-lopend">
          <p className="pg-groot">Ik denk in beelden, patronen en verbanden. Als ik naar een tuin kijk, zie ik hoe licht, water, materialen en beplanting elkaar beïnvloeden. Maar ik ben ook benieuwd naar wie er leeft. Waar drink je ’s ochtends je koffie? Waar spelen de kinderen? En waar kom je na een drukke dag tot rust? Juist die dagelijkse dingen geven richting aan wat ik maak.</p>
          <p>Mijn liefde voor bouwen en zorgen kreeg ik van huis uit mee. Ik groeide op in een warm, praktisch gezin, waar aandacht en respect vanzelfsprekend waren. Mijn moeder liet me zien hoeveel het betekent om aanwezig te zijn. Met mijn vader verbouwde ik huizen. Daar leerde ik werken met mijn handen, oplossingen zoeken en doorzetten wanneer iets anders loopt dan bedacht.</p>
        </div>
      </section>

      <section className="pg-sectie pg-verhaal pg-verhaal-om">
        <figure><Foto beeld={beekloop} verhouding="3 / 4" sizes="(min-width: 900px) 30vw, 100vw" /><figcaption className="dag-mono dag-zacht">De beekloop in aanbouw, juli</figcaption></figure>
        <div className="pg-lopend">
          <p>Mijn eigen weg verliep minder vanzelfsprekend. Binnen school en vaste systemen voelde ik me vaak niet op mijn plek. Later gaf de diagnose autisme woorden aan dingen die ik al langer ervoer. Buiten vond ik rust: in tuinieren, dieren, observeren en bezig zijn. De natuur is altijd een plek geweest waar ik me thuis voel.</p>
          <p>Het vaderschap maakte voor mij nog duidelijker wat belangrijk is: aandacht geven, verantwoordelijkheid nemen en een omgeving creëren waarin iemand zich veilig voelt. Dat neem ik mee in mijn werk. Ik luister, kijk zorgvuldig en wil begrijpen wat een plek voor iemand moet betekenen.</p>
        </div>
      </section>

      <section className="pg-sectie pg-verhaal">
        <figure><Foto beeld={FOTO.nickMoestuin} verhouding="3 / 4" sizes="(min-width: 900px) 30vw, 100vw" /><figcaption className="dag-mono dag-zacht">In de moestuin</figcaption></figure>
        <div className="pg-lopend">
          <p>In GRØNN Studio komen mijn manier van kijken en mijn plezier in maken samen. Ik wil tuinen ontwerpen en aanleggen waarin mensen zich thuis voelen en waarin ook ruimte is voor ander leven. Dat begint bij de bodem, bij hoe water zijn weg vindt en bij planten die passen bij de plek. Ik kijk daarbij ook vooruit: hoe groeit een tuin verder, hoe verandert hij met de seizoenen en welk onderhoud past bij de eigenaar?</p>
          <p>Thuis en in mijn werk zijn er altijd planten, ideeën en projecten. Vaak ook modder. Ik blijf nieuwsgierig naar hoe dingen groeien en hoe ik ze beter kan maken.</p>
          <p className="pg-groot">Met die aandacht werk ik ook aan jouw tuin.</p>
        </div>
      </section>

      <section className="pg-sectie" aria-labelledby="h-werkwijze">
        <div className="pg-sectie-kop">
          <h2 id="h-werkwijze" className="pg-h2">Zo werk ik, in zes stappen</h2>
          <figure className="pg-klein-beeld"><Foto beeld={aanHetWerk} verhouding="1 / 1" sizes="200px" /><figcaption className="dag-mono dag-zacht">Aan het werk, september</figcaption></figure>
        </div>
        <ol className="pg-stappen">
          {WERKWIJZE.map(([kop, tekst], n) => (
            <li key={kop}><span className="dag-mono dag-zacht">{String(n + 1).padStart(2, "0")}</span><h3 className="pg-h3">{kop}</h3><p>{tekst}</p></li>
          ))}
        </ol>
        <Link href="/vakken" className="dag-lees">Wat ik doe, vak voor vak →</Link>
      </section>

      <Poort zin="Zullen we kennismaken?" />
    </div>
  )
}
