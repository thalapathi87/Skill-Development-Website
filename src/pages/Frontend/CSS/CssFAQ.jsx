import React, { useState } from "react";
import { ChevronDown, ChevronUp, Code2, Globe } from "lucide-react";

function CssFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
{
q: "1. What is CSS?",
a: `• CSS stands for Cascading Style Sheets.
• It is used to style HTML elements.
• It controls layout, colors, and fonts.
• It separates content from presentation.
• Tanglish: Website-ku style kudukka use aagum.`
},
{
q: "2. What is the CSS box model?",
a: `• The box model defines element sizing.
• It includes content, padding, border, and margin.
• Padding adds space inside the border.
• Margin adds space outside the border.
• Tanglish: Element space epdi calculate aaguthu nu box model.`
},
{
q: "3. Difference between margin and padding?",
a: `• Margin creates space outside the element.
• Padding creates space inside the element.
• Margin does not affect background color.
• Padding affects background color.
• Tanglish: Margin veliya, padding ullae space.`
},
{
q: "4. What is display property?",
a: `• Display defines how an element is shown.
• Common values are block, inline, inline-block.
• It affects layout behavior.
• Used in positioning elements.
• Tanglish: Element epdi kaattanum nu control pannrathu.`
},
{
q: "5. What is block-level element?",
a: `• Block elements take full width.
• They start on a new line.
• Height and width can be set.
• Example: div, p.
• Tanglish: Full-width element.`
},
{
q: "6. What is inline element?",
a: `• Inline elements take required width.
• They do not start on new line.
• Height and width cannot be set.
• Example: span, a.
• Tanglish: Line-kulla irukkura element.`
},
{
q: "7. What is inline-block?",
a: `• Inline-block stays inline.
• Width and height can be set.
• Combines inline and block behavior.
• Used in layouts.
• Tanglish: Inline + block mix.`
},
{
q: "8. What is position property?",
a: `• Position controls element placement.
• Values include static, relative, absolute.
• It works with top, left, right.
• Used for layout control.
• Tanglish: Element place control pannrathu.`
},
{
q: "9. What is position: relative?",
a: `• Relative positions element from itself.
• Original space is maintained.
• Used as reference for absolute.
• Common in layouts.
• Tanglish: Thanna place irundhu move aagum.`
},
{
q: "10. What is position: absolute?",
a: `• Absolute positions from nearest ancestor.
• Removed from normal flow.
• Uses top, left properties.
• Used for overlays.
• Tanglish: Parent-ku relative-aa move aagum.`
},
{
q: "11. What is position: fixed?",
a: `• Fixed positions relative to viewport.
• Element stays on scroll.
• Removed from document flow.
• Used for headers.
• Tanglish: Scroll pannalum move aagathu.`
},
{
q: "12. What is position: sticky?",
a: `• Sticky toggles between relative and fixed.
• Depends on scroll position.
• Needs top value.
• Used for sticky headers.
• Tanglish: Scroll-la fix aagum element.`
},
{
q: "13. What is z-index?",
a: `• Z-index controls stacking order.
• Higher value comes on top.
• Works on positioned elements.
• Used for overlays.
• Tanglish: Layer order control.`
},
{
q: "14. What is overflow property?",
a: `• Controls overflowing content.
• Values are hidden, scroll, auto.
• Used in containers.
• Prevents layout break.
• Tanglish: Content veliya pona control.`
},
{
q: "15. What is float?",
a: `• Float positions element left or right.
• Text wraps around it.
• Removed from normal flow.
• Used in old layouts.
• Tanglish: Old-style layout technique.`
},
{
q: "16. How to clear float?",
a: `• Clear property clears float.
• Use clear: both.
• Prevents parent collapse.
• Used after float.
• Tanglish: Float problem fix pannrathu.`
},
{
q: "17. What is Flexbox?",
a: `• Flexbox is one-dimensional layout.
• Works in row or column.
• Aligns items easily.
• Used for responsive layouts.
• Tanglish: Easy layout system.`
},
{
q: "18. What is justify-content?",
a: `• Aligns items horizontally.
• Works on main axis.
• Used in flex container.
• Controls spacing.
• Tanglish: Horizontal alignment.`
},
{
q: "19. What is align-items?",
a: `• Aligns items vertically.
• Works on cross axis.
• Used in flex container.
• Controls height alignment.
• Tanglish: Vertical alignment.`
},
{
q: "20. What is flex-wrap?",
a: `• Controls wrapping of flex items.
• Values include wrap and nowrap.
• Used in responsive layouts.
• Prevents overflow.
• Tanglish: Items next line poganum-na use.`
},
{
q: "21. What is CSS Grid?",
a: `• Grid is two-dimensional layout.
• Works with rows and columns.
• More powerful than flexbox.
• Used for complex layouts.
• Tanglish: Row-column layout system.`
},
{
q: "22. Difference between Flexbox and Grid?",
a: `• Flexbox is one-dimensional.
• Grid is two-dimensional.
• Flexbox for components.
• Grid for page layout.
• Tanglish: Flex one direction, grid two.`
},
{
q: "23. What are media queries?",
a: `• Media queries enable responsive design.
• Apply styles based on screen size.
• Used with @media rule.
• Supports mobile design.
• Tanglish: Screen size-ku style change.`
},
{
q: "24. What is responsive design?",
a: `• Responsive design adapts to devices.
• Works on mobile and desktop.
• Uses media queries.
• Improves user experience.
• Tanglish: Ella device-la fit aagum.`
},
{
q: "25. What is max-width?",
a: `• Limits element maximum width.
• Prevents overflow.
• Used in responsive layouts.
• Better than fixed width.
• Tanglish: Max size limit.`
},
{
q: "26. What is min-width?",
a: `• Sets minimum width.
• Prevents shrinking.
• Used in responsive design.
• Maintains layout.
• Tanglish: Min size limit.`
},
{
q: "27. What is opacity?",
a: `• Controls element transparency.
• Value between 0 and 1.
• Affects child elements.
• Used for fade effects.
• Tanglish: Transparency control.`
},
{
q: "28. Difference between opacity and rgba?",
a: `• Opacity affects entire element.
• RGBA affects only color.
• RGBA does not affect children.
• Used for backgrounds.
• Tanglish: Opacity full element, rgba color.`
},
{
q: "29. What are pseudo-classes?",
a: `• Target element states.
• Examples: hover, focus.
• Defined using colon.
• Used for interactions.
• Tanglish: State-based styling.`
},
{
q: "30. What are pseudo-elements?",
a: `• Style part of an element.
• Examples: ::before, ::after.
• Use double colon.
• Used for decoration.
• Tanglish: Element part style.`
},



{
q: ". What are CSS variables?",
a: `• Variables store reusable values.
• Defined using -- syntax.
• Used with var() function.
• Improves maintainability.
• Tanglish: Reusable CSS values.`
},
{
q: "31. What is box-sizing property?",
a: `• Box-sizing controls width and height calculation.
• content-box is the default value.
• border-box includes padding and border.
• Helps in predictable layouts.
• Tanglish: Width calculation control pannrathu.`
},
{
q: "32. What is border-radius?",
a: `• Border-radius rounds element corners.
• Accepts pixel or percentage values.
• Can be applied to images.
• Used for modern UI.
• Tanglish: Corner round pannrathu.`
},
{
q: "33. What is background property?",
a: `• Background sets color or image.
• Supports multiple properties.
• Can control repeat and position.
• Used for styling sections.
• Tanglish: Background style set pannrathu.`
},
{
q: "34. Difference between class and id?",
a: `• Class can be reused.
• Id must be unique.
• Class uses dot selector.
• Id uses hash selector.
• Tanglish: Class multiple, id single.`
},
{
q: "35. What is specificity?",
a: `• Specificity decides which CSS rule applies.
• Inline styles have highest priority.
• ID selectors override class selectors.
• Important for conflict resolution.
• Tanglish: CSS priority system.`
},
{
q: "36. What is !important?",
a: `• Overrides all other CSS rules.
• Has highest priority.
• Breaks normal specificity rules.
• Should be avoided mostly.
• Tanglish: Force style apply pannrathu.`
},
{
q: "37. What are CSS units?",
a: `• Units define size values.
• Examples: px, %, em, rem.
• Used for responsive design.
• Relative units adapt better.
• Tanglish: Size measurement units.`
},
{
q: "38. Difference between em and rem?",
a: `• em depends on parent font size.
• rem depends on root font size.
• rem is more predictable.
• Both are relative units.
• Tanglish: em parent, rem root.`
},
{
q: "39. What is font-family?",
a: `• Defines text font.
• Multiple fonts can be listed.
• Browser picks available font.
• Used for typography.
• Tanglish: Text font set pannrathu.`
},
{
q: "40. What is line-height?",
a: `• Controls vertical spacing of text.
• Improves readability.
• Accepts unitless values.
• Used in text styling.
• Tanglish: Line spacing control.`
},
{
q: "41. What is text-align?",
a: `• Aligns text horizontally.
• Values include left, center, right.
• Works on block elements.
• Used in headings and text.
• Tanglish: Text alignment.`
},
{
q: "42. What is white-space property?",
a: `• Controls space handling in text.
• Values include nowrap and pre.
• Affects line breaks.
• Used in text layout.
• Tanglish: Space behavior control.`
},
{
q: "43. What is visibility property?",
a: `• Controls element visibility.
• hidden hides element but keeps space.
• visible shows element.
• Differs from display none.
• Tanglish: Visible/hidden control.`
},
{
q: "44. Difference between display none and visibility hidden?",
a: `• display none removes element from layout.
• visibility hidden keeps space.
• display none affects flow.
• visibility hidden does not.
• Tanglish: Remove vs hide difference.`
},
{
q: "45. What is cursor property?",
a: `• Changes mouse cursor style.
• Example values: pointer, default.
• Used on buttons and links.
• Improves UX.
• Tanglish: Mouse pointer style.`
},
{
q: "46. What is transition?",
a: `• Adds smooth animation.
• Used for hover effects.
• Controls duration and timing.
• Improves UI feel.
• Tanglish: Smooth effect kudukkum.`
},
{
q: "47. What is transform property?",
a: `• Used to rotate or scale elements.
• Supports translate and skew.
• Does not affect layout flow.
• Used for animations.
• Tanglish: Element move/rotate pannrathu.`
},
{
q: "48. What is animation property?",
a: `• Creates keyframe animations.
• Uses @keyframes rule.
• Supports duration and delay.
• Used for dynamic effects.
• Tanglish: Advanced animation system.`
},
{
q: "49. What are keyframes?",
a: `• Defines animation steps.
• Used with @keyframes.
• Controls start and end states.
• Used in CSS animations.
• Tanglish: Animation steps define pannrathu.`
},
{
q: "50. What is object-fit?",
a: `• Controls image resizing.
• Used with images and videos.
• Values include cover and contain.
• Prevents distortion.
• Tanglish: Image fit control.`
},
{
q: "51. What is overflow-x and overflow-y?",
a: `• Controls horizontal overflow.
• Controls vertical overflow.
• Used for scroll behavior.
• Helps manage content.
• Tanglish: X-Y overflow control.`
},
{
q: "52. What is calc() function?",
a: `• Performs calculations in CSS.
• Combines units.
• Used in responsive layouts.
• Improves flexibility.
• Tanglish: CSS-la calculation.`
},
{
q: "53. What is aspect-ratio?",
a: `• Maintains width-height ratio.
• Useful for images and videos.
• Prevents layout shift.
• Modern CSS feature.
• Tanglish: Width-height proportion.`
},
{
q: "54. What are CSS variables?",
a: `• Stores reusable values.
• Defined using -- syntax.
• Used with var() function.
• Improves maintainability.
• Tanglish: Reusable CSS values.`
},
{
q: "55. What is z-index stacking context?",
a: `• Defines layering context.
• Created by positioned elements.
• Affects child elements.
• Important for overlays.
• Tanglish: Layer grouping system.`
},
{
q: "56. What is @media rule?",
a: `• @media applies styles based on conditions.
• Commonly used for screen sizes.
• Enables responsive design.
• Supports print and orientation.
• Tanglish: Condition base panni style apply pannrathu.`
},
{
q: "57. What is mobile-first design?",
a: `• Design starts from mobile screens.
• Then scales to larger screens.
• Improves performance.
• Preferred in modern CSS.
• Tanglish: Mobile-la start pannra design.`
},
{
q: "58. What is vendor prefix?",
a: `• Vendor prefixes ensure browser support.
• Examples: -webkit-, -moz-.
• Used for experimental features.
• Becoming less common now.
• Tanglish: Browser support-ku add pannra prefix.`
},
{
q: "59. What is normalize.css?",
a: `• Normalize.css standardizes browser styles.
• Keeps useful defaults.
• Better than full reset.
• Improves consistency.
• Tanglish: Browser style equal pannrathu.`
},
{
q: "60. What is CSS reset?",
a: `• Removes default browser styles.
• Starts styling from scratch.
• Avoids inconsistency.
• Used in older projects.
• Tanglish: Default style remove pannrathu.`
},
{
q: "61. What is font-weight?",
a: `• Controls text thickness.
• Values include normal, bold.
• Numeric values also supported.
• Used in typography.
• Tanglish: Text thickness control.`
},
{
q: "62. What is text-transform?",
a: `• Changes text case.
• Values include uppercase, lowercase.
• Used for headings.
• Does not change actual text.
• Tanglish: Text case change.`
},
{
q: "63. What is letter-spacing?",
a: `• Controls space between letters.
• Improves readability.
• Used in headings.
• Accepts px or em.
• Tanglish: Letter gap control.`
},
{
q: "64. What is word-spacing?",
a: `• Controls space between words.
• Used for readability.
• Accepts length values.
• Affects text layout.
• Tanglish: Word gap control.`
},
{
q: "65. What is box-shadow?",
a: `• Adds shadow to elements.
• Supports blur and spread.
• Used for depth effect.
• Enhances UI.
• Tanglish: Element shadow add pannrathu.`
},
{
q: "66. What is text-shadow?",
a: `• Adds shadow to text.
• Improves visibility.
• Accepts blur values.
• Used sparingly.
• Tanglish: Text-ku shadow.`
},
{
q: "67. What is pointer-events?",
a: `• Controls mouse interaction.
• Can disable clicks.
• Used in overlays.
• Helps UI control.
• Tanglish: Mouse interaction control.`
},
{
q: "68. What is user-select?",
a: `• Controls text selection.
• Can disable selecting text.
• Used for UI protection.
• Improves UX.
• Tanglish: Text select panna mudiyuma illaya.`
},
{
q: "69. What is object-position?",
a: `• Positions image inside container.
• Works with object-fit.
• Controls focus area.
• Used for images.
• Tanglish: Image position control.`
},
{
q: "70. What is scroll-behavior?",
a: `• Controls scroll animation.
• smooth enables smooth scrolling.
• Used in anchor links.
• Improves UX.
• Tanglish: Smooth scroll effect.`
},
{
q: "71. What is accent-color?",
a: `• Styles form controls.
• Applies to checkbox and radio.
• Modern CSS feature.
• Improves branding.
• Tanglish: Form control color.`
},
{
q: "72. What is :root selector?",
a: `• Targets root element.
• Commonly html element.
• Used for CSS variables.
• Improves global control.
• Tanglish: Root-level selector.`
},
{
q: "73. What is will-change property?",
a: `• Hints browser about changes.
• Improves performance.
• Used before animations.
• Should be used carefully.
• Tanglish: Performance hint property.`
},
{
q: "74. What is contain property?",
a: `• Limits element rendering scope.
• Improves performance.
• Used in large layouts.
• Modern CSS feature.
• Tanglish: Render scope limit pannrathu.`
},
{
q: "75. What is prefers-color-scheme?",
a: `• Detects system theme.
• Used for dark mode.
• Works with media queries.
• Improves accessibility.
• Tanglish: System dark/light mode detect pannrathu.`
}


];
 // ✅ semicolon fixed

  return (
    <div className="max-w-5xl mx-auto p-8">
      <header className="mb-10">
        <div className="flex items-center gap-2 text-blue-500 text-sm font-bold uppercase">
          <Code2 className="w-4 h-4" /> CSS Interview Guide
        </div>
        <h1 className="text-4xl font-black mt-4">
          CSS Interview Questions
        </h1>
      </header>

      {questions.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="mb-4 border rounded-xl shadow-sm hover:border-blue-200 transition-colors"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full flex justify-between items-center px-6 py-4 font-semibold text-left"
            >
              {item.q}
              {isOpen ? (
                <ChevronUp className="text-blue-500" />
              ) : (
                <ChevronDown className="text-slate-400" />
              )}
            </button>

            {isOpen && (
              <div className="px-6 pb-4 text-slate-700 whitespace-pre-line border-t pt-4 bg-slate-50 rounded-b-xl">
                {item.a}
              </div>
            )}
          </div>
        );
      })}

      <div className="mt-12 p-6 bg-blue-600 text-white rounded-2xl flex items-start gap-4">
        <Globe className="w-8 h-8 opacity-80" />
        <div>
          <h3 className="font-bold text-lg mb-1">Quick Note:</h3>
          <p className="text-sm opacity-90">
            CSS interview-la <strong>Box Model</strong>, <strong>Flexbox</strong>,{" "}
            <strong>Grid</strong>, and <strong>Specificity</strong> romba important.
            Ivai ellam layout and responsiveness-ku base concepts.
            <br />
            <strong>Tanglish:</strong> Layout purinjaa thaan real-world UI smooth-aa work aagum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CssFAQ;
