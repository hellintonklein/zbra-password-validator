import { test, expect } from '@playwright/test';
import { PASSWORD_VALIDATOR_CONSTANTS } from '../src/features/password-validator/constants';

const { IDS } = PASSWORD_VALIDATOR_CONSTANTS;

test.describe('Submission Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should submit successfully and show success feedback', async ({ page }) => {
    // Mock API
    await page.route('https://zbra-frontend-challenge.azurewebsites.net/api/PasswordValidation', async (route) => {
      await route.fulfill({
        status: 201,
        contentType: 'application/json',
        body: JSON.stringify({ message: 'Success' }),
      });
    });

    await page.getByTestId(IDS.INPUT_NAME).fill('Mike Dev');
    await page.getByTestId(IDS.INPUT_EMAIL).fill('mike.dev@zbra.com.br');
    await page.getByTestId(IDS.INPUT_PASSWORD).fill('188888');

    const submitButton = page.getByTestId(IDS.BUTTON_SUBMIT);
    await expect(submitButton).toBeEnabled();
    
    await submitButton.click();

    // Check loading state (if it's fast, this might be tricky, but we can check if it becomes disabled)
    // await expect(submitButton).toBeDisabled();

    // Check status card
    const statusCard = page.getByTestId('status-card');
    await expect(statusCard).toBeVisible();
    await expect(statusCard).toHaveAttribute('data-status', 'success');
  });

  test('should handle API errors gracefully', async ({ page }) => {
    // Mock API error
    await page.route('https://zbra-frontend-challenge.azurewebsites.net/api/PasswordValidation', async (route) => {
      await route.fulfill({
        status: 500,
        contentType: 'application/json',
        body: JSON.stringify({ error: 'Internal Server Error' }),
      });
    });

    await page.getByTestId(IDS.INPUT_NAME).fill('Mike Dev');
    await page.getByTestId(IDS.INPUT_EMAIL).fill('mike.dev@zbra.com.br');
    await page.getByTestId(IDS.INPUT_PASSWORD).fill('188888');

    await page.getByTestId(IDS.BUTTON_SUBMIT).click();

    const statusCard = page.getByTestId('status-card');
    await expect(statusCard).toBeVisible();
    await expect(statusCard).toHaveAttribute('data-status', 'error');
  });
});
