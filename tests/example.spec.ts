import { test, expect } from '@playwright/test';

// Basic smoke test to ensure the home page loads

test('home page has title', async ({ page }) => {
  await page.goto('http://localhost:3001');
  await expect(page).toHaveTitle(/Car Offer AI/i);
});