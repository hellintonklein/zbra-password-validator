import i18n from '@/src/shared/i18n';
import { ValidationRule, RuleId } from './types';

export const PASSWORD_RULES: ValidationRule[] = [
  {
    id: RuleId.LENGTH,
    messageKey: 'requirements.length',
    validate: (password) => /^[1-9]\d{5}$/.test(password),
  },
  {
    id: RuleId.RANGE,
    messageKey: 'requirements.range',
    validate: (password) => {
      const num = parseInt(password, 10);
      return !isNaN(num) && num >= 184759 && num <= 856920;
    },
  },
  {
    id: RuleId.ADJACENT,
    messageKey: 'requirements.adjacent',
    validate: (password) => {
      for (let i = 0; i < password.length - 1; i++) {
        if (password[i] === password[i + 1]) return true;
      }
      return false;
    },
  },
  {
    id: RuleId.NON_DECREASING,
    messageKey: 'requirements.nonDecreasing',
    validate: (password) => {
      if (password.length < 2) return false;
      for (let i = 0; i < password.length - 1; i++) {
        if (parseInt(password[i], 10) > parseInt(password[i + 1], 10)) return false;
      }
      return true;
    },
  },
];

export const validatePassword = (password: string) => {
  const failedRules = PASSWORD_RULES.filter(rule => !rule.validate(password));
  
  return {
    isValid: failedRules.length === 0,
    failedRuleIds: failedRules.map(rule => rule.id),
    errors: failedRules.map(rule => i18n.t(rule.messageKey, { ns: 'password_validator' }))
  };
};
