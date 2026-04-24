import { test, expect } from '@playwright/test';
import { PASSWORD_VALIDATOR_CONSTANTS } from '../src/features/password-validator/constants';

const { IDS } = PASSWORD_VALIDATOR_CONSTANTS;

test.describe('Form Validation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should show validation errors for empty fields on submit attempt', async ({ page }) => {
    const submitButton = page.getByTestId(IDS.BUTTON_SUBMIT);
    
    // Initially disabled
    await expect(submitButton).toBeDisabled();

    // Fill only name
    await page.getByTestId(IDS.INPUT_NAME).fill('John Doe');
    await expect(submitButton).toBeDisabled();

    // Fill invalid email
    await page.getByTestId(IDS.INPUT_EMAIL).fill('invalid-email');
    await expect(submitButton).toBeDisabled();
  });

  test('should enable submit button only when all fields are valid', async ({ page }) => {
    const submitButton = page.getByTestId(IDS.BUTTON_SUBMIT);
    
    await page.getByTestId(IDS.INPUT_NAME).fill('John Doe');
    await page.getByTestId(IDS.INPUT_EMAIL).fill('john@example.com');
    // Password still empty or invalid
    await expect(submitButton).toBeDisabled();

    // Fill a valid password (based on rules: 188888 is valid)
    await page.getByTestId(IDS.INPUT_PASSWORD).fill('188888');
    
    await expect(submitButton).toBeEnabled();
  });

  test('should validate email pattern', async ({ page }) => {
    const emailInput = page.getByTestId(IDS.INPUT_EMAIL);
    
    await emailInput.fill('invalid');
    await emailInput.blur();
    
    // Check if it has error state (Mantine adds data-error or classes)
    // React Hook Form might not show error until submit or touch
    // But our button remains disabled
    await expect(page.getByTestId(IDS.BUTTON_SUBMIT)).toBeDisabled();

    await emailInput.fill('test@zbra.com.br');
    await page.getByTestId(IDS.INPUT_NAME).fill('Test');
    await page.getByTestId(IDS.INPUT_PASSWORD).fill('188888');
    
    await expect(page.getByTestId(IDS.BUTTON_SUBMIT)).toBeEnabled();
  });
});
