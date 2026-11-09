import type { CSSProperties } from "react"
import Image from "next/image"
import type { Beeld } from "@/lib/beelden"

// Eén foto in een vak met vaste verhouding. Het vak bepaalt de maat; de foto
// vult hem. Haken (wat Nick ziet) kunnen eroverheen.

export type Haak = {
  /** Kader in procenten van het vak: links, boven, breedte, hoogte. */
  x: number
  y: number
  b: number
  h: number
  label: string
  /** Nummer dat op een telefoon in plaats van het hele label staat. */
  nr?: string
  kern?: boolean
  onder?: boolean
}

export function Foto({
  beeld,
  verhouding,
  sizes = "100vw",
  prioriteit = false,
  haken,
  className = "",
}: {
  beeld: Beeld
  /** CSS aspect-ratio, bv. "4 / 5". Standaard die van de foto zelf. */
  verhouding?: string
  sizes?: string
  prioriteit?: boolean
  haken?: Haak[]
  className?: string
}) {
  return (
    <div className={`foto ${className}`} style={{ aspectRatio: verhouding ?? `${beeld.breed} / ${beeld.hoog}` }}>
      <Image src={beeld.src} alt={beeld.alt} fill sizes={sizes} priority={prioriteit} />
      {haken?.length ? (
        <div className="haken" aria-hidden="true">
          {haken.map((k, i) => (
            <span
              key={i}
              className={`haak${k.kern ? " haak-kern" : ""}${k.onder ? " haak-onder" : ""}`}
              style={{ left: `${k.x}%`, top: `${k.y}%`, width: `${k.b}%`, height: `${k.h}%`, "--i": i } as CSSProperties}
            >
              <span className="haak-label t-mono">{k.nr ? <><span>{k.nr}</span><span className="haak-lang"> {k.label}</span></> : k.label}</span>
            </span>
          ))}
        </div>
      ) : null}
    </div>
  )
}
