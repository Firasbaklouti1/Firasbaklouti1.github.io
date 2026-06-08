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

## 2025-05-19 - [Asynchronous Content Loading in Dialogs]
**Learning:** Displaying iframes in dialogs without loading feedback can lead to a "blank screen" effect, especially for large assets like PDFs. Using a `Spinner` with the `onLoad` event on the iframe provides immediate feedback and a smoother transition as content fades in.
**Action:** Always implement loading states for asynchronous content like iframes to ensure a polished user experience.

## 2025-05-20 - [Framer Motion Path Drawing Animations]
**Learning:** For SVG path drawing animations to work correctly with `framer-motion`, the `pathLength`, `initial`, and `animate` props must be applied directly to the `motion.path` or `motion.polyline` elements. Applying them to the parent `motion.svg` container does not trigger the expected path length calculation and prevents the drawing effect.
**Action:** Always target the specific path-based elements within an SVG when implementing drawing animations to ensure correct visual execution.
## 2025-05-20 - [Post-Submission Interaction States]
**Learning:** For forms in single-page applications, relying solely on ephemeral feedback like toasts can be insufficient for important actions. Replacing the form with a persistent success state (e.g., "Message Sent!") provides a clear, unambiguous terminal state and reduces cognitive load by removing now-unnecessary inputs.
**Action:** Implement terminal success states for primary conversion forms to confirm completion and provide clear follow-up actions (e.g., "Send another message").

## 2025-05-21 - [Binary Asset Hygiene & Build Artifacts]
**Learning:** In projects that dynamically generate assets (like PDFs) during build/dev, build scripts can pollute the version control status with binary changes. Blindly committing these changes can lead to large, unnecessary PRs. Additionally, keeping UX components focused and under a line limit (e.g., 50 lines) ensures they remain manageable and don't overreach.
**Action:** Always verify `git status` before submission and restore any unintended binary modifications. Refactor components to maintain a tight, single-responsibility focus within line limits.
