import React, { useState } from 'react';

function HtmlFAQ() {
  const [search, setSearch] = useState("");

  const qaData = [
    { id: 1, q: "What is HTML?", a: "HTML stands for Hyper Text Markup Language. It is the standard language used to create and design web pages. HTML structures web content using a system of tags and attributes." },
    { id: 2, q: "What is the purpose of the <!DOCTYPE html> declaration?", a: "The <!DOCTYPE html> declaration defines the document type and version of HTML being used. It helps the browser to render the page correctly by specifying that the document is HTML5." },
    { id: 3, q: "What are the main HTML tags used in a basic web page structure?", a: "The main HTML tags are: <html> (root element), <head> (meta-information), and <body> (visible content)." },
    { id: 4, q: "What are semantic HTML elements?", a: "Semantic HTML elements convey the meaning of the content. Examples: <header>, <footer>, <article>, <section>, and <nav>." },
    { id: 5, q: "How do you create a link in HTML?", a: "You create a link using the <a> (anchor) tag. The href attribute specifies the URL: <a href='https://www.example.com'>Visit Example</a>" },
    { id: 6, q: "Difference between id and class attributes?", a: "id: Unique identifier for a single element. class: Identifier for multiple elements. Classes are reusable for styling and JS." },
    { id: 7, q: "How can you include CSS in an HTML document?", a: "1. Inline CSS (style attribute), 2. Internal CSS (<style> in head), 3. External CSS (<link> tag)." },
    { id: 8, q: "What are HTML entities and why are they used?", a: "Special codes like &lt; for < used to represent reserved characters or characters not on a keyboard." },
    { id: 9, q: "What is the alt attribute in an <img> tag?", a: "Alternative text that describes an image for accessibility (screen readers) or if the image fails to load." },
    { id: 10, q: "How do you create a table in HTML?", a: "Using <table>, <tr> (row), <th> (header), and <td> (data cell)." },
    { id: 11, q: "What are the different types of lists in HTML?", a: "1. Ordered List (<ol>), 2. Unordered List (<ul>), 3. Description List (<dl>)." },
    { id: 12, q: "What is the purpose of the meta tag?", a: "Provides metadata like charset, description, and keywords. Example: <meta charset='UTF-8'>." },
    { id: 13, q: "Difference between <b> and <strong> tags?", a: "<b> is purely for visual bolding. <strong> is semantic and indicates that the text has strong importance." },
    { id: 14, q: "How do you handle form submission?", a: "Using <form> with 'action' (URL) and 'method' (GET/POST) plus a submit button." },
    { id: 15, q: "GET vs POST methods?", a: "GET appends data to URL (visible, limited size). POST sends data in request body (secure, no size limit)." },
    { id: 16, q: "What is the role of the iframe tag?", a: "Used to embed another HTML document (like a map or video) within the current page." },
    { id: 17, q: "Difference between <span> and <div>?", a: "<span>: Inline container (no line break). <div>: Block-level container (starts on new line)." },
    { id: 18, q: "What are HTML5 form input types?", a: "Email, url, tel, number, range, date, time, color, and more." },
    { id: 19, q: "What is the <template> tag?", a: "Holds HTML that isn't rendered on load but can be instantiated later via JavaScript." },
    { id: 20, q: "What are meta viewport settings?", a: "Controls layout on mobile browsers, crucial for responsive design: <meta name='viewport' content='width=device-width, initial-scale=1.0'>." },
    { id: 21, q: "HTML vs XHTML?", a: "HTML is lenient; XHTML is a stricter XML-based version requiring closed tags and lowercase." },
    { id: 22, q: "What is the role attribute?", a: "Defines the purpose of an element for accessibility (ARIA) and assistive technologies." },
    { id: 23, q: "table-layout: fixed vs auto?", a: "fixed: Column width depends on first row. auto: Column width based on content." },
    { id: 24, q: "Difference between <section> and <div>?", a: "<section> is semantic (related content with heading). <div> is a non-semantic generic container." },
    { id: 25, q: "How to create responsive design?", a: "Using meta viewport, flexible grids (Flexbox/Grid), and CSS media queries." },
    { id: 26, q: "What is the hidden attribute?", a: "Hides an element from view without removing it from the DOM structure." },
    { id: 27, q: "Purpose of the <noscript> tag?", a: "Displays alternative content if JavaScript is disabled or unsupported." },
    { id: 28, q: "How to include external JavaScript?", a: "Using <script src='script.js'></script>, usually before the closing </body> tag." },
    { id: 29, q: "Difference between <link> and <a>?", a: "<link> connects resources (CSS) in head. <a> creates clickable hyperlinks for navigation." },
    { id: 30, q: "How to handle character encoding?", a: "Using <meta charset='UTF-8'> in the <head> section." },
    { id: 31, q: "header, footer, article, and aside?", a: "Semantic landmarks for Intro, Footer, Independent content, and Sidebar content respectively." },
    { id: 32, q: "What is the sandbox attribute in iframe?", a: "Restricts actions (like scripts) inside an iframe for improved security." },
    { id: 33, q: "What is the target attribute in <a>?", a: "_self (same tab), _blank (new tab), _parent, and _top." },
    { id: 34, q: "What is the srcset attribute?", a: "Provides multiple image sources for different screen resolutions/sizes." },
    { id: 35, q: "Client-side storage in HTML5?", a: "Local Storage, Session Storage, and Cookies." },
    { id: 36, q: "What is contenteditable?", a: "Attribute that allows the user to edit the content of an element." },
    { id: 37, q: "Tag vs Element?", a: "Tag: Markup syntax (<p>). Element: The whole object (<p>Hello</p>)." },
    { id: 38, q: "Inline vs Block-Level?", a: "Inline: Takes only needed width (<span>). Block: Takes full width (<div>)." },
    { id: 40, q: "What is Void Elements?", a: "Elements with no closing tags or content, like <img> and <br>." }
  ];

  const filtered = qaData.filter(item => 
    item.q.toLowerCase().includes(search.toLowerCase()) || 
    item.a.toLowerCase().includes(search.toLowerCase())
  );

  return (
    // font-sans with tracking-tight for a modern look
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-16 bg-slate-50 min-h-screen font-sans tracking-tight">
      
      {/* Header Section */}
      <header className="mb-12 md:mb-20 text-center">
        <h1 className="text-4xl md:text-7xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tighter">
          HTML <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">INTERVIEW</span> VAULT
        </h1>
        <p className="text-slate-500 text-base md:text-xl font-medium max-w-2xl mx-auto mb-10">
          Ace your frontend interviews with our 39-point master guide.
        </p>
        
        {/* Search Bar with updated styling */}
        <div className="relative max-w-2xl mx-auto px-2">
          <input 
            type="text" 
            placeholder="Search by keyword (e.g. meta, semantic, storage)..." 
            className="w-full p-5 pl-14 rounded-2xl border-2 border-white shadow-xl focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 outline-none transition-all duration-300 text-slate-700 font-medium"
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="absolute left-7 top-1/2 -translate-y-1/2 text-slate-400 text-xl">🔍</span>
        </div>
      </header>

      {/* Grid Layout: Optimized for mobile (1 col), tablet (2 col), desktop (3 col) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filtered.map((item) => (
          <div 
            key={item.id} 
            className="group bg-white p-7 md:p-9 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-indigo-500 bg-indigo-50 px-3 py-1 rounded-full">
                  Question {item.id}
                </span>
                <div className="h-1.5 w-10 bg-slate-100 rounded-full group-hover:bg-indigo-200 transition-colors"></div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-4 leading-tight group-hover:text-indigo-600 transition-colors">
                {item.q}
              </h3>
            </div>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed border-l-4 border-indigo-50 pl-5 font-medium italic">
              {item.a}
            </p>
          </div>
        ))}
      </div>

      

      {/* Footer Branding */}
      <footer className="mt-24 p-12 md:p-20 bg-slate-900 rounded-[3rem] text-center text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-500 via-blue-500 to-emerald-500"></div>
        <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter italic">Ready to Ace the Interview?</h2>
        <p className="text-slate-400 text-sm md:text-lg max-w-xl mx-auto font-medium opacity-80">
          You have mastered the foundations of web structure. Next step: Mastering the visual art with CSS.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <span className="px-4 py-2 bg-slate-800 rounded-full text-xs font-bold text-indigo-400">#HTML5</span>
          <span className="px-4 py-2 bg-slate-800 rounded-full text-xs font-bold text-indigo-400">#SEO</span>
          <span className="px-4 py-2 bg-slate-800 rounded-full text-xs font-bold text-indigo-400">#Accessibility</span>
        </div>
      </footer>
    </div>
  );
}

export default HtmlFAQ;