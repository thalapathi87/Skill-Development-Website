import React from 'react';
import { ShieldCheck, Zap, UserPlus, Info, AlertCircle, CheckCircle2 } from 'lucide-react';

function Form() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 md:p-10 bg-slate-50 min-h-screen font-sans animate-in fade-in slide-in-from-bottom-8 duration-700">
      
      {/* Header Section */}
      <header className="mb-10 md:mb-16 text-center">
        <div className="flex justify-center items-center gap-2 text-indigo-600 font-bold uppercase tracking-widest text-xs mb-4">
          <ShieldCheck className="w-4 h-4" />
          <span>Lesson 09: Form Security</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
          Forms & <span className="text-indigo-600">Validation</span>
        </h1>
        <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto font-medium">
          How do we collect user data safely? Let's explore how to use HTML5 and JavaScript to check if the user entered the right information.
        </p>
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        
        {/* Section 1: HTML5 Built-in Validation */}
        <div className="bg-white p-6 md:p-8 rounded-[2.5rem] shadow-sm border border-slate-200">
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-slate-800 flex items-center gap-3">
            <CheckCircle2 className="text-indigo-500 w-6 h-6" /> Simple HTML Checks
          </h2>
          <p className="text-sm text-slate-500 mb-8 leading-relaxed">
            You don't always need JavaScript. HTML has built-in "rules" that you can add to your inputs to block wrong data.
          </p>

          <div className="space-y-4">
            {[
              { attr: "required", desc: "The user cannot leave this field empty." },
              { attr: "type='email'", desc: "The browser checks for an @ symbol and a domain." },
              { attr: "minlength='5'", desc: "Forces the user to type at least 5 characters." }
            ].map((item, i) => (
              <div key={i} className="p-4 bg-slate-50 rounded-2xl border-l-4 border-indigo-400">
                <code className="font-bold text-indigo-700 text-sm">{item.attr}</code>
                <p className="text-xs mt-1 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: JavaScript Validation */}
        <div className="bg-slate-900 p-6 md:p-8 rounded-[2.5rem] shadow-xl text-white">
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-emerald-400 flex items-center gap-3">
            <Zap className="text-emerald-400 w-6 h-6" /> Smart JS Validation
          </h2>
          <p className="text-sm text-slate-400 mb-8 leading-relaxed">
            For advanced checks (like checking if two passwords match), we use the <code>validity</code> object in JavaScript.
          </p>
          
          <div className="font-mono text-[11px] md:text-xs space-y-3">
            <div className="text-slate-500 italic mb-2">// Showing a custom error message</div>
            <pre className="bg-black/40 p-5 rounded-2xl border border-white/5 overflow-x-auto text-emerald-300">
{`input.addEventListener("input", () => {
  if (input.validity.tooShort) {
    input.setCustomValidity("Too short!");
  } else {
    input.setCustomValidity(""); // Clear error
  }
});`}
            </pre>
          </div>
          
          <div className="mt-8 flex flex-wrap gap-2">
            {['.valueMissing', '.typeMismatch', '.patternMismatch'].map((tag) => (
              <span key={tag} className="bg-white/10 px-3 py-1.5 rounded-full text-[10px] text-slate-300 font-mono">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Section 3: Interactive Example */}
      <section className="bg-white p-8 md:p-12 rounded-[3rem] border border-slate-200 shadow-sm mb-12">
        <h2 className="text-2xl font-bold mb-8 text-slate-800 flex items-center gap-3">
          <UserPlus className="text-indigo-600 w-6 h-6" /> Try the Live Form
        </h2>
        
        <form className="max-w-xl space-y-6" noValidate>
          <div>
            <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">Email Address</label>
            <input 
              type="email" 
              required 
              placeholder="name@email.com"
              className="w-full p-4 border-2 border-slate-100 rounded-2xl focus:border-indigo-500 focus:outline-none transition-all peer text-sm"
            />
            <p className="mt-2 text-xs text-rose-500 hidden peer-invalid:flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> Please enter a valid email address.
            </p>
          </div>

          <button 
            type="submit"
            className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-10 py-4 rounded-2xl transition-all shadow-lg shadow-indigo-200 active:scale-95 text-sm"
          >
            Create Account
          </button>
        </form>
      </section>

      {/* Footer Tips */}
      <footer className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-8 bg-amber-50 rounded-[2.5rem] border border-amber-100">
          <h4 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
            <Info className="w-4 h-4" /> Use 'novalidate'
          </h4>
          <p className="text-xs md:text-sm text-amber-800 leading-relaxed">
            If you want to create your own custom error pop-ups, add <code>novalidate</code> to your form tag. This stops the browser's default "bubbles" from showing up.
          </p>
        </div>
        <div className="p-8 bg-indigo-50 rounded-[2.5rem] border border-indigo-100">
          <h4 className="font-bold text-indigo-900 mb-3 flex items-center gap-2">
            <AccessibilityIcon className="w-4 h-4" /> Screen Readers
          </h4>
          <p className="text-xs md:text-sm text-indigo-800 leading-relaxed">
            When an error happens, use <code>aria-invalid="true"</code>. This tells users with screen readers that they need to fix a field before they can submit.
          </p>
        </div>
      </footer>
    </div>
  );
}

const AccessibilityIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="16" cy="4" r="1"/><path d="m18 19 1-7-6 1"/><path d="m5 8 3-3 5.5 3-2.36 3.5"/><path d="M4.24 14.5a5 5 0 0 0 6.88 6"/><path d="M13.76 17.5a5 5 0 0 0-6.88-6"/></svg>
);

export default Form;