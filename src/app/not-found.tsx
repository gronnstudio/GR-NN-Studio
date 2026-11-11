import Link from "next/link"

export default function NietGevonden() {
  return (
    <div style={{ minHeight: "60svh", display: "grid", placeContent: "center", gap: 16, padding: 24, background: "var(--creme)", textAlign: "center" }}>
      <p style={{ font: "500 0.75rem var(--letter-mono)", letterSpacing: "0.08em", textTransform: "uppercase" }}>404</p>
      <h1 style={{ font: "700 clamp(2rem, 6vw, 4rem)/1 var(--letter-kop)", letterSpacing: "-0.03em" }}>Deze pagina bestaat (nog) niet.</h1>
      <Link href="/" style={{ textDecoration: "underline" }}>Terug naar de dag</Link>
    </div>
  )
}
