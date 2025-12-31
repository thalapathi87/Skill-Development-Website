import React, { useState } from "react";
import { ChevronDown, ChevronUp, Terminal, Zap } from "lucide-react";

function JsFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    {
      q: "1. What is JavaScript?",
      a: `• JavaScript is a programming language used for web development.
• It makes web pages interactive and dynamic.
• It runs inside the browser.
• It can also run on servers using Node.js.
• Tanglish: Website-ku uyir kudukkura language.`
    },
    {
      q: "2. Is JavaScript single-threaded?",
      a: `• JavaScript executes one task at a time.
• It has only one call stack.
• Long tasks can block execution.
• Async features avoid blocking.
• Tanglish: Oru time-la oru velai thaan.`
    },
    {
      q: "3. What is Call Stack?",
      a: `• Call Stack tracks function execution.
• Uses Last In First Out order.
• Functions are pushed when called.
• Removed after execution.
• Tanglish: Function order manage pannum.`
    },
    {
      q: "4. What is Execution Context?",
      a: `• Execution context is the environment of execution.
• Created when code starts running.
• Contains variables and functions.
• Two phases: creation and execution.
• Tanglish: Code run aagura box.`
    },
    {
      q: "5. Global Execution Context?",
      a: `• Created when script starts.
• Creates global object.
• Initializes this keyword.
• Exists till program ends.
• Tanglish: Main execution room.`
    },
    {
      q: "6. Function Execution Context?",
      a: `• Created when function is called.
• Has local scope.
• Pushed into call stack.
• Removed after execution.
• Tanglish: Function-ku separate room.`
    },
    {
      q: "7. What is Hoisting?",
      a: `• Declarations moved to top.
• Happens during creation phase.
• var hoisted with undefined.
• let/const hoisted but inaccessible.
• Tanglish: JS mela thooki vechudum.`
    },
    {
      q: "8. var vs let vs const?",
      a: `• var is function scoped.
• let is block scoped.
• const cannot be reassigned.
• let and const are safer.
• Tanglish: var risky, let safe, const strict.`
    },
    {
      q: "9. What is Scope?",
      a: `• Scope defines accessibility.
• Global scope everywhere.
• Function scope inside function.
• Block scope inside {}.
• Tanglish: Variable reach area.`
    },
    {
      q: "10. What is Closure?",
      a: `• Function remembers outer variables.
• Works after outer function ends.
• Used for data privacy.
• Used in callbacks.
• Tanglish: Function memory retain pannum.`
    },
    {
      q: "11. What is Temporal Dead Zone?",
      a: `• Applies to let and const.
• Exists before initialization.
• Access causes ReferenceError.
• Prevents unsafe usage.
• Tanglish: Declare panna munna access panna mudiyathu.`
    },
    {
      q: "12. What are JS data types?",
      a: `• Primitive and non-primitive types.
• Primitive stores single value.
• Objects store collections.
• Arrays are objects.
• Tanglish: Data category division.`
    },
    {
      q: "13. Difference between null and undefined?",
      a: `• Undefined is default value.
• Null is assigned intentionally.
• Undefined means not set.
• Null means empty.
• Tanglish: Undefined auto, null manual.`
    },
    {
      q: "14. Difference between == and ===?",
      a: `• == checks value only.
• Performs type conversion.
• === checks value and type.
• === is safer.
• Tanglish: Interview-la === use pannu.`
    },
    {
      q: "15. What is this keyword?",
      a: `• Refers to current object.
• Depends on context.
• Changes in functions.
• Arrow functions differ.
• Tanglish: Current owner reference.`
    },
    {
      q: "16. What is an object?",
      a: `• Collection of key-value pairs.
• Stores complex data.
• Access using dot or bracket.
• Flexible structure.
• Tanglish: Data bundle.`
    },
    {
      q: "17. What is an array?",
      a: `• Ordered collection of data.
• Zero-based index.
• Stores multiple values.
• Has built-in methods.
• Tanglish: List mari store.`
    },
    {
      q: "18. map vs filter vs reduce?",
      a: `• map transforms data.
• filter selects data.
• reduce combines data.
• Used on arrays.
• Tanglish: map-change, filter-pick, reduce-sum.`
    },
    {
      q: "19. What is callback?",
      a: `• Function passed as argument.
• Executed later.
• Used in async code.
• Common in JS.
• Tanglish: Function-kulla function.`
    },
    {
      q: "20. What is Promise?",
      a: `• Represents future value.
• Has pending state.
• Can be resolved or rejected.
• Handles async operations.
• Tanglish: Future result promise.`
    },
    {
      q: "21. async/await?",
      a: `• Cleaner async syntax.
• Works with promises.
• await pauses execution.
• Improves readability.
• Tanglish: Promise easy version.`
    },
    {
      q: "22. What is Event Loop?",
      a: `• Handles async tasks.
• Checks call stack.
• Executes queued tasks.
• Prevents blocking.
• Tanglish: Async smooth runner.`
    },
    {
      q: "23. setTimeout?",
      a: `• Executes after delay.
• Runs once.
• Uses milliseconds.
• Async function.
• Tanglish: Late execution timer.`
    },
    {
      q: "24. setInterval?",
      a: `• Executes repeatedly.
• Fixed time interval.
• Can be cleared.
• Async behavior.
• Tanglish: Repeat timer.`
    },
    {
      q: "25. What is DOM?",
      a: `• Document Object Model.
• Represents HTML as objects.
• JS manipulates DOM.
• Enables dynamic UI.
• Tanglish: HTML control pannum.`
    },
    {
      q: "26. localStorage?",
      a: `• Stores data in browser.
• No expiration.
• Key-value storage.
• Persistent.
• Tanglish: Permanent browser memory.`
    },
    {
      q: "27. sessionStorage?",
      a: `• Stores data temporarily.
• Cleared on tab close.
• Key-value pairs.
• Session-based.
• Tanglish: Temporary memory.`
    },
    {
      q: "28. What is JSON?",
      a: `• Data exchange format.
• Lightweight structure.
• Used in APIs.
• Text-based.
• Tanglish: Data send format.`
    },
    {
      q: "29. JSON.stringify?",
      a: `• Converts object to JSON.
• Used before storing.
• Used in APIs.
• Returns string.
• Tanglish: Object to text.`
    },
    {
      q: "30. JSON.parse?",
      a: `• Converts JSON to object.
• Used after receiving data.
• Required for usage.
• Returns object.
• Tanglish: Text to object.`
    },
    {
      q: "31. Spread operator?",
      a: `• Written as ...
• Expands array/object.
• Used for copying.
• Cleaner syntax.
• Tanglish: Value spread pannum.`
    },
    {
      q: "32. Rest operator?",
      a: `• Collects remaining values.
• Used in functions.
• Same syntax as spread.
• Opposite behavior.
• Tanglish: Ellathayum collect pannum.`
    },
    {
      q: "33. Destructuring?",
      a: `• Extract values easily.
• Works with objects.
• Works with arrays.
• Cleaner code.
• Tanglish: Direct value eduthudum.`
    },
    {
      q: "34. What is NaN?",
      a: `• Means Not a Number.
• Result of invalid math.
• Type is number.
• Needs careful handling.
• Tanglish: Number illa nu sollum.`
    },
    {
      q: "35. isNaN?",
      a: `• Checks NaN value.
• Returns boolean.
• Used for validation.
• Prevents bugs.
• Tanglish: NaN check pannum.`
    },
    {
      q: "36. Strict mode?",
      a: `• Written as "use strict".
• Avoids bad practices.
• Throws errors.
• Safer code.
• Tanglish: JS discipline mode.`
    },
    {
      q: "37. Prototype?",
      a: `• JS inheritance model.
• Objects inherit properties.
• Uses prototype chain.
• Core concept.
• Tanglish: Parent-child sharing.`
    },
    {
      q: "38. JavaScript class?",
      a: `• Blueprint for objects.
• Introduced in ES6.
• Uses constructor.
• Syntax sugar.
• Tanglish: Object template.`
    },
    {
      q: "39. Module?",
      a: `• Code split into files.
• Uses import/export.
• Avoids global scope.
• Improves maintainability.
• Tanglish: Code piece-a divide pannum.`
    },
    {
      q: "40. Error handling?",
      a: `• Handles runtime errors.
• Uses try-catch.
• Prevents crash.
• Improves stability.
• Tanglish: Error vandha manage pannum.`
    },
    {
      q: "41. Debounce?",
      a: `• Limits function calls.
• Runs after delay.
• Used in search.
• Improves performance.
• Tanglish: Call frequency control.`
    },
    {
      q: "42. Throttle?",
      a: `• Executes at intervals.
• Limits execution rate.
• Used in scroll.
• Performance friendly.
• Tanglish: Time-based control.`
    },
    {
      q: "43. Arrow function?",
      a: `• Short syntax.
• Uses =>.
• No own this.
• Cleaner code.
• Tanglish: Function shortcut.`
    },
    {
      q: "44. Event bubbling?",
      a: `• Event moves upward.
• Child to parent.
• Default behavior.
• Can be stopped.
• Tanglish: Keela irundhu mela.`
    },
    {
      q: "45. Event capturing?",
      a: `• Event moves downward.
• Parent to child.
• Optional phase.
• Rarely used.
• Tanglish: Mela irundhu keela.`
    },
    {
      q: "46. innerHTML?",
      a: `• Sets HTML content.
• Can insert tags.
• Powerful.
• Risky if misused.
• Tanglish: HTML direct set.`
    },
    {
      q: "47. console.log?",
      a: `• Used for debugging.
• Prints values.
• Helps tracing.
• Dev tool.
• Tanglish: JS mic test.`
    },
    {
      q: "48. Browser vs Node?",
      a: `• Browser has DOM.
• Node has no DOM.
• Node runs server-side.
• Different environments.
• Tanglish: Frontend vs backend.`
    },
    {
      q: "49. Synchronous JS?",
      a: `• Blocks execution.
• Runs line by line.
• Slower for heavy tasks.
• Avoided when possible.
• Tanglish: Wait pannum code.`
    },
    {
      q: "50. Asynchronous JS?",
      a: `• Non-blocking execution.
• Uses callbacks/promises.
• Improves performance.
• Essential for modern apps.
• Tanglish: Wait pannama run aagum.`
    },

/* ================= CORE EXECUTION & MEMORY ================= */

{
  q: "51. What is Event Queue vs Microtask Queue?",
  a: `• Event Queue stores macrotasks like setTimeout and DOM events.
• Microtask Queue stores promises and mutation observers.
• Microtasks execute before macrotasks.
• Event loop clears microtasks first.
• Tanglish: Promise munnadi run, setTimeout appuram.`
},

{
  q: "52. Difference between Call Stack and Heap?",
  a: `• Call Stack stores function execution order.
• Heap stores objects and reference data.
• Stack works in LIFO manner.
• Heap is unstructured memory.
• Tanglish: Function stack-la, object heap-la.`
},

{
  q: "53. What causes memory leaks in JavaScript?",
  a: `• Unremoved event listeners.
• Global variables holding references.
• Uncleared setInterval or timers.
• Detached DOM nodes.
• Tanglish: Reference clear pannala-na memory leak.`
},

{
  q: "54. Garbage Collection in JavaScript?",
  a: `• Automatically frees unused memory.
• Uses mark-and-sweep algorithm.
• Removes unreachable objects.
• Prevents manual memory management.
• Tanglish: Use illaatha object auto clean.`
},

/* ================= FUNCTIONS & CONTEXT ================= */

{
  q: "55. Difference between normal function and arrow function?",
  a: `• Normal function has its own this.
• Arrow function inherits this from parent.
• Arrow functions cannot be constructors.
• Arrow functions have no arguments object.
• Tanglish: Arrow function-ku this bind aagathu.`
},

{
  q: "56. What is Function Currying?",
  a: `• Converts function with multiple arguments into nested functions.
• Improves reusability.
• Used in functional programming.
• Returns function until all args received.
• Tanglish: Oru argument-ku oru function.`
},

{
  q: "57. What is IIFE?",
  a: `• Function that runs immediately after definition.
• Avoids global scope pollution.
• Used for data privacy.
• Executes only once.
• Tanglish: Create pannina udane run.`
},

{
  q: "58. bind vs call vs apply?",
  a: `• call invokes function immediately.
• apply invokes with arguments as array.
• bind returns a new function.
• bind does not execute immediately.
• Tanglish: bind = later run, call/apply = instant.`
},

/* ================= OBJECTS & EQUALITY ================= */

{
  q: "59. Shallow copy vs Deep copy?",
  a: `• Shallow copy copies reference for nested objects.
• Deep copy copies all nested values.
• Shallow changes affect original.
• Deep copy is fully independent.
• Tanglish: Shallow share pannum, deep separate.`
},

{
  q: "60. How to clone an object safely?",
  a: `• Use structuredClone() for deep copy.
• JSON stringify for simple objects.
• Spread operator for shallow copy.
• Avoid manual reference copy.
• Tanglish: structuredClone safest.`
},

{
  q: "61. Object.freeze vs Object.seal?",
  a: `• freeze prevents add, delete, modify.
• seal allows modify but not add/delete.
• freeze is fully immutable.
• seal is partially mutable.
• Tanglish: freeze = lock, seal = half lock.`
},

{
  q: "62. How does JS compare objects?",
  a: `• Objects compared by reference.
• Same structure still unequal.
• Only same memory reference is equal.
• === checks reference, not value.
• Tanglish: Address same-na equal.`
},

/* ================= ASYNC & PERFORMANCE ================= */

{
  q: "63. Promise.all vs Promise.allSettled vs Promise.race?",
  a: `• Promise.all fails if any promise fails.
• allSettled waits for all results.
• race returns first settled promise.
• Used for different async needs.
• Tanglish: race first result, all strict.`
},

{
  q: "64. What happens if a promise is never resolved?",
  a: `• It stays in pending state forever.
• No then or catch executes.
• Can cause memory leaks.
• Blocks dependent logic.
• Tanglish: Promise life-long wait.`
},

{
  q: "65. Why async/await is non-blocking?",
  a: `• async code runs via event loop.
• await pauses function, not thread.
• Main thread stays free.
• Uses promises internally.
• Tanglish: Wait pannum function-mattum.`
},

{
  q: "66. How does debouncing differ from throttling internally?",
  a: `• Debounce delays execution until stop.
• Throttle limits execution rate.
• Debounce resets timer each call.
• Throttle uses fixed intervals.
• Tanglish: debounce wait, throttle control.`
},

/* ================= BROWSER & RUNTIME ================= */

{
  q: "67. What is Web API in JavaScript?",
  a: `• Provided by browser, not JS engine.
• Handles timers, DOM, fetch.
• Enables async behavior.
• Works outside call stack.
• Tanglish: Browser help pannuthu.`
},

{
  q: "68. What is requestAnimationFrame?",
  a: `• Schedules animation before repaint.
• Optimized for smooth animations.
• Runs ~60fps.
• Better than setInterval for UI.
• Tanglish: Animation-ku best option.`
},

{
  q: "69. How does JS handle concurrency with one thread?",
  a: `• Uses event loop.
• Async tasks handled by Web APIs.
• Callback queues manage execution.
• Single call stack always.
• Tanglish: Queue vechi manage pannum.`
},

/* ================= ES6+ MUST KNOW ================= */

{
  q: "70. What are default parameters?",
  a: `• Assign default values to function params.
• Used when argument is undefined.
• Improves function safety.
• ES6 feature.
• Tanglish: Value pass pannala-na default.`
},

{
  q: "71. What is optional chaining (?.)?",
  a: `• Safely access nested properties.
• Prevents runtime errors.
• Returns undefined if missing.
• Improves readability.
• Tanglish: Error illaama check.`
},

{
  q: "72. Nullish coalescing (??) vs || ?",
  a: `• ?? checks only null or undefined.
• || checks all falsy values.
• ?? avoids false positives.
• Better for defaults.
• Tanglish: ?? precise, || loose.`
},

{
  q: "73. What is tree shaking?",
  a: `• Removes unused code.
• Done at build time.
• Reduces bundle size.
• Uses ES module imports.
• Tanglish: Use illaatha code delete.`
},

{
  q: "74. How import/export works internally?",
  a: `• ES modules are statically analyzed.
• Imports are hoisted.
• Exports are live bindings.
• Enables tree shaking.
• Tanglish: Load time-la link pannum.`
},

/* ================= SECURITY & REAL WORLD ================= */

{
  q: "75. What is XSS and how JS can cause it?",
  a: `• Injecting malicious scripts.
• Happens via unsanitized input.
• Executes in victim browser.
• Can steal cookies and data.
• Tanglish: User input danger.`
},

{
  q: "76. Why innerHTML is dangerous?",
  a: `• Executes injected scripts.
• Allows XSS attacks.
• No input sanitization.
• textContent is safer.
• Tanglish: innerHTML risky.`
},

{
  q: "77. How to prevent callback hell?",
  a: `• Use promises.
• Use async/await.
• Break logic into functions.
• Avoid nested callbacks.
• Tanglish: async/await rescue.`
}



  ];

  return (
    <div className="max-w-5xl mx-auto p-8">
      <header className="mb-10">
        <div className="flex items-center gap-2 text-amber-500 text-sm font-bold uppercase">
          <Terminal className="w-4 h-4" /> JavaScript Interview Guide
        </div>
        <h1 className="text-4xl font-black mt-4">
          JavaScript Interview Questions (50)
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

      <div className="mt-12 p-6 bg-slate-900 text-white rounded-2xl">
        <Zap className="text-amber-500 mb-2" />
        <p className="text-sm">
          Interview-ku pogum munna ithu oru complete revision pack.
          <br />
          <strong>Tanglish:</strong> Idhu padichaa JS bayam theerum.
        </p>
      </div>
    </div>
  );
}

export default JsFAQ;
