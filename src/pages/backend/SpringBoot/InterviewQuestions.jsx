import React from "react";
import { Search, MessageSquare, Award, Terminal, Code2, Coffee, HelpCircle } from "lucide-react";

const INTERVIEW_DATA = [
  {
    q: "What is the difference between @Component, @Service, and @Repository?",
    a: "Technically, they are all the same (@Component). However, they serve different semantic purposes. @Service is for business logic, and @Repository is for data access. @Repository also enables automatic 'Persistence Exception Translation' (converting SQL errors into Spring DataAccessException).",
    level: "Intermediate"
  },
  {
    q: "Explain the 'N+1 Query' problem in JPA.",
    a: "It occurs when you fetch a list of Parent entities, and Hibernate executes 1 query for the list and then N separate queries for each child's details. Solution: Use '@EntityGraph' or 'JOIN FETCH' to load everything in one single SQL query.",
    level: "Advanced"
  },
  {
    q: "How does @Transactional work under the hood?",
    a: "Spring uses AOP (Aspect Oriented Programming) and CGLIB proxies. When a method is marked @Transactional, Spring starts a database transaction before the method execution and commits (or rolls back) after the method finishes.",
    level: "Master"
  },
  {
    q: "Why is Field Injection (@Autowired on private fields) discouraged?",
    a: "It makes unit testing difficult because you cannot inject mocks without reflection. It also hides dependencies. Master developers use 'Constructor Injection' because it makes the dependencies explicit and final.",
    level: "Professional"
  }
];

export default function InterviewQuestions() {
  return (
    <div className="max-w-7xl mx-auto space-y-12 md:space-y-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-10 md:pb-20 px-4 sm:px-6">
      
      {/* 1. HERO SECTION */}
      <section className="space-y-4 text-center md:text-left pt-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-600 text-[10px] font-black uppercase tracking-[0.2em]">
           <Award className="w-3 h-3" /> Career Excellence
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          Interview <span className="text-amber-600">Mastery</span>
        </h1>
        <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-3xl font-medium mx-auto md:mx-0">
          Prepare for Senior-level positions with scenario-based logic and architectural deep-dives.
        </p>
      </section>

      {/* 2. QUESTION LIST */}
      <div className="space-y-6">
        {INTERVIEW_DATA.map((item, index) => (
          <div key={index} className="group p-6 md:p-10 bg-white border border-slate-100 rounded-[2rem] md:rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 font-black text-xl">
                  {index + 1}
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg md:text-xl font-black text-slate-900 leading-tight">
                    {item.q}
                  </h3>
                  <span className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold rounded-full uppercase tracking-tighter">
                    {item.level}
                  </span>
                </div>
                <div className="flex gap-3">
                  <div className="mt-1"><MessageSquare className="w-5 h-5 text-amber-500" /></div>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 3. MASTER TIP: SYSTEM DESIGN */}
      <div className="p-8 md:p-12 bg-slate-900 rounded-[2.5rem] md:rounded-[4rem] text-white relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] -mr-40 -mt-40 transition-all duration-700 group-hover:bg-amber-500/20"></div>
        <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-24 h-24 bg-amber-500 rounded-[2.5rem] flex items-center justify-center flex-shrink-0 shadow-2xl shadow-amber-500/40 rotate-3 group-hover:rotate-0 transition-transform duration-500">
                <HelpCircle className="w-12 h-12 text-white" />
            </div>
            <div className="space-y-6 text-center lg:text-left">
                <h5 className="font-black uppercase tracking-[0.4em] text-xs text-amber-400">Architectural Thinking</h5>
                <h4 className="text-3xl md:text-4xl font-bold leading-tight">Think Beyond the Code</h4>
                <p className="text-slate-400 text-sm md:text-lg leading-relaxed font-medium">
                  In master-level interviews, don't just explain <strong>how</strong> a feature works. Explain <strong>why</strong> you chose it over alternatives. Talk about trade-offs: "I used Redis here because latency was critical, even though it added complexity to our infrastructure."
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                  {['Scalability', 'Maintainability', 'Observability', 'Security'].map(tag => (
                    <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-amber-100">
                      {tag}
                    </span>
                  ))}
                </div>
            </div>
        </div>
      </div>

      {/* 4. FINAL ADVICE */}
      <div className="flex items-start gap-6 p-8 bg-amber-50 border border-amber-100 rounded-[2.5rem]">
         <div className="hidden sm:flex p-4 bg-white rounded-2xl shadow-sm flex-shrink-0">
            <Coffee className="w-8 h-8 text-amber-600" />
         </div>
         <div className="space-y-2">
            <h5 className="font-black text-amber-900 mb-1 uppercase tracking-tighter">A Day Before the Interview</h5>
            <p className="text-sm text-amber-800 leading-relaxed font-medium">
                Focus on <strong>Spring Security</strong> and <strong>Multithreading</strong> (Virtual Threads in Java 21). These are the topics that separate the top 1% of developers from the rest. Good luck, Master!
            </p>
         </div>
      </div>

    </div>
  );
}