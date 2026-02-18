# Project Context

## Purpose
Nyxtrackers is a client-facing landing page and e-commerce site for selling high-quality customizable trackers (likely for VR/motion tracking). The main goal is to showcase the product, provide a smooth customization and buying flow (integrated with Ko-fi), and manage customer interaction through various sections like galleries, testimonials, and detailed product options.

## Tech Stack
- **Core**: React 18, JavaScript (ES6+)
- **Build System**: Vite 5
- **State Management**: Redux Toolkit (`@reduxjs/toolkit`, `react-redux`)
- **Routing**: React Router v7
- **Styling**: Sass (`.scss`)
- **Main Components & Utilities**:
  - `react-hook-form` (Form handling)
  - `swiper` & `@splidejs/react-splide` (Product galleries/sliders)
  - `sweetalert2` (Notifications/Modals)
  - `react-select` (Dropdowns)
  - `react-tooltip`
  - `react-countup`

## Project Conventions

### Code Style
- **File Naming**: Use `snake_case` for all files (e.g., `buy_form.jsx`, `hero.jsx`).
- **Component Naming**: Use `PascalCase` for component function names (e.g., `Hero`, `Gallery`).
- **Variable/Function Naming**: Use `camelCase` for internal variables and helper functions.
- **CSS Classes**: Use `kebab-case` for class names (e.g., `regular-width`).
- **Conditional Classes**: Always use the `clsx` library for complex or conditional classes (per global project rules).
- **Documentation**: Use JSDoc for complex functions and provide `PropTypes` for components.

### Architecture Patterns
- **Directory Structure**:
  - `src/sections/`: Large page-specific blocks (Hero, About, Footer).
  - `src/components/`: Reusable, atomic UI elements.
  - `src/features/`: Redux slices and feature-specific logic.
  - `src/api/`: Static data and mockup API functions.
- **State Management**: Use Redux for global application state and React Context for domain-specific context (e.g., `DashboardContext`).

### Testing Strategy
- Currently focuses on manual verification of UI/UX flows. No automated testing framework is presently configured.

### Git Workflow
- Descriptive commit messages (preferably following Conventional Commits).
- Feature-based branching.

## Domain Context
- **Product**: Physical trackers with customizable points (5 to 10 points) and colors.
- **Sets**: Tiered packages (Basic, Standard, Enhanced, Elite).
- **Customization**: Tracking points, tracker colors, and logo colors.
- **Checkout**: External integration via Ko-fi.

## Important Constraints
- **Responsiveness**: Mobile-first approach or high-fidelity responsive design is required.
- **Performance**: Optimize media (images/videos) as the site is media-heavy.
- **Visuals**: Premium feel with smooth hover animations and transitions.

## External Dependencies
- **Ko-fi**: Payment and order management.
- **Google Analytics**: Performance and traffic tracking.
- **GitHub**: Used for hosting media and project deployment.

