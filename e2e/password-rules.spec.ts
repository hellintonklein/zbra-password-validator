import { test, expect } from '@playwright/test';
import { PASSWORD_VALIDATOR_CONSTANTS } from '../src/features/password-validator/constants';
import { RuleId } from '../src/features/password-validator/domain/types';

const { IDS } = PASSWORD_VALIDATOR_CONSTANTS;

test.describe('Password Rules', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  const checkRule = async (page: any, ruleId: RuleId, isValid: boolean) => {
    const requirement = page.getByTestId(`requirement-${ruleId}`);
    if (isValid) {
      await expect(requirement).toHaveAttribute('data-valid', 'true');
    } else {
      await expect(requirement).toHaveAttribute('data-valid', 'false');
    }
  };

  test('should validate Length rule (Exactly 6 digits)', async ({ page }) => {
    const passwordInput = page.getByTestId(IDS.INPUT_PASSWORD);
    
    await passwordInput.fill('11');
    await checkRule(page, RuleId.LENGTH, false);
    
    await passwordInput.fill('111111');
    await checkRule(page, RuleId.LENGTH, true);
    
    await passwordInput.fill('1111111');
    // Max length is 6, so it shouldn't allow more than 6 anyway
    const value = await passwordInput.inputValue();
    expect(value.length).toBe(6);
  });

  test('should validate Range rule (184759 - 856920)', async ({ page }) => {
    const passwordInput = page.getByTestId(IDS.INPUT_PASSWORD);
    
    await passwordInput.fill('184758');
    await checkRule(page, RuleId.RANGE, false);
    
    await passwordInput.fill('184759');
    await checkRule(page, RuleId.RANGE, true);
    
    await passwordInput.fill('856920');
    await checkRule(page, RuleId.RANGE, true);
    
    await passwordInput.fill('856921');
    await checkRule(page, RuleId.RANGE, false);
  });

  test('should validate Adjacency rule (Two adjacent identical digits)', async ({ page }) => {
    const passwordInput = page.getByTestId(IDS.INPUT_PASSWORD);
    
    await passwordInput.fill('123456');
    await checkRule(page, RuleId.ADJACENT, false);
    
    await passwordInput.fill('112345');
    await checkRule(page, RuleId.ADJACENT, true);
    
    await passwordInput.fill('122345');
    await checkRule(page, RuleId.ADJACENT, true);
  });

  test('should validate Non-decreasing rule', async ({ page }) => {
    const passwordInput = page.getByTestId(IDS.INPUT_PASSWORD);
    
    await passwordInput.fill('123456');
    await checkRule(page, RuleId.NON_DECREASING, true);
    
    await passwordInput.fill('123450');
    await checkRule(page, RuleId.NON_DECREASING, false);
    
    await passwordInput.fill('111111');
    await checkRule(page, RuleId.NON_DECREASING, true);
  });

  test('should show valid state for password "188888"', async ({ page }) => {
    const passwordInput = page.getByTestId(IDS.INPUT_PASSWORD);
    await passwordInput.fill('188888');
    
    await checkRule(page, RuleId.LENGTH, true);
    await checkRule(page, RuleId.RANGE, true);
    await checkRule(page, RuleId.ADJACENT, true);
    await checkRule(page, RuleId.NON_DECREASING, true);
  });
});
