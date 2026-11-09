"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

// De grote uitnodiging boven in de voet. Pagina's met een eigen uitnodiging
// (diensten, dossiers, studio) of die zelf het formulier zijn, krijgen hem
// niet: één volgende stap per pagina.
const EIGEN = [/^\/vijvers$/, /^\/tuinen$/, /^\/studio$/, /^\/kennismaken$/, /^\/werk\/.+/]

export function VoetUitnodiging() {
  const pad = usePathname()
  if (EIGEN.some((r) => r.test(pad))) return null
  return (
    <div className="rand voet-boven">
      <p className="t-mono t-accent">Volgende stap</p>
      <p className="voet-zin">
        <Link href="/kennismaken">Vertel wat je ziet. <span className="pijl" aria-hidden="true">→</span></Link>
      </p>
    </div>
  )
}
