# Image Optimization Proposal

## Summary
Implement performance optimizations for images across the Nyxtrackers website. This includes adding native browser lazy loading to static and remote images, and enhancing the Swiper-based galleries with built-in lazy loading and preloader indicators.

## Motivation
The project contains numerous images, especially in the documentation pages and the product showcase, many of which are fetched from a remote VPS. Currently, all images load simultaneously on page start, which increases initial load time and bandwidth usage. Optimizing these will improve the Core Web Vitals (LCP/FCP) and provide a smoother user experience, particularly for users on mobile or slower connections.

## High-level Goals
- Reduce initial bandwidth consumption by deferring off-screen image loading.
- Enhance the Hero gallery and product carousels with smooth loading transitions.
- Maintain premium visual feel with the addition of loading indicators in carousels.

## Affected Areas
- **Components**: `Gallery`, `Image`, `BuyCard`, `InfoCard`.
- **Sections**: `Collaborations`, `Socials`, `Footer`, `Hero`.
- **Pages**: `setup_page.jsx`.

## References
- See [Image Optimization Specification](./specs/optimization/spec.md) for detailed implementation details and code examples.
- See [Tasks](./tasks.md) for the execution checklist.
