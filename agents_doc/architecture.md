# Architecture Specification

## Overview
The project follows a **Feature-Driven + Layered Architecture** combined with a **Shared Design System**. This structure ensures high decoupling between business logic, infrastructure, and UI, while promoting reuse through global layout primitives and components.

## 1. Feature Layer (`src/features/*`)
Each feature is a self-contained vertical slice following DDD principles.

### Sub-layers:
- **Domain**: Pure business rules, entities, and validation logic. Agnostic of frameworks.
  - *Path*: `src/features/password-validator/domain`
- **Application**: Use cases, orchestration, and state management (Zustand hooks like `usePasswordStore`).
  - *Path*: `src/features/password-validator/application`
- **Infrastructure**: API calls, external integrations (adapters), and data persistence.
  - *Path*: `src/features/password-validator/infrastructure`
- **UI**: Feature-specific presentation.
  - **Screens**: Visual entry points (e.g., `PasswordValidatorScreen`).
  - **Components**: UI elements exclusive to the feature (e.g., `RequirementItem`).
  - *Path*: `src/features/password-validator/ui`

## 2. Shared Layer (`src/shared/ui/`)
The foundation of the project's Design System, containing domain-agnostic elements.

### Structure:
- **Components**: Reusable global UI elements without business logic.
  - *Examples*: `Button`, `Input`, `InlineFeedback`.
  - *Path*: `src/shared/ui/components`
- **Layouts**: Macro-layout primitives that control the application's structure.
  - *Examples*: `PageContainer`, `SplitLayout`, `Sidebar`, `MainSection`, `FormLayout`, `FormActions`.
  - *Path*: `src/shared/ui/layouts`
- **Design System**: Global tokens and styling helpers (`design-system.ts`).

## 3. Global Layer (`src/`)
Root composition and bootstrapping files.
- `App.tsx`: Root component composition.
- `main.tsx`: React entry point.
- `index.css`: Tailwind CSS entry.
- `variables.css`: Design Tokens (CSS Variables).
- `theme.ts`: Mantine theme configuration.

## Scaling Rules
- New features must follow the same vertical slice structure.
- Any UI element used in more than one feature MUST move to `shared/ui`.
- Features never import other features directly; orchestration happens in the Application layer or higher.
- `shared` layer never depends on `features`.

