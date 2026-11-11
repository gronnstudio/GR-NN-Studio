import bron from "./juridisch-bron.json"

// Privacy, voorwaarden en het herroepingsformulier. Tekst van Nick;
// de privacyverklaring is aangepast aan hoe deze site werkt (geen formulier,
// geen statistieken, geen cookies).

export type Document = { titel: string; bijgewerkt: string; intro?: string | null; secties: { kop: string; tekst: string[] }[] }
export const JURIDISCH = bron as Record<"privacy" | "voorwaarden" | "herroeping", Document>
