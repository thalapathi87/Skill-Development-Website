import { useState } from "react";
import JsSidebar from "./JsSidebar";

// Importing all Master Level Components
import JsIntro from "./JsIntro";
import Variables from "./Variables";
import DataTypes from "./DataTypes";
import Operators from "./Operators";
import Functions from "./Functions";
import Loops from "./Loops";
import Dom from "./Dom";
import Events from "./Events";
import JsFAQ from "./JsFAQ";

function JsTutorial() {
  // Initial state should match the 'id' in JsSidebar menu
  const [active, setActive] = useState("intro");

  // Dynamic Component Mapping
  const componentMap = {
    intro: <JsIntro />,
    basics: <Variables />,
    datatypes: <DataTypes />, // Make sure this ID matches JsSidebar
    operators: <Operators />,
    functions: <Functions />,
    loops: <Loops />,
    dom: <Dom />,
    events: <Events />,
    faq: <JsFAQ />
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-50 font-sans selection:bg-amber-100 selection:text-amber-900">
      
      {/* LEFT SIDEBAR (Sticky on Desktop, Bottom Nav on Mobile) */}
      <JsSidebar active={active} setActive={setActive} />
      
      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-4 md:p-12 pb-32 md:pb-12 overflow-y-auto overflow-x-hidden">
        <div className="max-w-5xl mx-auto">
          
          {/* Component Injection Point with Smooth Transition Logic */}
          <div key={active} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            {componentMap[active] || (
              <div className="flex flex-col items-center justify-center h-[60vh] text-slate-400">
                <div className="w-12 h-12 border-4 border-amber-200 border-t-amber-500 rounded-full animate-spin mb-4" />
                <p className="font-bold italic">Assembling Module...</p>
              </div>
            )}
          </div>

        </div>
      </main>

      {/* Optional: Simple Progress Indicator (Visual touch) */}
      <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-amber-400 to-orange-500 z-[200] transition-all duration-500" 
          //  style={{ width: `${((Object.keys(componentMap).indexOf(active) + 1) / Object.keys(componentMap).length) * 100}%` }} 
      />
    </div>
  );
}

export default JsTutorial;