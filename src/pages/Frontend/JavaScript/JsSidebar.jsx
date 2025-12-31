import React from "react";
import { 
  Code2, 
  Variable, 
  Binary, 
  Calculator, 
  Cpu, 
  Repeat, 
  MousePointerClick, 
  Zap,
  ShieldQuestion 
} from "lucide-react";

function JsSidebar({ active, setActive }) {
  // Unga folder-la irukira components-ku mattiye menu setup
  const menu = [
    { id: "intro", label: "Intro", fullLabel: "JS Introduction", icon: <Code2 className="w-5 h-5" /> },
    { id: "basics", label: "Variables", fullLabel: "Variables (var,let,const)", icon: <Variable className="w-5 h-5" /> },
    { id: "datatypes", label: "Types", fullLabel: "Data Types", icon: <Binary className="w-5 h-5" /> },
    { id: "operators", label: "Operators", fullLabel: "Operators", icon: <Calculator className="w-5 h-5" /> },
    { id: "functions", label: "Functions", fullLabel: "Functions", icon: <Cpu className="w-5 h-5" /> },
    { id: "loops", label: "Loops", fullLabel: "Loops & Iteration", icon: <Repeat className="w-5 h-5" /> },
    { id: "dom", label: "DOM", fullLabel: "DOM Manipulation", icon: <MousePointerClick className="w-5 h-5" /> },
    { id: "events", label: "Events", fullLabel: "Event Handling", icon: <Zap className="w-5 h-5" /> },
    { id: "faq", label: "FAQ", fullLabel: "Interview Q&A", icon: <ShieldQuestion className="w-5 h-5" /> }
  ];

  return (
    <>
      {/* --- MOBILE NAVIGATION --- */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 z-[100] px-2 py-3 shadow-md">
        <div className="flex overflow-x-auto gap-2 no-scrollbar items-center">
          {menu.map((m) => {
            const isActive = active === m.id;
            return (
              <button
                key={m.id}
                onClick={() => setActive(m.id)}
                className={`flex flex-col items-center gap-1 min-w-[80px] py-2 rounded-xl transition-colors
                  ${isActive ? "bg-amber-500 text-white shadow-sm" : "text-slate-500 active:bg-slate-100"}`}
              >
                <span>{m.icon}</span>
                <span className="text-[10px] font-black uppercase tracking-tighter">{m.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* --- DESKTOP SIDEBAR --- */}
      <aside className="hidden md:block w-80 h-screen sticky top-0 bg-slate-50 border-r border-slate-200 overflow-y-auto">
        <div className="p-8">
          <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-8">
            Engine Core Modules
          </h2>
          
          <nav className="space-y-1.5">
            {menu.map((m) => {
              const isActive = active === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => setActive(m.id)}
                  className={`w-full flex items-center gap-4 px-5 py-3.5 rounded-2xl text-sm font-bold transition-all group
                    ${
                      isActive
                        ? "bg-white text-amber-600 shadow-sm border border-slate-100"
                        : "text-slate-500 hover:bg-amber-50 hover:text-amber-700"
                    }`}
                >
                  <span className={`transition-colors ${isActive ? "text-amber-500" : "text-slate-400 group-hover:text-amber-500"}`}>
                    {m.icon}
                  </span>
                  {m.fullLabel}
                </button>
              );
            })}
          </nav>

          {/* Tips Card (Clean Look) */}
          <div className="mt-12 p-6 bg-slate-900 rounded-[2rem] text-white relative overflow-hidden">
            <p className="text-[10px] font-black text-amber-400 uppercase tracking-widest mb-3">Logic Note</p>
            <p className="text-xs font-medium ">
              JavaScript is single-threaded. Proper memory management and scope control are key for high-performance apps.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}

export default JsSidebar;