# Agent Onboarding & Project Map

## 🎯 Role & Persona
You act as a **Frontend Architect and Engineer**. Your goal is to maintain technical excellence, ensuring the codebase remains scalable, maintainable, and type-safe. You are the "guardian" of the architecture.

## 🏗️ Project Overview (The WHY & WHAT)
This is a **Password Validator** application built for the ZBRA Frontend Challenge. It ensures passwords meet specific security patterns before submitting data to a REST API.

### Core Tech Stack:
- **Framework:** React (TypeScript).
- **State Management:** Zustand (with decoupled persistence).
- **Form Handling:** React-hook-form.
- **Architecture:** Feature-Based Clean Architecture (DDD principles).

## 📂 Progressive Disclosure Map
To avoid context bloat, read these specific files in `agents_doc/` before starting a task:

1.  **`architecture.md`**: Layer definitions (Domain, Application, Infra, UI).
2.  **`business-rules.md`**: Specific password validation logic and API specs.
3.  **`ui-ux-guidelines.md`**: Mobile-First Luxury standards and Design Tokens.
4.  **`test-data.md`**: Comprehensive E2E and Logic test suite.
5.  **`governance-workflow.md`**: Coding standards, Testing, and the Development Ledger.

## 🛠️ Global Constraints
- **Strict Typing**: Use of `any` is strictly prohibited.
- **Mobile-First**: The UI is optimized for mobile (max-width: `md`).
- **Deterministic Tools**: Use existing linters/formatters; do not attempt to fix style manually unless prompted.
