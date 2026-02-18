# Change: Standardize Codebase Conventions

## Why
The current codebase has inconsistencies in file naming (mixing `PascalCase` and `snake_case`) and lacks a standard approach for handling conditional class names in React components. Aligning the codebase with the conventions documented in `openspec/project.md` will improve maintainability and follow better React practices.

## What Changes
- **Install `clsx`**: Add the `clsx` library to manage conditional classes efficiently.
- **Normalize File Names**: Rename all files in `src/pages`, `src/utils`, and `src/libs` to follow the `snake_case` convention.
- **Refactor Conditional Classes**: Replace template literal concatenations and logical operators in `className` attributes with the `clsx` utility across core components.
- **Fix Naming Typos**: Rename `RefoundPolicy.jsx` to `refund_policy.jsx` to match correct spelling and URL routing.

## Impact
- **Affected Files**:
  - `package.json` (New dependency)
  - `src/pages/*` (Renames and internal imports)
  - `src/main.jsx` (Updated imports)
  - `src/components/*` (Refactored for `clsx`)
  - `src/sections/*` (Refactored for `clsx`)
- **Breaking Changes**: None. This is a refactoring effort that preserves existing functionality.
