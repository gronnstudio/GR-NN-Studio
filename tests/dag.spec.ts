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
  // "De dag" in het menu springt naar het avonddeel
  await expect(page.locator(".dag-nav a").first()).toHaveAttribute("href", "/#avond")
})

test("nacht loopt door na middernacht", async ({ page }) => {
  await page.clock.setFixedTime(new Date("2026-11-11T02:15:00Z")) // 03:15 in Stein
  await page.goto("/", { waitUntil: "domcontentloaded" })
  await expect(page.locator("html")).toHaveAttribute("data-nu", "nacht")
})

test("alle zeven vakken staan op een rij en linken naar hun pagina", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" })
  const links = page.locator(".dag-index a")
  await expect(links).toHaveCount(7)
  for (const href of await links.evaluateAll((a) => a.map((x) => x.getAttribute("href")))) {
    expect(href).toMatch(/^\/vakken\/[a-z-]+$/)
  }
})

test("de poort: WhatsApp met bericht, kennismaken en telefoon", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" })
  const poort = page.locator("#poort")
  await expect(poort.locator('a[href^="https://wa.me/"]')).toHaveAttribute("href", /text=/)
  await expect(poort.locator('a[href="/kennismaken"]')).toHaveCount(1)
  await expect(poort.locator('a[href^="tel:"]')).toHaveCount(1)
})

// Alle pagina's: bereikbaar via links vanaf de voorpagina, één h1, niets steekt uit.
test("elke pagina laadt, heeft één h1 en steekt nergens uit", async ({ page }) => {
  test.setTimeout(240_000)
  const gezien = new Set<string>(), rij = ["/"]
  const fouten: string[] = []
  page.on("pageerror", (e) => fouten.push(e.message))
  while (rij.length) {
    const u = rij.shift()!
    if (gezien.has(u)) continue
    gezien.add(u)
    for (const breedte of [320, 1440]) {
      await page.setViewportSize({ width: breedte, height: 800 })
      const res = await page.goto(u, { waitUntil: "domcontentloaded" })
      expect(res?.status(), u).toBe(200)
      await expect(page.locator("h1"), u).toHaveCount(1)
      const uit = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)
      expect(uit, `${u} op ${breedte}px`).toBeLessThanOrEqual(0)
      const links = await page.locator("a[href^='/']").evaluateAll((a) => a.map((x) => (x.getAttribute("href") ?? "").split("#")[0]))
      for (const l of links) if (l && !gezien.has(l)) rij.push(l)
    }
  }
  expect(gezien.size).toBeGreaterThan(35)
  expect(fouten).toEqual([])
})

test("menu op de telefoon: opent, Escape sluit, focus keert terug", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto("/vakken", { waitUntil: "domcontentloaded" })
  const knop = page.getByRole("button", { name: "Menu" })
  await knop.click()
  const blad = page.getByRole("dialog", { name: "Menu" })
  await expect(blad).toBeVisible()
  await expect(blad.getByRole("link", { name: "Journaal" })).toBeVisible()
  await page.keyboard.press("Escape")
  await expect(blad).toBeHidden()
  await expect(knop).toBeFocused()
})

test("kennismaken: keuzes komen in het WhatsApp-bericht", async ({ page }) => {
  await page.goto("/kennismaken", { waitUntil: "domcontentloaded" })
  await page.getByRole("checkbox", { name: "Water en vijvers" }).check()
  await page.getByRole("checkbox", { name: "’s Avonds" }).check()
  await page.getByLabel("Waar ligt de tuin?").fill("Elsloo")
  const wa = page.getByRole("link", { name: "Verstuur via WhatsApp" })
  const href = decodeURIComponent((await wa.getAttribute("href")) ?? "")
  expect(href).toContain("water en vijvers")
  expect(href).toContain("’s avonds")
  expect(href).toContain("Elsloo")
})
