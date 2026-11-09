// Juridische documenten als getypte data (overgenomen uit GRONN26,
// src/lib/data/legal/types.ts, ingekort tot wat deze site gebruikt).
export type LegalSection = { heading: string; body: string[] }

export type LegalDocument = {
  id: string
  slug: string
  title: string
  kind: "voorwaarden" | "privacy" | "formulier"
  audience: "consument" | "zakelijk" | "iedereen"
  updated: string
  status: "concept" | "vastgesteld"
  intro: string
  sections: LegalSection[]
  open: string[]
}
