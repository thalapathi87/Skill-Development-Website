import React, { useState } from "react";
import { ChevronDown, ChevronUp, Code2, Globe } from "lucide-react";

function HtmlFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [

{
q: "1. What is HTML?",
a: `• HTML stands for HyperText Markup Language.
• It is used to create web pages.
• It defines the structure of a webpage.
• It works using tags and elements.
• Tanglish: Website-oda skeleton build panna use aagum.`
},
{
q: "2. What is a tag in HTML?",
a: `• A tag is written inside angle brackets.
• Tags define HTML elements.
• Most tags have opening and closing parts.
• Tags guide the browser display.
• Tanglish: Browser-ku instruction kudukkura symbol.`
},
{
q: "3. What is an HTML element?",
a: `• Element includes tag and content.
• It starts with an opening tag.
• Ends with a closing tag.
• Some elements are self-closing.
• Tanglish: Tag + content serndhadhu element.`
},
{
q: "4. What is an attribute?",
a: `• Attributes give extra information.
• Written inside opening tag.
• They are key-value pairs.
• They modify element behavior.
• Tanglish: Tag-ku extra settings.`
},
{
q: "5. What is DOCTYPE?",
a: `• DOCTYPE defines the HTML version.
• Written at the top of the document.
• Helps browser render correctly.
• Mandatory for HTML5.
• Tanglish: Browser-ku rules sollrathu.`
},
{
q: "6. What is the structure of an HTML document?",
a: `• Starts with DOCTYPE.
• Contains html tag.
• Has head and body.
• Body shows visible content.
• Tanglish: HTML basic layout.`
},
{
q: "7. What is the <head> tag?",
a: `• Contains metadata.
• Holds title and links.
• Not visible to users.
• Used for SEO.
• Tanglish: Page settings store panna area.`
},
{
q: "8. What is the <body> tag?",
a: `• Holds visible content.
• Displays text and images.
• Only one body per page.
• Main webpage area.
• Tanglish: User paakura part.`
},
{
q: "9. What is semantic HTML?",
a: `• Uses meaningful tags.
• Improves readability.
• Helps SEO ranking.
• Improves accessibility.
• Tanglish: Meaning irukkura tags use pannrathu.`
},
{
q: "10. Name some semantic tags.",
a: `• header defines page header.
• footer defines page footer.
• section defines section.
• article defines independent content.
• Tanglish: header, footer, section ellam semantic.`
},
{
q: "11. What is <div> tag?",
a: `• Div is a block-level element.
• Used for grouping elements.
• Has no semantic meaning.
• Used for layout.
• Tanglish: Content group panna use.`
},
{
q: "12. What is <span> tag?",
a: `• Span is an inline element.
• Used for small text.
• Has no semantic meaning.
• Used with CSS.
• Tanglish: Inline styling-ku use.`
},
{
q: "13. Difference between div and span?",
a: `• Div is a block-level element.
• Span is an inline element.
• Div takes full width.
• Span takes required width.
• Tanglish: Div block, span inline.`
},
{
q: "14. What is an empty tag?",
a: `• Empty tags have no closing tag.
• They contain no content.
• Examples include br and img.
• Also called self-closing tags.
• Tanglish: Content illaatha tags.`
},
{
q: "15. What is <br> tag?",
a: `• Br creates a line break.
• It is an empty tag.
• No closing tag required.
• Used in text formatting.
• Tanglish: Line break podum tag.`
},
{
q: "16. What is <hr> tag?",
a: `• Hr creates a horizontal line.
• Separates content sections.
• It is an empty tag.
• Used as a divider.
• Tanglish: Content divide pannrathu.`
},
{
q: "17. What is <img> tag?",
a: `• Used to display images.
• Uses src attribute.
• It is an empty tag.
• Supports alt attribute.
• Tanglish: Image kaamikka use.`
},
{
q: "18. What is alt attribute?",
a: `• Shows text if image fails.
• Helps screen readers.
• Improves accessibility.
• Improves SEO.
• Tanglish: Image-ku backup text.`
},
{
q: "19. What is an anchor tag?",
a: `• Used to create hyperlinks.
• Uses href attribute.
• Can link pages or sites.
• Inline element.
• Tanglish: Link create pannrathu.`
},
{
q: "20. What is the target attribute?",
a: `• Controls where link opens.
• _blank opens new tab.
• _self opens same tab.
• Used with anchor tag.
• Tanglish: Link open aagura place.`
},
{
q: "21. What is a list in HTML?",
a: `• Lists group related items.
• Improves content structure.
• HTML supports multiple list types.
• Makes content readable.
• Tanglish: Items-ah group panna use.`
},
{
q: "22. Types of lists in HTML?",
a: `• Ordered list uses numbers.
• Unordered list uses bullets.
• Description list uses terms.
• Each serves different purpose.
• Tanglish: OL, UL, DL types.`
},
{
q: "23. What is an ordered list?",
a: `• Displays items in sequence.
• Uses <ol> tag.
• Items use <li>.
• Shows numbers by default.
• Tanglish: Number list.`
},
{
q: "24. What is an unordered list?",
a: `• Displays bullet points.
• Uses <ul> tag.
• Items use <li>.
• No numbering.
• Tanglish: Bullet list.`
},
{
q: "25. What is a description list?",
a: `• Used for term-definition pairs.
• Uses <dl> tag.
• <dt> defines term.
• <dd> defines description.
• Tanglish: Term explanation list.`
}
,


{
q: "26. What is a table in HTML?",
a: `• Table is used to display data.
• Data is arranged in rows and columns.
• Uses table tag.
• Suitable for tabular information.
• Tanglish: Row-column data kaamikka use.`
},
{
q: "27. What are main table tags?",
a: `• table defines the table.
• tr defines table row.
• td defines table data.
• th defines table header.
• Tanglish: table, tr, td, th main tags.`
},
{
q: "28. What is <tr> tag?",
a: `• tr defines a table row.
• It holds table cells.
• Used inside table tag.
• Groups td and th.
• Tanglish: Table row create pannrathu.`
},
{
q: "29. What is <td> tag?",
a: `• td defines table data.
• It is a table cell.
• Used inside tr tag.
• Holds actual data.
• Tanglish: Table cell data.`
},
{
q: "30. What is <th> tag?",
a: `• th defines table header.
• Header text is bold.
• Center aligned by default.
• Used for column titles.
• Tanglish: Table heading cell.`
},
{
q: "31. What is colspan?",
a: `• Colspan merges columns.
• Used inside td or th.
• Value defines number of columns.
• Used for layout control.
• Tanglish: Columns merge pannrathu.`
},
{
q: "32. What is rowspan?",
a: `• Rowspan merges rows.
• Used in td or th.
• Value defines number of rows.
• Helps complex tables.
• Tanglish: Rows merge pannrathu.`
},
{
q: "33. What is a form in HTML?",
a: `• Form collects user input.
• Uses form tag.
• Sends data to server.
• Used in login and signup.
• Tanglish: User data collect panna use.`
},
{
q: "34. What are form attributes?",
a: `• action defines submit URL.
• method defines HTTP method.
• name identifies the form.
• target defines response location.
• Tanglish: Form settings attributes.`
},
{
q: "35. What is action attribute?",
a: `• Action defines where data is sent.
• URL is provided as value.
• Used in form tag.
• Triggers on submit.
• Tanglish: Data send aagura place.`
},
{
q: "36. What is method attribute?",
a: `• Defines how data is sent.
• Common values are GET and POST.
• GET appends data to URL.
• POST sends data securely.
• Tanglish: Data send method.`
},
{
q: "37. What is input tag?",
a: `• Input collects user data.
• It is an empty tag.
• Uses type attribute.
• Used inside forms.
• Tanglish: User input field.`
},
{
q: "38. Types of input fields?",
a: `• text for plain input.
• password hides text.
• email validates email.
• number accepts digits.
• Tanglish: Different input box types.`
},
{
q: "39. What is textarea?",
a: `• Textarea accepts multi-line input.
• Used for comments.
• Has opening and closing tag.
• Size can be controlled.
• Tanglish: Long text input box.`
},
{
q: "40. What is select tag?",
a: `• Select creates dropdown.
• Option defines choices.
• Used inside forms.
• Allows single selection.
• Tanglish: Dropdown menu.`
},
{
q: "41. What is option tag?",
a: `• Option defines dropdown item.
• Used inside select tag.
• Value sent on submit.
• Text shown to user.
• Tanglish: Dropdown option.`
},
{
q: "42. What is button tag?",
a: `• Button creates clickable button.
• Can submit forms.
• Supports text and icons.
• More flexible than input.
• Tanglish: Click pannra button.`
},
{
q: "43. Difference between GET and POST?",
a: `• GET sends data via URL.
• POST sends data in body.
• GET is less secure.
• POST is more secure.
• Tanglish: GET visible, POST secure.`
},
{
q: "44. What is placeholder attribute?",
a: `• Shows hint text.
• Appears inside input field.
• Disappears on typing.
• Improves user experience.
• Tanglish: Input hint text.`
},
{
q: "45. What is required attribute?",
a: `• Makes field mandatory.
• Prevents empty submission.
• Used in input fields.
• Improves validation.
• Tanglish: Fill panna force pannrathu.`
},
{
q: "46. What is disabled attribute?",
a: `• Disables input field.
• User cannot edit value.
• Field not submitted.
• Used for control.
• Tanglish: Input disable pannrathu.`
},
{
q: "47. What is readonly attribute?",
a: `• Makes input non-editable.
• Value can be submitted.
• Different from disabled.
• Used for display purpose.
• Tanglish: Edit panna mudiyathu, submit aagum.`
},
{
q: "48. What is label tag?",
a: `• Label describes input field.
• Improves accessibility.
• Linked using for attribute.
• Clicking label focuses input.
• Tanglish: Input explanation tag.`
},
{
q: "49. What is iframe?",
a: `• Iframe embeds another webpage.
• Used for videos or maps.
• Loads external content.
• Acts like mini browser.
• Tanglish: Website inside website.`
},
{
q: "50. What is meta tag?",
a: `• Meta provides page metadata.
• Used inside head tag.
• Helps SEO and responsiveness.
• Not visible to users.
• Tanglish: Page information tag.`
},

{
q: "51. What is viewport?",
a: `• Viewport is the visible area of webpage.
• It varies based on device screen.
• Used for responsive design.
• Controlled using meta tag.
• Tanglish: Screen-la theriyura page area.`
},
{
q: "52. What is responsive design?",
a: `• Design adapts to screen size.
• Works on mobile and desktop.
• Uses flexible layouts.
• Improves user experience.
• Tanglish: Ella device-la fit aagura design.`
},
{
q: "53. What is meta viewport tag?",
a: `• Controls page scaling.
• Used for mobile responsiveness.
• Defines width and zoom level.
• Placed inside head tag.
• Tanglish: Mobile-friendly panna use.`
},
{
q: "54. What is charset in HTML?",
a: `• Charset defines character encoding.
• UTF-8 is commonly used.
• Supports multiple languages.
• Prevents text issues.
• Tanglish: Text encoding rule.`
},
{
q: "55. What is favicon?",
a: `• Small icon shown in browser tab.
• Linked using link tag.
• Improves branding.
• Supports multiple formats.
• Tanglish: Browser tab-la kaattura chinna logo.`
},
{
q: "56. What is inline CSS?",
a: `• CSS written inside HTML tag.
• Uses style attribute.
• Applies to single element.
• Not reusable.
• Tanglish: Tag-kulla CSS.`
},
{
q: "57. What is internal CSS?",
a: `• CSS written inside style tag.
• Placed in head section.
• Applies to single page.
• Better than inline CSS.
• Tanglish: Oru page-ku mattum CSS.`
},
{
q: "58. What is external CSS?",
a: `• CSS written in separate file.
• Linked using link tag.
• Reusable across pages.
• Best practice.
• Tanglish: Separate CSS file use pannrathu.`
},
{
q: "59. What is id attribute?",
a: `• Id uniquely identifies element.
• Must be unique per page.
• Used in CSS and JS.
• Starts with # in CSS.
• Tanglish: Unique element name.`
},
{
q: "60. What is class attribute?",
a: `• Class groups multiple elements.
• Can be reused.
• Used for styling.
• Starts with . in CSS.
• Tanglish: Group styling name.`
},
{
q: "61. Difference between id and class?",
a: `• Id is unique.
• Class is reusable.
• Id used once per page.
• Class used many times.
• Tanglish: Id single, class multiple.`
},
{
q: "62. What is block-level element?",
a: `• Takes full width.
• Starts on new line.
• Examples: div, p.
• Used for layout.
• Tanglish: Full-width element.`
},
{
q: "63. What is inline element?",
a: `• Takes required width only.
• Does not start new line.
• Examples: span, a.
• Used inside text.
• Tanglish: Line-kulla irukkura element.`
},
{
q: "64. What is inline-block?",
a: `• Behaves like inline.
• Allows width and height.
• Combines inline and block.
• Used in layouts.
• Tanglish: Inline + block mix.`
},
{
q: "65. What is HTML5?",
a: `• Latest version of HTML.
• Introduced semantic tags.
• Supports multimedia.
• Improves performance.
• Tanglish: New-generation HTML.`
},
{
q: "66. New features in HTML5?",
a: `• Semantic tags added.
• Audio and video support.
• Local storage support.
• Better form controls.
• Tanglish: HTML5-la extra features.`
},
{
q: "67. What is audio tag?",
a: `• Used to play audio.
• Supports controls attribute.
• Multiple formats supported.
• No plugin needed.
• Tanglish: Audio play panna use.`
},
{
q: "68. What is video tag?",
a: `• Used to play videos.
• Supports controls.
• Multiple formats supported.
• Built-in playback.
• Tanglish: Video play panna use.`
},
{
q: "69. What is canvas?",
a: `• Used for drawing graphics.
• Works with JavaScript.
• Supports animations.
• Pixel-based drawing.
• Tanglish: Drawing area.`
},
{
q: "70. What is SVG?",
a: `• SVG is vector-based graphics.
• Scales without loss.
• Written in XML.
• Used for icons.
• Tanglish: Scalable graphics.`
},
{
q: "71. Difference between Canvas and SVG?",
a: `• Canvas is pixel-based.
• SVG is vector-based.
• Canvas uses JS heavily.
• SVG uses XML.
• Tanglish: Canvas pixels, SVG vectors.`
},
{
q: "72. What is localStorage?",
a: `• Stores data in browser.
• Data persists permanently.
• Key-value storage.
• Accessible via JavaScript.
• Tanglish: Browser-la data save pannrathu.`
},
{
q: "73. What is sessionStorage?",
a: `• Stores data temporarily.
• Cleared on tab close.
• Key-value storage.
• Browser-based.
• Tanglish: Temporary browser storage.`
},
{
q: "74. Difference between localStorage and sessionStorage?",
a: `• localStorage is permanent.
• sessionStorage is temporary.
• localStorage shared across tabs.
• sessionStorage tab-specific.
• Tanglish: Permanent vs temporary storage.`
},
{
q: "75. What is data-* attribute?",
a: `• Used to store custom data.
• Starts with data- prefix.
• Accessible in JavaScript.
• Does not affect layout.
• Tanglish: Custom data store pannrathu.`
},

{
q: "76. What is accessibility in HTML?",
a: `• Accessibility makes web usable for everyone.
• Supports screen readers.
• Uses semantic tags.
• Improves inclusive design.
• Tanglish: Ella user-kum website use panna easy aagurathu.`
},
{
q: "77. What is ARIA?",
a: `• ARIA improves accessibility.
• Adds roles and labels.
• Helps assistive technologies.
• Used when HTML is not enough.
• Tanglish: Accessibility support attributes.`
},
{
q: "78. What is role attribute?",
a: `• Role defines element purpose.
• Used with ARIA.
• Helps screen readers.
• Improves accessibility.
• Tanglish: Element meaning explain pannrathu.`
},
{
q: "79. What is SEO?",
a: `• SEO improves search ranking.
• Uses proper tags.
• Helps discoverability.
• Important for traffic.
• Tanglish: Google-la top-la varra techniques.`
},
{
q: "80. How does HTML help SEO?",
a: `• Semantic tags improve structure.
• Meta tags help indexing.
• Headings improve readability.
• Alt text improves search.
• Tanglish: HTML correct-aa irundha SEO improve aagum.`
},
{
q: "81. What is heading tag?",
a: `• Heading tags define titles.
• Range from h1 to h6.
• h1 is most important.
• Improves page structure.
• Tanglish: Title tags.`
},
{
q: "82. Difference between h1 and h6?",
a: `• h1 is largest heading.
• h6 is smallest heading.
• h1 has more importance.
• Used for hierarchy.
• Tanglish: Size + importance difference.`
},
{
q: "83. What is paragraph tag?",
a: `• Paragraph displays text.
• Uses <p> tag.
• Block-level element.
• Adds margin automatically.
• Tanglish: Text paragraph.`
},
{
q: "84. What is strong tag?",
a: `• Strong highlights important text.
• Shows bold text.
• Has semantic meaning.
• Improves accessibility.
• Tanglish: Important text highlight.`
},
{
q: "85. What is em tag?",
a: `• Em emphasizes text.
• Shows italic text.
• Has semantic meaning.
• Used for stress.
• Tanglish: Emphasis kaamikrathu.`
},
{
q: "86. Difference between strong and b?",
a: `• Strong has semantic meaning.
• b is only visual.
• Strong helps accessibility.
• b just bolds text.
• Tanglish: Strong meaning-oda bold.`
},
{
q: "87. What is comment in HTML?",
a: `• Comment is ignored by browser.
• Used for notes.
• Not visible to users.
• Helps developers.
• Tanglish: Developer notes.`
},
{
q: "88. How to write HTML comment?",
a: `• Uses <!-- and -->.
• Content inside is ignored.
• Not rendered.
• Used for explanation.
• Tanglish: Comment syntax.`
},
{
q: "89. What is deprecated tag?",
a: `• Deprecated tags are outdated.
• Not recommended to use.
• May be removed later.
• Replace with modern tags.
• Tanglish: Old tags avoid pannrathu.`
},
{
q: "90. Example of deprecated tags?",
a: `• font tag is deprecated.
• center tag is deprecated.
• Use CSS instead.
• Improves standards.
• Tanglish: font, center old tags.`
},
{
q: "91. What is script tag?",
a: `• Script embeds JavaScript.
• Can be internal or external.
• Used for interactivity.
• Placed in head or body.
• Tanglish: JS add panna use.`
},
{
q: "92. What is noscript tag?",
a: `• Shown when JS disabled.
• Provides fallback content.
• Improves accessibility.
• Used with script.
• Tanglish: JS illatti kaamikra content.`
},
{
q: "93. What is link tag?",
a: `• Links external resources.
• Used for CSS.
• Placed inside head.
• Self-closing tag.
• Tanglish: CSS connect panna use.`
},
{
q: "94. What is defer attribute?",
a: `• Loads script after HTML parsing.
• Improves page load speed.
• Used in script tag.
• Avoids blocking.
• Tanglish: Script late-aa load aagum.`
},
{
q: "95. What is async attribute?",
a: `• Loads script asynchronously.
• Does not block HTML.
• Executes immediately after load.
• Used for performance.
• Tanglish: Script parallel-aa load aagum.`
},
{
q: "96. Difference between async and defer?",
a: `• Async executes immediately.
• Defer waits for HTML parse.
• Async order not guaranteed.
• Defer order maintained.
• Tanglish: Async instant, defer later.`
},
{
q: "97. What is HTML validation?",
a: `• Checks HTML correctness.
• Finds syntax errors.
• Uses W3C validator.
• Improves compatibility.
• Tanglish: HTML correct-aa irukka check.`
},
{
q: "98. What is cross-browser compatibility?",
a: `• Website works on all browsers.
• HTML standards help.
• Avoid deprecated tags.
• Test on multiple browsers.
• Tanglish: Ella browser-la work aaganum.`
},
{
q: "99. What is web standard?",
a: `• Rules for web development.
• Defined by W3C.
• Ensures consistency.
• Improves compatibility.
• Tanglish: Web rules follow pannrathu.`
},
{
q: "100. Why is HTML important?",
a: `• HTML is base of web.
• Defines webpage structure.
• Works with CSS and JavaScript.
• Required for all websites.
• Tanglish: Web development-oda foundation HTML thaan.`
}
]






  return (
    <div className="max-w-5xl mx-auto p-8">
      <header className="mb-10">
        <div className="flex items-center gap-2 text-blue-500 text-sm font-bold uppercase">
          <Code2 className="w-4 h-4" /> HTML Interview Guide
        </div>
        <h1 className="text-4xl font-black mt-4">
          HTML5 Interview Questions
        </h1>
      </header>

      {questions.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className="mb-4 border rounded-xl shadow-sm hover:border-blue-200 transition-colors">
            <button
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full flex justify-between items-center px-6 py-4 font-semibold text-left"
            >
              {item.q}
              {isOpen ? <ChevronUp className="text-blue-500" /> : <ChevronDown className="text-slate-400" />}
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
            HTML mela focus pannum pothu <strong>Semantic tags</strong> matrum <strong>Accessibility</strong> pathi interview-la kandaipa kepanga. 
            <br />
            <strong>Tanglish:</strong> Structure strong-ah irundha thaan SEO nalla irukkum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HtmlFAQ;