import type { Metadata, Viewport } from "next"
import { Geist_Mono, Montserrat, Syne } from "next/font/google"
import { SITE } from "@/lib/site"
import "./globals.css"

const syne = Syne({ subsets: ["latin"], weight: ["700"], variable: "--font-syne" })
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-montserrat" })
const geistMono = Geist_Mono({ subsets: ["latin"], weight: ["500"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.naam} · Tuinontwerp, beplanting en aanleg in Stein`, template: `%s · ${SITE.naam}` },
  description: SITE.positionering,
  robots: { index: false, follow: false }, // drie ontwerpvoorstellen, nog niet voor Google
}

export const viewport: Viewport = { themeColor: "#f3eee4" }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${syne.variable} ${montserrat.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
