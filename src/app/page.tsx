import Link from "next/link"

// Keuzepagina voor de drie voorstellen. Verdwijnt zodra Nick er één kiest.
const VOORSTELLEN = [
  { href: "/almanak", letter: "A", naam: "Almanak", zin: "De site als maandblad: de voorpagina is het omslag van deze maand." },
  { href: "/tuinkamers", letter: "B", naam: "Tuinkamers", zin: "Antraciet, met crème openingen die je binnenloopt." },
  { href: "/materiaal", letter: "C", naam: "Materiaal", zin: "Een stalenboek: elk vak en project via zijn materialen." },
]

export default function Keuze() {
  return (
    <main style={{ minHeight: "100svh", background: "var(--creme)", color: "var(--antraciet)", padding: "clamp(24px, 6vw, 80px)" }}>
      <p style={{ fontFamily: "var(--letter-mono)", fontSize: 12, letterSpacing: ".08em", textTransform: "uppercase" }}>GRØNN Studio · drie voorstellen voor de voorpagina</p>
      <h1 style={{ fontFamily: "var(--letter-kop)", fontSize: "clamp(2.5rem, 1rem + 6vw, 6rem)", lineHeight: 0.92, letterSpacing: "-0.04em", margin: "32px 0 48px" }}>Kies er één.</h1>
      <ol style={{ borderTop: "1px solid currentColor" }}>
        {VOORSTELLEN.map((v) => (
          <li key={v.href} style={{ borderBottom: "1px solid #cfc6b6" }}>
            <Link href={v.href} style={{ display: "grid", gridTemplateColumns: "2.5em 1fr", gap: "4px 16px", padding: "24px 0" }}>
              <span style={{ fontFamily: "var(--letter-mono)", fontSize: 12, paddingTop: 10 }}>{v.letter}</span>
              <span style={{ fontFamily: "var(--letter-kop)", fontSize: "clamp(2rem, 1rem + 3vw, 3.5rem)", lineHeight: 1, letterSpacing: "-0.03em" }}>{v.naam} →</span>
              <span />
              <span style={{ maxWidth: "48ch" }}>{v.zin}</span>
            </Link>
          </li>
        ))}
      </ol>
    </main>
  )
}
