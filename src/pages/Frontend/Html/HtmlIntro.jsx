import React from "react";
import { BookOpen, Code, Globe, Layout, CheckCircle2 } from "lucide-react";

function HtmlIntro() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 animate-in fade-in slide-in-from-bottom-8 duration-700 pb-20">
      
      {/* --- HEADER --- */}
      <header className="mb-12">
        <div className="flex items-center gap-2 text-orange-600 font-bold uppercase tracking-wider text-xs mb-3">
          <Globe className="w-4 h-4" />
          <span>Step 01: Web Foundations</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
          What is <span className="text-orange-500">HTML?</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
          HTML (HyperText Markup Language) is the "skeleton" of every website. It provides the basic structure that allows browsers to show text, images, and links.
        </p>
      </header>

      {/* --- WHAT HTML DOES --- */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
            <Layout className="text-orange-500 w-6 h-6" /> What does it do?
          </h2>
          <p className="text-slate-600 leading-relaxed">
            HTML acts as a set of instructions. It tells the browser where to put a heading, which text is a paragraph, and where to place an image.
          </p>
          <ul className="space-y-3">
            {[
              "Builds the structure of the page",
              "Organizes text, images, and forms",
              "Works as a base for CSS and JavaScript"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-700 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-orange-50 rounded-3xl p-8 border border-orange-100 flex flex-col justify-center">
          <div className="text-center">
            <div className="text-4xl font-black text-orange-600 mb-2">100%</div>
            <p className="text-orange-800 font-bold text-sm">Of all websites use HTML</p>
            <p className="text-orange-600/70 text-xs mt-2 italic">It is the most essential skill for any web developer.</p>
          </div>
        </div>
      </section>

      {/* --- BASIC STRUCTURE --- */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
          <Code className="text-orange-500 w-6 h-6" /> Basic Page Structure
        </h2>
        <p className="text-slate-600 mb-8 max-w-2xl">
          Every HTML file follows a specific pattern. Think of it like a letter with a header, a body, and a closing.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            {[
              { tag: "<html>", desc: "The container for the whole page." },
              { tag: "<head>", desc: "Hidden info like the page title and SEO." },
              { tag: "<body>", desc: "The visible part that users see." }
            ].map((item, i) => (
              <div key={i} className="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <code className="text-orange-600 font-bold text-sm">{item.tag}</code>
                <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-xl">
            <div className="px-6 py-3 bg-slate-800 border-b border-white/5 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-rose-500" />
              <div className="w-2 h-2 rounded-full bg-amber-500" />
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-[10px] font-mono text-slate-400 ml-2">index.html</span>
            </div>
            <div className="p-6 font-mono text-xs md:text-sm leading-relaxed text-emerald-400 overflow-x-auto">
              <pre>
{`<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>My first page!</p>
  </body>
</html>`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* --- SUMMARY TIP --- */}
      <div className="p-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-[2.5rem] text-white shadow-lg">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="shrink-0 bg-white/20 p-4 rounded-2xl backdrop-blur-md">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2">How to Remember</h4>
            <p className="text-orange-50 leading-relaxed text-sm opacity-90">
              Think of <strong>HTML</strong> as the <strong>walls</strong> of a house. <strong>CSS</strong> is the <strong>paint</strong> and furniture, and <strong>JavaScript</strong> is the <strong>electricity</strong> that makes things like lights and fans work. You need the walls first!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HtmlIntro;