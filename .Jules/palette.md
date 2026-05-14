## 2025-05-15 - [Accessibility & Semantic Dialogs]
**Learning:** Custom modal implementations often lack essential accessibility features like focus trapping and keyboard shortcuts (ESC to close). Using standardized components like Radix Dialog ensures these behaviors are built-in and consistent.
**Action:** Always prefer standardized UI library components for complex interactions like modals or dropdowns to ensure full accessibility.

## 2025-05-16 - [Skip to Content Implementation]
**Learning:** For a "Skip to Content" link to be effective, its target (e.g., `#main-content`) must be placed after the global navigation. If it wraps the navigation itself, it fails to fulfill its purpose. Semantically, the `<main>` tag should contain only the unique content of the page, excluding shared components like headers, navbars, and footers.
**Action:** Always verify the semantic structure when adding accessibility targets, ensuring they correctly bypass repetitive global elements.
