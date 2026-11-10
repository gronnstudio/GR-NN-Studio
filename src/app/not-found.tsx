import Link from "next/link"

export default function NietGevonden() {
  return (
    <main style={{ minHeight: "100svh", background: "var(--creme)", color: "var(--antraciet)", padding: "clamp(24px, 6vw, 80px)" }}>
      <p style={{ fontFamily: "var(--letter-mono)", fontSize: 12, letterSpacing: ".08em", textTransform: "uppercase" }}>Nog niet gebouwd</p>
      <h1 style={{ fontFamily: "var(--letter-kop)", fontSize: "clamp(2.5rem, 1rem + 5vw, 5rem)", lineHeight: 0.95, letterSpacing: "-0.04em", margin: "24px 0" }}>Deze pagina volgt na de keuze.</h1>
      <p style={{ maxWidth: "48ch" }}>Eerst kiest Nick één van de drie voorpagina&apos;s. Daarna worden de andere pagina&apos;s in die richting gebouwd.</p>
      <p style={{ marginTop: 24 }}><Link href="/" style={{ textDecoration: "underline" }}>Terug naar de drie voorstellen</Link></p>
    </main>
  )
}
