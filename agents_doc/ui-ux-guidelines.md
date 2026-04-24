# UI/UX & Styling Guidelines

## 1. Styling Architecture

### Macro Layout (Tailwind CSS)
- **Role**: Structural positioning, flex/grid, and responsiveness.
- **Rules**: 
  - Use `flex`, `grid`, `space-y-x`, `md:`, `lg:` only in Layout components.
  - Never use Mantine's `Stack` or `Group` for structural macro-layout.
  - Breakpoints MUST be defined in `src/index.css` for Tailwind v4 compatibility.

### UI Components (Mantine UI)
- **Role**: Functional components (Inputs, Buttons, Cards, Paper).
- **Rules**:
  - Components must be wrapped in Shared Layout primitives.
  - Do not use Mantine components to control the structural layout of the page.

### Design Tokens (CSS Variables)
- **File**: `src/variables.css`
- **Usage**: Colors, spacing, typography, radius, and shadows.
- **Rules**: Use `var(--token-name)`. Do not use tokens for breakpoints.

### Animations (Framer Motion)
- **Usage**: Transitions and visual feedback.
- **Rules**: Must not interfere with the layout flow or control `display` properties.

## 2. Component Classification

### Shared Layouts (`shared/ui/layouts`)
- **Examples**: `PageContainer`, `SplitLayout`, `Sidebar`, `FormLayout`, `FormActions`.
- **Constraint**: Control macro-layout using Tailwind.

### Shared Components (`shared/ui/components`)
- **Examples**: `Button`, `Input`, `InlineFeedback`.
- **Constraint**: Domain-agnostic, no business logic.

### Feature Components (`features/*/ui`)
- **Examples**: `PasswordValidatorScreen`, `RequirementItem`.
- **Constraint**: Can use `shared/ui` elements, but cannot be reused globally.

## 3. Visual Standards
- **Container**: Max-width `5xl` for the main card, centered in `PageContainer`.
- **Luxury Aesthetic**: 
  - Large radii (2xl - `var(--radius-2xl)`).
  - Soft, multi-layered shadows (`var(--shadow-luxury)`).
  - Background decorative elements (Blur circles).
- **Typography**: Inter (Sans-serif) for body, Bold headings with tracking-tight.
- **Feedback**: 
  - Real-time validation updates with color transitions.
  - Success messages with icon and uppercase text (`InlineFeedback`).
  - Loading states for all submission actions.

