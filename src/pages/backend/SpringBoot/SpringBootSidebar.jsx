import React from "react";
import { BookOpen, Code, Terminal, Database, ShieldCheck, Cpu, Layout, Globe, Search, Settings,Zap } from "lucide-react";

const MENU_ITEMS = [
  { id: "intro", label: "1. Introduction", icon: <BookOpen className="w-4 h-4" /> },
  { id: "annotations", label: "2. Core Annotations", icon: <Code className="w-4 h-4" /> },
  { id: "controllers", label: "3. REST Controllers", icon: <Globe className="w-4 h-4" /> },
  { id: "req-res", label: "4. Request & Response", icon: <Terminal className="w-4 h-4" /> },
  { id: "validation", label: "5. Bean Validation", icon: <ShieldCheck className="w-4 h-4" /> },
  { id: "jpa", label: "6. JPA & Hibernate", icon: <Database className="w-4 h-4" /> },
  { id: "relationships", label: "7. Entity Relationships", icon: <Settings className="w-4 h-4" /> },
  { id: "interview", label: "8. Interview Q&A", icon: <Search className="w-4 h-4" /> },
  { id: "exception", label: "9. Global Exceptions", icon: <Cpu className="w-4 h-4" /> },
  { id: "security", label: "10. Spring Security", icon: <ShieldCheck className="w-4 h-4" /> },
  { id: "jwt", label: "11. JWT Auth", icon: <Layout className="w-4 h-4" /> },
  { id: "deployment", label: "12. Deployment", icon: <Zap className="w-4 h-4" /> },
];

export default function SpringBootSidebar({ activeTopic, setActiveTopic }) {
  return (
    <div className="p-6 space-y-8">
      <div className="flex items-center gap-3 px-2">
        <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center shadow-lg shadow-green-200">
          <Zap className="text-white w-5 h-5 fill-current" />
        </div>
        <h2 className="text-xl font-black text-slate-900 tracking-tighter uppercase">Spring Master</h2>
      </div>

      <nav className="space-y-1">
        {MENU_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTopic(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 ${
              activeTopic === item.id
                ? "bg-green-600 text-white shadow-md shadow-green-100 scale-[1.02]"
                : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
            }`}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
}