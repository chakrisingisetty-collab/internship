# W7D1 — SnapBook WCAG 2.2 AA Contrast Check

## Contrast Requirements
- Normal text: minimum 4.5:1
- Large text: minimum 3:1
- UI components and graphical objects: generally 3:1 against adjacent colours

## Contrast Results

| # | Text Colour | Background Colour | Contrast Ratio | Normal Text | Large Text | Result |
|---|---|---|---|---|---|---|
| 1 | #4E5A66 | #F5F7FA | 6.57:1 | Pass | Pass | PASS |
| 2 | #1A2B4C | #F5F7FA | 13.10:1 | Pass | Pass | PASS |
| 3 | #D4AF37 | #F5F7FA | 1.96:1 | Fail | Fail | FAIL |
| 4 | #FFFFFF | #1A2B4C | 14.06:1 | Pass | Pass | PASS |
| 5 | #00A8A8 | #F5F7FA | 2.73:1 | Fail | Fail | FAIL |

## Suggested Fixes

- Royal Gold (#D4AF37): Use a darker gold such as #8A6D00 for text on Soft Slate.
- Fresh Aqua (#00A8A8): Use a darker aqua such as #007777 for text on Soft Slate.
- Verify contrast before using accent colours for text or important interactive elements.

## Conclusion

Midnight Navy, Cool Charcoal, and white on Midnight Navy pass the stated text contrast requirements. Royal Gold and Fresh Aqua fail against Soft Slate and need darker alternatives for text use.