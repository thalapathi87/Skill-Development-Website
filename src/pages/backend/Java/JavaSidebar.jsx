import React from "react";
import { 
  IoInformationCircleOutline, IoCodeWorkingOutline, 
  IoCubeOutline, IoTextOutline, IoListOutline, IoLayersOutline, 
  IoWarningOutline, IoSyncOutline, IoDocumentOutline, IoTrashOutline, 
  IoServerOutline, IoBuildOutline, IoHelpCircleOutline 
} from "react-icons/io5";

const MENU_ITEMS = [
  { id: "intro", label: "Intro", fullLabel: "Java Introduction", icon: <IoInformationCircleOutline /> },
  { id: "basics", label: "Basics", fullLabel: "Java Basics", icon: <IoCodeWorkingOutline /> },
  { id: "oops", label: "OOPs", fullLabel: "OOPs Concepts", icon: <IoCubeOutline /> },
  { id: "strings", label: "String", fullLabel: "String Handling", icon: <IoTextOutline /> },
  { id: "arrays", label: "Arrays", fullLabel: "Arrays in Java", icon: <IoListOutline /> },
  { id: "collections", label: "Collections", fullLabel: "Collections Framework", icon: <IoLayersOutline /> },
  { id: "exceptions", label: "Exceptions", fullLabel: "Exception Handling", icon: <IoWarningOutline /> },
  { id: "multithreading", label: "Threads", fullLabel: "Multithreading", icon: <IoSyncOutline /> },
  { id: "files", label: "File IO", fullLabel: "File Handling", icon: <IoDocumentOutline /> },
  { id: "garbage", label: "GC", fullLabel: "Garbage Collection", icon: <IoTrashOutline /> },
  { id: "JDBC", label: "JDBC", fullLabel: "JDBC (Database)", icon: <IoServerOutline /> },
  { id: "problem-solving", label: "Coding", fullLabel: "Problem Solving", icon: <IoBuildOutline /> },
  { id: "faq", label: "FAQ", fullLabel: "Interview FAQ", icon: <IoHelpCircleOutline /> }
];

const JavaSidebar = ({ active, setActive }) => {
  return (
    <>
      {/* --- MOBILE NAV (Bottom) --- */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-xl border-t border-slate-100 z-[100] shadow-2xl">
        <div className="flex overflow-x-auto gap-3 px-4 py-3 no-scrollbar snap-x">
          {MENU_ITEMS.map((m) => {
            const isActive = active === m.id;
            return (
              <button
                key={m.id}
                onClick={() => setActive(m.id)}
                className={`flex flex-col items-center justify-center min-w-[60px] h-[60px] rounded-xl transition-all
                  ${isActive ? "text-orange-600 bg-orange-50" : "text-slate-400"}`}
              >
                <span className="text-xl">{m.icon}</span>
                <span className="text-[9px] font-bold mt-1 uppercase tracking-tighter">{m.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* --- DESKTOP SIDEBAR (Locked below Top Nav) --- */}
      <aside 
        className="hidden md:flex fixed left-0 w-72 bg-[#F8FAFC] border-r border-slate-200/60 flex-col z-40"
        style={{ 
          top: "64px", // <--- Replace this with your Top Nav height (e.g., 64px, 70px)
          height: "calc(100vh - 64px)" // <--- Subtract top nav height from full screen
        }}
      >
        {/* Sub-Header / Course Status */}
        <div className="px-8 py-8 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-black text-sm">J</span>
            </div>
            <h2 className="text-xs font-black text-slate-800 uppercase tracking-widest">Master Syllabus</h2>
          </div>
        </div>
        
        {/* Scrollable Topics Area */}
        <nav className="flex-1 overflow-y-auto px-6 space-y-1 custom-scrollbar pb-10">
          {MENU_ITEMS.map((m) => {
            const isActive = active === m.id;
            return (
              <button
                key={m.id}
                onClick={() => setActive(m.id)}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl text-[13px] font-semibold transition-all duration-200 group
                  ${isActive
                      ? "bg-white text-orange-600 shadow-sm ring-1 ring-slate-200/50"
                      : "text-slate-500 hover:bg-slate-200/40 hover:text-slate-900"
                  }`}
              >
                <span className={`text-xl ${isActive ? "text-orange-500" : "text-slate-400"}`}>
                  {m.icon}
                </span>
                <span className="flex-1 text-left tracking-tight">{m.fullLabel}</span>
              </button>
            );
          })}

          {/* Master Badge */}
          <div className="mt-10 p-5 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl text-white">
            <p className="text-[10px] font-black text-orange-400 uppercase tracking-[0.2em] mb-2">Current Goal</p>
            <h5 className="text-[12px] font-bold">JDBC & SQL Connectivity</h5>
            <div className="w-full bg-slate-700 h-1.5 rounded-full mt-3 overflow-hidden">
                <div className="bg-orange-500 h-full w-[85%]" />
            </div>
          </div>
        </nav>
      </aside>

      {/* SPACE FILLER: Place this in your Main Layout to push content right */}
      <div className="hidden md:block w-72 shrink-0" />
    </>
  );
};

export default JavaSidebar;