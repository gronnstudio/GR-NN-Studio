import Image from "next/image"
import type { Beeld } from "@/lib/beelden"

/** Eén foto in een vak met vaste verhouding; het vak bepaalt de maat. */
export function Foto({ beeld, verhouding, sizes = "100vw", prioriteit = false, positie, className = "" }: {
  beeld: Beeld
  verhouding?: string
  sizes?: string
  prioriteit?: boolean
  /** CSS object-position, voor een uitsnede. */
  positie?: string
  className?: string
}) {
  return (
    <div className={`foto ${className}`} style={{ aspectRatio: verhouding ?? `${beeld.breed} / ${beeld.hoog}` }}>
      <Image src={beeld.src} alt={beeld.alt} fill sizes={sizes} priority={prioriteit} style={positie ? { objectPosition: positie } : undefined} />
    </div>
  )
}
