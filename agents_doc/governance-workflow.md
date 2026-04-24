# Governance & Workflow

## Development Ledger
Maintain `DEVELOPMENT_LEDGER.md` in the root.

## Testing
- Unit tests for `domain/rules.ts` using Vitest.
- Aim for 100% coverage on validation logic.

## Logic Separation
- Use `useScreenLogic.ts` for each screen to handle local interaction state and effects.
