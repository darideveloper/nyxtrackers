# Tasks: Standardize Codebase Conventions

## 1. Environment & Dependencies

- [X] 1.1 Install `clsx` dependency
  - Run: `npm install clsx`

## 2. File Normalization

- [ ] 2.1 Rename Page components to `snake_case`
  - Rename `src/pages/IssuesPage.jsx` -> `src/pages/issues_page.jsx`
  - Rename `src/pages/LandingPage.jsx` -> `src/pages/landing_page.jsx`
  - Rename `src/pages/RefoundPolicy.jsx` -> `src/pages/refund_policy.jsx`
  - Rename `src/pages/SetupPage.jsx` -> `src/pages/setup_page.jsx`
  - Rename `src/pages/TermsOfService.jsx` -> `src/pages/terms_of_service.jsx`
- [ ] 2.2 Rename Utility and Lib files
  - Rename `src/utils/ScrollHash.jsx` -> `src/utils/scroll_hash.jsx`
  - Rename `src/libs/google-analytics.js` -> `src/libs/google_analytics.js`
- [ ] 2.3 Update all import references
  - Update imports in `src/main.jsx`, `src/App.jsx`, and any other affected files.

## 3. Implementation of `clsx`

- [ ] 3.1 Refactor `src/components/input.jsx` to use `clsx`
  ```javascript
  import clsx from 'clsx';
  // ...
  <div className={clsx('input-wrapper', { small })}>
  ```
- [ ] 3.2 Refactor `src/components/button.jsx` (if applicable) and other components found during analysis:
  - `src/components/text_area.jsx`
  - `src/components/spinner.jsx`
  - `src/components/set_btn.jsx`
  - `src/components/select_color.jsx`
  - `src/components/info_card.jsx`
  - `src/components/chibis.jsx`
- [ ] 3.3 Refactor section components for consistency:
  - `src/sections/header.jsx`
  - `src/sections/buy_form.jsx`

## 4. Verification

- [ ] 4.1 Verify build still works: `npm run build`
- [ ] 4.2 Verify dev server starts: `npm run dev`
