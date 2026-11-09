import { expect, test } from "@playwright/test"

const PAGINAS = ["/", "/vijvers", "/tuinen", "/werk", "/werk/vijverrenovatie", "/werk/terras-geulle", "/studio", "/kennismaken", "/privacy", "/voorwaarden"]

for (const pad of PAGINAS) {
  test(`${pad}: laadt, één h1, geen fouten, niets steekt uit op een telefoon`, async ({ page }) => {
    const fouten: string[] = []
    page.on("pageerror", (e) => fouten.push(e.message))
    page.on("console", (m) => { if (m.type() === "error" && !/Failed to load resource/.test(m.text())) fouten.push(m.text()) })
    for (const breedte of [320, 390]) {
      await page.setViewportSize({ width: breedte, height: 844 })
      const res = await page.goto(pad)
      expect(res?.status()).toBe(200)
      await page.evaluate(() => document.fonts.ready)
      await expect(page.locator("h1")).toHaveCount(1)
      const uit = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)
      expect(uit, `${breedte}px`).toBeLessThanOrEqual(0)
    }
    expect(fouten).toEqual([])
  })
}

test("elke afbeelding heeft een alt-tekst", async ({ page }) => {
  for (const pad of PAGINAS) {
    await page.goto(pad)
    const zonder = await page.locator("img:not([alt])").count()
    expect(zonder, pad).toBe(0)
  }
})

test("telefoon: menu opent, Escape sluit en geeft de focus terug", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto("/")
  const knop = page.getByRole("button", { name: "Menu" })
  await knop.click()
  const blad = page.getByRole("dialog", { name: "Menu" })
  await expect(blad).toBeVisible()
  // niets in het menu loopt buiten het scherm
  const uit = await blad.evaluate((el) => [...el.querySelectorAll("*")].filter((e) => e.getBoundingClientRect().right > window.innerWidth + 1).length)
  expect(uit).toBe(0)
  await page.keyboard.press("Escape")
  await expect(blad).toBeHidden()
  await expect(knop).toBeFocused()
})

test("telefoon: menu brengt je naar Werk", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto("/")
  await page.getByRole("button", { name: "Menu" }).click()
  await page.getByRole("dialog", { name: "Menu" }).getByRole("link", { name: /Werk/ }).click()
  await expect(page).toHaveURL(/\/werk$/)
  await expect(page.getByRole("dialog", { name: "Menu" })).toBeHidden()
})

test("desktop: hoofdmenu markeert de huidige pagina", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto("/tuinen")
  await expect(page.getByRole("navigation", { name: "Hoofdmenu" }).getByRole("link", { name: "Tuinen" })).toHaveAttribute("aria-current", "page")
})

test("kennismaken: lege verzending toont fouten en opent niets", async ({ page }) => {
  await page.goto("/kennismaken")
  let geopend = false
  page.context().on("page", () => { geopend = true })
  await page.getByRole("button", { name: "Verstuur via WhatsApp" }).click()
  await expect(page.getByText("Vul je naam in.")).toBeVisible()
  await expect(page.locator("#naam")).toBeFocused()
  expect(geopend).toBe(false)
})

test("kennismaken: onderwerp uit de link staat al aan", async ({ page }) => {
  await page.goto("/kennismaken?onderwerp=Vijvers")
  await expect(page.getByRole("radio", { name: "Vijver" })).toBeChecked()
})

test("kennismaken: ingevuld bericht gaat klaargezet naar WhatsApp", async ({ page }) => {
  // WhatsApp zelf is buiten de test: alleen het adres telt.
  await page.context().route("https://wa.me/**", (r) => r.fulfill({ body: "ok" }))
  await page.goto("/kennismaken")
  await page.getByRole("radio", { name: "Tuin" }).check({ force: true })
  await page.locator("#naam").fill("Test Persoon")
  await page.locator("#bericht").fill("Een border langs het terras, half schaduw.")
  const [popup] = await Promise.all([
    page.context().waitForEvent("page"),
    page.getByRole("button", { name: "Verstuur via WhatsApp" }).click(),
  ])
  const url = decodeURIComponent(popup.url())
  expect(url).toContain("wa.me/31618118014")
  expect(url).toContain("Onderwerp: Tuin")
  expect(url).toContain("Test Persoon")
})

test("oude adressen sturen door", async ({ request }) => {
  for (const [oud, nieuw] of [["/over", "/studio"], ["/contact", "/kennismaken"], ["/projects/terras-geulle-24-m2-betontegels", "/werk/terras-geulle"]]) {
    const res = await request.get(oud, { maxRedirects: 0 })
    expect(res.status(), oud).toBe(308)
    expect(res.headers().location, oud).toBe(nieuw)
  }
})

test("onbekende pagina geeft 404 met een weg terug", async ({ page }) => {
  const res = await page.goto("/bestaat-niet")
  expect(res?.status()).toBe(404)
  await expect(page.getByRole("link", { name: "Naar de voorpagina", exact: true })).toBeVisible()
})
