# W7D3 — SnapBook WCAG Accessibility Audit

## Objective
Evaluate SnapBook design colours using WCAG contrast guidelines.

## WCAG AA Requirements
- Normal text: minimum contrast ratio 4.5:1.
- Large text: minimum contrast ratio 3:1.
- UI components and meaningful graphical objects: minimum contrast ratio 3:1.

## Colour Combinations Tested

| Foreground | Background | Intended Use |
|---|---|---|
| #1A2B4C | #F5F7FA | Main text on light background |
| #4E5A66 | #F5F7FA | Secondary text |
| #FFFFFF | #1A2B4C | White text on primary button |
| #D4AF37 | #F5F7FA | Gold accent on light background |
| #00A8A8 | #F5F7FA | Aqua interactive elements |

## Audit Results

| Foreground Colour | Background Colour | Contrast Ratio | Result |
|---|---|---:|---|
| #1A2B4C | #F5F7FA | 13.10:1 | Pass |
| #4E5A66 | #F5F7FA | 6.57:1 | Pass |
| #FFFFFF | #1A2B4C | 14.06:1 | Pass |
| #D4AF37 | #F5F7FA | 1.96:1 | Fail |
| #00A8A8 | #F5F7FA | 2.73:1 | Fail |

## Fix Suggestions
- Replace #D4AF37 with a darker gold such as #8A6D00 for text on light backgrounds.
- Replace #00A8A8 with a darker teal such as #007777 for text on light backgrounds.
- Recheck contrast ratios after changing the colours.
- Never rely on colour alone to communicate success, errors, or warnings.

## Conclusion
Accessibility testing helps make SnapBook readable and usable for people with different visual needs. All contrast results must be verified before finalising the design.