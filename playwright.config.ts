import { defineConfig } from "@playwright/test"

// Klein en snel: wat echt stuk kan gaan. Draait tegen de productiebuild.
export default defineConfig({
  testDir: "tests",
  timeout: 60_000,
  fullyParallel: true,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? "github" : "list",
  use: {
    baseURL: "http://localhost:3311",
    ...(process.env.PLAYWRIGHT_CHROMIUM ? { launchOptions: { executablePath: process.env.PLAYWRIGHT_CHROMIUM } } : {}),
  },
  webServer: {
    command: "npx next start -p 3311",
    url: "http://localhost:3311",
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
})
