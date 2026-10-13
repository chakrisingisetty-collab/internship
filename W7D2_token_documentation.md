# W7D2 — SnapBook Design Token Documentation

## Objective
Create a reusable design token system for SnapBook
using colours, typography, spacing, and shadows.

## 1. Colour Tokens

| Token | Value | Usage |
|---|---|---|
| Primary 100 | #E8EAF0 | Light backgrounds |
| Primary 300 | #A8B2C7 | Borders and disabled states |
| Primary 500 | #1A2B4C | Primary buttons |
| Primary 700 | #12203A | Hover states |
| Primary 900 | #0B1426 | Headings |

## 2. Typography Tokens

| Token | Size | Weight |
|---|---|---|
| Heading | 24px | Bold |
| Body | 16px | Regular |
| Caption | 12px | Regular |

## 3. Spacing Tokens

| Token | Value | Usage |
|---|---|---|
| XS | 4px | Icon gaps |
| SM | 8px | Small spacing |
| MD | 16px | Component spacing |
| LG | 24px | Section spacing |
| XL | 32px | Page margins |

## 4. Shadow Tokens

- shadow-sm: Buttons and input fields
- shadow-md: Cards and dropdowns
- shadow-lg: Modals and overlays

## 5. CSS Usage Example

```css
.primary-button {
  background: var(--color-primary-500);
  padding: var(--spacing-md);
  box-shadow: var(--shadow-sm);
}