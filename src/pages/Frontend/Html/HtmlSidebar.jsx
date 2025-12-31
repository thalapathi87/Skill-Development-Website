import React from "react";
// react-icons/fa la irunthu ella icons-um crct-ah import aayirukku
import { 
  FaInfoCircle, FaTerminal, FaCode, FaColumns, FaWpforms, 
  FaUniversalAccess, FaLightbulb, FaQuestionCircle, FaLayerGroup 
} from "react-icons/fa";

function HtmlSidebar({ active, setActive }) {
  const menu = [
    { id: "intro", label: "Intro", fullLabel: "Introduction", icon: <FaInfoCircle /> },
    { id: "basics", label: "Basics", fullLabel: "HTML Basics", icon: <FaTerminal /> },
    { id: "tags", label: "Tags", fullLabel: "Tags & Attributes", icon: <FaCode /> },
    { id: "forms", label: "Forms", fullLabel: "Forms & Validation", icon: <FaWpforms /> },
    { id: "semantic", label: "Semantic", fullLabel: "Semantic HTML", icon: <FaLayerGroup /> },
    { id: "html5", label: "HTML5", fullLabel: "HTML5 Features", icon: <FaLightbulb /> },
    { id: "accessibility", label: "Access", fullLabel: "Accessibility", icon: <FaUniversalAccess /> },
    { id: "faq", label: "FAQ", fullLabel: "Interview FAQ", icon: <FaQuestionCircle /> }
  ];

  return (
    <>
      {/* --- MOBILE NAVIGATION --- */}
      {/* fixed bottom kuduthuruppathal, main layout-la padding-bottom mukiyam */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 z-[100] px-2 py-3 shadow-[0_-5px_15px_rgba(0,0,0,0.05)]">
        <div className="flex overflow-x-auto gap-2 no-scrollbar scroll-smooth snap-x items-center">
          {menu.map((m) => {
            const isActive = active === m.id;
            return (
              <button
                key={m.id}
                onClick={() => setActive(m.id)}
                className={`flex flex-col items-center gap-1 min-w-[75px] py-2 rounded-xl transition-all duration-300 snap-center
                  ${isActive ? "bg-sky-500 text-white shadow-lg shadow-sky-200 scale-105" : "text-slate-500 active:bg-slate-100"}`}
              >
                <span className="text-xl">{m.icon}</span>
                <span className="text-[10px] font-black uppercase tracking-tighter">{m.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* --- DESKTOP SIDEBAR --- */}
      <aside className="hidden md:block w-80 h-screen sticky top-0 bg-slate-50 border-r border-slate-200 overflow-y-auto custom-scrollbar">
        <div className="p-8">
          <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-8">
            Technical Modules
          </h2>
          
          <nav className="space-y-2">
            {menu.map((m) => {
              const isActive = active === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => setActive(m.id)}
                  className={`w-full flex items-center gap-4 px-5 py-3.5 rounded-2xl text-sm font-bold transition-all duration-300 group relative
                    ${
                      isActive
                        ? "bg-white text-sky-600 shadow-md border border-slate-100 scale-[1.02]"
                        : "text-slate-500 hover:bg-slate-200/50 hover:text-slate-900"
                    }`}
                >
                  {isActive && (
                    <div className="absolute left-0 w-1.5 h-6 bg-sky-500 rounded-r-full shadow-[2px_0_8px_rgba(14,165,233,0.4)]" />
                  )}
                  <span className={`text-xl transition-colors ${isActive ? "text-sky-500" : "text-slate-400 group-hover:text-sky-500"}`}>
                    {m.icon}
                  </span>
                  {m.fullLabel}
                </button>
              );
            })}
          </nav>

          {/* Tips Card */}
          <div className="mt-12 p-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2rem] text-white shadow-xl relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
            <p className="text-[10px] font-black text-sky-400 uppercase tracking-widest mb-3">Architect's Note</p>
            <p className="text-xs font-medium leading-relaxed opacity-90">
              Clean DOM structure reduces browser <strong>reflow</strong> and improves mobile rendering speed.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}

export default HtmlSidebar;