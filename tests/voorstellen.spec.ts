import { expect, test } from "@playwright/test"

// De drie voorstellen voor de voorpagina, plus de keuzepagina.
const PAGINAS = ["/", "/almanak", "/tuinkamers", "/materiaal"]
const MENU: Record<string, string> = { "/almanak": "Inhoud", "/tuinkamers": "Kamers", "/materiaal": "Menu" }

// Deze tests gaan over opbouw en gedrag, niet over beeldoptimalisatie: foto's
// krijgen een lege pixel, zodat een trage of hangende beeldserver de test
// niet laat falen. De vakken hebben een vaste verhouding, dus de opbouw
// blijft gelijk.
const PIXEL = Buffer.from("R0lGODlhAQABAAAAACw=", "base64")
test.beforeEach(async ({ page }) => {
  await page.route("**/_next/image**", (r) => r.fulfill({ body: PIXEL, contentType: "image/gif" }))
})

for (const pad of PAGINAS) {
  test(`${pad}: laadt, één h1, geen fouten, niets steekt uit op een telefoon`, async ({ page }) => {
    const fouten: string[] = []
    page.on("pageerror", (e) => fouten.push(e.message))
    page.on("console", (m) => { if (m.type() === "error" && !/Failed to load resource/.test(m.text())) fouten.push(m.text()) })
    for (const breedte of [320, 390, 820, 1440]) {
      await page.setViewportSize({ width: breedte, height: 844 })
      const res = await page.goto(pad, { waitUntil: "domcontentloaded" })
      expect(res?.status()).toBe(200)
      await page.evaluate(() => document.fonts.ready)
      await expect(page.locator("h1")).toHaveCount(1)
      const { uit, wie } = await page.evaluate(() => ({
        uit: document.documentElement.scrollWidth - window.innerWidth,
        // bij een fout: welke elementen steken uit, zodat CI zegt wat er mis is
        wie: [...document.querySelectorAll("body *")]
          .filter((e) => e.getBoundingClientRect().right > window.innerWidth + 1)
          .slice(0, 5)
          .map((e) => `${e.tagName.toLowerCase()}.${e.className} "${(e.textContent ?? "").trim().slice(0, 40)}" ${Math.round(e.getBoundingClientRect().right)}`),
      }))
      expect(uit, `${breedte}px · ${wie.join(" | ")}`).toBeLessThanOrEqual(0)
    }
    expect(fouten).toEqual([])
  })

  test(`${pad}: elke afbeelding heeft een alt-tekst`, async ({ page }) => {
    await page.goto(pad)
    expect(await page.locator("img:not([alt])").count()).toBe(0)
  })
}

for (const [pad, naam] of Object.entries(MENU)) {
  test(`${pad}: menu op de telefoon opent, Escape sluit, focus keert terug`, async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 })
    await page.goto(pad)
    const knop = page.getByRole("button", { name: naam }).last()
    await knop.click()
    const blad = page.getByRole("dialog").filter({ visible: true })
    await expect(blad).toBeVisible()
    await blad.evaluate((el) => Promise.all(el.getAnimations({ subtree: true }).map((a) => a.finished)))
    const uit = await blad.evaluate((el) => [...el.querySelectorAll("*")].filter((e) => e.getBoundingClientRect().right > window.innerWidth + 1).length)
    expect(uit).toBe(0)
    await page.keyboard.press("Escape")
    await expect(page.getByRole("dialog").filter({ visible: true })).toHaveCount(0)
    await expect(knop).toBeFocused()
  })
}

test("almanak: de maand op het omslag past op elke breedte", async ({ page }) => {
  for (const breedte of [320, 390, 820, 1440, 1920]) {
    await page.setViewportSize({ width: breedte, height: 900 })
    await page.goto("/almanak", { waitUntil: "domcontentloaded" })
    await page.evaluate(() => document.fonts.ready)
    // het woord vult de breedte: niet breder dan de kolom, en ook niet veel smaller
    const r = await page.locator(".alm-maand-binnen").evaluate((el) => ({ w: el.getBoundingClientRect().width, c: el.parentElement!.clientWidth }))
    expect(r.w, `${breedte}px`).toBeLessThanOrEqual(r.c + 1)
    expect(r.w, `${breedte}px`).toBeGreaterThan(r.c * 0.9)
  }
})

test("materiaal: aangevinkt materiaal komt in het WhatsApp-bericht", async ({ page }) => {
  await page.goto("/materiaal")
  await page.getByRole("checkbox", { name: "Grind" }).check({ force: true })
  await page.getByRole("checkbox", { name: "Een vijver" }).check({ force: true })
  const href = await page.getByRole("link", { name: "Verstuur via WhatsApp" }).getAttribute("href")
  expect(decodeURIComponent(href ?? "")).toContain("grind, een vijver")
  expect(href).toContain("wa.me/31618118014")
})
