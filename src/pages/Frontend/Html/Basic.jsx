import React from 'react';
import { Layout, Globe, UserCheck, Zap, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

function Basic() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 md:py-16 text-slate-800 animate-in fade-in slide-in-from-bottom-8 duration-700">
      
      {/* Header Section */}
      <header className="mb-12 border-b border-slate-100 pb-10">
        <div className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-xs mb-4">
          <Layout className="w-4 h-4" />
          <span>Professional Web Structure</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
          HTML5 Mastery: <span className="text-blue-600">The Architect's Guide</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl font-medium">
          Writing good HTML is not just about using tags. It is about making your website readable for computers, search engines, and people with disabilities.
        </p>
      </header>

      {/* Section 1: Semantic HTML */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3 text-slate-800">
          <div className="bg-blue-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">1</div>
          Using Meaningful Tags
        </h2>
        <p className="mb-8 text-slate-600 leading-relaxed max-w-2xl">
          Don't use <code>&lt;div&gt;</code> for everything. Use "Semantic" tags that describe the content inside them. This helps Google find your site easily.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-emerald-50/50 border border-emerald-100 rounded-3xl">
            <h4 className="font-bold text-emerald-800 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" /> Better (Semantic)
            </h4>
            <div className="space-y-3">
              {[
                { tag: "<main>", desc: "Main content of the page" },
                { tag: "<nav>", desc: "Navigation links" },
                { tag: "<article>", desc: "A blog post or news item" },
                { tag: "<aside>", desc: "Sidebars or extra info" }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between bg-white/50 p-2 rounded-lg border border-emerald-100/50">
                  <code className="text-xs font-bold text-emerald-700">{item.tag}</code>
                  <span className="text-[11px] text-slate-500 font-medium">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 bg-rose-50/50 border border-rose-100 rounded-3xl flex flex-col justify-center">
            <h4 className="font-bold text-rose-800 mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" /> Avoid This (Div-itis)
            </h4>
            <p className="text-xs text-rose-700/70 mb-4 leading-relaxed italic">
              Using generic containers makes it harder for search engines to understand your page structure.
            </p>
            <div className="space-y-2 font-mono text-xs text-rose-400 opacity-60">
              <div>&lt;div id="header"&gt; ... &lt;/div&gt;</div>
              <div>&lt;div class="navigation"&gt; ... &lt;/div&gt;</div>
              <div>&lt;div id="main-content"&gt; ... &lt;/div&gt;</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Head Metadata & SEO */}
      <section className="mb-16 bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-xl">
        <div className="p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white flex items-center gap-3">
            <Globe className="text-blue-400 w-6 h-6" /> Mastering the &lt;head&gt;
          </h2>
          <p className="mb-8 text-slate-400 leading-relaxed max-w-2xl text-sm md:text-base">
            The <code>&lt;head&gt;</code> section is like the brain of your page. It handles SEO (search results), social media previews, and mobile screen sizes.
          </p>
          
          <div className="bg-black/40 rounded-2xl p-6 font-mono text-xs md:text-sm text-blue-300 border border-white/5 overflow-x-auto">
            <pre className="leading-relaxed">
{`<title>Pro Guide to HTML | MyDevSite</title>

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<meta property="og:image" content="banner.jpg">`}
            </pre>
          </div>
        </div>
      </section>

      {/* Section 3: Accessibility */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-slate-800 flex items-center gap-3">
          <UserCheck className="text-amber-500 w-6 h-6" /> Friendly for Everyone
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-amber-50 border border-amber-100 rounded-3xl">
            <h4 className="font-bold mb-2 text-amber-900 flex items-center gap-2">
               Image Alt Text
            </h4>
            <p className="text-sm text-amber-800/80 leading-relaxed mb-4">
              Always describe your images using <code>alt="..."</code>. This helps blind users understand your images through screen readers.
            </p>
            <code className="text-[10px] bg-white p-2 block rounded-lg border border-amber-200">
              {`<img src="dog.jpg" alt="A golden retriever playing with a ball">`}
            </code>
          </div>
          <div className="p-6 bg-blue-50 border border-blue-100 rounded-3xl">
            <h4 className="font-bold mb-2 text-blue-900">Form Labels</h4>
            <p className="text-sm text-blue-800/80 leading-relaxed mb-4">
              Always connect inputs with <code>&lt;label&gt;</code> tags. This makes your forms easier to click and more accessible.
            </p>
            <code className="text-[10px] bg-white p-2 block rounded-lg border border-blue-200">
              {`<label for="email">Email</label>\n<input id="email" type="email">`}
            </code>
          </div>
        </div>
      </section>

      {/* Section 4: Performance */}
      <section className="mb-16">
        <div className="bg-indigo-900 text-white p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
              <Zap className="text-amber-400 w-6 h-6" /> Faster Loading
            </h2>
            <p className="mb-8 text-indigo-200 text-sm md:text-base max-w-xl">
              Clean HTML helps your website load faster. Follow these simple tips to optimize performance.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm md:text-base">
              {[
                "Use 'defer' to load scripts later",
                "Lazy load images: loading='lazy'",
                "Pre-load important fonts",
                "Keep your code simple and flat"
              ].map((tip, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/10 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
                   <ArrowRight className="w-4 h-4 text-amber-400" />
                   <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-0 right-0 p-10 text-9xl opacity-5 font-black">FAST</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-8 md:p-12 bg-slate-900 rounded-[2.5rem] text-center text-white border border-slate-800">
        <h2 className="text-3xl md:text-4xl font-black mb-4">Ready for the next level?</h2>
        <p className="text-slate-400 mb-10 max-w-lg mx-auto text-sm md:text-base">
          Now that you know how to build a strong skeleton, let's learn how to make it beautiful with CSS.
        </p>
        <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/20">
          Start CSS Module →
        </button>
      </footer>
    </div>
  );
}

export default Basic;