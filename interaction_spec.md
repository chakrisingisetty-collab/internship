# SNAPBOOK — INTERACTION SPECIFICATION

## Week 3 — Day 2: Interaction Design

### Figma Animated Prototype

https://www.figma.com/design/OOiw46tGAt7SyffjAgG6eD/Untitled?node-id=92-250&t=KpCORyus4COUxoIO-1


---

## 01 — BUTTON PRESS

**Purpose:**  
Provides immediate visual feedback when the user presses a button.

**Trigger:**  
User presses the "Book Now" button.

**Animation:**  
Button scales down to 95% and smoothly returns to its original size.

**Transition:**  
Smart Animate — 150ms.

**States:**  
Default → Pressed → Default


---

## 02 — FORM SUBMISSION SUCCESS

**Purpose:**  
Confirms that the user's form has been successfully submitted.

**Trigger:**  
User submits the booking form.

**Animation:**  
Submit button changes to a loading state and then displays a success message with a check icon.

**Feedback:**  
Booking Confirmed

**Transition:**  
Smart Animate — 300ms.

**States:**  
Default → Loading → Success


---

## 03 — ERROR SHAKE

**Purpose:**  
Draws the user's attention to an invalid input field.

**Trigger:**  
User enters invalid information and submits the form.

**Animation:**  
Input moves left → right → back to the original position.

**Feedback:**  
Red error border, error icon, and error message.

**Error Message:**  
Please enter a valid email address.

**Transition:**  
Smart Animate — 100ms per movement.

**States:**  
Normal → Left → Right → Normal


---

## 04 — LOADING SPINNER

**Purpose:**  
Shows that the system is processing a request.

**Trigger:**  
User waits while booking data is being processed.

**Animation:**  
Circular spinner rotates continuously.

**Transition:**  
Smart Animate — 300ms.

**Loop:**  
Frame 1 → Frame 2 → Frame 3 → Frame 1

**States:**  
0° → 120° → 240° → 0°


---

## 05 — TOGGLE SWITCH

**Purpose:**  
Allows users to turn a setting ON or OFF.

**Trigger:**  
User clicks the toggle switch.

**Animation:**  
The toggle knob smoothly moves between the OFF and ON positions.

**States:**  
OFF → ON  
ON → OFF

**Transition:**  
Smart Animate — 250ms.


---

## 06 — LOADING SCREEN

**Purpose:**  
Provides visual feedback while the SnapBook application is loading.

**Trigger:**  
The application starts loading content.

**Animation:**  
Circular spinner rotates while loading dots animate sequentially.

**Loading Text:**  
Loading your experience...

**Loading Dots:**  
● • • → • ● • → • • ●

**Transition:**  
Smart Animate with a continuous loop.


---

# 12 PRINCIPLES OF ANIMATION

1. **Squash and Stretch** — Subtle scaling of loading dots.
2. **Anticipation** — Small movement before the main animation.
3. **Staging** — Loading indicator is clearly positioned at the center.
4. **Straight Ahead / Pose to Pose** — Predefined animation frames are used.
5. **Follow Through** — Elements smoothly return after movement.
6. **Slow In and Slow Out** — Animations start and finish smoothly.
7. **Arcs** — Spinner follows a circular motion.
8. **Secondary Action** — Loading dots support the main spinner animation.
9. **Timing** — Animation speed is controlled and consistent.
10. **Exaggeration** — Subtle movement makes the loading state noticeable.
11. **Solid Drawing** — Shapes remain consistent throughout the animation.
12. **Appeal** — Clean and simple SnapBook visual style.


---

# ACCESSIBILITY CONSIDERATIONS

- Animations are subtle and purposeful.
- Important information is not communicated through colour alone.
- Error states include icons and text along with colour.
- Loading feedback is clearly visible.
- Motion is kept smooth and short to avoid distraction.


---

# TOOLS USED

- Figma
- Figma Components
- Figma Variants
- Auto Layout
- Smart Animate
- Figma Prototype


---

# INTERACTION SUMMARY

| Interaction | Trigger | Feedback | Animation |
|---|---|---|---|
| Button Press | Press button | Button scales | Smart Animate |
| Form Success | Submit form | Success message | Smart Animate |
| Error Shake | Invalid input | Error message | Shake animation |
| Loading Spinner | Data loading | Rotating spinner | Smart Animate |
| Toggle Switch | Click toggle | ON/OFF state | Smart Animate |
| Loading Screen | App loading | Spinner + dots | Smart Animate |