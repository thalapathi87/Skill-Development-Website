import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp, BookOpen, Terminal, ShieldCheck, Zap } from "lucide-react";

function CssFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    { q: "1. What is the CSS box model, and what are its components?", a: "The CSS box model consists of the content, padding, border, and margin. It defines the space an element occupies.", cat: "Basics" },
    { q: "2. How do you center a div both horizontally and vertically?", a: "Use 'display: flex; justify-content: center; align-items: center;' on the parent container, or use 'position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);' on the div.", cat: "Layout" },
    { q: "3. What is the difference between inline, block, and inline-block elements?", a: "'inline' elements don't start on a new line and only take up the width of their content. 'block' elements start on a new line and take up the full width. 'inline-block' elements behave like inline elements but respect height and width.", cat: "Basics" },
    { q: "4. How does the position property work (relative, absolute, fixed, sticky)?", a: "relative: Positioned relative to its normal position. absolute: Relative to nearest positioned ancestor. fixed: Relative to viewport, stays fixed. sticky: Toggles between relative and fixed based on scroll.", cat: "Layout" },
    { q: "5. What are CSS selectors, and how do specificity and inheritance work?", a: "Selectors target elements. Specificity determines priority (Inline > ID > Class > Element). Inheritance allows children to inherit styles from parents.", cat: "Basics" },
    { q: "6. How do you implement responsive design using media queries?", a: "Use @media rules to apply different styles based on screen size, orientation, or resolution.", cat: "Responsive" },
    { q: "7. Explain the differences between Flexbox and CSS Grid layouts.", a: "Flexbox is one-dimensional (row or column). CSS Grid is two-dimensional (rows and columns simultaneously).", cat: "Layout" },
    { q: "8. What is the difference between margin and padding?", a: "Margin is the space outside an element's border; padding is the space inside the border, around the content.", cat: "Basics" },
    { q: "9. What are pseudo-classes and pseudo-elements?", a: "Pseudo-classes (:hover, :focus) target states. Pseudo-elements (::before, ::after) style specific parts of content.", cat: "Advanced" },
    { q: "10. How do you create CSS animations and key properties?", a: "Use @keyframes for steps and properties like animation-name, duration, and timing-function to control it.", cat: "Animation" },
    { q: "11. What is z-index and stacking context?", a: "z-index controls stacking order on the z-axis. Stacking context determines how elements are layered based on parent properties.", cat: "Advanced" },
    { q: "12. Difference between display: none and visibility: hidden?", a: "display: none removes the element from flow; visibility: hidden hides it but keeps its occupied space.", cat: "Basics" },
    { q: "13. How does float work and how to clear it?", a: "Float pushes elements left/right. Clear using 'clear: both' or clearfix to prevent layout collapse.", cat: "Layout" },
    { q: "14. How do you optimize CSS for performance?", a: "Minify files, avoid redundant styles, use shorthand properties, and limit complex selectors.", cat: "Performance" },
    { q: "15. What is box-sizing property?", a: "Defines size calculation. content-box (default) adds padding/border outside; border-box includes them within the width.", cat: "Basics" },
    { q: "16. How do you use CSS transitions?", a: "Use the 'transition' property for smooth value changes over time (e.g., hover effects).", cat: "Animation" },
    { q: "17. What are preprocessors like SASS/LESS?", a: "They add variables, nesting, and functions to CSS, making it maintainable and scalable.", cat: "Advanced" },
    { q: "18. Difference between em and rem units?", a: "em is relative to parent font size; rem is relative to the root (html) font size.", cat: "Basics" },
    { q: "19. How to handle cross-browser compatibility?", a: "Use vendor prefixes, resets/normalize, and test across different browser engines.", cat: "Advanced" },
    { q: "20. What are CSS variables?", a: "Reusable values defined with '--' (e.g., --color: blue) and used with 'var(--color)'.", cat: "Advanced" },
    { q: "21. How does overflow property work?", a: "Controls content exceeding dimensions. Values: visible, hidden, scroll, auto.", cat: "Basics" },
    { q: "22. How to implement a sticky header?", a: "Use 'position: sticky; top: 0;' on the header element.", cat: "Layout" },
    { q: "23. What are CSS combinators?", a: "Define relationships: descendant (space), child (>), adjacent (+), general sibling (~).", cat: "Advanced" },
    { q: "24. What is object-fit property?", a: "Controls how images/videos resize to fit containers (cover, contain, fill).", cat: "Advanced" },
    { q: "25. Responsive gallery with Grid/Flex?", a: "Grid: grid-template-columns (repeat/auto-fill). Flex: flex-wrap with basis.", cat: "Responsive" },
    { q: "26. How to make an image responsive?", a: "Use 'max-width: 100%; height: auto;'.", cat: "Responsive" },
    { q: "27. What is @import rule?", a: "Imports external CSS into a stylesheet; avoided for performance in favor of <link> tags.", cat: "Performance" },
    { q: "28. What are CSS sprites?", a: "Combining images into one file to reduce HTTP requests, using background-position to show parts.", cat: "Performance" },
    { q: "29. Difference between opacity and rgba()?", a: "Opacity affects children too; rgba() transparency applies only to the specific color.", cat: "Basics" },
    { q: "30. Prevent flex item shrink/grow?", a: "Use 'flex-shrink: 0;' and 'flex-grow: 0;'.", cat: "Layout" },
    { q: "31. :nth-child() vs :nth-of-type()?", a: "nth-child looks at all siblings; nth-of-type looks only at siblings of the same tag type.", cat: "Advanced" },
    { q: "32. How does calc() work?", a: "Allows mathematical calculations in properties (e.g., width: calc(100% - 20px)).", cat: "Advanced" },
    { q: "33. What is clip-path property?", a: "Creates a clipping region that defines what part of an element is visible.", cat: "Advanced" },
    { q: "34. What are CSS resets?", a: "Standardize default browser styles for a consistent starting point.", cat: "Basics" },
    { q: "35. Style checkbox/radio with CSS?", a: "Use 'appearance: none' and style custom pseudo-elements based on :checked state.", cat: "Advanced" },
    { q: "36. What is will-change property?", a: "Hints browser about future changes for GPU optimization; use sparingly.", cat: "Performance" },
    { q: "37. Full-page background image?", a: "background-size: cover; background-position: center; on a full-height container.", cat: "Layout" },
    { q: "38. Implement dark mode in CSS?", a: "Use '@media (prefers-color-scheme: dark)' or toggle a .dark class with variables.", cat: "Advanced" },
    { q: "39. Issues caused by float?", a: "Parent container collapse; fixed using clearfix or overflow: hidden.", cat: "Layout" },
    { q: "40. link vs @import vs Inline?", a: "link: External file (fastest). @import: Inside CSS (slower). Inline: Direct style attribute (highest specificity).", cat: "Performance" },
  ];

  const categories = ["Basics", "Layout", "Responsive", "Advanced", "Animation", "Performance"];

  return (
    <div className="max-w-5xl animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-32">
      {/* --- HEADER --- */}
      <header className="mb-12 relative">
        <div className="flex items-center gap-2 text-indigo-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-4">
          <BookOpen className="w-4 h-4" />
          <span>Interview Preparation Guide</span>
        </div>
        <h1 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">
          CSS <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-500">Mastery Q&A</span>
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed max-w-3xl font-medium">
          40 Essential concepts to ace your front-end interview. Deep dives into architecture, performance, and layout logic.
        </p>
      </header>

      {/* --- STATS / OVERVIEW --- */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm text-center">
          <div className="text-2xl font-black text-indigo-600">40</div>
          <div className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Total Qns</div>
        </div>
        <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm text-center">
          <div className="text-2xl font-black text-emerald-500">6</div>
          <div className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Categories</div>
        </div>
        <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm text-center">
          <div className="text-2xl font-black text-amber-500">100%</div>
          <div className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Mastery</div>
        </div>
        <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm text-center">
          <ShieldCheck className="w-6 h-6 text-sky-500 mx-auto mb-1" />
          <div className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Verified</div>
        </div>
      </div>

      {/* --- FAQ LIST --- */}
      <div className="space-y-4">
        {questions.map((item, index) => (
          <div 
            key={index}
            className={`group rounded-[2rem] border transition-all duration-300 ${
              openIndex === index 
                ? "bg-white border-indigo-200 shadow-xl shadow-indigo-50" 
                : "bg-slate-50 border-transparent hover:bg-white hover:border-slate-200"
            }`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-8 py-6 flex items-center justify-between text-left"
            >
              <div className="flex items-center gap-4">
                <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black transition-colors ${
                  openIndex === index ? "bg-indigo-600 text-white" : "bg-white text-slate-400 border border-slate-200"
                }`}>
                  {index + 1}
                </span>
                <span className={`font-bold text-sm md:text-base ${openIndex === index ? "text-indigo-950" : "text-slate-700"}`}>
                  {item.q.replace(/^\d+\.\s*/, '')}
                </span>
              </div>
              {openIndex === index ? <ChevronUp className="text-indigo-500 shrink-0" /> : <ChevronDown className="text-slate-400 shrink-0" />}
            </button>
            
            {openIndex === index && (
              <div className="px-8 pb-8 animate-in slide-in-from-top-2 duration-300">
                <div className="h-px bg-slate-100 mb-6" />
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                    <Terminal className="w-3 h-3" />
                  </div>
                  <div className="space-y-4">
                    <p className="text-slate-600 leading-relaxed font-medium">
                      {item.a}
                    </p>
                    <div className="inline-block px-3 py-1 bg-slate-100 rounded-full text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      Tag: {item.cat}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* --- FINAL NOTE --- */}
      <div className="mt-16 p-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500 rounded-[3rem]">
        <div className="bg-slate-900 p-12 rounded-[2.9rem] text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500 via-transparent to-transparent" />
          <Zap className="w-12 h-12 text-amber-400 mx-auto mb-6 animate-pulse" />
          <h3 className="text-3xl font-black text-white mb-4">Ready to Conquer?</h3>
          <p className="text-slate-400 max-w-xl mx-auto mb-8">
            Intha 40 concepts-um clear-ah purinjitta, CSS interviews mattum illa, real-time complex projects-aiyum ungalaala easy-ah handle panna mudiyum.
          </p>
          <button className="px-10 py-4 bg-white text-slate-950 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-transform">
            Download PDF Guide
          </button>
        </div>
      </div>
    </div>
  );
}

export default CssFAQ;