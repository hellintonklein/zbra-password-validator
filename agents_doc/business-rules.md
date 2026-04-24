# Business Rules & Requirements

## Password Validation Rules
1. **Length**: Exactly 6 digits (`RuleId.LENGTH`).
2. **Range**: Numeric value must be between 184759 and 856920 (`RuleId.RANGE`).
3. **Adjacency**: Must have at least two adjacent identical digits (e.g., "11", "22") (`RuleId.ADJACENT`).
4. **Order**: Digits must be non-decreasing from the very first digit (e.g., "123445" is ok, "123443" is not). Requires at least 2 digits to be evaluated (`RuleId.NON_DECREASING`).

## Architectural Standards
- **Rule Identification**: All validation rules are identified by a `RuleId` enum. This prevents reliance on string messages or array indices in the UI layer.
- **Validation Result**: Returns both `isValid` status, an array of `failedRuleIds`, and the user-friendly `errors` messages.

## Adding New Validation Rules
To add a new security requirement, follow these steps:

1.  **Define the ID**: Add a new entry to the `RuleId` enum in [types.ts](file:///Users/hellintonklein/Downloads/zbra-password-validator%20%285%29/src/features/password-validator/domain/types.ts).
2.  **Implement Logic**: Add a new object to the `PASSWORD_RULES` array in [rules.ts](file:///Users/hellintonklein/Downloads/zbra-password-validator%20%285%29/src/features/password-validator/domain/rules.ts) with the new `RuleId`, a clear error message, and the validation function.
3.  **Update UI**: Add the requirement to the `securityRequirements` list within [PasswordValidatorScreen.tsx](file:///Users/hellintonklein/Downloads/zbra-password-validator%20%285%29/src/features/password-validator/ui/screens/PasswordValidatorScreen.tsx) so it appears in the sidebar.
4.  **Add Tests**: Create new test cases in [rules.test.ts](file:///Users/hellintonklein/Downloads/zbra-password-validator%20%285%29/src/features/password-validator/domain/rules.test.ts) to verify the rule logic and its integration.

## API Integration
- **Endpoint**: `POST https://zbra-frontend-challenge.azurewebsites.net/api/PasswordValidation`
- **Request Body**:
  ```json
  {
    "name": "string",
    "email": "string",
    "password": "string"
  }
  ```
- **Expectation**: HTTP 201 for success. Mock API always returns 201.
