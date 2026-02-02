import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto(process.env.BASE_URL);
  await expect(page).toHaveTitle(/Astro/);
});

test('has h1', async ({page}) => {
  await page.goto(process.env.BASE_URL);
  await expect(page.getByRole('heading', { name: 'Astro', level: 1 })).toBeVisible();
});
