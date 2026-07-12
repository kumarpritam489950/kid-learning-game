import { expect, test } from '@playwright/test';

test('first run: create profile, finish a lesson, history persists across reload', async ({
  page,
}) => {
  await page.goto('./');

  // No profile yet → redirected to the picker.
  await page.getByLabel(/New player/).fill('SuperTiger');
  await page.getByRole('button', { name: /Let's Go/ }).click();
  await expect(page.getByText(/Hi, SuperTiger/)).toBeVisible();

  // Into Math → Mission 1 (Counting 1 to 20, 10 questions).
  await page.getByRole('link', { name: 'Math Island', exact: true }).click();
  await page.getByRole('button', { name: /Mission 1 Counting 1 to 20/ }).click();
  await expect(page.getByText(/Q 1 \/ 10/)).toBeVisible();

  // Play through all 10 questions (first option each time — correctness
  // doesn't matter for the flow).
  for (let i = 0; i < 10; i += 1) {
    await page.locator('[aria-label="Answer choices"] button').first().click();
    await page.getByRole('button', { name: /Next/ }).click();
  }

  await expect(page.getByText(/Complete!/)).toBeVisible();
  await expect(page.getByText(/You got \d+ out of 10/)).toBeVisible();

  // Profile survives a reload (localStorage persist).
  await page.reload();
  await expect(page.getByText(/Hi, SuperTiger/)).toBeVisible();

  // The session landed in history.
  await page.getByRole('button', { name: /History/ }).click();
  await expect(page.getByText('Sessions')).toBeVisible();
  await expect(page.getByText('Counting 1 to 20')).toBeVisible();
});

test('v1 localStorage users are imported with stars intact', async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem(
      'playlearn_users',
      JSON.stringify([
        {
          name: 'Anaya',
          createdAt: 1700000000000,
          totalScore: 17,
          history: [
            {
              subjectId: 'math',
              moduleId: 'math_counting',
              score: 9,
              total: 10,
              timestamp: 1700000001000,
            },
            {
              subjectId: 'hindi',
              moduleId: 'hin_matras',
              score: 8,
              total: 10,
              timestamp: 1700000002000,
            },
          ],
        },
      ]),
    );
    localStorage.setItem('playlearn_current_user', 'Anaya');
  });

  await page.goto('./');

  await expect(page.getByText(/your stars are safe/i)).toBeVisible();
  await expect(page.getByText(/Hi, Anaya/)).toBeVisible();
  await expect(page.getByText('⭐ 17')).toBeVisible();

  // Legacy keys must remain for rollback safety.
  const legacyIntact = await page.evaluate(() => localStorage.getItem('playlearn_users') !== null);
  expect(legacyIntact).toBe(true);
});

test('fun games: menu lists 11 games; snake mounts and leaves cleanly', async ({ page }) => {
  await page.goto('./');
  await page.getByLabel(/New player/).fill('Gamer');
  await page.getByRole('button', { name: /Let's Go/ }).click();

  await page.getByRole('link', { name: 'Fun Games' }).click();
  await expect(page.locator('.game-menu-card')).toHaveCount(11);

  await page.getByRole('button', { name: /Snake Game/ }).click();
  await expect(page.locator('canvas.game-canvas')).toBeVisible();
  await expect(page.getByText('Score: 0')).toBeVisible();

  // Leaving mid-game must not error (leak-free destroy).
  await page.getByRole('button', { name: 'Back to Games' }).click();
  await expect(page.locator('.game-menu-card')).toHaveCount(11);
});

test('assessment: run 20 questions and get a topic report', async ({ page }) => {
  await page.goto('./');
  await page.getByLabel(/New player/).fill('Scholar');
  await page.getByRole('button', { name: /Let's Go/ }).click();

  await page.getByRole('link', { name: 'Assessment' }).click();
  await page.getByRole('button', { name: /Mathematics/ }).click();
  await expect(page.getByText('Question 1 of 20')).toBeVisible();

  for (let i = 0; i < 20; i += 1) {
    await page.locator('[aria-label="Answer choices"] button').first().click();
  }

  await expect(page.getByText('Topic report')).toBeVisible();
  await expect(page.getByText(/\/ 20 \(\d+%\)/)).toBeVisible();

  // The attempt lands in history.
  await page.getByRole('button', { name: '🏝️ Home' }).click();
  await page.getByRole('button', { name: /History/ }).click();
  await expect(page.getByText('📋 Assessments')).toBeVisible();
});

test('story time turns pages and shows the moral', async ({ page }) => {
  await page.goto('./');
  await page.getByLabel(/New player/).fill('Reader');
  await page.getByRole('button', { name: /Let's Go/ }).click();

  await page.getByRole('link', { name: 'Story Time' }).click();
  await page.getByRole('button', { name: /The Lion and the Mouse/ }).click();

  await expect(page.getByText(/Once upon a time/)).toBeVisible();

  // Walk to the last page; the moral appears there.
  const next = page.getByRole('button', { name: /Next →/ });
  while (await next.isVisible()) {
    await next.click();
  }
  await expect(page.getByText(/🌟 Moral:/)).toBeVisible();

  await page.getByRole('button', { name: /Finish/ }).click();
  await expect(page.getByRole('button', { name: /The Lion and the Mouse/ })).toBeVisible();
});
