import React from 'react';
import { Accessibility as AccessIcon, Keyboard, Volume2, CheckCircle2, AlertCircle, Info } from 'lucide-react';

function Accessibility() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 md:p-12 bg-slate-50 min-h-screen font-sans animate-in fade-in slide-in-from-bottom-8 duration-700">
      
      {/* Header Section */}
      <header className="mb-10 md:mb-12 bg-white p-6 md:p-10 rounded-3xl shadow-sm border-b-8 border-orange-500">
        <div className="flex items-center gap-2 text-orange-600 font-bold uppercase tracking-widest text-xs mb-4">
          <AccessIcon className="w-4 h-4" />
          <span>Universal Design</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
          Inclusive Web: <span className="text-orange-600">Accessibility</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-4xl font-medium">
          Accessibility (A11y) is about making sure everyone can use your website. This includes people who use screen readers, keyboard-only navigation, or have limited vision.
        </p>
      </header>

      {/* Grid: ARIA & Keyboard */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        
        {/* 1. ARIA Attributes */}
        <section className="bg-white p-6 md:p-8 rounded-3xl shadow-md border border-slate-200">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-3 text-slate-800">
            <Volume2 className="text-orange-500 w-6 h-6" /> ARIA: Adding Context
          </h2>
          <p className="text-slate-600 mb-8 text-sm leading-relaxed">
            Sometimes HTML tags don't explain enough. ARIA attributes act like "extra subtitles" for screen readers to explain what is happening on the screen.
          </p>
          
          <div className="space-y-4">
            {[
              { attr: "aria-label", desc: "Explains a button or link that has no text (like an icon button)." },
              { attr: "aria-hidden='true'", desc: "Tells screen readers to ignore decorative icons or images." },
              { attr: "aria-live='polite'", desc: "Automatically announces new updates, like a success message." }
            ].map((item, i) => (
              <div key={i} className="p-4 bg-orange-50/50 rounded-2xl border-l-4 border-orange-400">
                <code className="font-bold text-orange-800 text-sm">{item.attr}</code>
                <p className="text-xs mt-1 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 2. Keyboard Navigation */}
        <section className="bg-slate-900 p-6 md:p-8 rounded-3xl shadow-xl text-white">
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-orange-400 flex items-center gap-3">
            <Keyboard className="text-orange-400 w-6 h-6" /> Keyboard Control
          </h2>
          <p className="text-slate-400 mb-8 text-sm leading-relaxed">
            Many users navigate the web using only the <strong>Tab</strong> key. Your website must be fully clickable without ever using a mouse.
          </p>
          
          <div className="font-mono text-[11px] md:text-xs space-y-4">
            <div className="p-5 bg-slate-800 rounded-2xl border border-white/5 overflow-x-auto">
              <div className="text-orange-300/60 mb-3 italic font-sans">// Make non-clickable items focusable</div>
              <code className="text-blue-300">{`<div tabindex="0">Press Tab to reach me</div>`}</code>
            </div>
            <div className="p-5 bg-slate-800 rounded-2xl border border-white/5 overflow-x-auto">
              <div className="text-orange-300/60 mb-3 italic font-sans">// Let users skip long menus</div>
              <code className="text-blue-300">{`<a href="#main" class="skip-link">Skip to Content</a>`}</code>
            </div>
          </div>
          <div className="mt-8 p-4 bg-orange-500/10 rounded-2xl border border-orange-500/20 flex gap-3">
            <Info className="w-5 h-5 text-orange-400 shrink-0" />
            <p className="text-xs text-orange-100 italic leading-relaxed">
              <strong>Master Tip:</strong> Never remove the blue "focus outline" around buttons. It is the only way keyboard users know where they are on the page.
            </p>
          </div>
        </section>
      </div>

      {/* 3. A11y Checklist Table */}
      <section className="bg-white p-6 md:p-10 rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden">
        <h2 className="text-2xl font-bold mb-8 text-slate-800 text-center md:text-left">The Master Checklist</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[550px] border-separate border-spacing-y-2">
            <thead>
              <tr className="text-slate-400 text-[10px] md:text-xs uppercase tracking-widest">
                <th className="px-4 pb-4">Standard</th>
                <th className="px-4 pb-4">The Rule</th>
                <th className="px-4 pb-4">Goal</th>
              </tr>
            </thead>
            <tbody className="text-xs md:text-sm">
              {[
                { feature: "Contrast Ratio", rule: "4.5:1 Minimum", goal: "Makes text easy to read against the background." },
                { feature: "Alt Text", rule: "alt='Describe image'", goal: "Helps blind users 'see' the image with audio." },
                { feature: "Form Labels", rule: "<label for='id'>", goal: "Makes it easy to click and understand inputs." }
              ].map((row, i) => (
                <tr key={i} className="bg-slate-50/50 rounded-xl">
                  <td className="p-4 font-bold text-slate-700 rounded-l-xl">{row.feature}</td>
                  <td className="p-4 font-mono text-indigo-600 font-bold">{row.rule}</td>
                  <td className="p-4 text-slate-500 italic rounded-r-xl">{row.goal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Comparison Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-rose-50 p-8 rounded-[2rem] border border-rose-100">
          <h4 className="text-rose-700 font-bold mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5" /> Inaccessible Code
          </h4>
          <div className="bg-white p-4 rounded-xl shadow-inner border border-rose-100 overflow-x-auto mb-4">
             <code className="text-[11px] text-rose-500 font-mono">{`<span onclick="do()">Login</span>`}</code>
          </div>
          <p className="text-xs text-rose-600 leading-relaxed">
            Screen readers won't recognize this as a button, and you cannot click it using the keyboard.
          </p>
        </div>

        <div className="bg-emerald-50 p-8 rounded-[2rem] border border-emerald-100">
          <h4 className="text-emerald-700 font-bold mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" /> Professional A11y
          </h4>
          <div className="bg-white p-4 rounded-xl shadow-inner border border-emerald-100 overflow-x-auto mb-4">
             <code className="text-[11px] text-emerald-600 font-mono">{`<button type="button">Login</button>`}</code>
          </div>
          <p className="text-xs text-emerald-600 leading-relaxed">
            By using a real button tag, the browser automatically makes it clickable for keyboard and voice users.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Accessibility;