# Change: Image Optimization

## Why
The project contains numerous images, especially in the documentation pages and the product showcase, many of which are fetched from a remote VPS. Currently, all images load simultaneously on page start, which increases initial load time and bandwidth usage. 

## What Changes
- Implement native browser lazy loading using the `loading="lazy"` attribute.
- Enhance the Swiper-based galleries with built-in lazy loading and preloader indicators.
- Targets static and remote images while protecting critical (LCP) images.

## Impact
- **Affected Specs**: `media_optimization`
- **Affected Code**: `Gallery.jsx`, `Image.jsx`, `BuyCard.jsx`, `InfoCard.jsx`, `Collaborations.jsx`, `Socials.jsx`, `Footer.jsx`, `setup_page.jsx`.
