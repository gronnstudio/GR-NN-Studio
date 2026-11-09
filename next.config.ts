import type { NextConfig } from "next"

// Adressen van eerdere versies van gronn.studio die nog in Google, mails en
// posts staan. Alleen pagina's die hier een duidelijke opvolger hebben.
const DOOR: [string, string][] = [
  ["/over", "/studio"],
  ["/contact", "/kennismaken"],
  ["/services", "/vijvers"],
  ["/projects", "/werk"],
  ["/projects/vijverrenovatie-twee-vijvers-waterval-beekloop", "/werk/vijverrenovatie"],
  ["/projects/terras-geulle-24-m2-betontegels", "/werk/terras-geulle"],
]

const config: NextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    return DOOR.map(([source, destination]) => ({ source, destination, permanent: true }))
  },
  async headers() {
    return [{
      source: "/:pad*",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "X-Frame-Options", value: "DENY" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
      ],
    }]
  },
}

export default config
