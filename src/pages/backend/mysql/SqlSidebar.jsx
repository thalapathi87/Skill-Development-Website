import React, { useState } from 'react';
import { 
  Database, Layout, Key, Code, Filter, Calculator, 
  Sigma, GitMerge, Layers, Eye, TrendingUp, 
  Settings, Share2, Menu, X, HelpCircle, FileCode 
} from 'lucide-react';

const SqlSidebar = ({ activeTab, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'intro', name: 'SQL Introduction', icon: <Database size={18} /> },
    { id: 'normalization', name: 'Normalization', icon: <Layout size={18} /> },
    { id: 'commands', name: 'Core Commands', icon: <Code size={18} /> },
    { id: 'filtering', name: 'Filtering', icon: <Filter size={18} /> },
    { id: 'functions', name: 'SQL Functions', icon: <Calculator size={18} /> },
    { id: 'aggregates', name: 'Aggregates', icon: <Sigma size={18} /> },
    { id: 'joins', name: 'Joins Mastery', icon: <GitMerge size={18} /> },
    { id: 'subqueries', name: 'Subqueries', icon: <Layers size={18} /> },
    { id: 'views', name: 'Views & CTEs', icon: <Eye size={18} /> },
    { id: 'window', name: 'Window Functions', icon: <TrendingUp size={18} /> },
    { id: 'procedures', name: 'Stored Procedures', icon: <Settings size={18} /> },
    { id: 'integration', name: 'Data Integration', icon: <Share2 size={18} /> },
    { id: 'queries', name: 'Important Queries', icon: <FileCode size={18} /> },
    { id: 'interview', name: 'Interview Q&A', icon: <HelpCircle size={18} /> },
  ];

  const handleSelect = (id) => {
    onSelect(id);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="lg:hidden fixed top-20 left-4 z-[100]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 bg-cyan-600 text-white rounded-md shadow-xl border border-cyan-400"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <div className={`
        fixed inset-y-0 left-0 z-[95] w-64 bg-slate-900 text-slate-300 flex flex-col border-r border-slate-800 
        transition-transform duration-300 ease-in-out transform
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:translate-x-0 lg:static h-full
      `}>
        
        {/* Logo Section - added flex-shrink-0 */}
        <div className="p-6 mt-20 lg:mt-0 border-b border-slate-800/50 flex-shrink-0">
          <h2 className="text-xl font-black text-cyan-400 tracking-tighter italic">SQL MASTER</h2>
          <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Advanced Backend</p>
        </div>

        {/* Navigation - Added flex-grow and overflow-y-auto */}
        <nav className="flex-grow overflow-y-auto scrollbar-hide p-3 space-y-1">
          {menuItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleSelect(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all mb-1 ${
                  isActive 
                  ? 'bg-cyan-600 text-white font-bold shadow-lg' 
                  : 'hover:bg-slate-800 hover:text-white text-slate-400'
                }`}
              >
                {item.icon}
                <span className="text-sm tracking-tight">{item.name}</span>
              </button>
            );
          })}
          {/* Bottom Padding for Mobile view visibility */}
          <div className="h-100 lg:hidden"></div>
        </nav>
      </div>
    </>
  );
};

export default SqlSidebar;