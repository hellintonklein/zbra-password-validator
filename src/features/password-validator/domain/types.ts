

export interface PasswordValidationRequest {
  name: string;
  email: string;
  password: string;
}

export enum RuleId {
  LENGTH = 'length',
  RANGE = 'range',
  ADJACENT = 'adjacent',
  NON_DECREASING = 'nonDecreasing'
}

export interface ValidationRule {
  id: RuleId;
  messageKey: string;
  validate: (password: string) => boolean;
}

export interface ValidationResult {
  isValid: boolean;
  failedRuleIds: RuleId[];
  errors: string[];
}
