import React from 'react';
import { BookOpen, CheckCircle2, ShieldCheck, Search, HelpCircle, Code } from 'lucide-react';

function Semantic() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 md:py-16 bg-white text-slate-900 animate-in fade-in slide-in-from-bottom-8 duration-700">
      
      {/* Header Area */}
      <header className="mb-12 text-center border-b border-slate-100 pb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold mb-6 tracking-wide">
          <ShieldCheck className="w-4 h-4" />
          SEO & ACCESSIBILITY FRIENDLY
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
          Semantic <span className="text-emerald-600">HTML5</span> Mastery
        </h1>
        <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
          Semantic tags tell the browser and Google exactly what your content is. 
          It makes your website easier to find (SEO) and easier to use for everyone.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Left: The Semantic Elements Guide */}
        <div className="lg:col-span-2 space-y-10">
          <section>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-8 bg-emerald-600 text-white rounded-lg flex items-center justify-center text-sm shadow-lg shadow-emerald-200">1</span>
              Essential Structure Tags
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { tag: "<main>", desc: "Used for the primary content of your page. Use it only once per page.", color: "border-blue-200 bg-blue-50/30" },
                { tag: "<section>", desc: "Used to group related content together. Usually needs a heading inside.", color: "border-purple-200 bg-purple-50/30" },
                { tag: "<article>", desc: "Used for self-contained content like blog posts, news, or comments.", color: "border-orange-200 bg-orange-50/30" },
                { tag: "<aside>", desc: "Used for extra info like sidebars, ads, or related links.", color: "border-pink-200 bg-pink-50/30" }
              ].map((item, i) => (
                <div key={i} className={`p-6 rounded-3xl border-2 transition-all hover:scale-[1.02] ${item.color}`}>
                  <code className="text-slate-900 font-bold text-lg">{item.tag}</code>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Advanced Interactivity */}
          <section className="bg-slate-50 p-6 md:p-10 rounded-[2.5rem] border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Code className="w-5 h-5 text-emerald-600" />
              Smart Built-in Elements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <p className="text-sm font-bold mb-3 text-slate-700">Images with Labels:</p>
                <div className="bg-slate-900 rounded-xl p-4 font-mono text-[11px] text-emerald-400 overflow-x-auto">
                  {`<figure>\n  <img src="pic.jpg" />\n  <figcaption>The Caption</figcaption>\n</figure>`}
                </div>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <p className="text-sm font-bold mb-3 text-slate-700">Accordion (No JS needed):</p>
                <div className="bg-slate-900 rounded-xl p-4 font-mono text-[11px] text-emerald-400 overflow-x-auto">
                  {`<details>\n  <summary>Click Me</summary>\n  <p>Hidden Text Here</p>\n</details>`}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right: Benefits & Rules */}
        <aside className="space-y-6">
          <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-6 text-emerald-400 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" /> Why use it?
              </h3>
              <ul className="space-y-5">
                {[
                  { title: "Better SEO", desc: "Search engines understand your page structure easily.", icon: <Search className="w-4 h-4" /> },
                  { title: "Accessibility", desc: "Helps blind users use your site with screen readers.", icon: <HelpCircle className="w-4 h-4" /> },
                  { title: "Clean Code", desc: "Your code is much easier to read and maintain.", icon: <BookOpen className="w-4 h-4" /> }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="mt-1 text-emerald-400 shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-sm text-white mb-0.5">{item.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute top-0 right-0 p-8 text-7xl opacity-5 font-black">HTML</div>
          </div>

          <div className="p-8 bg-amber-50 rounded-[2.5rem] border border-amber-200">
            <h4 className="font-bold text-amber-900 mb-3 flex items-center gap-2 text-sm uppercase">
              <Zap className="w-4 h-4 fill-amber-500 text-amber-500" /> The Master Rule
            </h4>
            <p className="text-sm text-amber-800 leading-relaxed">
              Use <code>&lt;div&gt;</code> only for <strong>design and styling</strong>. For actual <strong>content structure</strong>, always use Semantic tags.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

const Zap = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);

export default Semantic;