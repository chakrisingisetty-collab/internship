# SnapBook — W5D2 Component Library

## Figma Component Library

Figma:
https://www.figma.com/design/OOiw46tGAt7SyffjAgG6eD/Untitled?node-id=220-2&t=2g2jEB3Vgw9INKro-1

## Components

### 1. Button

Reusable action component for booking, submitting, confirming, and other primary actions.

Variants:
- Primary
- Secondary
- Ghost
- Disabled
- Loading

### 2. Input

Reusable form component for collecting user information.

States:
- Default
- Focus
- Filled
- Error
- Disabled

### 3. Card

Reusable component for displaying photographer and booking information.

States:
- Default
- Hover
- Selected

### 4. Modal

Reusable component for confirmations, success messages, and errors.

Types:
- Confirmation
- Success
- Error

## Design Tokens

The components use the design tokens created in W5D1.

### Colors

- Primary: #6C5CE7
- Text: #1F2937
- Secondary: #6B7280
- Success: #10B981
- Error: #EF4444
- White: #FFFFFF

### Typography

- Poppins — Headings and buttons
- Inter — Body and supporting text

### Spacing

- 8px
- 16px
- 24px
- 32px
- 40px

### Shadows

- Small
- Medium
- Large

## Component Properties

### Button
- Variant: Primary / Secondary / Ghost
- State: Default / Disabled / Loading
- Size: Small / Medium / Large

### Input
- State: Default / Focus / Filled / Error / Disabled

### Card
- State: Default / Hover / Selected

### Modal
- Type: Confirmation / Success / Error

## Usage Guidelines

Use reusable components instead of creating separate UI elements for each screen.

Use Primary buttons for the main action, Secondary buttons for alternative actions, and Ghost buttons for low-priority actions.

Use Input states to clearly communicate user interaction and validation.

Use Cards for structured booking or photographer information.

Use Modals for important confirmations, system feedback, and critical actions.

## Design System Benefits

The component library improves consistency, reusability, scalability, and collaboration between designers and developers.

All components are designed using Auto Layout, variants, and the SnapBook design tokens.