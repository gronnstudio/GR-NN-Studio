import Link from "next/link"
import { SITE } from "@/lib/site"
import { BESTEMMINGEN } from "@/lib/navigatie"
import { VoetUitnodiging } from "./voet-uitnodiging"

// De voet: één donkere plaat. Bovenaan de uitnodiging, daaronder contact,
// pagina's en de bedrijfsgegevens die een Nederlandse site moet tonen.

export function Voet() {
  const jaar = new Date().getFullYear()
  return (
    <footer className="voet plaat">
      <VoetUitnodiging />

      <div className="rand voet-raster">
        <div>
          <p className="t-mono t-zacht">Contact</p>
          <ul className="voet-lijst">
            <li><a href={SITE.whatsapp}>WhatsApp</a></li>
            <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            <li><a href={SITE.telefoonHref}>{SITE.telefoon}</a></li>
          </ul>
        </div>
        <div>
          <p className="t-mono t-zacht">Pagina&apos;s</p>
          <ul className="voet-lijst">
            {BESTEMMINGEN.map((b) => <li key={b.href}><Link href={b.href}>{b.naam}</Link></li>)}
            <li><Link href="/kennismaken">Kennismaken</Link></li>
          </ul>
        </div>
        <div>
          <p className="t-mono t-zacht">Studio</p>
          <address className="voet-adres">
            {SITE.naam}<br />
            {SITE.adres.straat}<br />
            {SITE.adres.postcode} {SITE.adres.plaats}
          </address>
          <ul className="voet-lijst">
            <li><a href={SITE.instagram}>Instagram</a></li>
            <li><a href={SITE.linkedin}>LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="rand voet-onder t-mono t-zacht">
        <span>© {jaar} {SITE.naam}</span>
        <span>KVK {SITE.kvk}</span>
        <span>Btw {SITE.btw}</span>
        <Link href="/privacy">Privacy</Link>
        <Link href="/voorwaarden">Voorwaarden</Link>
      </div>
    </footer>
  )
}
