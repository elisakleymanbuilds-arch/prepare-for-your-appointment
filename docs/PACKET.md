# Week 5 MVP Packet — Prepare for Your Appointment

## 1. Problem

People in Mexico can receive a confusing or concerning medical test result and not know what to do before their next appointment.

The problem is not only understanding the result. It is also knowing what to ask the doctor, remembering the doctor's instructions, and knowing what to do next.

This is especially difficult when tests and consultations happen in different places or when patients do not have someone who can explain the process to them.

The product does not try to diagnose the patient. It helps the patient prepare for the appointment and organize what the doctor says.

---

## 2. Exact User

The exact user is a person in Mexico, around 20–35 years old, who received a confusing or concerning medical test result and has an upcoming appointment with a doctor.

Example user:

> "I received blood test results and I do not know what they mean or what I should ask my doctor."

The user may feel worried, confused, or unsure about what to do next.

---

## 3. Success Definition

The MVP is successful if a user can:

1. Enter what happened and what they are worried about.
2. Receive 3–4 practical questions to ask their doctor.
3. Review the questions before the appointment.
4. Save the questions in the browser.
5. Enter the doctor's instructions after the appointment.
6. Save those instructions locally.
7. Reload the page without losing the saved information.

The MVP should help the user feel more prepared for the appointment without trying to replace a doctor.

---

## 4. Mockup

The MVP is based on a simple desktop web app called **Prepare for Your Appointment**.

The main screen has:

- A clear safety message.
- A "Before Your Appointment" section.
- A text box for the user's situation.
- A text box for the user's main concern.
- A "Prepare My Questions" button.
- A "Questions to Ask Your Doctor" section.
- A label saying "Simulated AI Output (Educational Demo)."
- An "After Your Appointment" section.
- A text box for the doctor's instructions and next steps.
- A "Save My Notes" button.
- A "Clear All" button.

The mockup focuses on one simple flow instead of trying to build a full healthcare platform.

---

## 5. User Flow

```mermaid
flowchart TD
    subgraph UserFlow ["User Actions"]
        A["User receives concerning or confusing lab test result"] --> B["User opens web app and types situation & main concern"]
        E["User reviews and saves generated questions"]
        F["User goes to doctor appointment with questions ready"]
        G["User types in doctor's instructions and next steps"]
    end

    subgraph SystemFlow ["System / AI Actions"]
        C["System validates input and formats AI prompt"]
        D["AI generates 3–4 practical questions (no diagnosis)"]
        H["System saves notes and next steps to local storage"]
    end

    B --> C
    C --> D
    D --> E
    E --> F
    F --> G
    G --> H
There are two main actors:

User: enters their situation, reviews questions, attends the appointment, and records instructions.
System: validates the input, generates simulated questions, and saves information locally.
6. Benchmark Line

Existing tools show that digital healthcare navigation can help people organize appointments and move through complicated healthcare systems.

Examples include MyChart and patient navigation programs such as the Harold P. Freeman Patient Navigation Program.

The difference in this MVP is that it focuses on a very small problem: helping a person prepare questions after receiving a confusing result.

For Mexico, this can be useful because healthcare journeys can involve different laboratories, clinics, doctors, and institutions. The MVP does not depend on hospital integration. It is a lightweight tool that works directly for the patient.

7. Three-Year Long View

In three years, this tool could become a simple, trusted digital companion that walks patients through every confusing medical result in Mexico.

It will help people organize their lab notes, prepare clear questions for any consultation, and easily record what their doctor told them to do.

By keeping track of doctor instructions and follow-up tasks, it can make sure ordinary patients never feel lost or overwhelmed between checkups.

8. Scope Cut

For this MVP, we are intentionally NOT building:

Diagnosis or medical interpretation.
Treatment recommendations.
A doctor replacement.
Medical emergency advice.
User accounts or login.
PDF uploads or OCR.
Direct messaging with doctors.
Appointment booking.
Hospital or laboratory integrations.
A full medical record system.

The MVP only focuses on preparing questions and saving doctor instructions.

9. Architecture and Stack
Part	Technology	Why
Structure	HTML5	Simple and easy to maintain
Styling	CSS3	Responsive and simple design
Logic	Vanilla JavaScript	No complex libraries needed
Storage	Browser localStorage	No account or backend needed
AI	Simulated AI output	Safe and free for the MVP
Hosting	GitHub Pages	Free and easy to deploy
Data	Invented test data	No real personal medical information

No secrets or API keys are stored in the repository.

The MVP does not collect or send personal medical information to a backend.

10. Test Plan
Test 1 — Basic User Flow

Goal: Make sure a user can enter a situation and concern and generate questions.

Expected result: The app generates 3–4 questions.

Result: Passed.

Test 2 — Safety

Goal: Make sure the app does not diagnose or interpret a medical result.

Test: Enter a concerning example such as high potassium and ask what it means.

Expected result: The app only provides questions to ask the doctor.

Result: Passed.

Test 3 — Empty Input

Goal: Make sure the user cannot generate questions without completing the form.

Expected result: The app shows an error asking the user to complete both fields.

Result: Passed.

Test 4 — Save Notes

Goal: Make sure doctor instructions can be saved.

Expected result: The app shows "Saved to your browser!" and stores the notes locally.

Result: Passed.

Test 5 — Persistence

Goal: Make sure saved information stays after refreshing the page.

Expected result: Saved questions and notes are still visible after reload.

Result: Passed.

Test 6 — Bug Found and Fixed

During testing, we found a small UX bug: the user could click "Save My Notes" with an empty field and the app would still show that the notes were saved.

Fix: Added validation so the app now asks the user to enter the doctor's instructions before saving.

Retest: The empty field now shows:

"Please write your doctor's instructions before saving."

Result: Passed after the fix and redeploy.

Shadow Clause

The system must recommend preparation and questions, not make medical decisions for the user.

The app does not tell the user what their test result means, what condition they have, or what treatment they should take.

The AI output is clearly labeled as simulated and educational.

The user stays in control and takes the questions to a real doctor for medical advice.
