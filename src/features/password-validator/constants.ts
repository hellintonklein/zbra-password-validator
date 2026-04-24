export const PASSWORD_VALIDATOR_CONSTANTS = {
  IDS: {
    FORM: 'password-validator-form',
    INPUT_NAME: 'input-name',
    INPUT_EMAIL: 'input-email',
    INPUT_PASSWORD: 'input-password',
    BUTTON_SUBMIT: 'button-submit',
  },
  CONFIG: {
    MAX_PASSWORD_LENGTH: 6,
    EMAIL_PATTERN: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  },
} as const;
