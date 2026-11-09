import Link from "next/link"
import { Paginakop } from "@/components/pagina"

export default function NietGevonden() {
  return (
    <>
      <Paginakop label={<><span>404</span><span>Niet gevonden</span></>} regels={["Hier groeit", "(nog) niets."]}>
        <p className="t-lead">Deze pagina bestaat niet, of niet meer. Begin bij de voorpagina of kijk naar het werk.</p>
        <div className="knoppen" style={{ marginTop: 28 }}>
          <Link href="/" className="knop knop-vol">Naar de voorpagina</Link>
          <Link href="/werk" className="knop knop-lijn">Uitgevoerd werk</Link>
        </div>
      </Paginakop>
    </>
  )
}
