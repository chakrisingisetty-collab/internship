# SnapBook Design Tokens Documentation

## 1. Colour Tokens

### Primary 50 — #EDE9FE
Use for light backgrounds and hover states.

### Primary 100 — #D8B4FE
Use for subtle highlights and hover states.

### Primary 500 — #6C5CE7
Use for the main brand colour, buttons, and links.

### Primary 700 — #5B4BD6
Use for active states and focus states.

### Primary 900 — #4338CA
Use for strong emphasis and dark-mode applications.

---

## 2. Neutral Colours

### Gray 900 — #1F2937
Use for headings and primary text.

### Gray 600 — #6B7280
Use for body text and secondary text.

### Gray 300 — #D1D5DB
Use for borders and dividers.

### Gray 100 — #F3F4F6
Use for backgrounds and input fields.

### White — #FFFFFF
Use for cards and surface areas.

---

## 3. Semantic Colours

### Success — #10B981
Use for success messages and confirmations.

### Error — #EF4444
Use for errors and alerts.

### Warning — #F59E0B
Use for warnings and important information.

### Info — #3B82F6
Use for information messages and tips.

---

## 4. Typography Tokens

### Heading 1
- Font: Poppins
- Size: 32px
- Weight: Bold 700
- Line Height: 40px
- Use: Page titles

### Heading 2
- Font: Poppins
- Size: 24px
- Weight: SemiBold 600
- Line Height: 32px
- Use: Section titles

### Body
- Font: Inter
- Size: 16px
- Weight: Regular 400
- Line Height: 24px
- Use: Body content

### Caption
- Font: Inter
- Size: 14px
- Weight: Regular 400
- Line Height: 20px
- Use: Secondary information

### Button
- Font: Poppins
- Size: 16px
- Weight: Medium 500
- Line Height: 24px
- Use: Buttons and CTAs

---

## 5. Spacing Tokens

SnapBook uses an 8px spacing grid.

### 8px — Space 1
Use for small gaps and icon spacing.

### 16px — Space 2
Use for element spacing and input padding.

### 24px — Space 3
Use for section spacing and card padding.

### 32px — Space 4
Use for large section spacing.

### 40px — Space 5
Use for page section spacing and major layouts.

---

## 6. Shadow Tokens

### Shadow Small
Use for cards and buttons.

### Shadow Medium
Use for modals, dropdowns, and elevated cards.

### Shadow Large
Use for dialogs and overlays.

---

## 7. Token Usage Examples

### Primary Button
- Primary 500
- White text
- Small shadow

### Card Component
- White surface
- Medium shadow
- 16px spacing
- Heading 2 and Body typography

### Input Field
- Gray 100 background
- Gray 300 border
- 16px padding
- Body typography

### Success Message
- Success colour
- 16px spacing
- Body typography

---

## 8. Design Token Benefits

Design tokens help maintain consistency across the SnapBook product.

They make the design system easier to maintain, update, and scale across different screens and UI components.
## 9. Implementation

The design tokens are exported into JSON and converted into CSS variables so the same values can be reused consistently across the SnapBook product.

Files:
- `design-tokens.json` — source token definitions
- `tokens.css` — CSS custom properties