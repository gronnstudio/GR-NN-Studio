import type { Metadata, Viewport } from "next"
import { Geist_Mono, Montserrat, Syne } from "next/font/google"
import { Kop } from "@/components/kop"
import { Voet } from "@/components/voet"
import { SITE } from "@/lib/site"
import "./globals.css"
import "@/components/kop.css"
import "@/components/voet.css"
import "./pagina.css"

const syne = Syne({ subsets: ["latin"], weight: ["700"], variable: "--font-syne" })
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-montserrat" })
const geistMono = Geist_Mono({ subsets: ["latin"], weight: ["500"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.naam} · Vijvers en natuurlijke tuinen in Stein`, template: `%s · ${SITE.naam}` },
  description: SITE.positionering,
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: SITE.naam,
    images: [{ url: "/beeld/F09-1.jpg", width: 1000, height: 1333, alt: "Een hand zet een jong vijverplantje in een plantmand met grind." }],
  },
}

export const viewport: Viewport = { themeColor: "#f3eee4" }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${syne.variable} ${montserrat.variable} ${geistMono.variable}`}>
      <body>
        <a href="#inhoud" className="overslaan">Naar de inhoud</a>
        <Kop />
        <main id="inhoud">{children}</main>
        <Voet />
      </body>
    </html>
  )
}
