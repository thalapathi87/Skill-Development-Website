import React, { useState } from "react";
import SpringBootSidebar from "./SpringBootSidebar";
import Intro from "./Intro";
import Annotations from "./Annotations";
import Controllers from "./Controllers";
import RequestResponse from "./RequestResponse";
import Validation from "./Validation";
import JPAHibernate from "./JPAHibernate";
import Relationships from "./Relationships";
import InterviewQuestions from "./InterviewQuestions";
import ExceptionHandling from "./ExceptionHandling";
import Security from "./Security";
import JWT from "./JWT";
import Deployment from "./Deployment";
import Graduation from "./Graduation";

export default function SpringBootTutorial() {
  const [activeTopic, setActiveTopic] = useState("intro");

  // Content switching logic
  const renderContent = () => {
    switch (activeTopic) {
      case "intro": return <Intro />;
      case "annotations": return <Annotations />;
      case "controllers": return <Controllers />;
      case "req-res": return <RequestResponse />;
      case "validation": return <Validation />;
      case "jpa": return <JPAHibernate />;
      case "relationships": return <Relationships />;
      case "interview": return <InterviewQuestions />;
      case "exception": return <ExceptionHandling />;
      case "security": return <Security />;
      case "jwt": return <JWT />;
      case "deployment": return <Deployment />;
      case "graduation": return <Graduation />;
      default: return <Intro />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      {/* SIDEBAR: Fixed on Desktop, Scrollable on Mobile */}
      <aside className="w-full md:w-64 lg:w-72 md:fixed md:h-screen overflow-y-auto border-r border-slate-100 bg-slate-50/50 z-30">
        <SpringBootSidebar activeTopic={activeTopic} setActiveTopic={setActiveTopic} />
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 md:ml-64 lg:ml-72 transition-all duration-500">
        <div className="max-w-5xl mx-auto px-4 py-8 md:px-10 md:py-16">
          {/* Active Component renders here */}
          <div className="min-h-[80vh]">
            {renderContent()}
          </div>

          {/* Bottom Navigation for Master UX */}
          
        </div>
      </main>
    </div>
  );
}