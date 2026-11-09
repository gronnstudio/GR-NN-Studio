import type { MetadataRoute } from "next"
import { PROJECTEN } from "@/lib/projecten"
import { SITE } from "@/lib/site"

const PAGINAS = ["", "/vijvers", "/tuinen", "/werk", "/studio", "/kennismaken", "/privacy", "/voorwaarden"]

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...PAGINAS.map((p) => ({ url: `${SITE.url}${p}` })),
    ...PROJECTEN.map((p) => ({ url: `${SITE.url}/werk/${p.slug}` })),
  ]
}
