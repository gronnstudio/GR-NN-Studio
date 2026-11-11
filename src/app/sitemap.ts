import type { MetadataRoute } from "next"
import { STUKKEN } from "@/inhoud/journaal"
import { PROJECTEN } from "@/inhoud/projecten"
import { VAKKEN } from "@/inhoud/vakken"
import { SITE } from "@/lib/site"

// Klaar voor de lancering; tot dan staat de site op noindex.
export default function sitemap(): MetadataRoute.Sitemap {
  const vast = ["", "/vakken", "/werk", "/journaal", "/nick", "/kennismaken", "/privacy", "/voorwaarden", "/herroeping"]
  return [
    ...vast.map((p) => ({ url: `${SITE.url}${p}` })),
    ...VAKKEN.map((v) => ({ url: `${SITE.url}/vakken/${v.slug}` })),
    ...PROJECTEN.map((p) => ({ url: `${SITE.url}/werk/${p.slug}` })),
    ...STUKKEN.map((s) => ({ url: `${SITE.url}/journaal/${s.slug}`, lastModified: s.datum })),
  ]
}
