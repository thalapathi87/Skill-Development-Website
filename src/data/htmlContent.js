const htmlContent = {
  intro: {
    id: "intro",
    title: "Introduction to HTML Architecture",
    content: `
HTML is not a markup language you *decorate* with CSS later.  
It is the **foundation layer** that defines structure, meaning, accessibility, and performance.

At an architect level, HTML controls:
- How browsers parse and render content
- How screen readers interpret pages
- How search engines understand intent
- How fast the first paint happens

Bad HTML cannot be fixed by good CSS or JavaScript.
`,
    example: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Architecture</title>
</head>
<body>
  <main>
    <h1>Correct Structure Matters</h1>
  </main>
</body>
</html>`,
    readingTime: 10,
    pitfalls: "Treating HTML as a styling tool instead of a semantic structure.",
    proTip: "Write HTML as if CSS and JS might fail. That mindset creates robust pages."
  },

  basics: {
    id: "basics",
    title: "HTML Basics (Done the Right Way)",
    content: `
HTML basics are not about memorizing tags.
They are about understanding **why tags exist**.

Key principles:
- One clear h1 per page
- Headings must follow order
- Content must be readable without CSS
- Attributes are as important as elements

Basics done wrong scale badly.
`,
    example: `<section>
  <h2>User Details</h2>
  <p>Name: John</p>
</section>`,
    readingTime: 12,
    pitfalls: "Skipping heading levels (h1 → h3) breaks accessibility.",
    proTip: "If content makes sense in plain text view, your HTML is probably good."
  },

  tags: {
    id: "tags",
    title: "Tags & Global Attributes",
    content: `
HTML tags define **meaning**, not appearance.

Global attributes like:
- id
- class
- data-*
- role
- aria-*

…are shared across all elements and drive JS logic, accessibility, and testing.

Professional HTML relies more on attributes than tags.
`,
    example: `<div id="card-1" class="card" data-state="active">
  <h2>Profile</h2>
</div>`,
    readingTime: 15,
    pitfalls: "Using div everywhere instead of meaningful elements.",
    proTip: "If you need JS logic later, plan your data-* attributes now."
  },

  "block-inline": {
    id: "block-inline",
    title: "Block vs Inline Elements",
    content: `
Block and inline elements affect layout, flow, and accessibility.

Block elements:
- Start on new line
- Can contain other blocks

Inline elements:
- Flow within text
- Should not contain blocks

Misusing them causes layout bugs and invalid HTML.
`,
    example: `<div>This is block</div>
<span>This is inline</span>`,
    readingTime: 10,
    pitfalls: "Placing block elements inside inline elements.",
    proTip: "When unsure, inspect display type in DevTools."
  },

 forms: {
  id: "forms",
  title: "Forms & Constraint Validation (Architect Level)",
  content: `
### 🔹 FORMS – DATA CONTRACT LAYER

HTML forms are **contracts between UI and backend**, not just input boxes.

A bad form:
- Produces invalid data
- Breaks accessibility
- Shifts validation burden to JavaScript

A good form:
- Uses browser capabilities first
- Reduces JS dependency
- Protects backend integrity

---

### 1️⃣ FORM ELEMENT CORE RULES

- \`<form>\`
  - Defines submission boundary
  - Controls validation lifecycle
- \`action\`
  - Submission endpoint
- \`method\`
  - GET → read-only data
  - POST → sensitive / state-changing data

❗ Never submit sensitive data via GET

---

### 2️⃣ INPUT TYPES (FIRST LINE OF VALIDATION)

Correct \`type\` = free validation + correct keyboard.

- \`email\`
  - RFC email validation
- \`number\`
  - Numeric-only input
- \`password\`
  - Masked input
- \`date\`, \`time\`
  - Native pickers
- \`tel\`
  - Phone keypad (no validation)
- \`url\`
  - URL format validation

Wrong input type = bad UX + bad data.

---

### 3️⃣ REQUIRED & CONSTRAINT ATTRIBUTES

Native browser validation layer.

- \`required\`
  - Prevents empty submission
- \`min\`, \`max\`
  - Numeric boundaries
- \`minlength\`, \`maxlength\`
  - Text length control
- \`pattern\`
  - Regex-based validation
- \`step\`
  - Numeric increments

Browser blocks submission **before JS runs**.

---

### 4️⃣ CONSTRAINT VALIDATION API (ADVANCED)

Browser exposes validation state via JS.

- \`checkValidity()\`
  - Returns true / false
- \`reportValidity()\`
  - Triggers browser UI
- \`setCustomValidity(msg)\`
  - Custom error messages

This allows:
- Business rule validation
- Server-aligned logic
- Zero third-party libraries

---

### 5️⃣ NAME vs ID (CRITICAL DETAIL)

- \`id\`
  - UI, labels, JS hooks
- \`name\`
  - Backend data mapping

Form submission ignores \`id\`.  
Backend reads only \`name\`.

Missing \`name\` = missing data.

---

### 6️⃣ LABEL & ACCESSIBILITY RULES

Every input must have a label.

- \`<label for="id">\`
  - Screen reader support
  - Larger clickable area
- \`aria-invalid\`
  - Indicates error state
- \`aria-describedby\`
  - Links error messages

Accessible forms reduce error rates.

---

### 7️⃣ INPUTMODE & AUTOCOMPLETE (UX CONTROL)

Fine-tunes user experience without JS.

- \`inputmode\`
  - numeric
  - email
  - tel
- \`autocomplete\`
  - on / off
  - new-password
  - one-time-code

Correct usage improves mobile conversion.

---

### 8️⃣ FORM SUBMISSION FLOW

1. User submits form
2. Browser runs native validation
3. Submission blocked if invalid
4. JS validation (optional)
5. Backend validation (mandatory)

Client validation improves UX.  
Server validation protects system.

---

### 9️⃣ NOVALIDATE (WHEN TO USE)

- \`novalidate\`
  - Disables browser UI
  - Keeps semantic validation

Used when:
- Custom UI validation required
- Complex workflows exist

Never disable validation blindly.

---

### 🔟 SECURITY RULES (NON-NEGOTIABLE)

- Never trust client data
- Always revalidate on server
- Use CSRF protection
- Mask sensitive fields
- Disable autocomplete where needed

HTML validation ≠ security.

---

### 1️⃣1️⃣ MASTER FORM RULESET

- Browser validates format
- JavaScript validates logic
- Backend validates truth
- Accessibility is mandatory
- UX must reduce friction

That is professional form design.
`,
  example: `<form method="post" novalidate>
  <label for="email">Email</label>
  <input
    id="email"
    name="email"
    type="email"
    required
    inputmode="email"
    autocomplete="email"
  >

  <label for="age">Age</label>
  <input
    id="age"
    name="age"
    type="number"
    min="18"
    max="99"
    required
  >

  <button type="submit">Register</button>
</form>`,
  readingTime: 30,
  pitfalls:
    "Skipping native validation and pushing all checks into JavaScript.",
  proTip:
    "Let the browser reject bad data first. JavaScript should only handle business rules."
}
,

  semantic: {
    id: "semantic",
    title: "Semantic HTML",
    content: `
Semantic HTML gives **meaning** to content.

Examples:
- main → primary content
- article → independent content
- section → grouped topic
- aside → supporting info

Search engines and screen readers depend on this structure.
`,
    example: `<article>
  <h2>Blog Post</h2>
  <p>Content here</p>
</article>`,
    readingTime: 15,
    pitfalls: "Using section everywhere without headings.",
    proTip: "If a section has no heading, it probably should be a div."
  },

  html5: {
    id: "html5",
    title: "HTML5 Features That Matter",
    content: `
HTML5 is not about new tags only.
It introduced **APIs and behaviors**.

Important features:
- video / audio
- localStorage
- semantic elements
- form input types

HTML5 reduced dependency on JavaScript libraries.
`,
    example: `<video controls>
  <source src="intro.mp4" type="video/mp4">
</video>`,
    readingTime: 15,
    pitfalls: "Using heavy JS libraries for things HTML already solves.",
    proTip: "Check MDN before adding a library."
  },

  accessibility: {
    id: "accessibility",
    title: "Accessibility (A11y)",
    content: `
Accessibility is not optional.
It is usability for everyone.

Key ideas:
- Keyboard navigation
- Screen reader clarity
- Focus management
- ARIA only when needed

Good HTML reduces ARIA usage.
`,
    example: `<button aria-label="Close">
  ✕
</button>`,
    readingTime: 18,
    pitfalls: "Adding ARIA without understanding native semantics.",
    proTip: "Use semantic HTML first, ARIA last."
  },

  faq: {
    id: "faq",
    title: "Interview FAQ (HTML)",
    content: `
Common interview traps test fundamentals, not tricks.

Typical questions:
- Difference between div and section?
- Why only one h1?
- data-* vs custom attributes?
- async vs defer?

Clear answers show real understanding.
`,
    example: `<!-- async loads and executes immediately -->
<script src="a.js" async></script>

<!-- defer waits until HTML parsing ends -->
<script src="b.js" defer></script>`,
    readingTime: 10,
    pitfalls: "Memorizing answers without understanding use cases.",
    proTip: "Explain HTML in terms of browser behavior, not definitions."
  }
};

export default htmlContent;
