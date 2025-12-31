import React, { useState } from "react";
import { CheckCircle2 } from 'lucide-react';
import { ChevronDown, ChevronUp, Cpu } from "lucide-react";

function ReactFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    {
      q: "1. What is React?",
      a: `• React is a JavaScript library for building user interfaces.
• It is component-based and reusable.
• Maintained by Meta.
• Used mainly for single-page applications.
• Tanglish: UI build panna use aagura JS library.`
    },
    {
      q: "2. What are components in React?",
      a: `• Components are reusable UI blocks.
• They split UI into small parts.
• Can be functional or class based.
• Each component manages its own logic.
• Tanglish: UI pieces-ah divide pannrathu.`
    },
    {
      q: "3. What is JSX?",
      a: `• JSX stands for JavaScript XML.
• It looks like HTML inside JavaScript.
• JSX makes code more readable.
• It is converted to JS by Babel.
• Tanglish: JS-kulla HTML maadhiri syntax.`
    },
    {
      q: "4. What is Virtual DOM?",
      a: `• Virtual DOM is a lightweight copy of real DOM.
• React updates Virtual DOM first.
• Then compares with real DOM.
• Only required changes are updated.
• Tanglish: DOM fast-a update panna trick.`
    },
    {
      q: "5. Why React is fast?",
      a: `• Uses Virtual DOM.
• Efficient diffing algorithm.
• Updates only changed parts.
• Reduces direct DOM manipulation.
• Tanglish: Theva illatha update avoid pannum.`
    },
    {
      q: "6. What are props?",
      a: `• Props are inputs to components.
• Passed from parent to child.
• Props are read-only.
• Used to share data.
• Tanglish: Parent data child-ku pass pannrathu.`
    },
    {
      q: "7. What is state?",
      a: `• State holds component data.
• It is mutable.
• Managed inside the component.
• Change in state re-renders UI.
• Tanglish: Component-oda internal memory.`
    },
    {
      q: "8. Props vs State?",
      a: `• Props are passed from outside.
• State is managed inside component.
• Props are immutable.
• State can change.
• Tanglish: Props external, state internal.`
    },
    {
      q: "9. What is useState?",
      a: `• useState is a React Hook.
• Used to manage state in function components.
• Returns state and setter function.
• Triggers re-render on update.
• Tanglish: Function component-ku state kudukkum.`
    },
    {
      q: "10. What is useEffect?",
      a: `• useEffect handles side effects.
• Runs after render.
• Used for API calls.
• Can control with dependency array.
• Tanglish: Render apram nadakkura work.`
    },
    {
      q: "11. What are Hooks?",
      a: `• Hooks allow using state in functions.
• Introduced in React 16.8.
• useState, useEffect are common.
• Avoids class components.
• Tanglish: Function component superpower.`
    },
    {
      q: "12. What is conditional rendering?",
      a: `• Rendering UI based on condition.
• Uses if, ternary, logical operators.
• Common in authentication.
• Improves UX.
• Tanglish: Condition poruththu UI change.`
    },
    {
      q: "13. What is key in React?",
      a: `• Key helps identify list items.
• Improves rendering performance.
• Must be unique.
• Used in map().
• Tanglish: List items identify panna.`
    },
    {
      q: "14. What is lifting state up?",
      a: `• Moving state to common parent.
• Share data between siblings.
• Avoids duplication.
• Improves data flow.
• Tanglish: State parent-kitta move pannrathu.`
    },
    {
      q: "15. What is controlled component?",
      a: `• Form input controlled by state.
• Value comes from React state.
• Changes via onChange.
• Easy validation.
• Tanglish: Form full React control.`
    },
    {
      q: "16. What is uncontrolled component?",
      a: `• Form handled by DOM.
• Uses ref to access value.
• Less React control.
• Simple but less flexible.
• Tanglish: DOM control pannum form.`
    },
    {
      q: "17. What is ref?",
      a: `• Ref accesses DOM directly.
• Created using useRef.
• Avoids re-render.
• Used for focus or values.
• Tanglish: Direct DOM access tool.`
    },
    {
      q: "18. What is React Fragment?",
      a: `• Used to group elements.
• Avoids extra DOM nodes.
• Written as <> </>.
• Cleaner markup.
• Tanglish: Extra div avoid pannum.`
    },
    {
      q: "19. What is memo?",
      a: `• memo prevents unnecessary re-renders.
• Used for performance optimization.
• Works with props comparison.
• Higher-order component.
• Tanglish: Re-render waste avoid pannum.`
    },
    {
      q: "20. What is useCallback?",
      a: `• Memoizes functions.
• Prevents recreation on render.
• Used with memo.
• Improves performance.
• Tanglish: Function reuse pannum.`
    },
    {
      q: "21. What is useMemo?",
      a: `• Memoizes computed values.
• Avoids expensive recalculation.
• Runs only when dependency changes.
• Improves performance.
• Tanglish: Calculation save pannum.`
    },
    {
      q: "22. What is React Router?",
      a: `• Used for navigation.
• Enables SPA routing.
• Changes URL without reload.
• Popular library.
• Tanglish: Page change reload illa.`
    },
    {
      q: "23. What is SPA?",
      a: `• Single Page Application.
• Loads page once.
• Updates content dynamically.
• Faster user experience.
• Tanglish: Reload illa site.`
    },
    {
      q: "24. What is context API?",
      a: `• Used to avoid prop drilling.
• Shares global data.
• Used for themes, auth.
• Built-in React feature.
• Tanglish: Data ellarukkum share pannum.`
    },
    {
      q: "25. What is prop drilling?",
      a: `• Passing props through many levels.
• Makes code messy.
• Hard to maintain.
• Solved by Context API.
• Tanglish: Props chain problem.`
    },
    {
      q: "26. What is error boundary?",
      a: `• Catches JavaScript errors.
• Prevents app crash.
• Class component feature.
• Shows fallback UI.
• Tanglish: Error vandhaal app save pannum.`
    },
    {
      q: "27. What is lazy loading?",
      a: `• Loads components on demand.
• Improves performance.
• Uses React.lazy.
• Used with Suspense.
• Tanglish: Theva irundha app load.`
    },
    {
      q: "28. What is Suspense?",
      a: `• Handles lazy loading UI.
• Shows fallback content.
• Used with React.lazy.
• Improves UX.
• Tanglish: Load aagum vara wait screen.`
    },
    {
      q: "29. What is reconciliation?",
      a: `• Process of updating DOM.
• Compares old and new Virtual DOM.
• Finds minimal changes.
• Makes React efficient.
• Tanglish: Old-new compare process.`
    },
    {
      q: "30. What is strict mode?",
      a: `• Helps find potential problems.
• Runs extra checks.
• Development-only feature.
• Does not affect production.
• Tanglish: Dev warning mode.`
    },
    {
      q: "31. What is defaultProps?",
      a: `• Sets default values for props.
• Used when prop not passed.
• Avoids undefined.
• Improves safety.
• Tanglish: Default prop value.`
    },
    {
      q: "32. What is prop-types?",
      a: `• Used for type checking props.
• Catches bugs early.
• Optional but useful.
• Dev-time validation.
• Tanglish: Prop type check.`
    },
    {
      q: "33. What is higher-order component?",
      a: `• Function that takes component.
• Returns enhanced component.
• Reuses logic.
• Advanced pattern.
• Tanglish: Component wrap pannrathu.`
    },
    {
      q: "34. What is render props?",
      a: `• Share logic using function prop.
• Provides flexibility.
• Avoids duplication.
• Advanced pattern.
• Tanglish: Function-aa pass pannrathu.`
    },
    {
      q: "35. What is synthetic event?",
      a: `• Wrapper around native events.
• Works same across browsers.
• Improves performance.
• React-managed event.
• Tanglish: Browser event wrapper.`
    },
    {
      q: "36. What is batching?",
      a: `• Groups multiple state updates.
• Reduces re-renders.
• Improves performance.
• Happens automatically.
• Tanglish: State update combine pannum.`
    },
    {
      q: "37. What is hydration?",
      a: `• Used in server-side rendering.
• Attaches events to HTML.
• Makes page interactive.
• Used in Next.js.
• Tanglish: Server HTML-ku life kudukkum.`
    },
    {
      q: "38. What is Next.js?",
      a: `• React framework.
• Supports SSR and SSG.
• Better SEO.
• Built by Vercel.
• Tanglish: React advanced framework.`
    },
    {
      q: "39. What is SSR?",
      a: `• Server Side Rendering.
• HTML generated on server.
• Faster first load.
• Better SEO.
• Tanglish: Server-la render pannum.`
    },
    {
      q: "40. What is SSG?",
      a: `• Static Site Generation.
• Pages built at build time.
• Very fast.
• Used in blogs.
• Tanglish: Build time-la page ready.`
    },
    {
      q: "41. What is Redux?",
      a: `• State management library.
• Centralized store.
• Predictable data flow.
• Used in large apps.
• Tanglish: Global state manager.`
    },
    {
      q: "42. Redux vs Context?",
      a: `• Redux is external library.
• Context is built-in.
• Redux better for complex apps.
• Context for simple sharing.
• Tanglish: Big app-na Redux.`
    },
    {
      q: "43. What is immutability?",
      a: `• State should not be mutated.
• Create new copies.
• Helps React detect changes.
• Avoids bugs.
• Tanglish: Original state touch panna koodathu.`
    },
    {
      q: "44. What is PureComponent?",
      a: `• Prevents unnecessary re-renders.
• Uses shallow comparison.
• Class-based feature.
• Performance optimization.
• Tanglish: Auto memo component.`
    },
    {
      q: "45. What is reconciliation key role?",
      a: `• Helps track elements.
• Improves diffing.
• Avoids wrong updates.
• Mandatory in lists.
• Tanglish: List update correct pannum.`
    },
    {
      q: "46. What is state batching in React 18?",
      a: `• Groups async state updates.
• Improves performance.
• Happens automatically.
• Reduces renders.
• Tanglish: React smart update.`
    },
    {
      q: "47. What is concurrent rendering?",
      a: `• Interruptible rendering.
• Improves responsiveness.
• React 18 feature.
• Background rendering.
• Tanglish: Smooth UI magic.`
    },
    {
      q: "48. What is useId?",
      a: `• Generates unique IDs.
• Useful for accessibility.
• React 18 hook.
• Avoids mismatch.
• Tanglish: Unique ID generator.`
    },
    {
      q: "49. What is code splitting?",
      a: `• Splits bundle into parts.
• Loads only needed code.
• Improves load time.
• Uses dynamic import.
• Tanglish: App weight kammi.`
    },
    {
      q: "50. Why React is popular?",
      a: `• Component-based architecture.
• Strong ecosystem.
• High performance.
• Backed by Meta.
• Tanglish: Industry standard UI tool.`
    },

   

/* ================= CORE REACT INTERNALS ================= */

{
  q: "51. How does React re-render work internally?",
  a: `• React re-renders when state or props change.
• It re-executes the component function.
• Virtual DOM is diffed with previous render.
• Only changed parts update the real DOM.
• Tanglish: Function thirumba run aagum, DOM full illa.`
},

{
  q: "52. What triggers a re-render in React?",
  a: `• State updates trigger re-render.
• New props from parent trigger re-render.
• Parent re-render causes child re-render.
• Context value change triggers consumers.
• Tanglish: State, props, parent, context.`
},

{
  q: "53. Why state updates are asynchronous?",
  a: `• React batches multiple state updates.
• Improves performance by reducing renders.
• State update is scheduled, not immediate.
• Actual update happens in next render cycle.
• Tanglish: Performance-kaaga delay pannum.`
},

{
  q: "54. Why shouldn’t we update state directly?",
  a: `• React relies on immutability for comparison.
• Direct mutation breaks change detection.
• Skips re-render due to same reference.
• Leads to unpredictable UI bugs.
• Tanglish: Reference same-na React blind.`
},

/* ================= HOOKS – INTERVIEW FAVOURITE ================= */

{
  q: "55. Rules of Hooks – why not inside loops or conditions?",
  a: `• Hooks depend on call order.
• React maps hooks by position.
• Conditional calls break hook alignment.
• Causes wrong state assignment.
• Tanglish: Order miss aana state confuse.`
},

{
  q: "56. Difference between useRef and useState?",
  a: `• useState triggers re-render on update.
• useRef does not cause re-render.
• useRef value persists across renders.
• useRef used for DOM and mutable values.
• Tanglish: useRef silent, useState noisy.`
},

{
  q: "57. useEffect cleanup function – when and why?",
  a: `• Runs before next effect execution.
• Runs when component unmounts.
• Used to clean subscriptions and timers.
• Prevents memory leaks.
• Tanglish: Old effect clean pannum.`
},

{
  q: "58. Multiple useEffect vs single useEffect?",
  a: `• Multiple effects separate concerns.
• Easier to debug and maintain.
• Each effect has its own dependency.
• Avoids unnecessary executions.
• Tanglish: Logic separate pannina clarity.`
},

/* ================= PERFORMANCE (VERY IMPORTANT) ================= */

{
  q: "59. Why keys should not be index in map()?",
  a: `• Index changes when list order changes.
• Causes incorrect DOM reuse.
• Breaks component state mapping.
• Leads to UI bugs.
• Tanglish: Index key-na React thappa guess pannum.`
},

{
  q: "60. How React.memo works internally?",
  a: `• Memo caches previous render output.
• Compares previous and next props.
• Skips render if props unchanged.
• Uses shallow comparison.
• Tanglish: Props same-na render skip.`
},

{
  q: "61. When NOT to use useMemo / useCallback?",
  a: `• When computation is cheap.
• When dependencies change often.
• Adds unnecessary complexity.
• Can reduce performance instead.
• Tanglish: Ellathukkum memo vendaam.`
},

/* ================= FORMS & EVENTS ================= */

{
  q: "62. onChange vs onInput in React?",
  a: `• onChange fires on every value change.
• onInput fires for raw input events.
• React normalizes onChange behavior.
• onChange preferred in React.
• Tanglish: React-la onChange standard.`
},

{
  q: "63. Why event pooling existed and why removed in React 17?",
  a: `• Pooling reused event objects.
• Reduced memory allocations.
• Async access caused bugs.
• Removed for simplicity and safety.
• Tanglish: Bug avoid panna remove panninaanga.`
},

/* ================= ARCHITECTURE & PATTERNS ================= */

{
  q: "64. Container vs Presentational components?",
  a: `• Container handles logic and data.
• Presentational handles UI only.
• Improves separation of concerns.
• Easier testing and reuse.
• Tanglish: Logic vera, UI vera.`
},

{
  q: "65. Smart vs Dumb components?",
  a: `• Smart components manage state.
• Dumb components receive props only.
• Dumb components are reusable.
• Smart components control flow.
• Tanglish: Brain vera, body vera.`
},

{
  q: "66. Lifting state up vs Context?",
  a: `• Lifting used for few components.
• Context used for global data.
• Context avoids prop drilling.
• Overuse causes performance issues.
• Tanglish: Small-na lift, global-na context.`
},

/* ================= ROUTING & DATA ================= */

{
  q: "67. Client-side routing vs server-side routing?",
  a: `• Client routing avoids full reload.
• Server routing reloads entire page.
• Client routing faster UX.
• Uses History API.
• Tanglish: Reload illaama route change.`
},

{
  q: "68. How React Router works internally?",
  a: `• Uses browser History API.
• Listens to URL changes.
• Matches route configuration.
• Renders matched component.
• Tanglish: URL maathina component change.`
},

/* ================= REACT 18+ (INTERVIEW GOLD) ================= */

{
  q: "69. startTransition vs normal state update?",
  a: `• startTransition marks low-priority updates.
• Keeps UI responsive.
• Urgent updates run first.
• Used for heavy renders.
• Tanglish: Important munnadi, rest later.`
},

{
  q: "70. What problem Concurrent Mode solves?",
  a: `• Prevents UI blocking.
• Allows interruptible rendering.
• Improves perceived performance.
• Enables smoother UX.
• Tanglish: App freeze aagama paathukkum.`
},

/* ================= REAL-WORLD / DEBUGGING ================= */

{
  q: "71. Why infinite re-render happens?",
  a: `• State updated inside render.
• Missing dependency array in useEffect.
• Effect depends on changing value.
• Causes render loop.
• Tanglish: Render-la state set panna loop.`
},

{
  q: "72. Common performance mistakes in React apps?",
  a: `• Unnecessary re-renders.
• Inline functions in JSX.
• Missing memoization.
• Large lists without optimization.
• Tanglish: Careless render slow pannum.`
},

{
  q: "73. How to optimize large lists in React?",
  a: `• Use windowing or virtualization.
• Render only visible items.
• Libraries like react-window.
• Reduces DOM nodes.
• Tanglish: View-la irukkathae mattum render.`
}



  ];

  return (
    <div className="max-w-5xl mx-auto p-8">
      <header className="mb-10">
        <div className="flex items-center gap-2 text-blue-500 font-bold">
          <Cpu className="w-5 h-5" /> React Interview Guide
        </div>
        <h1 className="text-4xl font-black mt-4">
          React Interview Questions (50)
        </h1>
      </header>

      {questions.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className="mb-4 border rounded-xl">
            <button
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full flex justify-between items-center px-6 py-4 font-semibold text-left"
            >
              {item.q}
              {isOpen ? <ChevronUp /> : <ChevronDown />}
            </button>
            {isOpen && (
              <div className="px-6 pb-4 text-slate-700 whitespace-pre-line">
                {item.a}
              </div>
            )}
          </div>
          
        );
      })}
    </div>
  );
}

export default ReactFAQ;
