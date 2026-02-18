# Design: Standardization and Conventions

## Context
The project has grown with slight variations in conventions. Some files use `PascalCase` while others use `snake_case`. Additionally, conditional styling is currently handled using template literals, which can become messy and error-prone as the project scales.

## Goals
- Achieve 100% `snake_case` file naming in `src`.
- Centralize conditional class logic using `clsx`.
- Establish a pattern that avoids Astro-specific `class:list` (as this is a pure React project managed via Vite).

## Decisions

### 1. Renaming Strategy
We will rename files and immediately update imports. We'll also fix the `RefoundPolicy` typo to `RefundPolicy` (in code) and `refund_policy.jsx` (on disk) to align with English spelling and the existing `/refund-policy` route.

### 2. `clsx` Adoption
`clsx` is chosen over `classnames` for its smaller footprint and superior performance. It handles objects, arrays, and strings interchangeably.

**Example Transformation:**
```javascript
// Before
<div className={`tab ${active ? 'active' : ''} ${disabled ? 'disabled' : ''}`}>

// After
<div className={clsx('tab', { active, disabled })}>
```

### 3. State Management Consistency
While auditing, we will ensure that `src/api` files (static data) remain `snake_case` (which they mostly are) and that components remain in `src/components` vs `src/sections`.

## Risks / Trade-offs
- **Import Errors**: Renaming many files can break imports. Mitigation: Perform a global search for affected files and update components in bulk.
- **Merge Conflicts**: This is a cross-cutting change. Mitigation: Apply this change when no other major features are being actively modified in those specific files.
