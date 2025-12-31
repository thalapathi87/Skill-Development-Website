import React, { useState, useEffect, Suspense, lazy } from "react";
import JavaSidebar from "./JavaSidebar";

// --- MASTER LEVEL: LAZY LOADING ---
const JavaIntro = lazy(() => import("./JavaIntro"));
const JavaMainContent = lazy(() => import("./JavaTutorial")); 
const JavaBasics = lazy(() => import("./JavaBasics"));
const OOPS = lazy(() => import("./OOPS"));
const StringTopic = lazy(() => import("./String"));
const Arrays = lazy(() => import("./Arrays"));
const Collections = lazy(() => import("./Collections"));
const ExceptionHandling = lazy(() => import("./ExceptionHandling"));
const Multithreading = lazy(() => import("./Multithreading"));
const FileHandling = lazy(() => import("./FileHandling"));
const GarbageCollection = lazy(() => import("./GarbageCollection"));
const JDBC = lazy(() => import("./JDBC"));
const ProblemSolving = lazy(() => import("./problemSolving"));
const InterviewFAQ = lazy(() => import("./InterviewFAQ"));

const TOPICS = [
  "intro", "tutorial", "basics", "oops", "strings", 
  "arrays", "collections", "exceptions", "multithreading", 
  "files", "garbage", "JDBC", "problem-solving", "faq"
];

function JavaTutorial() {
  const [active, setActive] = useState("intro");

  // Topic change aagumbodu automatic-ah top-ku poga indha logic
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [active]);

  const componentMap = {
    intro: <JavaIntro />,
    tutorial: <JavaMainContent />,
    basics: <JavaBasics />,
    oops: <OOPS />,
    strings: <StringTopic />,
    arrays: <Arrays />,
    collections: <Collections />,
    exceptions: <ExceptionHandling />,
    multithreading: <Multithreading />,
    files: <FileHandling />,
    garbage: <GarbageCollection />,
    JDBC: <JDBC />,
    "problem-solving": <ProblemSolving />,
    faq: <InterviewFAQ />,
  };

  const currentIndex = TOPICS.indexOf(active);

  return (
    <div className="flex min-h-screen w-full bg-white overflow-hidden font-sans selection:bg-orange-100 selection:text-orange-900">
      
      {/* 1. SIDEBAR: Navbar gap illama sticky-ah irukkum */}
      <JavaSidebar active={active} setActive={setActive} />

      {/* 2. MAIN CONTENT AREA */}
      <main className="flex-1 overflow-y-auto overflow-x-hidden relative">
        <div className="max-w-5xl mx-auto p-6 md:p-16 pb-32">
          
          {/* Component Injection with JS-Style Animation */}
          <Suspense fallback={
            <div className="flex flex-col items-center justify-center h-[60vh] text-slate-400">
              <div className="w-10 h-10 border-4 border-orange-100 border-t-orange-500 rounded-full animate-spin mb-4" />
              <p className="text-sm font-bold animate-pulse">Loading Java Module...</p>
            </div>
          }>
            <div key={active} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              {componentMap[active] || <JavaIntro />}
            </div>
          </Suspense>

          {/* 3. NAVIGATION BUTTONS: Bottom-la clean-ah irukkum */}
          {/* <footer className="mt-24 pt-10 border-t border-slate-100 flex justify-between items-center"> */}
            {/* <button 
              disabled={currentIndex === 0}
              onClick={() => setActive(TOPICS[currentIndex - 1])}
              className={`flex items-center gap-2 text-xs font-bold tracking-widest transition-all
                ${currentIndex === 0 ? "opacity-0 invisible" : "text-slate-400 hover:text-orange-600"}`}
            >
              <span className="text-lg">←</span> PREVIOUS
            </button> */}
            
            {/* <button 
              disabled={currentIndex === TOPICS.length - 1}
              onClick={() => setActive(TOPICS[currentIndex + 1])}
              className="group flex items-center gap-3 px-10 py-4 bg-slate-900 text-white text-xs font-bold rounded-2xl hover:bg-orange-600 transition-all shadow-xl active:scale-95"
            >
              NEXT LESSON <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
            </button> */}
          {/* </footer> */}
        </div>
      </main>

      {/* 4. TOP PROGRESS LINE: JS Tutorial-la irunda madhiriye thin line */}
      <div 
        // className="fixed top-0 left-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600 z-[200] transition-all duration-500" 
        // // style={{ width: `${((currentIndex + 1) / TOPICS.length) * 100}%` }} 
      />
    </div>
  );
}

export default JavaTutorial;