## 2025-05-15 - [Accessibility & Semantic Dialogs]
**Learning:** Custom modal implementations often lack essential accessibility features like focus trapping and keyboard shortcuts (ESC to close). Using standardized components like Radix Dialog ensures these behaviors are built-in and consistent.
**Action:** Always prefer standardized UI library components for complex interactions like modals or dropdowns to ensure full accessibility.

## 2025-05-16 - [Skip to Content Implementation]
**Learning:** For a "Skip to Content" link to be effective, its target (e.g., `#main-content`) must be placed after the global navigation. If it wraps the navigation itself, it fails to fulfill its purpose. Semantically, the `<main>` tag should contain only the unique content of the page, excluding shared components like headers, navbars, and footers.
**Action:** Always verify the semantic structure when adding accessibility targets, ensuring they correctly bypass repetitive global elements.

## 2025-05-17 - [Interactive Element Focus States]
**Learning:** Using `focus:outline-none` without providing a `focus-visible` alternative hides the focus ring for keyboard users, making the interface non-navigable for them. Standardizing on `focus-visible:ring-2` with an offset ensures visibility only when needed.
**Action:** Replace `focus:outline-none` with accessible `focus-visible` ring styles on all interactive elements.

## 2025-05-18 - [Accessible Progress Indicators]
**Learning:** Visual-only indicators like scroll progress bars are invisible to screen reader users unless they use appropriate ARIA roles and attributes. Providing `role="progressbar"` with `aria-valuenow` allows assistive technology to convey this information. Additionally, guarding against division by zero in progress calculations prevents `NaN` or `Infinity` from being exposed to the DOM.
**Action:** Always add ARIA roles and attributes to custom visual indicators and include defensive logic to handle edge cases in calculations.
