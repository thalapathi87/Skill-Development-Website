import React from "react";
import { 
  IoLayersOutline, IoBrushOutline, IoSquareOutline, 
  IoAppsOutline, IoGridOutline, IoFlashOutline, 
  IoResizeOutline, IoInformationCircleOutline ,IoHelpCircleOutline 
} from "react-icons/io5";

function CssSidebar({ active, setActive }) {
  const menu = [
    { id: "Introduction", label: "Intro", fullLabel: "Introduction", icon: <IoInformationCircleOutline /> },
    { id: "Selectors", label: "Selectors", fullLabel: "Selectors & Specificity", icon: <IoBrushOutline /> },
    { id: "Box Model", label: "Box Model", fullLabel: "Box Model & Borders", icon: <IoSquareOutline /> },
    { id: "Flexbox", label: "Flexbox", fullLabel: "Flexbox Layout", icon: <IoAppsOutline /> },
    { id: "Grid", label: "Grid", fullLabel: "CSS Grid Layout", icon: <IoGridOutline /> },
    { id: "Animation", label: "Animation", fullLabel: "Keyframes & Motion", icon: <IoFlashOutline /> },
    { id: "Responsive", label: "Responsive", fullLabel: "Media Queries & RWD", icon: <IoResizeOutline /> },
    { id: "faq", label: "FAQ", fullLabel: "Interview FAQ", icon: <IoHelpCircleOutline /> }
  ];

  return (
    <>
      {/* --- MOBILE NAVIGATION --- */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 z-[100] px-2 py-3 shadow-[0_-5px_15px_rgba(0,0,0,0.05)]">
        <div className="flex overflow-x-auto gap-2 no-scrollbar scroll-smooth snap-x items-center">
          {menu.map((m) => {
            const isActive = active === m.id;
            return (
              <button
                key={m.id}
                onClick={() => setActive(m.id)}
                className={`flex flex-col items-center gap-1 min-w-[85px] py-2 rounded-xl transition-all duration-300 snap-center
                  ${isActive ? "bg-indigo-500 text-white shadow-lg shadow-indigo-200 scale-105" : "text-slate-500 active:bg-slate-100"}`}
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
            Style Architecture
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
                        ? "bg-white text-indigo-600 shadow-md border border-slate-100 scale-[1.02]"
                        : "text-slate-500 hover:bg-indigo-50/50 hover:text-indigo-600"
                    }`}
                >
                  {isActive && (
                    <div className="absolute left-0 w-1.5 h-6 bg-indigo-500 rounded-r-full shadow-[2px_0_8px_rgba(99,102,241,0.4)]" />
                  )}
                  <span className={`text-xl transition-colors ${isActive ? "text-indigo-500" : "text-slate-400 group-hover:text-indigo-500"}`}>
                    {m.icon}
                  </span>
                  {m.fullLabel}
                </button>
              );
            })}
          </nav>

          {/* CSS Tip Card */}
          <div className="mt-12 p-6 bg-gradient-to-br from-indigo-950 to-slate-900 rounded-[2rem] text-white shadow-xl relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-indigo-500/20 rounded-full blur-xl"></div>
            <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-3">Styling Tip</p>
            <p className="text-xs font-medium leading-relaxed opacity-90">
              Use <strong>CSS Grid</strong> for main layouts and <strong>Flexbox</strong> for alignment inside components for maximum control.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}

export default CssSidebar;