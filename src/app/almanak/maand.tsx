"use client"

import { useLayoutEffect, useRef, type CSSProperties } from "react"

// De maandnaam op het omslag vult precies de breedte. De server rekent met
// een gemeten breedte (iets ruim, zodat er niets uitsteekt); zodra de letter
// geladen is, meet de browser het woord en zet de maat exact. Zo klopt het
// ook als Google een iets andere versie van Syne levert.

export function Maand({ woord, breedte }: { woord: string; breedte: number }) {
  const h1 = useRef<HTMLHeadingElement>(null)
  const binnen = useRef<HTMLSpanElement>(null)

  useLayoutEffect(() => {
    const meet = () => {
      const el = binnen.current, kop = h1.current
      if (!el || !kop) return
      const fs = parseFloat(getComputedStyle(el).fontSize)
      if (fs > 0) kop.style.setProperty("--b", String(el.getBoundingClientRect().width / fs))
    }
    meet()
    document.fonts?.ready.then(meet)
  }, [])

  return (
    <h1 ref={h1} id="alm-maand" className="alm-maand" style={{ "--b": breedte * 1.08 } as CSSProperties}>
      <span className="sr-only">GRØNN Studio, almanak van {woord.toLowerCase()}</span>
      <span className="alm-maand-woord" aria-hidden="true">
        <span ref={binnen} className="alm-maand-binnen">
          {[...woord].map((l, i) => <span key={i} style={{ "--i": i } as CSSProperties}>{l}</span>)}
        </span>
      </span>
    </h1>
  )
}
