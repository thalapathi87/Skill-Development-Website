import React, { useState } from 'react';
import { 
  Info, Box, Layers, RefreshCw, Zap, 
  Split, List, Clipboard, Map, Clock,
  Menu, X ,HelpCircle
} from 'lucide-react';

const ReactSidebar = ({ activeTab, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'intro', name: 'React Intro', icon: <Info size={18} /> },
    { id: 'components', name: 'Components', icon: <Box size={18} /> },
    { id: 'props', name: 'Props', icon: <Layers size={18} /> },
    { id: 'state', name: 'State', icon: <RefreshCw size={18} /> },
    { id: 'hooks', name: 'Hooks', icon: <Zap size={18} /> },
    { id: 'events', name: 'Events', icon: <Zap size={18} /> },
    { id: 'conditional', name: 'Conditional', icon: <Split size={18} /> },
    { id: 'lists', name: 'Lists & Keys', icon: <List size={18} /> },
    { id: 'forms', name: 'Forms', icon: <Clipboard size={18} /> },
    { id: 'routing', name: 'Routing', icon: <Map size={18} /> },
    { id: 'lifecycle', name: 'Lifecycle', icon: <Clock size={18} /> },
    { id: 'interview', name: 'Interview FAQ', icon: <HelpCircle size={18} /> },

  ];

  const handleItemClick = (id) => {
    onSelect(id);
    setIsOpen(false); // Mobile-la click panna sidebar close aaganum
  };

  return (
    <>
      {/* Mobile Toggle Button - Desktop-la hide aydum */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-sky-600 text-white rounded-md shadow-lg"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Background Overlay for Mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-40
        w-64 h-screen bg-slate-50 border-r border-gray-200 overflow-y-auto py-6
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="px-6 mb-8">
          <h2 className="text-xl font-bold text-sky-600">React Core</h2>
          <p className="text-xs text-slate-400 font-medium">Learn Step by Step</p>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`w-full flex items-center px-6 py-3 transition-all duration-200 group
                  ${isActive 
                    ? 'bg-white text-sky-600 rounded-r-full shadow-sm border-l-4 border-sky-500 mr-4' 
                    : 'text-slate-500 hover:bg-slate-100'}`}
              >
                <span className={`mr-4 ${isActive ? 'text-sky-600' : 'text-slate-400 group-hover:text-slate-600'}`}>
                  {item.icon}
                </span>
                <span className={`text-sm font-semibold ${isActive ? 'font-bold' : ''}`}>
                  {item.name}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default ReactSidebar;