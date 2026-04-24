# Test Data Suite: Password Validator

This document provides a comprehensive set of test cases to validate the business rules and form constraints defined in the project requirements.

## 1. Password Validation Rules (Pure Logic)
According to the security criteria, a valid password must meet ALL four conditions [1, 2]:
1. Exactly 6 digits (`length`).
2. Numeric value between 184759 and 856920 (`range`).
3. At least two adjacent identical digits (`adjacent`).
4. Non-decreasing digits from left to right, minimum 2 digits (`nonDecreasing`).

### ✅ Valid Test Cases
| Input | Reason for Validity |
| :--- | :--- |
| `188888` | Within range, contains '88', digits never decrease. |
| `223456` | Within range, contains '22', digits never decrease. |
| `455678` | Within range, contains '55', digits never decrease. |
| `678888` | Within range, contains '88', digits never decrease. |
| `199999` | Within range, contains '99', digits never decrease. |

### ❌ Invalid Test Cases
| Input | Violated Rule(s) (RuleId) |
| :--- | :--- |
| `123456` | `adjacent` (No identical neighbors). |
| `184758` | `range` (Below 184759). |
| `856921` | `range` (Above 856920). |
| `223450` | `nonDecreasing` (Decreases at index 5). |
| `1`      | `nonDecreasing` (Requires at least 2 digits). |
| `11223`  | `length` (Too short). |
| `1223456`| `length` (Too long). |
| `135789` | `adjacent` (No duplicates). |

## 2. Form Field Constraints
The submission button must remain disabled until all fields are valid [3].

### 👤 Name Field
- **Valid:** `John Doe`, `A` (minimum 1 char).
- **Invalid:** Empty string (Required field) [3].

### 📧 Email Field
- **Valid:** `test@zbra.com.br`, `user.name@domain.co`.
- **Invalid:** `test@`, `test@domain`, `plainaddress` (Must follow email pattern) [3].

## 3. Integration & API Scenarios
- **Success Case:** All fields valid -> POST returns 201 (Success Toast) [4, 5].
- **Error Case:** Mock API failure simulation (Error Toast/Retry message) [4, 5].
- **Loading State:** All fields and the submit button must be disabled during the request [3].
