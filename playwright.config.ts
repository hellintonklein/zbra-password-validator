import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  retries: 0,
  workers: undefined,
  reporter: "html",
  use: {
    baseURL: process.env.BASE_URL || "http://localhost:3010",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: {
    command: "npm run dev",
    url: process.env.BASE_URL || "http://localhost:3010",
    reuseExistingServer: true,
    timeout: 60000,
    stdout: "pipe",
    stderr: "pipe",
  },
});
