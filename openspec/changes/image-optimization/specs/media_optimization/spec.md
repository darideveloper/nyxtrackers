## ADDED Requirements

### Requirement: Image Lazy Loading
All non-critical images (those not likely to be in the first viewport on load) SHALL implement native browser lazy loading using the `loading="lazy"` attribute to minimize initial bandwidth and improve LCP.

#### Scenario: Documentation image loading
- **WHEN** the user visits the setup page
- **THEN** images below the first section MUST NOT load until the user scrolls near them
- **AND** they MUST have the `loading="lazy"` attribute in the DOM

### Requirement: Optimized Image Sliders
The Hero and product galleries SHALL implement efficient image loading that preloads adjacent slides while lazy-loading distant ones, including a visual loading indicator for improved UX.

#### Scenario: Swiper gallery slide transition
- **WHEN** the user scrolls to a Swiper-based gallery component
- **THEN** the visible slide MUST load eagerly if not already loaded
- **AND** off-screen slides MUST be native-lazy-loaded by the browser
- **AND** a preloader element (`swiper-lazy-preloader`) MUST be present during load
