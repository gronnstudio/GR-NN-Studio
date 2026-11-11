import type { Metadata, Viewport } from "next"
import { Geist_Mono, Montserrat, Syne } from "next/font/google"
import { Duim, Kop, Voet } from "@/components/schil"
import { NU_SCRIPT } from "@/lib/dag"
import { SITE } from "@/lib/site"
import "./globals.css"
import "./dag.css"
import "./pagina.css"

const syne = Syne({ subsets: ["latin"], weight: ["700"], variable: "--font-syne" })
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-montserrat" })
const geistMono = Geist_Mono({ subsets: ["latin"], weight: ["500"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.naam} · Tuinontwerp, beplanting, aanleg en water in Stein`, template: `%s · ${SITE.naam}` },
  description: SITE.positionering,
  robots: { index: false, follow: false }, // nog in ontwikkeling, nog niet voor Google
  openGraph: { siteName: SITE.naam, locale: "nl_NL", type: "website" },
}

export const viewport: Viewport = { themeColor: "#f3eee4" }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" suppressHydrationWarning className={`${syne.variable} ${montserrat.variable} ${geistMono.variable}`}>
      <body className="dag">
        {/* Zet het dagdeel van nu op <html> vóór de eerste weergave. */}
        <script dangerouslySetInnerHTML={{ __html: NU_SCRIPT }} />
        <a href="#inhoud" className="overslaan">Naar de inhoud</a>
        <Kop />
        <main id="inhoud">{children}</main>
        <Voet />
        <Duim />
      </body>
    </html>
  )
}
