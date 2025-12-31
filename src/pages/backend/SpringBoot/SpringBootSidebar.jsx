import React, { useState } from "react";
import { 
  BookOpen, Code, Terminal, Database, ShieldCheck, 
  Cpu, Layout, Globe, Search, Settings, Zap, Menu, X 
} from "lucide-react";

// DATA ARRAY - Function-ku mela irukanum
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
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (id) => {
    setActiveTopic(id);
    setIsOpen(false);
  };

  return (
    <>
      {/* 1. MOBILE TOGGLE BAR - Fixed position directly below main Navbar */}
      {/* top-16 assumes your SkillsDev navbar is 64px high */}
      <div className="lg:hidden fixed top-16 left-0 w-full flex items-center justify-between p-4 bg-white border-b z-[50] shadow-sm">
        <div className="flex items-center gap-2">
          <Zap className="text-green-600 w-5 h-5 fill-current" />
          <span className="font-black text-slate-900 tracking-tighter uppercase text-xs">Spring Master</span>
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg bg-slate-100 text-slate-600 active:scale-95 transition-transform"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* 2. OVERLAY for Mobile - Higher z-index to cover content but not Sidebar */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/40 z-[55] lg:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* 3. MAIN SIDEBAR - Fixed and Scrollable internally */}
      <aside className={`
        fixed left-0 z-[60] 
        top-16 lg:top-16 
        h-[calc(100vh-64px)] 
        w-72 bg-white border-r transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        overflow-y-auto no-scrollbar
      `}>
        <div className="p-6 space-y-8 pt-20 lg:pt-6">
          {/* Desktop Logo Only */}
          <div className="hidden lg:flex items-center gap-3 px-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center shadow-lg shadow-green-200">
              <Zap className="text-white w-5 h-5 fill-current" />
            </div>
            <h2 className="text-xl font-black text-slate-900 tracking-tighter uppercase">Spring Master</h2>
          </div>

          <nav className="space-y-1">
            {MENU_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 ${
                  activeTopic === item.id
                    ? "bg-green-600 text-white shadow-md shadow-green-100"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <span className={activeTopic === item.id ? "text-white" : "text-green-600"}>
                  {item.icon}
                </span>
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* 4. SPACER - Desktop-la fixed sidebar content-ah maraikaama irukka */}
      <div className="hidden lg:block w-72 shrink-0" />
      
      {/* 5. MOBILE SPACER - Mobile-la fixed header content-ah maraikaama irukka */}
      <div className="lg:hidden h-14" />
    </>
  );
}