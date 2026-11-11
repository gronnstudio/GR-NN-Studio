import { expect, test } from "@playwright/test"

// De voorpagina: opbouw, gedrag en het dagdeel van nu.
// Foto's krijgen een lege pixel: deze tests gaan over opbouw, niet over
// beeldoptimalisatie. De vakken hebben een vaste verhouding.
const PIXEL = Buffer.from("R0lGODlhAQABAAAAACw=", "base64")
test.beforeEach(async ({ page }) => {
  await page.route("**/_next/image**", (r) => r.fulfill({ body: PIXEL, contentType: "image/gif" }))
})

test("laadt, één h1, alt-teksten, geen fouten, niets steekt uit", async ({ page }) => {
  const fouten: string[] = []
  page.on("pageerror", (e) => fouten.push(e.message))
  page.on("console", (m) => { if (m.type() === "error" && !/Failed to load resource/.test(m.text())) fouten.push(m.text()) })
  for (const breedte of [320, 390, 820, 1440]) {
    await page.setViewportSize({ width: breedte, height: 844 })
    const res = await page.goto("/", { waitUntil: "domcontentloaded" })
    expect(res?.status()).toBe(200)
    await page.evaluate(() => document.fonts.ready)
    await page.waitForTimeout(1200) // de strook schuift binnen
    await expect(page.locator("h1")).toHaveCount(1)
    const { uit, wie } = await page.evaluate(() => ({
      uit: document.documentElement.scrollWidth - window.innerWidth,
      wie: [...document.querySelectorAll("body *")]
        .filter((e) => e.getBoundingClientRect().right > window.innerWidth + 1)
        .slice(0, 5)
        .map((e) => `${e.tagName.toLowerCase()}.${e.className} "${(e.textContent ?? "").trim().slice(0, 40)}"`),
    }))
    expect(uit, `${breedte}px · ${wie.join(" | ")}`).toBeLessThanOrEqual(0)
  }
  const zonderAlt = await page.locator("main img:not([alt])").count()
  expect(zonderAlt).toBe(0)
  expect(fouten).toEqual([])
})

test("het dagdeel van nu staat vóór de eerste weergave vast", async ({ page }) => {
  // 21:30 in Stein is avond
  await page.clock.setFixedTime(new Date("2026-11-11T20:30:00Z"))
  await page.goto("/", { waitUntil: "domcontentloaded" })
  await expect(page.locator("html")).toHaveAttribute("data-nu", "avond")
  await expect(page.locator(".dag-uur-avond .dag-naald")).toBeVisible()
  await expect(page.locator(".dag-klok")).toContainText("21:30")
  // De duimknop "De dag" springt naar het avonddeel
  await page.setViewportSize({ width: 390, height: 844 })
  await expect(page.locator(".dag-duim a").first()).toHaveAttribute("href", "#avond")
})

test("nacht loopt door na middernacht", async ({ page }) => {
  await page.clock.setFixedTime(new Date("2026-11-11T02:15:00Z")) // 03:15 in Stein
  await page.goto("/", { waitUntil: "domcontentloaded" })
  await expect(page.locator("html")).toHaveAttribute("data-nu", "nacht")
})

test("alle zeven vakken staan op een rij en wijzen naar een bestaand dagdeel", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" })
  const links = page.locator(".dag-index a")
  await expect(links).toHaveCount(7)
  for (const href of await links.evaluateAll((a) => a.map((x) => x.getAttribute("href")))) {
    await expect(page.locator(href!)).toHaveCount(1)
  }
})

test("kennismaken: WhatsApp met bericht, mail en telefoon", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" })
  const poort = page.locator("#poort")
  await expect(poort.locator('a[href^="https://wa.me/"]')).toHaveAttribute("href", /text=/)
  await expect(poort.locator('a[href^="mailto:"]')).toHaveCount(1)
  await expect(poort.locator('a[href^="tel:"]')).toHaveCount(1)
})
