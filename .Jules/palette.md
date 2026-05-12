## 2025-05-15 - [Accessibility & Semantic Dialogs]
**Learning:** Custom modal implementations often lack essential accessibility features like focus trapping and keyboard shortcuts (ESC to close). Using standardized components like Radix Dialog ensures these behaviors are built-in and consistent.
**Action:** Always prefer standardized UI library components for complex interactions like modals or dropdowns to ensure full accessibility.

## 2025-05-20 - [Keyboard Navigation & Skip Links]
**Learning:** For portfolios with long landing pages or complex navbars, a "Skip to Content" link is essential for keyboard users. Without it, they must tab through every navigation link on every page reload.
**Action:** Implement a visually-hidden (until focused) skip link as the first focusable element, targeting a `<main id="main-content" tabIndex={-1}>` wrapper.

## 2025-05-20 - [Focus Visibility]
**Learning:** `focus:outline-none` is often used for aesthetic reasons but breaks accessibility for keyboard users.
**Action:** Always use `focus-visible` with a clear ring or outline (e.g., `focus-visible:ring-2`) to ensure interactive elements are trackable during keyboard navigation without affecting mouse users.
