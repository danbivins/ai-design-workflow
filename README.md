# AI-Assisted Design → Code Workflow (with Accessibility Guardrails)

This repository is a **learning and experimentation space** for a simple, end-to-end workflow:

**Jira → Figma → Code → Accessibility Checks**

The goal is not speed or scale — it’s **clarity, correctness, and repeatability**.

---

## What This Project Is

- A small, testable workflow for generating UI code from design intent
- A way to explore how AI can assist (not replace) design and accessibility decisions
- A controlled environment to learn where automation works — and where human judgment is required

---

## Core Principles

- Semantic HTML first
- Material Design 3 conventions
- Accessibility is a system, not a single tool
- AI is constrained by intent, not left to guess

---

## High-Level Workflow

1. **Jira**  
   - Define user story and acceptance criteria  
   - Include accessibility intent up front

2. **Figma**  
   - Design using Material Design 3 components  
   - Annotate intent (states, errors, focus, accessibility notes)

3. **AI-Assisted Code Generation**  
   - AI generates code using:
     - Figma context
     - Design system rules
     - Semantic constraints

4. **Automated Accessibility Checks**  
   - Run `axe-core` against generated markup

5. **Manual Semantic Review**  
   - Use a short checklist to catch intent issues automation can’t detect

---

## Design System

- **Material Design 3 (Material You)**
- Legacy Material Design (Material 2) is **not allowed**
- Native HTML semantics are preferred over custom abstractions

---

## Project Structure (Simplified)

```text
.
├── 01-jira/
│   └── user-story.md
├── 02-figma/
│   └── figma-notes.md
├── 03-context/
│   └── design-and-semantic-rules.md
├── 04-output/
│   ├── index.html
│   └── snapshots/
│       └── index.pass.a11y.html
├── 05-checklists/
│   └── semantic-intent.md
├── check-a11y.js
└── README.md