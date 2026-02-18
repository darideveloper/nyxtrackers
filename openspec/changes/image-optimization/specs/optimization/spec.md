# Image Optimization Specification

This specification outlines the technical implementation for various image optimizations.

## 1. Native Lazy Loading

All images that are not part of the initial viewport (Above the Fold) will be updated with the `loading="lazy"` attribute.

### Static Components
Add `loading="lazy"` to `<img>` tags in the following files:

- `src/components/image.jsx`: The generic image wrapper.
- `src/components/buy_card.jsx`: Product cards.
- `src/components/info_card.jsx`: Stats/Feature cards.
- `src/sections/collaborations.jsx`: Collaboration logos.
- `src/sections/socials.jsx`: Social links icons.
- `src/sections/footer.jsx`: Payment provider icons.

### Implementation Example
```jsx
// src/components/image.jsx
export default function Image({ image }) {
    return (
        <div className='zoom-wrapper'>
            <img src={image} alt="image of custom product" loading="lazy" />
        </div>
    )
}
```

## 2. Swiper Carousel Enhancement

The `Gallery` component (using Swiper 11) will be updated to handle images more efficiently.

### Changes to `src/components/gallery.jsx`
1.  Add `loading="lazy"` to images inside `SwiperSlide`.
2.  Add a `swiper-lazy-preloader` div to each slide. Swiper automatically handles this element's visibility.

```jsx
// src/components/gallery.jsx (Partial implementation)
{images_data && images_data.map((image_data, index) => (
  <SwiperSlide key={index}>
    <a href={image_data.link} target='_blank'>
      <img
        src={image_data.image}
        alt={image_data.alt}
        loading="lazy"
      />
      <div className="swiper-lazy-preloader"></div>
    </a>
  </SwiperSlide>
))}
```

## 3. Documentation Content

The `src/pages/setup_page.jsx` contains approximately 15+ instructional images/GIFs. Each will be updated with `loading="lazy"`.

```jsx
// src/pages/setup_page.jsx
<img
  src="page-assets/quick_intro.png"
  alt="The first page of the SlimeVR Wizard"
  loading="lazy"
/>
```

## 4. CSS Preloader Styles
Swiper's preloader requires some CSS support if not already included in Swiper styles. We will ensure `swiper/css` is properly imported in `Gallery.jsx` (already exists).

## 5. Remote Image Handling
Images fetched from the VPS via `DashboardContext` are used in the `Hero` section's `Gallery`. By applying the Swiper optimizations above, these remote images will also benefit from deferred loading.
