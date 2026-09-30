\# W5D3 — Storybook Setup: Document Components in Code



\## Project

SnapBook — Photography Booking \& Management App



\## Storybook Components



\### 1. Button

Reusable button component for primary and secondary actions.



Variants:

\- Primary

\- Secondary

\- Ghost

\- Disabled

\- Loading



Props:

\- label

\- variant

\- size

\- disabled

\- loading

\- onClick



\### 2. Input

Reusable form input component.



States:

\- Default

\- Focus

\- Filled

\- Error

\- Disabled



Props:

\- label

\- placeholder

\- value

\- state

\- errorMessage

\- disabled

\- onChange



Accessibility:

\- Associated label using htmlFor

\- Unique input ID

\- aria-invalid for error state

\- aria-describedby for error messages



\### 3. Card

Reusable booking information card.



States:

\- Default

\- Hover

\- Selected



Props:

\- name

\- category

\- date

\- location

\- price

\- selected



\## Documentation



Storybook Autodocs is enabled using:



tags: \["autodocs"]



Each component includes:

\- Component description

\- Props documentation

\- Controls

\- Variants/states

\- Usage examples



\## Accessibility Testing



Accessibility testing was performed using Storybook's Accessibility addon powered by axe-core.



Results:



\- Button: 0 violations

\- Input: 0 violations

\- Card: 0 violations



The Card component initially had a color contrast issue. The category text color was changed from #6c5ce7 to #5145b5 to meet the WCAG AA contrast requirement.



Final accessibility result:

No accessibility violations found.



\## Tools Used



\- React

\- Vite

\- Storybook

\- JavaScript

\- CSS

\- axe-core

\- Git

\- GitHub

