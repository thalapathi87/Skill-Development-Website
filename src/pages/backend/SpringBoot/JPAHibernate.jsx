import React from "react";
import { Database, Share2, Code2, Info, Cpu, Zap } from "lucide-react";

const JPA_CONCEPTS = [
  { 
    title: "Entity", 
    desc: "A lightweight persistence domain object. Typically, an Entity represents a table in a relational database.",
    icon: <Database className="text-orange-600" />
  },
  { 
    title: "Repository", 
    desc: "An interface that provides CRUD operations. Spring generates the implementation at runtime.",
    icon: <Share2 className="text-blue-600" />
  },
  { 
    title: "JPQL", 
    desc: "Java Persistence Query Language. It allows you to write queries against entities instead of SQL tables.",
    icon: <Cpu className="text-purple-600" />
  }
];

export default function JPAHibernate() {
  return (
    <div className="max-w-7xl mx-auto space-y-12 md:space-y-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-10 md:pb-20 px-4 sm:px-6">
      
      {/* 1. HERO SECTION */}
      <section className="space-y-4 text-center md:text-left pt-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-[10px] font-black uppercase tracking-[0.2em]">
           <Zap className="w-3 h-3" /> Persistence Layer
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          JPA & <span className="text-orange-600">Hibernate</span>
        </h1>
        <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-3xl font-medium mx-auto md:mx-0">
          ORM (Object-Relational Mapping) allows us to interact with a database using Java objects instead of writing complex SQL queries manually.
        </p>
      </section>

      {/* 2. CORE COMPONENTS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {JPA_CONCEPTS.map((item) => (
          <div key={item.title} className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 group">
            <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-3">{item.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed font-medium italic">
                {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* 3. MASTER CODE: ENTITY & REPOSITORY */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-slate-400 px-2 font-bold text-xs uppercase tracking-widest">
            <Code2 className="w-4 h-4" /> Production Entity Pattern
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Entity Code */}
            <div className="bg-[#0f172a] rounded-[2rem] p-6 md:p-10 shadow-xl overflow-hidden">
                <div className="text-[10px] font-bold text-slate-500 mb-4 uppercase tracking-widest">UserEntity.java</div>
                <pre className="font-mono text-xs text-orange-300 leading-relaxed overflow-x-auto no-scrollbar">
                    <code>
                        <span className="text-orange-400">@Entity</span>{"\n"}
                        <span className="text-orange-400">@Table</span>(name = <span className="text-amber-400">"users"</span>){"\n"}
                        <span className="text-orange-400">public class</span> User {"{"} {"\n"}
                        {"  "}<span className="text-orange-400">@Id</span>{"\n"}
                        {"  "}<span className="text-orange-400">@GeneratedValue</span>(strategy = GenerationType.IDENTITY){"\n"}
                        {"  "}<span className="text-orange-400">private</span> Long id;{"\n\n"}
                        {"  "}<span className="text-orange-400">@Column</span>(unique = <span className="text-orange-400">true</span>, nullable = <span className="text-orange-400">false</span>){"\n"}
                        {"  "}<span className="text-orange-400">private</span> String email;{"\n"}
                        {"}"}
                    </code>
                </pre>
            </div>
            {/* Repository Code */}
            <div className="bg-[#0f172a] rounded-[2rem] p-6 md:p-10 shadow-xl overflow-hidden">
                <div className="text-[10px] font-bold text-slate-500 mb-4 uppercase tracking-widest">UserRepository.java</div>
                <pre className="font-mono text-xs text-blue-300 leading-relaxed overflow-x-auto no-scrollbar">
                    <code>
                        <span className="text-orange-400">@Repository</span>{"\n"}
                        <span className="text-orange-400">public interface</span> UserRepository {"\n"}
                        {"  "} <span className="text-orange-400">extends</span> JpaRepository&lt;User, Long&gt; {"{"} {"\n\n"}
                        {"  "}<span className="text-slate-500">// Custom Query Method</span>{"\n"}
                        {"  "}Optional&lt;User&gt; <span className="text-blue-400">findByEmail</span>(String email);{"\n\n"}
                        {"  "}<span className="text-slate-500">// Native Query Example</span>{"\n"}
                        {"  "}<span className="text-orange-400">@Query</span>(value = <span className="text-amber-400">"SELECT * FROM users"</span>, nativeQuery = <span className="text-orange-400">true</span>){"\n"}
                        {"  "}List&lt;User&gt; <span className="text-blue-400">findAllRaw</span>();{"\n"}
                        {"}"}
                    </code>
                </pre>
            </div>
        </div>
      </section>

      {/* 4. MASTER ARCHITECTURE: PERSISTENCE CONTEXT */}
      <div className="p-8 md:p-12 bg-slate-900 rounded-[2.5rem] md:rounded-[3rem] text-white relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-20 h-20 bg-orange-600 rounded-[2rem] flex items-center justify-center flex-shrink-0 shadow-xl shadow-orange-500/20">
                <Database className="w-10 h-10 text-white" />
            </div>
            <div className="space-y-4">
                <h5 className="font-black uppercase tracking-[0.3em] text-[10px] text-orange-400">Advanced Concept</h5>
                <h4 className="text-2xl md:text-3xl font-bold">The Persistence Context</h4>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed font-medium">
                  At a master level, understand that Hibernate doesn't just sync with the DB immediately. It uses a <strong>First-Level Cache</strong> (Persistence Context). Any changes made to an entity during a transaction are tracked. Hibernate performs a "Dirty Check" and only executes the SQL <code>UPDATE</code> when the transaction is committed.
                </p>
            </div>
        </div>
      </div>

      {/* 5. INTERVIEW PRO TIP */}
      <div className="p-8 bg-orange-50 border border-orange-100 rounded-[2.5rem] flex items-start gap-6">
          <div className="p-4 bg-white rounded-2xl shadow-sm text-orange-600 flex-shrink-0">
            <Info className="w-8 h-8" />
          </div>
          <div>
            <h5 className="font-black text-orange-900 mb-2 uppercase tracking-tighter">Interview Insight</h5>
            <p className="text-sm text-orange-800 leading-relaxed font-medium">
                When asked about <strong>N+1 Problem</strong>: Explain that it occurs when Hibernate executes 1 query to fetch a list of entities and then N additional queries to fetch their related data. Master-level developers solve this using <code>@EntityGraph</code> or <code>JOIN FETCH</code> in their queries.
            </p>
          </div>
      </div>

    </div>
  );
}